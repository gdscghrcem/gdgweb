import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { AuthButton } from './AuthButton';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const location = useLocation(); 

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-800">GDG</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-blue-600 ${
                isActive('/about') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/events"
              className={`hover:text-blue-600 ${
                isActive('/events') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              Events
            </Link>
            <Link
              to="/blog"
              className={`hover:text-blue-600 ${
                isActive('/blog') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/team"
              className={`hover:text-blue-600 ${
                isActive('/team') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className={`hover:text-blue-600 ${
                isActive('/contact') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              Contact
            </Link>
            {isAuthenticated ? (
              <AuthButton />
            ) : (
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Join Us
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 hover:text-blue-600 ${
                isActive('/about') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/events"
              className={`block px-3 py-2 hover:text-blue-600 ${
                isActive('/events') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              Events
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 hover:text-blue-600 ${
                isActive('/blog') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/team"
              className={`block px-3 py-2 hover:text-blue-600 ${
                isActive('/team') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 hover:text-blue-600 ${
                isActive('/contact') ? 'text-blue-600 font-bold' : 'text-gray-600'
              }`}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <AuthButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
