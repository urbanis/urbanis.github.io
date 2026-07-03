import type { TimelineStage, Place } from './types';

interface FloatingDetailCardProps {
  stage: TimelineStage;
  place: Place;
  onClose: () => void;
}

export default function FloatingDetailCard({ stage, place, onClose }: FloatingDetailCardProps) {
  return (
    <div className="flex items-center pointer-events-none" style={{ position: 'absolute', inset: 0, zIndex: 10, justifyContent: 'flex-end', padding: '0 24px' }}>
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

        {/* Content */}
        <div className="px-4 pb-4" style={{ paddingBottom: '20px' }}>
          {stage.image && (
            <img
              src={stage.image}
              alt={stage.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px' }}
            />
          )}
          <p className="text-xs text-content-muted mb-1">{place.period}</p>
          <p className="text-sm font-medium text-accent mb-1.5">{stage.title}</p>
          <p className="text-xs text-content-secondary leading-relaxed">
            {stage.description}
          </p>
        </div>
      </div>
    </div>
  );
}
