import type { Service } from './types';

export const services: Service[] = [
  {
    name: 'Moped',
    operator: 'Cityscoot',
    year: 2016,
    metric: '~4,000 mopeds · max 45 km/h',
    blurb:
      'Free-floating, self-service electric mopeds with no commitment and no subscription.',
    image: '/figures/service-moped.jpg',
    imageAlt: 'A rider on a Cityscoot electric moped near the Arc de Triomphe in Paris.',
    source: 'Cityscoot',
    sourceUrl: 'https://www.cityscoot.eu/en',
  },
  {
    name: 'Bike',
    operator: "Vélib'",
    year: 2007,
    metric: '~14,000 bikes · 1,392 stations',
    blurb:
      'A large-scale docked public bicycle-sharing system operating in Paris since 2007.',
    image: '/figures/service-bike.jpg',
    imageAlt: "Green Vélib' shared bikes docked at a station along a Paris cycle lane.",
    source: "Vélib' Métropole",
    sourceUrl: 'https://www.velib-metropole.fr/en/service',
  },
  {
    name: 'Scooter',
    operator: 'Lime · Dott · Tier',
    year: 2018,
    metric: '+5,000 scooters · 3 operators',
    blurb:
      'Free-floating shared e-scooters: Paris was the first European city to open this market in 2018.',
    image: '/figures/service-scooter.jpg',
    imageAlt: 'A green Lime e-scooter parked upright beside a Parisian doorway.',
    source: 'The Local',
    sourceUrl:
      'https://www.thelocal.fr/20230403/explained-what-are-the-rules-on-e-scooters-in-paris-now',
  },
];
