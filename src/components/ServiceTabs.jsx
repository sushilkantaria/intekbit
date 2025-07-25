import React, { useState } from 'react';

const ServiceTabs = ({ servicesData, mainTitle, description, image }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  return (
    <div className="min-h-screen mt-20 w-[80%] mx-auto">
      {/* <section className="group relative w-[80%] backdrop-blur-lg backdrop-saturate-150 mx-auto rounded-2xl p-6 border "> */}
      {/* Glow Layer */}
      {/* <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-0 shadow-[-8px_0_16px_4px_rgb(255,0,128),8px_0_16px_4px_rgb(0,98,255)]" /> */}
      {/* Header Section (on top) */}
      <div className="m mx-au px-4 py-8 flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-2/3 space-y-4">
          {mainTitle && (
            <h2 className="text-5xl font-black text-center mb-8 leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
              {mainTitle}
            </h2>
          )}
          {description && <p className="text-white">{description}</p>}
        </div>
        {image && (
          <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
            <img src={image} alt={mainTitle} />
          </div>
        )}
      </div>

      {/* Actual Content (tabs and details) below header */}

      <div className="relative z-10">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {servicesData.map((service, idx) => (
            <div key={service.title} className="relative w-fit flex">
              <button
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-2xl transition-all duration-300 cursor-pointer w-full relative z-10 text-white
                    ${
                      idx === activeIndex
                        ? 'shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07),-4px_0_8px_2px_rgba(255, 0, 128, 0.452),4px_0_8px_2px_rgba(0, 98, 255, 0.488)]'
                        : 'shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] hover:shadow-[-4px_0px_8px_4px_rgba(255,0,128,0.45),4px_0px_8px_4px_rgba(0,98,255,0.35)]'
                    }
                  `}
              >
                {service.title}
              </button>
              {idx === activeIndex && (
                <div className="absolute inset-0 rounded-2xl opacity-100 transition duration-800 pointer-events-none z-0 shadow-[0_4px_4px_0_rgb(0,98,255),0_4px_4px_0_rgb(255,0,128)]" />
              )}
            </div>
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
              <p className="text-gray-300 mb-2">{activeService.description}</p>
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
      {/* </section> */}
    </div>
  );
};

export default ServiceTabs;
