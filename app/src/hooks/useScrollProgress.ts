import { useRef, useState, useEffect } from 'react';

export function useScrollProgress(steps: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // How far through the container we've scrolled
      // scrolled = 0 when top of container hits top of viewport
      // scrolled = containerHeight - viewportHeight when bottom of container hits bottom of viewport
      const scrolled = -rect.top;
      const scrollableDistance = containerHeight - viewportHeight;

      if (scrollableDistance <= 0) {
        setCurrentStep(1);
        return;
      }

      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      const step = Math.min(steps, Math.floor(progress * steps) + 1);
      setCurrentStep(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps]);

  return { containerRef, currentStep };
}
