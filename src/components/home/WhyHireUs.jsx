import React from 'react';
import whyHireUsData from '../../data/home/whyHireUs';

function WhyHireUsSection() {
  return (
    <section className="py-16" id="why-hire-us">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl font-black text-center mb-8 leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg"
          data-aos="slide-up"
          data-aos-duration="800"
          data-aos-offset="200"
        >
          Why Hire Us
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-offset="200"
          data-aos-delay="300"
        >
          {whyHireUsData.map((item, index) => (
            <div
              key={item.title}
              data-aos="flip-right"
              data-aos-duration="800"
              data-aos-offset="200"
              data-aos-delay={400 + index * 150}
            >
              <WhyHireUsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyHireUsCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center rounded-2xl backdrop-blur-lg backdrop-saturate-150 p-6 w-full transition-transform duration-300 transform hover:-translate-y-3 hover:scale-105 relative group shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)]">
      {/* Dual color vertical box-shadow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-800 pointer-events-none z-0 shadow-[-8px_0_16px_4px_rgb(255,0,128),8px_0_16px_4px_rgb(0,98,255)]" />
      <div className="text-4xl mb-2 z-10">{icon}</div>
      <h3 className="text-lg font-semibold text-blue-400 mb-2 z-10">{title}</h3>
      <p className="text-gray-200 text-center z-10">{description}</p>
    </div>
  );
}

export default WhyHireUsSection;
