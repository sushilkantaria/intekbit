import React from 'react';

const MissionVisionCard = ({ image, alt, title, children }) => (
  <div className="flex-1 rounded-2xl backdrop-blur-lg backdrop-saturate-150 p-6 relative group shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)]">
    {/* Glow effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-0 shadow-[-8px_0_16px_4px_rgb(255,0,128),8px_0_16px_4px_rgb(0,98,255)]" />
    <div className="flex items-center gap-4 mb-2">
      <img src={image} alt={alt} className="h-12 w-12 rounded-full invert-75" />
      <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
    </div>
    <p className="text-white">{children}</p>
  </div>
);

export default MissionVisionCard;
