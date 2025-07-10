import React from 'react';
import founders from '../../data/home/founders';

const FounderCard = ({ founder }) => (
  <div
    className="flex flex-col items-center rounded-2xl shadow-2xl p-6 w-64 transition-transform duration-300 transform relative group"
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
    <img
      src={founder.image}
      alt={founder.name}
      className="w-24 h-24 object-cover rounded-full mb-4 z-10"
    />
    <h3 className={`text-lg font-semibold ${founder.nameColor} z-10`}>
      {founder.name}
    </h3>
    <p className="text-white mb-2 z-10">{founder.title}</p>
    <a
      href={founder.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-2 z-10"
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
  <section className="py-16" id="founders">
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
