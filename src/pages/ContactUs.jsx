import React, { useRef } from 'react';

const ContactUs = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Form submission logic to be implemented)');
    formRef.current.reset();
  };

  const glowStyle = {
    boxShadow:
      '0 2px 12px 0 rgba(30,58,138,0.18), 0 1px 8px 0 rgba(136,19,55,0.13), 0 1px 6px 0 rgba(202,138,4,0.10), 0 1px 4px 0 rgba(6,78,59,0.10), inset 0 2px 16px 0 rgba(255,255,255,0.13), inset 0 0 12px 2px rgba(255,255,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.07)',
    // background: 'rgba(17,24,39,0.85)',
    // border: '1.5px solid rgba(255,255,255,0.35)',
    // backdropFilter: 'blur(24px) saturate(180%)',
    // WebkitBackdropFilter: 'blur(24px) saturate(180%)',
    // boxSizing: 'border-box',
  };

  const glowLayer = (
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-0"
      style={{
        boxShadow:
          '0 0 24px 8px rgba(236,72,153,0.28), 0 0 32px 12px rgba(59,130,246,0.28), 0 0 40px 16px rgba(139,92,246,0.28)',
      }}
    />
  );

  return (
    <div className="min-h-screen text-gray-900">
      <div className="relative h-64 flex items-center justify-center">
        <h1 className="relative z-10 text-4xl font-bold text-white">
          Contact Us
        </h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 py-12 px-4">
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Get In Touch With Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Phone', 'Email', 'Address'].map((label) => (
              <div
                key={label}
                className={`group rounded-lg p-4 flex flex-col items-center shadow relative ${
                  label === 'Address' ? 'col-span-1 sm:col-span-2' : ''
                }`}
                style={glowStyle}
              >
                {glowLayer}
                <div className="relative z-10 flex items-center gap-2 mb-1">
                  <img
                    src={
                      label === 'Phone'
                        ? '/Assets/contact-phone.webp'
                        : label === 'Email'
                        ? '/Assets/contact-email.webp'
                        : '/Assets/contact-location.webp'
                    }
                    alt={label}
                    className="h-8 w-8 invert"
                  />
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
          className="flex-1 rounded-lg shadow p-8 relative group"
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
              collaboration idea, or general assistance, we'd love to hear from
              you.
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
  );
};

export default ContactUs;
