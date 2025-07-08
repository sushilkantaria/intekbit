import React from 'react';

import MissionVisionCard from '../components/about/MissionVisionCard';
import AgileStepCard from '../components/about/AgileStepCard';
import CoreValueCard from '../components/about/CoreValueCard';
import missionVision from '../data/about/missionVision';
import agileSteps from '../data/about/agileSteps';
import coreValues from '../data/about/coreValues';

const AboutUs = () => {
  return (
    <div className=" min-h-screen mt-14">
      {/* First Section: Heading, Description, and Image */}
      <section className="py-16 ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            Innovating with Impact, Delivering with Care
          </h1>
          <p className="text-white text-lg">
            We are Intekbit Solutions Pvt. Ltd., a passionate team of
            visionaries dedicated to redefining how businesses embrace
            technology. From tailored web development to powerful AI-driven
            solutions, we transform ideas into reality. Since our founding,
            we've been committed to delivering innovative, future-ready
            solutions that drive success.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-12  flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4">
        {missionVision.map((item) => (
          <MissionVisionCard
            key={item.title}
            image={item.image}
            alt={item.alt}
            title={item.title}
          >
            {item.description}
          </MissionVisionCard>
        ))}
      </section>

      {/* Agile Process Section */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center px-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 text-blue-700">
              We Follow Agile Methodology
            </h2>
            <p className="mb-4 text-white">
              We follow the Agile methodology to ensure that we continuously
              improve our development process and deliver high-quality results.
              This approach helps us stay responsive to feedback, foster
              innovation, and enhance productivity throughout the project
              lifecycle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agileSteps.map((step) => (
                <AgileStepCard
                  key={step.number}
                  number={step.number}
                  title={step.title}
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
              className="rounded-lg shadow-lg max-h-80"
            />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-700">
          Our Core Values
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {coreValues.map((value) => (
            <CoreValueCard
              key={value.title}
              icon={value.icon}
              iconColor={value.iconColor}
              title={value.title}
            >
              {value.description}
            </CoreValueCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
