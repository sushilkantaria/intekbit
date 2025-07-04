import ServiceTabs from '../components/ServiceTabs';
import aimlSolutionsData from '../data/aimlSolutionsData';

const AIMLSolutions = () => {
  return (
    <ServiceTabs
      servicesData={aimlSolutionsData}
      mainTitle="Artificial Intelligence (AI)"
      description="We offer high-performance, secure, and visually stunning websites tailored to your brand's needs. Using cutting-edge technologies like React, Next.js, Node.js, and MongoDB, we ensure fast, scalable, and mobile-friendly solutions that enhance user experience and drive business growth."
      image="/Assets/internal-webdevelopment.webp"
      frameworks={aimlSolutionsData}
    />
  );
};

export default AIMLSolutions;
