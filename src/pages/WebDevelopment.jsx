import React from 'react';
import ServiceTabs from '../components/ServiceTabs';
import webDevelopment from '../data/webDevelopment';

const WebDevelopment = () => {
    return (
        <ServiceTabs
            servicesData={webDevelopment}
            mainTitle="Web Development"
            description="We offer high-performance, secure, and visually stunning websites tailored to your brand's needs. Using cutting-edge technologies like React, Next.js, Node.js, and MongoDB, we ensure fast, scalable, and mobile-friendly solutions that enhance user experience and drive business growth."
            image="/Assets/internal-webdevelopment.webp"
        />
    );
};

export default WebDevelopment;
