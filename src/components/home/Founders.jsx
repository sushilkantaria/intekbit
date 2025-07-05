import React from 'react';
import founders from '../../data/home/founders';

const FounderCard = ({ founder }) => (
  <div className="flex flex-col items-center border-1 border-gray-400 rounded-2xl shadow-2xl shadow-blue-400 p-6 w-64">
    <img
      src={founder.image}
      alt={founder.name}
      className="w-24 h-24 object-cover rounded-full mb-4"
    />
    <h3 className={`text-lg font-semibold ${founder.nameColor}`}>
      {founder.name}
    </h3>
    <p className="text-white mb-2">{founder.title}</p>
    <a
      href={founder.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-2"
    >
      <img
        src="/Assets/footer-LinkedIn.webp"
        alt="LinkedIn"
        className="w-6 h-6"
      />
    </a>
  </div>
);

const FoundersSection = () => (
  <section className="py-16 bg-gray-900" id="founders">
    <h2 className="text-2xl font-bold text-center mb-2 text-blue-500">
      Meet the Founders
    </h2>
    <p className="text-center mb-8 text-white">
      Driven by Technology, Powered by Trust.
    </p>
    <div className="flex flex-wrap justify-center gap-8">
      {founders.map((founder) => (
        <FounderCard founder={founder} key={founder.name} />
      ))}
    </div>
  </section>
);

export default FoundersSection;
