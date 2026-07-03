import { useMemo } from 'react';
import type { CareerItem } from './types';

interface CareerProgressProps {
  careerProgress: CareerItem[];
  activeYear: number;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function CareerProgress({ careerProgress, activeYear, isOpen = true, onToggle }: CareerProgressProps) {
  const progressData = useMemo(() => {
    return careerProgress.map((item) => {
      const startYear = item.startYear;
      const endYear = item.endYear;
      const duration = endYear - startYear;

      let progress: number;
      let status: 'not-started' | 'in-progress' | 'completed';

      if (activeYear < startYear) {
        progress = 0;
        status = 'not-started';
      } else if (activeYear >= endYear) {
        progress = 100;
        status = 'completed';
      } else {
        progress = ((activeYear - startYear) / duration) * 100;
        status = 'in-progress';
      }

      return {
        ...item,
        progress: Math.round(progress),
        status,
      };
    });
  }, [careerProgress, activeYear]);

  const visibleProgress = progressData.filter(
    (item) => item.status !== 'not-started'
  );

  const completedCount = progressData.filter((i) => i.status === 'completed').length;
  const inProgressCount = progressData.filter((i) => i.status === 'in-progress').length;

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden">
      {/* Collapsible Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-surface-elevated/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-[11px] font-semibold text-content-muted uppercase tracking-wider">
            Career Progress
          </h3>
          <span className="text-xs text-content-muted">
            {completedCount} done · {inProgressCount} active
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-content-muted transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pb-4 space-y-4">
          {visibleProgress.length === 0 ? (
            <p className="text-sm text-content-muted italic">
              Career journey begins soon...
            </p>
          ) : (
            visibleProgress.map((item) => (
              <div key={item.id} className="group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium text-content-primary">
                      {item.role}
                    </h4>
                    {item.status === 'completed' && (
                      <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </div>
                  {item.status === 'completed' ? (
                    <span className="text-xs text-content-muted">Complete</span>
                  ) : (
                    <span className="text-sm font-semibold text-accent">
                      {item.progress}%
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-content-muted">{item.company}</span>
                  <span className="text-content-muted/30">•</span>
                  <span className="text-xs text-content-muted">
                    {item.startYear} - {item.endYear}
                  </span>
                </div>
                <div className={`relative h-1.5 rounded-full overflow-hidden ${
                  item.status === 'completed' ? 'bg-success-muted' : 'bg-border'
                }`}>
                  <div
                    className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${
                      item.status === 'completed'
                        ? 'bg-success/60'
                        : 'bg-accent'
                    }`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
