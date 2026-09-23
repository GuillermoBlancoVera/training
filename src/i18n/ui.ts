import type { Category, Level } from '../lib/taxonomy';

export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'es';

/** Open Graph locale and hreflang value for each language. */
export const locales: Record<Lang, { og: string; hreflang: string }> = {
  es: { og: 'es_ES', hreflang: 'es' },
  en: { og: 'en_GB', hreflang: 'en' },
};

type Entry = [title: string, text: string];

const es = {
  meta: {
    siteName: 'Guillermo Blanco Vera',
    title: 'Guillermo Blanco Vera | Formación tecnológica',
    description: 'Cloud, AWS, programación e Inteligencia Artificial explicados desde la experiencia práctica.',
  },
  nav: {
    home: 'Inicio',
    courses: 'Cursos',
    about: 'Experiencia',
    contact: 'Contacto',
    cta: 'Hablemos',
    openMenu: 'Abrir menú',
    mainNav: 'Navegación principal',
    languageNav: 'Idioma',
  },
  footer: { tagline: 'Formación tecnológica basada en experiencia real.' },
  categories: { cloud: 'Cloud & AWS', programming: 'Programación', ai: 'Inteligencia Artificial' } satisfies Record<
    Category,
    string
  >,
  levels: {
    beginner: 'Inicial',
    'beginner-intermediate': 'Inicial / Intermedio',
    intermediate: 'Intermedio',
  } satisfies Record<Level, string>,
  hours: (hours: string) => `${hours} horas`,
  modality: 'Presencial, online o híbrida',
  courseCard: { more: 'Ver ficha' },
  home: {
    heading: 'Formación tecnológica para empresas y profesionales.',
    lead: 'Cloud, AWS, programación e Inteligencia Artificial explicados desde la experiencia práctica.',
    viewCourses: 'Ver cursos',
    viewExperience: 'Conocer mi experiencia',
    highlights: ['Senior Software Engineer', 'AWS · Backend · IA', '+10 años de experiencia'],
    areasEyebrow: 'Áreas de formación',
    areasHeading: 'Conceptos claros. Aplicación real.',
    areas: {
      cloud:
        'Arquitecturas, servicios, seguridad, costes e infraestructura como código para comprender y construir en la nube.',
      programming: 'Fundamentos y herramientas prácticas para automatizar, entender sistemas y desarrollar software.',
      ai: 'Desde las bases de IA hasta aplicaciones generativas, LLM y servicios de AWS.',
    } satisfies Record<Category, string>,
    featuredEyebrow: 'Cursos destacados',
    featuredHeading: 'Formación que se adapta al contexto.',
    fullCatalogue: 'Ver catálogo completo',
    experienceEyebrow: 'Experiencia profesional',
    experienceHeading: 'Más de 10 años desarrollando tecnología.',
    experienceText:
      'La formación parte de experiencia en desarrollo de software, backend, Cloud, liderazgo técnico, Computer Vision e Inteligencia Artificial; desde startups hasta sistemas empresariales sobre AWS.',
    experienceLink: 'Ver trayectoria profesional →',
    certificationsEyebrow: 'Certificaciones AWS',
    ctaEyebrow: 'Formación a medida',
    ctaHeading: '¿Buscas una formación adaptada a tu equipo?',
    ctaText: 'Los cursos pueden ajustarse en duración, nivel y contenidos según las necesidades de cada empresa.',
    ctaButton: 'Hablemos de la formación',
  },
  certifications: [
    ['AWS Certified Cloud Practitioner', 'Fundamentos de arquitectura Cloud, seguridad, servicios y costes en AWS.'],
    [
      'AWS Certified AI Practitioner',
      'Conocimientos de Inteligencia Artificial, IA generativa y servicios de IA en AWS.',
    ],
  ] satisfies Entry[],
  catalogue: {
    title: 'Cursos',
    eyebrow: 'Catálogo de formación',
    heading: 'Cursos para entender, decidir y construir mejor.',
    lead: 'Sesiones claras y prácticas para empresas y profesionales. Cada formación puede adaptarse al nivel, tiempo y objetivos del equipo.',
    filterLabel: 'Filtrar por área',
    all: 'Todos',
    pathsEyebrow: 'Itinerarios de aprendizaje',
    pathsHeading: 'Recorridos conectados para avanzar con sentido.',
    paths: [
      ['Cloud & AWS esencial', 'Para entender Cloud y establecer una base práctica en AWS.'],
      ['Construir en AWS', 'Para equipos que ya conocen lo básico y necesitan diseñar sistemas mantenibles.'],
      ['IA aplicada', 'Para comprender la IA generativa y llevarla a productos y procesos.'],
    ] satisfies Entry[],
  },
  course: {
    back: '← Volver al catálogo',
    request: 'Solicitar esta formación',
    details: 'Información del curso',
    audience: 'Dirigido a',
    prerequisites: 'Conocimientos previos',
    exercises: 'Posibles ejercicios',
    adaptation: 'Adaptación a empresas',
    related: 'También puede interesarte',
    ctaHeading: 'Formación adaptada al equipo.',
    ctaText: 'Podemos ajustar la duración, el nivel técnico y los ejercicios a las necesidades de tu organización.',
    ctaButton: 'Contactar',
  },
  about: {
    title: 'Experiencia',
    eyebrow: 'Trayectoria profesional',
    heading: 'Más de 10 años desarrollando tecnología.',
    lead: 'Una trayectoria que une software, backend, Cloud, liderazgo técnico e Inteligencia Artificial; siempre con foco en convertir tecnología compleja en sistemas útiles.',
    evolution: [
      'Desarrollo de software',
      'Backend & Cloud',
      'Liderazgo técnico',
      'Inteligencia Artificial',
      'AWS empresarial',
    ],
    timeline: [
      {
        dates: '2024 — Actualidad',
        company: 'Volkswagen Digital:Hub',
        role: 'Software Engineer · Technical Lead',
        text: 'Arquitecturas Cloud sobre AWS y sistemas empresariales: datos, integración, event-driven, observabilidad e infraestructura como código.',
      },
      {
        dates: '2023 — 2024',
        company: 'Padmi',
        role: 'CTO',
        text: 'Liderazgo de equipos de Computer Vision, iOS y Android; arquitectura Cloud, IA, backend y decisiones de producto.',
      },
      {
        dates: '2020 — 2023',
        company: 'Alyze',
        role: 'CTO',
        text: 'Desarrollo de un motor de IA para análisis de emociones mediante reconocimiento facial, con responsabilidad técnica, de producto e infraestructura.',
      },
    ],
    earlierEyebrow: 'Experiencia anterior',
    earlier: [
      [
        'Lendin',
        'Co-Founder. Desarrollo Full Stack de una aplicación peer-to-peer con React Native, Node.js, Java y Cloud.',
      ],
      [
        'Integrasys · UC3M',
        'Desarrollo iOS y sistemas de comunicaciones por satélite; proyectos de AR/VR con Unity y C#.',
      ],
      [
        'Investigación y móvil',
        'Machine Learning en el Hospital de La Princesa y aplicaciones iOS corporativas en Slashmobility.',
      ],
    ] satisfies Entry[],
    educationEyebrow: 'Formación',
    education: [
      ['Ingeniero de Telecomunicación', 'Universidad Carlos III de Madrid'],
      ['Máster en Multimedia y Comunicaciones', 'Universidad Carlos III de Madrid'],
    ] satisfies Entry[],
    certificationsEyebrow: 'Certificaciones AWS',
  },
  contact: {
    title: 'Contacto',
    eyebrow: 'Contacto',
    heading: 'Hablemos de la formación que necesita tu equipo.',
    lead: 'Los cursos pueden adaptarse en duración, nivel y contenidos. Puedes escribirme directamente o conectar conmigo en LinkedIn.',
    linkedinText: 'Perfil profesional y trayectoria.',
    linkedinButton: 'Ver perfil de LinkedIn',
  },
  notFound: {
    title: 'Página no encontrada',
    heading: 'Esta página no existe.',
    text: 'Puede que el enlace haya cambiado. Desde el catálogo puedes ver todos los cursos disponibles.',
    button: 'Ver cursos',
  },
};

