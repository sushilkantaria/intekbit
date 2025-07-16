import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const HeroSection = () => (
  <section
    className="relative flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[80vh] md:h-screen max-w-6xl mx-auto text-white px-4 sm:px-6 lg:px-8 pt-16 md:pt-0"
    id="home"
  >
    {/* Content */}
    <div
      className="z-10 max-w-xl w-full space-y-6 animate-fadeUp flex flex-col items-center md:items-start text-center md:text-left"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="1000"
      data-aos-offset="0"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
        <Typewriter
          words={['Welcome to INTEKBIT SOLUTIONS PVT LTD']}
          loop={1}
          cursor={false}
          typeSpeed={70}
        />
      </h1>
      <p className="text-base sm:text-lg md:text-xl drop-shadow">
        <Typewriter
          words={['Driven by Technology, Powered by Trust.']}
          loop={1}
          cursor={false}
          typeSpeed={70}
        />
      </p>
      <div className="relative w-fit">
        <Link
          to="/services"
          className="peer flex items-center justify-center px-6 py-2 rounded-2xl transition-all duration-300 cursor-pointer relative z-10 text-white font-semibold text-center shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)]"
        >
          Learn More
        </Link>
        <div className="absolute inset-0 rounded-2xl opacity-0 peer-hover:opacity-100 shadow-[-4px_0_8px_2px_rgba(255,0,128,0.7),4px_0_8px_2px_rgba(0,98,255,0.7)]" />
      </div>
    </div>

    {/* Spline on the Right (hidden on mobile) */}
    <div className="hidden md:block absolute right-0 top-0 h-full w-full md:w-1/2 pointer-events-none">
      <Spline scene="https://prod.spline.design/TBsKJ22sOonPR-1i/scene.splinecode" />
    </div>

    {/* Black image always visible, but responsive size/position */}
    <img
      className="absolute right-0 bottom-0 z-10 h-10 w-24 sm:h-14 sm:w-40 md:h-14 md:w-40"
      src="./Assets/black.png"
      alt=""
    />
  </section>
);

export default HeroSection;
