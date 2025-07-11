import React from 'react';
import ServiceTabs from '../ServiceTabs';
import dataServices from '../../data/services/dataServices';

const DataServices = () => {
  return (
    <>
      <ServiceTabs
        servicesData={dataServices}
        mainTitle="Data Services"
        description={
          "At Intekbit Solutions Pvt. Ltd., we offer a comprehensive range of Data Services to help businesses manage, analyze, and leverage their data for smarter decision-making. Our goal is to provide scalable and secure data solutions tailored to your organization's needs."
        }
        image="/Assets/internal-data-services.webp"
      />
    </>
  );
};

export default DataServices;
