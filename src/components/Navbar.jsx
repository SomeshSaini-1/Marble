import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-700 p-4 shadow-md sticky top-0 z-50">
      <div className="container px-14 flex justify-between items-center">
        <div className="flex items-center space-x-2 animate-fade-in">
          <img src="/logo.png" alt="xAI Logo" className="h-[6rem]" />
        </div>
        <div className="space-x-6">
          <Link to="/" className="hover:border-b-2 pb-1 font-bold hover:border-b-blue-600 transition-colors duration-200">Home</Link>
          <Link to="#products" className="hover:border-b-2 pb-1 font-bold hover:border-b-blue-600 transition-colors duration-200">Products</Link>
          <Link to="#portfolio" className="hover:border-b-2 pb-1 font-bold hover:border-b-blue-600 transition-colors duration-200">Portfolio</Link>
          <Link to="/About" className="hover:border-b-2 pb-1 font-bold hover:border-b-blue-600 transition-colors duration-200">About</Link>
          <Link to="/Contectus" className="hover:border-b-2 pb-1 font-bold hover:border-b-blue-600 transition-colors duration-200">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;