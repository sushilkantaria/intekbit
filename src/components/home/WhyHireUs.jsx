import React from 'react';

function WhyHireUsSection() {
  return (
    <section className="py-16" id="why-hire-us">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-14 text-blue-700">
          Why Hire Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <WhyHireUsCard
            icon="🌟"
            title="Expert Team"
            description="Skilled professionals with diverse expertise to address challenges."
          />
          <WhyHireUsCard
            icon="🚀"
            title="Innovative Solutions"
            description="Cutting-edge approaches that keep you ahead of the competition."
          />
          <WhyHireUsCard
            icon="🤝"
            title="Client Partnership"
            description="We work WITH you, not FOR you, creating lasting relationships."
          />
          <WhyHireUsCard
            icon="⚙️"
            title="Technical Excellence"
            description="Superior development practices for high-quality deliverables."
          />
        </div>
      </div>
    </section>
  );
}

function WhyHireUsCard({ icon, title, description }) {
  return (
    <div
      className="flex flex-col items-center rounded-2xl shadow-2xl p-6 w-full transition-transform duration-300 transform hover:-translate-y-3 hover:scale-105 relative group"
      style={{
        boxShadow:
          '0 2px 12px 0 rgba(30,58,138,0.18), 0 1px 8px 0 rgba(136,19,55,0.13), 0 1px 6px 0 rgba(202,138,4,0.10), 0 1px 4px 0 rgba(6,78,59,0.10), inset 0 2px 16px 0 rgba(255,255,255,0.13), inset 0 0 12px 2px rgba(255,255,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.07)',
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-800 pointer-events-none z-0"
        style={{
          boxShadow:
            '0 0 12px 4px rgb(255, 0, 128), 0 0 16px 6px rgb(0, 98, 255), 0 0 20px 8px rgb(76, 0, 255)',
        }}
      />
      <div className="text-4xl mb-2 z-10">{icon}</div>
      <h3 className="text-lg font-semibold text-blue-400 mb-2 z-10">{title}</h3>
      <p className="text-gray-200 text-center z-10">{description}</p>
    </div>
  );
}

export default WhyHireUsSection;
