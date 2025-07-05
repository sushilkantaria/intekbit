import React from 'react';
import ServiceTabs from '../components/ServiceTabs';
import graphicDesigning from '../data/graphicDesigning';

const GraphicDesigning = () => {
  return (
    <ServiceTabs
      servicesData={graphicDesigning}
      mainTitle="Graphic Designing"
      description="At Intekbit Solutions Pvt. Ltd., we don’t just design things—we capture the emotions behind them and infuse that essence into every visual. Our goal is to create designs that resonate with users on an emotional level, making your brand not just seen but felt. Unlike others, we blend creativity, strategy, and innovation to craft unique, impactful visuals that leave a lasting impression. Whether it’s a logo, branding, or marketing material, we ensure every design tells a story that connects and converts. Choose Intekbit for designs that don’t just look good—they feel right!"
      image="/Assets/internal-graphicdesigning.webp"
    />
  );
};

export default GraphicDesigning;
