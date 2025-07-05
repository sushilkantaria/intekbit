import React from 'react';

const ProcessSection = ({
  processInfo,
  processSteps,
  handleProcessStepHover,
}) => (
  <section className="py-16 bg-gray-900" id="process">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 flex flex-col items-center md:items-start">
        <img
          src={processInfo.icon}
          alt="Step Icon"
          className="w-24 h-24 mb-4"
        />
        <h3 className="text-xl font-bold text-blue-500 mb-2">
          {processInfo.title}
        </h3>
        <p className="text-white">{processInfo.description}</p>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className={`cursor-pointer bg-blue-50 rounded p-4 shadow hover:bg-blue-100 transition ${
              processInfo.title === step.title ? 'border-2 border-blue-400' : ''
            }`}
            onMouseOver={() => handleProcessStepHover(step)}
          >
            <span className="block text-2xl font-bold text-blue-500 mb-2">
              {index + 1}
            </span>
            <p className="font-semibold text-blue-500 mb-1">{step.title}</p>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
