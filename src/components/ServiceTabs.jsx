import { HiCheckCircle, HiSquares2X2, HiMinus, HiPlus } from 'react-icons/hi2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from './ui/ParticleBackground';
const ServiceTabs = ({ servicesData }) => {
  const navigate = useNavigate();
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
      <section className="min-h-screen max-w-7xl mx-auto px-12 flex items-center justify-between relative overflow-hidden">
        {/* Video background if heroImage is mp4 */}
        {heroImage && heroImage.endsWith('.mp4') && (
          <video
            src={heroImage}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        )}
        <div className="flex-1 max-w-3xl relative z-10">
          <h1 className="text-4xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg font-bold leading-[1.3] mb-6">
            {heroTitle}
          </h1>
          <p className="text-[#BBBABA] text-[1.1rem] leading-[1.6] text-left">
            {heroDescription}
          </p>
        </div>
        {/* Only show image if not mp4 */}
        {heroImage && !heroImage.endsWith('.mp4') && (
          <div className="flex-1 flex justify-center p-4 max-w-md relative z-10">
            <img
              src={heroImage}
              alt="Service Visual"
              className="max-w-full h-auto object-contain"
            />
          </div>
        )}
      </section>
      <div className="bg-gray-300">
        {/* INDUSTRIES SECTION */}
        <section className="max-w-6xl mx-auto py-16 text-gray-800">
          <h1 className="text-4xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg font-semibold mb-4 leading-snug">
            {industriesTitle}
          </h1>
          <p className="text-gray-900 mb-4 text-lg">{industriesDescription}</p>
          <ul className="space-y-8">
            {industries &&
              industries.map((item, index) => (
                <li key={index} className="flex items-center text-2xl">
                  <HiCheckCircle className="w-8 h-8 mr-3 rounded-full bg-gray-700 text-green-500" />
                  {item}
                </li>
              ))}
          </ul>
          <p className="mt-4 text-gray-900 text-base leading-relaxed">
            {contactCtaDescription}
          </p>
        </section>
      </div>
      {/* WHY US SECTION */}
      <div className='bg-gray-800'>
        <section className="max-w-6xl mx-auto py-20 text-white">
          <h2 className="text-4xl font-semibold mb-10 leading-snug">
            Why{' '}
            <span className="bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
              choose Intekbit Solutions
            </span>{' '}
            as your web development partner
          </h2>
          <div className="flex flex-col gap-8">
            {reasons &&
              reasons.map((item, index) => (
                <div
                  className="flex items-start gap-6 rounded-xl px-8 py-6 bg-gradient-to-br from-[#181F2A] to-[#232A3A] via-[#2D1A3A] border border-[#232A3A] shadow-[0_2px_12px_0_rgba(30,58,138,0.10)] transition-transform duration-300 hover:scale-[1.01]"
                  key={index}
                >
                  <div className="my-auto mr-4">
                    <HiSquares2X2 className="w-10 h-10 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-100">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <button
            className="mt-12 px-8 py-3 shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] backdrop-blur-lg backdrop-saturate-150 text-white text-base rounded-3xl hover:bg-red-600 transition-colors duration-300"
            onClick={() => navigate('/contact')}
          >
            {contactCtaText}
          </button>
        </section>
        {/* TECH STACK SECTION */}
        <section className="text-white max-w-7xl mx-auto py-4">
          <h2 className="text-4xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg font-semibold mb-4 text-center">
            {techStackTitle}
          </h2>
          <p className="mb-5 text-gray-400 text-base leading-relaxed text-center">
            {techStackDescription}
          </p>
          <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto justify-items-center mt-4">
            {techs &&
              techs.map((tech, index) => (
                <div
                  key={index}
                  className="w-full max-w-xs h-36 p-2 px-6 border border-white/10 rounded-tl-2xl rounded-br-2xl flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 relative shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] backdrop-blur-lg backdrop-saturate-150"
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
        {/* CONTACT CTA SECTION */}
        <section className="max-w-6xl mx-auto py-20 text-white text-center px-8">
          <p className="text-2xl leading-loose text-gray-100">
            {contactCtaDescription}
          </p>
          <button
            className="shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] text-white text-base px-8 py-3 mt-4 rounded-3xl backdrop-blur-lg backdrop-saturate-150 hover:bg-red-600 transition-colors duration-300"
            onClick={() => navigate('/contact')}
          >
            {contactCtaText}
          </button>
        </section>
      </div>
      {/* FAQ SECTION */}
      <div className="bg-gray-300">
        <section className="max-w-6xl mx-auto text-black py-8">
          <h2 className="text-2xl bg-gradient-to-b from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg font-semibold mb-10 text-left lowercase">
            Frequently asked questions (FAQs)
          </h2>
          <div className="border-t border-gray-900">
            {faqData &&
              faqData.map((item, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-900 py-4 transition-all duration-300 ${
                    faqOpenIndex === index ? 'bg-opacity-10' : ''
                  }`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer text-base font-medium"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <div className="w-7 h-7 rounded-full shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] flex items-center justify-center">
                      {faqOpenIndex === index ? (
                        <HiMinus className="w-4 h-4 text-gray-800" />
                      ) : (
                        <HiPlus className="w-4 h-4 text-gray-800" />
                      )}
                    </div>
                  </div>
                  {faqOpenIndex === index && (
                    <div className="mt-3 text-gray-700 text-base leading-relaxed pr-2">
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
export default ServiceTabs;
