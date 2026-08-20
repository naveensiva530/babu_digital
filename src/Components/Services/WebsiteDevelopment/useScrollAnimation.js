import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Helper hook to scope GSAP animations to a ref so they can be cleaned up
 * with the component unmount.
 */
export function useGsapContext(ref, setup) {
  useEffect(() => {
    const ctx = gsap.context(setup, ref);
    return () => ctx.revert();
  }, [ref, setup]);
}

export { ScrollTrigger };
