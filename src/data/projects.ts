import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'nordelta',
    title: 'Urban growth in Nordelta, Buenos Aires',
    description:
      'Analyzing urban growth in Nordelta with Landsat timelapse imagery.',
    image: '/assets/images/nordelta.gif',
    imageAlt: 'Nordelta',
    tags: ['#GoogleEarthEngine'],
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
  {
    id: 'paris-scooters',
    title: 'GBFS - Scooter Sharing Analysis in Paris',
    description:
      'Spatiotemporal Analysis of Micromobility in Paris using GBFS.',
    image: '/assets/images/paris.gif',
    imageAlt: 'Paris',
    tags: ['#DataAnalysis', '#PostGIS', '#SQL'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/urbanis/gbfs-paris-scooters-analysis',
      },
      {
        type: 'arcgis',
        url: 'https://ni01duqakafoxecj.maps.arcgis.com/apps/dashboards/8b360b40c6184e10808819dac6072643',
      },
    ],
  },
  {
    id: 'covid-dashboard',
    title: 'COVID-19 Cases - Worldwide Monitor',
    description:
      'COVID-19 Dashboard based in Johns Hopkins University (JHU) database.',
    image: '/assets/images/covid-dashboard.png',
    imageAlt: 'Covid',
    tags: ['#ArcGISDashboards', '#DataViz'],
    links: [
      {
        type: 'arcgis',
        url: 'https://www.arcgis.com/apps/dashboards/85a87395d8e2406c8367dbe1f4d9e3e8',
      },
    ],
  },
  {
    id: 'airbnb-nyc',
    title: 'Short-term rent analysis in New York',
    description: 'Exploratory Data Analysis with airbnb public data.',
    image: '/assets/images/airbnb.png',
    imageAlt: 'Airbnb',
    tags: ['#PowerBI', '#DataViz', '#DataAnalysis'],
    links: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/posts/nisleida_dreamteam-dataanalytics-coderhouse-activity-6835901393899950082-gRHo/',
      },
    ],
  },
  {
    id: 'berlin-transport',
    title: 'Public Transportation Service Area in Berlin',
    description:
      "App to visualize Berlin's service area and nearby Public Transport.",
    image: '/assets/images/service-area.png',
    imageAlt: 'Service-Area',
    tags: ['#QGIS', '#ArcGIS', '#DataViz', '#Cartography'],
    links: [
      {
        type: 'arcgis',
        url: 'https://ni01duqakafoxecj.maps.arcgis.com/apps/webappviewer/index.html?id=d84f9741355b4b6fb590c577f16d776a',
      },
    ],
  },
  {
    id: 'ecobici',
    title: 'Cycling Pattern behaviors in Buenos Aires',
    description:
      'Exploratory analysis in Buenos Aires disaggregated by gender.',
    image: '/assets/images/ecobici.png',
    imageAlt: 'Ecobici',
    tags: ['#ArcGISDashboards', '#DataViz', '#DataAnalysis'],
    links: [
      {
        type: 'arcgis',
        url: 'https://www.arcgis.com/apps/dashboards/114577d8ebe545b9b05aa234cfdca363',
      },
      {
        type: 'github',
        url: 'https://github.com/urbanis/bikes-buenos-aires-women-analysis',
      },
    ],
  },
];
