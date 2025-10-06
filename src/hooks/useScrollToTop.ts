import { useEffect } from 'react';

/**
 * Custom hook that scrolls to the top of the page when the component mounts
 * and whenever the pathname changes
 */
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;
