import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Eyebrow } from '../../atoms/Eyebrow';
import { measures } from '../../../data/measures';
import { MeasureIcon } from './MeasureIcon';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import styles from './MeasuresToolkit.module.css';

type GroupBy = 'actor' | 'kind';

// One flat list, each measure carrying both of its axes.
const flatMeasures = measures.flatMap((g) =>
  g.measures.map((m) => ({ ...m, actor: g.actor })),
);

const opSource = measures.find((g) => g.actor === 'Operators');
const citySource = measures.find((g) => g.actor === 'City');

interface Column {
  title: string;
  items: { icon: (typeof flatMeasures)[number]['icon']; title: string; detail: string; tag: string; tagKey: string }[];
}

function columnsFor(groupBy: GroupBy): Column[] {
  if (groupBy === 'actor') {
    return measures.map((g) => ({
      title: g.actor,
      items: g.measures.map((m) => ({
        icon: m.icon,
        title: m.title,
        detail: m.detail,
        tag: m.kind,
        tagKey: m.kind,
      })),
    }));
  }
  const kinds = [
    { title: 'Spatial', key: 'spatial' as const },
    { title: 'Administrative', key: 'administrative' as const },
  ];
  return kinds.map((k) => ({
    title: k.title,
    items: flatMeasures
      .filter((m) => m.kind === k.key)
      .map((m) => ({
        icon: m.icon,
        title: m.title,
        detail: m.detail,
        tag: m.actor,
        tagKey: m.actor.toLowerCase(),
      })),
  }));
}

export function MeasuresToolkit() {
  const reduced = useReducedMotion();
  const [axis, setAxis] = useState<GroupBy>('actor');
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!auto || reduced || paused) return;
    const id = setInterval(() => {
      setAxis((a) => (a === 'actor' ? 'kind' : 'actor'));
    }, 15000);
    return () => clearInterval(id);
  }, [auto, reduced, paused]);

  const columns = useMemo(() => columnsFor(axis), [axis]);

  return (
    <section
      className={styles.section}
      aria-labelledby="measures-h"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.intro}>
        <Eyebrow>The 2022 toolkit</Eyebrow>
        <h2 id="measures-h" className={styles.h}>
          Measures implemented so far.
        </h2>
        <p className={styles.lede}>
          &ldquo;Paris has been at the forefront of regulating the micromobility
          industry.&rdquo; The measures split between what operators enforce and
          what the city enforces, and between{' '}
          <span className={styles.spatialWord}>spatial</span> rules tied to a
          place and <span className={styles.adminWord}>administrative</span> ones.
          The spatial rules are exactly what the data tests next.
        </p>
        <p className={styles.axis}>
          Grouped by{' '}
          <span className={styles.selectWrap}>
            <select
              className={styles.select}
              value={axis}
              onChange={(e) => {
                setAxis(e.target.value as GroupBy);
                setAuto(false);
              }}
              aria-label="Group the measures by"
            >
              <option value="actor">who enforces it</option>
              <option value="kind">type of rule</option>
            </select>
          </span>
          <button
            type="button"
            className={`${styles.autoToggle} ${auto ? styles.autoOn : ''}`}
            onClick={() => setAuto((a) => !a)}
            aria-pressed={auto}
            title="Cycle the grouping automatically"
          >
            ⟳ auto
          </button>
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={axis}
          className={styles.groups}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
        >
          {columns.map((col) => (
            <div key={col.title} className={styles.group}>
              <h3 className={styles.actor}>{col.title}</h3>
              <ul className={styles.list}>
                {col.items.map((m) => (
                  <li key={m.title} className={styles.item}>
                    <span className={styles.icon}>
                      <MeasureIcon name={m.icon} />
                    </span>
                    <div className={styles.text}>
                      <div className={styles.itemHead}>
                        <span className={styles.title}>{m.title}</span>
                        <span className={`${styles.tag} ${styles[m.tagKey]}`}>
                          {m.tag}
                        </span>
                      </div>
                      <p className={styles.detail}>{m.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <p className={styles.sources}>
        Sources:{' '}
        <a
          className={styles.sourceLink}
          href={opSource?.sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          {opSource?.source}
        </a>{' '}
        (operators) ·{' '}
        <a
          className={styles.sourceLink}
          href={citySource?.sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          {citySource?.source}
        </a>{' '}
        (city)
      </p>
    </section>
  );
}
