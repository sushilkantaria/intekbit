import { HiCheckCircle, HiSquares2X2, HiMinus, HiPlus } from 'react-icons/hi2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div className="max-w-6xl mx-auto">
        {/* HERO SECTION */}
        <section className="min-h-screen px-12 flex items-center justify-between">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-4xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg font-bold leading-[1.3] mb-6">
              {heroTitle}
            </h1>
            <p className="text-[#bbbaba] text-[1.1rem] leading-[1.6] text-left">
              {heroDescription}
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

        {/* INDUSTRIES SECTION */}
        <section className="text-white py-2 -mt-5">
          <h1 className="text-4xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg font-semibold mb-4 leading-snug">
            {industriesTitle}
          </h1>
          <p className="text-gray-400 mb-2 text-lg">{industriesDescription}</p>
          <ul className="space-y-5">
            {industries &&
              industries.map((item, index) => (
                <li key={index} className="flex items-center text-xl">
                  <HiCheckCircle className="w-5 h-5 mr-3 rounded-full p-1 bg-green-100 text-green-500" />
                  {item}
                </li>
              ))}
          </ul>
          <p className="mt-2 text-gray-300 text-base leading-relaxed">
            {contactCtaDescription}
          </p>
        </section>

        {/* WHY US SECTION */}
        <section className="text-white py-16">
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
                  className="flex items-start gap-6 rounded-xl px-8 py-6 bg-gradient-to-br from-[#181f2a] to-[#232a3a] via-[#2d1a3a] border border-[#232a3a] shadow-[0_2px_12px_0_rgba(30,58,138,0.10)] transition-transform duration-300 hover:scale-[1.01]"
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
        <section className=" text-white text-center px-8 my-12">
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

        {/* FAQ SECTION */}
        <section className="text-white py-8">
          <h2 className="text-2xl bg-gradient-to-b from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg font-semibold mb-10 text-left lowercase">
            Frequently asked questions (FAQs)
          </h2>
          <div className="border-t border-gray-700">
            {faqData &&
              faqData.map((item, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-700 py-4 transition-all duration-300 ${
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
                        <HiMinus className="w-4 h-4 text-white" />
                      ) : (
                        <HiPlus className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                  {faqOpenIndex === index && (
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

export default ServiceTabs;

// import React, { useState } from 'react';

// const ServiceTabs = ({ servicesData, mainTitle, description, image }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeService = servicesData[activeIndex];

//   return (
//     <div className="min-h-screen mt-20 w-[80%] mx-auto">
//       {/* <section className="group relative w-[80%] backdrop-blur-lg backdrop-saturate-150 mx-auto rounded-2xl p-6 border "> */}
//       {/* Glow Layer */}
//       {/* <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-0 shadow-[-8px_0_16px_4px_rgb(255,0,128),8px_0_16px_4px_rgb(0,98,255)]" /> */}
//       {/* Header Section (on top) */}
//       <div className="m mx-au px-4 py-8 flex flex-col md:flex-row items-center justify-between mb-8">
//         <div className="md:w-2/3 space-y-4">
//           {mainTitle && (
//             <h2 className="text-5xl font-black text-center mb-8 leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
//               {mainTitle}
//             </h2>
//           )}
//           {description && <p className="text-white">{description}</p>}
//         </div>
//         {image && (
//           <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
//             <img src={image} alt={mainTitle} />
//           </div>
//         )}
//       </div>

//       {/* Actual Content (tabs and details) below header */}

//       <div className="relative z-10">
//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           {servicesData.map((service, idx) => (
//             <div key={service.title} className="relative w-fit flex">
//               <button
//                 onClick={() => setActiveIndex(idx)}
//                 className={`px-4 py-2 rounded-2xl transition-all duration-300 cursor-pointer w-full relative z-10 text-white
//                     ${
//                       idx === activeIndex
//                         ? 'shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07),-4px_0_8px_2px_rgba(255, 0, 128, 0.452),4px_0_8px_2px_rgba(0, 98, 255, 0.488)] backdrop-blur-lg backdrop-saturate-150'
//                         : 'shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] hover:shadow-[-4px_0px_8px_4px_rgba(255,0,128,0.45),4px_0px_8px_4px_rgba(0,98,255,0.35)]'
//                     }
//                   `}
//               >
//                 {service.title}
//               </button>
//               {idx === activeIndex && (
//                 <div className="absolute inset-0 rounded-2xl opacity-100 transition duration-800 pointer-events-none z-0 shadow-[0_4px_4px_0_rgb(0,98,255),0_4px_4px_0_rgb(255,0,128)]" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Active Service Details */}
//         <div className="py-8">
//           {activeService.sections && (
//             <div className="space-y-6">
//               {activeService.sections.map((section, i) => {
//                 const isEven = i % 2 === 1;
//                 return (
//                   <div key={section.sectionTitle || i} className="mb-4">
//                     <div
//                       className={`w-full shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] backdrop-blur-lg backdrop-saturate-150 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start ${
//                         isEven ? 'md:flex-row-reverse' : ''
//                       }`}
//                     >
//                       {section.img && (
//                         <div className="flex-shrink-0 w-[176px] h-[96px] md:w-[176px] md:h-[96px] rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
//                           <img
//                             src={section.img}
//                             alt={section.sectionTitle}
//                             className="w-full h-full object-cover object-center"
//                             style={{ minWidth: 0, minHeight: 0 }}
//                           />
//                         </div>
//                       )}
//                       <div className="flex-1 min-w-0">
//                         <h3 className="text-xl font-black mb-2 leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
//                           {section.sectionTitle}
//                         </h3>
//                         <p className="text-white">{section.content}</p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {/* Optional Description, Frameworks, Libraries */}
//           {activeService.description && (
//             <div className="mb-4">
//               <p className="text-gray-300 mb-2">{activeService.description}</p>
//               {activeService.frameworks && (
//                 <div className="text-gray-300 mb-2">
//                   <span className="font-semibold">Frameworks: </span>
//                   {activeService.frameworks.join(', ')}
//                 </div>
//               )}
//               {activeService.libraries && (
//                 <div className="text-gray-300 mb-2">
//                   <span className="font-semibold">Libraries: </span>
//                   {activeService.libraries.join(', ')}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {/* </section> */}
//     </div>
//   );
// };

// export default ServiceTabs;
