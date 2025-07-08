import React from 'react';
import { Link } from 'react-router-dom';

const LetsConnectSection = () => (
  <section className="py-16" id="lets-connect">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2 text-blue-700">
        Let's Create Big Stories Together!
      </h2>
      <p className="mb-6 text-gray-600">
        Share your project details to build your path toward success.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
      >
        <span>Get A Quote</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="ml-2"
        >
          <path
            fillRule="evenodd"
            d="M12.146 8.354a.5.5 0 0 1 0-.708L14.793 5H1.5a.5.5 0 0 1 0-1h13.293l-2.646-2.646a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708 0z"
          />
        </svg>
      </Link>
    </div>
  </section>
);

export default LetsConnectSection;
