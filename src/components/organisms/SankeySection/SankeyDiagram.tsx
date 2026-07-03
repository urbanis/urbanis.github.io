import { specificSkills, broadSkills, industries, leftFlows, rightFlows } from '@/data/sankeyData';

// ── Layout constants ────────────────────────────────────────────────────────
const SVG_W = 960;
const SVG_H = 520;
const NODE_W = 130;
const LEFT_X = 0;
const MID_X = 415;
const RIGHT_X = SVG_W - NODE_W;
const LEFT_H = 22;
const LEFT_GAP = 8;
const NODE_GAP = 12;
const CP_OFFSET = 140;

// ── Layout computation (static data, computed once at module level) ──────────
const leftLayout = specificSkills.map((node, i) => ({
  ...node,
  x: LEFT_X,
  y: i * (LEFT_H + LEFT_GAP),
  h: LEFT_H,
}));

const midInCount: Record<string, number> = {};
leftFlows.forEach((f) => { midInCount[f.targetId] = (midInCount[f.targetId] ?? 0) + 1; });

let midCursor = 0;
const midLayout = broadSkills.map((node) => {
  const count = midInCount[node.id] ?? 0;
  const h = count * (LEFT_H + LEFT_GAP) - LEFT_GAP;
  const layout = { ...node, x: MID_X, y: midCursor, h };
  midCursor += h + NODE_GAP;
  return layout;
});

const rightH: Record<string, number> = {};
industries.forEach((n) => { rightH[n.id] = 0; });
rightFlows.forEach((f) => {
  const mid = midLayout.find((m) => m.id === f.sourceId)!;
  const outCount = rightFlows.filter((rf) => rf.sourceId === f.sourceId).length;
  rightH[f.targetId] += (mid.h + NODE_GAP) / outCount - NODE_GAP / outCount;
});

let rightCursor = 0;
const rightLayout = industries.map((node) => {
  const h = Math.max(rightH[node.id] ?? 0, 40);
  const layout = { ...node, x: RIGHT_X, y: rightCursor, h };
  rightCursor += h + NODE_GAP;
  return layout;
});

// ── Attachment point helpers ─────────────────────────────────────────────────
type NodeLayout = { id: string; y: number; h: number };

function buildAttachments(
  nodes: NodeLayout[],
  flows: { sourceId: string; targetId: string }[],
  side: 'left' | 'right',
): Map<string, Map<string, number>> {
  const result = new Map<string, Map<string, number>>();
  nodes.forEach((node) => {
    const relevant = flows.filter((f) =>
      side === 'left' ? f.targetId === node.id : f.sourceId === node.id
    );
    const inner = new Map<string, number>();
    const slotH = node.h / Math.max(relevant.length, 1);
    relevant.forEach((f, i) => {
      const key = side === 'left' ? f.sourceId : f.targetId;
      inner.set(key, node.y + (i + 0.5) * slotH);
    });
    result.set(node.id, inner);
  });
  return result;
}

const midLeftAttach = buildAttachments(midLayout, leftFlows, 'left');
const midRightAttach = buildAttachments(midLayout, rightFlows, 'right');
const rightLeftAttach = buildAttachments(rightLayout, rightFlows, 'left');

function bezier(x1: number, y1: number, x2: number, y2: number): string {
  return `M ${x1} ${y1} C ${x1 + CP_OFFSET} ${y1}, ${x2 - CP_OFFSET} ${y2}, ${x2} ${y2}`;
}

// ── Component ────────────────────────────────────────────────────────────────
export interface SankeyDiagramProps {
  activeId: string | null;
  onHover: (id: string | null) => void;
}

