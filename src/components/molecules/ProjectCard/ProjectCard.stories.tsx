import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 350 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const WithGitHubAndLinkedIn: Story = {
  args: {
    project: {
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
  },
};

export const WithArcGIS: Story = {
  args: {
    project: {
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
  },
};

export const MultipleTags: Story = {
  args: {
    project: {
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
  },
};
