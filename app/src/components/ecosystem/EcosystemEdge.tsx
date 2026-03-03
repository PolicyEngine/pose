import type { EcosystemEdge as EdgeType } from '../../lib/types';

interface EcosystemEdgeProps {
  edge: EdgeType;
  fromPos: { x: number; y: number };
  toPos: { x: number; y: number };
  visible: boolean;
}

export function EcosystemEdgeComponent({ edge, fromPos, toPos, visible }: EcosystemEdgeProps) {
  const midX = (fromPos.x + toPos.x) / 2;
  const midY = (fromPos.y + toPos.y) / 2;
  const dx = toPos.x - fromPos.x;
  const dy = toPos.y - fromPos.y;
  const offset = 25;
  const len = Math.sqrt(dx * dx + dy * dy + 1);
  const cx = midX - dy * offset / len;
  const cy = midY + dx * offset / len;

  const d = `M ${fromPos.x} ${fromPos.y} Q ${cx} ${cy} ${toPos.x} ${toPos.y}`;

  return (
    <g
      style={{
        opacity: visible ? 0.35 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <path
        d={d}
        fill="none"
        stroke={edge.color}
        strokeWidth={2}
        strokeDasharray={edge.type === 'dashed' ? '8 5' : undefined}
        markerEnd={`url(#arrow-${edge.color.replace('#', '')})`}
      />
      {edge.label && (
        <text
          x={cx}
          y={cy - 8}
          textAnchor="middle"
          fill={edge.color}
          fontSize={12}
          fontFamily="Inter, sans-serif"
          fontWeight={600}
          opacity={0.9}
        >
          {edge.label.split('\n').map((line, i) => (
            <tspan key={i} x={cx} dy={i === 0 ? 0 : 13}>{line}</tspan>
          ))}
        </text>
      )}
    </g>
  );
}
