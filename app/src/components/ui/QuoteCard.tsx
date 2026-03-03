interface QuoteCardProps {
  quote: string;
  name: string;
  title: string;
  color: string;
  delay?: number;
}

export function QuoteCard({ quote, name, title, color, delay = 0 }: QuoteCardProps) {
  return (
    <div
      className="scroll-reveal bg-card-bg rounded-lg border-l-4 p-5 card-hover"
      style={{
        borderLeftColor: color,
        borderTopColor: '#E2E8F0',
        borderRightColor: '#E2E8F0',
        borderBottomColor: '#E2E8F0',
        boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.06), 0px 1px 2px rgba(16, 24, 40, 0.04)',
        transitionDelay: `${delay}s`,
      }}
    >
      <span className="text-2xl font-bold leading-none" style={{ color }}>{'\u201C'}</span>
      <p className="text-sm text-text-secondary mt-1 leading-relaxed italic">{quote}</p>
      <p className="text-sm font-semibold mt-3" style={{ color }}>{'\u2014'} {name}</p>
      <p className="text-xs text-text-tertiary">{title}</p>
    </div>
  );
}
