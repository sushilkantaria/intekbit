import React, { useEffect } from 'react';

const ProcessSection = ({
  processInfo,
  processSteps,
  handleProcessStepHover,
}) => {
  // Add neo-style animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes neonPulse {
        0%, 100% { 
          box-shadow: 0 0 15px currentColor, 0 0 25px currentColor; 
        }
        50% { 
          box-shadow: 0 0 25px currentColor, 0 0 35px currentColor, 0 0 45px currentColor; 
        }
      }
      
      @keyframes rotateDots {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes glitchHover {
        0% { transform: translateX(0); }
        20% { transform: translateX(-1px); }
        40% { transform: translateX(1px); }
        60% { transform: translateX(-0.5px); }
        80% { transform: translateX(0.5px); }
        100% { transform: translateX(0); }
      }
      
      @keyframes numberZap {
        0% { 
          opacity: 0; 
          transform: scale(0.5) rotate(180deg); 
          filter: brightness(0.5);
        }
        50% { 
          opacity: 1; 
          transform: scale(1.1) rotate(0deg); 
          filter: brightness(1.5);
        }
        100% { 
          opacity: 1; 
          transform: scale(1) rotate(0deg); 
          filter: brightness(1);
        }
      }
      
      .process-step-active {
        animation: neonPulse 2s ease-in-out infinite;
      }
      
      .process-step-dots {
        animation: rotateDots 4s linear infinite;
      }
      
      .process-step:hover {
        animation: glitchHover 0.3s ease-in-out;
      }
      
      .process-step-number {
        animation: numberZap 0.6s ease-out;
      }
      
      .process-step:hover .process-step-number {
        filter: brightness(1.3) drop-shadow(0 0 10px currentColor);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-16 text-center relative" id="process">
      <div className="max-w-7xl mx-auto px-4">
        <h2 
          className="text-4xl font-bold text-blue-500 mb-16"
          data-aos="flip-up"
          data-aos-duration="800"
          data-aos-offset="200"
        >
          Our Process
        </h2>

        {/* Half-circle container */}
        <div
          className="relative mx-auto"
          style={{ width: '1000px', height: '500px' }}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          data-aos-delay="300"
        >
          {/* Arc background */}
          <div
            className="absolute inset-0 border-8 border-double border-[#8B5CF6] border-t-0 overflow-visible"
            style={{
              borderBottomLeftRadius: '500px',
              borderBottomRightRadius: '500px',
            }}
          />

          {/* Process Steps positioned around the arc */}
          {processSteps.map((step, index) => {
            const positions = [
              { top: '-5px', left: '-50px' }, // step-1
              { top: '230px', left: '30px' }, // step-2
              { top: '400px', left: '230px' }, // step-3
              { top: '400px', right: '230px' }, // step-4
              { top: '230px', right: '30px' }, // step-5
              { top: '-5px', right: '-50px' }, // step-6
            ];

            const colors = [
              {
                border: '#00FFD1', // Neo cyan
                shadow: 'rgba(0, 255, 209, 0.8)', // Neo cyan glow
                text: '#00FFD1', // Neo cyan text
              },
              {
                border: '#FF006E', // Neo magenta
                shadow: 'rgba(255, 0, 110, 0.8)', // Neo magenta glow
                text: '#FF006E', // Neo magenta text
              },
              {
                border: '#FFBE0B', // Neo yellow
                shadow: 'rgba(255, 190, 11, 0.8)', // Neo yellow glow
                text: '#FFBE0B', // Neo yellow text
              },
              {
                border: '#39FF14', // Neo lime green
                shadow: 'rgba(57, 255, 20, 0.8)', // Neo lime green glow
                text: '#39FF14', // Neo lime green text
              },
              {
                border: '#FB5607', // Neo orange
                shadow: 'rgba(251, 86, 7, 0.8)', // Neo orange glow
                text: '#FB5607', // Neo orange text
              },
              {
                border: '#3A86FF', // Neo blue
                shadow: 'rgba(58, 134, 255, 0.8)', // Neo blue glow
                text: '#3A86FF', // Neo blue text
              },
            ];

            const isActive = processInfo.title === step.title;

            return (
              <div
                key={index}
                className={`absolute w-32 h-32 border-4 border-gray-300 rounded-full bg-black flex flex-col items-center justify-center text-base cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-black group process-step ${
                  isActive ? 'process-step-active' : ''
                }`}
                style={{
                  ...positions[index],
                  borderColor: isActive ? colors[index].border : '#ddd',
                  boxShadow: isActive
                    ? `0px 0px 15px ${colors[index].shadow}`
                    : '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                onMouseOver={() => handleProcessStepHover(step)}
              >
                {/* Dotted circle border */}
                <div
                  className="absolute w-[140px] h-[140px] border-4 border-dashed rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 process-step-dots"
                  style={{
                    borderColor: colors[index].border,
                    top: '-10px',
                    left: '-10px',
                  }}
                />

                <span
                  className="font-bold text-xl process-step-number"
                  style={{ color: colors[index].text }}
                >
                  {index + 1}
                </span>
                <p className="text-xs mt-1 text-center px-1 leading-tight text-white font-medium">
                  {step.title.split(' ').map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}

          {/* Central info circle */}
          <div
            className="absolute rounded-full flex flex-col items-center justify-center text-center shadow-xl"
            style={{
              top: '35%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '380px',
              height: '380px',
              padding: '50px',
            }}
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="600"
          >
            <img
              src={processInfo.icon}
              alt="Step Icon"
              className="w-30 h-30 mb-4 border-2 border-white rounded-full"
            />
            <h3
              className="text-2xl font-bold mb-4 text-white leading-tight"
              id="process-title"
            >
              {processInfo.title}
            </h3>
            <p
              className="text-base text-white leading-relaxed"
              id="process-description"
            >
              {processInfo.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
