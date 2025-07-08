import React, { useState } from 'react';

const ServiceTabs = ({ servicesData, mainTitle, description, image }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  return (
    <div className=" min-h-screen text-gray-900 dark:text-gray-100">
      <section className="flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-white shadow rounded-lg max-w-5xl mx-auto mb-8">
        <div className="md:w-2/3 space-y-4">
          {mainTitle && (
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {mainTitle}
            </h2>
          )}
          {description && <p className="text-gray-700">{description}</p>}
        </div>
        {image && (
          <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
            <img src={image} alt={mainTitle} />
          </div>
        )}
      </section>
      <section className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
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
                      className="w-32 h-24 object-cover rounded shadow"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-1">
                      {section.sectionTitle}
                    </h3>
                    <p className="text-gray-700">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* For services with description/other fields */}
          {activeService.description && (
            <div className="mb-4">
              <p className="text-gray-700 mb-2">{activeService.description}</p>
              {activeService.frameworks && (
                <div className="text-gray-700 mb-2">
                  <span className="font-semibold">Frameworks: </span>
                  {activeService.frameworks.join(', ')}
                </div>
              )}
              {activeService.libraries && (
                <div className="text-gray-700 mb-2">
                  <span className="font-semibold">Libraries: </span>
                  {activeService.libraries.join(', ')}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServiceTabs;
