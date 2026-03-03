import { useMemo } from 'react';
import { ecosystemNodes, ecosystemEdges, RING_RADII, RING_LABELS, CENTER } from '../../data/ecosystem';
import { EcosystemNodeComponent } from './EcosystemNode';
import { EcosystemEdgeComponent } from './EcosystemEdge';
import { EcosystemRing } from './EcosystemRing';
import { colors } from '../../lib/colors';

interface EcosystemMapInteractiveProps {
  step: number;
  filterOrg?: 'all' | 'rules' | 'cosilico' | 'pe';
}

const SPLIT_CORE_IDS = new Set(['rules', 'cosilico', 'pe']);
const SPLIT_CORE_RADIUS = 130;

function getNodePosition(id: string, ring: number, angle: number) {
  const rad = (angle * Math.PI) / 180;
  const r = ring === 0 && SPLIT_CORE_IDS.has(id) ? SPLIT_CORE_RADIUS : (RING_RADII[ring] || 0);
  return {
    x: CENTER.x + r * Math.cos(rad),
    y: CENTER.y + r * Math.sin(rad),
  };
}

// Unique arrow markers (deduplicated)
const ARROW_COLORS = [...new Set([
  colors.accentBlue, colors.accentTeal, colors.accentGreen, colors.accentPurple,
  colors.accentOrange, colors.rulesBlue, colors.cosilicoCyan, colors.peTeal,
  colors.highlight, colors.lightGray, colors.dimText,
])];

export function EcosystemMapInteractive({ step, filterOrg }: EcosystemMapInteractiveProps) {
  const nodePositions = useMemo(() => {
    const positions: Record<string, { x: number; y: number }> = {};
    ecosystemNodes.forEach((node) => {
      positions[node.id] = getNodePosition(node.id, node.ring, node.angle);
    });
    return positions;
  }, []);

  const isNodeVisible = (node: typeof ecosystemNodes[0]) => {
    // PE-unified only at step 1
    if (node.id === 'pe-unified') return step === 1;
    // Split core orgs appear at step 2+
    if (SPLIT_CORE_IDS.has(node.id)) return step >= 2;
    // Step 2: clean split — only show the 3 core orgs
    if (step === 2) return false;
    // Otherwise use visibleAtStep
    if (node.visibleAtStep > step) return false;
    if (filterOrg && filterOrg !== 'all' && node.org !== filterOrg && node.org !== 'all') return false;
    return true;
  };

  const isNodeHighlighted = (node: typeof ecosystemNodes[0]) => {
    if (!filterOrg || filterOrg === 'all') return true;
    return node.org === filterOrg || node.org === 'all';
  };

  const isEdgeVisible = (edge: typeof ecosystemEdges[0]) => {
    // Unified edges (step 1) only show at step 1
    if (edge.visibleAtStep === 1) return step === 1;
    // Split edges show at their step and beyond
    if (step < edge.visibleAtStep) return false;
    // If org filter active, only show edges touching the filtered org's nodes
    if (filterOrg && filterOrg !== 'all') {
      const fromNode = ecosystemNodes.find((n) => n.id === edge.from);
      const toNode = ecosystemNodes.find((n) => n.id === edge.to);
      const fromMatch = fromNode && (fromNode.org === filterOrg || fromNode.org === 'all');
      const toMatch = toNode && (toNode.org === filterOrg || toNode.org === 'all');
      return fromMatch || toMatch;
    }
    return true;
  };

  // Rings: step 1 shows rings 1-2, step 2 hides all, step 3 shows all
  const visibleRings = step === 1 ? [1, 2] : step === 3 ? [1, 2, 3, 4] : [];

  return (
    <svg viewBox="0 0 1800 900" className="w-full h-full">
      {/* Arrow markers */}
      <defs>
        {ARROW_COLORS.map((c) => (
          <marker
            key={c}
            id={`arrow-${c.replace('#', '')}`}
            viewBox="0 0 10 10"
            refX={9}
            refY={5}
            markerWidth={8}
            markerHeight={8}
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={c} />
          </marker>
        ))}
      </defs>

      {/* Concentric rings */}
      {[1, 2, 3, 4].map((ringIdx, i) => (
        <EcosystemRing
          key={ringIdx}
          cx={CENTER.x}
          cy={CENTER.y}
          radius={RING_RADII[ringIdx]}
          label={RING_LABELS[ringIdx]}
          visible={visibleRings.includes(ringIdx)}
          delay={i * 0.1}
        />
      ))}

      {/* Edges */}
      {ecosystemEdges.map((edge, i) => {
        const fromPos = nodePositions[edge.from];
        const toPos = nodePositions[edge.to];
        if (!fromPos || !toPos) return null;
        return (
          <EcosystemEdgeComponent
            key={`${edge.from}-${edge.to}-${i}`}
            edge={edge}
            fromPos={fromPos}
            toPos={toPos}
            visible={isEdgeVisible(edge)}
          />
        );
      })}

      {/* Nodes */}
      {ecosystemNodes.map((node) => {
        const pos = nodePositions[node.id];
        return (
          <EcosystemNodeComponent
            key={node.id}
            node={node}
            x={pos.x}
            y={pos.y}
            visible={isNodeVisible(node)}
            highlighted={isNodeHighlighted(node)}
          />
        );
      })}
    </svg>
  );
}
