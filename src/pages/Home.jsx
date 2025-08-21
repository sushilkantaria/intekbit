import { useState, Suspense, lazy } from 'react';
const About = lazy(() => import('../components/home/About'));
const Founders = lazy(() => import('../components/home/Founders'));
const Hero = lazy(() => import('../components/home/Hero'));
const LetsConnect = lazy(() => import('../components/home/LetsConnect'));
const Process = lazy(() => import('../components/home/Process'));
const Services = lazy(() => import('../components/home/Services'));
const Technology = lazy(() => import('../components/home/Technology'));
const WhyHireUs = lazy(() => import('../components/home/WhyHireUs'));
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
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};

export default Home;
