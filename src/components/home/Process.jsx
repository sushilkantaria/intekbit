import React, { useEffect, useRef, useState } from 'react';
import './ProcessSection.css';
import processSteps from '../../data/home/processSteps';

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(
              sectionRef.current.querySelectorAll('.process-step')
            ).indexOf(entry.target);
            setVisibleSteps((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const stepElements = sectionRef.current.querySelectorAll('.process-step');
    stepElements.forEach((step) => observer.observe(step));

    return () => stepElements.forEach((step) => observer.unobserve(step));
  }, []);

  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="unico-style-process" ref={sectionRef}>
      <h2
        className="section-heading"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="text-5xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
          Our Process
        </span>
      </h2>

      <div
        className="description-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h3>{activeStep ? activeStep.title : 'This is our process'}</h3>
        <p>
          {activeStep
            ? activeStep.details
            : 'We follow a thoughtful 5-step approach to deliver exceptional user experiences.'}
        </p>
      </div>

      <div className="arc-container">
        {processSteps.map((step, index) => (
          <div
            className={`process-step ${visibleSteps[index] ? 'visible' : ''}`}
            key={index}
            onMouseEnter={() => setActiveStep(step)}
            // onMouseLeave={() => setActiveStep(null)}
          >
            <img src={step.icon} alt={step.title} className="plane-icon" />
            <div className="step-title">
              {index + 1}. {step.title}
            </div>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
