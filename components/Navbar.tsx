import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Impact', path: '/impact' },
  { label: 'Transparency', path: '/transparency' },
  { label: 'Media', path: '/media' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-border bg-opacity-95 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
              <img 
                src="/logo.png" 
                alt="Sankalp Foundation" 
                className="h-24 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === link.path ? 'text-primary after:w-full' : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-5 py-2.5 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary bg-surface'
                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/donate"
            onClick={closeMenu}
            className="block w-full text-center mt-4 bg-gradient-to-r from-secondary to-primary text-white px-5 py-3 rounded-md font-bold shadow-md"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
