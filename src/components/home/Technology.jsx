
const TechnologySection = ({ technologies, activeTechnology, switchTechnology }) => {
  const containerKey = `${activeTechnology}-${technologies[activeTechnology]?.length}`;

  return (
    <section className="py-16" id="technology">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-700">
        Our Technology
      </h2>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          className={`px-4 py-2 rounded ${
            activeTechnology === 'webdevelopment'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 border border-blue-600'
          }`}
          onMouseOver={() => switchTechnology('webdevelopment')}
        >
          Web Development
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTechnology === 'appdevelopment'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 border border-blue-600'
          }`}
          onMouseOver={() => switchTechnology('appdevelopment')}
        >
          App Development
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTechnology === 'ai'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 border border-blue-600'
          }`}
          onMouseOver={() => switchTechnology('ai')}
        >
          Artificial Intelligence
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTechnology === 'cloud'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 border border-blue-600'
          }`}
          onMouseOver={() => switchTechnology('cloud')}
        >
          Cloud Services
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTechnology === 'uiux'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 border border-blue-600'
          }`}
          onMouseOver={() => switchTechnology('uiux')}
        >
          UI/UX
        </button>
      </div>
      <div key={containerKey} className="flex flex-wrap justify-center gap-6">
        {technologies[activeTechnology]?.map((tech, index) => (
          <div
            key={index}
            style={{
              animation: `fadeInLeft 0.5s ${index * 0.12 + 0.1}s both`,
            }}
            className="flex flex-col items-center p-4 w-32 opacity-0 animate-fadeInLeft"
          >
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
            <p className="text-blue-700 font-medium text-center">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInLeft {
          animation-name: fadeInLeft;
          animation-timing-function: cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </section>
  );
};

export default TechnologySection;
