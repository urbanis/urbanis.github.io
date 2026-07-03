import type { Profile } from './types';

export default function ProfileChip({ profile }: { profile: Profile }) {
  return (
    <div className="glass rounded-xl px-4 py-3 shadow-floating pointer-events-auto" style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>
      <h1 className="text-sm font-semibold text-content-primary">{profile.name}</h1>
      <p className="text-xs text-accent mt-0.5">{profile.headline}</p>
      <div className="flex gap-3 mt-2">
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-accent hover:text-accent-dim transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
