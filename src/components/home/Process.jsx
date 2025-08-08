// import React, { useEffect, useRef, useState } from 'react';
// import './ProcessSection.css';
// import processSteps from '../../data/home/processSteps';

// const ProcessSection = () => {
//   const sectionRef = useRef(null);
//   const [visibleSteps, setVisibleSteps] = useState([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = Array.from(
//               sectionRef.current.querySelectorAll('.process-step')
//             ).indexOf(entry.target);
//             setVisibleSteps((prev) => {
//               const updated = [...prev];
//               updated[index] = true;
//               return updated;
//             });
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const stepElements = sectionRef.current.querySelectorAll('.process-step');
//     stepElements.forEach((step) => observer.observe(step));

//     return () => stepElements.forEach((step) => observer.unobserve(step));
//   }, []);

//   const [activeStep, setActiveStep] = useState(null);

//   return (
//     <section className="unico-style-process" ref={sectionRef}>
//       <h2
//         className="section-heading"
//         data-aos="fade-up"
//         data-aos-duration="1000"
//       >
//         <span className="text-5xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
//           Our Process
//         </span>
//       </h2>

//       <div
//         className="description-center"
//         data-aos="fade-up"
//         data-aos-duration="1000"
//       >
//         <h3>{activeStep ? activeStep.title : 'This is our process'}</h3>
//         <p>
//           {activeStep
//             ? activeStep.details
//             : 'We follow a thoughtful 5-step approach to deliver exceptional user experiences.'}
//         </p>
//       </div>

//       <div className="arc-container">
//         {processSteps.map((step, index) => (
//           <div
//             className={`process-step ${visibleSteps[index] ? 'visible' : ''}`}
//             key={index}
//             onMouseEnter={() => setActiveStep(step)}
//             // onMouseLeave={() => setActiveStep(null)}
//           >
//             <img src={step.icon} alt={step.title} className="plane-icon" />
//             <div className="step-title">
//               {index + 1}. {step.title}
//             </div>
//             <p className="step-desc">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;







import React, { useEffect, useRef, useState } from 'react';
import './ProcessSection.css';
import processSteps from '../../data/home/processSteps';

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [expandedStepIndex, setExpandedStepIndex] = useState(null);

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

  const isMobile = () => window.innerWidth <= 750;

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

      {/* Desktop/Tablet Description Center */}
      <div
        className="description-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h3>
          {expandedStepIndex !== null
            ? processSteps[expandedStepIndex].title
            : 'This is our process'}
        </h3>
        <p>
          {expandedStepIndex !== null
            ? processSteps[expandedStepIndex].details
            : 'We follow a thoughtful 5-step approach to deliver exceptional user experiences.'}
        </p>
      </div>

      <div className="arc-container">
        {processSteps.map((step, index) => {
          const isExpanded = expandedStepIndex === index;

          return (
            <div
              className={`process-step ${visibleSteps[index] ? 'visible' : ''} ${
                isMobile() && isExpanded ? 'active-mobile-step' : ''
              }`}
              key={index}
              onClick={() => {
                if (isMobile()) {
                  setExpandedStepIndex(isExpanded ? null : index);
                }
              }}
              onMouseEnter={() => {
                if (!isMobile()) {
                  setExpandedStepIndex(index);
                }
              }}
            >
              <img src={step.icon} alt={step.title} className="plane-icon" />
              <div className="step-title">
                {index + 1}. {step.title}
              </div>
              <p className="step-desc">{step.description}</p>

              {/* Show details only in mobile when expanded */}
              {isMobile() && isExpanded && (
                <div className="step-details">{step.details}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessSection;
