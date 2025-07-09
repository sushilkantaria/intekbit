import React, { useState } from 'react';

const ServiceTabs = ({ servicesData, mainTitle, description, image }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  return (
    <div className="min-h-screen mt-20">
      {/* Header Section */}
      <section
        className="group relative flex flex-col md:flex-row items-center justify-between px-4 py-8 rounded-2xl max-w-5xl mx-auto mb-8"
        style={{
          boxShadow:
            '0 2px 12px 0 rgba(30,58,138,0.18), 0 1px 8px 0 rgba(136,19,55,0.13), 0 1px 6px 0 rgba(202,138,4,0.10), 0 1px 4px 0 rgba(6,78,59,0.10), inset 0 2px 16px 0 rgba(255,255,255,0.13), inset 0 0 12px 2px rgba(255,255,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.07)',
          border: '1.5px solid rgba(255,255,255,0.35)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          boxSizing: 'border-box',
        }}
      >
        {/* Glow Layer */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-0"
          style={{
            boxShadow:
              '0 0 24px 8px rgba(236,72,153,0.28), 0 0 32px 12px rgba(59,130,246,0.28), 0 0 40px 16px rgba(139,92,246,0.28)',
          }}
        />

        {/* Actual Content */}
        <div className="relative z-10 md:w-2/3 space-y-4">
          {mainTitle && (
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {mainTitle}
            </h2>
          )}
          {description && <p className="text-white">{description}</p>}
        </div>
        {image && (
          <div className="relative z-10 md:w-1/3 flex justify-center mt-6 md:mt-0">
            <img src={image} alt={mainTitle} />
          </div>
        )}
      </section>

      {/* Tab Section */}
      <section
        className="group relative max-w-5xl mx-auto rounded-2xl p-6 border mb-4"
        style={{
          boxShadow:
            '0 2px 12px 0 rgba(30,58,138,0.18), 0 1px 8px 0 rgba(136,19,55,0.13), 0 1px 6px 0 rgba(202,138,4,0.10), 0 1px 4px 0 rgba(6,78,59,0.10), inset 0 2px 16px 0 rgba(255,255,255,0.13), inset 0 0 12px 2px rgba(255,255,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.07)',
          border: '1.5px solid rgba(255,255,255,0.35)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          boxSizing: 'border-box',
        }}
      >
        {/* Glow Layer */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-0"
          style={{
            boxShadow:
              '0 0 24px 8px rgba(236,72,153,0.28), 0 0 32px 12px rgba(59,130,246,0.28), 0 0 40px 16px rgba(139,92,246,0.28)',
          }}
        />

        {/* Actual Content */}
        <div className="relative z-10">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {servicesData.map((service, idx) => (
              <button
                key={service.title}
                className={`px-4 py-2 rounded font-semibold border transition-colors ${
                  idx === activeIndex
                    ? 'bg-blue-700 text-white border-blue-700'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100'
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div>
            {activeService.sections && (
              <div className="space-y-6">
                {activeService.sections.map((section, i) => (
                  <div
                    key={section.sectionTitle || i}
                    className="flex flex-col md:flex-row gap-6 items-start mb-4"
                  >
                    {section.img && (
                      <img
                        src={section.img}
                        alt={section.sectionTitle}
                        className="w-44 h-24 object-cover"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-blue-600 mb-1">
                        {section.sectionTitle}
                      </h3>
                      <p className="text-white">{section.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Optional Description, Frameworks, Libraries */}
            {activeService.description && (
              <div className="mb-4">
                <p className="text-gray-300 mb-2">
                  {activeService.description}
                </p>
                {activeService.frameworks && (
                  <div className="text-gray-300 mb-2">
                    <span className="font-semibold">Frameworks: </span>
                    {activeService.frameworks.join(', ')}
                  </div>
                )}
                {activeService.libraries && (
                  <div className="text-gray-300 mb-2">
                    <span className="font-semibold">Libraries: </span>
                    {activeService.libraries.join(', ')}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTabs;
