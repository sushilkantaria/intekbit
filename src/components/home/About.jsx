import React from 'react';
import aboutData from '../../data/home/about';

const AboutSection = ({ activeTab, switchContent }) => (
  <section className="py-16 bg-white text-black" id="about">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4">
      {/* Left Section */}
      <div
        className="flex-1"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h2 className="text-2xl font-bold mb-8">
          Everything You Need to Know About Intekbit Solutions
        </h2>
        <div className="flex gap-4 mb-8">
          {['mission', 'vision', 'values'].map((tab) => (
            <div key={tab} className="relative group">
              <button
                onClick={() => switchContent(tab)}
                className={`px-4 py-2 rounded-2xl transition-all duration-300 cursor-pointer w-full relative z-10 text-white
                  ${
                    tab === activeTab
                      ? 'shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07),-4px_0_8px_2px_rgba(255, 0, 128, 0.452),4px_0_8px_2px_rgb(0,98,255)]'
                      : 'shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)]'
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
              {tab === activeTab && (
                <div className="absolute inset-0 rounded-2xl opacity-100 transition duration-800 pointer-events-none z-0 shadow-[-4px_0_8px_2px_rgb(255,0,128),4px_0_8px_2px_rgb(0,98,255)]" />
              )}
            </div>
          ))}
        </div>
        <div>
          {activeTab === 'mission' && (
            <p data-aos="zoom-in">{aboutData.mission}</p>
          )}
          {activeTab === 'vision' && (
            <p data-aos="zoom-in">{aboutData.vision}</p>
          )}
          {activeTab === 'values' && (
            <ul className="list-disc pl-5" data-aos="zoom-in">
              {aboutData.values.map((val) => (
                <li key={val}>{val}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* Divider: vertical on desktop, horizontal on mobile (hidden on mobile) */}
      <div
        className="hidden md:block my-8 md:my-0 md:mx-4 bg-gray-300 w-full h-px md:w-px md:h-100"
        aria-hidden="true"
        data-aos="zoom-in"
        data-aos-duration="900"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
      ></div>
      {/* Right Section (hidden on mobile) */}
      <div
        className="hidden md:block flex-1 space-y-4"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {aboutData.aboutParagraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
