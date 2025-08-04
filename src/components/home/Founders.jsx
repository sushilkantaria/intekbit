import React from 'react';
import founders from '../../data/home/founders';
import { FaLinkedinIn } from 'react-icons/fa6';

const FounderCard = ({ founder }) => (
  <div
    className={
      'flex flex-col items-center backdrop-blur-lg backdrop-saturate-150 rounded-2xl p-6 w-64 transition-transform duration-300 transform relative group shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)]'
    }
  >
    {/* Glow effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-800 pointer-events-none z-0 shadow-[0_0_12px_4px_rgb(255,0,128),0_0_16px_6px_rgb(0,98,255),0_0_20px_8px_rgb(76,0,255)]" />
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
      <FaLinkedinIn className="h-6 sm:h-7 w-6 sm:w-7 text-[#0077B5]" />
    </a>
  </div>
);

const FoundersSection = () => (
  <section className="py-16 bg-black overflow-hidden" id="founders">
    <h2
      className="text-5xl font-black text-center mb-4 leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-offset="200"
    >
      Meet the Founders
    </h2>
    <p
      className="text-center mb-8 text-white"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-offset="200"
      data-aos-delay="200"
    >
      Driven by Technology, Powered by Trust.
    </p>
    <div
      className="flex flex-wrap justify-center gap-8"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-offset="200"
      data-aos-delay="400"
    >
      {founders.map((founder, index) => (
        <div
          key={founder.name}
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-offset="200"
          data-aos-delay={600 + index * 150}
        >
          <FounderCard founder={founder} />
        </div>
      ))}
    </div>
  </section>
);

export default FoundersSection;
