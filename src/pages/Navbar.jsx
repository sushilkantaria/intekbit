import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // Service dropdown grid as a separate JSX componen
  const ServicesDropdownGrid = () => (
    <div className="grid grid-cols-4 gap-x-12 gap-y-8 px-8 py-7 min-w-[1000px] max-w-[1100px] rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.45),0_1.5px_8px_0_rgba(59,130,246,0.18),0_0_0_8px_rgba(255,255,255,0.28),0_0_0_16px_rgba(255,255,255,0.18)] border border-white text-left absolute left-1/2 -translate-x-1/2 bg-black">
      {servicesList.map((service, idx) => (
        <div key={idx} className="col-span-1 w-full">
          <Link
            to={service.path}
            className="w-full flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-gray-700 hover:border border-white transition-colors duration-200"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-lg text-2xl">
              {service.icon}
            </span>
            <span className="flex flex-col items-start">
              <span className="font-bold text-white text-base leading-tight whitespace-wrap">
                {service.label}
              </span>
              <span className="text-xs text-gray-300 mt-1 leading-tight">
                {service.desc}
              </span>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
  const servicesList = [
    {
      path: '/aiml-solutions',
      label: 'AI/ML',
      icon: '🤖',
      desc: 'Machine learning & AI solutions',
    },
    {
      path: '/app-development',
      label: 'App Development',
      icon: '📱',
      desc: 'Mobile & cross-platform apps',
    },
    {
      path: '/cloud-services',
      label: 'Cloud Services',
      icon: '☁️',
      desc: 'Cloud migration & management',
    },
    {
      path: '/data-services',
      label: 'Data Services',
      icon: '📊',
      desc: 'Data analytics & engineering',
    },
    {
      path: '/it-consulting',
      label: 'IT Consulting',
      icon: '💼',
      desc: 'Expert IT guidance',
    },
    {
      path: '/software-development',
      label: 'Software Development',
      icon: '💻',
      desc: 'Custom software solutions',
    },
    {
      path: '/web-development',
      label: 'Web Development',
      icon: '🌐',
      desc: 'Modern web experiences',
    },
    {
      path: '/uiux-design',
      label: 'UI/UX Design',
      icon: '🎨',
      desc: 'User interface & experience',
    },
    {
      path: '/graphic-designing',
      label: 'Graphic Designing',
      icon: '🖌️',
      desc: 'Branding & visual design',
    },
    {
      path: '/support-maintenance',
      label: 'Support & Maintenance',
      icon: '🛠️',
      desc: 'Ongoing support & care',
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  // Handle home link click to scroll to top when already on home page
  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="w-full fixed top-0 left-0 z-40 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 md:px-8 py-2 md:py-3 relative">
        <div
          className="flex items-center min-w-[100px] sm:min-w-[120px] backdrop-blur-lg backdrop-saturate-150"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <Link to="/" onClick={handleHomeClick}>
            <img
              src="/Assets/footer-logo.webp"
              alt="Intekbitlogo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>
        {/* Desktop Nav */}
        <div
          className="hidden md:flex flex-1 justify-center"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <ul className="flex gap-4 sm:gap-8 items-center px-2 sm:px-8 py-2 rounded-full max-w-xl w-full justify-center shadow-[0_2px_12px_0_rgba(30,58,138,0.13),0_1px_8px_0_rgba(136,19,55,0.10),0_1px_6px_0_rgba(202,138,4,0.08),0_1px_4px_0_rgba(6,78,59,0.08),inset_0_2px_16px_0_rgba(255,255,255,0.10),inset_0_0_12px_2px_rgba(255,255,255,0.07),inset_0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-lg backdrop-saturate-150">
            <li>
              <Link
                to="/"
                className="text-white font-semibold text-sm sm:text-base md:text-lg hover:text-gray-600 transition-colors"
                data-aos="fade-down"
                onClick={handleHomeClick}
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <button
                className="text-white font-semibold text-sm sm:text-base md:text-lg hover:text-gray-600 transition-colors focus:outline-none flex items-center gap-1"
                type="button"
              >
                Services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="absolute left-0  top-full mt-2 min-w-[180px] rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50 ">
                <ServicesDropdownGrid />
              </ul>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-white font-semibold text-sm sm:text-base md:text-lg hover:text-gray-600 transition-colors"
                data-aos="fade-down"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white font-semibold text-sm sm:text-base md:text-lg hover:text-gray-600 transition-colors"
                data-aos="fade-down"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* Desktop Contact Button */}
        <div
          className="hidden md:flex min-w-[100px] sm:min-w-[120px] justify-end items-center"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className="relative w-fit">
            <Link
              to="/contact"
              className="peer inline-flex items-center relative px-4 sm:px-6 py-2 text-white rounded-3xl transition shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] font-semibold text-center z-10 gap-2 backdrop-blur-lg backdrop-saturate-150"
            >
              <span>Contact Us</span> <span className="ml-1">&rarr;</span>
            </Link>
            <div className="absolute inset-0 opacity-0 peer-hover:opacity-100 rounded-3xl z-0 pointer-events-none shadow-[-4px_0_8px_4px_rgb(255,0,128),4px_0_8px_4px_rgb(0,98,255)] transition duration-800" />
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-2 sm:ml-4 text-2xl sm:text-3xl text-white"
          onClick={toggleMenu}
          aria-label="Open menu"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <span className="sr-only">Open menu</span> &#9776;
        </button>
      </div>
      {/* Mobile Nav */}
      {isMenuOpen && (
        <ul
          className="md:hidden w-full flex flex-col gap-2 sm:gap-4 p-4 z-50 rounded-2xl animate-fadeIn text-white backdrop-blur-lg backdrop-saturate-150 items-center shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] relative group"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          {['/', '/services', '/blog', '/about', '/contact'].map(
            (path, index) => {
              let label;
              if (path === '/') {
                label = 'Home';
              } else {
                const str = path.slice(1).replace('-', ' ');
                label = str.charAt(0).toUpperCase() + str.slice(1);
              }
              return (
                <li key={index} className="w-full flex justify-center">
                  <Link
                    to={path}
                    className={`block w-full text-center py-2 rounded-lg font-semibold text-base ${
                      path === '/contact'
                        ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 text-white shadow-[inset_0_0_16px_4px_rgba(59,130,246,0.5),inset_0_0_32px_8px_rgba(99,102,241,0.3)]'
                        : 'text-gray-100 hover:text-blue-400'
                    }`}
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      if (path === '/') {
                        handleHomeClick(e);
                      }
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
