interface EcosystemRingProps {
  cx: number;
  cy: number;
  radius: number;
  label: string;
  visible: boolean;
  delay?: number;
}

export function EcosystemRing({ cx, cy, radius, label, visible, delay = 0 }: EcosystemRingProps) {
  if (radius === 0) return null;

  return (
    <g
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.8)',
        transformOrigin: `${cx}px ${cy}px`,
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke="#334155"
        strokeWidth={1}
        strokeDasharray="6 4"
        opacity={0.5}
      />
      <text
        x={cx + radius + 8}
        y={cy - radius + 18}
        fill="#64748B"
        fontSize={14}
        fontFamily="Inter, sans-serif"
        fontWeight={500}
      >
        {label}
      </text>
    </g>
  );
}
