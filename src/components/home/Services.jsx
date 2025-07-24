import React, { useEffect, useState } from 'react';
import UiUx from '../UiUx';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// Service images mapping
const serviceImages = {
  web: '/Assets/web.gif',
  ai: '/Assets/home-aiml.webp',
  mobile: '/Assets/home-appdevelopment.webp',
  cloud_services: '/Assets/internal-cloud-services.webp',
  uiux_design: '/Assets/home-dataservices.webp',
  software: '/Assets/home-softwaredevelopment.webp',
};

const ServicesSection = ({ services }) => {
  const serviceKeys = Object.keys(services);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  // Add custom CSS for smooth animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .image-container {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.3s ease-out;
      }
      
      .image-fade {
        opacity: 1;
        transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .image-fade.fade-out {
        opacity: 0;
      }
      
      .tech-pill {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .tech-pill.animate {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Animate tech pills and image fade when activeServiceIndex changes
  useEffect(() => {
    // Fade out image first
    const imageElement = document.querySelector('.image-fade');
    if (imageElement) {
      imageElement.classList.add('fade-out');

      // Fade in new image after fade out completes
      setTimeout(() => {
        imageElement.classList.remove('fade-out');
      }, 250); // Smooth fade timing
    }

    // Animate tech pills with staggered delay
    const techPills = document.querySelectorAll('.tech-pill');
    techPills.forEach((pill, index) => {
      pill.classList.remove('animate');
      setTimeout(() => {
        pill.classList.add('animate');
      }, 300 + index * 100); // Start after image fade completes
    });
  }, [activeServiceIndex]);

  const ServiceCard = ({ serviceKey, index, onInView }) => {
    const { ref, inView } = useInView({
      threshold: 0.5, // Trigger when 50% of the service is visible
      triggerOnce: false,
    });

    // Notify parent when this service comes into view
    React.useEffect(() => {
      if (inView && onInView) {
        onInView(index);
      }
    }, [inView, index, onInView]);

    return (
      <div
        ref={ref}
        className={`flex items-center transition-opacity duration-500 ${
          inView ? 'opacity-100' : 'opacity-30'
        } lg:min-h-screen`}
      >
        <div className="w-full">
          {/* Service number */}
          <div className="flex items-center mb-3 sm:mb-8 relative">
            <div className="w-6 h-6 rounded-full bg-white mr-6 absolute left-0.5 transform -translate-x-1/2 z-10 border-4 border-black"></div>
            <span className="text-2xl font-bold text-blue-400 ml-6 sm:ml-12">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Service content */}
          <div className="max-w-lg ml-0 lg:ml-12 pt-4 sm:pt-4 pb-0 sm:pb-4 lg:py-0">
            <h3 className="text-xl sm:text-3xl font-bold text-white mt-0 sm:mt-0 mb-2 sm:mb-8 leading-tight">
              {services[serviceKey]?.title}
            </h3>

            <p className="text-gray-300 text-base sm:text-xl mb-6 sm:mb-12 leading-relaxed">
              {services[serviceKey]?.description}
            </p>

            <div>
              <div className="relative w-fit group mb-1 sm:mb-0">
                <Link
                  className="inline-block text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] hover:cursor-pointer"
                  to={`/${services[serviceKey]?.buttonLink
                    ?.replace('.html', '')
                    .toLowerCase()}`}
                >
                  Know More
                </Link>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-[-4px_0_8px_2px_rgba(255,0,128,0.7),4px_0_8px_2px_rgba(0,98,255,0.7)] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="pt-16 overflow-visible" id="services">
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

        {/* Desktop/Tablet: Two-column with line and sticky image */}
        <div className="hidden lg:flex flex-row gap-20 items-start relative">
          {/* Left side - Scrolling content with connected line */}
          <div className="relative flex-1">
            {/* Continuous vertical line */}
            <div className="absolute left-0 top-44 bottom-146 w-[3px] bg-gray-600"></div>
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
                <div className="w-100 h-100 rounded-2xl overflow-hidden mx-auto shadow-2xl image-container" key={activeServiceIndex}>
                  {serviceKeys[activeServiceIndex] === 'uiux_design' ? (
                    <UiUx />
                  ) : (
                    <img
                      src={serviceImages[serviceKeys[activeServiceIndex]] || '/Assets/web.gif'}
                      alt={services[serviceKeys[activeServiceIndex]]?.title || 'Service'}
                      className="w-full h-full object-cover image-fade"
                      onError={(e) => {
                        console.log('Image failed to load:', serviceImages[serviceKeys[activeServiceIndex]]);
                        e.target.src = '/Assets/web.gif';
                      }}
                    />
                  )}
                </div>
              </div>
              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mt-6 justify-center cursor-default">
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
                        cloud_services: ['AWS', 'Azure', 'DevOps', 'Cloud'],
                        uiux_design: [
                          'Figma',
                          'Adobe XD',
                          'Sketch',
                          'InVision',
                        ],
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
            </div>
          </div>
        </div>
        {/* Mobile: 1 service, then 1 image, repeat, no side line */}
        <div className="flex flex-col gap-12 pt-12 items-start relative lg:hidden">
          {serviceKeys.map((serviceKey, index) => (
            <div key={serviceKey} className="w-full">
              <ServiceCard
                serviceKey={serviceKey}
                index={index}
                onInView={setActiveServiceIndex}
              />
              <div className="w-full max-w-md mx-auto mt-8">
                <div className="p-4">
                  <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden mx-auto shadow-2xl image-container">
                    {serviceKey === 'uiux_design' ? (
                      <UiUx />
                    ) : (
                      <img
                        src={serviceImages[serviceKey] || '/Assets/web.gif'}
                        alt={services[serviceKey]?.title || 'Service'}
                        className="w-full h-full object-cover image-fade"
                        onError={(e) => {
                          e.target.src = '/Assets/web.gif';
                        }}
                      />
                    )}
                  </div>
                </div>
                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mt-6 justify-center cursor-default">
                  {services[serviceKey]?.technologies &&
                  services[serviceKey]?.technologies.length > 0
                    ? services[serviceKey]?.technologies
                        .slice(0, 4)
                        .map((tech, techIndex) => (
                          <span
                            key={`${serviceKey}-${techIndex}`}
                            className="text-white px-3.5 py-2 rounded-full text-sm font-medium  shadow-[0_2px_12px_0_rgba(30,58,138,0.13),0_1px_8px_0_rgba(136,19,55,0.10),0_1px_6px_0_rgba(202,138,4,0.08),0_1px_4px_0_rgba(6,78,59,0.08),inset_0_2px_16px_0_rgba(255,255,255,0.10),inset_0_0_12px_2px_rgba(255,255,255,0.07),inset_0_0_0_1px_rgba(255,255,255,0.05)]"
                          >
                            {tech}
                          </span>
                        ))
                    : (() => {
                        const fallbackTech = {
                          web: ['React', 'Node.js', 'JavaScript', 'HTML/CSS'],
                          ai: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV'],
                          mobile: [
                            'React Native',
                            'Flutter',
                            'Swift',
                            'Kotlin',
                          ],
                          cloud_services: ['AWS', 'Azure', 'DevOps', 'Cloud'],
                          uiux_design: [
                            'Figma',
                            'Adobe XD',
                            'Sketch',
                            'InVision',
                          ],
                          software: ['Java', 'C++', 'Python', 'Git'],
                        };
                        return fallbackTech[serviceKey]?.map(
                          (tech, techIndex) => (
                            <span
                              key={`${serviceKey}-${techIndex}`}
                              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/30 tech-pill"
                            >
                              {tech}
                            </span>
                          )
                        );
                      })()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
