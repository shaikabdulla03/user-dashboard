import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
            User Dashboard
          </Link>
          <nav className="flex space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md transition-colors ${
                location.pathname === '/' 
                  ? 'bg-blue-700' 
                  : 'hover:bg-blue-500'
              }`}
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
