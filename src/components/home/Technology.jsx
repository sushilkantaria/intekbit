import { useEffect } from 'react';
import AOS from 'aos';

const TechnologySection = ({
  technologies,
  activeTechnology,
  switchTechnology,
}) => {
  const buttons = [
    { key: 'webdevelopment', label: 'Web Development' },
    { key: 'appdevelopment', label: 'App Development' },
    { key: 'ai', label: 'Artificial Intelligence' },
    { key: 'cloud', label: 'Cloud Services' },
    { key: 'uiux', label: 'UI/UX' },
  ];

  // Refresh AOS when activeTechnology changes
  useEffect(() => {
    AOS.refresh();
  }, [activeTechnology]);

  // Optional: Use a key to remount the animation container
  const containerKey = `${activeTechnology}-${technologies[activeTechnology]?.length}`;

  return (
    <div className="py-16 bg-black">
      <section
        id="technology"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        <h2 className="text-5xl font-black mb-8 text-center leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
          Technologies we use
        </h2>

        {/* Buttons */}
        <div className="flex justify-center space-x-12 gap-4 mb-8 flex-wrap max-w-7xl mx-auto">
          {buttons.map(({ key, label }) => (
            <div key={key} className="relative group">
              <button
                onMouseEnter={() => switchTechnology(key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 cursor-pointer relative z-10 text-white
                ${
                  key === activeTechnology
                    ? 'shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07),-4px_0_8px_2px_rgb(255,0,128),4px_0_8px_2px_rgb(0,98,255)]'
                    : 'shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)]'
                }
              `}
              >
                {label}
              </button>
            </div>
          ))}
        </div>

        {/* Tech Cards */}
        <div
          key={containerKey}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {technologies[activeTechnology]?.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 sm:p-4 w-24 sm:w-38"
              data-aos="fade-left"
              data-aos-delay={index * 150}
              data-aos-duration="600"
              data-aos-once="false"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-18 h-18 sm:w-14 sm:h-14 mb-2"
              />
              <p className="text-gray-200 font-medium text-center text-xs sm:text-lg">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnologySection;
