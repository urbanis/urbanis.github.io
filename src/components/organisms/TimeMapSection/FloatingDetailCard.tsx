import { useState } from 'react';
import type { TimelineStage, Experience, Education, Place } from './types';

interface FloatingDetailCardProps {
  stage: TimelineStage;
  place: Place;
  experiences: Experience[];
  education: Education[];
  onClose: () => void;
}

type Page =
  | { kind: 'stage' }
  | { kind: 'experience'; data: Experience }
  | { kind: 'education'; data: Education };

export default function FloatingDetailCard({
  stage,
  place,
  experiences,
  education,
  onClose,
}: FloatingDetailCardProps) {
  const pages: Page[] = [
    { kind: 'stage' },
    ...experiences.map((e): Page => ({ kind: 'experience', data: e })),
    ...education.map((e): Page => ({ kind: 'education', data: e })),
  ];

  const [index, setIndex] = useState(0);
  const page = pages[index];

  return (
    <div className="flex items-center justify-center pointer-events-none" style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
      <div
        className="pointer-events-auto w-72 bg-surface/95 backdrop-blur-glass border border-border rounded-2xl shadow-floating flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-sm">📍</span>
            <span className="text-sm font-semibold text-content-primary truncate">
              {place.city}, {place.country}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-surface-elevated text-content-muted hover:text-content-primary transition-colors flex-shrink-0"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Page content */}
        <div className="px-4 pb-3 min-h-[100px]">
          {page.kind === 'stage' && (
            <>
              <p className="text-xs text-content-muted mb-1">{place.period}</p>
              <p className="text-sm font-medium text-accent mb-1.5">{stage.title}</p>
              <p className="text-xs text-content-secondary leading-relaxed line-clamp-3">
                {stage.description}
              </p>
            </>
          )}

          {page.kind === 'experience' && (
            <>
              <div className="flex items-start justify-between mb-1.5">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-content-primary truncate">{page.data.org}</p>
                  <p className="text-xs text-accent">{page.data.title}</p>
                </div>
                <span className="text-[11px] text-content-muted flex-shrink-0 ml-2">
                  {new Date(page.data.start).getFullYear()} –{' '}
                  {page.data.end ? new Date(page.data.end).getFullYear() : 'Now'}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {page.data.skills.slice(0, 4).map((s) => (
                  <span key={s} className="px-1.5 py-0.5 text-[11px] font-medium bg-accent-muted text-accent rounded">
                    {s}
                  </span>
                ))}
              </div>
            </>
          )}

          {page.kind === 'education' && (
            <>
              <p className="text-sm font-medium text-content-primary mb-0.5">{page.data.degree}</p>
              <p className="text-xs text-accent mb-0.5">{page.data.institution}</p>
              <p className="text-[11px] text-content-muted mb-2">
                {new Date(page.data.start).getFullYear()} – {new Date(page.data.end).getFullYear()}
              </p>
              <div className="flex flex-wrap gap-1">
                {page.data.skills.slice(0, 4).map((s) => (
                  <span key={s} className="px-1.5 py-0.5 text-[11px] font-medium bg-accent-muted text-accent rounded">
                    {s}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Pagination footer */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border-subtle">
          {/* Dots */}
          <div className="flex items-center gap-1">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all ${
                  i === index
                    ? 'w-4 h-1.5 bg-accent'
                    : 'w-1.5 h-1.5 bg-border hover:bg-content-muted'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-surface-elevated text-content-secondary disabled:opacity-30 disabled:cursor-default transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setIndex((i) => Math.min(pages.length - 1, i + 1))}
              disabled={index === pages.length - 1}
              className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-surface-elevated text-content-secondary disabled:opacity-30 disabled:cursor-default transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
