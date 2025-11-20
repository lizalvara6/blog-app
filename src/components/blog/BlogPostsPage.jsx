// Import useState and useEffect
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Footer from '../common/Footer'

function BlogPostsPage() {
  // useState declaration
  const [posts, setPosts] = useState([]);

  // Fetch the list of blog posts from the API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-10  tracking-tight">All Blog Posts</h1>
        <div className="space-y-4 sm:space-y-6">

          {posts.map(post => (
            <div key={post.id} className="grid gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">

              {/* Blog post title with link */}
              <h2 
              className="text-xl sm:text-2xl font-bold mb-3">
                <Link to={`/blogpost/${post.id}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                  {post.title}  {/* Dynamic title */}
                </Link>
              </h2>

              {/* Author and date */}
              <p 
              className="text-gray-500 text-xs sm:text-sm mb-3">
                By User {post.userId} on {new Date().toLocaleDateString()}
              </p>

              {/* Content preview */}
              <p 
              className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {post.body}
              </p>
              
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPostsPage;