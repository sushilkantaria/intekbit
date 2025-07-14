import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useState(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="w-full fixed top-0 left-0 z-999">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2 md:py-3 relative">
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
        <div
          className="hidden md:flex flex-1 justify-center"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <ul className="flex gap-8 items-center px-8 py-2 rounded-full max-w-xl w-full justify-center shadow-[0_2px_12px_0_rgba(30,58,138,0.13),0_1px_8px_0_rgba(136,19,55,0.10),0_1px_6px_0_rgba(202,138,4,0.08),0_1px_4px_0_rgba(6,78,59,0.08),inset_0_2px_16px_0_rgba(255,255,255,0.10),inset_0_0_12px_2px_rgba(255,255,255,0.07),inset_0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-lg backdrop-saturate-150">
            {/*
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/blog', label: 'Blog' },
              { path: '/career', label: 'Career' },
              { path: '/about', label: 'About Us' },
            */}
            {['/', '/services', '/blog', '/career', '/about'].map(
              (path, index) => {
                let label;
                if (path === '/') {
                  label = 'Home';
                } else {
                  const str = path.slice(1).replace('-', ' ');
                  label = str.charAt(0).toUpperCase() + str.slice(1);
                }
                return (
                  <li key={index}>
                    <Link
                      to={path}
                      className="text-white font-semibold text-base md:text-lg hover:text-gray-600 transition-colors"
                      data-aos="fade-down"
                    >
                      {label}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div
          className="hidden md:flex min-w-[120px] justify-end items-center"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className="relative w-fit">
            <Link
              to="/contact"
              className="peer inline-flex items-center relative px-6 py-2 text-white rounded-3xl transition shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] font-semibold text-center z-10 gap-2"
            >
              <span>Contact Us</span> <span className="ml-1">&rarr;</span>
            </Link>
            <div className="absolute inset-0 opacity-0 peer-hover:opacity-100 rounded-3xl z-0 pointer-events-none shadow-[-4px_0_8px_4px_rgb(255,0,128),4px_0_8px_4px_rgb(0,98,255)] transition duration-800" />
          </div>
        </div>
        <button
          className="md:hidden ml-4 text-3xl text-white"
          onClick={toggleMenu}
          aria-label="Open menu"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <span className="sr-only">Open menu</span> &#9776;
        </button>
      </div>
      {isMenuOpen && (
        <ul
          className="md:hidden w-full flex flex-col gap-4 p-4 z-999 rounded-2xl animate-fadeIn text-white backdrop-blur-lg backdrop-saturate-150 items-center shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] relative group"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          {['/', '/services', '/about', '/contact'].map((path, index) => {
            let label;
            if (path === '/') {
              label = 'Home';
            } else {
              const str = path.slice(1).replace('-', ' ');
              label = str.charAt(0).toUpperCase() + str.slice(1);
            }
            return (
              <li key={index}>
                <Link
                  to={path}
                  className={`$${
                    path === '/contact'
                      ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 text-white px-4 py-2 rounded-full font-semibold shadow-[inset_0_0_16px_4px_rgba(59,130,246,0.5),inset_0_0_32px_8px_rgba(99,102,241,0.3)]'
                      : 'text-gray-800 hover:text-blue-600 font-semibold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
