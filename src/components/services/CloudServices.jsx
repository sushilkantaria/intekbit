import React from 'react';
import ServiceTabs from '../ServiceTabs';
import cloudServices from '../../data/services/cloudServices';

const CloudServices = () => {
  return (
    <ServiceTabs
      servicesData={cloudServices}
      mainTitle="Cloud Computing Services"
      description="At intekbit solutions pvt. ltd., we offer reliable cloud services designed to help businesses scale, secure their data, and improve efficiency. Our cloud solutions are tailored to meet the diverse needs of businesses, whether you're looking to migrate to the cloud, optimize your existing infrastructure, or develop cloud-native applications."
      image="/Assets/internal-cloud-services.webp"
    />
  );
};

export default CloudServices;
