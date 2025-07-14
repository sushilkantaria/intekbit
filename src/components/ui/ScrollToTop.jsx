import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Multiple approaches to ensure scroll to top works
    window.scrollTo(0, 0);

    // Also try with a slight delay to handle any async rendering
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    // Force scroll to top on next frame
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  // Also handle page refresh/reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return null;
}
