import React from 'react';
import { Link } from 'react-router-dom';
import services from '../data/services';

const cardBase = 'flex flex-col items-center group relative';
const cardImg =
  'relative w-full h-40 md:h-44 lg:h-48 bg-cover bg-center rounded-lg shadow-lg flex items-end border-b-4 border-blue-700';
const cardOverlay =
  'absolute inset-0 bg-black/80 backdrop-blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg';
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
        <div className="flex justify-center">
          <div className="relative w-fit flex">
            <Link
              className="peer relative px-6 py-2 text-white rounded-3xl transition shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] font-semibold text-center z-10"
              to="/contact"
            >
              Know More
            </Link>
            <div className="absolute inset-0 opacity-0 peer-hover:opacity-100 rounded-3xl z-0 pointer-events-none shadow-[-4px_0_8px_4px_rgb(255,0,128),4px_0_8px_4px_rgb(0,98,255)]" />
          </div>
        </div>
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
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-0 shadow-[-8px_0_20px_8px_rgb(255,0,128),8px_0_20px_8px_rgb(0,98,255)]" />
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
