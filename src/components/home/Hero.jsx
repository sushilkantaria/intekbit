import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import ParticleBackground from '../ui/ParticleBackground';

const HeroSection = () => (
  <>
    <ParticleBackground />
    <section
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[80vh] md:h-screen max-w-7xl mx-auto text-white px-4 sm:px-6 lg:px-8 pt-16 md:pt-0"
      id="home"
    >
      {/* Content */}
      <div
        className="z-10 max-w-xl w-full space-y-6 animate-fadeUp flex flex-col items-center md:items-start text-center md:text-left"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="0"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-lg">
          <Typewriter
            words={['WELCOME TO INTEKBIT SOLUTIONS PVT LTD']}
            loop={1}
            cursor={false}
            typeSpeed={70}
          />
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl drop-shadow">
          <Typewriter
            words={['Driven by Technology, Powered by Trust.']}
            loop={1}
            cursor={false}
            typeSpeed={70}
          />
        </p>
      </div>

      {/* Spline on the Right (hidden on mobile) */}
      <div className="hidden md:block absolute -right-50 top-0 h-full w-full md:w-[92vw] lg:w-[850px] xl:w-[950px] pointer-events-none">
        <Spline
          // scene="https://prod.spline.design/aX1iYSIpcRaBb-wN/scene.splinecode"
          scene="https://prod.spline.design/w5CZb7xD8c2pWC9i/scene.splinecode"
          // scene="https://prod.spline.design/TBsKJ22sOonPR-1i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Black image always visible, but responsive size/position */}
      <img
        className="absolute hidden -right-35 md:block bottom-4 z-10 h-11 w-36"
        src="./Assets/black.png"
        alt=""
      />
    </section>
  </>
);

export default HeroSection;
