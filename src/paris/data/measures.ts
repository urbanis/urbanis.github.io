export type MeasureKind = 'spatial' | 'administrative';

export type MeasureIconName =
  | 'plate'
  | 'geoloc'
  | 'parking'
  | 'id'
  | 'sensor'
  | 'camera'
  | 'fine'
  | 'slow'
  | 'charter';

export interface Measure {
  icon: MeasureIconName;
  title: string;
  detail: string;
  kind: MeasureKind;
}

export interface MeasureGroup {
  actor: string;
  measures: Measure[];
  source?: string;
  sourceUrl?: string;
}

// "Measures implemented so far" (2022): verbatim from the study's slides 22-23,
// split by who enforces them and classified spatial vs administrative (the
// spatial ones are what the data analysis later tests).
export const measures: MeasureGroup[] = [
  {
    actor: 'Operators',
    measures: [
      {
        icon: 'plate',
        title: 'License plates',
        detail: 'Every scooter carries a visible license plate.',
        kind: 'administrative',
      },
      {
        icon: 'geoloc',
        title: 'Real-time geolocation',
        detail:
          'Scooters are tracked live and automatically slowed to half their top speed inside designated areas.',
        kind: 'spatial',
      },
      {
        icon: 'parking',
        title: 'Geofenced parking',
        detail:
          'GPS and geofencing technology force riders to park only in designated spots.',
        kind: 'spatial',
      },
      {
        icon: 'id',
        title: 'Age verification',
        detail: 'Riders must be over 18 and take a photo of their ID.',
        kind: 'administrative',
      },
      {
        icon: 'sensor',
        title: 'Anti-double-riding sensors',
        detail:
          'Operators are testing sensors that prevent two people from riding one e-scooter.',
        kind: 'administrative',
      },
      {
        icon: 'camera',
        title: 'Sidewalk detection',
        detail: 'Camera-based systems detect riding on the sidewalk.',
        kind: 'administrative',
      },
    ],
    source: 'Euronews',
    sourceUrl:
      'https://www.euronews.com/next/2022/10/19/will-paris-ban-shared-e-scooters-dott-lime-and-tier-hit-back-geofencing-id-checks-sensors',
  },
  {
    actor: 'City',
    measures: [
      {
        icon: 'fine',
        title: 'Fines',
        detail:
          '135€ for riding on the pavement and 35€ for parking on it, charged to the rider caught in the act or to the operator.',
        kind: 'administrative',
      },
      {
        icon: 'slow',
        title: 'Slow zones',
        detail:
          '10 km/h speed limit in pedestrian streets, public squares and car-free areas.',
        kind: 'spatial',
      },
      {
        icon: 'parking',
        title: '2,500 parking spots',
        detail:
          'Dedicated e-scooter parking spots, most of them reclaimed from car parking.',
        kind: 'spatial',
      },
      {
        icon: 'camera',
        title: '900 cameras',
        detail:
          'Since 2018, 20 officers use 900 cameras to spot scooters and motorbikes on bike and bus lanes.',
        kind: 'administrative',
      },
      {
        icon: 'charter',
        title: 'Good-conduct charter',
        detail: 'Operators are obliged to sign a good-conduct charter.',
        kind: 'administrative',
      },
    ],
    source: 'The Local',
    sourceUrl:
      'https://www.thelocal.fr/20230403/explained-what-are-the-rules-on-e-scooters-in-paris-now',
  },
];