export function SankeyDiagram({ activeId, onHover }: SankeyDiagramProps) {
  const isFlowActive = (sourceId: string, targetId: string) =>
    activeId === sourceId || activeId === targetId;

  return (
    <svg
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      width="100%"
      role="img"
      aria-label="Skill flow diagram"
      style={{ maxWidth: `${SVG_W}px`, display: 'block', margin: '0 auto', overflow: 'visible' }}
    >
      {/* Left → Middle flows */}
      {leftFlows.map((flow) => {
        const left = leftLayout.find((n) => n.id === flow.sourceId)!;
        const midY = midLeftAttach.get(flow.targetId)?.get(flow.sourceId) ?? 0;
        const active = isFlowActive(flow.sourceId, flow.targetId);
        const dimmed = activeId !== null && !active;
        return (
          <path
            key={`l-${flow.sourceId}`}
            d={bezier(LEFT_X + NODE_W, left.y + LEFT_H / 2, MID_X, midY)}
            fill="none"
            stroke="#38bdf8"
            strokeWidth={active ? 2.5 : 1}
            opacity={dimmed ? 0.04 : active ? 0.85 : 0.18}
            style={{ transition: 'opacity 0.3s, stroke-width 0.3s' }}
          />
        );
      })}

      {/* Middle → Right flows */}
      {rightFlows.map((flow) => {
        const midY = midRightAttach.get(flow.sourceId)?.get(flow.targetId) ?? 0;
        const rightY = rightLeftAttach.get(flow.targetId)?.get(flow.sourceId) ?? 0;
        const active = isFlowActive(flow.sourceId, flow.targetId);
        const dimmed = activeId !== null && !active;
        return (
          <path
            key={`r-${flow.sourceId}-${flow.targetId}`}
            d={bezier(MID_X + NODE_W, midY, RIGHT_X, rightY)}
            fill="none"
            stroke="#38bdf8"
            strokeWidth={active ? 3 : 1.5}
            opacity={dimmed ? 0.04 : active ? 0.85 : 0.18}
            style={{ transition: 'opacity 0.3s, stroke-width 0.3s' }}
          />
        );
      })}

      {/* Left nodes — specific skills */}
      {leftLayout.map((node) => {
        const active = activeId === node.id;
        const connected = leftFlows.find(
          (f) => f.sourceId === node.id && activeId === f.targetId
        );
        const dimmed = activeId !== null && !active && !connected;
        return (
          <g
            key={node.id}
            role="button"
            tabIndex={0}
            aria-pressed={active}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => onHover(node.id)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(node.id)}
            onBlur={() => onHover(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onHover(activeId === node.id ? null : node.id);
              }
            }}
          >
            <rect
              x={node.x} y={node.y} width={NODE_W} height={node.h} rx={4}
              fill={active ? 'rgba(56,189,248,0.12)' : '#ffffff'}
              stroke={active ? '#38bdf8' : '#e2e8f0'}
              strokeWidth={active ? 1.5 : 1}
              opacity={dimmed ? 0.35 : 1}
              style={{ transition: 'all 0.25s' }}
            />
            <text
              x={node.x + NODE_W / 2} y={node.y + node.h / 2}
              textAnchor="middle" dominantBaseline="middle"
              fill={active ? '#38bdf8' : '#475569'}
              fontSize={9} fontWeight={active ? 600 : 400}
              style={{ pointerEvents: 'none', userSelect: 'none', transition: 'fill 0.25s' }}
            >
              {node.label}
            </text>
          </g>
        );
      })}

      {/* Middle nodes — broad skills */}
      {midLayout.map((node) => {
        const active = activeId === node.id;
        const connected =
          leftFlows.find((f) => f.targetId === node.id && activeId === f.sourceId) ||
          rightFlows.find((f) => f.sourceId === node.id && activeId === f.targetId);
        const dimmed = activeId !== null && !active && !connected;
        return (
          <g
            key={node.id}
            role="button"
            tabIndex={0}
            aria-pressed={active}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => onHover(node.id)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(node.id)}
            onBlur={() => onHover(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onHover(activeId === node.id ? null : node.id);
              }
            }}
          >
            <rect
              x={node.x} y={node.y} width={NODE_W} height={node.h} rx={6}
              fill={active ? 'rgba(56,189,248,0.15)' : '#ffffff'}
              stroke={active ? '#38bdf8' : '#e2e8f0'}
              strokeWidth={active ? 2 : 1}
              opacity={dimmed ? 0.3 : 1}
              style={{ transition: 'all 0.25s' }}
            />
            <text
              x={node.x + NODE_W / 2} y={node.y + node.h / 2}
              textAnchor="middle" dominantBaseline="middle"
              fill={active ? '#38bdf8' : '#0f172a'}
              fontSize={11} fontWeight={600}
              style={{ pointerEvents: 'none', userSelect: 'none', transition: 'fill 0.25s' }}
            >
              {node.label}
            </text>
          </g>
        );
      })}

      {/* Right nodes — industries */}
      {rightLayout.map((node) => {
        const active = activeId === node.id;
        const connected = rightFlows.find(
          (f) => f.targetId === node.id && activeId === f.sourceId
        );
        const dimmed = activeId !== null && !active && !connected;
        return (
          <g
            key={node.id}
            role="button"
            tabIndex={0}
            aria-pressed={active}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => onHover(node.id)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(node.id)}
            onBlur={() => onHover(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onHover(activeId === node.id ? null : node.id);
              }
            }}
          >
            <rect
              x={node.x} y={node.y} width={NODE_W} height={node.h} rx={6}
              fill={active ? 'rgba(56,189,248,0.15)' : '#ffffff'}
              stroke={active ? '#38bdf8' : '#e2e8f0'}
              strokeWidth={active ? 2 : 1}
              opacity={dimmed ? 0.3 : 1}
              style={{ transition: 'all 0.25s' }}
            />
            <text
              x={node.x + NODE_W / 2} y={node.y + node.h / 2}
              textAnchor="middle" dominantBaseline="middle"
              fill={active ? '#38bdf8' : '#0f172a'}
              fontSize={11} fontWeight={600}
              style={{ pointerEvents: 'none', userSelect: 'none', transition: 'fill 0.25s' }}
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
