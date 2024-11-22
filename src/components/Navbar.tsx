import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Brain, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { user, signOut } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AI Platform</span>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/features" className="text-gray-700 hover:text-indigo-600">Features</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-indigo-600">Pricing</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
                <button
                  onClick={() => signOut()}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Sign In
              </Link>
            )}
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/features" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Features</Link>
            <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Pricing</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Dashboard</Link>
                <button
                  onClick={() => signOut()}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};