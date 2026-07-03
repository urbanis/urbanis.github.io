import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'my-journey',
    title: 'Behavioral Cartographies',
    inProgress: true,
    description:
      'An immersive scrollytelling atlas tracing how three cities (Caracas, Buenos Aires, and Berlin) shaped one urban planner\'s understanding of human mobility. Built with React, Leaflet, and Framer Motion.',
    image: '/assets/images/my%20journey.png',
    imageAlt: 'Behavioral Cartographies',
    tags: ['React', 'Leaflet', 'Scrollytelling'],
    links: [
      {
        type: 'website',
        url: 'https://behavioral-cartographies.vercel.app/',
      },
    ],
  },
  {
    id: 'street-generator',
    title: 'Street Generator',
    inProgress: true,
    description:
      'Browser-based tool to design, evaluate and export urban street cross-sections.',
    image: '/assets/blog/street-generator-1.png',
    imageAlt: 'Street Generator',
    tags: ['React', 'OpenStreetMap', 'LLM'],
    links: [
      {
        type: 'website',
        url: 'https://streetgenerator.com',
      },
    ],
  },
  {
    id: 'gtfs-explorer',
    title: 'GTFS & GBFS Explorer',
    description:
      'Drop a GTFS .zip or GBFS .json: see lines, stops, stations and charts. A browser-based tool for exploring public transit feeds interactively.',
    image: '/assets/blog/transit-feed-explorer-1.png',
    imageAlt: 'GTFS and GBFS Explorer',
    tags: ['React', 'GTFS', 'Mobility'],
    links: [
      {
        type: 'website',
        url: 'https://transit-feed-explorer.vercel.app/',
      },
    ],
  },
  {
    id: 'coordinate-club',
    title: "Commuters' Mapping",
    description:
      'Maps the Berlin transit network through the eyes of female explorers. Every terminal station visited, rated, and described, building a collective dataset on how the city actually feels, not just how it is planned.',
    image: '/assets/blog/coordinate-club-1.png',
    imageAlt: "Commuters' Mapping",
    tags: ['React', 'Mapbox', 'Community'],
    links: [
      {
        type: 'website',
        url: 'https://commuters-mapping.vercel.app',
      },
    ],
  },
  {
    id: 'paris-scooters',
    title: 'GBFS Micromobility Pipeline',
    hidden: true,
    description:
      'Real-time ETL pipeline consolidating micromobility data from 4 GBFS providers across Paris and Berlin. Built with Apache Airflow, PostgreSQL/PostGIS, and Docker, collecting hourly snapshots and refreshing spatiotemporal analysis views daily.',
    image: '/assets/images/paris-scooters.jpg',
    imageAlt: 'Paris',
    tags: ['Airflow', 'PostGIS', 'Docker'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/urbanis/gbfs-paris-scooters-analysis',
      },
    ],
  },
  {
    id: 'paris-policy',
    title: 'Paris & the Public Policy of Micromobility',
    description:
      "An editorial scrollytelling study of how Paris regulated shared scooters, from free-floating pioneer to Europe's most governed market, with interactive Mapbox choropleths built from real GBFS data. TU Berlin, 2023.",
    image: '/figures/Paris-scooter.jpg',
    imageAlt: 'Shared e-scooters in front of the Eiffel Tower',
    tags: ['React', 'Mapbox', 'Scrollytelling'],
    links: [
      {
        type: 'website',
        url: '/portfolio/paris-micromobility',
      },
    ],
  },
  {
    id: 'nordelta',
    title: 'Urban Growth in Nordelta, Buenos Aires',
    description:
      'Analyzing urban growth in Nordelta with Landsat timelapse imagery.',
    image: '/assets/images/nordelta.gif',
    imageAlt: 'Nordelta',
    tags: ['GoogleEarthEngine', 'Remote Sensing'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/urbanis/urban-growth-nordelta-time-lapse',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/pulse/time-lapse-del-crecimiento-de-los-barrios-privados-en-morales/',
      },
    ],
  },
];
