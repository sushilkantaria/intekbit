import React from 'react';

const MissionVisionCard = ({ image, alt, title, children }) => (
  <div
    className="flex-1 rounded-2xl p-6 shadow relative group"
    style={{
      background: 'rgba(17,24,39,0.85)',
      border: '1.5px solid rgba(255,255,255,0.35)',
      boxShadow:
        '0 2px 12px 0 rgba(30,58,138,0.13), 0 1px 8px 0 rgba(136,19,55,0.10), 0 1px 6px 0 rgba(202,138,4,0.08), 0 1px 4px 0 rgba(6,78,59,0.08), inset 0 2px 16px 0 rgba(255,255,255,0.10), inset 0 0 12px 2px rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.05)',
      backdropFilter: 'blur(18px) saturate(180%)',
      WebkitBackdropFilter: 'blur(18px) saturate(180%)',
      boxSizing: 'border-box',
    }}
  >
    {/* Glow effect */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-0"
      style={{
        boxShadow:
          '0 0 24px 8px rgba(236,72,153,0.28), 0 0 32px 12px rgba(59,130,246,0.28), 0 0 40px 16px rgba(139,92,246,0.28)'
      }}
    />
    <div className="flex items-center gap-4 mb-2">
      <img src={image} alt={alt} className="h-12 w-12 rounded-full invert-75" />
      <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
    </div>
    <p className="text-white">{children}</p>
  </div>
);

export default MissionVisionCard;
