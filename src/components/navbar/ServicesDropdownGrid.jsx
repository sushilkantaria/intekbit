import React from 'react';
import { Link } from 'react-router-dom';
import servicesList from '../../data/servicesList';

const ServicesDropdownGrid = () => (
  <div className="grid grid-cols-4 gap-x-12 gap-y-8 px-8 py-7 min-w-[1000px] max-w-[1100px] rounded-2xl shadow-[0_2px_12px_0_rgba(30,58,138,0.13),0_1px_8px_0_rgba(136,19,55,0.10),0_1px_6px_0_rgba(202,138,4,0.08),0_1px_4px_0_rgba(6,78,59,0.08),inset_0_2px_16px_0_rgba(255,255,255,0.10),inset_0_0_12px_2px_rgba(255,255,255,0.07),inset_0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-lg backdrop-saturate-150 text-left absolute left-1/2 -translate-x-1/2 bg-black">
    {servicesList.map((service, idx) => (
      <div key={idx} className="col-span-1 w-full relative">
        <Link
          to={service.path}
          className="peer w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-colors duration-200 relative z-10"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-lg text-2xl">
            {service.icon}
          </span>
          <span className="flex flex-col items-start">
            <span className="font-bold text-white text-base leading-tight whitespace-wrap">
              {service.label}
            </span>
            <span className="text-xs text-gray-300 mt-1 leading-tight">
              {service.desc}
            </span>
          </span>
        </Link>
        <div className="absolute inset-0 opacity-0 peer-hover:opacity-100 rounded-xl z-0 pointer-events-none shadow-[-4px_0_8px_4px_rgb(255,0,128),4px_0_8px_4px_rgb(0,98,255)] transition duration-800" />
      </div>
    ))}
  </div>
);

export default ServicesDropdownGrid;
