import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                const percent = (scrollTop / docHeight) * 100;
                setScrollPercent(percent);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Scroll Indicator Bar */}
            <div className="fixed top-16 left-0 h-1 bg-blue-800 z-[999] transition-all duration-100" style={{ width: `${scrollPercent}%` }}></div>
            <nav className="w-full sticky top-0 z-50 bg-transparent">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center w-1/4 min-w-[120px]">
                        <Link to="/">
                            <img src="/Assets/navbar-logo.webp" alt="Intekbitlogo" className="h-10 w-auto" />
                        </Link>
                    </div>
                    {/* Center Section - pill nav */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <ul className="flex gap-8 items-center px-8 py-2 rounded-full bg-white/70 shadow-lg backdrop-blur-md border border-gray-200 max-w-xl w-full justify-center">
                            <li><Link to="/" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">Home</Link></li>
                            <li><Link to="/services" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">Services</Link></li>
                            <li><Link to="/about" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">About Us</Link></li>
                        </ul>
                    </div>
                    {/* Contact Us Section */}
                    <div className="hidden md:flex w-1/4 min-w-[120px] justify-end items-center gap-2">
                        <Link to="/contact" className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 text-white px-6 py-2 rounded-full shadow-md font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all">Contact Us</Link>
                    </div>
                    {/* Hamburger Menu Icon */}
                    <button className="md:hidden ml-4 text-3xl" onClick={toggleMenu} aria-label="Open menu">
                        <span className="sr-only">Open menu</span>
                        &#9776;
                    </button>
                </div>
                {/* Mobile menu */}
                {isMenuOpen && (
                    <ul className="md:hidden w-full bg-white/95 shadow-lg flex flex-col gap-2 p-4 z-50 rounded-b-xl animate-fadeIn">
                        <li><Link to="/" className="text-gray-800 hover:text-blue-600 font-semibold" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/services" className="text-gray-800 hover:text-blue-600 font-semibold" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                        <li><Link to="/about" className="text-gray-800 hover:text-blue-600 font-semibold" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                        <li><Link to="/contact" className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 text-white px-4 py-2 rounded-full font-semibold shadow-md mt-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
                    </ul>
                )}
            </nav>
        </>
    );
};

export default Navbar;
