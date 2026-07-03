import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { TypewriterHeading } from '@/components/atoms/TypewriterHeading';
import styles from './SkillsSection.module.css';

type CircleId = 'tech' | 'urban' | 'design';
type HoveredState = CircleId | 'all' | null;

const SKILLS: Record<CircleId, string[]> = {
  tech: ['Python', 'Frontend Dev', 'GenAI', 'Esri', 'Data Analysis'],
  urban: ['Spatial Analysis', 'Mapping', 'Loc. Intelligence', 'User Behavior', 'Micromobility'],
  design: ['UX/UI', 'Product Design', 'Presales', 'Data Visualization', 'Product Roadmap'],
};

// Where each circle's skill list is anchored: a single vertical column placed
// just outside the circle, centered on its vertical axis.
const SKILL_COLUMNS: Record<CircleId, { x: number; cy: number; anchor: 'start' | 'end' }> = {
  tech:   { x: 300,  cy: 100, anchor: 'start' },
  urban:  { x: -55,  cy: 235, anchor: 'end'   },
  design: { x: 375,  cy: 235, anchor: 'start' },
};

const COLUMN_STEP = 27;

// Wide viewBox leaves room for the side columns on desktop; on mobile the columns
// are hidden, so a tighter viewBox makes the circles fill the space.
const VIEWBOX_DESKTOP = '-200 -70 720 520';
const VIEWBOX_MOBILE = '-50 -50 420 430';

const CIRCLE_CENTERS: Record<CircleId, { cx: number; cy: number }> = {
  tech:   { cx: 160, cy: 100 },
  urban:  { cx: 85,  cy: 225 },
  design: { cx: 235, cy: 225 },
};

const LABELS: Record<CircleId, { lines: string[]; fill: string; activeFill: string; stroke: string; textFill: string; labelDx?: number }> = {
  tech: {
    lines: ['Tech'],
    fill: 'rgba(195,220,235,0.16)', activeFill: 'rgba(195,220,235,0.34)',
    stroke: '#c3dceb', textFill: '#c3dceb',
  },
  urban: {
    lines: ['Urban Planning', '& Mobility'],
    fill: 'rgba(242,201,76,0.16)', activeFill: 'rgba(242,201,76,0.36)',
    stroke: '#F2C94C', textFill: '#F2C94C',
    labelDx: -45,
  },
  design: {
    lines: ['Design'],
    fill: 'rgba(70,140,180,0.20)', activeFill: 'rgba(70,140,180,0.42)',
    stroke: '#6fb0d4', textFill: '#c3dceb',
  },
};

const WORD_COLORS: Record<CircleId, string> = {
  tech:   '#cfe3f0',
  urban:  '#F2C94C',
  design: '#a9d2ea',
};

