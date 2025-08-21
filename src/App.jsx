import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Suspense, lazy, useEffect } from 'react';

const ScrollToTop = lazy(() => import('./components/ui/ScrollToTop'));
const Aiml = lazy(() => import('./components/services/AimlService'));
const AppDevelopment = lazy(() =>
  import('./components/services/AppDevelopmentService')
);
const CloudServices = lazy(() =>
  import('./components/services/CloudServicesService')
);
const DataServices = lazy(() =>
  import('./components/services/DataServicesService')
);
const GraphicDesigning = lazy(() =>
  import('./components/services/GraphicDesigningService')
);
const ItConsulting = lazy(() =>
  import('./components/services/ItConsultingService')
);
const SoftwareDevelopment = lazy(() =>
  import('./components/services/SoftwareDevelopmentService')
);
const SupportMaintenance = lazy(() =>
  import('./components/services/SupportMaintenanceService')
);
const Uiux = lazy(() => import('./components/services/UiuxService'));
const WebDevelopment = lazy(() =>
  import('./components/services/WebDevelopmentService')
);
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Blog = lazy(() => import('./pages/Blog'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./components/Navbar'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const BlogDetails = lazy(() => import('./components/blog/BlogDetails'));

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
    <>
      <Suspense>
        <Navbar />
        <ScrollToTop />
        <div className="min-h-screen w-full flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/uiux-design" element={<Uiux />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route
              path="/support-maintenance"
              element={<SupportMaintenance />}
            />
            <Route
              path="/software-development"
              element={<SoftwareDevelopment />}
            />
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
      </Suspense>
    </>
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
