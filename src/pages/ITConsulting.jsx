import React from 'react';
import ServiceTabs from '../components/ServiceTabs';
import itConsultingData from '../data/itConsultingData';

const ITConsulting = () => {
  return (
    <ServiceTabs
      servicesData={itConsultingData}
      mainTitle="IT Consulting Services"
      description={
        <ul>
          <li>
            <strong>Expert Guidance:</strong> Experienced consultants with deep
            technical knowledge.
          </li>
          <li>
            <strong>Tailored Solutions:</strong> Strategies customized to your
            business needs.
          </li>
          <li>
            <strong>Cost-Effective:</strong> Optimize IT investments for maximum
            ROI.
          </li>
          <li>
            <strong>End-to-End Support:</strong> From planning to implementation
            and beyond.
          </li>
        </ul>
      }
      image="/Assets/internal-consulting.webp"
    />
  );
};

export default ITConsulting;
