import React from 'react';

const AgileStepCard = ({ number, title, children }) => (
  <div className="bg-white rounded shadow p-4">
    <div className="flex items-center gap-2 mb-1">
      <span className="font-bold text-blue-600">{number}</span>
      <span className="font-semibold">{title}</span>
    </div>
    <div className="text-gray-600 text-sm">{children}</div>
  </div>
);

export default AgileStepCard;
