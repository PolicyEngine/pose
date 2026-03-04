import type { EcosystemNode as NodeType } from '../../lib/types';

interface EcosystemNodeProps {
  node: NodeType;
  x: number;
  y: number;
  visible: boolean;
  highlighted: boolean;
}

// Dark theme org backgrounds (tinted versions)
const ORG_BG: Record<string, string> = {
  rules: '#1E293B',
  cosilico: '#1E293B',
  pe: '#1E293B',
  all: '#1E293B',
};

// Org-specific border colors
const ORG_BORDER: Record<string, string> = {
  rules: '#3B82F6',
  cosilico: '#06B6D4',
  pe: '#319795',
  all: '#64748B',
};

// Core org nodes (ring 0) get solid colored backgrounds
const CORE_IDS = new Set(['rules', 'cosilico', 'pe', 'pe-unified']);

export function EcosystemNodeComponent({ node, x, y, visible, highlighted }: EcosystemNodeProps) {
  const lines = node.label.split('\n');
  const isCore = CORE_IDS.has(node.id);
  const width = isCore ? 160 : 150;
  const height = isCore
    ? (lines.length > 1 ? 72 : 52)
    : (lines.length > 1 ? 64 : 46);

  const bgColor = isCore ? node.color : (ORG_BG[node.org] || ORG_BG.all);
  const borderColor = isCore ? node.color : (ORG_BORDER[node.org] || ORG_BORDER.all);
  const textColor = isCore ? '#FFFFFF' : '#F1F5F9';

  return (
    <g
      style={{
        opacity: visible ? (highlighted ? 1 : 0.4) : 0,
        transform: visible ? 'scale(1)' : 'scale(0.5)',
        transformOrigin: `${x}px ${y}px`,
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Card shadow */}
      <rect
        x={x - width / 2 + 2}
        y={y - height / 2 + 2}
        width={width}
        height={height}
        rx={isCore ? 12 : 8}
        fill="rgba(0, 0, 0, 0.3)"
      />
      {/* Card background */}
      <rect
        x={x - width / 2}
        y={y - height / 2}
        width={width}
        height={height}
        rx={isCore ? 12 : 8}
        fill={bgColor}
        stroke={borderColor}
        strokeWidth={isCore ? 2.5 : (highlighted ? 2 : 1.5)}
      />
      {/* Left accent bar for non-core nodes */}
      {!isCore && (
        <rect
          x={x - width / 2}
          y={y - height / 2 + 4}
          width={4}
          height={height - 8}
          rx={2}
          fill={borderColor}
        />
      )}
      {lines.map((line, i) => (
        <text
          key={i}
          x={x + (isCore ? 0 : 2)}
          y={y + (i - (lines.length - 1) / 2) * 18 + (isCore ? 0 : 2)}
          textAnchor="middle"
          dominantBaseline="central"
          fill={textColor}
          fontSize={isCore ? 17 : 14}
          fontFamily="Inter, sans-serif"
          fontWeight={isCore ? 700 : 600}
        >
          {line}
        </text>
      ))}
      {node.count && (
        <g>
          <circle
            cx={x + width / 2 - 4}
            cy={y - height / 2 + 4}
            r={14}
            fill={isCore ? '#FFFFFF' : node.color}
          />
          <text
            x={x + width / 2 - 4}
            y={y - height / 2 + 4}
            textAnchor="middle"
            dominantBaseline="central"
            fill={isCore ? node.color : '#FFFFFF'}
            fontSize={12}
            fontWeight={700}
          >
            {node.count}
          </text>
        </g>
      )}
    </g>
  );
}
