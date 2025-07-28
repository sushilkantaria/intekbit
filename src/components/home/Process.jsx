import React from 'react';
import './SolarSystemProcess.css';

const steps = [
  { title: 'Planning', description: 'Initial strategy and scope definition.' },
  { title: 'Design', description: 'Wireframes, mockups, and UI/UX design.' },
  { title: 'Development', description: 'Frontend and backend coding.' },
  { title: 'Testing', description: 'Debugging and QA process.' },
  { title: 'Deployment', description: 'Hosting and going live.' },
  { title: 'Maintenance', description: 'Ongoing support and updates.' },
];

const ProcessSection = () => {
  return (
    <section className="solar-section">
      {/* Sun Heading */}
      <div className="solar-sun">
        <h2 className="sun-text">Our Process</h2>
      </div>

      {/* Arcs & Planets */}
      <div className="orbit-container">
        {steps.map((step, index) => {

          return (
            <div
              key={step.title + index}
              className={`orbit-rotator orbit-${index + 1}`}
            >
              <div
                className="planet-rotating"
                style={{
                  transform: `translateX(-50%) translateY(${
                    -350 + index * 90
                  }px)`,
                }}
              >
                <div className="planet-glow group">
                  <span className="planet-number">{index + 1}</span>
                  <p className="planet-title">{step.title}</p>
                  <div className="planet-desc">{step.description}</div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Half Orbits */}
        {[1, 2, 3, 4, 5, 6].map((o, i) => (
          <div key={i} className={`orbit orbit-${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
