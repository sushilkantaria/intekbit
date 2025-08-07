import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white pt-12 bg-[#141414]">
       <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col gap-10 md:gap-8 lg:gap-0 md:flex-row md:flex-wrap lg:flex-nowrap">
        {/* Logo & tagline */}
        <div className="flex-1 flex flex-col items-start mb-4 md:mb-0 min-w-[180px]">
          <Link to="/">
            <img
              src="/Assets/white-logo.png"
              className="h-10 sm:h-15 w-auto mb-2"
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
                to="/blog"
                className="hover:text-blue-400 text-xs sm:text-sm md:text-base"
              >
                Blog
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
            <HiPhone className="inline-block mr-2 h-5 w-5 text-green-600 align-middle" />
            <span className="break-all">Phone: +91 88498 36407</span>
          </p>
          <p className="flex items-center text-gray-300 text-xs sm:text-sm md:text-base mb-1">
            <HiEnvelope className="inline-block mr-2 h-5 w-5 text-cyan-500 align-middle" />
            <span className="break-all">Email: support@intekbit.com</span>
          </p>
          <p className="flex items-start text-gray-300 text-xs sm:text-sm md:text-base">
            <HiMapPin className="mr-2 h-9 w-9 text-red-500" />
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="h-6 sm:h-7 w-6 sm:w-7 text-[#0077B5]" />
            </a>
<a
  href="https://www.instagram.com/intekbit__solutions/"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
  className="w-6 sm:w-7 h-6 sm:h-7 block"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-full h-full"
  >
    <defs>
      <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="50%" stopColor="#d62976" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <path
      fill="url(#instaGradient)"
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 
      339 319.5 339 255.9 287.7 141 224.1 141zm0 
      189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 
      74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 
      74.7zm146.4-194.3c0 14.9-12 26.9-26.9 
      26.9s-26.9-12-26.9-26.9 12-26.9 
      26.9-26.9 26.9 12 26.9 26.9zm76.1 
      27.2c-1.7-35.7-9.9-67.3-36.2-93.6S369.6 8.4 
      333.9 6.7c-35.6-1.7-142.4-1.7-178 
      0-35.7 1.7-67.3 9.9-93.6 
      36.2S8.4 142.4 6.7 178c-1.7 
      35.6-1.7 142.4 0 178 1.7 35.7 
      9.9 67.3 36.2 93.6s57.9 34.5 
      93.6 36.2c35.6 1.7 142.4 1.7 
      178 0 35.7-1.7 67.3-9.9 
      93.6-36.2s34.5-57.9 
      36.2-93.6c1.7-35.6 
      1.7-142.4 0-178zM398.8 
      388c-7.8 19.6-22.9 34.7-42.5 
      42.5-29.4 11.7-99.2 9-132.3 
      9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 
      9-132.3c7.8-19.6 22.9-34.7 
      42.5-42.5 29.4-11.7 99.2-9 
      132.3-9s102.9-2.6 
      132.3 9c19.6 7.8 
      34.7 22.9 
      42.5 42.5 
      11.7 29.4 
      9 99.2 
      9 132.3s2.6 
      102.9-9 
      132.3z"
    />
  </svg>
</a>

            <a
              href="https://www.facebook.com/profile.php?id=61573434722653"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="h-6 sm:h-7 w-6 sm:w-7 text-[#1877F3]" />
            </a>
            <a
              href="https://x.com/Intekbit"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="h-6 sm:h-7 w-6 sm:w-7 text-white" />
            </a>
          </div>
        </div>
      </div>

        {/* Policy Links */}
  <div className="flex flex-col mt-6 sm:flex-row justify-center items-center gap-2 mb-2 text-white text-2xl sm:text-sm">
    <Link to="/privacy-policy" className="hover:text-blue-500">
      Privacy Policy
    </Link>
    <span className="hidden sm:inline">|</span>
    <Link to="/terms" className="hover:text-blue-500">
      Terms & Conditions
    </Link>
  </div>
      {/* Divider */}
  {/* <div className="border-t border-white/10 my-6 mx-0 sm:mx-0" /> */}

{/* New light background footer bottom section */}
<div className="bg-[#28282B] py-2 px-0 mt-5 sm:px-0">


  {/* Copyright */}
  <div className="text-center text-gray-400 text-1xl">
    <p>&copy; 2025 Intekbit Solutions Pvt. Ltd. All rights reserved.</p>
  </div>
</div>
</footer>
  );
};

export default Footer;
