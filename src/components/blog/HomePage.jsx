import React from 'react'
import { Link } from 'react-router'
import Footer from '../common/Footer'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow max-w-4xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Welcome to the Blog Hub</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">A space where ideas come alive. <br /> Explore curated posts, creative thoughts, and stories worth reading.</p>
        
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Recent Posts</h2>
          <ul className="space-y-3 sm:space-y-4">
            <li className="border-b border-gray-200 pb-3 sm:pb-4">
              <Link to="/blogpost/1" className="text-lg sm:text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors block">My First Blog Post</Link>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">October 1, 2023</p>
            </li>
            <li className="border-b border-gray-200 pb-3 sm:pb-4">
              <Link to="/blogpost/2" className="text-lg sm:text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors block">Learning React</Link>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">October 15, 2023</p>
            </li>
            <li className="border-b border-gray-200 pb-3 sm:pb-4">
              <Link to="/blogpost/3" className="text-lg sm:text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors block">The Power of Components</Link>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">October 28, 2023</p>
            </li>
          </ul>
          
          <div className="mt-4 sm:mt-6">
            <Link to="/blogpost" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm sm:text-base inline-block">View All Posts</Link>
          </div>
        </div>

        {/* Login Card Basic Styling added (CHANGE!) */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mt-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">Join the Conversation</h3>
          <p className="text-gray-600 mb-4">Create an account or sign in to unlock personalized content, save your favorite posts, and connect with our community of writers and readers.</p>
          <Link to="/login" className="inline-block bg-gray-800 text-white px-6 py-2.5 rounded-lg hover:bg-gray-700 transition-colors font-medium">Sign In</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage