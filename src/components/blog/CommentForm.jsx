import { useState } from "react";
import React from "react";
import axios from "axios";

function CommentForm({ postId, onAddComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitting = (event) => {
    event.preventDefault();

    //  Ensure that the form inputs (name and comment) are validated before submission 
    if(!name.trim() || !comment.trim()){
        setError("Please fill all fields.");
        return;
    }

    setError("");
    setLoading(true);

    // Upon submission, the comment should be posted to the API using the POST
    axios
      .post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
        name: name,
    body: comment,
    email: `${name.replace(/\s+/g, "").toLowerCase()}@example.com`,
    postId: postId
      })
      .then((response) => {
        // After the comment is posted successfully, update the comment list with the new comment
        if (onAddComment) {
          onAddComment(response.data);
        }

        // Clear input fields
        setName("");
        setComment("");
      })
      .catch((err) => {
        console.error("Error posting comment:", err);
        setError("Failed to post the comment. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="border-t border-gray-200 pt-8 mt-8">
      <div className="p-6 rounded-3xl shadow-md p-8 max-w-lg mx-auto backdrop-blur-sm">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        Comment Form
      </h2>

      {error && <p className="text-red-500 mb-2 text-sm sm:text-base fontt-medium">{error}</p>}

      {/* Implement a comment form where users can submit their name and comment */}
      <form onSubmit={submitting} className="mb-6 space-y-5">
        {/* Name input field */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-yellow-300 transition-colors placeholder-gray-400"
        />

        {/* Comment input field */}
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-yellow-300 transition-colors placeholder-gray-400"
          rows={4}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-yellow-400 px-6 py-3 rounded-full text-white shadow-md hover:bg-yellow-500 transition-colors font-medium"
        >
          {loading ? "Posting..." : "Submit!"}
        </button>
      </form>
    </div>
    </div>
  );
}

export default CommentForm;