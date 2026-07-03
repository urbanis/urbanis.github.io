import { useMemo } from 'react';
import type { Achievement } from './types';

interface BadgeRowProps {
  achievements: Achievement[];
  activeYear: number;
}

const BADGE_ICONS: Record<string, string> = {
  education: '🎓',
  skill: '⚡',
  milestone: '🏆',
  certification: '📜',
};

export default function BadgeRow({ achievements, activeYear }: BadgeRowProps) {
  const { unlockedBadges, lockedBadges } = useMemo(() => {
    const unlocked = achievements.filter((a) => a.unlockedAt <= activeYear);
    const locked = achievements.filter((a) => a.unlockedAt > activeYear);
    return { unlockedBadges: unlocked, lockedBadges: locked };
  }, [achievements, activeYear]);

  return (
    <div className="flex items-center gap-1.5 pointer-events-auto" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
      {unlockedBadges.map((badge) => (
        <div key={badge.id} className="group relative">
          <div className="w-9 h-9 flex items-center justify-center glass border border-border-interactive rounded-xl shadow-floating animate-scale-in hover:border-accent/50 hover:shadow-glow-sm transition-all">
            <span className="text-base">{BADGE_ICONS[badge.type] || '🏅'}</span>
          </div>
          {/* Tooltip */}
          <div className="absolute top-full mt-2 right-0 px-3 py-2 bg-background border border-border rounded-lg shadow-floating opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
            <p className="text-sm font-medium text-content-primary">{badge.label}</p>
            <p className="text-xs text-content-muted">Unlocked in {badge.unlockedAt}</p>
          </div>
        </div>
      ))}
      {lockedBadges.map((badge) => (
        <div key={badge.id} className="group relative">
          <div className="w-9 h-9 flex items-center justify-center glass border border-border-subtle rounded-xl shadow-floating opacity-30">
            <span className="text-base grayscale">🔒</span>
          </div>
          {/* Tooltip */}
          <div className="absolute top-full mt-2 right-0 px-3 py-2 bg-background border border-border rounded-lg shadow-floating opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
            <p className="text-sm font-medium text-content-muted">Locked</p>
            <p className="text-xs text-content-muted">Unlocks in {badge.unlockedAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
