import { Route, Routes } from 'react-router';
import IndividualBlogPost from './components/blog/IndividualBlogPost.jsx';
import Navbar from './components/blog/Navbar.jsx';
import HomePage from './components/blog/HomePage.jsx';
import BlogPostPage from './components/blog/BlogPostsPage.jsx';
import ContactPage from './components/contact/ContactPage.jsx';


import Login from "./components/auth/Login.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthContext";




function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogpost" element={<BlogPostPage />} />
          <Route path="/blogpost/:id" element={<IndividualBlogPost />} />
          <Route path="/contact" element={<ContactPage />} />

        
          <Route path="/login" element={<Login />} />

        
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <div>Secret Page</div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;