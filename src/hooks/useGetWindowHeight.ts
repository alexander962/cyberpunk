import { useEffect, useState } from 'react';

const getWindowHeight = () => (typeof window !== 'undefined' ? window.innerHeight : 0);

const useGetWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(getWindowHeight());
    };

    window.addEventListener('resize', handleResize, { passive: true });
    handleResize(); // Ensure initial height is set correctly

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowHeight;
};

export default useGetWindowHeight;
