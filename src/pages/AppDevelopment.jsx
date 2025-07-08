import React from 'react';
import ServiceTabs from '../components/ServiceTabs';
import appDevelopment from '../data/appDevelopment';

const AppDevelopment = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <ServiceTabs
        servicesData={appDevelopment}
        mainTitle="Application Development"
        description="We develop high-performance, secure, and feature-rich mobile applications tailored to your business needs. Using advanced technologies like Flutter, React Native, Swift, and Kotlin, we create fast, scalable, and user-friendly apps that deliver seamless experiences across iOS and Android. Our development process ensures smooth functionality, intuitive design, and optimized performance to enhance engagement and drive growth. Whether it's a startup MVP or an enterprise-grade application, we build robust solutions that stand out in the competitive app market. From UI/UX to backend integration, we ensure a flawless experience that keeps users engaged and businesses thriving. At Intekbit Solutions Pvt. Ltd., we use the latest technologies, robust backend architectures, and scalable cloud services to develop high-performance, secure, and user-friendly mobile applications. Whether you need a cross-platform app, a real-time database solution, or a scalable cloud-powered application, we deliver solutions that drive success!"
        image="/Assets/internal-appdevelopmenet.webp"
      />
    </div>
  );
};

export default AppDevelopment;
