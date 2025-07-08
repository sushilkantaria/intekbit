import React from 'react';

const CoreValueCard = ({ icon, iconColor, title, children }) => (
  <div
    className="flex flex-col items-center rounded-2xl p-6 shadow relative"
    style={{
      background: 'rgba(17,24,39,0.85)', // Tailwind bg-gray-900 with opacity
      border: '1.5px solid rgba(255,255,255,0.35)',
      boxShadow:
        '0 2px 12px 0 rgba(30,58,138,0.13), 0 1px 8px 0 rgba(136,19,55,0.10), 0 1px 6px 0 rgba(202,138,4,0.08), 0 1px 4px 0 rgba(6,78,59,0.08), inset 0 2px 16px 0 rgba(255,255,255,0.10), inset 0 0 12px 2px rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.05)',
      backdropFilter: 'blur(18px) saturate(180%)',
      WebkitBackdropFilter: 'blur(18px) saturate(180%)',
      boxSizing: 'border-box',
    }}
  >
    <span className={`text-3xl mb-2 ${iconColor}`}>{icon}</span>
    <h3 className="font-semibold mb-1 text-white">{title}</h3>
    <p className="text-gray-200 text-sm text-center">{children}</p>
  </div>
);

export default CoreValueCard;
