import type { ToolIconKey } from '../components/ToolLogo';

export type ProjectCategory =
  | 'Social Media'
  | 'Activación BTL'
  | 'Branding & Campaña'
  | 'Campaña 360°'
  | 'Web & Digital';

export interface ProjectMetric {
  value: string;
  label: string;
  detail: string;
}

export interface StrategyPillar {
  number: string;
  title: string;
  description: string;
}

export interface SocialPostMockup {
  platform: 'TikTok' | 'Instagram';
  format: string;
  title: string;
  hook: string;
  caption: string;
  views: string;
  engagement: string;
  tag: string;
}

export interface CampaignBoardItem {
  tag: string;
  headline: string;
  subcopy: string;
  format: string;
  accentBg?: string;
}

export interface VideoReelItem {
  title: string;
  tag: string;
  format: string;
  description: string;
  src: string;
  poster: string;
}

export interface GalleryImageItem {
  src: string;
  title: string;
  caption: string;
}

export interface ProjectExternalLink {
  label: string;
  url: string;
  platform?: 'instagram' | 'tiktok' | 'web';
}

export interface Project {
  id: string;
  index: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  category: ProjectCategory;
  /** Marks academic university projects so they display an eyebrow badge */
  isAcademic: boolean;
  academicLabel?: string;
  year: string;
  duration: string;
  role: string;
  deliverables: string[];
  accentColor: string;
  accentSoft: string;
  heroImage: string;
  secondaryImage: string;
  shortSummary: string;
  brief: string;
  insight: string;
  bigIdeaTitle: string;
  bigIdeaCopy: string;
  pillars: StrategyPillar[];
  metrics: ProjectMetric[];
  /** Specialized interactive showcase data per project type */
  socialShowcase?: SocialPostMockup[];
  videoReels?: VideoReelItem[];
  campaignBoard?: {
    sectionLabel: string;
    sectionTitle: string;
    description: string;
    items: CampaignBoardItem[];
  };
  galleryImages?: GalleryImageItem[];
  externalLinks?: ProjectExternalLink[];
  galleryCaption: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ToolCategory {
  category: string;
  tools: { name: string; focus: string; iconKey?: ToolIconKey }[];
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
}

export interface ProfileData {
  firstName: string;
  fullName: string;
  monogram: string;
  roleTitle: string;
  location: string;
  availability: string;
  email: string;
  portraitImage: string;
  heroStatement: string;
  heroItalicWord: string;
  aboutHeadline: string;
  aboutParagraphs: string[];
  philosophyQuote: string;
  education: TimelineItem[];
  experience: TimelineItem[];
  toolGroups: ToolCategory[];
  socials: SocialLink[];
}

/**
 * ============================================================================
 * DATOS CENTRALIZADOS DEL PORTAFOLIO — NATALY MARCHAN
 * Edita este archivo para actualizar correo personal, redes personales o
 * foto de retrato cuando desees personalizar aún más tu perfil.
 * ============================================================================
 */
export const PROFILE: ProfileData = {
  firstName: 'Nataly',
  fullName: 'Nataly Marchan',
  monogram: 'N.M',
  roleTitle: 'Estudiante de Publicidad & Medios Digitales · ISIL',
  location: 'Lima, Perú',
  availability: 'Disponible para prácticas & proyectos freelance',
  email: 'nataly.marchan@correo.pe',
  portraitImage: '/images/about-portrait.jpg',
  heroStatement: 'Ideas publicitarias, activaciones BTL y contenido digital que conectan marcas con personas',
  heroItalicWord: 'personas',
  aboutHeadline: 'Convierto insights cotidianos en activaciones memorables, campañas 360° y comunidades digitales.',
  aboutParagraphs: [
    'Soy Nataly Rosa Marchan Collazos, estudiante de Publicidad y Medios Digitales en ISIL, con certificación modular en Dirección y Gestión Creativa. Me apasiona conectar la investigación de insights con conceptos claros que funcionen tanto en experiencia presencial como en pantallas.',
    'He gestionado contenido real para marcas de moda femenina como Kushi Illari Boutique —desde la parrilla mensual y grabación de Reels/TikToks hasta storytelling de empaquetado— y he conceptualizado y montado activaciones BTL, propuestas de co-branding y campañas integradas para marcas de consumo masivo.',
    'Busco sumar en equipos creativos, agencias o marcas que quieran comunicar con cercanía, estrategia bien pensada y una ejecución cuidada en cada detalle.'
  ],
  philosophyQuote:
    'Una buena idea publicitaria no solo se entiende en una presentación: se siente en la experiencia real de quien la vive o la comparte.',
  education: [
    {
      period: 'En curso · 2024 — 2026',
      title: 'Publicidad y Medios Digitales',
      organization: 'ISIL — Instituto San Ignacio de Loyola',
      location: 'Lima, Perú',
      description:
        'Formación enfocada en fundamentos y casuística publicitaria, dirección creativa, estrategias BTL, co-branding, planificación de campañas integradas y producción de contenidos para entornos digitales.',
      highlights: [
        'Desarrollo de proyectos aplicados para marcas como Sprite, Don Belisario × Inca Kola, Purina Dog Chow y Yanbal',
        'Ejecución real de activación BTL en campus (Sprite Resort) en rol de montaje y producción',
        'Experiencia en conceptualización grupal bajo metodología de agencia estudiantil (Graphs / Causa Creativa)'
      ]
    },
    {
      period: 'Ago — Dic 2025',
      title: 'Certificado Modular: Dirección y Gestión Creativa',
      organization: 'ISIL — Instituto San Ignacio de Loyola (R.M. N.º 305-2018-MINEDU)',
      location: 'Lima, Perú',
      description:
        'Módulo formativo de 42 créditos (848 horas) centrado en investigación, planificación estratégica y exploración de insights para desarrollar mensajes publicitarios creativos con criterio ético y calidad artística.',
      highlights: [
        'Código de Registro IES N.º 60889766-202520-CPUB-1',
        'Competencia en diseño de estrategias para lanzamiento y posicionamiento de productos y servicios'
      ]
    }
  ],
  experience: [
    {
      period: '2025 — 2026',
      title: 'Content Creator & Social Media Manager',
      organization: 'Kushi Illari Boutique — Moda Femenina (@boutique.kushillari)',
      location: 'Lince, Lima, Perú',
      description:
        'Gestión integral de Instagram y TikTok para la boutique: planificación mensual en calendario editorial, grabación en tienda física, edición de piezas verticales, cobertura de lanzamientos y comunicación de beneficios de compra.',
      highlights: [
        'Producción de piezas promocionales destacando variedad de prendas, probadores, pagos digitales (Izipay, Yape, Plin, tarjetas) y sistema de apartados',
        'Creación de contenido behind-the-scenes ("Detrás de cada pedido") enfocado en experiencia de unboxing y detalle de marca',
        'Planificación de parrilla multiformato: Reels, TikToks, Stories diarias, catálogo digital y transmisiones Live'
      ]
    },
    {
      period: '2024 — 2025',
      title: 'Creativa Publicitaria & Producción BTL (Proyectos Aplicados)',
      organization: 'Agencias Estudiantiles Graphs & Causa Creativa · ISIL',
      location: 'Lima, Perú',
      description:
        'Conceptualización de campañas 360°, co-branding, activaciones BTL, desarrollo web y montaje presencial para briefs reales y simulados de consumo masivo y tecnología.',
      highlights: [
        'Encargada de montaje y ejecución presencial en la activación real "Sprite Resort" en campus ISIL',
        'Co-creación de campañas integradas para Don Belisario × Inca Kola, Purina Dog Chow, Yanbal Total Block y Punto Laptop'
      ]
    }
  ],
  toolGroups: [
    {
      category: 'Diseño & Dirección Visual',
      tools: [
        { name: 'Adobe Photoshop', focus: 'Fotomontajes, piezas clave y retoque', iconKey: 'photoshop' },
        { name: 'Adobe Illustrator', focus: 'Key visuals, gráficos de campaña y vectores', iconKey: 'illustrator' },
        { name: 'Canva Pro', focus: 'Presentaciones creativas, decks y parrillas ágiles', iconKey: 'canva' },
        { name: 'Wix Studio / Editor', focus: 'Maquetación de sitios web y presencia digital', iconKey: 'wix' }
      ]
    },
    {
      category: 'Video, Reels & Contenido',
      tools: [
        { name: 'CapCut', focus: 'Edición ágil nativa para TikTok e Instagram Reels', iconKey: 'capcut' },
        { name: 'Producción Móvil', focus: 'Grabación en tienda, unboxing y cobertura BTL', iconKey: 'mobile-production' },
        { name: 'Guion & Storyboard', focus: 'Estructuras narrativas para spots y video corto', iconKey: 'storyboard' },
        { name: 'Lightroom', focus: 'Ajuste de color y estética visual para feeds', iconKey: 'lightroom' }
      ]
    },
    {
      category: 'Redes Sociales & Gestión',
      tools: [
        { name: 'Instagram & TikTok', focus: 'Gestión de comunidad, Reels, Stories y Lives', iconKey: 'instagram-tiktok' },
        { name: 'Calendario Editorial', focus: 'Planificación mensual por horarios y objetivos', iconKey: 'editorial-calendar' },
        { name: 'Meta Business Suite', focus: 'Programación y seguimiento de publicaciones', iconKey: 'meta' },
        { name: 'TikTok Creative Center', focus: 'Búsqueda de trends, hooks y formatos nativos', iconKey: 'tiktok' }
      ]
    },
    {
      category: 'Estrategia Publicitaria',
      tools: [
        { name: 'Exploración de Insights', focus: 'Investigación de público y propuesta de valor', iconKey: 'insights' },
        { name: 'Activaciones BTL', focus: 'Diseño de mecánicas, montaje y rebote digital', iconKey: 'btl' },
        { name: 'Co-Branding & 360°', focus: 'Alianzas de marca, trade marketing y promos', iconKey: 'cobranding' },
        { name: 'Copywriting', focus: 'Titulares, conceptos paraguas y guiones creativos', iconKey: 'copywriting' }
      ]
    }
  ],
  socials: [
    {
      name: 'Instagram (Proyecto Boutique)',
      handle: '@boutique.kushillari',
      url: 'https://www.instagram.com/boutique.kushillari/'
    },
    {
      name: 'TikTok (Proyecto Boutique)',
      handle: '@boutique.kushillari',
      url: 'https://www.tiktok.com/@boutique.kushillari?_r=1'
    },
    {
      name: 'Sitio Web Wix (Proyecto)',
      handle: 'puntolaptop · Wix',
      url: 'https://huamanmonterox.wixsite.com/puntolaptop/contactanos'
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'kushi-illari',
    index: '01',
    slug: 'kushi-illari-boutique-social-media',
    title: 'Kushi Illari Boutique',
    subtitle: 'Gestión creativa de Instagram y TikTok para moda femenina en Lima',
    client: 'Kushi Illari Boutique (Av. Ignacio Merino 2069, Lince)',
    category: 'Social Media',
    isAcademic: false,
    year: '2025 — 2026',
    duration: 'Experiencia Laboral · Gestión Continua',
    role: 'Content Creator & Social Media Manager',
    deliverables: [
      'Calendario Editorial Mensual (IG & TikTok)',
      'Piezas Promocionales de Experiencia en Tienda',
      'Video Behind-the-Scenes "Detrás de cada pedido"',
      'Gestión de Parrilla, Stories y Catálogo'
    ],
    accentColor: '#A85673',
    accentSoft: 'rgba(168, 86, 115, 0.10)',
    heroImage: '/images/projects/kushi-hero.jpg',
    secondaryImage: '/images/projects/kushi-secondary.jpg',
    shortSummary:
      'Construimos una presencia cercana y confiable en Instagram y TikTok combinando recorridos por tienda, beneficios reales de compra y el cuidado artesanal detrás de cada pedido.',
    brief:
      'Kushi Illari Boutique, tienda de ropa femenina ubicada en Lince (Lima) con envíos nacionales y recojo en tienda, necesitaba fortalecer su presencia digital para atraer nuevas clientas al local físico y generar confianza en compras online. El reto era mostrar mucho más que prendas: comunicar la experiencia real en boutique, sus facilidades de pago y el cuidado en cada entrega.',
    insight:
      'Al comprar moda femenina en redes sociales, la decisión no depende solo del diseño de la prenda: las clientas buscan confianza tangible —ver cómo luce la tienda, saber que hay probadores, facilidades de pago y comprobar que su pedido llegará impecable.',
    bigIdeaTitle: '“Cercanía en Tienda, Detalle en Cada Pedido”',
    bigIdeaCopy:
      'Estructuramos una estrategia de contenido orgánico en dos frentes complementarios: piezas promocionales ágiles que resuelven objeciones reales de compra (probadores, variedad de prendas, pagos con Izipay/Yape/Plin/tarjetas y sistema de apartados) y cápsulas emocionales de "Detrás de cada pedido" que muestran el empaquetado cuidado, tarjeta de marca y obsequio para elevar el valor percibido.',
    pillars: [
      {
        number: '01',
        title: 'Contenido de confianza y experiencia física',
        description:
          'Videos cortos que abren las puertas de la boutique en Lince: muestra de prendas en tendencia, apertura de probadores, opciones de pago digitales y sistema de apartados para eliminar barreras de visita.'
      },
      {
        number: '02',
        title: 'Storytelling "Detrás de cada pedido"',
        description:
          'Piezas centradas en el ritual de armado del pedido: selección del outfit, doblado prolijo en caja kraft, tarjeta oficial de Kushi Illari y detalle sorpresa (scrunchie) que convierte cada envío en un momento compartible.'
      },
      {
        number: '03',
        title: 'Calendario editorial multiformato',
        description:
          'Planificación mensual organizada por horarios clave en TikTok e Instagram: dinámicas de styling ("¿Qué look te gusta más?", "3 errores que arruinan tu outfit"), novedades de catálogo, Stories diarias y Lives.'
      }
    ],
    videoReels: [
      {
        title: '¿Por qué comprar en nuestra boutique?',
        tag: 'Pieza Promocional · Tienda',
        format: 'Reel / TikTok · 9:16',
        description:
          'Recorrido dinámico que comunica los diferenciales clave de Kushi Illari: variedad de prendas femeninas, probadores disponibles, múltiples medios de pago (Izipay, tarjetas, transferencias, Yape y Plin), redes activas y sistema de apartados.',
        src: '/videos/kushi-boutique-promo.mp4',
        poster: '/images/projects/kushi-video-promo-poster.jpg'
      },
      {
        title: 'Detrás de cada pedido',
        tag: 'Behind the Scenes · Unboxing',
        format: 'Reel / TikTok · 9:16',
        description:
          'Pieza audiovisual enfocada en el proceso real de preparación y empaquetado de pedidos: presentación del conjunto, doblado cuidadoso en caja kraft, tarjetería de marca y detalle de cortesía para fidelizar a cada clienta.',
        src: '/videos/kushi-detras-pedido.mp4',
        poster: '/images/projects/kushi-video-pedido-poster.jpg'
      }
    ],
    socialShowcase: [
      {
        platform: 'TikTok',
        format: 'Video Promocional · 9:16',
        title: '¿Por qué comprar en nuestra boutique?',
        hook: '“Por qué comprar en nuestra boutique — conoce todo lo que tenemos para ti”',
        caption:
          'Recorrido ágil por tienda física en Lince destacando probadores, POS Izipay, transferencias, Yape/Plin, presencia omnicanal y sistema de apartados.',
        views: 'Conversión & Tráfico',
        engagement: 'Objeciones resueltas en 25s',
        tag: 'Experiencia en Tienda'
      },
      {
        platform: 'Instagram',
        format: 'Reel Behind the Scenes · 9:16',
        title: 'Así es como preparamos cada pedido',
        hook: '“Así es como preparamos cada pedido en Kushi Illari”',
        caption:
          'Paso a paso del armado en caja kraft con tarjeta de marca y scrunchie de regalo, reforzando confianza para envíos a Lima y provincias (Shalom).',
        views: 'Confianza & Branding',
        engagement: 'Alto valor percibido',
        tag: 'Detrás de Cada Pedido'
      },
      {
        platform: 'Instagram',
        format: 'Parrilla Mensual · Feed & Stories',
        title: 'Styling interactivo & tendencias de temporada',
        hook: '“¿Qué look te gusta más?” · “3 errores que arruinan tu outfit”',
        caption:
          'Calendario estructurado con horarios estratégicos para TikTok, Reels, catálogo de prendas nuevas, encuestas en Stories y sesiones Live.',
        views: 'Comunidad Activa',
        engagement: 'IG + TikTok sincronizados',
        tag: 'Calendario Editorial'
      }
    ],
    metrics: [
      {
        value: '2',
        label: 'Canales Gestionados',
        detail: 'Estrategia coordinada entre Instagram (@boutique.kushillari) y TikTok.'
      },
      {
        value: '100%',
        label: 'Producción In-House',
        detail: 'Guionización, grabación en boutique, edición vertical y publicación.'
      },
      {
        value: '4+',
        label: 'Formatos por Semana',
        detail: 'Combinación de Reels, TikToks, Stories diarias, catálogo y Lives.'
      },
      {
        value: 'O2O',
        label: 'Online a Tienda Física',
        detail: 'Contenido diseñado para impulsar visitas a Lince y pedidos por envío nacional.'
      }
    ],
    externalLinks: [
      {
        label: 'Instagram @boutique.kushillari',
        url: 'https://www.instagram.com/boutique.kushillari/',
        platform: 'instagram'
      },
      {
        label: 'TikTok @boutique.kushillari',
        url: 'https://www.tiktok.com/@boutique.kushillari?_r=1',
        platform: 'tiktok'
      }
    ],
    galleryCaption:
      'Gestión integral de redes sociales para Kushi Illari Boutique: parrilla editorial, difusión de medios de pago y sistema de apartados en tienda.'
  },
  {
    id: 'sprite-resort',
    index: '02',
    slug: 'sprite-resort-activacion-btl',
    title: 'Sprite Resort',
    subtitle: 'Activación BTL real en campus universitario para aliviar el estrés de exámenes',
    client: 'Sprite · Proyecto Aplicado (Causa Creativa · ISIL)',
    category: 'Activación BTL',
    isAcademic: true,
    academicLabel: 'Proyecto Universitario · ISIL',
    year: '2025',
    duration: 'Conceptualización & Ejecución Presencial',
    role: 'Encargada de Montaje & Conceptualización Creativa',
    deliverables: [
      'Concepto Creativo & Identidad "Sprite Resort"',
      'Guion de Video de Convocatoria (4 Escenas)',
      'Diseño de Espacio Sensorial & Dinámica BTL',
      'Montaje Real de Activación en Campus & Rebote Digital'
    ],
    accentColor: '#0E9F58',
    accentSoft: 'rgba(14, 159, 88, 0.10)',
    heroImage: '/images/projects/sprite-hero.jpg',
    secondaryImage: '/images/projects/sprite-secondary.jpg',
    shortSummary:
      'Transformamos el campus de ISIL en un mini resort vacacional durante la semana de finales, combinando un espacio sensorial, una piscina de pelotas de emociones y bebidas heladas.',
    brief:
      'Durante la temporada de exámenes finales, los estudiantes de ISIL atraviesan altos niveles de estrés, cansancio y frustración. El reto fue conceptualizar y ejecutar en la vida real una activación BTL para Sprite capaz de conectar genuinamente con el público universitario a través de una pausa tangible de frescura y relajación.',
    insight:
      'En plena semana de finales, el estudiante no quiere otro aviso publicitario: sueña con teletransportarse por cinco minutos a sus vacaciones y sacudirse la presión académica antes de volver a clase.',
    bigIdeaTitle: '“No te estreses. Refréscate.”',
    bigIdeaCopy:
      'Creamos Sprite Resort, una activación experiencial que llevó la atmósfera de un resort veraniego al corazón del instituto. Desde un video de convocatoria con transformación visual (de tonos grises del cansancio a colores vibrantes de playa tras el primer sorbo) hasta un módulo físico con piscina de pelotas, zona de descanso y barra refrescante.',
    pillars: [
      {
        number: '01',
        title: 'Video de convocatoria en 4 escenas',
        description:
          'Pieza audiovisual de expectativa que muestra a una estudiante agotada en semana de finales cuya realidad se transforma instantáneamente a un look veraniego y vibrante al probar una Sprite helada.'
      },
      {
        number: '02',
        title: 'Espacio sensorial & reto de 5 segundos',
        description:
          'Zona de relax con asientos cómodos, ambientación tropical y una piscina de pelotas etiquetadas con emociones de exámenes: con goggles puestos, cada estudiante tenía 5 segundos para encontrar la emoción asignada y crear una frase.'
      },
      {
        number: '03',
        title: 'Montaje real, barista & rebote digital',
        description:
          'Ejecución presencial en campus con entrega de Sprite helada al completar el reto y photo-opportunity temático ("Sprite Resort") pensado para amplificación orgánica en Stories de los estudiantes.'
      }
    ],
    campaignBoard: {
      sectionLabel: 'Recorrido de la Experiencia BTL',
      sectionTitle: 'De la convocatoria audiovisual a la activación en vivo',
      description:
        'Cada fase del proyecto conectó el territorio emocional del estrés estudiantil con la frescura icónica de Sprite:',
      items: [
        {
          tag: 'Fase 01 · Convocatoria',
          headline: '“Tras una época llena de estrés, solo queremos una pausa de frescura.”',
          subcopy:
            'Spot en 4 escenas: llegada agotada con filtro gris, máquina expendedora, explosión de burbujas verdes y transformación veraniega.',
          format: 'Video Digital Campus'
        },
        {
          tag: 'Fase 02 · Dinámica BTL',
          headline: '“5 segundos, goggles puestos y una piscina llena de emociones.”',
          subcopy:
            'El participante saca un papel con una emoción de parciales, busca la pelotita correspondiente en la piscina y dice una frase para canjear su Sprite con el barista.',
          format: 'Experiencia Interactiva'
        },
        {
          tag: 'Fase 03 · Rebote Digital',
          headline: '“Un adelanto de las vacaciones dentro del campus.”',
          subcopy:
            'Backdrop verde de Sprite Resort, flotadores, lentes veraniegos y zona lounge para fotos compartibles en redes estudiantiles.',
          format: 'Photo Op + UGC'
        }
      ]
    },
    galleryImages: [
      {
        src: '/images/projects/sprite-stand-3d.jpg',
        title: 'Propuesta de montaje y ambientación del stand',
        caption: 'Diseño espacial del módulo Sprite Resort con barra, bancas altas, vegetación tropical y piscina de pelotas.'
      },
      {
        src: '/images/projects/sprite-mecanica.jpg',
        title: 'Espacio sensorial y mecánica participativa',
        caption: 'Integración de zona de descanso relajante junto al reto interactivo para maximizar permanencia.'
      },
      {
        src: '/images/projects/sprite-rebote.jpg',
        title: 'Photo-opportunity de rebote digital',
        caption: 'Escenografía diseñada para incentivar fotos y contenido generado por los propios estudiantes.'
      },
      {
        src: '/images/projects/sprite-secondary.jpg',
        title: 'Ejecución real en campus ISIL',
        caption: 'Evidencia fotográfica del montaje y participación estudiantil durante la activación presencial.'
      }
    ],
    metrics: [
      {
        value: '100%',
        label: 'Activación Ejecutada',
        detail: 'Llevada del concepto creativo al montaje físico real dentro del campus ISIL.'
      },
      {
        value: '5 seg',
        label: 'Dinámica Gamificada',
        detail: 'Reto ágil en piscina de pelotas con goggles para mantener flujo constante de participantes.'
      },
      {
        value: '4',
        label: 'Escenas de Convocatoria',
        detail: 'Guion audiovisual completo con narrativa de transformación visual.'
      },
      {
        value: '5',
        label: 'Roles de Producción',
        detail: 'Equipo multidisciplinario con Nataly a cargo del montaje integral de la experiencia.'
      }
    ],
    galleryCaption:
      'Evidencia real de la activación Sprite Resort ejecutada en campus ISIL: piscina de pelotas, ambientación veraniega y participación estudiantil.'
  },
  {
    id: 'don-belisario-inca-kola',
    index: '03',
    slug: 'don-belisario-inca-kola-co-branding',
    title: 'Don Belisario × Inca Kola',
    subtitle: 'Propuesta de co-branding por Fiestas Patrias bajo el concepto “De Pecho Sabor Criollo”',
    client: 'Don Belisario × Inca Kola (Agencia Graphs · ISIL)',
    category: 'Branding & Campaña',
    isAcademic: true,
    academicLabel: 'Proyecto Universitario · ISIL',
    year: '2025',
    duration: 'Campaña de Fiestas Patrias (15 – 31 de julio)',
    role: 'Estrategia de Co-Branding, BTL & Desarrollo de Piezas',
    deliverables: [
      'Concepto Creativo & Key Visual de Co-Branding',
      'Plan de Fidelización (Combo, Raspadita & Evento 28 de Julio)',
      'Activación BTL "Peruanos Salseros" (Stand 5×5m)',
      'Material POP (Table Tents, Roller Screen) & Rebote Digital'
    ],
    accentColor: '#C82820',
    accentSoft: 'rgba(200, 40, 32, 0.10)',
    heroImage: '/images/projects/belisario-hero.jpg',
    secondaryImage: '/images/projects/belisario-secondary.jpg',
    shortSummary:
      'Alianza estratégica entre Don Belisario e Inca Kola por Fiestas Patrias que celebra el orgullo gastronómico peruano con fidelización, incentivos internos, BTL interactivo y nueva presentación en botella.',
    brief:
      'Con motivo de Fiestas Patrias, Don Belisario necesitaba impulsar el tráfico en sus locales y comunicar un cambio clave en su oferta de bebidas: el paso de servir Inca Kola en jarra a ofrecerla en botella. El desafío consistió en diseñar una campaña de co-branding capaz de fortalecer el vínculo emocional de ambas marcas, fidelizar comensales e incentivar el consumo del combo patrio.',
    insight:
      'Para las familias peruanas, el pollo a la brasa acompañado de una Inca Kola no es solo una comida de feriado: es un ritual de identidad que se celebra con orgullo, sabor criollo y el toque personal de sus salsas.',
    bigIdeaTitle: '“De Pecho Sabor Criollo”',
    bigIdeaCopy:
      'Creamos una plataforma festiva de co-branding vigente del 15 al 31 de julio que une tradición, humor y participación. Incluye el combo exclusivo "Pecho Criollo" con tarjetas raspaditas, el evento cultural "Perú con Color" el 28 de julio, un programa de incentivos para mozos y la activación BTL "Peruanos Salseros", donde los clientes crean su propia salsa junto a un chef.',
    pillars: [
      {
        number: '01',
        title: 'Fidelización 360°: clientes y equipo interno',
        description:
          'Combo "Pecho Criollo" con tarjeta raspadita de premios instantáneos y cupón del 10% para la próxima visita, sumado a un incentivo de S/ 200 y medalla de reconocimiento para motivar a los mozos en la venta de Inca Kola en botella.'
      },
      {
        number: '02',
        title: 'Activación BTL "Peruanos Salseros" & "Perú con Color"',
        description:
          'Stand modular de 5×5 metros en 3 locales estratégicos (Miraflores Av. Benavides, Plaza Norte y Real Plaza Salaverry) donde los asistentes preparan su propia salsa evaluada por un chef, acompañado de juegos típicos (rayuela y sapo) y danzas el 28 de julio.'
      },
      {
        number: '03',
        title: 'Visibilidad POP, vehículos brandeados & rebote digital',
        description:
          'Despliegue de table tents en todas las mesas y roller screens en fachada comunicando "Lo que tanto esperaron: Inca Kola en botella", difusión con autos decorados y concurso en redes con #PerusalseroDonBelisario.'
      }
    ],
    campaignBoard: {
      sectionLabel: 'Ecosistema de Co-Branding & Trade',
      sectionTitle: 'Cada punto de contacto refuerza la alianza patria',
      description:
        'Desde la calle hasta la mesa del restaurante y las redes sociales, el concepto se adapta a cada soporte:',
      items: [
        {
          tag: 'BTL · 3 Locales Clave',
          headline: '“Peruanos Salseros: crea tu propia salsa y acompaña tu brasa.”',
          subcopy:
            'Stand 5×5m con chef, insumos y calificación en vivo de las 3 mejores salsas en Miraflores, Plaza Norte y Salaverry.',
          format: 'Activación Presencial'
        },
        {
          tag: 'Material POP · En Mesa',
          headline: '“Lo que tanto esperaron: Inca Kola en botella.”',
          subcopy:
            'Table tents en todas las mesas y roller screens de alto impacto en entrada para comunicar la nueva presentación y combos patrios.',
          format: 'Table Tents + Roller Screen'
        },
        {
          tag: 'Rebote Digital · UGC',
          headline: '“Sube tu momento criollo con #PerusalseroDonBelisario.”',
          subcopy:
            'Fotos en el stand y en mesa participando por cenas gratis en Don Belisario y packs de Inca Kola anunciados en redes oficiales.',
          format: 'Social Media + Concurso'
        }
      ]
    },
    galleryImages: [
      {
        src: '/images/projects/belisario-poster.jpg',
        title: 'Afiche principal de campaña',
        caption: 'Pieza gráfica integrando el key visual "De Pecho Sabor Criollo" y el anuncio de Inca Kola en botella.'
      },
      {
        src: '/images/projects/belisario-tabletents.jpg',
        title: 'Aplicación POP: Table Tents',
        caption: 'Comunicación directa en cada mesa antes de la apertura del local y durante el evento de Fiestas Patrias.'
      },
      {
        src: '/images/projects/belisario-roller.jpg',
        title: 'Señalización exterior: Roller Screen',
        caption: 'Soporte visual en fachada de Don Belisario diseñado para captar tráfico peatonal y atraer nuevos comensales.'
      },
      {
        src: '/images/projects/belisario-redes.jpg',
        title: 'Difusión en redes y activación urbana',
        caption: 'Mockup de publicación en Instagram promoviendo la activación del 28 de julio junto a vehículos brandeados.'
      }
    ],
    metrics: [
      {
        value: '3',
        label: 'Sedes Estratégicas',
        detail: 'Miraflores (Av. Benavides), C.C. Plaza Norte y Real Plaza Salaverry.'
      },
      {
        value: '5×5 m',
        label: 'Stand BTL Interactivo',
        detail: 'Estación "Peruanos Salseros" con chef en vivo, condimentos y premiación.'
      },
      {
        value: '17 días',
        label: 'Vigencia de Campaña',
        detail: 'Despliegue continuo del 15 al 31 de julio con evento central el 28 de julio.'
      },
      {
        value: '360°',
        label: 'Cobertura Integral',
        detail: 'Fidelización externa, motivación a mozos, trade POP y amplificación digital.'
      }
    ],
    galleryCaption:
      'Diseño tridimensional del stand BTL 5×5m "Peruanos Salseros" para la activación de co-branding Don Belisario × Inca Kola.'
  },
  {
    id: 'dog-chow-extra-life',
    index: '04',
    slug: 'purina-dog-chow-extra-life-campana-360',
    title: 'Purina Dog Chow',
    subtitle: 'Campaña publicitaria 360° “Extra Life: Para momentos que duran más”',
    client: 'Purina Dog Chow · Fundamentos y Casuística Publicitaria (ISIL)',
    category: 'Campaña 360°',
    isAcademic: true,
    academicLabel: 'Proyecto Universitario · ISIL',
    year: '2024 — 2025',
    duration: 'Campaña Integral 360° · Parcial Académico',
    role: 'Estrategia Creativa, Storyboard, BTL & Promociones',
    deliverables: [
      'Storyboard Audiovisual "Historias de Vida" (4 Escenas)',
      'Acciones Retail & Programa "Dog Chow Premium Club"',
      'Evento BTL "Gourmet Experience" (YOY Lima Box Park)',
      'Promoción & Carrera "Run Funny Dog Chow" con Wong'
    ],
    accentColor: '#13823D',
    accentSoft: 'rgba(19, 130, 61, 0.10)',
    heroImage: '/images/projects/dogchow-hero.jpg',
    secondaryImage: '/images/projects/dogchow-secondary.jpg',
    shortSummary:
      'Propuesta publicitaria 360° que traduce el beneficio racional de Extra Life (+1.8 años de vida saludable) en una narrativa emotiva, acciones de fidelización en punto de venta y dos grandes eventos pet-friendly en Lima.',
    brief:
      'Purina Dog Chow buscaba posicionar su propuesta de valor "Extra Life" —brindar hasta 1.8 años más de vida con calidad a las mascotas— sin quedarse en un discurso puramente técnico. El reto fue diseñar una campaña publicitaria 360° que fortaleciera el vínculo emocional entre dueños y perros, impulsando al mismo tiempo la rotación en canal tradicional/granel y supermercados.',
    insight:
      'Quien tiene un perro no cuenta los años en números: los cuenta en paseos por la playa, tardes de parque y travesuras compartidas. Darle más tiempo de vida significa regalarle más recuerdos juntos.',
    bigIdeaTitle: '“Para momentos que duran más”',
    bigIdeaCopy:
      'Convertimos el atributo nutricional de Extra Life en historias contadas desde la voz de los propios perros. La campaña se despliega en un ecosistema completo: comercial narrativo en 4 escenas, exhibición y club de puntos para venta a granel, un restaurante gourmet temático para mascotas en YOY Lima Box Park y una carrera familiar junto a Wong Camacho.',
    pillars: [
      {
        number: '01',
        title: 'Storyboard audiovisual "Historias de Vida"',
        description:
          'Cuatro escenas emotivas y con humor narradas en primera persona por distintas razas (Labrador, Bulldog, Caniche y Pastor Alemán) recordando sus momentos favoritos junto a sus dueños.'
      },
      {
        number: '02',
        title: 'Trade marketing & "Dog Chow Premium Club"',
        description:
          'Exhibiciones de alto impacto ("Torre del Producto" con iluminación LED en pasillos principales) combinadas con un programa de recompensas por kilos comprados (1 kg = 10 pts, niveles Plata y Oro canjeables por descuentos y accesorios).'
      },
      {
        number: '03',
        title: 'Experiencias BTL & alianza con Wong',
        description:
          'Dos grandes activaciones presenciales con amplificación digital: "Gourmet Experience" en YOY Lima Box Park con chef de nutrición canina (#DogGourmetExperience) y la carrera "Run Funny Dog Chow" en Wong Camacho (#RunFunnyDogChow).'
      }
    ],
    campaignBoard: {
      sectionLabel: 'Ecosistema de Campaña 360°',
      sectionTitle: 'Del spot emocional al punto de venta y el parque',
      description:
        'Cuatro frentes conectados mediante códigos QR y hashtags para acompañar al dueño en cada etapa:',
      items: [
        {
          tag: 'Audiovisual · Spot',
          headline: '“Porque cada momento cuenta. Para momentos que duran más.”',
          subcopy:
            'Cuatro personalidades caninas narran sus recuerdos favoritos hasta revelar el beneficio de Extra Life.',
          format: 'Storyboard 4 Escenas'
        },
        {
          tag: 'BTL · YOY Lima Box Park',
          headline: '“Un restaurante gourmet diseñado especialmente para perros.”',
          subcopy:
            'Mesas a escala, degustaciones preparadas por un chef en nutrición canina, kits de bienvenida y registro vía QR con #DogGourmetExperience.',
          format: 'Gourmet Experience'
        },
        {
          tag: 'Promo Retail · Wong Camacho',
          headline: '“En julio premiamos sus habilidades en Run Funny Dog Chow.”',
          subcopy:
            'Inscripción con QR en redes y empaques, carrera familiar en estacionamiento de Wong La Molina, polos de participantes y 3 premios principales.',
          format: 'Promoción + Carrera BTL'
        }
      ]
    },
    galleryImages: [
      {
        src: '/images/projects/dogchow-storyboard.jpg',
        title: 'Storyboard completo: "Historias de Vida"',
        caption: 'Secuencia de 4 escenas protagonizadas por un Labrador, Bulldog Inglés, Caniche y Pastor Alemán.'
      },
      {
        src: '/images/projects/dogchow-gourmet-qr.jpg',
        title: 'Convocatoria digital Gourmet Experience',
        caption: 'Pieza con código QR de registro para el evento familiar en YOY Lima Box Park.'
      },
      {
        src: '/images/projects/dogchow-wong-promo.jpg',
        title: 'Afiche promocional Dog Chow × Wong',
        caption: 'Gráfica de campaña #RunFunnyDogChow invitando a participar por premios en Wong Camacho.'
      },
      {
        src: '/images/projects/dogchow-premios.jpg',
        title: 'Sistema de premios y merchandising',
        caption: 'Premiación para los 3 primeros lugares: correas, mochila, tomatodo aromatizador, platos y juguetes Dog Chow.'
      }
    ],
    metrics: [
      {
        value: '4',
        label: 'Frentes Integrados',
        detail: 'Audiovisual (Storyboard), Trade/Granel, Evento BTL Gourmet y Promo con Wong.'
      },
      {
        value: '2',
        label: 'Sedes Presenciales',
        detail: 'YOY Lima Box Park (Gourmet Experience) y Wong Camacho, La Molina (Run Funny).'
      },
      {
        value: '2 Niveles',
        label: 'Club de Fidelización',
        detail: 'Dog Chow Premium Club (Plata 501–1000 pts y Oro 1001+ pts) para impulsar recompra.'
      },
      {
        value: 'QR + UGC',
        label: 'Puente Phygital',
        detail: 'Registro mediante códigos QR en empaques y amplificación con 2 hashtags de campaña.'
      }
    ],
    galleryCaption:
      'Propuesta de ambientación temática para el evento "Dog Chow Gourmet Experience" en YOY Lima Box Park.'
  },
  {
    id: 'yanbal-total-block',
    index: '05',
    slug: 'yanbal-total-block-verano-shield',
    title: 'Yanbal Total Block',
    subtitle: 'Propuesta de activación BTL en playas “Verano Shield” para protección solar SPF 100',
    client: 'Yanbal — Línea Total Block (Agencia Graphs · ISIL)',
    category: 'Activación BTL',
    isAcademic: true,
    academicLabel: 'Proyecto Universitario · ISIL',
    year: '2025',
    duration: 'Campaña de Temporada de Verano · BTL Playas',
    role: 'Conceptualización BTL, Estrategia & Desarrollo Web (Agencia Graphs)',
    deliverables: [
      'Propuesta Integral de Activación en Playa Agua Dulce',
      'Concepto "Verano Shield" & Propósito Ambiental',
      'Dinámica Gamificada: Mini Golf Putting Greens',
      'Visuales OOH en Playa & Sistema de Premios'
    ],
    accentColor: '#DF6C32',
    accentSoft: 'rgba(223, 108, 50, 0.11)',
    heroImage: '/images/projects/yanbal-hero.jpg',
    secondaryImage: '/images/projects/yanbal-secondary.jpg',
    shortSummary:
      'Activación de verano en Playa Agua Dulce que une concientización frente a los rayos UV, entretenimiento familiar mediante mini golf en la arena y un gesto real de cuidado ambiental.',
    brief:
      'En el Perú, la cercanía a la línea ecuatorial eleva drásticamente el riesgo de radiación UV durante el verano; sin embargo, mientras el público femenino lidera el cuidado dérmico (80%), gran parte del público masculino (20%) aún subestima el uso diario de bloqueador. El objetivo fue diseñar una activación BTL para Yanbal Total Block SPF 100 capaz de educar, conectar emocionalmente e incentivar la compra en temporada alta.',
    insight:
      'En la playa nadie quiere una charla médica sobre radiación solar, pero las familias y jóvenes sí se acercan cuando la marca ofrece un juego divertido y demuestra que también cuida el espacio que están disfrutando.',
    bigIdeaTitle: '“Cuida de tu playa, como cuidas de tu piel”',
    bigIdeaCopy:
      'Bajo el paraguas "Verano Shield" y el mensaje de concientización #luchacontraelcancer, diseñamos una intervención en Playa Agua Dulce —con más de 20,000 visitantes diarios en verano— que combina impacto ambiental positivo (instalación de tachos de basura brandeados en puntos críticos) con un circuito de mini golf "Putting Greens" con obstáculos y premios de la línea Total Block.',
    pillars: [
      {
        number: '01',
        title: 'Concientización UV & propósito ambiental',
        description:
          'Paneles de alto impacto en playa bajo el mensaje "Cuida de tu playa, como cuidas de tu piel" acompañados de la instalación de tachos ecológicos Yanbal en zonas de alta afluencia en Agua Dulce.'
      },
      {
        number: '02',
        title: 'Mini Golf "Verano Shield" en la arena',
        description:
          'Circuito compacto de putting greens con pequeños obstáculos diseñado para atraer a mujeres, hombres y familias (NSE A y B, 20–65 años) sin requerir un campo extenso.'
      },
      {
        number: '03',
        title: 'Dinámica contrarreloj & sampling de producto',
        description:
          'Los participantes compiten por embocar en el menor tiempo y número de golpes para ganar kits Total Block SPF 100, sillones inflables brandeados Yanbal y toallas playeras.'
      }
    ],
    campaignBoard: {
      sectionLabel: 'Arquitectura de Activación en Playa',
      sectionTitle: 'Propósito, entretenimiento y prueba de producto bajo el sol',
      description:
        'Tres momentos diseñados para transformar una tarde en Playa Agua Dulce en recordación positiva de marca:',
      items: [
        {
          tag: 'OOH & Propósito',
          headline: '“Cuida de tu playa, como cuidas de tu piel.”',
          subcopy:
            'Paneles playeros junto a tachos de basura instalados por Yanbal en zonas sin cobertura de limpieza, reforzando el compromiso #luchacontraelcancer.',
          format: 'Intervención Ambiental'
        },
        {
          tag: 'Entretenimiento BTL',
          headline: '“Golf Verano Shield: emboca en menos golpes y gana.”',
          subcopy:
            'Putting greens modulares con obstáculos aptos para todas las edades, logrando integrar al público masculino y familiar.',
          format: 'Dinámica Interactiva'
        },
        {
          tag: 'Premios & Trial',
          headline: '“Protección SPF 100 resistente al agua y al sudor en tus manos.”',
          subcopy:
            'Entrega de productos Total Block Jumbo SPF 100, puffs inflables playeros Yanbal y toallas de verano que extienden la visibilidad por toda la costa.',
          format: 'Sampling & Merch'
        }
      ]
    },
    galleryImages: [
      {
        src: '/images/projects/yanbal-linea.jpg',
        title: 'Producto foco: Total Block Jumbo SPF 100',
        caption: 'Presentación de beneficios clave: alta protección UV, hidratación y resistencia al agua y al sudor.'
      },
      {
        src: '/images/projects/yanbal-golf.jpg',
        title: 'Concepto de atracción: Golf "Verano Shield"',
        caption: 'Diseño del mini campo de golf con putting greens pensado para atraer público familiar en playa.'
      },
      {
        src: '/images/projects/yanbal-premios.jpg',
        title: 'Sistema de premios de temporada',
        caption: 'Línea Total Block SPF 100, puff inflable brandeado Yanbal y toallas playeras de alto impacto visual.'
      },
      {
        src: '/images/projects/yanbal-secondary.jpg',
        title: 'Mockup de intervención en Playa Agua Dulce',
        caption: 'Visualización del panel "Cuida de tu playa, como cuidas de tu piel", banderola y tacho ecológico.'
      }
    ],
    metrics: [
      {
        value: '20K+',
        label: 'Visitantes Diarios',
        detail: 'Afluencia estimada en Playa Agua Dulce durante temporada alta de verano.'
      },
      {
        value: 'SPF 100',
        label: 'Producto Héroe',
        detail: 'Foco en Total Block Jumbo resistente al agua y sudor para climas ecuatoriales.'
      },
      {
        value: '80 / 20',
        label: 'Brecha de Insight',
        detail: 'Oportunidad para fidelizar público femenino (80%) e incorporar al masculino (20%).'
      },
      {
        value: '3',
        label: 'Categorías de Premio',
        detail: 'Kits Total Block, sillones inflables Yanbal y toallas playeras para visibilidad orgánica.'
      }
    ],
    galleryCaption:
      'Mockup de intervención urbana en Playa Agua Dulce: panel de concientización solar, banderola Yanbal y módulo de tachos ecológicos.'
  },
  {
    id: 'punto-laptop',
    index: '06',
    slug: 'punto-laptop-desarrollo-web',
    title: 'Punto Laptop',
    subtitle: 'Diseño de presencia web y arquitectura de contenidos para servicios tecnológicos',
    client: 'Punto Laptop · Proyecto de Medios Digitales (ISIL)',
    category: 'Web & Digital',
    isAcademic: true,
    academicLabel: 'Proyecto Universitario · ISIL',
    year: '2025',
    duration: 'Proyecto de Medios Digitales · Desarrollo en Wix',
    role: 'Arquitectura Web & Contenidos (Secciones Nosotros & Pie de Página)',
    deliverables: [
      'Sitio Web Publicado en Wix',
      'Arquitectura de Secciones & Navegación',
      'Desarrollo de Sección "Nosotros" y "Pie de Página"',
      'Integración de Sliders, Servicios, Testimonios y FAQ'
    ],
    accentColor: '#7A2CB5',
    accentSoft: 'rgba(122, 44, 181, 0.10)',
    heroImage: '/images/projects/puntolaptop-hero.jpg',
    secondaryImage: '/images/projects/puntolaptop-secondary.jpg',
    shortSummary:
      'Creación de una plataforma web orientada a conversión y confianza para una marca especializada en soluciones y soporte de laptops y computadoras, desarrollada en Wix.',
    brief:
      'Los negocios de soporte técnico y servicios para laptops suelen depender únicamente de mensajes informales en redes, lo que dificulta transmitir respaldo y claridad sobre sus servicios. El reto fue estructurar y publicar una página web funcional en Wix que ordenara la propuesta de valor de Punto Laptop y facilitara el contacto rápido con potenciales clientes.',
    insight:
      'Cuando una laptop falla en medio del trabajo o la universidad, el usuario no busca tecnicismos complicados: necesita entender en segundos qué servicios existen, comprobar que la marca es confiable y encontrar cómo contactarla al instante.',
    bigIdeaTitle: '“Tu punto de tecnología cuando más lo necesitas”',
    bigIdeaCopy:
      'Construimos una arquitectura web clara y modular orientada a resolver dudas rápido y generar confianza desde el primer scroll: sliders de alto impacto, catálogo de servicios, prueba social con testimonios, sección institucional "Nosotros", preguntas frecuentes y un pie de página estructurado para navegación y contacto directo.',
    pillars: [
      {
        number: '01',
        title: 'Identidad clara y propuesta directa',
        description:
          'Construcción de la sección "Nosotros" con narrativa cercana para humanizar la marca tecnológica y reforzar el respaldo profesional detrás del servicio.'
      },
      {
        number: '02',
        title: 'Arquitectura orientada a resolver dudas',
        description:
          'Organización en 5 sliders destacados, bloque de servicios especializados, testimonios de clientes y módulo de preguntas frecuentes (FAQ) para acelerar la decisión de contacto.'
      },
      {
        number: '03',
        title: 'Navegación limpia y cierre funcional',
        description:
          'Diseño de pie de página estructurado con accesos rápidos y página de contacto optimizada para convertir visitas en consultas reales desde escritorio y móvil.'
      }
    ],
    campaignBoard: {
      sectionLabel: 'Estructura del Sitio Web en Wix',
      sectionTitle: 'Módulos clave pensados para informar y convertir',
      description:
        'Distribución colaborativa del sitio web diseñada para acompañar el recorrido completo del usuario:',
      items: [
        {
          tag: 'Identidad · Mi Aporte',
          headline: '“Nosotros & Pie de Página: confianza y claridad en cada cierre.”',
          subcopy:
            'Redacción y maquetación de la historia de marca y footer estructurado con enlaces de navegación y datos clave.',
          format: 'Secciones Core Wix'
        },
        {
          tag: 'Oferta & Prueba Social',
          headline: '“5 sliders visuales, catálogo de servicios y testimonios reales.”',
          subcopy:
            'Presentación escaneable de soluciones para laptops y computadoras respaldada por experiencias de clientes.',
          format: 'Home & Servicios'
        },
        {
          tag: 'Soporte & Conversión',
          headline: '“Preguntas frecuentes y contacto directo sin fricción.”',
          subcopy:
            'Resolución anticipada de dudas habituales y formulario de contacto publicado en vivo en Wix.',
          format: 'FAQ + Contacto Live'
        }
      ]
    },
    galleryImages: [
      {
        src: '/images/projects/puntolaptop-web-servicios.jpg',
        title: 'Sección Servicios — Sitio Web Punto Laptop',
        caption: 'Captura de la vista de servicios publicada en Wix presentando el catálogo y la propuesta de valor.'
      },
      {
        src: '/images/projects/puntolaptop-web-contacto.jpg',
        title: 'Sección Contacto — Conversión Directa',
        caption: 'Captura de la página de contacto en vivo con dirección, canales de atención y formulario.'
      }
    ],
    metrics: [
      {
        value: '7',
        label: 'Secciones Integradas',
        detail: '5 Sliders, Servicios, Testimonios, Nosotros, Preguntas Frecuentes, Contacto y Footer.'
      },
      {
        value: 'Live',
        label: 'Publicado en Wix',
        detail: 'Sitio web operativo accesible en línea como parte de la estrategia de medios digitales.'
      },
      {
        value: '4',
        label: 'Integrantes del Equipo',
        detail: 'Trabajo colaborativo con división clara de módulos y entregables digitales.'
      },
      {
        value: 'UX',
        label: 'Enfoque en Claridad',
        detail: 'Jerarquía visual pensada para reducir fricción entre la necesidad técnica y el contacto.'
      }
    ],
    externalLinks: [
      {
        label: 'Visitar sitio web Punto Laptop (Wix)',
        url: 'https://huamanmonterox.wixsite.com/puntolaptop/contactanos',
        platform: 'web'
      }
    ],
    galleryCaption:
      'Captura real de la sección "Nosotros" en el sitio web Punto Laptop publicado en Wix.'
  }
];
