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
        borderColor: borderColor || '#E2E8F0',
        boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.06), 0px 1px 2px rgba(16, 24, 40, 0.04)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
