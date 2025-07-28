import { HiCheckCircle, HiSquares2X2, HiMinus, HiPlus } from 'react-icons/hi2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import heroImage from '../assets/cloud.png';
import { techs, reasons, faqData } from '../components/servicesContent';

const Service = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <section className="min-h-screen px-12 flex items-center justify-between">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-white text-[2.8rem] font-bold leading-[1.3] mb-6">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="text-[#bbbaba] text-[1.1rem] leading-[1.6] text-left">
              We specialize in building responsive and powerful web solutions
              tailored to your business needs. Our team ensures your online
              presence is fast, secure, and visually stunning.
            </p>
          </div>
          <div className="flex-1 flex justify-center p-4 max-w-md">
            <img
              src={heroImage}
              alt="Service Visual"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* Business Types Section */}

        <section className="text-white px-12 py-2 -mt-5">
          <h1 className="text-4xl font-semibold mb-4 leading-snug">
            What <span className="text-[#4a5fff]">types of businesses</span> can
            benefit
            <br />
            from our website development service [industries we cater to]
          </h1>

          <p className="text-gray-400 mb-2 text-lg">
            Our web services include the development for such popular categories
            as:
          </p>

          <ul className="space-y-5">
            {[
              'Marketing',
              'Finances & Banking',
              'E-commerce',
              'Education',
              'Social media',
            ].map((item, index) => (
              <li key={index} className="flex items-center text-xl">
                <HiCheckCircle className="w-5 h-5 mr-3 rounded-full p-1 bg-green-100 text-green-500" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-2 text-gray-300 text-base leading-relaxed">
            Whether you're a startup or an enterprise, mobile apps open doors to
            direct customer engagement. <br />
            Let us help you build a solution tailored to your industry needs.
          </p>
        </section>

        {/* Why Us Section */}

        <section className="text-white px-12 py-16 mt-36 mb-16">
          <h2 className="text-4xl font-semibold mb-10 leading-snug">
            Why{' '}
            <span className="text-[#4a5fff]">choose Intekbit Solutions</span> as
            your web development partner
          </h2>

          <div className="flex flex-col gap-8">
            {reasons.map((item, index) => (
              <div
                className="flex items-start gap-6backdrop-blur-sm rounded-xl px-8 py-6 bg-gray-200 mb-12 p-2"
                key={index}
              >
                <div className="mt-12 mr-4">
                  <HiSquares2X2 className="w-10 h-10 text-red-500" />
                </div>
                <div>
                  <h3 className="mt-11 text-lg font-semibold mb-3 text-black">
                    {item.title}
                  </h3>
                  <p className="text-black text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="mt-12 px-8 py-3 bg-red-500 text-white text-base rounded-lg hover:bg-red-600 transition-colors duration-300"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
        </section>

        {/* Tech Stack Section */}

        <section className="text-white px-12 py-4">
          <h2 className="text-4xl font-semibold mb-4 text-left">
            Our <span className="text-[#4a5fff]">Tech Stack</span>
          </h2>
          <p className="max-w-5xl mb-5 text-gray-400 text-base leading-relaxed text-left">
            Each time inspired by our previous experience and skills, we are
            aimed at creating web development solutions that are perfectly
            customized to your requirements. Our tech stack combines both the
            latest and proven tools to launch projects of any scale and
            complexity. Each time inspired by our previous experience and
            skills, we are aimed at creating web development solutions that are
            perfectly customized to your requirements. Our tech stack combines
            both the latest and proven tools to launch projects of any scale and
            complexity.
          </p>

          <div className="grid grid-cols-3 gap-x-12 gap-y-20 max-w-3xl mx-auto justify-items-center mt-16">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 w-full max-w-xs h-36 p-2 px-6 border border-white/10 rounded-tl-2xl rounded-br-2xl flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 relative"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-24 object-contain mb-1"
                />
                <div className="text-sm text-gray-300 text-center relative pt-6 w-full">
                  <span className="absolute top-0 left-1/10 w-4/5 h-px bg-red-500"></span>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className=" text-white text-center px-8 py-12">
          <p className="text-2xl leading-loose text-gray-100 max-w-2xl mx-auto mt-12 mb-8">
            If you would like to join the number of companies that have chosen
            us and thereby discovered new opportunities for development and
            scaling, write to us. We will carefully analyze your idea and select
            the best technologies and methods for bringing it to life.
          </p>
          <button
            className="bg-red-500 text-white text-base px-8 py-3 rounded-md hover:bg-red-600 transition-colors duration-300"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
        </section>

        <section className="text-white px-12 py-4">
          <h2 className="text-2xl font-semibold mb-10 text-left lowercase">
            Frequently asked questions (FAQs)
          </h2>

          <div className="border-t border-gray-700">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`border-b border-gray-700 py-4 transition-all duration-300 ${
                  activeIndex === index ? 'bg-opacity-10' : ''
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer text-base font-medium"
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center">
                    {activeIndex === index ? (
                      <HiMinus className="w-4 h-4 text-white" />
                    ) : (
                      <HiPlus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>

                {activeIndex === index && (
                  <div className="mt-3 text-gray-400 text-base leading-relaxed pr-2">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
