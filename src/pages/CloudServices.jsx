import React from 'react';
import ServiceTabs from '../components/ServiceTabs';
import cloudServicesData from '../data/cloudServicesData';

const CloudServices = () => {
	return (
		<div className="bg-white min-h-screen text-gray-900">
			<ServiceTabs
				servicesData={cloudServicesData}
				mainTitle="Cloud Computing Services"
				description="At intekbit solutions pvt. ltd., we offer reliable cloud services designed to help businesses scale, secure their data, and improve efficiency. Our cloud solutions are tailored to meet the diverse needs of businesses, whether you're looking to migrate to the cloud, optimize your existing infrastructure, or develop cloud-native applications."
				image="/Assets/internal-cloud-services.webp"
			/>
		</div>
	);
};

export default CloudServices;
