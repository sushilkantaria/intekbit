import React, { useEffect, useState } from 'react';

import MissionVisionCard from '../components/about/MissionVisionCard';
import AgileStepCard from '../components/about/AgileStepCard';
import CoreValueCard from '../components/about/CoreValueCard';
import missionVision from '../data/about/missionVision';
import agileSteps from '../data/about/agileSteps';
import coreValues from '../data/about/coreValues';
import ParticleBackground from '../components/ui/ParticleBackground';

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  const [activeStep, setActiveStep] = useState(null); // ✅ For one open at a time

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    
    <div
      className={`min-h-screen mt-14 transition-all duration-1000 ease-out ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* First Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-8 leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
            Innovating with Impact, Delivering with Care
          </h1>
          <p className="text-white text-lg">
            We are Intekbit Solutions Pvt. Ltd., a passionate team of
            visionaries dedicated to redefining how businesses embrace
            technology. From tailored web development to powerful AI-driven
            solutions, we transform ideas into reality. Since our founding,
            we’ve been committed to delivering innovative, future-ready
            solutions that drive success.
          </p>
        </div>
      </section>
{/* Nxt.Gen Healthcare Section */}
<section
  className="bg-gray-200 py-16 px-4"
  data-aos="fade-up"
  data-aos-duration="1000"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Left Side Heading */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug">
        Delivering <span className="text-black">Nxt.Gen</span> <br />
        Healthcare
      </h2>
    </div>

    {/* Right Side Description */}
    <div>
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        As a trusted digital transformation partner for over two decades, we
        deliver Nxt.Gen solutions across the patient care continuum. Our
        future-forward solutions address industry challenges, integrate digital
        transformation into business strategy, ensure regulatory compliance,
        drive continuous improvement, and prioritize extraordinary patient
        experiences and high-impact outcomes.
      </p>
    </div>
  </div>
</section>


      <section className="py-12 bg-black flex flex-col gap-10 max-w-8xl mx-auto px-4">
        <div data-aos="fade-right" data-aos-duration="1000">
          {missionVision.map((item, index) => (
            <MissionVisionCard
              key={item.title}
              image={item.image}
              alt={item.alt}
              title={item.title}
              imageLeft={index % 2 !== 0} // Mission: imageLeft = true, Vision: imageLeft = false
            >
              {item.description}
            </MissionVisionCard>
          ))}
        </div>
      </section>

      {/* Agile Process Section */}
      <div className="py-12 bg-gray-200">
        <div
          className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start px-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="flex-1">
            <h2 className="text-4xl font-black text-center mb-8 leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
              We Follow Agile Methodology
            </h2>
            <p className="mb-4 text-black text-center md:text-left">
              We follow the Agile methodology to ensure that we continuously
              improve our development process...
            </p>

            <div
              className="flex flex-col gap-4"
              onMouseLeave={() => setActiveStep(null)} // 👈 close all when mouse leaves the group
            >
              {agileSteps.map((step, index) => (
                <AgileStepCard
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  isActive={activeStep === index}
                  onHover={() => setActiveStep(index)}
                >
                  {step.description}
                </AgileStepCard>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/Assets/about-agile.webp"
              alt="Agile Process"
              className="rounded-lg shadow-lg w-100 h-100"
            />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <section className="py-12 bg-gray-200">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-5xl font-black text-center mb-8 leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
            Our Core Values
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
            {coreValues.map((value) => (
              <CoreValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
