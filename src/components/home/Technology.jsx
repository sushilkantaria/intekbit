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
      data-aos-duration="1000"
    >
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-700">
        Our Technology
      </h2>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {buttons.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => switchTechnology(key)}
            className={`px-4 py-2 rounded transition-all duration-300 ${
              activeTechnology === key
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            {label}
          </button>
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
