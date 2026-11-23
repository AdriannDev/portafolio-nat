export type ProjectCategory = 'Social Media' | 'Branding & Campaña' | 'Campaña 360°';

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

export interface Project {
  id: string;
  index: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  category: ProjectCategory;
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
  campaignBoard?: {
    sectionLabel: string;
    sectionTitle: string;
    description: string;
    items: CampaignBoardItem[];
  };
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
  tools: { name: string; focus: string }[];
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
 * DATOS CENTRALIZADOS DEL PORTAFOLIO
 * Edita este único archivo para actualizar textos, proyectos, experiencia,
 * herramientas, redes sociales e imágenes cuando tengas tus datos definitivos.
 * ============================================================================
 */
export const PROFILE: ProfileData = {
  firstName: 'Natalia',
  fullName: 'Natalia Vargas',
  monogram: 'N.V',
  roleTitle: 'Estudiante de Publicidad & Medios Digitales',
  location: 'Lima, Perú',
  availability: 'Disponible para prácticas & proyectos freelance',
  email: 'hola@nataliavargas.pe',
  portraitImage: '/images/about-portrait.jpg',
  heroStatement: 'Ideas publicitarias y contenido digital que conectan marcas con cultura',
  heroItalicWord: 'cultura',
  aboutHeadline: 'Convierto insights cotidianos en campañas memorables y comunidades activas.',
  aboutParagraphs: [
    'Soy Natalia Vargas, estudiante de últimos ciclos de Publicidad y Medios Digitales. Me apasiona el punto exacto donde la estrategia de marca se encuentra con la dirección de arte y el lenguaje nativo de las redes sociales.',
    'Disfruto tanto construir el concepto creativo de una campaña desde cero como bajarlo a formatos reales que funcionen hoy: desde un Reel de 20 segundos para una marca de moda hasta una activación urbana disruptiva para una bebida o una pollería de barrio.',
    'Busco sumar en equipos creativos, agencias o marcas que quieran comunicar con claridad, frescura y un propósito visual bien cuidado.'
  ],
  philosophyQuote:
    'Una buena campaña no interrumpe lo que la gente está viendo; se convierte en algo que la gente quiere compartir.',
  education: [
    {
      period: '2022 — Actualidad',
      title: 'Bachiller en Publicidad y Medios Digitales',
      organization: 'Universidad de Ciencias y Artes de la Comunicación',
      location: 'Lima, Perú',
      description:
        'Enfoque en dirección creativa, planificación de campañas integradas, comportamiento del consumidor y producción audiovisual para entornos digitales.',
      highlights: [
        'Tercio superior · 8.º ciclo',
        'Primer puesto en taller de Campañas Integradas 2025',
        'Co-coordinadora del club estudiantil de Dirección de Arte'
      ]
    },
    {
      period: '2025',
      title: 'Especialización en Social Media Strategy & Paid Media',
      organization: 'Escuela Creativa Digital (Certificación)',
      location: 'Modalidad Híbrida',
      description:
        'Diseño de embudos de contenido orgánico en TikTok e Instagram, guionización de video corto, analítica de retención y fundamentos de Meta & TikTok Ads.',
      highlights: [
        'Proyecto final premiado por mejor estrategia orgánica',
        'Dominio de dashboards de métricas y calendarios editoriales'
      ]
    },
    {
      period: '2024',
      title: 'Taller Intensivo de Branding & Storytelling Visual',
      organization: 'Laboratorio de Marca LATAM',
      location: 'Online',
      description:
        'Construcción de territorios de marca, tono de voz, conceptos paraguas y aplicaciones de identidad para marcas de consumo masivo y retail.',
      highlights: ['Desarrollo de 2 casos de rebranding conceptual']
    }
  ],
  experience: [
    {
      period: '2025 — 2026',
      title: 'Content Creator & Social Media Manager (Freelance)',
      organization: 'KOVA Studio — Marca de Ropa Urbana',
      location: 'Lima, Perú',
      description:
        'Gestión integral de Instagram y TikTok: planificación mensual, dirección creativa de grabaciones, edición de Reels/TikToks, copywriting y community management.',
      highlights: [
        'Crecimiento de +240% en alcance orgánico en 4 meses',
        'Producción de 48 piezas audiovisuales cortas con 4.9% de engagement promedio',
        'Lanzamiento digital de 2 colecciones cápsula con sold-out en 72 horas'
      ]
    },
    {
      period: '2024 — 2025',
      title: 'Practicante Creativa & Asistente de Medios Digitales',
      organization: 'Estudio Pulso Creativo',
      location: 'Lima, Perú',
      description:
        'Apoyo en conceptualización de campañas, bajadas gráficas para redes sociales, monitoreo de tendencias en TikTok y armado de presentaciones de pitch para clientes.',
      highlights: [
        'Participación en 6 propuestas creativas para marcas de consumo y gastronomía',
        'Creación de reportes mensuales de contenido y benchmarks competitivos'
      ]
    },
    {
      period: '2023 — 2024',
      title: 'Redactora Creativa & Community Voluntaria',
      organization: 'Festival Universitario de Diseño y Cultura',
      location: 'Lima, Perú',
      description:
        'Creación de guiones, cobertura en tiempo real en Stories/TikTok y redacción de piezas de campaña para convocatoria estudiantil.',
      highlights: ['+1,400 asistentes registrados a través de difusión orgánica en redes']
    }
  ],
  toolGroups: [
    {
      category: 'Diseño & Dirección de Arte',
      tools: [
        { name: 'Adobe Photoshop', focus: 'Retoque, fotomontaje y piezas clave' },
        { name: 'Adobe Illustrator', focus: 'Identidad, sistemas gráficos y vectores' },
        { name: 'Figma', focus: 'Moodboards, layouts digitales y presentaciones' },
        { name: 'Adobe InDesign', focus: 'Manuales de marca y decks editoriales' }
      ]
    },
    {
      category: 'Video, Reels & Contenido',
      tools: [
        { name: 'CapCut Pro', focus: 'Edición ágil nativa para TikTok y Reels' },
        { name: 'Adobe Premiere Pro', focus: 'Montaje audiovisual y cápsulas de campaña' },
        { name: 'After Effects', focus: 'Motion graphics básico y tipografía cinética' },
        { name: 'Lightroom', focus: 'Colorización editorial para feeds coherentes' }
      ]
    },
    {
      category: 'Redes Sociales & Medios',
      tools: [
        { name: 'Meta Business Suite', focus: 'Programación, analítica y pauta básica' },
        { name: 'TikTok Creative Center', focus: 'Detección de trends, audios y hooks' },
        { name: 'Metricool', focus: 'Reportes de rendimiento y parrillas' },
        { name: 'Google Analytics', focus: 'Lectura de tráfico y comportamiento web' }
      ]
    },
    {
      category: 'Estrategia & Flujo Creativo',
      tools: [
        { name: 'Notion', focus: 'Calendarios editoriales y briefs creativos' },
        { name: 'Copywriting Publicitario', focus: 'Titulares, guiones y tono de marca' },
        { name: 'Brand Storytelling', focus: 'Insights, territorio y concepto paraguas' },
        { name: 'Miro', focus: 'Mapeo de ideas, customer journey y research' }
      ]
    }
  ],
  socials: [
    { name: 'Instagram', handle: '@natvargas.creative', url: 'https://instagram.com' },
    { name: 'TikTok', handle: '@nat.publicidad', url: 'https://tiktok.com' },
    { name: 'LinkedIn', handle: '/in/natalia-vargas-publicidad', url: 'https://linkedin.com' },
    { name: 'Behance', handle: 'behance.net/nataliavargas', url: 'https://behance.net' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'kova-social',
    index: '01',
    slug: 'kova-studio-social-media',
    title: 'KOVA Studio',
    subtitle: 'Gestión creativa de TikTok e Instagram para moda urbana',
    client: 'KOVA Studio (Marca de Ropa)',
    category: 'Social Media',
    year: '2026',
    duration: '4 meses · Gestión continua',
    role: 'Social Media Manager, Dirección de Contenido & Edición',
    deliverables: [
      'Estrategia de Contenidos IG & TikTok',
      'Calendario Editorial Mensual',
      'Producción & Edición de Reels/TikToks',
      'Copywriting & Gestión de Comunidad'
    ],
    accentColor: '#5B6E58',
    accentSoft: 'rgba(91, 110, 88, 0.10)',
    heroImage: '/images/kova-hero.jpg',
    secondaryImage: '/images/kova-social.jpg',
    shortSummary:
      'Transformamos un feed de catálogo estático en una comunidad viva en TikTok e Instagram mediante storytelling de estilo real, behind-the-scenes y formatos nativos de alta retención.',
    brief:
      'KOVA Studio, una marca independiente de streetwear minimalista, publicaba únicamente fotos de producto sobre fondo blanco. Aunque las prendas tenían excelente calidad, su cuenta de Instagram crecía lentamente y su perfil de TikTok no lograba conectar con audiencia joven ni generar intención de compra.',
    insight:
      'La Generación Z no sigue marcas de ropa para ver catálogos: las sigue para imaginar cómo se vería esa prenda en su propia rutina, escuchar la historia detrás de cada drop y sentir que pertenece a un círculo creativo.',
    bigIdeaTitle: '“Viste el Proceso, No Solo la Prenda”',
    bigIdeaCopy:
      'Rediseñamos la presencia digital en dos velocidades complementarias: TikTok como el diario crudo y cercano del taller (pruebas de tela, styling en 15 segundos, detrás de cámara) e Instagram como revista editorial cuidada donde los drops cobran valor aspiracional.',
    pillars: [
      {
        number: '01',
        title: 'Hooks de 3 segundos en TikTok',
        description:
          'Cada video abre con una acción visual inmediata (sonido de tela, cambio de outfit en transición o pregunta directa) para elevar la retención sobre el 45%.'
      },
      {
        number: '02',
        title: 'Estética editorial coherente en Instagram',
        description:
          'Curaduría de paleta neutra, carruseles con tips de styling ("3 formas de usar el hoodie oversized") y portadas limpias que funcionan como lookbook interactivo.'
      },
      {
        number: '03',
        title: 'Comunidad co-creadora de drops',
        description:
          'Encuestas en Stories y respuestas en video a comentarios en TikTok para que la audiencia elija el color de la siguiente cápsula antes del lanzamiento.'
      }
    ],
    metrics: [
      {
        value: '+240%',
        label: 'Alcance orgánico',
        detail: 'Crecimiento sostenido en 120 días sin aumentar presupuesto de pauta.'
      },
      {
        value: '1.4M',
        label: 'Reproducciones TikTok',
        detail: 'Acumuladas en 24 videos nativos con 3 piezas virales sobre 200K.'
      },
      {
        value: '4.9%',
        label: 'Tasa de Engagement',
        detail: 'Guardados y compartidos multiplicados x3.4 en carruseles de styling.'
      },
      {
        value: '72h',
        label: 'Sold-out Cápsula 02',
        detail: 'Tráfico directo desde enlace en bio y respuestas automáticas en DM.'
      }
    ],
    socialShowcase: [
      {
        platform: 'TikTok',
        format: 'Video Corto · 0:22',
        title: 'POV: Diseñamos el hoodie perfecto en 48h',
        hook: '“¿Por qué casi todos los hoodies pierden la forma al tercer lavado?”',
        caption: 'Mostramos el gramaje real de 480g en taller + prueba en calle con transición rítmica.',
        views: '312K vistas',
        engagement: '28.4K likes · 4.1K guardados',
        tag: 'Behind the Brand'
      },
      {
        platform: 'Instagram',
        format: 'Carrusel · 7 slides',
        title: '1 Pantalón Cargo, 3 Looks de Ciudad',
        hook: 'Portada limpia con tipografía editorial y guía visual día / estudio / noche.',
        caption: 'Formato pensado para maximizar guardados antes del lanzamiento de fin de semana.',
        views: '84K alcance',
        engagement: '6.2K guardados · 1.9K compartidos',
        tag: 'Educativo / Styling'
      },
      {
        platform: 'TikTok',
        format: 'Reply Video · 0:18',
        title: 'Respondiendo a @camila: ¿Cómo queda la talla M?',
        hook: 'Comparativa real en 3 tipos de cuerpo distintos dentro del estudio con luz natural.',
        caption: 'Redujo en 60% las dudas repetitivas por DM y disparó clics a tienda.',
        views: '196K vistas',
        engagement: '14.7K likes · 890 comentarios',
        tag: 'Comunidad & Conversión'
      }
    ],
    galleryCaption:
      'Dirección de contenido para jornada de producción mensual: piezas verticales para TikTok/Reels combinadas con fotografía editorial para el grid de Instagram.'
  },
  {
    id: 'sprite-termo',
    index: '02',
    slug: 'campana-branding-citrus-refrescante',
    title: 'Sin Filtro, 100% Lima',
    subtitle: 'Campaña publicitaria y branding innovador para bebida cítrica (Concepto tipo Sprite)',
    client: 'Proyecto de Branding · Inspirado en Sprite',
    category: 'Branding & Campaña',
    year: '2025',
    duration: 'Proyecto de Campaña · 6 semanas',
    role: 'Concepto Creativo, Branding de Campaña & Dirección de Arte',
    deliverables: [
      'Concepto Paraguas de Campaña',
      'Activación Urbana Termosensible (OOH)',
      'Sistema Visual & Copywriting',
      'Bajada Digital & Reels Interactivos'
    ],
    accentColor: '#0E9F58',
    accentSoft: 'rgba(14, 159, 88, 0.10)',
    heroImage: '/images/sprite-hero.jpg',
    secondaryImage: '/images/sprite-ooh.jpg',
    shortSummary:
      'Una campaña de branding disruptiva que convierte el calor literal y el "calor" del drama cotidiano en una experiencia interactiva en vía pública y redes sociales.',
    brief:
      'Las bebidas gaseosas lima-limón compiten en un mercado saturado de mensajes genéricos sobre "refrescar la sed". El reto consistía en idear una campaña publicitaria innovadora con fuerte foco en branding capaz de rejuvenecer la marca frente a jóvenes universitarios y generar conversación orgánica.',
    insight:
      'Entre el tráfico de verano, las presiones académicas y las redes llenas de exageración, los jóvenes sienten que todo está "demasiado caliente" y lleno de drama innecesario. La verdadera frescura hoy no es solo física: es mental y directa.',
    bigIdeaTitle: '“Cuando Sube el Calor, Baja el Filtro”',
    bigIdeaCopy:
      'Creamos una identidad de campaña impulsada por sensores climáticos en tiempo real: vallas digitales y paraderos urbanos que reaccionan a la temperatura de la ciudad. Mientras más grados marca el termómetro, más directos, honestos y refrescantes se vuelven los mensajes —activando cupones digitales de bebida helada cuando la ciudad supera los 28 °C.',
    pillars: [
      {
        number: '01',
        title: 'Branding cinético reactivo al clima',
        description:
          'Tipografía líquida y condensación visual que cambia de intensidad según la temperatura en vivo, convirtiendo el medio exterior en un termómetro cultural.'
      },
      {
        number: '02',
        title: 'Vallas con micro-brisa & código QR al instante',
        description:
          'Paraderos intervenidos en zonas universitarias con rocío frío real y QR dinámico que desbloquea un 2x1 en bodegas cercanas solo en horas pico de calor.'
      },
      {
        number: '03',
        title: 'Extensión social "Termómetro de Drama"',
        description:
          'Filtro interactivo y dinámica en TikTok donde los usuarios comparten situaciones cotidianas "insoportables" que la marca enfría con respuestas ingeniosas en video.'
      }
    ],
    metrics: [
      {
        value: '28°C+',
        label: 'Activador Dinámico',
        detail: 'Disparador automático de mensajes OOH y cupones geolocalizados.'
      },
      {
        value: '18',
        label: 'Puntos Urbanos Clave',
        detail: 'Circuito de paraderos cercanos a universidades y playas urbanas.'
      },
      {
        value: '3x',
        label: 'Recordación Estimada',
        detail: 'Evaluación en focus group estudiantil frente a avisos estáticos tradicionales.'
      },
      {
        value: '100%',
        label: 'Coherencia 360°',
        detail: 'Un mismo código visual desde la lata hasta las pantallas digitales.'
      }
    ],
    campaignBoard: {
      sectionLabel: 'Concepto & Sistema de Mensajes',
      sectionTitle: 'Vallas que cambian con el termómetro de la ciudad',
      description:
        'El branding de campaña adapta su copy y nivel de frescura visual en tiempo real según el clima urbano:',
      items: [
        {
          tag: '24 °C · Modo Suave',
          headline: '“Respira hondo. El día recién empieza y todavía hay hielo.”',
          subcopy: 'Visual limpio con burbujas sutiles y fondo claro luminoso en pantallas matutinas.',
          format: 'DOOH Mañana · Paraderos'
        },
        {
          tag: '28 °C · Alerta de Calor',
          headline: '“Menos drama en el tráfico, más lima helada en tu mano.”',
          subcopy: 'Aparece el QR dinámico de canje rápido en tiendas a menos de 200 metros.',
          format: 'DOOH Mediodía + Cupón Geo'
        },
        {
          tag: '31 °C · Pico Máximo',
          headline: '“A esta temperatura nadie debería pensar. Solo destapa.”',
          subcopy: 'Activa brisa refrescante en el paradero e invade Stories con pauta geolocalizada.',
          format: 'Activación Física + Social Paid'
        }
      ]
    },
    galleryCaption:
      'Prototipo de intervención urbana en paradero inteligente: gráfica cítrica de alto contraste y experiencia refrescante en vía pública.'
  },
  {
    id: 'brasa-barrio',
    index: '03',
    slug: 'brasa-y-barrio-rebranding-polleria',
    title: 'Brasa & Barrio',
    subtitle: 'Rebranding contemporáneo y campaña cultural para pollería',
    client: 'Brasa & Barrio (Pollería Artesanal)',
    category: 'Branding & Campaña',
    year: '2025',
    duration: 'Proyecto de Branding · 8 semanas',
    role: 'Estrategia de Marca, Rebranding & Campaña de Lanzamiento',
    deliverables: [
      'Posicionamiento & Tono de Voz',
      'Sistema de Packaging Coleccionable',
      'Campaña OOH "El Fuego Que Nos Junta"',
      'Contenido Gastronómico para Redes'
    ],
    accentColor: '#C84B28',
    accentSoft: 'rgba(200, 75, 40, 0.10)',
    heroImage: '/images/polleria-hero.jpg',
    secondaryImage: '/images/polleria-brand.jpg',
    shortSummary:
      'Reinventamos la experiencia visual y publicitaria de una pollería tradicional, elevándola de "comida rápida de barrio" a una marca cultural moderna que celebra la sobremesa.',
    brief:
      'La mayoría de pollerías locales compiten únicamente por precio y combos con diseños saturados, colores estridentes y poca diferenciación emocional. El desafío fue construir una campaña y propuesta de branding innovadora que mantuviera la calidez popular del pollo a la brasa, pero con un lenguaje contemporáneo capaz de conquistar tanto a familias como a jóvenes urbanos.',
    insight:
      'Nadie pide un pollo a la brasa solo por hambre: se pide porque llegó una visita, porque se cerró un ciclo o porque es domingo sin ganas de cocinar. El verdadero producto no es el combo; es la excusa perfecta para juntar a la mesa.',
    bigIdeaTitle: '“El Fuego Que Nos Junta”',
    bigIdeaCopy:
      'Reemplazamos la publicidad tradicional de "ofertas en rojo y amarillo" por un branding cálido inspirado en la cerámica, el carbón y las frases reales que se dicen en cada sobremesa. El packaging de delivery se convirtió en el principal medio publicitario: cajas coleccionables ilustradas con "reglas no escritas de la pollería" que la gente fotografía y comparte antes de abrir.',
    pillars: [
      {
        number: '01',
        title: 'Packaging que habla en la mesa',
        description:
          'Cajas kraft con tipografía editorial terracota y frases coleccionables ("El que llega tarde se queda sin la parte doradita", "Más ají, menos protocolo") diseñadas para generar contenido UGC espontáneo.'
      },
      {
        number: '02',
        title: 'Dirección de arte gastronómica honesta',
        description:
          'Fotografía con textura real de brasas, cerámica artesanal y luz natural cálida que eleva la percepción de calidad sin perder cercanía de barrio.'
      },
      {
        number: '03',
        title: 'Campaña hiperlocal "Viernes de Mesa Larga"',
        description:
          'Afiches callejeros con guiños a las calles del distrito y campaña de micro-videos ASMR del crujido de papas y salsa de ají para pauta geolocalizada de viernes 6:00 p.m.'
      }
    ],
    metrics: [
      {
        value: '6',
        label: 'Ediciones de Caja',
        detail: 'Sistema coleccionable con frases de sobremesa pensadas para Instagram Stories.'
      },
      {
        value: '+65%',
        label: 'Intención de Recompra',
        detail: 'Validado en prueba de concepto con 40 consumidores jóvenes y familias.'
      },
      {
        value: 'ASMR',
        label: 'Serie Audiovisual',
        detail: 'Cápsulas sensoriales de 12 segundos diseñadas para horarios pico de delivery.'
      },
      {
        value: '100%',
        label: 'Eco-Packaging',
        detail: 'Materiales reciclables con impresión a 2 tintas para cuidar costos reales.'
      }
    ],
    campaignBoard: {
      sectionLabel: 'Tono de Voz & Aplicaciones de Marca',
      sectionTitle: 'El packaging como soporte publicitario orgánico',
      description:
        'Cada punto de contacto refuerza la calidez de la marca y motiva a compartir el momento en redes:',
      items: [
        {
          tag: 'Caja Familiar · Edición 01',
          headline: '“Regla N.º 1: Las papas del fondo siempre son de quien puso la casa.”',
          subcopy: 'Impresión interior de tapa que sorprende al abrir el pedido en la mesa.',
          format: 'Packaging Takeaway'
        },
        {
          tag: 'Afiche de Barrio · OOH',
          headline: '“Hoy no se cocina. Hoy se conversa con las manos llenas de ají.”',
          subcopy: 'Cartelería en esquinas clave del distrito con estética de prensa moderna.',
          format: 'Gráfica Callejera'
        },
        {
          tag: 'Pauta Viernes 18:00h',
          headline: '“Tu semana ya terminó. El horno acaba de abrirse.”',
          subcopy: 'Anuncio vertical hiperlocal en Instagram y TikTok a 3 km a la redonda.',
          format: 'Social Ads Geolocalizado'
        }
      ]
    },
    galleryCaption:
      'Sistema de identidad aplicado a cajas de delivery, bolsas de papel kraft, papel antigrasa ilustrado y recipientes para salsas.'
  },
  {
    id: 'pulso-cafe',
    index: '04',
    slug: 'pulso-cafe-campana-360',
    title: 'Pulso Café',
    subtitle: 'Campaña digital 360° y activación cultural para café de especialidad',
    client: 'Pulso Tostadores (Proyecto Editorial)',
    category: 'Campaña 360°',
    year: '2026',
    duration: 'Proyecto Integrado · 5 semanas',
    role: 'Estrategia de Medios Digitales, Dirección Creativa & Copy',
    deliverables: [
      'Plan de Medios Digitales 360°',
      'Serie de Afiches & OOH Urbano',
      'Cápsulas Audiovisuales & Spotify Audio',
      'Landing de Lanzamiento & Filtros'
    ],
    accentColor: '#1E4DB7',
    accentSoft: 'rgba(30, 77, 183, 0.09)',
    heroImage: '/images/pulso-hero.jpg',
    secondaryImage: '/images/pulso-digital.jpg',
    shortSummary:
      'Una campaña transmedia que reposiciona el café frío de especialidad como el ritual creativo de la tarde, uniendo cartelería urbana, playlists colaborativas y video corto.',
    brief:
      'Pulso, un tostador independiente de café peruano, quería impulsar su nueva línea de Cold Brew en botella fuera del horario clásico de desayuno. El objetivo era construir una campaña de medios digitales 360° que conectara con estudiantes, diseñadores y creativos en su bajón energético de las 3:00 p.m.',
    insight:
      'El primer café de la mañana es por rutina; el café de las 3:00 p.m. es por decisión creativa. Es el momento donde arrancan los proyectos personales, las entregas universitarias y las mejores ideas.',
    bigIdeaTitle: '“Tu Segundo Aire a las 3:00 p.m.”',
    bigIdeaCopy:
      'Apropiamos una hora exacta del reloj como territorio de marca. Diseñamos una campaña sincronizada por franja horaria: pauta digital, cápsulas de audio en Spotify y pósters minimalistas en zonas universitarias que invitan a escanear una playlist de enfoque de 45 minutos acompañada de un Cold Brew.',
    pillars: [
      {
        number: '01',
        title: 'Apropiación de momento (Dayparting)',
        description:
          'Toda la pauta en Instagram, TikTok y Spotify se concentra exclusivamente entre las 2:30 p.m. y las 5:00 p.m., optimizando presupuesto y relevancia contextual.'
      },
      {
        number: '02',
        title: 'Afiches urbanos + Playlists NFC/QR',
        description:
          'Serie gráfica en azul cobalto y marfil pegada cerca de facultades y coworkings que desbloquea sesiones musicales curadas por artistas locales.'
      },
      {
        number: '03',
        title: 'Micro-documentales "En Mi Escritorio"',
        description:
          'Reels de 30 segundos visitando el escritorio real de jóvenes ilustradores, arquitectos y creativos locales mientras toman su café de la tarde.'
      }
    ],
    metrics: [
      {
        value: '14:30–17h',
        label: 'Ventana de Pauta',
        detail: 'Estrategia de dayparting para maximizar CTR en el momento exacto de consumo.'
      },
      {
        value: '4',
        label: 'Canales Integrados',
        detail: 'TikTok, Instagram Reels, Spotify Audio Ads y cartelería urbana con QR.'
      },
      {
        value: '12',
        label: 'Piezas de Campaña',
        detail: 'Sistema modular adaptable a feed, stories, afiches y empaque.'
      },
      {
        value: '45 min',
        label: 'Experiencia de Marca',
        detail: 'Tiempo promedio de escucha en las playlists "Segundo Aire" en Spotify.'
      }
    ],
    campaignBoard: {
      sectionLabel: 'Ecosistema de Medios 360°',
      sectionTitle: 'Cada canal cumple una función exacta a las 3:00 p.m.',
      description:
        'Arquitectura de campaña diseñada para acompañar al público desde la calle hasta sus audífonos:',
      items: [
        {
          tag: 'Spotify Audio · 0:15',
          headline: '“Son las 3 de la tarde. Si estás leyendo el mismo párrafo por cuarta vez, te toca Pulso.”',
          subcopy: 'Cuña minimalista con sonido real de hielo cayendo en vaso de vidrio.',
          format: 'Audio Digital'
        },
        {
          tag: 'Cartelería Urbana',
          headline: '“Despierta el ritmo. Escanea tu playlist de enfoque + Cold Brew.”',
          subcopy: 'Serie de 3 pósters cobalto y marfil en paraderos y cafés aliados.',
          format: 'OOH + QR Interactivo'
        },
        {
          tag: 'TikTok & Reels',
          headline: '“¿Qué hay en el escritorio de los creativos a las 3:00 p.m.?”',
          subcopy: 'Serie orgánica con creadores locales mostrando procesos reales sin guion rígido.',
          format: 'Branded Content'
        }
      ]
    },
    galleryCaption:
      'Aplicación de serie de pósters urbanos y punto de venta con identidad cobalto y marfil pensada para destacar en el paisaje de la ciudad.'
  }
];
