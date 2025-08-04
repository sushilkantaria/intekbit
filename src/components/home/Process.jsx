import React, { useEffect, useRef, useState } from 'react';
import './ProcessSection.css';
import Plane1 from '../../assets/plane1.png'; // Replace with your own plane icons
import Plane2 from '../../assets/plane2.png';
import Plane3 from '../../assets/plane3.png';
import Plane4 from '../../assets/plane4.png';
import Plane5 from '../../assets/plane5.png';

const steps = [
  {
    icon: Plane1,
    title: 'Requirement Analysis',
    description: 'Understand your goals',
    details: 'We begin with a detailed discussion to understand your business goals, challenges, and expectations. This step ensures clarity, aligns our teams, and sets the foundation for a successful project.'
  },
  {
    icon: Plane2,
    title: 'Planning & Strategy',
    description: 'Set the direction',
    details: 'After gathering the requirements, we outline the scope, create timelines, and decide on the right technology stack. Our strategic roadmap ensures the project stays on track and meets key milestones.'
  },
  {
    icon: Plane3,
    title: 'Design & Wireframing',
    description: 'Visualize the solution',
    details: 'We convert ideas into intuitive designs. This includes creating wireframes, user flows, and UI/UX mockups to visualize the final product before development begins.'
  },
  {
    icon: Plane4,
    title: 'Development & Deployment',
    description: 'Build & launch',
    details: 'Our team transforms the design into a fully functional solution using clean, scalable code. After thorough testing, we deploy the product to the live environment with complete quality assurance.'
  },
  {
    icon: Plane5,
    title: 'Support & Maintenance',
    description: 'Ensure long-term success',
    details: 'We value long-term relationships. After deployment, we provide regular updates, address feedback, and ensure your solution remains stable, secure, and up to date with your evolving needs.'
  }
];


const ProcessSection = () => {
  const sectionRef = useRef(null);
  const [visibleSteps, setVisibleSteps] = useState([]);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sectionRef.current.querySelectorAll('.process-step')).indexOf(entry.target);
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
    <h2 className="section-heading">
      <span className="highlight">Our Process</span>
    </h2>

    <div className="description-center">
      <h3>{activeStep ? activeStep.title : 'This is our process'}</h3>
      <p>{activeStep ? activeStep.details : 'We follow a thoughtful 5-step approach to deliver exceptional user experiences.'}</p>
    </div>

    <div className="arc-container">
      {steps.map((step, index) => (
        <div
  className={`process-step ${visibleSteps[index] ? 'visible' : ''}`}
  key={index}
  onMouseEnter={() => setActiveStep(step)}
  // onMouseLeave={() => setActiveStep(null)}
>
  <img src={step.icon} alt={step.title} className="plane-icon" />
  <div className="step-title">{index + 1}. {step.title}</div>
  <p className="step-desc">{step.description}</p>
</div>

      ))}
    </div>
  </section>
);

};

export default ProcessSection;
