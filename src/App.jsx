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
import WebDevelopment from './pages/WebDevelopment';
import UIUXDesign from './pages/UIUXDesign';
import TermsAndConditions from './pages/TermsAndConditions';
import SupportMaintenance from './pages/SupportMaintenance';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import Services from './pages/Services';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ITConsulting from './pages/ITConsulting';
import CloudServices from './pages/CloudServices';
import DataServices from './pages/DataServices';
import AIMLSolutions from './pages/AIMLSolutions';
import AppDevelopment from './pages/AppDevelopment';
import GraphicDesigning from './pages/GraphicDesigning';
import Blog from './pages/Blog';
import Career from './pages/Career';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    Aos.init();
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
