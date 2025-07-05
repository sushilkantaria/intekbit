import React from 'react';

const WhyHireUsSection = () => (
  <section className="py-16 bg-gray-50" id="why-hire-us">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-700">
        Why Hire Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center bg-white rounded shadow p-6">
          <div className="text-4xl mb-2">🌟</div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            Expert Team
          </h3>
          <p className="text-gray-700 text-center">
            Skilled professionals with diverse expertise to address
            challenges.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded shadow p-6">
          <div className="text-4xl mb-2">🚀</div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            Innovative Solutions
          </h3>
          <p className="text-gray-700 text-center">
            Cutting-edge approaches that keep you ahead of the competition.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded shadow p-6">
          <div className="text-4xl mb-2">🤝</div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            Client Partnership
          </h3>
          <p className="text-gray-700 text-center">
            We work WITH you, not FOR you, creating lasting relationships.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded shadow p-6">
          <div className="text-4xl mb-2">⚙️</div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            Technical Excellence
          </h3>
          <p className="text-gray-700 text-center">
            Superior development practices for high-quality deliverables.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyHireUsSection;
