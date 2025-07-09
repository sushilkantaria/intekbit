import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on route change
  useState(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2 md:py-3 relative">
        {/* Logo */}
        <div
          className="flex items-center min-w-[120px]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <Link to="/">
            <img
              src="/Assets/footer-logo.webp"
              alt="Intekbitlogo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Middle Nav */}
        <div
          className="hidden md:flex flex-1 justify-center"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <ul
            className="flex gap-8 items-center px-8 py-2 rounded-full shadow-lg backdrop-blur-md max-w-xl w-full justify-center"
            style={{
              border: '1.5px solid rgba(255,255,255,0.35)',
              boxShadow:
                '0 2px 12px 0 rgba(30,58,138,0.13), 0 1px 8px 0 rgba(136,19,55,0.10), 0 1px 6px 0 rgba(202,138,4,0.08), 0 1px 4px 0 rgba(6,78,59,0.08), inset 0 2px 16px 0 rgba(255,255,255,0.10), inset 0 0 12px 2px rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.05)',
              backdropFilter: 'blur(18px) saturate(180%)',
              WebkitBackdropFilter: 'blur(18px) saturate(180%)',
            }}
          >
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/blog', label: 'Blog' },
              { path: '/career', label: 'Career' },
              { path: '/about', label: 'About Us' },
            ].map(({ path, label }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-white font-semibold text-base md:text-lg hover:text-gray-600 transition-colors"
                  data-aos="fade-down"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Button */}
        <div
          className="hidden md:flex min-w-[120px] justify-end items-center"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 text-white px-6 py-2 rounded-full shadow-md font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all"
          >
            Contact Us <span className="ml-1">&rarr;</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-4 text-3xl"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <span className="sr-only">Open menu</span> &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden w-full shadow-lg flex flex-col gap-2 p-4 z-50 rounded-b-xl animate-fadeIn bg-white">
          {[
            { path: '/', label: 'Home' },
            { path: '/services', label: 'Services' },
            { path: '/about', label: 'About Us' },
            { path: '/contact', label: 'Contact Us' },
          ].map(({ path, label }) => (
            <li key={label}>
              <Link
                to={path}
                className={`${
                  label === 'Contact Us'
                    ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 text-white px-4 py-2 rounded-full shadow-md font-semibold'
                    : 'text-gray-800 hover:text-blue-600 font-semibold'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
