import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Development',
    image: '/Assets/internal-assets/services-webdev.webp',
    desc: 'Build fast, responsive websites tailored to your business needs. We create secure, user-friendly, and modern web solutions.',
    route: '/web-development',
  },
  {
    title: 'App Development',
    image: '/Assets/internal-assets/services-appdev.webp',
    desc: 'Design and develop mobile apps for Android and iOS platforms. Engage your audience with smooth, high-performance apps.',
    route: '/app-development',
  },
  {
    title: 'AI & ML Solutions',
    image: '/Assets/internal-assets/services-AIML.webp',
    desc: 'Unlock business insights with powerful AI and machine learning tools. Automate processes and make data-driven decisions.',
    route: '/aiml-solutions',
  },
  {
    title: 'Cloud Services',
    image: '/Assets/internal-assets/services-cloud.webp',
    desc: 'Leverage the power of the cloud for better scalability and flexibility. Secure cloud storage and infrastructure services.',
    route: '/cloud-services',
  },
  {
    title: 'UI & UX',
    image: '/Assets/internal-assets/services-uiux.webp',
    desc: 'Design intuitive user experiences with clean, interactive interfaces. Focused on usability and aesthetic appeal.',
    route: '/uiux-design',
  },
  {
    title: 'Software Development',
    image: '/Assets/internal-assets/services-software.webp',
    desc: 'Custom software solutions tailored to your business goals. Scalable, efficient, and designed for optimal performance.',
    route: '/software-development',
  },
  {
    title: 'IT Consulting',
    image: '/Assets/internal-assets/services-consulting.webp',
    desc: 'Expert IT consulting to streamline your tech strategy. Get guidance on infrastructure, security, and digital growth.',
    route: '/it-consulting',
  },
  {
    title: 'Graphic Design',
    image: '/Assets/internal-assets/services-graphics.webp',
    desc: 'Bring your ideas to life with stunning visuals. We create logos, banners, and designs that capture attention and inspire.',
    route: '/graphic-designing',
  },
  {
    title: 'Support & Maintenance',
    image: '/Assets/internal-assets/services-support.webp',
    desc: 'Keep your systems running smoothly with regular updates and technical support. Quick fixes to minimize downtime.',
    route: '/support-maintenance',
  },
  {
    title: 'Data Services',
    image: '/Assets/internal-assets/services-data-services.webp',
    desc: 'Manage, process, and analyze data effectively. Get actionable insights with our secure and reliable data solutions.',
    route: '/data-services',
  },
];

const Services = () => (
  <div className="bg-white min-h-screen text-gray-900">
    <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-12 mb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Our Services</h1>
        <p className="text-lg text-gray-600 mb-4">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {services.slice(0, 3).map((service) => (
          <div className="flex flex-col items-center" key={service.title}>
            <div className="relative w-64 h-40 group">
              <Link
                to={service.route}
                className="w-full h-full bg-cover bg-center rounded-lg shadow-lg flex items-end relative"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <p className="text-white text-center px-4 text-sm">
                    {service.desc}
                  </p>
                </div>
              </Link>
            </div>
            <div className="mt-4 text-lg font-semibold text-blue-700 text-center">
              {service.title}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {services.slice(3, 7).map((service) => (
          <div className="flex flex-col items-center" key={service.title}>
            <div className="relative w-56 h-36 group">
              <Link
                to={service.route}
                className="w-full h-full bg-cover bg-center rounded-lg shadow-lg flex items-end relative"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <span className="absolute top-2 right-2 w-8 h-8 bg-blue-600 rounded-full opacity-70 group-hover:scale-110 transition-transform"></span>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <p className="text-white text-center px-4 text-sm">
                    {service.desc}
                  </p>
                </div>
              </Link>
            </div>
            <div className="mt-4 text-lg font-semibold text-blue-700 text-center">
              {service.title}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.slice(7).map((service) => (
          <div className="flex flex-col items-center" key={service.title}>
            <div className="relative w-56 h-36 group">
              <Link
                to={service.route}
                className="w-full h-full bg-cover bg-center rounded-lg shadow-lg flex items-end relative"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <span className="absolute top-2 right-2 w-8 h-8 bg-blue-600 rounded-full opacity-70 group-hover:scale-110 transition-transform"></span>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <p className="text-white text-center px-4 text-sm">
                    {service.desc}
                  </p>
                </div>
              </Link>
            </div>
            <div className="mt-4 text-lg font-semibold text-blue-700 text-center">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
