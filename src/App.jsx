import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/ui/ScrollToTop';
import Aiml from './components/services/AimlService';
import AppDevelopment from './components/services/AppDevelopmentService';
import CloudServices from './components/services/CloudServicesService';
import DataServices from './components/services/DataServicesService';
import GraphicDesigning from './components/services/GraphicDesigningService';
import ItConsulting from './components/services/ItConsultingService';
import SoftwareDevelopment from './components/services/SoftwareDevelopmentService';
import SupportMaintenance from './components/services/SupportMaintenanceService';
import Uiux from './components/services/UiuxService';
import WebDevelopment from './components/services/WebDevelopmentService';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PrivacyPolicy from './pages/PrivacyPolicy';
// import Services from './pages/Services';
import TermsAndConditions from './pages/TermsAndConditions';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import BlogDetails from './components/blog/BlogDetails';
import ParticleBackground from './components/ui/ParticleBackground';

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
    <div className="min-h-screen w-full flex flex-col">
      <ParticleBackground />

      <Navbar />
      <ScrollToTop />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/uiux-design" element={<Uiux />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/support-maintenance" element={<SupportMaintenance />} />
          <Route
            path="/software-development"
            element={<SoftwareDevelopment />}
          />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/it-consulting" element={<ItConsulting />} />
          <Route path="/cloud-services" element={<CloudServices />} />
          <Route path="/data-services" element={<DataServices />} />
          <Route path="/aiml-solutions" element={<Aiml />} />
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
