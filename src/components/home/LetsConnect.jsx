import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
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
      <div className="relative w-fit mx-auto">
        <Link
          to="/contact"
          className="inline-flex items-center peer relative px-6 py-2 text-white rounded-3xl transition shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] font-semibold text-center z-10 gap-2"
        >
          <span>Get A Quote</span>
          <HiArrowLongRight />
        </Link>
        <div className="absolute inset-0 opacity-0 peer-hover:opacity-100 rounded-3xl z-0 pointer-events-none shadow-[-4px_0_8px_4px_rgb(255,0,128),4px_0_8px_4px_rgb(0,98,255)]" />
      </div>
    </div>
  </section>
);

export default LetsConnectSection;
