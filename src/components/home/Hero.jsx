import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section
    className="relative flex items-center justify-center h-[calc(100vh-40px)] bg-cover bg-center bg-no-repeat text-white text-center p-5"
    style={{ backgroundImage: "url('/Assets/home-bg.webp')" }}
    id="home"
  >
    <div className="flex flex-col items-center justify-center bg-black/60 rounded-lg p-8 animate-fadeUp">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fadeUp delay-300 drop-shadow-lg">
        Welcome to INTEKBIT SOLUTIONS PVT LTD
      </h1>
      <p className="text-lg md:text-xl mb-4 animate-fadeUp delay-500 drop-shadow">
        Driven by Technology, Powered by Trust.
      </p>
      <Link
        to="/services"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
      >
        Learn More
      </Link>
    </div>
  </section>
);

export default HeroSection;
