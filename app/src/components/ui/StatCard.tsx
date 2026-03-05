interface StatCardProps {
  number: string;
  label: string;
  color: string;
  delay?: number;
}

export function StatCard({ number, label, color, delay = 0 }: StatCardProps) {
  return (
    <div
      className="scroll-reveal bg-card-bg rounded-lg border-l-4 p-6 flex flex-col items-center justify-center card-hover"
      style={{
        borderLeftColor: color,
        borderTopColor: '#1E293B',
        borderRightColor: '#1E293B',
        borderBottomColor: '#1E293B',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.2)',
        transitionDelay: `${delay}s`,
      }}
    >
      <span className="text-4xl font-bold tracking-tight" style={{ color }}>{number}</span>
      <span className="text-sm text-text-secondary mt-2 font-medium">{label}</span>
    </div>
  );
}
