import React from 'react';
import { Link } from 'react-router';

function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-lg text-center">
            <h1 className="text-4xl font-bold mb-4">My Blog</h1>
            <nav>
                <ul className="flex space-x-6 justify-center">
                    <li><Link to="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
                    <li><Link to="/blogpost" className="hover:text-blue-200 transition-colors">Blog Posts</Link></li>
                    <li><Link to="/about" className="hover:text-blue-200 transition-colors">About</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link></li>
                </ul>
            </nav>  
    </header>
    );
}

export default Header;