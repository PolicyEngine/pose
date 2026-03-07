import type { EcosystemNode as NodeType } from '@/lib/types';
import { colors } from '@/lib/colors';
import { colors as dsColors } from '@policyengine/design-system/tokens/colors';

interface EcosystemNodeProps {
  node: NodeType;
  x: number;
  y: number;
  visible: boolean;
  highlighted: boolean;
}

// Dark theme org backgrounds (tinted versions)
const ORG_BG: Record<string, string> = {
  rules: colors.cardBgAlt,
  cosilico: colors.cardBgAlt,
  pe: colors.cardBgAlt,
  all: colors.cardBgAlt,
};

// Org-specific border colors
const ORG_BORDER: Record<string, string> = {
  rules: colors.rulesBlue,
  cosilico: colors.cosilicoCyan,
  pe: colors.primary,
  all: colors.textTertiary,
};

// Core org nodes (ring 0) get solid colored backgrounds
const CORE_IDS = new Set(['rules', 'cosilico', 'pe', 'pe-unified']);

// Map core node IDs to their full logo paths
const CORE_LOGOS: Record<string, string> = {
  rules: '/assets/logos/rf-full-white.svg',
  cosilico: '/assets/logos/cosilico-full-white.svg',
  pe: '/assets/logos/pe-full-white.svg',
  'pe-unified': '/assets/logos/pe-full-white.svg',
};

export function EcosystemNodeComponent({ node, x, y, visible, highlighted }: EcosystemNodeProps) {
  const lines = node.label.split('\n');
  const isCore = CORE_IDS.has(node.id);
  const width = isCore ? 160 : 150;
  const height = isCore ? 60 : (lines.length > 1 ? 64 : 46);

  const bgColor = isCore ? node.color : (ORG_BG[node.org] || ORG_BG.all);
  const borderColor = isCore ? node.color : (ORG_BORDER[node.org] || ORG_BORDER.all);
  const textColor = colors.textPrimary;

  const coreLogo = CORE_LOGOS[node.id];

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
      {isCore && coreLogo ? (
        <image
          href={coreLogo}
          x={x - 60}
          y={y - 14}
          width={120}
          height={28}
        />
      ) : (
        lines.map((line, i) => (
          <text
            key={i}
            x={x + (isCore ? 0 : 2)}
            y={y + (i - (lines.length - 1) / 2) * 18 + (isCore ? 0 : 2)}
            textAnchor="middle"
            dominantBaseline="central"
            fill={textColor}
            fontSize={14}
            fontFamily="Inter, sans-serif"
            fontWeight={600}
          >
            {line}
          </text>
        ))
      )}
      {node.count && (
        <g>
          <circle
            cx={x + width / 2 - 4}
            cy={y - height / 2 + 4}
            r={14}
            fill={isCore ? dsColors.white : node.color}
          />
          <text
            x={x + width / 2 - 4}
            y={y - height / 2 + 4}
            textAnchor="middle"
            dominantBaseline="central"
            fill={isCore ? node.color : dsColors.white}
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
