import React from 'react';
import ServiceTabs from '../ServiceTabs';
import uiuxDesign from '../../data/services/uiuxDesign';

const UIUXDesign = () => {
  return (
    <ServiceTabs
      servicesData={uiuxDesign}
      mainTitle="UI-UX Design"
      description="In a world where first impressions matter, a seamless user experience can set your business apart. Our UI/UX services blend research, creativity, and technology to craft visually stunning, user-friendly, and conversion-driven digital products. Whether you're launching a new app or revamping an existing website, we ensure an intuitive flow, accessible design, and cutting-edge interactivity. From in-depth user research to pixel-perfect prototypes and rigorous usability testing, we create experiences that not only look amazing but feel effortless to use. Elevate your brand with designs that captivate and convert—let’s build something extraordinary together!"
      image="/Assets/internal-UIUX.webp"
    />
  );
};

export default UIUXDesign;
