
import Lenis from 'lenis';
import { useEffect } from 'react';
import { fadeUp, stagger } from './types';

export { fadeUp, stagger };


export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ 
         lerp: 0.1 
        });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

        return () => {
        lenis.destroy();
        };
  }, []);
}
