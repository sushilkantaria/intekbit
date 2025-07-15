import React from 'react';
import { Link } from 'react-router-dom';

const cardBase =
  'cursor-pointer group flex flex-col items-center transition-transform duration-300 hover:scale-105';
const cardImg =
  'w-28 h-20 object-cover rounded shadow group-hover:scale-105 transition';
const cardTitle = 'text-center mt-2 text-blue-500 font-semibold';

const ServicesSection = ({ services, currentService, showService }) => (
  <section className="py-16" id="services">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-4">
      {/* Left Section */}
      <div className="flex-1" data-aos-duration="1000" data-aos="zoom-in-right">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">
          {services[currentService]?.title || 'Our Services'}
        </h2>
        <p className="mb-4 text-white">
          {services[currentService]?.description ||
            'Click on a service card to learn more about what we offer.'}
        </p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {services[currentService]?.technologies.map((tech, index) => (
            <li
              key={index}
              className="bg-blue-100 text-blue-500 px-3 py-1 rounded text-sm font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
        <Link
          className="inline-block bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded transition"
          to={`/${services[currentService]?.buttonLink
            ?.replace('.html', '')
            .toLowerCase()}`}
        >
          View Services
        </Link>
      </div>
      {/* Right Section - Slider */}
      <div
        className="flex-1 flex flex-col items-center"
        data-aos-duration="1000"
        data-aos="zoom-in-left"
      >
        <div className="w-full">
          {/* Service number */}
          <div className="flex items-center mb-8 relative">
            <div className="w-6 h-6 rounded-full bg-white mr-6 absolute left-0.5 transform -translate-x-1/2 z-10 border-4 border-black"></div>
            <span className="text-2xl font-bold text-blue-400 ml-12">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Service content */}
          <div className="max-w-lg ml-12">
            <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
              {services[serviceKey]?.title}
            </h3>

            <p className="text-gray-300 font-medium mb-8 leading-relaxed">
              {services[serviceKey]?.description}
            </p>

            <div>
              <div className="relative w-fit group">
                <Link
                  className="inline-block text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] hover:cursor-pointer"
                  to={`/${services[serviceKey]?.buttonLink
                    ?.replace('.html', '')
                    .toLowerCase()}`}
                >
                  Know More
                </Link>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all shadow-[-4px_0_8px_2px_rgba(255,0,128,0.7),4px_0_8px_2px_rgba(0,98,255,0.7)] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="pt-16 overflow-visible mx-8" id="services">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="200"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start relative">
          {/* Left side - Scrolling content with connected line */}
          <div className="relative flex-1">
            {/* Continuous vertical line */}
            <div className="absolute left-0 top-56 bottom-130 w-[3px] bg-gray-600"></div>

            {serviceKeys.map((serviceKey, index) => (
              <ServiceCard
                key={serviceKey}
                serviceKey={serviceKey}
                index={index}
                onInView={setActiveServiceIndex}
              />
            ))}
          </div>

          {/* Right side - Static image container */}
          <div className="flex-1 lg:sticky lg:top-20 lg:h-screen flex items-center justify-center">
            <div className="w-full max-w-md">
              {/* Main image container */}
              <div className="p-4">
                <div
                  className="w-80 h-80 rounded-2xl overflow-hidden mx-auto shadow-2xl image-container"
                  key={activeServiceIndex}
                >
                  <img
                    src={
                      serviceImages[serviceKeys[activeServiceIndex]] ||
                      '/Assets/home-webdevelopment.webp'
                    }
                    alt={
                      services[serviceKeys[activeServiceIndex]]?.title ||
                      'Service'
                    }
                    className="w-full h-full object-cover image-fade"
                    onError={(e) => {
                      console.log(
                        'Image failed to load:',
                        serviceImages[serviceKeys[activeServiceIndex]]
                      );
                      e.target.src = '/Assets/home-webdevelopment.webp';
                    }}
                  />
                </div>
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {services[serviceKeys[activeServiceIndex]]?.technologies &&
                services[serviceKeys[activeServiceIndex]]?.technologies.length >
                  0
                  ? services[serviceKeys[activeServiceIndex]]?.technologies
                      .slice(0, 4)
                      .map((tech, techIndex) => (
                        <span
                          key={`${activeServiceIndex}-${techIndex}`}
                          className="text-white px-3.5 py-2 rounded-full text-sm font-medium  shadow-[0_2px_12px_0_rgba(30,58,138,0.13),0_1px_8px_0_rgba(136,19,55,0.10),0_1px_6px_0_rgba(202,138,4,0.08),0_1px_4px_0_rgba(6,78,59,0.08),inset_0_2px_16px_0_rgba(255,255,255,0.10),inset_0_0_12px_2px_rgba(255,255,255,0.07),inset_0_0_0_1px_rgba(255,255,255,0.05)]"
                        >
                          {tech}
                        </span>
                      ))
                  : // Fallback technologies based on service type
                    (() => {
                      const fallbackTech = {
                        web: ['React', 'Node.js', 'JavaScript', 'HTML/CSS'],
                        ai: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV'],
                        mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
                        it_consulting: ['AWS', 'Azure', 'DevOps', 'Cloud'],
                        data: ['Python', 'SQL', 'Pandas', 'Analytics'],
                        software: ['Java', 'C++', 'Python', 'Git'],
                      };
                      return fallbackTech[serviceKeys[activeServiceIndex]]?.map(
                        (tech, techIndex) => (
                          <span
                            key={`${activeServiceIndex}-${techIndex}`}
                            className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/30 tech-pill"
                          >
                            {tech}
                          </span>
                        )
                      );
                    })()}
              </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.keys(services).map((key) => (
            <div
              className={cardBase}
              onClick={() => showService(key)}
              key={key}
              style={{ minWidth: '7rem', minHeight: '7rem' }}
            >
              <img
                src={
                  key === 'web'
                    ? '/Assets/home-webdevelopment.webp'
                    : key === 'ai'
                    ? '/Assets/home-aiml.webp'
                    : key === 'mobile'
                    ? '/Assets/home-appdevelopment.webp'
                    : key === 'it_consulting'
                    ? '/Assets/home-itconsulting.webp'
                    : key === 'data'
                    ? '/Assets/home-dataservices.webp'
                    : key === 'software'
                    ? '/Assets/home-softwaredevelopment.webp'
                    : ''
                }
                alt={services[key]?.title}
                className={cardImg}
              />
              <h3 className={cardTitle}>{services[key]?.title}</h3>

            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
