interface ProgressBarProps {
  value: number;
  max: number;
  color: string;
  label: string;
  count: string | number;
  delay?: number;
}

export function ProgressBar({ value, max, color, label, count, delay = 0 }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-text-tertiary w-28 text-right shrink-0 font-medium">{label}</span>
      <div className="flex-1 bg-card-bg-alt rounded-full h-5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            backgroundColor: color,
            width: `${(value / max) * 100}%`,
            transitionDelay: `${delay}s`,
            opacity: 0.85,
          }}
        />
      </div>
      <span className="text-xs font-bold w-6" style={{ color }}>{count}</span>
    </div>
  );
}
