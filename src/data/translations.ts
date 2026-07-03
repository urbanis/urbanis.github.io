import type { Lang } from '@/contexts/LanguageContext';

export const translations: Record<Lang, {
  hero: {
    eyebrow: string; seeWork: string; contact: string; resume: string;
    roles: string[]; canvas: string;
  };
  about: { title: string; personalLabel: string; bio: string; personal: string; stats: string[] };
  skills: { title: string; subtitle: string };
  career: { title: string; subtitle: string };
  portfolio: { title: string; subtitle: string; groups: { behavior: string; mobility: string; urban: string }; descriptions: Record<string, string>; inProgress: string; view: string };
  publications: {
    title: string; subtitle: string; read: string;
    descriptions: { masterThesis: string; cetam: string; bachelorThesis: string };
  };
  credentials: {
    title: string; subtitle: string; cv: string; viewCv: string;
    certification: string; email: string; workAuth: string; blueCard: string;
  };
  contact: { title: string; heading: string; orMessage: string; copyEmail: string; name: string; email: string; message: string; send: string; success: string; error: string };
  nav: { about: string; skills: string; career: string; portfolio: string; blog: string };
  footer: { tagline: string; cta: string; emailNote: string; navigate: string; connect: string; copyright: string };
}> = {
  en: {
    hero: {
      eyebrow: "Hello, I'm",
      roles: ['Urban Planner', 'Geospatial Developer', 'Solutions Engineer'],
      canvas: 'Building data-driven products.',
      seeWork: 'See my portfolio →',
      contact: 'Get in touch',
      resume: 'Resume',
    },
    about: {
      title: 'About Me',
      personalLabel: 'My Story',
      bio: `I am a Solutions Engineer with 5+ years building data-driven products and location intelligence tools across the geospatial stack. In practice that means I sit between engineering, product, and clients, translating what's technically possible into something they can actually use. I work end to end, from scoping and prototyping to production and client support, managing delivery throughout and turning spatial data into decisions clients can act on. My background in urban planning and mobility sparked my passion for data, design, and problem solving. Exploring how cities function through data is what ultimately led me into tech.`,
      personal: `I was born and raised in Venezuela, and moving abroad in 2019 to Argentina and in 2022 to Germany has shaped who I am personally and professionally. A dual master's between Buenos Aires and TU Berlin is what first brought me to Europe. I'm always looking for new challenges, and that drive is what keeps me going. In my free time I like to work on my side projects, go to events, and keep getting to know the city I live in.`,
      stats: [
        'Location Intelligence & technology stack development',
        'Research in European mobility projects',
        'Dual M.Sc. in Urban Mobility (Buenos Aires & Berlin)',
        "Bachelor's Degree in Urban Planning",
      ],
    },
    skills: { title: 'Skills & Expertise', subtitle: '' },
    career: { title: 'My Journey', subtitle: 'My experience across Venezuela, Argentina and Germany' },
    portfolio: {
      title: 'Side Projects',
      subtitle: 'Projects I built in my spare time',
      groups: {
        behavior: 'Pattern Behavior',
        mobility: 'Mobility Data',
        urban: 'Urban Planning and Design',
      },
      descriptions: {
        'my-journey': 'An immersive storytelling atlas tracing how three cities (Caracas, Buenos Aires, and Berlin) shaped one urban planner\'s understanding of human mobility. Built with React, Leaflet, and Framer Motion.',
        'street-generator': 'Browser-based tool to design, evaluate and export urban street cross-sections.',
        'gtfs-explorer': 'Drop a GTFS .zip or GBFS .json: see lines, stops, stations and charts. A browser-based tool for exploring public transit feeds interactively.',
        'coordinate-club': 'Browser-based tool for mapping the Berlin transit network through the eyes of female explorers. Every terminal station visited, rated, and described, building a collective dataset on how the city actually feels, not just how it is planned.',
        'paris-scooters': 'Real-time ETL pipeline consolidating micromobility data from four GBFS providers across Paris and Berlin. Built with Apache Airflow, PostgreSQL/PostGIS, and Docker, collecting hourly snapshots and refreshing spatiotemporal analysis views daily.',
        'nordelta': 'Analyzing urban growth in Nordelta with Landsat timelapse imagery.',
      },
      inProgress: '(in progress)',
      view: 'View →',
    },
    publications: {
      title: 'Publications',
      subtitle: 'Academic research and thesis work.',
      read: 'Read →',
      descriptions: {
        masterThesis: 'Spatiotemporal analysis of women\'s nighttime cycling patterns in Buenos Aires, evaluating gender-sensitive criteria for planning bike-sharing stations.',
        cetam: 'Analyzed how mobility in the Lanús transit hub changed during the COVID-19 reopening, examining the relationship between public transport, urban form, and crowd concentration in a key node of the Buenos Aires Metropolitan Area.',
        bachelorThesis: 'Identified micro-attributes of the built environment that encourage walking among older adults (60+) in Casco de Chacao, Caracas, based on a survey aligned with international walkability standards.',
      },
    },
    credentials: {
      title: 'Credentials',
      subtitle: 'Everything you need, in one place.',
      cv: 'Curriculum Vitae',
      viewCv: 'View CV',
      certification: 'Certification',
      email: 'Email',
      workAuth: 'Work Authorization',
      blueCard: 'EU Blue Card holder · Germany',
    },
    contact: {
      title: 'Contact',
      heading: 'Contact me',
      orMessage: 'Or just drop me a message',
      copyEmail: 'Copy email',
      name: 'Your name',
      email: 'Your email',
      message: 'Message',
      send: 'Send',
      success: "Message sent! I'll get back to you soon.",
      error: 'Something went wrong. Please try again.',
    },
    nav: { about: 'About', skills: 'Skills', career: 'Career', portfolio: 'Portfolio', blog: 'Journal' },
    footer: {
      tagline: "Let's build something good together.",
      cta: 'Contact me on LinkedIn →',
      emailNote: 'or send me an email:',
      navigate: 'Navigate',
      connect: 'Connect',
      copyright: 'Nisleida Morales · All rights reserved',
    },
  },
  es: {
    hero: {
      eyebrow: 'Hola, soy',
      roles: ['Urbanista', 'Desarrolladora Geoespacial', 'Solutions Engineer'],
      canvas: 'Construyendo productos basados en datos.',
      seeWork: 'Ver mi portafolio →',
      contact: 'Contáctame',
      resume: 'Currículum',
    },
    about: {
      title: 'Sobre mí',
      personalLabel: 'Mi Historia',
      bio: `Soy Solutions Engineer con más de 5 años de experiencia desarrollando productos basados en datos y herramientas de inteligencia de localización. He trabajado en todo el ciclo de vida del producto, desde la investigación UX y el prototipado hasta la estrategia de producto y el despliegue. Mi formación en planificación urbana y movilidad despertó mi pasión por los datos, el diseño y el análisis espacial. Explorar cómo funcionan las ciudades a través de los datos es lo que finalmente me llevó a la tecnología.`,
      personal: `Nací y crecí en Venezuela, y mudarme a Argentina en 2019 y a Alemania en 2022 ha moldeado mi experiencia personal y profesional. Una doble maestría entre Buenos Aires y la TU Berlín fue lo que me trajo por primera vez a Europa. Siempre estoy buscando nuevos retos, y ese impulso es lo que me define. En mi tiempo libre me gusta trabajar en mis proyectos personales, ir a eventos y seguir conociendo la ciudad en la que vivo.`,
      stats: [
        'Inteligencia de localización y desarrollo de stack tecnológico',
        'Investigación en proyectos de movilidad europeos',
        'Doble Máster en Movilidad Urbana (Buenos Aires y Berlín)',
        'Licenciatura en Planificación Urbana',
      ],
    },
    skills: { title: 'Habilidades y Experiencia', subtitle: '' },
    career: { title: 'Mi Trayectoria', subtitle: 'Mi experiencia en Venezuela, Argentina y Alemania' },
    portfolio: {
      title: 'Proyectos Personales',
      subtitle: 'Proyectos que construí en mi tiempo libre',
      groups: {
        behavior: 'Comportamiento y Patrones',
        mobility: 'Datos de Movilidad',
        urban: 'Planificación y Diseño Urbano',
      },
      descriptions: {
        'my-journey': 'Un atlas narrativo inmersivo que traza cómo tres ciudades (Caracas, Buenos Aires y Berlín) moldearon la comprensión de la movilidad humana de una urbanista. Desarrollado con React, Leaflet y Framer Motion.',
        'street-generator': 'Herramienta en el navegador para diseñar, evaluar y exportar secciones transversales de calles urbanas.',
        'gtfs-explorer': 'Carga un archivo GTFS .zip o GBFS .json y visualiza líneas, paradas, estaciones y gráficos interactivos.',
        'coordinate-club': 'Herramienta web para mapear la red de transporte de Berlín a través de los ojos de exploradoras. Cada terminal visitada, valorada y descrita, construyendo un dataset colectivo sobre cómo se siente la ciudad, no solo cómo está planificada.',
        'paris-scooters': 'Pipeline ETL en tiempo real que consolida datos de micromovilidad de 4 proveedores GBFS en París y Berlín. Construido con Apache Airflow, PostgreSQL/PostGIS y Docker, recolectando snapshots horarios y actualizando vistas de análisis espaciotemporal diariamente.',
        'nordelta': 'Análisis del crecimiento urbano en Nordelta con imágenes satelitales Landsat en time-lapse.',
      },
      inProgress: '(en desarrollo)',
      view: 'Ver →',
    },
    publications: {
      title: 'Publicaciones',
      subtitle: 'Investigación académica y trabajos de tesis.',
      read: 'Leer →',
      descriptions: {
        masterThesis: 'Análisis espaciotemporal de los patrones de ciclismo nocturno femenino en Buenos Aires, evaluando criterios sensibles al género para la planificación de estaciones de bicicletas compartidas.',
        cetam: 'Analiza los cambios de movilidad en el nodo de transbordo de Lanús durante la reapertura por COVID-19, examinando la relación entre el transporte público, la forma urbana y la concentración de personas en un punto clave del Área Metropolitana de Buenos Aires.',
        bachelorThesis: 'Identifica los micro atributos del entorno construido que favorecen la caminata de los adultos mayores (60+) en el Casco de Chacao, Caracas, a partir de una encuesta alineada con estándares internacionales de caminabilidad.',
      },
    },
    credentials: {
      title: 'Credenciales',
      subtitle: 'Todo lo que necesitas, en un solo lugar.',
      cv: 'Currículum Vitae',
      viewCv: 'Ver CV',
      certification: 'Certificación',
      email: 'Correo electrónico',
      workAuth: 'Autorización de trabajo',
      blueCard: 'Titular de EU Blue Card · Alemania',
    },
    contact: {
      title: 'Contacto',
      heading: 'Contáctame',
      orMessage: 'O simplemente escríbeme aquí',
      copyEmail: 'Copiar correo',
      name: 'Tu nombre',
      email: 'Tu correo',
      message: 'Mensaje',
      send: 'Enviar',
      success: '¡Mensaje enviado! Te respondo pronto.',
      error: 'Algo salió mal. Por favor intenta de nuevo.',
    },
    nav: { about: 'Sobre mí', skills: 'Habilidades', career: 'Trayectoria', portfolio: 'Portafolio', blog: 'Journal' },
    footer: {
      tagline: 'Construyamos algo bueno juntos.',
      cta: 'Contáctame en LinkedIn →',
      emailNote: 'o envíame un correo',
      navigate: 'Navegar',
      connect: 'Conectar',
      copyright: 'Nisleida Morales · Todos los derechos reservados',
    },
  },
  de: {
    hero: {
      eyebrow: 'Hallo, ich bin',
      roles: ['Stadtplanerin', 'Geospatial-Entwicklerin', 'Solutions Engineer'],
      canvas: 'Datengetriebene Produkte entwickeln.',
      seeWork: 'Mein Portfolio →',
      contact: 'Kontakt',
      resume: 'Lebenslauf',
    },
    about: {
      title: 'Über mich',
      personalLabel: 'Meine Geschichte',
      bio: `Ich bin Solutions Engineer mit über 5 Jahren Erfahrung in der Entwicklung datengetriebener Produkte und Location-Intelligence-Tools. Ich habe den gesamten Produktlebenszyklus begleitet, von UX-Forschung und Prototyping bis hin zu Produktstrategie und Deployment. Mein Hintergrund in Stadtplanung und Mobilität hat meine Leidenschaft für Daten, Design und räumliche Analyse geweckt. Zu erforschen, wie Städte durch Daten funktionieren, hat mich letztendlich in die Technologiebranche gebracht.`,
      personal: `Ich wurde in Venezuela geboren und aufgewachsen, und mein Umzug 2019 nach Argentinien und 2022 nach Deutschland hat mich persönlich und beruflich geprägt. Ein Doppelmaster zwischen Buenos Aires und der TU Berlin hat mich zum ersten Mal nach Europa gebracht. Ich bin immer auf der Suche nach neuen Herausforderungen, und dieser Antrieb ist das, was mich ausmacht. In meiner Freizeit arbeite ich gerne an meinen Projekten, gehe zu Veranstaltungen und lerne die Stadt kennen, in der ich lebe.`,
      stats: [
        'Location Intelligence & technologische Stack-Entwicklung',
        'Forschung in europäischen Mobilitätsprojekten',
        'Dualer M.Sc. in Urbaner Mobilität (Buenos Aires & Berlin)',
        'Bachelor in Stadtplanung',
      ],
    },
    skills: { title: 'Kompetenzen & Expertise', subtitle: '' },
    career: { title: 'Mein Werdegang', subtitle: 'Meine Erfahrungen in Venezuela, Argentinien und Deutschland' },
    portfolio: {
      title: 'Nebenprojekte',
      subtitle: 'Projekte, die ich in meiner Freizeit gebaut habe',
      groups: {
        behavior: 'Verhaltensmuster',
        mobility: 'Mobilitätsdaten',
        urban: 'Stadtplanung und Design',
      },
      descriptions: {
        'my-journey': 'Ein immersiver Storytelling-Atlas, der zeigt, wie drei Städte (Caracas, Buenos Aires und Berlin) das Verständnis urbaner Mobilität einer Stadtplanerin geprägt haben. Entwickelt mit React, Leaflet und Framer Motion.',
        'street-generator': 'Browser-basiertes Tool zum Entwerfen, Bewerten und Exportieren urbaner Straßenquerschnitte.',
        'gtfs-explorer': 'Lade eine GTFS .zip oder GBFS .json: sieh Linien, Haltestellen, Stationen und Diagramme interaktiv.',
        'coordinate-club': 'Browser-basiertes Tool zur Kartierung des Berliner Nahverkehrsnetzes aus der Perspektive von Forscherinnen. Jede Endstation besucht, bewertet und beschrieben, ein kollektiver Datensatz darüber, wie sich die Stadt wirklich anfühlt, nicht nur wie sie geplant ist.',
        'paris-scooters': 'Echtzeit-ETL-Pipeline zur Konsolidierung von Mikromobilitätsdaten von 4 GBFS-Anbietern in Paris und Berlin. Entwickelt mit Apache Airflow, PostgreSQL/PostGIS und Docker, stündliche Snapshots und tägliche Aktualisierung räumlich-zeitlicher Analyseviews.',
        'nordelta': 'Analyse des Stadtwachstums in Nordelta mit Landsat-Zeitrafferbildern.',
      },
      inProgress: '(in Bearbeitung)',
      view: 'Ansehen →',
    },
    publications: {
      title: 'Publikationen',
      subtitle: 'Akademische Forschung und Abschlussarbeiten.',
      read: 'Lesen →',
      descriptions: {
        masterThesis: 'Raumzeitliche Analyse der nächtlichen Radfahrmuster von Frauen in Buenos Aires zur Bewertung geschlechterspezifischer Kriterien für die Planung von Fahrrad-Sharing-Stationen.',
        cetam: 'Analyse der Mobilitätsveränderungen im Transitorknoten von Lanús während der COVID-19-Wiedereröffnung, mit Fokus auf das Verhältnis zwischen öffentlichem Nahverkehr, Stadtstruktur und Personenkonzentration in einem Schlüsselknoten des Großraums Buenos Aires.',
        bachelorThesis: 'Identifiziert Mikroattribute der gebauten Umwelt, die das Zufußgehen älterer Erwachsener (60+) im Casco de Chacao, Caracas, fördern, basierend auf einer Umfrage nach internationalen Walkability-Standards.',
      },
    },
    credentials: {
      title: 'Referenzen',
      subtitle: 'Alles, was Sie brauchen, an einem Ort.',
      cv: 'Lebenslauf',
      viewCv: 'CV ansehen',
      certification: 'Zertifizierung',
      email: 'E-Mail',
      workAuth: 'Arbeitserlaubnis',
      blueCard: 'EU Blue Card Inhaberin · Deutschland',
    },
    contact: {
      title: 'Kontakt',
      heading: 'Kontaktieren Sie mich',
      orMessage: 'Oder schreiben Sie mir direkt hier',
      copyEmail: 'E-Mail kopieren',
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      message: 'Nachricht',
      send: 'Senden',
      success: 'Nachricht gesendet! Ich melde mich bald.',
      error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    },
    nav: { about: 'Über mich', skills: 'Kompetenzen', career: 'Werdegang', portfolio: 'Portfolio', blog: 'Journal' },
    footer: {
      tagline: 'Lasst uns gemeinsam etwas Gutes bauen.',
      cta: 'Auf LinkedIn kontaktieren →',
      emailNote: 'oder schreib mir eine E-Mail',
      navigate: 'Navigation',
      connect: 'Verbinden',
      copyright: 'Nisleida Morales · Alle Rechte vorbehalten',
    },
  },
};
