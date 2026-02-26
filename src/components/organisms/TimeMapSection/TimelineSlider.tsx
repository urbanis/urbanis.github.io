import { useMemo } from 'react';
import type { TimelineStage } from './types';

interface TimelineSliderProps {
  stages: TimelineStage[];
  activeYear: number;
  isPlaying: boolean;
  onYearChange: (year: number) => void;
  onTogglePlay: () => void;
}

export default function TimelineSlider({
  stages,
  activeYear,
  isPlaying,
  onYearChange,
  onTogglePlay,
}: TimelineSliderProps) {
  const { minYear, maxYear, years } = useMemo(() => {
    const stageYears = stages.map((s) => s.year);
    const min = Math.min(...stageYears);
    const max = Math.max(...stageYears);
    const allYears: number[] = [];
    for (let y = min; y <= max; y++) allYears.push(y);
    return { minYear: min, maxYear: max, years: allYears };
  }, [stages]);

  return (
    <div className="bg-surface border-t border-border px-6 py-4 flex items-center gap-4">
      {/* Play / Pause button */}
      <button
        onClick={onTogglePlay}
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-surface-elevated border border-border hover:border-accent/50 text-content-secondary hover:text-accent transition-colors"
        title={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Slider area */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Year markers */}
        <div className="flex justify-between px-1">
          {years.map((year) => {
            const isStageYear = stages.some((s) => s.year === year);
            const isActive = year === activeYear;
            return (
              <div key={year} className="flex flex-col items-center">
                <span
                  className={`text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-accent'
                      : isStageYear
                      ? 'text-content-secondary'
                      : 'text-content-muted'
                  }`}
                >
                  {year}
                </span>
                {isStageYear && (
                  <div
                    className={`mt-1 w-2 h-2 rounded-full transition-colors duration-200 ${
                      year <= activeYear ? 'bg-accent' : 'bg-border-interactive'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Slider track */}
        <div className="px-1">
          <input
            type="range"
            min={minYear}
            max={maxYear}
            step={1}
            value={activeYear}
            onChange={(e) => onYearChange(Number(e.target.value))}
            className="w-full h-2"
          />
        </div>
      </div>
    </div>
  );
}
