import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from './ui/ParticleBackground';

// import { HiArrowRight } from 'react-icons/hi';
import { HiArrowRight, HiArrowUp } from 'react-icons/hi';

import { HiCheckCircle, HiSquares2X2, HiMinus, HiPlus } from 'react-icons/hi2';

import {
  FaMicroscope,
  FaChartLine,
  FaShoppingCart,
  FaTruck,
  FaGraduationCap,
  FaWallet,
  FaGamepad,
  FaIndustry,
  FaHeartbeat,
  FaPlane,
  FaChalkboard,
  FaBroadcastTower,
  FaHandsHelping,
  FaBusAlt,
  FaGlobe,
  FaUtensils,
  FaUniversity,
  FaLaptopCode,
  FaStore,
  FaPalette,
  FaBriefcaseMedical,
  FaWarehouse,
  FaCogs,
  FaBoxes,
  FaLayerGroup,
  FaCity,
  FaTools,
  FaLandmark,
} from 'react-icons/fa';

const ServiceTabs = ({ servicesData }) => {
  const navigate = useNavigate();

  const industryIcons = {
    // AI/ML
    'Healthcare Diagnostics': <FaMicroscope />,
    'Finance & Risk Management': <FaChartLine />,
    'E-commerce Personalization': <FaShoppingCart />,
    'Logistics & Supply Chain': <FaTruck />,
    'Education & EdTech': <FaGraduationCap />,

    // App Development
    'Healthcare & Wellness': <FaHeartbeat />,
    'Fintech & Banking': <FaWallet />,
    'E-commerce & Delivery': <FaShoppingCart />,
    'Travel & Tourism': <FaPlane />,
    'EdTech & Learning Platforms': <FaChalkboard />,

    // Cloud
    'Banking & Fintech': <FaWallet />,
    'Healthcare & Biotech': <FaMicroscope />,
    'E-commerce & Marketplaces': <FaChartLine />,
    'Gaming & Streaming': <FaGamepad />,
    'Education & LMS': <FaGraduationCap />,
    'Logistics & Transportation': <FaTruck />,
    'Manufacturing & Automation': <FaIndustry />,

    // Web Dev
    'Healthcare Portals': <FaHeartbeat />,
    'E-commerce & Retail': <FaShoppingCart />,
    'Education & E-learning': <FaGraduationCap />,
    'Finance & Banking': <FaWallet />,
    'Hospitality & Travel': <FaPlane />,
    'Media & Entertainment': <FaBroadcastTower />,

    // 🖼️ Graphic Design
    'Retail & E-commerce': <FaStore />,
    'Media & Advertising': <FaBroadcastTower />,
    'Technology & Startups': <FaLaptopCode />,
    'Hospitality & Food': <FaUtensils />,
    'Events & Entertainment': <FaGamepad />,

    // 🛠️ IT Consulting
    'Banking and Financial Services': <FaWallet />,
    'Healthcare and Pharma': <FaBriefcaseMedical />,
    'Manufacturing and Industrial Automation': <FaCogs />,
    'Education and EdTech': <FaGraduationCap />,
    'E-commerce and Retail': <FaShoppingCart />,
    'Logistics and Transportation': <FaTruck />,
    'Startups and Tech Firms': <FaLaptopCode />,

    // 🧑‍💻 Software Development
    'Enterprise Resource Planning (ERP)': <FaLayerGroup />,
    'Healthcare Automation': <FaBriefcaseMedical />,
    'Retail Inventory Systems': <FaBoxes />,
    'Finance & Insurance': <FaWallet />,
    'Manufacturing Workflows': <FaCogs />,
    'Custom CRM Solutions': <FaTools />,
    'Education Technology Platforms': <FaGraduationCap />,

    // 🔧 Support & Maintenance
    'Healthcare & Hospitals': <FaBriefcaseMedical />,
    'Banking & Finance': <FaWallet />,
    'E-commerce Platforms': <FaShoppingCart />,
    'EdTech & Universities': <FaUniversity />,
    'IT & SaaS Startups': <FaLaptopCode />,
    'Transport & Logistics': <FaTruck />,
    'Government Portals': <FaCity />,

    // 🎨 UI/UX
    'EdTech & Learning': <FaGraduationCap />,
    'FinTech & Banking': <FaWallet />,
    'Travel & Hospitality': <FaPlane />,
    'B2B SaaS Platforms': <FaLaptopCode />,
    'Entertainment & Media': <FaGamepad />,

    // 🧠 Data Services
    // 'Finance & Insurance': <FaWallet />,
    'Healthcare & Pharma': <FaBriefcaseMedical />,
    // 'Retail & E-commerce': <FaShoppingCart />,
    // 'Logistics & Supply Chain': <FaTruck />,
    'Government & Public Sector': <FaLandmark />,
    'Education & Research': <FaGraduationCap />,
    'Manufacturing & Utilities': <FaIndustry />,

    // Default fallback
    default: <FaGlobe />,
  };

  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };
  if (!servicesData) return null;
  const {
    heroTitle,
    heroDescription,
    heroImage,
    industries,
    reasons,
    techs,
    faqData,
    industriesTitle,
    industriesDescription,
    techStackTitle,
    techStackDescription,
    contactCtaText,
    contactCtaDescription,
  } = servicesData;
  return (
    <div>
      {/* HERO SECTION */}
      <ParticleBackground />
      <section
        className="min-h-screen max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden gap- md:gap-10"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        {/* Video background if heroImage is mp4 */}
        {/* {heroImage && heroImage.endsWith('.mp4') && (
          <video
            src={heroImage}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        )} */}

        <div className="flex-1 max-w-3xl relative z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg font-bold leading-[1.3] mb-4 md:mb-6">
            {heroTitle}
          </h1>
          <p className="text-[#BBBABA] text-base md:text-[1.1rem] leading-[1.6] text-center md:text-left">
            {heroDescription}
          </p>
        </div>
        {/* Only show image if not mp4 */}
        {heroImage && !heroImage.endsWith('.mp4') && (
          <div className="flex-1 flex justify-center items-center p-2 md:p-4 w-full max-w-xs md:max-w-md relative z-10 mx-auto md:mx-0">
            <img
              src={heroImage}
              alt="Service Visual"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>
        )}
      </section>

      <div className="bg-gray-200">
        {/* INDUSTRIES SECTION */}

        <section
          className="max-w-6xl mx-auto py-10 md:py-16 text-gray-800 px-4 md:px-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-2xl md:text-4xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg font-semibold mb-2 md:mb-4 leading-snug text-center md:text-left">
            {industriesTitle}
          </h1>
          <p className="text-gray-900 mb-6 text-base md:text-lg text-center md:text-left">
            {industriesDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {industries.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-lg rounded-xl p-4 flex items-center gap-4 transition duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-10 h-10 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-xl">
                  {industryIcons[item] || industryIcons.default}
                </div>
                <h3 className="text-gray-800 font-medium text-base md:text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-900 text-sm md:text-base leading-relaxed text-center md:text-left">
            {contactCtaDescription}
          </p>
        </section>
      </div>

      {/* WHY US SECTION */}
      <div className="bg-black">
        <section
          className="max-w-6xl mx-auto py-10 md:py-20 text-white px-4 md:px-8"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-10 leading-snug text-center md:text-left">
            Why{' '}
            <span className="bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
              choose Intekbit Solutions
            </span>{' '}
            as your tech partner
          </h2>
          {/* <div className="flex flex-col gap-6 md:gap-8">
            {reasons &&
              reasons.map((item, index) => (
                <div
                  className="flex flex-col md:flex-row items-start gap-4 md:gap-6 rounded-xl px-4 md:px-8 py-4 md:py-6 bg-gradient-to-br from-[#181F2A] to-[#232A3A] via-[#2D1A3A] border border-[#232A3A] shadow-[0_2px_12px_0_rgba(30,58,138,0.10)] transition-transform duration-300 hover:scale-[1.01]"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={100 * index}
                >
                  <div className="my-auto mb-2 md:mb-0 md:mr-4 flex justify-center md:justify-start">
                    <HiSquares2X2 className="w-8 md:w-10 h-8 md:h-10 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-100 text-center md:text-left">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center md:text-left">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div> */}

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Reason cards */}
            <div className="flex-1 flex flex-col gap-6 md:gap-8">
              {reasons &&
                reasons.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-start gap-4 md:gap-6 rounded-xl px-4 md:px-8 py-4 md:py-6 bg-gradient-to-br from-[#181F2A] to-[#232A3A] via-[#2D1A3A] border border-[#232A3A] shadow-[0_2px_12px_0_rgba(30,58,138,0.10)] transition-transform duration-300 hover:scale-[1.01]"
                    data-aos="zoom-in"
                    data-aos-delay={100 * index}
                  >
                    <div className="my-auto mb-2 md:mb-0 md:mr-4 flex justify-center md:justify-start">
                      <HiSquares2X2 className="w-8 md:w-10 h-8 md:h-10 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-100 text-center md:text-left">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center md:text-left">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Right: Image with matching height */}
            <div className="flex-1 h-full flex justify-center items-start">
              <img
                src="/Assets/working-on-laptop.webp"
                alt="Why Intekbit"
                className="h-[570px] w-auto max-w-md rounded-xl shadow-xl object-contain"
                data-aos="fade-left"
                data-aos-delay="300"
              />
            </div>
          </div>

          <button
            className="mt-8 md:mt-12 px-6 md:px-8 py-2 md:py-3 
    mx-auto block
    shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] 
    backdrop-blur-lg backdrop-saturate-150 text-white text-sm md:text-base 
    rounded-3xl hover:bg-red-600 transition-colors duration-300"
            onClick={() => navigate('/contact')}
          >
            {contactCtaText}
          </button>
        </section>

        {/* TECH STACK SECTION */}
        <section
          className="text-white max-w-7xl mx-auto py-4 px-4 md:px-8"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl md:text-4xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg font-semibold mb-2 md:mb-4 text-center">
            {techStackTitle}
          </h2>
          <p className="mb-3 md:mb-5 text-gray-400 text-sm md:text-base leading-relaxed text-center">
            {techStackDescription}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto justify-items-center mt-4">
            {techs &&
              techs.map((tech, index) => (
                <div
                  key={index}
                  className="w-full max-w-xs h-28 md:h-36 p-2 px-4 md:px-6 border border-white/10 rounded-tl-2xl rounded-br-2xl flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 relative shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] backdrop-blur-lg backdrop-saturate-150"
                  data-aos="zoom-in"
                  data-aos-delay={100 * index}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 md:w-16 h-16 md:h-24 object-contain mb-1"
                  />
                  <div className="text-xs md:text-sm text-gray-300 text-center relative pt-4 md:pt-6 w-full">
                    <span className="absolute top-0 left-1/10 w-4/5 h-px bg-red-500"></span>
                    {tech.name}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* CONTACT CTA SECTION */}
        <section
          className="max-w-6xl mx-auto py-10 md:py-20 text-white text-center px-4 md:px-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-lg md:text-2xl leading-loose text-gray-100">
            {contactCtaDescription}
          </p>
          <button
            className="shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] text-white text-xs md:text-base px-4 md:px-8 py-2 md:py-3 mt-2 md:mt-4 rounded-3xl backdrop-blur-lg backdrop-saturate-150 hover:bg-red-600 transition-colors duration-300"
            onClick={() => navigate('/contact')}
          >
            {contactCtaText}
          </button>
        </section>
      </div>

      {/* FAQ SECTION */}
      {/* <div className="bg-gray-200">
        <section
          className="max-w-6xl mx-auto text-black py-8 md:py-8 px-4 md:px-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-lg md:text-2xl bg-gradient-to-b from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg font-semibold mb-6 md:mb-10 text-left lowercase">
            Frequently asked questions (FAQs)
          </h2>
          <div className="border-t border-gray-900">
            {faqData &&
              faqData.map((item, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-900 py-3 md:py-4 transition-all duration-300 ${
                    faqOpenIndex === index ? 'bg-opacity-10' : ''
                  }`}
                >
                  <div
                    className="flex justify-between items-center md:items-center cursor-pointer text-sm md:text-base font-medium gap-2 md:gap-0"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <div className="w-6 md:w-7 h-6 md:h-7 rounded-full shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] flex items-center justify-center">
                      {faqOpenIndex === index ? (
                        <HiMinus className="w-4 h-4 text-gray-800" />
                      ) : (
                        <HiPlus className="w-4 h-4 text-gray-800" />
                      )}
                    </div>
                  </div>
                  {faqOpenIndex === index && (
                    <div className="mt-2 md:mt-3 text-gray-700 text-xs md:text-base leading-relaxed pr-0 md:pr-2">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </section>
      </div>


       */}
      <div className="bg-gray-200">
        <section
          className="w-screen py-16 px-4 md:px-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between max-w-7xl mx-auto">
            {/* Left: Title */}
            <div className="md:w-[40%] w-full">
              <span className="text-sm font-semibold text-blue-600 border border-blue-600 px-3 py-1 rounded-md inline-block">
                FAQS
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
                You’ve likely got <br /> a few questions
              </h2>
            </div>

            {/* Right: FAQs */}
            <div className="md:w-[60%] w-full flex flex-col gap-4">
              {faqData &&
                faqData.map((item, index) => {
                  const isOpen = faqOpenIndex === index;
                  return (
                    <div
                      key={index}
                      className={`w-full rounded-xl bg-[#F5F8FF] px-6 py-5 transition-all duration-300 cursor-pointer ${
                        isOpen ? 'shadow-md' : 'hover:bg-[#E9F0FF]'
                      }`}
                      onClick={() => toggleFaq(index)}
                    >
                      {/* Question Row */}
                      <div className="w-full flex justify-between items-center">
                        <p className="text-lg md:text-xl font-semibold text-gray-900">
                          {item.question}
                        </p>
                        {isOpen ? (
                          <HiArrowUp className="text-blue-600 w-6 h-6" />
                        ) : (
                          <HiArrowRight className="text-blue-600 w-6 h-6" />
                        )}
                      </div>

                      {/* Answer */}
                      {isOpen && (
                        <div className="pt-4 text-gray-700 text-base md:text-lg leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ServiceTabs;
