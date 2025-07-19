import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';

import AIMLSolutions from './components/services/AIMLSolutions';
import AppDevelopment from './components/services/AppDevelopment';
import CloudServices from './components/services/CloudServices';
import DataServices from './components/services/DataServices';
import GraphicDesigning from './components/services/GraphicDesigning';
import ITConsulting from './components/services/ITConsulting';
import SoftwareDevelopment from './components/services/SoftwareDevelopment';
import SupportMaintenance from './components/services/SupportMaintenance';
import UIUXDesign from './components/services/UIUXDesign';
import WebDevelopment from './components/services/WebDevelopment';
import ScrollToTop from './components/ui/ScrollToTop';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import PrivacyPolicy from './pages/PrivacyPolicy';
// import Services from './pages/Services';
import TermsAndConditions from './pages/TermsAndConditions';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    Aos.init();
    // Ensure page starts at top on initial load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.refresh(); // refresh animations on route change
  }, [location]);

  return (
    // <div className="min-h-screen w-full flex flex-col relative overflow-x-hidden">
    //   {/* Animated gradient background */}
    //   <div
    //     className="fixed inset-0 -z-10 animate-gradient-move"
    //     style={{
    //       background: 'linear-gradient(120deg, #0f172a 0%, #1e293b 40%, #2563eb 70%, #a21caf 100%)',
    //       backgroundSize: '200% 200%',
    //       opacity: 0.9,
    //     }}
    //   />
    //   <style>{`
    //     @keyframes gradient-move {
    //       0% { background-position: 0% 50%; }
    //       50% { background-position: 100% 50%; }
    //       100% { background-position: 0% 50%; }
    //     }
    //     .animate-gradient-move {
    //       animation: gradient-move 16s ease-in-out infinite;
    //     }
    //   `}</style>
    <div className="min-h-screen w-full flex flex-col bg-black">
      <Navbar />
      <ScrollToTop />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/uiux-design" element={<UIUXDesign />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/support-maintenance" element={<SupportMaintenance />} />
          <Route
            path="/software-development"
            element={<SoftwareDevelopment />}
          />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/it-consulting" element={<ITConsulting />} />
          <Route path="/cloud-services" element={<CloudServices />} />
          <Route path="/data-services" element={<DataServices />} />
          <Route path="/aiml-solutions" element={<AIMLSolutions />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/graphic-designing" element={<GraphicDesigning />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
