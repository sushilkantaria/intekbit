import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10 pb-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4">
                <div className="flex-1 flex flex-col items-start mb-6 md:mb-0">
                    <a href="index.html">
                        <img src="/Assets/footer-logo.webp" alt="Logo" className="h-12 w-auto mb-2" />
                    </a>
                    <p className="text-gray-300">Driven by Technology, Powered by Trust.</p>
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><a href="index.html" className="hover:text-blue-400">Home</a></li>
                        <li><a href="aboutus.html" className="hover:text-blue-400">About Us</a></li>
                        <li><a href="services.html" className="hover:text-blue-400">Services</a></li>
                        <li><a href="contactus.html" className="hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold mb-2">Contact Us</h3>
                    <p className="text-gray-300">Phone: +91 88498 36407</p>
                    <p className="text-gray-300">Email: support@intekbit.com</p>
                    <p className="text-gray-300">S-18/19, Laxmi Darshan Complex, Dabholi Road, Surat-395004</p>
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-3 items-center">
                        <a href="http://linkedin.com/company/intekbit-solutions"><img src="/Assets/footer-LinkedIn.webp" alt="LinkedIn" className="h-7 w-7" /></a>
                        <a href="https://www.instagram.com/intekbit__solutions/"><img src="/Assets/footer-instagram.webp" alt="Instagram" className="h-7 w-7" /></a>
                        <a href="https://www.facebook.com/profile.php?id=61573434722653"><img src="/Assets/footer-facebook.webp" alt="Facebook" className="h-7 w-7" /></a>
                        <a href="https://x.com/Intekbit"><img src="/Assets/footer-twitter.webp" alt="Twitter" className="h-7 w-7" /></a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-6 text-gray-400 text-sm">
                <a href="privacy-policy.html" className="hover:text-blue-400">Privacy Policy</a>
                <span>|</span>
                <a href="terms&conditions.html" className="hover:text-blue-400">Terms & Conditions</a>
            </div>
            <div className="text-center text-gray-500 text-xs mt-2">
                <p>&copy; 2025 Intekbit Solutions Pvt. Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
