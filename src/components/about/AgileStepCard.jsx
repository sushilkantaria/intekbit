import React from 'react';

const AgileStepCard = ({ number, title, children }) => (
  <div className="rounded shadow p-4">
    <div className="flex items-center gap-2 mb-1">
      <span className="font-bold text-blue-600">{number}</span>
      <span className="font-semibold text-white">{title}</span>
    </div>
    <div className="text-white text-sm">{children}</div>
  </div>
);

export default AgileStepCard;
