import React, { useRef, useEffect, useState } from 'react';
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2';
import ParticleBackground from '../components/ui/ParticleBackground';

const ContactUs = () => {
  const formRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // slight delay for effect
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Form submission logic to be implemented)');
    formRef.current.reset();
  };

  const glowStyle = {
    boxShadow:
      '',
  };

  const glowLayer = (
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-0 shadow-[-8px_0_16px_4px_rgb(255,0,128),8px_0_16px_4px_rgb(0,98,255)]" />
  );

  return (
    <>
      <ParticleBackground />
      <div
        className={`min-h-screen text-gray-900 transition-all duration-1000 ease-out ${
          animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative h-64 flex items-center justify-center">
          <h1 className="relative z-10 text-4xl font-bold text-white">
            Contact Us
          </h1>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col rounded-lg md:flex-row gap-18 mb-12 py-20 px-20 shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] backdrop-blur-lg">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Get In Touch With Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Phone', 'Email', 'Address'].map((label) => (
                <div
                  key={label}
                  className={`group bg-black shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-lg p-4 flex flex-col items-center relative backdrop-blur-lg backdrop-saturate-150   ${
                    label === 'Address' ? 'col-span-1 sm:col-span-2' : ''
                  }`}
                  // style={glowStyle}
                >
                  {glowLayer}
                  <div className="relative z-10 flex items-center gap-2 mb-1">
                    {label === 'Phone' ? (
                      <HiPhone className="inline-block mr-2 h-6 w-6 text-green-600 align-middle" />
                    ) : label === 'Email' ? (
                      <HiEnvelope className="inline-block mr-2 h-5 w-5 text-cyan-500 align-middle" />
                    ) : (
                      <HiMapPin className="mr-2 h-7 w-7 text-red-500 mt-0.5" />
                    )}
                    <h3 className="font-semibold text-white">{label}</h3>
                  </div>
                  <p className="text-gray-200">
                    {label === 'Phone'
                      ? '+91 88498 36407'
                      : label === 'Email'
                      ? 'support@intekbit.com'
                      : 'S-18/19, Laxmi Darshan Complex, Dabholi Road, Surat-395004'}
                  </p>
                </div>
              ))}
            </div>

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

          <div
            className="flex-1 rounded-lg shadow p-8 relative group backdrop-blur-lg backdrop-saturate-150"
            style={glowStyle}
          >
            {glowLayer}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Send Us Your Requirements
              </h2>
              <p className="mb-4 text-gray-200">
                Have a question? We're here to help! Reach out to us, and we'll
                respond as soon as possible. Whether it's a project inquiry, a
                collaboration idea, or general assistance, we'd love to hear
                from you.
              </p>
              <form
                id="contact-form"
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full text-white border border-gray-600 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full text-white border border-gray-600 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full text-white border border-gray-600 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    required
                    className="w-full text-white border border-gray-600 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="w-full cursor-pointer text-white font-semibold py-2 rounded-3xl transition relative z-10 shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] peer"
                  >
                    Send Message
                  </button>
                  <div className="absolute inset-0 rounded-3xl opacity-0 peer-hover:opacity-100 transition duration-800 pointer-events-none z-0 shadow-[-4px_0_8px_2px_rgb(255,0,128),4px_0_8px_2px_rgb(0,98,255)]" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
