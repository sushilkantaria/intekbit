import React from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const HeroSection = () => (
  <section
    className="relative flex items-center justify-start h-screen max-w-6xl mx-auto text-white px-6"
    id="home"
  >
    {/* Content */}
    <div
      className="z-10 max-w-xl space-y-6 animate-fadeUp"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="1000"
      data-aos-offset="0"
    >
      <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
        Welcome to INTEKBIT SOLUTIONS PVT LTD
      </h1>
      <p className="text-lg md:text-xl drop-shadow">
        Driven by Technology, Powered by Trust.
      </p>
      <Link
        to="/services"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
      >
        Learn More
      </Link>
    </div>

    {/* Spline on the Right */}
    <div className="absolute right-0 top-0 h-full w-full md:w-1/2 pointer-events-none">
      <Spline scene="https://prod.spline.design/TBsKJ22sOonPR-1i/scene.splinecode" />
    </div>

    <img className="absolute right-0 bottom-0 z-999 h-14 w-40" src="./Assets/black.png" />
  </section>
);

export default HeroSection;
