import React from 'react';
import './whyhireus.css';
import { FaSearch, FaDraftingCompass, FaCogs, FaChartLine, FaLifeRing } from 'react-icons/fa';

const steps = [
  { icon: <FaSearch />, title: 'Consultation', description: 'Understanding your goals and aligning our strategy.' },
  { icon: <FaDraftingCompass />, title: 'Planning & Design', description: 'Structuring technical blueprint and action plan.' },
  { icon: <FaCogs />, title: 'Development', description: 'Bringing your product to life with robust engineering.' },
  { icon: <FaChartLine />, title: 'Optimization', description: 'Testing, improving, and launching for success.' },
  // { icon: <FaLifeRing />, title: 'Support', description: 'We stay with you to ensure everything runs smoothly.' },
];

const WhyHireUsSection = () => {
  return (
    <section className="whyhire-section">
      <h2 className="whyhire-heading">
        <span className="highlight">Easy and Streamlined</span> <br />
        Collaboration Process
      </h2>

      <div className="whyhire-wrapper">
        {steps.map((step, index) => (
          <div className="whyhire-card" key={index}>
            <div className="whyhire-icon">{step.icon}</div>
            <div>
              <h3>0{index + 1}. {step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyHireUsSection;
