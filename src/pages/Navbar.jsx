import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-4 md:px-8 py-2 md:py-3 relative">
        {/* Logo Section */}
        <div className="flex items-center min-w-[120px]">
          <Link to="/">
            <img
              src="/Assets/footer-logo.webp"
              alt="Intekbitlogo"
              className="h-10 w-auto"
            />
          </Link>
        </div>
        {/* Center Section - pill nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8 items-center px-8 py-2 rounded-full shadow-lg backdrop-blur-md border border-gray-200 max-w-xl w-full justify-center">
            <li>
              <Link
                to="/"
                className="text-white font-semibold text-base md:text-lg hover:text-gray-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white font-semibold text-base md:text-lg hover:text-gray-600 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white font-semibold text-base md:text-lg hover:text-gray-600 transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us Section (right) */}
        <div className="hidden md:flex min-w-[120px] justify-end items-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 text-white px-6 py-2 rounded-full shadow-md font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all"
          >
            Contact Us
            <span className="ml-1">&rarr;</span>
          </Link>
        </div>
        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden ml-4 text-3xl"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <span className="sr-only">Open menu</span>
          &#9776;
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="md:hidden w-full shadow-lg flex flex-col gap-2 p-4 z-50 rounded-b-xl animate-fadeIn">
          <li>
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-800 hover:text-blue-600 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-600 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 text-white px-4 py-2 rounded-full font-semibold shadow-md mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
