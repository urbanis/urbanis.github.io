export interface CityEntry {
  kind: 'Education' | 'Experience';
  title: string;
  org: string;
  period?: string;
}

export interface City {
  name: string;
  lng: number;
  lat: number;
  zoom: number;
  entries: CityEntry[];
}

export const ddLat = (lat: number) => `${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'}`;
export const ddLng = (lng: number) => `${Math.abs(lng).toFixed(4)}° ${lng >= 0 ? 'E' : 'W'}`;

export const CITIES: City[] = [
  {
    name: 'Caracas',
    lng: -66.9036,
    lat: 10.4806,
    zoom: 10.5,
    entries: [
      {
        kind: 'Education',
        title: 'B.Sc. Urban Planning',
        org: 'Simón Bolívar University · Venezuela',
        period: '2012 – 2018',
      },
    ],
  },
  {
    name: 'Buenos Aires',
    lng: -58.3816,
    lat: -34.6037,
    zoom: 10.5,
    entries: [
      {
        kind: 'Education',
        title: 'Dual M.Sc. Urban Planning & Mobility',
        org: 'University of Buenos Aires · Argentina',
        period: '2019 – 2024',
      },
      {
        kind: 'Education',
        title: 'Data Analytics Bootcamp',
        org: 'Coder House · Argentina',
        period: '2021 – 2022',
      },
      {
        kind: 'Experience',
        title: 'Solutions Engineer · GIS Analyst',
        org: 'Aeroterra — Esri Argentina & Uruguay',
        period: 'May 2021 – March 2024',
      },
    ],
  },
  {
    name: 'Berlin',
    lng: 13.405,
    lat: 52.52,
    zoom: 10,
    entries: [
      {
        kind: 'Education',
        title: 'Dual M.Sc. Urban Planning & Mobility',
        org: 'Technical University of Berlin · Germany',
        period: '2019 – 2024',
      },
      {
        kind: 'Experience',
        title: 'Solutions Engineer · Geospatial Developer',
        org: 'Mapular · Germany',
        period: 'April 2024 – Present',
      },
      {
        kind: 'Experience',
        title: 'Student Research Assistant',
        org: 'Institute of Land and Sea Transport Systems · TU Berlin',
        period: 'Oct 2022 – Dec 2023',
      },
      {
        kind: 'Experience',
        title: 'Student Research Assistant',
        org: 'Good Mobility Council · Germany',
        period: 'Aug 2022 – Mar 2023',
      },
    ],
  },
];
