export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  source?: string;
}

export interface ModalMode {
  mode: string;
  pct: number;
}

export interface Service {
  name: string;
  operator: string;
  year: number;
  metric: string;
  blurb: string;
  image?: string;
  imageAlt?: string;
  source?: string;
  sourceUrl?: string;
}

export interface TimelineEntry {
  year: string;
  actor: string;
  title: string;
  description: string;
  kind: 'spatial' | 'administrative';
  photo?: string;
  photoAlt?: string;
  photoCaption?: string;
  photoUrl?: string;
  photoB?: string;
  photoBAlt?: string;
  photoBCaption?: string;
  photoBUrl?: string;
  source?: string;
  sourceUrl?: string;
}

export interface Finding {
  id: string;
  kicker: string;
  headline: string;
  figure: string;
  figureAlt: string;
  figureSource: string;
  steps: string[];
  stat: Stat;
  map?: 'parking' | 'change';
}
