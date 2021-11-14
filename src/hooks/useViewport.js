import { useState, useEffect } from 'react';

const height = window.innerHeight || document.documentElement.clientHeight;
const width = window.innerWidth || document.documentElement.clientWidth;

export const useViewport = () => {
  const [windowDimensions, setWindowDimensions] = useState({ height, width });

  useEffect(() => {
    const handleDimensions = () => {
      const height = window.innerHeight || document.documentElement.clientHeight;
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWindowDimensions({height, width});
    }
    handleDimensions();
    window.addEventListener('resize', handleDimensions);
    return () => {
      window.removeEventListener('resize', handleDimensions);
    }
  },[]);
  return [windowDimensions];
}