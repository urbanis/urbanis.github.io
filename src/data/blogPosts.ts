export type BlogLang = 'en' | 'es' | 'de';

export interface BlogPost {
  slug: string;
  lang: BlogLang;
  date: string;
  tags: string[];
  image?: string;
  linkedinUrl?: string;
  projectUrl?: string;
  translations: {
    en: { title: string; excerpt: string };
    es: { title: string; excerpt: string };
    de: { title: string; excerpt: string };
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'unesco',
    lang: 'en',
    date: '2026-03-15',
    tags: ['#GIS', '#Esri', '#Heritage'],
    image: '/assets/images/blog-unesco.png',
    linkedinUrl: 'https://www.linkedin.com/posts/nisleida_im-really-happy-to-have-been-part-of-enhancing-share-7429895603255451659-jxVI?utm_source=share&utm_medium=member_desktop&rcm=ACoAABHyUUQBKPrdBh2jHWsekFajQYyedAa1_5s',
    translations: {
      en: {
        title: 'UNESCO Sites Navigator at Mapular',
        excerpt: 'Working with large-scale spatial datasets and Esri tools to enhance the UNESCO Sites Navigator, contributing to the protection of heritage sites worldwide.',
      },
      es: {
        title: 'Navegador de Sitios UNESCO en Mapular',
        excerpt: 'Trabajando con grandes conjuntos de datos espaciales y herramientas Esri para mejorar el Navegador de Sitios UNESCO, contribuyendo a la protección del patrimonio mundial.',
      },
      de: {
        title: 'UNESCO-Sites-Navigator bei Mapular',
        excerpt: 'Arbeit mit großen räumlichen Datensätzen und Esri-Tools zur Verbesserung des UNESCO-Sites-Navigators, ein Beitrag zum Schutz von Welterbestätten.',
      },
    },
  },
  {
    slug: 'msc-thesis',
    lang: 'en',
    date: '2024-10-01',
    tags: ['#UrbanPlanning', '#DataAnalysis', '#GenderPlanning'],
    image: '/assets/images/blog-thesis.jpg',
    linkedinUrl: 'https://www.linkedin.com/posts/nisleida_its-a-wrap-one-week-ago-i-successfully-activity-7249730076030685184-icZJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABHyUUQBKPrdBh2jHWsekFajQYyedAa1_5s',
    translations: {
      en: {
        title: "It's a Wrap! Defending my M.Sc. Thesis",
        excerpt: 'Successfully defended my thesis on "Gender Criteria in Planning Bike Sharing Stations": a spatiotemporal analysis of women\'s nighttime cycling in Buenos Aires.',
      },
      es: {
        title: '¡Lo logré! Defensa de mi Tesis de Maestría',
        excerpt: 'Defendí exitosamente mi tesis sobre "Criterios de Género en la Planificación de Estaciones de Bicicletas Compartidas": un análisis espaciotemporal del ciclismo nocturno femenino en Buenos Aires.',
      },
      de: {
        title: 'Geschafft! Verteidigung meiner Masterarbeit',
        excerpt: 'Erfolgreiche Verteidigung meiner Thesis über "Geschlechterspezifische Kriterien bei der Planung von Fahrrad-Sharing-Stationen": eine raumzeitliche Analyse des nächtlichen Radfahrens von Frauen in Buenos Aires.',
      },
    },
  },
  {
    slug: 'tu-degree',
    lang: 'en',
    date: '2025-06-07',
    tags: ['#Education', '#UrbanPlanning', '#TUBerlin'],
    image: '/assets/images/blog-msc-degree.jpg',
    linkedinUrl: 'https://www.linkedin.com/posts/nisleida_im-happy-to-share-that-i-recently-received-ugcPost-7351551864133361664-KJXw?utm_source=share&utm_medium=member_desktop&rcm=ACoAABHyUUQBKPrdBh2jHWsekFajQYyedAa1_5s',
    translations: {
      en: {
        title: 'Dual Degree: TU Berlin & Universidad de Buenos Aires',
        excerpt: 'Proud to have received my dual degree: M.Sc. Stadt- und Regionalplanung from TU Berlin and Magíster from UBA in Urban Planning and Mobility.',
      },
      es: {
        title: 'Doble Titulación: TU Berlín y Universidad de Buenos Aires',
        excerpt: 'Orgullosa de haber recibido mi doble titulación: M.Sc. de la TU Berlín y Magíster de la UBA en Planificación Urbana y Movilidad.',
      },
      de: {
        title: 'Doppelabschluss: TU Berlin & Universidad de Buenos Aires',
        excerpt: 'Stolz meinen Doppelabschluss erhalten zu haben: M.Sc. Stadt- und Regionalplanung von der TU Berlin und Magíster der UBA in Stadtplanung und Mobilität.',
      },
    },
  },
  {
    slug: 'smart-city',
    lang: 'en',
    date: '2025-11-01',
    tags: ['#SmartCity', '#Mobility', '#UrbanTech'],
    image: '/assets/images/blog-expo.jpg',
    linkedinUrl: 'https://www.linkedin.com/posts/nisleida_what-an-inspiring-week-at-smart-city-expo-ugcPost-7394348686983446528-bnD8?utm_source=share&utm_medium=member_desktop&rcm=ACoAABHyUUQBKPrdBh2jHWsekFajQYyedAa1_5s',
    translations: {
      en: {
        title: 'Smart City Expo World Congress',
        excerpt: 'An inspiring week exploring shared mobility, autonomous vehicles, and data-driven city solutions at Smart City Expo World Congress.',
      },
      es: {
        title: 'Smart City Expo World Congress',
        excerpt: 'Una semana inspiradora explorando movilidad compartida, vehículos autónomos y soluciones urbanas basadas en datos en el Smart City Expo World Congress.',
      },
      de: {
        title: 'Smart City Expo World Congress',
        excerpt: 'Eine inspirierende Woche voller geteilter Mobilität, autonomer Fahrzeuge und datengetriebener Stadtlösungen auf dem Smart City Expo World Congress.',
      },
    },
  },
  {
    slug: 'arcgis-pro-associate',
    lang: 'en',
    date: '2022-09-01',
    tags: ['#ArcGIS', '#Certification', '#GIS'],
    image: '/assets/images/ArcGIS%20Pro%20Associate%202101.jpg',
    translations: {
      en: {
        title: 'Achievement Unlocked: ArcGIS Pro Associate Certification',
        excerpt: 'Earned my first Esri certification: ArcGIS Pro Associate 2101, a milestone built through challenging projects and countless weekends of learning.',
      },
      es: {
        title: 'Logro Desbloqueado: Certificación ArcGIS Pro Associate',
        excerpt: 'Obtuve mi primera certificación de Esri: ArcGIS Pro Associate 2101, un hito construido a través de proyectos desafiantes y muchos fines de semana de aprendizaje.',
      },
      de: {
        title: 'Erfolg freigeschaltet: ArcGIS Pro Associate Zertifizierung',
        excerpt: 'Meine erste Esri-Zertifizierung erhalten: ArcGIS Pro Associate 2101, ein Meilenstein aus herausfordernden Projekten und vielen Wochenenden des Lernens.',
      },
    },
  },
  {
    slug: 'flughafen',
    lang: 'en',
    date: '2022-06-01',
    tags: ['#UrbanPlanning', '#Berlin', '#Infrastructure'],
    image: '/assets/images/blog-airport-1.jpg',
    linkedinUrl: 'https://www.linkedin.com/posts/nisleida_urbanplanning-citizenparticipation-schonefeld-activity-7104433144438628353-h5dX?utm_source=share&utm_medium=member_desktop&rcm=ACoAABHyUUQBKPrdBh2jHWsekFajQYyedAa1_5s',
    translations: {
      en: {
        title: 'Auf Wiedersehen Flughafen Schönefeld',
        excerpt: 'Attending a Schönefeld community event: a commemoration of the past, celebration of the present, and consultation for the future of Berlin\'s former airport.',
      },
      es: {
        title: 'Auf Wiedersehen Flughafen Schönefeld',
        excerpt: 'Asistiendo a un evento comunitario en Schönefeld: una conmemoración del pasado, celebración del presente y consulta sobre el futuro del antiguo aeropuerto de Berlín.',
      },
      de: {
        title: 'Auf Wiedersehen Flughafen Schönefeld',
        excerpt: 'Besuch einer Schönefelder Gemeinschaftsveranstaltung: eine Würdigung der Vergangenheit, Feier der Gegenwart und Präsentation der Zukunft des ehemaligen Berliner Flughafens.',
      },
    },
  },
  {
    slug: 'mobility-turn',
    lang: 'en',
    date: '2022-03-01',
    tags: ['#Berlin', '#Mobility', '#UrbanPlanning'],
    image: '/assets/images/blog-mobilitatswende.jpg',
    linkedinUrl: 'https://www.linkedin.com/pulse/5-months-berlin-impressions-mobility-turn-nisleida-morales-/?trackingId=Iv7dlNf9uQT7bzXH6OSiXQ%3D%3D',
    translations: {
      en: {
        title: '5 Months in Berlin: 5 Impressions About the Mobility Shift',
        excerpt: 'Five months living in Berlin and five key observations about the Mobilitätswende: the city\'s ambitious shift toward sustainable urban mobility.',
      },
      es: {
        title: '5 Meses en Berlín: 5 Impresiones sobre el Giro de Movilidad',
        excerpt: 'Cinco meses viviendo en Berlín y cinco observaciones clave sobre la Mobilitätswende: el ambicioso giro de la ciudad hacia una movilidad urbana sostenible.',
      },
      de: {
        title: '5 Monate in Berlin: 5 Eindrücke zur Mobilitätswende',
        excerpt: 'Fünf Monate in Berlin und fünf wichtige Beobachtungen zur Mobilitätswende: dem ambitionierten Wandel der Stadt hin zu nachhaltiger urbaner Mobilität.',
      },
    },
  },
  {
    slug: 'transit-feed-explorer',
    lang: 'en',
    date: '2026-05-05',
    tags: ['#GTFS', '#Mobility', '#OpenData'],
    image: '/assets/blog/transit-feed-explorer-1.png',
    projectUrl: 'https://transit-feed-explorer.vercel.app/',
    translations: {
      en: {
        title: 'Transit Feed Explorer: Exploring GTFS & GBFS in the Browser',
        excerpt: 'A browser-based tool to drop a GTFS zip or GBFS JSON and instantly explore routes, stops, and trip calendars without writing a single line of code.',
      },
      es: {
        title: 'Transit Feed Explorer: Explorando GTFS y GBFS en el Navegador',
        excerpt: 'Una herramienta en el navegador para cargar un zip GTFS o JSON GBFS y explorar rutas, paradas y calendarios de viajes al instante, sin escribir una línea de código.',
      },
      de: {
        title: 'Transit Feed Explorer: GTFS & GBFS im Browser erkunden',
        excerpt: 'Ein Browser-Tool zum Laden einer GTFS-Zip oder GBFS-JSON und sofortigen Erkunden von Routen, Haltestellen und Fahrtkalendern ohne eine einzige Zeile Code.',
      },
    },
  },
  {
    slug: 'coordinate-club',
    lang: 'en',
    date: '2026-04-10',
    tags: ['#Berlin', '#Transit', '#GenderPlanning'],
    image: '/assets/blog/coordinate-club-1.png',
    projectUrl: 'https://commuters-mapping.vercel.app',
    translations: {
      en: {
        title: "Commuters' Mapping: Charting Berlin's End Stations",
        excerpt: 'A community app for mapping all end stations of the Berlin transit network through the eyes of female commuters, logging safety, atmosphere, and what it actually feels like to be there.',
      },
      es: {
        title: "Commuters' Mapping: Mapeando las Terminales de Berlín",
        excerpt: 'Una app comunitaria para mapear todas las estaciones terminales de la red de transporte de Berlín desde la perspectiva de mujeres viajeras, registrando seguridad, ambiente y cómo se siente estar ahí.',
      },
      de: {
        title: "Commuters' Mapping: Berlins Endstationen kartieren",
        excerpt: 'Eine Community-App zur Kartierung aller Endstationen des Berliner Nahverkehrsnetzes aus der Perspektive weiblicher Pendlerinnen, mit Bewertungen zu Sicherheit, Atmosphäre und dem echten Gefühl vor Ort.',
      },
    },
  },
  {
    slug: 'street-generator',
    lang: 'en',
    date: '2026-03-15',
    tags: ['#UrbanPlanning', '#WebApp', '#StreetDesign'],
    image: '/assets/blog/street-generator-1.png',
    projectUrl: 'https://streetgenerator.com',
    translations: {
      en: {
        title: 'Street Generator: Designing Street Sections in the Browser',
        excerpt: 'A lightweight browser tool to design, evaluate and export urban street cross-sections, built out of frustration with heavy CAD software for a simple planning task.',
      },
      es: {
        title: 'Street Generator: Diseñando Secciones de Calle en el Navegador',
        excerpt: 'Una herramienta ligera en el navegador para diseñar, evaluar y exportar secciones transversales de calles urbanas, creada por la frustración con el software CAD para una tarea simple de planificación.',
      },
      de: {
        title: 'Street Generator: Straßenquerschnitte im Browser gestalten',
        excerpt: 'Ein leichtgewichtiges Browser-Tool zum Entwerfen, Bewerten und Exportieren urbaner Straßenquerschnitte, entstanden aus der Frustration mit schwerer CAD-Software für eine einfache Planungsaufgabe.',
      },
    },
  },
  {
    slug: 'crecimiento-barrios-privados',
    lang: 'es',
    date: '2021-09-15',
    tags: ['#UrbanPlanning', '#GIS', '#BuenosAires'],
    image: '/assets/images/nordelta.gif',
    translations: {
      en: {
        title: 'Time-lapse of Private Neighborhood Growth in Nordelta',
        excerpt: 'Analyzing territorial transformations in Nordelta using Landsat satellite imagery, showing how gated communities displaced wetland ecosystems over two decades.',
      },
      es: {
        title: 'Time lapse del crecimiento de los barrios privados en Nordelta',
        excerpt: 'Análisis de las transformaciones territoriales en Nordelta a través de un time lapse de imágenes satelitales LANDSAT, mostrando cómo los barrios cerrados desplazaron los humedales en dos décadas.',
      },
      de: {
        title: 'Zeitraffer des Wachstums privater Wohnanlagen in Nordelta',
        excerpt: 'Analyse der territorialen Transformationen in Nordelta mittels Landsat-Satellitenbildern, wie Wohnanlagen Feuchtgebiete in zwei Jahrzehnten verdrängt haben.',
      },
    },
  },
];
