import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
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
    </Router>
  );
}

export default App;
