import type { Finding } from './types';

export const findings: Finding[] = [
  {
    id: 'distribution',
    kicker: 'Equitable distribution',
    headline: 'Are the scooters spread evenly across Paris?',
    figure: '/figures/change-in-time.png',
    figureAlt:
      'Maps of the percentage change in parked scooters across Paris districts between morning, noon and evening.',
    figureSource: 'Own illustration · Lime GBFS, March 2023',
    steps: [
      'Across 28 snapshots, an average of 4,537 scooters sat parked, just under the 5,000 cap per operator.',
      'A calendar heat-map shows more trips around 4–6 pm, when fewer vehicles are parked.',
      'In the morning, western Paris loses ~40% of its parked scooters while the centre gains over 50%.',
      'By evening, the flow reverses, and scooters return west. Availability stays above 90% in every district.',
    ],
    stat: {
      value: 4537,
      label: 'avg scooters parked (cap 5,000)',
      source: 'Lime GBFS, Mar 13–17 2023',
    },
    map: 'change',
  },
  {
    id: 'public-space',
    kicker: 'Use of public space',
    headline: 'Do scooters actually use the designated parking spots?',
    figure: '/figures/parking.png',
    figureAlt:
      'Map of the 2,500 designated scooter parking spots per district, normalized by district area.',
    figureSource: 'Own illustration · Lime GBFS, March 2023',
    steps: [
      'In 2020 the city created 2,500 dedicated scooter parking spots, mostly reclaimed from car parking.',
      'A buffer was drawn around each spot to absorb GPS error.',
      'Of 125,365 parked positions (Mon–Fri), 91,786 fell around designated spots.',
      'That leaves 26% parked elsewhere, including sidewalk corners and overcrowded spots.',
    ],
    stat: {
      value: 74,
      suffix: '%',
      label: 'of parked scooters were in or around designated spots',
      source: 'Lime GBFS, Mar 2023',
    },
    map: 'parking',
  },
  {
    id: 'geofences',
    kicker: 'Geofence compliance',
    headline: 'Do scooters stay out of the banned zones?',
    figure: '/figures/geofences.png',
    figureAlt:
      'Map of six selected geofenced no-scooter zones with all parked scooter positions overlaid.',
    figureSource: 'Own illustration · Lime GBFS, March 2023',
    steps: [
      'Six geofenced zones were selected, mostly parks and tourist areas.',
      'All parked positions from Monday to Friday were overlaid on those zones.',
      'Every zone came back clear except one (Parc des Buttes-Chaumont), within GPS-noise margin.',
      'The operators\' geofencing technology appears to be working.',
    ],
    stat: {
      value: 662,
      label: 'geofenced restriction zones defined',
      source: 'Lime · Tier · Dott',
    },
  },
];
