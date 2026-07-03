export type OperatorMode = 'scooter' | 'bike' | 'moped' | 'other';

export interface OperatorYear {
  year: string;
  operators: { name: string; mode: OperatorMode }[];
}

// "L'arrivée des opérateurs en free-floating": operator arrivals by year,
// colour-coded by mode, as classified in the author's original study graphic.
export const operatorsTimeline: OperatorYear[] = [
  { year: '2007', operators: [{ name: "Vélib'", mode: 'bike' }] },
  { year: '2011', operators: [{ name: "Autolib'", mode: 'other' }] },
  { year: '2016', operators: [{ name: 'Cityscoot', mode: 'moped' }] },
  {
    year: '2017',
    operators: [
      { name: 'COUP', mode: 'moped' },
      { name: 'GoBee Bike', mode: 'bike' },
      { name: 'Ofo', mode: 'bike' },
      { name: 'oBike', mode: 'bike' },
    ],
  },
  {
    year: '2018',
    operators: [
      { name: 'Troopy', mode: 'moped' },
      { name: 'Donkey Republic', mode: 'bike' },
      { name: 'Mobike', mode: 'bike' },
      { name: 'Oribiky', mode: 'bike' },
      { name: 'Bird', mode: 'scooter' },
      { name: 'Bolt (ex Txfy)', mode: 'scooter' },
      { name: 'Lime', mode: 'scooter' },
      { name: 'Tier', mode: 'scooter' },
    ],
  },
  {
    year: '2019',
    operators: [
      { name: 'Jump', mode: 'bike' },
      { name: 'Véligo', mode: 'bike' },
      { name: 'B Mobility', mode: 'scooter' },
      { name: 'Circ', mode: 'scooter' },
      { name: 'Dott', mode: 'scooter' },
      { name: 'Hive', mode: 'scooter' },
      { name: 'Voi', mode: 'scooter' },
      { name: 'UFO', mode: 'scooter' },
      { name: 'Wind', mode: 'scooter' },
    ],
  },
  {
    year: '2020',
    operators: [
      { name: 'Lime', mode: 'scooter' },
      { name: 'Tier', mode: 'scooter' },
      { name: 'Dott', mode: 'scooter' },
    ],
  },
];

export const operatorLegend: { mode: OperatorMode; label: string }[] = [
  { mode: 'scooter', label: 'Scooter' },
  { mode: 'bike', label: 'Bike' },
  { mode: 'moped', label: 'Moped' },
];
