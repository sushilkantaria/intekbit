import React from 'react';

const AgileStepCard = ({ number, title, children, isActive, onHover }) => (
  <div
    className="rounded transition duration-300 cursor-pointer w-full"
    onMouseEnter={onHover}
  >
    {/* Number + Title */}
    <div className="flex items-center gap-2 mb-1">
      <span className="font-bold text-blue-500 text-lg w-7 h-7 flex items-center justify-center">
        {number}
      </span>
      <span className="font-semibold text-white">{title}</span>
    </div>

    {/* Slide-down content */}
    <div
      className={`text-white text-sm mt-2 ms-8 overflow-hidden transition-all duration-500 ease-in-out ${
        isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      {children}
    </div>
  </div>
);

export default AgileStepCard;
