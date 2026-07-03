import { useMemo } from 'react';
import type { TimelineStage } from './types';

interface TimelineSliderProps {
  stages: TimelineStage[];
  activeYear: number;
  isPlaying: boolean;
  onYearChange: (year: number) => void;
  onTogglePlay: () => void;
  hardMaxYear?: number;
  compressBeforeYear?: number;
}

export default function TimelineSlider({
  stages,
  activeYear,
  isPlaying,
  onYearChange,
  onTogglePlay,
  hardMaxYear,
  compressBeforeYear,
}: TimelineSliderProps) {
  const { minYear, maxYear, years } = useMemo(() => {
    const stageYears = stages.map((s) => s.year);
    const min = Math.min(...stageYears);
    const max = hardMaxYear ?? Math.max(...stageYears);
    const allYears: number[] = [];
    for (let y = min; y <= max; y++) allYears.push(y);
    return { minYear: min, maxYear: max, years: allYears };
  }, [stages, hardMaxYear]);

  const COMPRESS_RATIO = 0.12; // compressed segment takes 12% of track

  const getPct = (year: number): number => {
    if (compressBeforeYear && year <= compressBeforeYear && minYear < compressBeforeYear) {
      return ((year - minYear) / (compressBeforeYear - minYear)) * COMPRESS_RATIO * 100;
    }
    if (compressBeforeYear && minYear < compressBeforeYear) {
      return COMPRESS_RATIO * 100 + ((year - compressBeforeYear) / (maxYear - compressBeforeYear)) * (1 - COMPRESS_RATIO) * 100;
    }
    return ((year - minYear) / (maxYear - minYear)) * 100;
  };

  const progress = getPct(activeYear) / 100;

  // Line sits at x=42 (leaving room for labels on the left)
  const LINE_X = 52;

  return (
    <div style={{
      width: '92px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 0 16px',
      background: '#000a1a',
      borderRight: '1px solid rgba(195,220,235,0.12)',
      flexShrink: 0,
    }}>
      {/* Play / Pause */}
      <button
        onClick={onTogglePlay}
        title={isPlaying ? 'Pause' : 'Play'}
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '1.5px solid rgba(195,220,235,0.35)',
          background: 'transparent',
          color: '#c3dceb',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginBottom: '16px',
          marginLeft: `${LINE_X - 46}px`,
          transition: 'border-color 0.2s, color 0.2s',
        }}
      >
        {isPlaying ? (
          <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Vertical track */}
      <div style={{ flex: 1, position: 'relative', width: '100%' }}>
        {/* Background line */}
        <div style={{
          position: 'absolute',
          top: 0, bottom: 0,
          left: `${LINE_X}px`,
          width: '2px',
          background: 'rgba(195,220,235,0.15)',
          transform: 'translateX(-50%)',
        }} />

        {/* Progress fill */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: `${LINE_X}px`,
          width: '2px',
          height: `${progress * 100}%`,
          background: '#c3dceb',
          transform: 'translateX(-50%)',
          transition: 'height 0.6s ease',
        }} />

        {/* Year dots */}
        {years.map((year) => {
          const isStage = stages.some((s) => s.year === year);
          const isEndMarker = hardMaxYear !== undefined && year === hardMaxYear;
          const showLabel = isStage || isEndMarker;
          const isActive = year === activeYear;
          const isPast = year <= activeYear;
          const inCompressedSegment = compressBeforeYear !== undefined && year > minYear && year < compressBeforeYear;
          if (inCompressedSegment && !isStage) return null; // hide intermediate dots in compressed segment
          const pct = getPct(year);

          return (
            <div
              key={year}
              style={{
                position: 'absolute',
                top: `${pct}%`,
                left: 0,
                right: 0,
                transform: 'translateY(-50%)',
                zIndex: 1,
              }}
            >
              {/* Year label — right-aligned up to the line */}
              {showLabel && (
                <span style={{
                  position: 'absolute',
                  right: `calc(100% - ${LINE_X - 14}px)`,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '9px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  color: isActive ? '#f0f01e' : isPast ? '#c3dceb' : 'rgba(195,220,235,0.4)',
                  lineHeight: 1,
                  transition: 'color 0.3s',
                  whiteSpace: 'nowrap',
                  textAlign: 'right',
                }}>
                  {isEndMarker && !isStage ? 'now' : year}
                </span>
              )}

              {/* Dot — always centered on the line */}
              <div
                onClick={() => isStage && onYearChange(year)}
                style={{
                  position: 'absolute',
                  left: `${LINE_X}px`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: isActive ? '12px' : isStage ? '9px' : '5px',
                  height: isActive ? '12px' : isStage ? '9px' : '5px',
                  borderRadius: '50%',
                  background: isActive ? '#f0f01e' : isPast ? '#c3dceb' : 'rgba(195,220,235,0.2)',
                  border: isActive ? '2px solid #f0f01e' : 'none',
                  cursor: isStage ? 'pointer' : 'default',
                  transition: 'all 0.3s',
                  boxShadow: isActive ? '0 0 8px rgba(240,240,30,0.6)' : 'none',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
