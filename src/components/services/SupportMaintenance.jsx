import React from 'react';
import ServiceTabs from '../ServiceTabs';
import supportMaintenance from '../../data/services/supportMaintenance';

const SupportMaintenance = () => {
  return (
    <ServiceTabs
      servicesData={supportMaintenance}
      mainTitle="Support and Maintenance Service"
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
      image="/Assets/internal-support&maintainence.webp"
    />
  );
};

export default SupportMaintenance;
