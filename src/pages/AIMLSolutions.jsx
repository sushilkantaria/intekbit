import ServiceTabs from '../components/ServiceTabs';
import aimlSolutions from '../data/aimlSolutions';

const AIMLSolutions = () => {
  return (
    <ServiceTabs
      servicesData={aimlSolutions}
      mainTitle="Artificial Intelligence (AI)"
      description="We offer high-performance, secure, and visually stunning websites tailored to your brand's needs. Using cutting-edge technologies like React, Next.js, Node.js, and MongoDB, we ensure fast, scalable, and mobile-friendly solutions that enhance user experience and drive business growth."
      image="/Assets/internal-webdevelopment.webp"
      frameworks={aimlSolutions}
    />
  );
};

export default AIMLSolutions;
