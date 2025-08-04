import { useState } from 'react';
import About from '../components/home/About';
import Founders from '../components/home/Founders';
import Hero from '../components/home/Hero';
import LetsConnect from '../components/home/LetsConnect';
import Process from '../components/home/Process';
import Services from '../components/home/Services';
import Technology from '../components/home/Technology';
import WhyHireUs from '../components/home/WhyHireUs';
import processSteps from '../data/home/processSteps';
import services from '../data/home/services';
import technologies from '../data/home/technologies';

const Home = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [activeTechnology, setActiveTechnology] = useState('webdevelopment');
  const [processInfo, setProcessInfo] = useState({
    title: 'Our Process',
    description:
      "We conduct a thorough examination of your business requirements, including competitive analysis, to formulate a strategic roadmap while defining the design's aesthetic objectives.",
    icon: '/Assets/home-process-process.gif',
  });

  const switchContent = (tab) => setActiveTab(tab);
  const switchTechnology = (category) => setActiveTechnology(category);
  const handleProcessStepHover = (step) => setProcessInfo(step);

  return (
    <div>
      <Hero />
      <About activeTab={activeTab} switchContent={switchContent} />
      <WhyHireUs />
      <Services services={services} />
      <Process
        processInfo={processInfo}
        processSteps={processSteps}
        handleProcessStepHover={handleProcessStepHover}
      />
      <Technology
        technologies={technologies}
        activeTechnology={activeTechnology}
        switchTechnology={switchTechnology}
      />
      <Founders />
      <LetsConnect />
    </div>
  );
};

export default Home;
