import React from 'react';
import { HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white pt-10 pb-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        <div className="flex-1 flex flex-col items-start mb-6 md:mb-0">
          <Link to="/">
            <img
              src="/Assets/footer-logo.webp"
              // ...existing code...
              className="h-10 sm:h-12 w-auto mb-2"
            />
          </Link>
          <p className="text-gray-300 text-sm sm:text-base">
            Driven by Technology, Powered by Trust.
          </p>
        </div>
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">
            Quick Links
          </h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-blue-400 text-sm sm:text-base">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 text-sm sm:text-base"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-blue-400 text-sm sm:text-base"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 text-sm sm:text-base"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[180px]">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">
            Contact Us
          </h3>
          <p className="flex items-center text-gray-300 text-sm sm:text-base mb-1">
            <HiPhone className="inline-block mr-3 h-5 w-5 text-white align-middle" />
            Phone: +91 88498 36407
          </p>
          <p className="flex items-center text-gray-300 text-sm sm:text-base mb-1">
            <HiEnvelope className="inline-block mr-3 h-5 w-5 text-white align-middle" />
            Email: support@intekbit.com
          </p>
          <p className="flex items-center text-gray-300 text-sm sm:text-base">
            <HiMapPin className="mr-3 h-10 w-10 text-white" />
            S-18/19, Laxmi Darshan Complex, Dabholi Road, Surat-395004
          </p>
        </div>
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">Follow Us</h3>
          <div className="flex gap-2 sm:gap-3 items-center flex-wrap">
            <a href="http://linkedin.com/company/intekbit-solutions">
              <img
                src="/Assets/footer-LinkedIn.webp"
                alt="LinkedIn"
                className="h-6 sm:h-7 w-6 sm:w-7"
              />
            </a>
            <a href="https://www.instagram.com/intekbit__solutions/">
              <img
                src="/Assets/footer-instagram.webp"
                alt="Instagram"
                className="h-6 sm:h-7 w-6 sm:w-7"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573434722653">
              <img
                src="/Assets/footer-facebook.webp"
                alt="Facebook"
                className="h-6 sm:h-7 w-6 sm:w-7"
              />
            </a>
            <a href="https://x.com/Intekbit">
              <img
                src="/Assets/footer-twitter.webp"
                alt="Twitter"
                className="h-6 sm:h-7 w-6 sm:w-7"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-6 text-gray-400 text-xs sm:text-sm">
        <Link to="/privacy-policy" className="hover:text-blue-400">
          Privacy Policy
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link to="/terms" className="hover:text-blue-400">
          Terms & Conditions
        </Link>
      </div>
      <div className="text-center text-gray-500 text-xs mt-2">
        <p>&copy; 2025 Intekbit Solutions Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
