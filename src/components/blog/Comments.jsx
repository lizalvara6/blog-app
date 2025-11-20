import React from 'react';

function Comments() {
    return (
        <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
            
            <div className="mb-6">
                <textarea 
                    placeholder="Add a comment" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
                    rows="4"
                ></textarea>
                <button 
                    type="submit" 
                    className="mt-3 bg-yellow-400 px-6 py-2 rounded-full text-white hover:bg-yellow-500 transition-colors font-medium"
                >
                    Submit
                </button>
            </div>
            
            <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Existing Comments:</h3>
                <ul className="space-y-2">
                    <li className="text-gray-600">• Comment 1</li>
                    <li className="text-gray-600">• Comment 2</li>
                    <li className="text-gray-600">• Comment 3</li>
                </ul>
            </div>
        </div>
    );
}

export default Comments;