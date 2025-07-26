import React from 'react';
import { HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white pt-12 bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#1a2980] rounded-tr-[40px] rounded-tl-[40px]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col gap-10 md:gap-8 lg:gap-0 md:flex-row md:flex-wrap lg:flex-nowrap">
        {/* Logo & tagline */}
        <div className="flex-1 flex flex-col items-start mb-4 md:mb-0 min-w-[180px]">
          <Link to="/">
            <img
              src="/Assets/white-logo.png"
              className="h-10 sm:h-12 w-auto mb-2"
              alt="Intekbit Logo"
            />
          </Link>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-xs">
            Driven by Technology, Powered by Trust.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[140px] mb-4 md:mb-0">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">
            Quick Links
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 text-xs sm:text-sm md:text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 text-xs sm:text-sm md:text-base"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-blue-400 text-xs sm:text-sm md:text-base"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 text-xs sm:text-sm md:text-base"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div className="flex-1 min-w-[180px] mb-4 md:mb-0">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">
            Contact Us
          </h3>
          <p className="flex items-center text-gray-300 text-xs sm:text-sm md:text-base mb-1">
            <HiPhone className="inline-block mr-2 h-5 w-5 text-white align-middle" />
            <span className="break-all">Phone: +91 88498 36407</span>
          </p>
          <p className="flex items-center text-gray-300 text-xs sm:text-sm md:text-base mb-1">
            <HiEnvelope className="inline-block mr-2 h-5 w-5 text-white align-middle" />
            <span className="break-all">Email: support@intekbit.com</span>
          </p>
          <p className="flex items-start text-gray-300 text-xs sm:text-sm md:text-base">
            <HiMapPin className="mr-2 h-7 w-7 text-white mt-0.5" />
            <span className="break-words">
              S-18/19, Laxmi Darshan Complex, Dabholi Road, Surat-395004
            </span>
          </p>
        </div>
        {/* Social Links */}
        <div className="flex-1 min-w-[140px] mb-4 md:mb-0">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">Follow Us</h3>
          <div className="flex gap-2 sm:gap-3 items-center flex-wrap">
            <a
              href="http://linkedin.com/company/intekbit-solutions"
              aria-label="LinkedIn"
            >
              <img
                src="/Assets/footer-LinkedIn.webp"
                alt="LinkedIn"
                className="h-6 sm:h-7 w-6 sm:w-7"
              />
            </a>
            <a
              href="https://www.instagram.com/intekbit__solutions/"
              aria-label="Instagram"
            >
              <img
                src="/Assets/footer-instagram.webp"
                alt="Instagram"
                className="h-6 sm:h-7 w-6 sm:w-7"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573434722653"
              aria-label="Facebook"
            >
              <img
                src="/Assets/footer-facebook.webp"
                alt="Facebook"
                className="h-6 sm:h-7 w-6 sm:w-7"
              />
            </a>
            <a href="https://x.com/Intekbit" aria-label="Twitter">
              <img
                src="/Assets/footer-twitter.webp"
                alt="Twitter"
                className="h-6 sm:h-7 w-6 sm:w-7"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-white/10 my-6 mx-4 sm:mx-8" />
      {/* Policy Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 my-4 text-white text-xs sm:text-sm">
        <Link to="/privacy-policy" className="hover:text-blue-400">
          Privacy Policy
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link to="/terms" className="hover:text-blue-400">
          Terms & Conditions
        </Link>
      </div>
      {/* Copyright */}
      <div className="text-center text-white text-xs mb-4">
        <p>&copy; 2025 Intekbit Solutions Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