export type UI = typeof es;

const en: UI = {
  meta: {
    siteName: 'Guillermo Blanco Vera',
    title: 'Guillermo Blanco Vera | Technology training',
    description: 'Cloud, AWS, programming and Artificial Intelligence explained through practical experience.',
  },
  nav: {
    home: 'Home',
    courses: 'Courses',
    about: 'Experience',
    contact: 'Contact',
    cta: "Let's talk",
    openMenu: 'Open menu',
    mainNav: 'Main navigation',
    languageNav: 'Language',
  },
  footer: { tagline: 'Technology training based on real-world experience.' },
  categories: { cloud: 'Cloud & AWS', programming: 'Programming', ai: 'Artificial Intelligence' },
  levels: { beginner: 'Beginner', 'beginner-intermediate': 'Beginner / Intermediate', intermediate: 'Intermediate' },
  hours: (hours) => `${hours} hours`,
  modality: 'On-site, online or hybrid',
  courseCard: { more: 'View course' },
  home: {
    heading: 'Technology training for companies and professionals.',
    lead: 'Cloud, AWS, programming and Artificial Intelligence explained through practical experience.',
    viewCourses: 'View courses',
    viewExperience: 'Explore my experience',
    highlights: ['Senior Software Engineer', 'AWS · Backend · AI', '10+ years of experience'],
    areasEyebrow: 'Training areas',
    areasHeading: 'Clear concepts. Real-world application.',
    areas: {
      cloud: 'Architectures, services, security, cost and infrastructure as code to understand and build in the cloud.',
      programming: 'Practical foundations and tools for automation, understanding systems and developing software.',
      ai: 'From AI foundations to generative applications, LLMs and AWS services.',
    },
    featuredEyebrow: 'Featured courses',
    featuredHeading: 'Training that adapts to the context.',
    fullCatalogue: 'View full catalogue',
    experienceEyebrow: 'Professional experience',
    experienceHeading: 'More than 10 years building technology.',
    experienceText:
      'The training draws on experience in software development, backend, Cloud, technical leadership, Computer Vision and Artificial Intelligence; from startups to enterprise systems on AWS.',
    experienceLink: 'View professional background →',
    certificationsEyebrow: 'AWS certifications',
    ctaEyebrow: 'Tailored training',
    ctaHeading: 'Looking for training adapted to your team?',
    ctaText: 'Courses can be adjusted in duration, level and content to suit each organisation.',
    ctaButton: "Let's talk about training",
  },
  certifications: [
    ['AWS Certified Cloud Practitioner', 'Fundamentals of Cloud architecture, security, services and cost on AWS.'],
    ['AWS Certified AI Practitioner', 'Knowledge of Artificial Intelligence, Generative AI and AWS AI services.'],
  ],
  catalogue: {
    title: 'Courses',
    eyebrow: 'Training catalogue',
    heading: 'Courses to understand, decide and build better.',
    lead: "Clear, practical sessions for companies and professionals. Every course can be adapted to the team's level, time and goals.",
    filterLabel: 'Filter by area',
    all: 'All',
    pathsEyebrow: 'Learning paths',
    pathsHeading: 'Connected routes to progress with purpose.',
    paths: [
      ['Cloud & AWS essentials', 'Understand Cloud and build a practical foundation in AWS.'],
      ['Building on AWS', 'For teams who know the basics and need to design maintainable systems.'],
      ['Applied AI', 'Understand Generative AI and bring it into products and processes.'],
    ],
  },
  course: {
    back: '← Back to catalogue',
    request: 'Request this training',
    details: 'Course details',
    audience: 'Who it is for',
    prerequisites: 'Previous knowledge',
    exercises: 'Possible exercises',
    adaptation: 'Company adaptation',
    related: 'You may also be interested in',
    ctaHeading: 'Training adapted to your team.',
    ctaText: "We can adjust the duration, technical depth and exercises to your organisation's needs.",
    ctaButton: 'Get in touch',
  },
  about: {
    title: 'Experience',
    eyebrow: 'Professional experience',
    heading: 'More than 10 years building technology.',
    lead: 'A career spanning software, backend, Cloud, technical leadership and Artificial Intelligence, always focused on turning complex technology into useful systems.',
    evolution: [
      'Software Development',
      'Backend & Cloud',
      'Technical Leadership',
      'Artificial Intelligence',
      'Enterprise AWS',
    ],
    timeline: [
      {
        dates: '2024 — Present',
        company: 'Volkswagen Digital:Hub',
        role: 'Software Engineer · Technical Lead',
        text: 'AWS Cloud architectures and enterprise systems: data, integration, event-driven systems, observability and infrastructure as code.',
      },
      {
        dates: '2023 — 2024',
        company: 'Padmi',
        role: 'CTO',
        text: 'Leading Computer Vision, iOS and Android teams; Cloud architecture, AI, backend and product decisions.',
      },
      {
        dates: '2020 — 2023',
        company: 'Alyze',
        role: 'CTO',
        text: 'Building an AI engine for emotion analysis through facial recognition, with technical, product and infrastructure responsibility.',
      },
    ],
    earlierEyebrow: 'Earlier experience',
    earlier: [
      [
        'Lendin',
        'Co-Founder. Full Stack development of a peer-to-peer application with React Native, Node.js, Java and Cloud.',
      ],
      ['Integrasys · UC3M', 'iOS development and satellite communication systems; AR/VR projects with Unity and C#.'],
      [
        'Research and mobile',
        'Machine Learning at Hospital de La Princesa and corporate iOS applications at Slashmobility.',
      ],
    ],
    educationEyebrow: 'Education',
    education: [
      ['Telecommunications Engineer', 'Universidad Carlos III de Madrid'],
      ["Master's in Multimedia and Communications", 'Universidad Carlos III de Madrid'],
    ],
    certificationsEyebrow: 'AWS certifications',
  },
  contact: {
    title: 'Contact',
    eyebrow: 'Contact',
    heading: "Let's talk about the training your team needs.",
    lead: 'Courses can be adapted in duration, level and content. You can email me directly or connect with me on LinkedIn.',
    linkedinText: 'Professional profile and career.',
    linkedinButton: 'View LinkedIn profile',
  },
  notFound: {
    title: 'Page not found',
    heading: 'This page does not exist.',
    text: 'The link may have changed. The catalogue lists every available course.',
    button: 'View courses',
  },
};

export const ui: Record<Lang, UI> = { es, en };

export const contact = {
  email: 'guillermoblancovera@gmail.com',
  linkedin: 'https://www.linkedin.com/in/guillermo-blanco-vera/',
};

/** Learning paths: course ids in the recommended order. Titles come from the courses themselves. */
export const learningPaths: string[][] = [
  ['cloud-computing-profesionales', 'introduccion-aws', 'aws-aplicacion-cloud'],
  ['aws-aplicacion-cloud', 'serverless-aws', 'infrastructure-as-code-aws'],
  ['ia-profesionales', 'genai-aws', 'desarrollo-aplicaciones-genai'],
];
