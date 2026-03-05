import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  borderColor?: string;
  className?: string;
  delay?: number;
}

export function Card({ children, borderColor, className = '', delay = 0 }: CardProps) {
  return (
    <div
      className={`scroll-reveal bg-card-bg rounded-lg border card-hover ${className}`}
      style={{
        borderColor: borderColor || '#1E293B',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.2)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
