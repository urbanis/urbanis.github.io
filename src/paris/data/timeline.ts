import type { TimelineEntry } from './types';

export const timeline: TimelineEntry[] = [
  {
    year: '2018',
    actor: 'City Hall · 12 operators',
    title: 'Free-floating opens',
    description:
      'First European city to open up to free-floating shared e-scooters, left anywhere and picked up by the app. It was a rapid, under-regulated rollout: a dozen operators arrived faster than the rules could keep up.',
    kind: 'administrative',
    photo: '/figures/timeline-2018.jpg',
    photoAlt:
      'A green Lime e-scooter parked upright on a Parisian pavement beside a stone doorway.',
    source: 'The Local',
    sourceUrl:
      'https://www.thelocal.fr/20220930/paris-gives-ultimatum-on-e-scooter-misuse/',
  },
  {
    year: '2020–2023',
    actor: 'City Hall',
    title: 'The tender',
    description:
      'To supervise and control operators, the city selected just 3 (Lime, Dott, Tier), capped at 5,000 scooters each, under conditions: data privacy, equitable distribution, parking management, environmental responsibility and hardware durability.',
    kind: 'administrative',
    photo: '/figures/timeline-2020.jpg',
    photoAlt:
      'The three tender winners side by side: a green Lime scooter, a teal Tier scooter and a blue Dott scooter.',
    source: 'TechCrunch',
    sourceUrl:
      'https://techcrunch.com/2023/01/13/scooters-in-paris-are-at-a-crossroad-and-it-could-shape-the-future-of-micromobility/',
  },
  {
    year: '2021',
    actor: 'Operators',
    title: 'Geofencing',
    description:
      '662 areas defined to restrict use: no-locking zones, low-speed zones, no-scooter zones and no-parking zones, all enforced via GPS geofencing.',
    kind: 'spatial',
    photo: '/figures/timeline-2021.jpg',
    photoAlt:
      'A Paris metro campaign poster reading "Nos trottinettes sont à emporter et à ranger sur places," urging riders to park scooters in designated spots.',
  },
  {
    year: '2022',
    actor: 'City Hall · Operators',
    title: 'Enforcement & integration',
    description:
      'Fines of 135€ for riding on the pavement and 35€ for misparking; 900 cameras to spot scooters on bike/bus lanes; 10 km/h slow zones; 2,500 dedicated parking spots; and integration into the Bonjour RATP transport app.',
    kind: 'spatial',
    photo: '/figures/ratp.jpg',
    photoAlt:
      'Promotion for the Bonjour RATP app showing scooters on the map and the line "Ride Lime, Dott and TIER scooters," marking micromobility’s integration into the official Paris transport app.',
    source: 'Social Club Paris',
    sourceUrl: 'https://socialclub.paris/projects/lets-scoot-safely/',
  },
  {
    year: '2023',
    actor: 'City Hall · Residents',
    title: 'The referendum',
    description:
      'Having "gone as far as it could on regulation," the city called a referendum on 2 April 2023: "Do we, or don\'t we, continue with free-floating rental scooters?"',
    kind: 'administrative',
    photo: '/figures/timeline-2023.jpg',
    photoAlt:
      'Paris Mayor Anne Hidalgo speaking during an interview ahead of the April 2023 scooter referendum.',
    photoCaption: 'We don’t want',
    photoUrl:
      'https://www.france24.com/en/europe/20230401-a-polarised-debate-paris-to-vote-on-banning-self-service-e-scooters',
    photoB: '/figures/referendum-operators.jpg',
    photoBAlt:
      'A joint statement from Dott, Lime and Tier with the three operators’ logos, urging that free-floating scooters continue.',
    photoBCaption: 'We want',
    photoBUrl:
      'https://www.euronews.com/next/2022/10/19/will-paris-ban-shared-e-scooters-dott-lime-and-tier-hit-back-geofencing-id-checks-sensors',
    source: 'Le Parisien',
  },
];
