import { useEffect } from 'react';

const ScrollUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return;
};

export default ScrollUp;
