import React from 'react';
import ServiceTabs from '../ServiceTabs';
import softwareDevelopment from '../../data/services/softwareDevelopment';

const SoftwareDevelopment = () => {
  return (
    <ServiceTabs
      servicesData={softwareDevelopment}
      mainTitle="Software Development"
      description="At Intekbit Solutions Pvt. Ltd., we provide end-to-end software development services tailored to meet the unique needs of businesses across various industries. Our team of skilled developers focuses on creating secure, scalable, and high-performance software solutions that help businesses grow and adapt to the evolving digital landscape."
      image="/Assets/internal-softaware-development.webp"
    />
  );
};

export default SoftwareDevelopment;
