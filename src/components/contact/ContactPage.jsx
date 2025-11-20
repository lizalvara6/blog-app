import React from 'react'
import Footer from '../common/Footer'

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 flex flex-col">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Contact Us</h1>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-md sm:max-w-lg mx-auto">
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input type="text" name="name" className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
            
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input type="email" name="email" className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
            
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea name="message" rows="4" className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" />
            </div>
            
            <button type="submit" className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm sm:text-base font-medium">Submit</button>
          </form>
        </div>
        <Footer />
    </div>
  );
}

export default ContactPage