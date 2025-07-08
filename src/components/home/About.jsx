import React from 'react';

const AboutSection = ({ activeTab, switchContent }) => (
  <section className="py-16 text-white" id="about">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-4">
      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">
          Everything You Need to Know About Intekbit Solutions
        </h2>
        <div className="flex gap-2 mb-4">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === 'mission'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
            onClick={() => switchContent('mission')}
          >
            Mission
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === 'vision'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
            onClick={() => switchContent('vision')}
          >
            Vision
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === 'values'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
            onClick={() => switchContent('values')}
          >
            Values
          </button>
        </div>
        <div>
          {activeTab === 'mission' && (
            <p>
              At Intekbit Solutions Pvt. Ltd., we simplify challenges with
              smart, AI-powered solutions while staying by your side every step
              of the way. Our goal is to deeply understand your needs, deliver
              meaningful results, and create lasting partnerships.
            </p>
          )}
          {activeTab === 'vision' && (
            <p>
              We envision a world where innovation meets trust, and challenges
              become stepping stones to success. At Intekbit, we aim to inspire
              confidence and empower growth with solutions that truly make a
              difference.
            </p>
          )}
          {activeTab === 'values' && (
            <ul className="list-disc pl-5">
              <li>Trust</li>
              <li>Excellence</li>
              <li>Collaboration</li>
              <li>Reliability</li>
            </ul>
          )}
        </div>
      </div>
      {/* Right Section */}
      <div className="flex-1 space-y-4">
        <p>
          At Intekbit Solutions Pvt. Ltd., we transform problem statements into
          cutting-edge AI-powered solutions that simplify processes, save time,
          and embrace the future. We thrive on challenges and focus on
          delivering solutions that go beyond expectations. By blending
          creativity with a deep understanding of technology, we craft
          efficient, tailored systems that redefine modern problem-solving.
        </p>
        <p>
          What sets us apart is our unwavering commitment to collaboration. At
          Intekbit Solutions, we don't work for clients – we work with clients.
          Shoulder to shoulder, hand in hand, we stand by them through every
          challenge, ensuring their journey is as seamless as the solutions we
          deliver.
        </p>
        <p>
          With trust and innovation as our core principles, we don't just solve
          problems – we create opportunities for growth, efficiency, and staying
          ahead in a constantly evolving world. Let Intekbit Solutions pave the
          way to your success with solutions that matter today and excel
          tomorrow.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
