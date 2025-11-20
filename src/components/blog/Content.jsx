import React from 'react';

function Content({ title, content, author, date }) {
    return (
        <main className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-gray-700 leading-relaxed mb-6">{content}</p>
            <div className="text-gray-600 text-sm space-y-1">
                <p>
                    <strong>Author:</strong> {author}
                </p>
                <p>
                    <strong>Date:</strong> {date}
                </p>
            </div>
        </main>
    );
}

export default Content;