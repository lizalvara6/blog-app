import { Link } from 'react-router';
// Import useAuth to access authentication state
import { useAuth } from '../../context/AuthContext';
// Import LogoutButton to allow logged-in users to logout
import LogoutButton from '../auth/LogoutButton';

export default function Navbar() {
  // Get current user from AuthContext to check login status
  const { user } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 text-white py-8 shadow-lg sticky top-0 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 md:px-8">
        <div className="text-center md:text-left mb-3 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">My Blog</h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center text-sm md:text-base">
          <Link to="/" className="hover:text-blue-200 transition-colors py-1">Home</Link>
          <Link to="/blogpost" className="hover:text-blue-200 transition-colors py-1">Blog Posts</Link>
          <Link to="/about" className="hover:text-blue-200 transition-colors py-1">About</Link>
          <Link to="/contact" className="hover:text-blue-200 transition-colors py-1">Contact</Link>
          
          {/* Conditional Rendering based on authentication state */}
          {/* If user is logged in, show welcome message and logout button */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-blue-100 text-sm">Welcome, {user.name}!</span>
              <LogoutButton />
            </div>
          ) : (
            /* If user is NOT logged in, show login button */
            <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors font-semibold">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}