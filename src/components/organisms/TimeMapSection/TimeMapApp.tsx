import { useState, useMemo, useEffect, useRef } from 'react';
import { useInView, motion, AnimatePresence } from 'motion/react';
import MapScene from './MapScene';
import TimelineSlider from './TimelineSlider';
import FloatingDetailCard from './FloatingDetailCard';
import cvData from './data.json';
import type { CVData, Place, TimelineStage } from './types';
import './timemap.css';
import styles from './TimeMapApp.module.css';

export function TimeMapApp({ height = '650px' }: { height?: string }) {
  const data = cvData as CVData;

  const DISPLAY_MAX_YEAR = 2026;

  const { minYear, maxYear } = useMemo(() => {
    const years = data.timelineStages.map((s) => s.year);
    return { minYear: Math.min(...years), maxYear: DISPLAY_MAX_YEAR };
  }, [data.timelineStages]);

  const [activeYear, setActiveYear] = useState<number>(minYear);
  const [closedStageId, setClosedStageId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const replayCount = useRef(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.8 });

  useEffect(() => {
    if (!isInView) return;
    const id = setTimeout(() => setIsPlaying(true), 0);
    return () => clearTimeout(id);
  }, [isInView]);

  // Auto-play: advance one year per 3s, stop after 2 replays
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveYear((year) => {
        if (year >= maxYear) {
          replayCount.current += 1;
          if (replayCount.current >= 2) {
            setIsPlaying(false);
            return maxYear;
          }
          return minYear;
        }
        return year + 1;
      });
      setClosedStageId(null);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, maxYear, minYear]);

  const activeStage = useMemo<TimelineStage | null>(() => {
    const validStages = data.timelineStages.filter((s) => s.year <= activeYear);
    if (validStages.length === 0) return null;
    return validStages.sort((a, b) => b.year - a.year)[0];
  }, [data.timelineStages, activeYear]);

  const activePlace = useMemo<Place | null>(() => {
    if (!activeStage) return null;
    return data.places.find((p) => p.id === activeStage.placeId) || null;
  }, [data.places, activeStage]);

  const cardVisible = !!activeStage && activeStage.id !== closedStageId;


  const handleMarkerClick = (place: Place) => {
    const stagesForPlace = data.timelineStages.filter((s) => s.placeId === place.id);
    if (stagesForPlace.length > 0) {
      const latestStage = stagesForPlace.sort((a, b) => b.year - a.year)[0];
      setActiveYear(latestStage.year);
      setClosedStageId(null);
      setIsPlaying(false);
    }
  };

  const handleYearChange = (year: number) => {
    setIsPlaying(false);
    setActiveYear(year);
    setClosedStageId(null);
  };

  return (
    <div
      ref={wrapperRef}
      className="timemap dark"
      style={{
        height,
        borderRadius: 12,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        background: '#000a1a',
      }}
    >
      {/* Vertical timeline — left */}
      <div className={styles.timelineCol}>
      <TimelineSlider
        stages={data.timelineStages}
        activeYear={activeYear}
        isPlaying={isPlaying}
        onYearChange={handleYearChange}
        onTogglePlay={() => {
          if (!isPlaying && activeYear >= maxYear) {
            replayCount.current = 0;
            setActiveYear(minYear);
            setClosedStageId(null);
            setIsPlaying(true);
          } else {
            setIsPlaying((p) => !p);
          }
        }}
        hardMaxYear={DISPLAY_MAX_YEAR}
        compressBeforeYear={2018}
      />
      </div>

      {/* Skills column — middle */}
      <div className={styles.skillsCol} style={{
        width: '148px',
        flexShrink: 0,
        background: '#000a1a',
        borderRight: '1px solid rgba(195,220,235,0.12)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {(() => {
          // Match TimelineSlider positioning exactly
          const COMPRESS_RATIO = 0.12;
          const COMPRESS_BEFORE = 2018;
          const TRACK_START = 56; // button area height
          const TRACK_HEIGHT = 650 - TRACK_START - 16;

          const getYPx = (year: number): number => {
            const pct = year <= COMPRESS_BEFORE
              ? ((year - minYear) / (COMPRESS_BEFORE - minYear)) * COMPRESS_RATIO
              : COMPRESS_RATIO + ((year - COMPRESS_BEFORE) / (maxYear - COMPRESS_BEFORE)) * (1 - COMPRESS_RATIO);
            return TRACK_START + pct * TRACK_HEIGHT;
          };

          const visibleStages = data.timelineStages
            .filter((s) => s.year <= activeYear)
            .sort((a, b) => a.year - b.year);

          return (
            <AnimatePresence>
              {visibleStages.map((stage) => {
                const topPx = getYPx(stage.year);
                const skills = (stage.skills ?? []).filter(s => s.trim() !== '');
                if (skills.length === 0) return null;
                return (
                  <div
                    key={stage.id}
                    style={{
                      position: 'absolute',
                      top: `${topPx}px`,
                      left: '16px',
                      right: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    {skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.15 }}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 400,
                          fontFamily: "'Montserrat', sans-serif",
                          color: /degree|msc\.|bsc\./i.test(skill) ? '#f0f01e' : '#c3dceb',
                          lineHeight: 1.3,
                          textAlign: 'left',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                );
              })}
            </AnimatePresence>
          );
        })()}
      </div>

      {/* Map — flex-1 */}
      <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
        <MapScene
          places={data.places}
          activePlace={activePlace}
          onMarkerClick={handleMarkerClick}
        />

        {/* Floating detail card */}
        {cardVisible && activeStage && activePlace && (
          <FloatingDetailCard
            stage={activeStage}
            place={activePlace}
            onClose={() => setClosedStageId(activeStage?.id ?? null)}
          />
        )}
      </div>
    </div>
  );
}
