import React, { useState, useEffect, useActionState } from 'react'
import { useParams, Link } from 'react-router'
import axios from 'axios'
import Footer from '../common/Footer'
import Content from './Content'
import CommentForm from './CommentForm'
// Import useAuth to access authentication state for conditional rendering
import { useAuth } from '../../context/AuthContext'

function IndividualBlogPost() {
  // Use useParams from React Router to get the postId from the URL
  const params = useParams();
  // Get current user from AuthContext to check if user is logged in
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [postContent, setPostContent] = useState(null);
  const [userData, setUserData] = useState(null);
  const [comments, setComments] = useState([]); //added

  console.log(params);

  useEffect(() => {
    // Use that to dynamically fetch a blog post based on the post ID in the URL
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        console.log(res);
        const postData = res.data;

        // Fetch the User associated with the post
        return axios.get(`https://jsonplaceholder.typicode.com/users/${postData.userId}`)
          .then((userRes) => {
            console.log('User data:', userRes);
            
            // Display the full content of the post, including: Title and Body/Content
            // Store the post data (title and content) in state
            setPostContent({
              title: postData.title,    // Title
              content: postData.body,   // Body/Content
              userId: postData.userId,
              id: postData.id
            });
            
            // Display the user's name and any other details
            setUserData({
              name: userRes.data.name,
              email: userRes.data.email,
              username: userRes.data.username,
              website: userRes.data.website,
              phone: userRes.data.phone
            });
            
            setLoading(false);
          });
      })
      .catch((e) => {
        alert('There was an error processing your request');
        setLoading(false);
      });
  }, [params.id]);

//added for comments

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
      .then((res) => {
        console.log("Comments:", res.data);
        setComments(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setComments([]);
      });
  }, [params.id]);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          {loading ? (
            <p>Loading...</p>
          ) : postContent && userData ? (
            <>
              {/* Render the post content (Title and Body/Content) */}
              <Content
                title={postContent.title}     // Title
                content={postContent.content} // Body/Content
                date={new Date().toISOString().split('T')[0]}
                author={userData.name}        // User's name
              />
              
              {/* Display the user's name, and any other details you feel necessary (e.g., email) */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">About the Author</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><strong>Name:</strong> {userData.name}</p>          {/* User's name */}
                  <p><strong>Username:</strong> {userData.username}</p>
                  <p><strong>Email:</strong> {userData.email}</p>        {/* Email - other necessary detail */}
                  {userData.website && <p><strong>Website:</strong> {userData.website}</p>}
                  {userData.phone && <p><strong>Phone:</strong> {userData.phone}</p>}
                </div>
              </div>
              
              
              {/*Comments Section */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Comments</h3>

                {comments.length > 0 ? (
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
                      >
                        <p className="font-semibold text-sm text-gray-700">{comment.name}</p>
                        <p className="text-xs text-gray-500 mb-2">{comment.email}</p>
                        <p className="text-gray-700 text-sm">{comment.body}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">
                    No comments yet. Be the first to comment!
                  </p>
                )}
              </div>
              
              {/* Conditional Rendering: Comment Form only visible to logged-in users */}
              {/* If user is logged in (user exists), show the CommentForm */}
              {user ? (
                <CommentForm 
                  postId={params.id} 
                  onAddComment={(newComment) => setComments((prev) => [...prev, newComment])} 
                />
              ) : (
                /* If user is NOT logged in (user is null), display message prompting them to login */
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800">
                    Please <Link to="/login" className="font-semibold underline hover:text-blue-900">login</Link> to leave a comment.
                  </p>
                </div>
              )}
            </>
          ) : (
            <p>Post not found</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndividualBlogPost
