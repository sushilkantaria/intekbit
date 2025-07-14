import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import WebDevelopment from './components/services/WebDevelopment';
import UIUXDesign from './components/services/UIUXDesign';
import TermsAndConditions from './pages/TermsAndConditions';
import SupportMaintenance from './components/services/SupportMaintenance';
import SoftwareDevelopment from './components/services/SoftwareDevelopment';
import Services from './pages/Services';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ITConsulting from './components/services/ITConsulting';
import CloudServices from './components/services/CloudServices';
import DataServices from './components/services/DataServices';
import AIMLSolutions from './components/services/AIMLSolutions';
import AppDevelopment from './components/services/AppDevelopment';
import GraphicDesigning from './components/services/GraphicDesigning';
import Blog from './pages/Blog';
import Career from './pages/Career';
import ScrollToTop from './components/ui/ScrollToTop';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
    <div
      className="min-h-screen w-full flex flex-col"
      style={{ backgroundColor: '#000000' }}
    >
      <Navbar />
      <ScrollToTop />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
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
          <Route path="/services" element={<Services />} />
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
