import type { MeasureIconName } from '../../../data/measures';

const paths: Record<MeasureIconName, React.ReactNode> = {
  plate: (
    <>
      <rect x="2.5" y="6.5" width="19" height="11" rx="2.5" />
      <line x1="6" y1="11" x2="9" y2="11" />
      <line x1="11" y1="11" x2="18" y2="11" />
      <line x1="6" y1="14" x2="18" y2="14" />
    </>
  ),
  geoloc: (
    <>
      <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  parking: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <path d="M9 16.5V7.5h3.4a2.7 2.7 0 0 1 0 5.4H9" />
    </>
  ),
  id: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <circle cx="8" cy="11" r="2.2" />
      <path d="M4.8 16.2c0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2" />
      <line x1="14" y1="10" x2="19" y2="10" />
      <line x1="14" y1="13.5" x2="19" y2="13.5" />
    </>
  ),
  sensor: (
    <>
      <circle cx="9" cy="10" r="3" />
      <circle cx="15" cy="10" r="3" />
      <line x1="4.5" y1="18.5" x2="19.5" y2="5.5" />
    </>
  ),
  camera: (
    <>
      <path d="M3.5 9.4 16 6l1 3.6L4.5 13z" />
      <circle cx="13.6" cy="8.1" r="1.05" />
      <path d="M10 12.3V16" />
      <path d="M7 19a3 3 0 0 1 6 0" />
    </>
  ),
  fine: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.6 9.4a3.6 3.6 0 1 0 0 5.2" />
      <line x1="7.8" y1="11.2" x2="13.4" y2="11.2" />
      <line x1="7.8" y1="13.2" x2="12.6" y2="13.2" />
    </>
  ),
  slow: (
    <>
      <path d="M4.5 16.5a8 8 0 0 1 15 0" />
      <line x1="12" y1="16.5" x2="15.6" y2="11.8" />
      <circle cx="12" cy="16.5" r="1.1" />
    </>
  ),
  charter: (
    <>
      <path d="M6 3.5h7l5 5V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20z" />
      <path d="M13 3.5V8.5H18" />
      <path d="M9 16.2l1.8 1.8 3.6-4" />
    </>
  ),
};

export function MeasureIcon({ name }: { name: MeasureIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
