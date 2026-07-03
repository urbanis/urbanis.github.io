import type { ModalMode, Stat } from './types';

export const modalSplit: ModalMode[] = [
  { mode: 'Walking', pct: 53 },
  { mode: 'Public transport', pct: 34 },
  { mode: 'Private car', pct: 10 },
  { mode: 'Bicycle', pct: 3 },
  { mode: 'Scooter', pct: 1 },
];

export const contextStats: Stat[] = [
  { value: 2165423, label: 'Inhabitants', source: 'Apur' },
  { value: 20545, suffix: '/km²', label: 'Density, 5× Berlin', source: 'Apur' },
  { value: 53, suffix: '%', label: 'of trips made on foot', source: 'La Fabrique de la Cité' },
];

export const impactStats: Stat[] = [
  {
    value: 16,
    suffix: 'M',
    label: 'Lime scooter rides in Paris in 2022',
    source: 'Inside EVs',
  },
  {
    value: 85,
    suffix: '%',
    label: 'of Lime trips are made by Parisian residents',
    source: 'Lime',
  },
  {
    value: 800,
    prefix: '+',
    label: 'salaried, in-house jobs across the three operators',
    source: 'Lime · Dott · Tier',
  },
];
