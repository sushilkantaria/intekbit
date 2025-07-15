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
    <section
      className="py-16"
      id="technology"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="500"
    >
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-700">
        Our Technology
      </h2>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {buttons.map(({ key, label }) => (
          <div key={key} className="relative group">
            <button
              onMouseEnter={() => switchTechnology(key)}
              className={`px-4 py-2 rounded-2xl transition-all duration-300 cursor-pointer w-full relative z-10 text-white
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
      <div key={containerKey} className="flex flex-wrap justify-center gap-6">
        {technologies[activeTechnology]?.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 w-32"
            data-aos="fade-left"
            data-aos-delay={index * 150}
            data-aos-duration="600"
            data-aos-once="false"
          >
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
            <p className="text-blue-700 font-medium text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;
