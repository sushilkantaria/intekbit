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
      <div className="flex-1">
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
      <div className="flex-1 flex flex-col items-center">
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
