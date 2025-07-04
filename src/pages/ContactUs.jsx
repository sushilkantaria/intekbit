import React, { useRef } from 'react';

const ContactUs = () => {
    const formRef = useRef(null);

    // You can add email sending logic here if needed
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your email sending logic here
        alert('Message sent! (Form submission logic to be implemented)');
        formRef.current.reset();
    };

    return (
        <div className="bg-white min-h-screen text-gray-900">
            {/* Hero Section */}
            <div className="relative h-64 flex items-center justify-center bg-blue-700">
                <div className="absolute inset-0 bg-blue-700 opacity-80"></div>
                <h1 className="relative z-10 text-4xl font-bold text-white">Contact Us</h1>
            </div>
            {/* Contact Section */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 py-12 px-4">
                <div className="flex-1 space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Get In Touch With Us</h2>
                    {/* Contact Information Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center shadow">
                            <div className="flex items-center gap-2 mb-1">
                                <img src="/Assets/contact-phone.webp" alt="Phone" className="h-8 w-8" />
                                <h3 className="font-semibold">Phone</h3>
                            </div>
                            <p className="text-gray-700">+91 88498 36407</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center shadow">
                            <div className="flex items-center gap-2 mb-1">
                                <img src="/Assets/contact-email.webp" alt="Email" className="h-8 w-8" />
                                <h3 className="font-semibold">Email</h3>
                            </div>
                            <p className="text-gray-700">support@intekbit.com</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center shadow col-span-1 sm:col-span-2">
                            <div className="flex items-center gap-2 mb-1">
                                <img src="/Assets/contact-location.webp" alt="Shop" className="h-8 w-8" />
                                <h3 className="font-semibold">Address</h3>
                            </div>
                            <p className="text-gray-700">S-18/19, Laxmi Darshan Complex, Dabholi Road, Surat-395004</p>
                        </div>
                    </div>
                    {/* Map Section */}
                    <div className="rounded-lg overflow-hidden shadow mt-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3832.6114691385887!2d72.8170905778006!3d21.229744291847084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzQ2LjMiTiA3MsKwNDknMTcuNiJF!5e0!3m2!1sen!2sin!4v1738761749782!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Intekbit Solutions Location"
                        ></iframe>
                    </div>
                </div>
                {/* Right Section - Contact Form */}
                <div className="flex-1 bg-white rounded-lg shadow p-8">
                    <h2 className="text-2xl font-bold mb-2">Send Us Your Requirements</h2>
                    <p className="mb-4 text-gray-700">Have a question? We're here to help! Reach out to us, and we'll respond as soon as possible. Whether it's a project inquiry, a collaboration idea, or general assistance, we'd love to hear from you. Our team is dedicated to providing timely and helpful responses.</p>
                    <form id="contact-form" ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block font-medium mb-1">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium mb-1">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block font-medium mb-1">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Subject" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-medium mb-1">Your Message</label>
                            <textarea id="message" name="message" placeholder="Your Message" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
