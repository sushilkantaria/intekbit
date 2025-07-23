
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
          const planetPositions = [
            { top: '20%', left: '59%' },   // 1
            { top: '36%', left: '40%' },   // 2
            { top: '56%', left: '52%' },   // 3
            { top: '30%', left: '80%' },   // 4
            { top: '36%', left: '15%' },   // 5
            { top: '95%', left: '30%' },   // 6
          ];
          const pos = planetPositions[index];

          return (
            <div className={`orbit-rotator orbit-${index + 1}`}>
  <div
    className="planet-rotating"
    style={{
      transform: `translateX(-50%) translateY(${-350 + index * 90}px)`,
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
