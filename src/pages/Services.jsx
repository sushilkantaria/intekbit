import React from 'react';
import { Link } from 'react-router-dom';
import services from '../data/services';

const cardBase = 'flex flex-col items-center group relative';
const cardImg =
  'relative w-full h-40 md:h-44 lg:h-48 bg-cover bg-center rounded-lg shadow-lg flex items-end border-b-4 border-blue-700';
const cardOverlay =
  'absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg';
const cardTitle = 'mt-4 text-lg font-semibold text-blue-700 text-center';

const Services = () => (
  <div className="min-h-screen mt-14">
    <section className="py-12 mb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Our Services</h1>
        <p className="text-lg text-white mb-4">
          Explore the wide range of services we offer to help your business
          grow.
        </p>
        <Link
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
          to="/contact"
        >
          Know More
        </Link>
      </div>
    </section>
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            className={cardBase}
            key={service.title}
            style={{ minWidth: '220px', minHeight: '270px' }}
          >
            <div className="relative w-full flex items-end">
              {/* Glow effect around image only */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-0"
                style={{
                  boxShadow:
                    '0 0 24px 8px rgba(236,72,153,0.28), 0 0 32px 12px rgba(59,130,246,0.28), 0 0 40px 16px rgba(139,92,246,0.28)',
                }}
              />
              <div
                className={
                  cardImg +
                  ' transition-transform duration-300 group-hover:scale-105 z-10'
                }
                style={{
                  backgroundImage: `url('${service.image}')`,
                  width: '100%',
                  minHeight: '160px',
                  maxHeight: '192px',
                }}
              >
                <Link
                  to={service.route}
                  className="w-full h-full flex items-end relative"
                  style={{ minHeight: '160px', maxHeight: '192px' }}
                >
                  <div className={cardOverlay}>
                    <p className="text-white text-center px-4 text-sm animate-fade-in">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className={cardTitle}>{service.title}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
