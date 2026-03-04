import type { ComponentType } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { SlideProps } from '../../lib/types';

interface ScrollSectionProps {
  id: string;
  component: ComponentType<SlideProps>;
  isSticky?: boolean;
}

export function ScrollSection({ id, component: Component, isSticky }: ScrollSectionProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`${isSticky ? '' : 'py-16 md:py-24'} ${isVisible ? 'section-visible' : ''}`}
    >
      <Component isVisible={isVisible} />
    </section>
  );
}
