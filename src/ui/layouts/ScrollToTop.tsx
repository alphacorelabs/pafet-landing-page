import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with a small delay to ensure DOM updates
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, [pathname]); 

  return null;
}

export default ScrollToTop;