export function SkillsSection() {
  const [hovered, setHovered] = useState<HoveredState>('tech');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 640px)').matches);
  const { lang } = useLang();
  const t = translations[lang].skills;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: false, amount: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      if (isInView) {
        setHovered('tech');
        setHasInteracted(false);
      } else {
        setHovered(null);
      }
    }, 0);
    return () => clearTimeout(id);
  }, [isInView]);

  const handleMouseEnter = (id: HoveredState) => {
    setHovered(id);
    if (!hasInteracted) setHasInteracted(true);
  };

  const handleMouseLeave = () => setHovered(null);

  const handleCircleClick = (id: CircleId) => {
    const next = id === hovered ? null : id;
    setHovered(next);
    if (!hasInteracted && next) setHasInteracted(true);
  };

  const handleCenterClick = () => {
    const next = hovered === 'all' ? null : 'all';
    setHovered(next);
    if (!hasInteracted && next) setHasInteracted(true);
  };

  const isDimmed = (id: CircleId) =>
    hovered !== null && hovered !== id && hovered !== 'all';

  const isActive = (id: CircleId) =>
    hovered === id || hovered === 'all';

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.headingArea}>
        <TypewriterHeading title={t.title} subtitle={t.subtitle} titleColor="#ffffff" subtitleColor="rgba(255,255,255,0.75)" />
      </div>

      <div className={styles.diagramArea}>
        <svg
          viewBox={isMobile ? VIEWBOX_MOBILE : VIEWBOX_DESKTOP}
          className={styles.svg}
          style={{ overflow: 'visible' }}
        >
          {/* Circles */}
          {(['tech', 'urban', 'design'] as CircleId[]).map((id) => {
            const { cx, cy } = CIRCLE_CENTERS[id];
            const { fill, activeFill, stroke } = LABELS[id];
            const dimmed = isDimmed(id);
            const active = isActive(id);
            return (
              <circle
                key={id}
                cx={cx} cy={cy} r={115}
                fill={dimmed ? 'rgba(255,255,255,0.05)' : active ? activeFill : fill}
                stroke={dimmed ? 'rgba(255,255,255,0.15)' : stroke}
                strokeWidth={active ? 2.5 : 1.5}
                style={{ cursor: 'pointer', transition: 'fill 0.25s, stroke 0.25s, stroke-width 0.25s' }}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCircleClick(id)}
              />
            );
          })}

          {/* Static labels inside circles */}
          {(['tech', 'urban', 'design'] as CircleId[]).map((id) => {
            const { cx, cy } = CIRCLE_CENTERS[id];
            const { lines, textFill, labelDx = 0 } = LABELS[id];
            const baseY = cy + (lines.length === 1 ? 5 : -2);
            const dimmed = isDimmed(id);
            return (
              <g key={`label-${id}`} style={{ pointerEvents: 'none', transition: 'opacity 0.25s', opacity: dimmed ? 0.3 : 1 }}>
                {lines.map((line, i) => (
                  <text
                    key={i}
                    x={cx + labelDx} y={baseY + i * 16}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill={textFill}
                    fontFamily="'Space Grotesk', sans-serif"
                    className={styles.circleLabel}
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          })}

          {/* Center hitbox + label */}
          <circle
            cx="160" cy="183" r="32"
            fill="transparent"
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => handleMouseEnter('all')}
            onMouseLeave={handleMouseLeave}
            onClick={handleCenterClick}
          />
          <text x="160" y="183" textAnchor="middle" fontSize="10" fontWeight="700" fill={hovered === 'all' ? '#ffffff' : '#c3dceb'} fontFamily="'Space Grotesk', sans-serif" style={{ pointerEvents: 'none', transition: 'fill 0.25s' }}>My</text>
          <text x="160" y="197" textAnchor="middle" fontSize="10" fontWeight="700" fill={hovered === 'all' ? '#ffffff' : '#c3dceb'} fontFamily="'Space Grotesk', sans-serif" style={{ pointerEvents: 'none', transition: 'fill 0.25s' }}>Experience</text>

          {/* Hint cursor */}
          <g className={styles.hintCursor}>
          <AnimatePresence>
            {!hasInteracted && (
              <motion.g
                key="hint-cursor"
                transform="translate(222, 0) scale(1.1)"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 0.8, 0.8], y: [0, 0, -6, 0] }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { delay: 1.2, duration: 0.5, times: [0, 0.2, 1] },
                  y: { delay: 1.8, duration: 1.1, repeat: Infinity, ease: 'easeInOut' },
                }}
                style={{ pointerEvents: 'none' }}
              >
                <path
                  d="M10 0 C10 0 8 0 8 2 L8 12 C8 12 6 11 5 12 C4 13 5 15 6 16 L10 22 C11 24 13 25 15 25 L19 25 C22 25 24 23 24 20 L24 14 C24 14 24 12 22 12 C21 12 20 13 20 13 C20 13 20 11 18 11 C17 11 16 12 16 12 C16 12 16 10 14 10 C12 10 12 12 12 12 L12 2 C12 0 10 0 10 0 Z"
                  fill="#ffffff"
                  opacity="0.85"
                />
                <rect x="9" y="1.5" width="2.5" height="4" rx="1" fill="white" opacity="0.3" />
              </motion.g>
            )}
          </AnimatePresence>
          </g>

          {/* Skill columns — a vertical list anchored next to each circle */}
          <g className={styles.skillColumns}>
          <AnimatePresence>
            {(hovered === 'all'
              ? (['tech', 'urban', 'design'] as CircleId[])
              : hovered
              ? [hovered]
              : []
            ).flatMap((id) => {
              const col = SKILL_COLUMNS[id];
              const skills = SKILLS[id];
              const startY = col.cy - ((skills.length - 1) / 2) * COLUMN_STEP;
              return skills.map((skill, i) => (
                <motion.text
                  key={`${id}-${skill}`}
                  x={col.x}
                  y={startY + i * COLUMN_STEP}
                  textAnchor={col.anchor}
                  dominantBaseline="middle"
                  fontSize="13"
                  fontWeight="500"
                  fill={WORD_COLORS[id]}
                  fontFamily="'Courier New', Courier, monospace"
                  style={{ pointerEvents: 'none' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                >
                  {skill}
                </motion.text>
              ));
            })}
          </AnimatePresence>
          </g>
        </svg>
      </div>

      {/* Mobile skill pills — shown below diagram on small screens */}
      <div className={styles.mobileSkills}>
        {hovered && hovered !== 'all' ? (
          <>
            <p className={styles.mobileSkillsLabel}>{LABELS[hovered].lines.join(' ')}</p>
            <div className={styles.mobileSkillList}>
              {SKILLS[hovered].map((skill) => (
                <span key={skill} className={styles.mobileSkill}>{skill}</span>
              ))}
            </div>
          </>
        ) : hovered === 'all' ? (
          <>
            <p className={styles.mobileSkillsLabel}>All Skills</p>
            <div className={styles.mobileSkillList}>
              {(['tech', 'urban', 'design'] as CircleId[]).flatMap((id) =>
                SKILLS[id].map((skill) => (
                  <span key={`all-${skill}`} className={styles.mobileSkill}>{skill}</span>
                ))
              )}
            </div>
          </>
        ) : (
          <p className={styles.mobileSkillsHint}>Tap a circle to explore</p>
        )}
      </div>

    </div>
  );
}
