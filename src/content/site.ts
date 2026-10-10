// Fuente única de verdad del sitio: copy, proyectos, servicios, FAQ y datos del CV.
// Todo lo que se muestra en la web, el JSON-LD, /llms.txt y el CV sale de acá.

export type Lang = 'es' | 'en';

export const SITE_URL = 'https://gabrieliturre.tech';

export const contact = {
  name: 'Gabriel Iturre',
  email: 'gabriel13iturre@gmail.com',
  whatsapp: '543884472423',
  whatsappDisplay: '+54 9 388 447-2423',
  linkedin: 'https://www.linkedin.com/in/gabriel-iturre-73900626a/',
  github: 'https://github.com/GabrielIturreCs',
  agency: 'https://zonajujuy.com',
  city: 'San Salvador de Jujuy',
  region: 'Jujuy',
  country: 'AR',
  photo: '/Images/gabriel-iturre-programador-jujuy.png',
};

export function whatsappLink(text: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export type Service = { icon: string; title: string; desc: string; items: string[] };
export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  outcome: string;
  tags: string[];
  url?: string;
  playStore?: string;
  images?: string[];
  video?: string;
  status?: 'live' | 'soon';
  featured?: boolean;
};
export type Faq = { q: string; a: string };
export type Job = { role: string; company: string; period: string; url?: string; bullets: string[] };

const projectsEs: Project[] = [
  {
    slug: 'kilo',
    name: 'KILO',
    kind: 'SaaS · ERP + Punto de venta · App Android',
    summary:
      'Sistema de gestión para comercios argentinos: punto de venta, stock, caja, cobros con QR, facturación electrónica ARCA/AFIP, tienda online y ventas por WhatsApp. Web, PC y app publicada en Google Play.',
    outcome: 'Producto propio en producción, multi-tenant, lanzado en 4 meses.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Android', 'AFIP/ARCA', 'Mercado Pago', 'IA'],
    url: 'https://somoskilo.com',
    playStore: 'https://play.google.com/store/apps/details?id=com.kilo.app&hl=es_AR',
    images: [
      '/Images/kilo_dashboard_v3.jpeg',
      '/Images/kilo_pos_v3.jpeg',
      '/Images/kilo_whatsapp_v3.jpeg',
      '/Images/kilo_control_v3.jpeg',
      '/Images/kilo_ai_v3.jpeg',
    ],
    status: 'live',
    featured: true,
  },
  {
    slug: 'slot',
    name: 'SLOT · ZonaSalud',
    kind: 'Software médico · IA · Turnos',
    summary:
      'Plataforma para consultorios y clínicas: turnos online, historias clínicas resumidas con IA, colas virtuales por QR y reasignación automática de turnos cuando un paciente falta.',
    outcome: 'Menos ausentismo y menos trabajo administrativo para el equipo médico.',
    tags: ['NestJS', 'Supabase', 'Gemini', 'TypeScript', 'Linux'],
    url: 'https://slot.zonajujuy.com',
    video: '/Images/zonasalud.mp4',
    status: 'live',
    featured: true,
  },
  {
    slug: 'chefi',
    name: 'CHEFI',
    kind: 'SaaS gastronómico · Pedidos QR',
    summary:
      'Pedidos por QR en la mesa, gestión de mesas en tiempo real, login por WhatsApp (OTP), impresión de comandas desde la nube y control de inventario.',
    outcome: '40% menos errores en la toma de pedidos.',
    tags: ['React', 'Node.js', 'WhatsApp API', 'Tiempo real'],
    url: 'https://chefi.zonajujuy.com',
    images: ['/Images/chefi_ui.png'],
    status: 'live',
    featured: true,
  },
  {
    slug: 'colectivos',
    name: 'App de colectivos',
    kind: 'App móvil nativa · Transporte',
    summary:
      'Aplicación para usuarios de transporte público: líneas, recorridos y llegada de colectivos en el mapa. En desarrollo.',
    outcome: 'Próximamente en Google Play.',
    tags: ['App nativa', 'Mapas', 'Geolocalización', 'Tiempo real'],
    status: 'soon',
    featured: true,
  },
  {
    slug: 'aevum',
    name: 'Aevum',
    kind: 'IA · RAG · Conocimiento interno',
    summary:
      'Memoria institucional con IA: la empresa sube sus documentos y el equipo consulta en lenguaje natural con respuestas citadas.',
    outcome: 'Respuestas en segundos sobre la documentación de la empresa.',
    tags: ['RAG', 'LLMs', 'Vector DB', 'Next.js'],
    url: 'https://aevum.zonajujuy.com',
    status: 'live',
  },
  {
    slug: 'zonajujuy',
    name: 'ZonaJujuy',
    kind: 'Agencia de software',
    summary: 'Mi agencia: sistemas a medida, apps móviles, tiendas online y sitios web para empresas.',
    outcome: 'Equipo para proyectos grandes.',
    tags: ['Software a medida', 'Apps', 'Web'],
    url: 'https://zonajujuy.com',
    status: 'live',
  },
  {
    slug: 'petit',
    name: 'Peluquería Petit',
    kind: 'Sitio web + turnos',
    summary: 'Sitio con SEO local para una peluquería de Palpalá y reserva de turnos online.',
    outcome: 'Turnos online y presencia en Google.',
    tags: ['Web', 'SEO local', 'Reservas'],
    url: 'https://peluqueriapetit.zonajujuy.com',
    status: 'live',
  },
  {
    slug: 'victor',
    name: 'Viajes con Víctor',
    kind: 'Landing para servicio de remis',
    summary: 'Landing que convierte visitas en viajes reservados por WhatsApp.',
    outcome: 'Pedidos directos sin intermediarios.',
    tags: ['Landing', 'WhatsApp', 'SEO local'],
    url: 'https://victormartinez.zonajujuy.com',
    status: 'live',
  },
  {
    slug: 'intimates',
    name: 'Inti Mates',
    kind: 'Tienda online',
    summary: 'E-commerce de mates artesanales premium con catálogo y pedidos.',
    outcome: 'Canal de venta online propio.',
    tags: ['E-commerce', 'Catálogo'],
    url: 'https://intimatesjujuy.netlify.app',
    status: 'live',
  },
  {
    slug: 'burguesita',
    name: 'La Burguesita',
    kind: 'Web + menú para hamburguesería',
    summary: 'Sitio y menú digital con pedidos por WhatsApp.',
    outcome: 'Pedidos sin comisiones de apps de delivery.',
    tags: ['Web', 'Menú digital', 'WhatsApp'],
    url: 'https://laburguesita.netlify.app',
    status: 'live',
  },
];

const projectsEn: Project[] = [
  {
    ...projectsEs[0],
    kind: 'SaaS · ERP + Point of Sale · Android app',
    summary:
      'Business management system for Argentine retailers: point of sale, inventory, cash register, QR payments, electronic invoicing (ARCA/AFIP), online store and WhatsApp sales. Web, desktop and an app published on Google Play.',
    outcome: 'Own product in production, multi-tenant, launched in 4 months.',
  },
  {
    ...projectsEs[1],
    kind: 'Healthcare software · AI · Scheduling',
    summary:
      'Platform for clinics: online booking, AI-summarized medical records, QR virtual queues and automatic re-assignment of slots when patients no-show.',
    outcome: 'Fewer no-shows and less admin work for medical staff.',
  },
  {
    ...projectsEs[2],
    kind: 'Restaurant SaaS · QR ordering',
    summary:
      'QR table ordering, real-time table management, WhatsApp OTP login, cloud ticket printing and inventory control.',
    outcome: '40% fewer order-taking errors.',
  },
  {
    ...projectsEs[3],
    name: 'Bus tracking app',
    kind: 'Native mobile app · Transit',
    summary: 'Public-transport app: lines, routes and live bus arrivals on a map. In development.',
    outcome: 'Coming soon to Google Play.',
    tags: ['Native app', 'Maps', 'Geolocation', 'Real time'],
  },
  {
    ...projectsEs[4],
    kind: 'AI · RAG · Internal knowledge',
    summary:
      'AI-powered institutional memory: a company uploads its documents and the team asks questions in plain language with cited answers.',
    outcome: 'Answers in seconds over company documentation.',
  },
  {
    ...projectsEs[5],
    kind: 'Software agency',
    summary: 'My agency: custom systems, mobile apps, online stores and websites for businesses.',
    outcome: 'A team for large projects.',
    tags: ['Custom software', 'Apps', 'Web'],
  },
  {
    ...projectsEs[6],
    name: 'Petit Hair Salon',
    kind: 'Website + bookings',
    summary: 'Local-SEO website for a hair salon with online booking.',
    outcome: 'Online bookings and Google visibility.',
    tags: ['Web', 'Local SEO', 'Bookings'],
  },
  {
    ...projectsEs[7],
    name: 'Rides with Víctor',
    kind: 'Landing page for a ride service',
    summary: 'Landing page that turns visits into rides booked over WhatsApp.',
    outcome: 'Direct bookings, no middlemen.',
    tags: ['Landing', 'WhatsApp', 'Local SEO'],
  },
  {
    ...projectsEs[8],
    kind: 'Online store',
    summary: 'E-commerce for premium handcrafted mate gourds.',
    outcome: 'Own online sales channel.',
    tags: ['E-commerce', 'Catalog'],
  },
  {
    ...projectsEs[9],
    kind: 'Website + menu for a burger shop',
    summary: 'Website and digital menu with WhatsApp ordering.',
    outcome: 'Orders without delivery-app fees.',
    tags: ['Web', 'Digital menu', 'WhatsApp'],
  },
];

export const content = {
  es: {
    lang: 'es' as Lang,
    path: '/',
    title: 'Gabriel Iturre · Programador Full Stack freelance | Apps, sistemas y webs a medida',
    description:
      'Desarrollo apps Android e iOS, sistemas de gestión, SaaS, tiendas online, sitios WordPress y automatizaciones con IA. Programador freelance en Argentina para clientes de todo el mundo. Presupuesto en 48 h.',
    nav: { services: 'Servicios', work: 'Proyectos', process: 'Proceso', faq: 'Preguntas', cv: 'CV', cta: 'Cotizar proyecto' },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      title1: 'Convierto tu idea en',
      title2: 'software que vende',
      subtitle:
        'Soy Gabriel Iturre, desarrollador full stack y fundador de KILO. Construyo apps móviles, sistemas de gestión, plataformas SaaS y sitios web, desde el diseño hasta la publicación en Play Store, para empresas y emprendedores de Argentina y el mundo.',
      primary: 'Contame tu proyecto',
      secondary: 'Ver proyectos reales',
      waText: 'Hola Gabriel, vi tu portfolio y quiero cotizar un proyecto: ',
      proof: ['Apps publicadas en Google Play', 'Sistemas en producción', 'Respuesta en menos de 24 h'],
    },
    stats: [
      { value: '+4', label: 'años construyendo software' },
      { value: '+15', label: 'proyectos entregados' },
      { value: '4 meses', label: 'de idea a SaaS en producción (KILO)' },
      { value: '100%', label: 'código propio, sin plantillas' },
    ],
    servicesTitle: 'Todo lo que tu proyecto necesita, en un solo lugar',
    servicesSubtitle:
      'Un solo responsable de punta a punta: diseño, desarrollo, servidores, publicación y soporte. Sin pasarte de un proveedor a otro.',
    services: [
      {
        icon: 'mobile',
        title: 'Apps móviles',
        desc: 'Apps Android e iOS nativas o híbridas, publicadas en Google Play y App Store.',
        items: ['Android / iOS', 'Publicación en tiendas', 'Notificaciones push', 'Modo offline'],
      },
      {
        icon: 'system',
        title: 'Sistemas de gestión a medida',
        desc: 'ERP, punto de venta, stock, turnos, CRM y paneles internos hechos para tu forma de trabajar.',
        items: ['ERP / POS', 'Facturación AFIP/ARCA', 'Roles y permisos', 'Reportes'],
      },
      {
        icon: 'saas',
        title: 'SaaS y MVPs',
        desc: 'Lanzá tu startup: MVP funcional en semanas, multi-tenant y listo para cobrar suscripciones.',
        items: ['MVP rápido', 'Suscripciones', 'Multi-tenant', 'Escalable'],
      },
      {
        icon: 'web',
        title: 'Sitios web y WordPress',
        desc: 'Landings que convierten, sitios corporativos y WordPress rápidos y fáciles de administrar.',
        items: ['WordPress', 'Next.js', 'SEO técnico', 'Velocidad'],
      },
      {
        icon: 'shop',
        title: 'E-commerce y pagos',
        desc: 'Tiendas online con Mercado Pago, Stripe, cobros con QR y ventas por WhatsApp.',
        items: ['Mercado Pago', 'Stripe', 'QR', 'Catálogo'],
      },
      {
        icon: 'ai',
        title: 'IA y automatización',
        desc: 'Chatbots de WhatsApp, asistentes con IA, RAG sobre tus documentos y procesos sin tareas manuales.',
        items: ['Bots de WhatsApp', 'Claude / GPT / Gemini', 'RAG', 'Integraciones'],
      },
    ] as Service[],
    workTitle: 'Proyectos reales, en producción',
    workSubtitle: 'Productos propios y de clientes que hoy usan personas de verdad. Entrá y probalos.',
    moreWorkTitle: 'Más trabajos para clientes',
    visit: 'Ver en vivo',
    playStore: 'Descargar en Google Play',
    soon: 'Próximamente',
    projects: projectsEs,
    whyTitle: 'Por qué trabajar conmigo',
    why: [
      { title: 'Pensado para vender', desc: 'Antes que código, entiendo tu negocio. Cada pantalla tiene un objetivo: más ventas, menos trabajo manual.' },
      { title: 'Velocidad con IA', desc: 'Uso IA en todo el proceso de desarrollo para entregar en semanas lo que normalmente lleva meses, sin resignar calidad.' },
      { title: 'Presupuesto cerrado', desc: 'Sabés cuánto pagás y cuándo se entrega desde el día uno. Sin sorpresas.' },
      { title: 'El código es tuyo', desc: 'Te entrego el código fuente, los accesos y la documentación. No quedás atado a nadie.' },
      { title: 'Comunicación directa', desc: 'Hablás conmigo, no con un intermediario. Avances semanales y demo en vivo.' },
      { title: 'Soporte después del lanzamiento', desc: 'Mantenimiento, mejoras y monitoreo para que tu sistema siga funcionando.' },
    ],
    processTitle: 'Cómo trabajamos',
    process: [
      { title: 'Llamada de 30 min', desc: 'Gratis y sin compromiso. Entiendo qué necesitás y qué problema querés resolver.' },
      { title: 'Propuesta en 48 h', desc: 'Alcance, tecnología, plazos y precio cerrado por escrito.' },
      { title: 'Desarrollo con demos semanales', desc: 'Ves el avance real cada semana y opinás sobre la marcha.' },
      { title: 'Lanzamiento y soporte', desc: 'Publicación en la web o en las tiendas, capacitación y soporte post-lanzamiento.' },
    ],
    stackTitle: 'Tecnologías que domino',
    stack: [
      { group: 'Frontend y apps', items: ['React', 'Next.js', 'TypeScript', 'React Native', 'Android', 'Capacitor', 'Angular', 'Tailwind', 'WordPress'] },
      { group: 'Backend y datos', items: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase', 'REST / GraphQL'] },
      { group: 'Infraestructura', items: ['Docker', 'Linux VPS', 'Coolify', 'Netlify', 'CI/CD', 'Multi-tenant'] },
      { group: 'IA e integraciones', items: ['Claude', 'OpenAI', 'Gemini', 'RAG', 'WhatsApp Cloud API', 'Mercado Pago', 'Stripe', 'AFIP / ARCA'] },
    ],
    aboutTitle: 'Quién está detrás',
    about:
      'Soy Gabriel Iturre, desarrollador full stack de Jujuy, Argentina. Fundé KILO, un sistema de gestión para comercios con app en Google Play, y ZonaJujuy, una agencia de software. Desde 2022 desarrollo productos propios y para clientes: sistemas de gestión, apps móviles, SaaS, e-commerce, sitios WordPress y automatizaciones con IA. Trabajo de forma remota con clientes de Argentina, Latinoamérica, Estados Unidos y Europa.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: '¿Cuánto cuesta desarrollar una app o un sistema?', a: 'Depende del alcance. Una landing o un sitio WordPress lleva días; un MVP de app o SaaS, entre 4 y 10 semanas. Después de una llamada de 30 minutos te mando un presupuesto cerrado en 48 horas, con plazos y entregables por escrito.' },
      { q: '¿Cuánto tarda un proyecto?', a: 'Un sitio web, de 1 a 2 semanas. Una app o un sistema de gestión a medida, de 4 a 12 semanas según la complejidad. Uso IA en el desarrollo para acortar los plazos sin perder calidad.' },
      { q: '¿Publicás la app en Google Play y App Store?', a: 'Sí. Me encargo de todo el proceso: cuenta de desarrollador, fichas, capturas, políticas y publicación. KILO, por ejemplo, ya está en Google Play.' },
      { q: '¿Trabajás con WordPress?', a: 'Sí. Hago sitios WordPress rápidos, seguros y fáciles de administrar, y también sitios en Next.js cuando el proyecto necesita más rendimiento o funciones a medida.' },
      { q: '¿Trabajás con clientes de otros países?', a: 'Sí. Trabajo 100% remoto con clientes de Argentina, Latinoamérica, Estados Unidos y Europa, en español o en inglés. Acepto pagos internacionales.' },
      { q: '¿Integrás facturación electrónica y Mercado Pago?', a: 'Sí. Integré facturación electrónica de AFIP/ARCA, Mercado Pago, Stripe, cobros con QR y la API de WhatsApp en sistemas que hoy están en producción.' },
      { q: '¿Qué pasa después de que se entrega el proyecto?', a: 'Te entrego el código, los accesos y la documentación. Ofrezco planes de mantenimiento y soporte para corregir, mejorar y monitorear el sistema.' },
      { q: '¿Podés sumarte a mi equipo como desarrollador?', a: 'Sí. Además de proyectos llave en mano, me sumo a equipos como full stack o AI engineer, por contrato o part-time.' },
    ] as Faq[],
    ctaTitle: '¿Tenés un proyecto en mente?',
    ctaSubtitle: 'Contame la idea. Te respondo en menos de 24 horas con los próximos pasos y una estimación.',
    form: {
      name: 'Tu nombre',
      email: 'Tu email',
      type: 'Tipo de proyecto',
      types: ['App móvil', 'Sistema de gestión / ERP', 'SaaS / MVP', 'Sitio web / WordPress', 'E-commerce', 'IA / Automatización', 'Sumarme a tu equipo', 'Otro'],
      budget: 'Presupuesto aproximado',
      budgets: ['A definir', 'Menos de USD 1.000', 'USD 1.000 – 3.000', 'USD 3.000 – 10.000', 'Más de USD 10.000'],
      message: 'Contame qué querés construir',
      send: 'Enviar consulta',
      sending: 'Enviando…',
      ok: '¡Listo! Recibí tu consulta. Te respondo en menos de 24 h.',
      error: 'No se pudo enviar. Escribime por WhatsApp y te respondo enseguida.',
      or: 'o escribime directo',
    },
    cvCta: 'Descargar CV',
    footer: 'Programador full stack freelance en Jujuy, Argentina. Apps, sistemas, SaaS y webs para clientes de todo el mundo.',
  },
  en: {
    lang: 'en' as Lang,
    path: '/en',
    title: 'Gabriel Iturre · Freelance Full Stack Developer | Custom apps, systems & websites',
    description:
      'I build Android and iOS apps, business management systems, SaaS platforms, online stores, WordPress sites and AI automations. Freelance developer based in Argentina working with clients worldwide. Quote in 48 h.',
    nav: { services: 'Services', work: 'Work', process: 'Process', faq: 'FAQ', cv: 'Resume', cta: 'Get a quote' },
    hero: {
      badge: 'Available for new projects',
      title1: 'I turn your idea into',
      title2: 'software that sells',
      subtitle:
        "I'm Gabriel Iturre, a full stack developer and founder of KILO. I build mobile apps, business systems, SaaS platforms and websites, from design to Play Store release, for companies and founders in Argentina and worldwide.",
      primary: 'Tell me about your project',
      secondary: 'See real projects',
      waText: "Hi Gabriel, I saw your portfolio and I'd like a quote for a project: ",
      proof: ['Apps live on Google Play', 'Systems in production', 'Reply in under 24 h'],
    },
    stats: [
      { value: '4+', label: 'years building software' },
      { value: '15+', label: 'projects delivered' },
      { value: '4 months', label: 'from idea to SaaS in production (KILO)' },
      { value: '100%', label: 'custom code, no templates' },
    ],
    servicesTitle: 'Everything your project needs, in one place',
    servicesSubtitle:
      'One accountable person end to end: design, development, servers, store release and support. No juggling vendors.',
    services: [
      { icon: 'mobile', title: 'Mobile apps', desc: 'Native or hybrid Android and iOS apps, published on Google Play and the App Store.', items: ['Android / iOS', 'Store release', 'Push notifications', 'Offline mode'] },
      { icon: 'system', title: 'Custom business systems', desc: 'ERP, point of sale, inventory, scheduling, CRM and internal dashboards built around how you work.', items: ['ERP / POS', 'E-invoicing', 'Roles & permissions', 'Reporting'] },
      { icon: 'saas', title: 'SaaS & MVPs', desc: 'Launch your startup: a working MVP in weeks, multi-tenant and ready to charge subscriptions.', items: ['Fast MVP', 'Subscriptions', 'Multi-tenant', 'Scalable'] },
      { icon: 'web', title: 'Websites & WordPress', desc: 'High-converting landing pages, company sites and fast, easy-to-manage WordPress.', items: ['WordPress', 'Next.js', 'Technical SEO', 'Performance'] },
      { icon: 'shop', title: 'E-commerce & payments', desc: 'Online stores with Stripe, Mercado Pago, QR payments and WhatsApp sales.', items: ['Stripe', 'Mercado Pago', 'QR', 'Catalog'] },
      { icon: 'ai', title: 'AI & automation', desc: 'WhatsApp chatbots, AI assistants, RAG over your documents and processes without manual work.', items: ['WhatsApp bots', 'Claude / GPT / Gemini', 'RAG', 'Integrations'] },
    ] as Service[],
    workTitle: 'Real projects, in production',
    workSubtitle: 'Products of my own and for clients, used by real people today. Go try them.',
    moreWorkTitle: 'More client work',
    visit: 'View live',
    playStore: 'Get it on Google Play',
    soon: 'Coming soon',
    projects: projectsEn,
    whyTitle: 'Why work with me',
    why: [
      { title: 'Built to sell', desc: 'Business first, code second. Every screen has a goal: more sales, less manual work.' },
      { title: 'AI-powered speed', desc: 'I use AI across the whole development process to ship in weeks what usually takes months, without cutting corners.' },
      { title: 'Fixed-price quotes', desc: 'You know the cost and the delivery date from day one. No surprises.' },
      { title: 'You own the code', desc: 'You get the source code, credentials and documentation. No lock-in.' },
      { title: 'Direct communication', desc: 'You talk to me, not a middleman. Weekly progress and live demos.' },
      { title: 'Post-launch support', desc: 'Maintenance, improvements and monitoring to keep your system running.' },
    ],
    processTitle: 'How we work',
    process: [
      { title: '30-min call', desc: 'Free, no strings attached. I learn what you need and the problem you want to solve.' },
      { title: 'Proposal in 48 h', desc: 'Scope, tech, timeline and a fixed price in writing.' },
      { title: 'Build with weekly demos', desc: 'You see real progress every week and give feedback along the way.' },
      { title: 'Launch & support', desc: 'Web or store release, training and post-launch support.' },
    ],
    stackTitle: 'Tech I work with',
    stack: [
      { group: 'Frontend & apps', items: ['React', 'Next.js', 'TypeScript', 'React Native', 'Android', 'Capacitor', 'Angular', 'Tailwind', 'WordPress'] },
      { group: 'Backend & data', items: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase', 'REST / GraphQL'] },
      { group: 'Infrastructure', items: ['Docker', 'Linux VPS', 'Coolify', 'Netlify', 'CI/CD', 'Multi-tenant'] },
      { group: 'AI & integrations', items: ['Claude', 'OpenAI', 'Gemini', 'RAG', 'WhatsApp Cloud API', 'Stripe', 'Mercado Pago', 'AFIP / ARCA'] },
    ],
    aboutTitle: "Who's behind it",
    about:
      "I'm Gabriel Iturre, a full stack developer from Jujuy, Argentina. I founded KILO, a business management system for retailers with an app on Google Play, and ZonaJujuy, a software agency. Since 2022 I've built products of my own and for clients: business systems, mobile apps, SaaS, e-commerce, WordPress sites and AI automations. I work remotely with clients in Argentina, Latin America, the US and Europe.",
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'How much does an app or system cost?', a: 'It depends on scope. A landing page or WordPress site takes days; an app or SaaS MVP takes 4–10 weeks. After a 30-minute call I send a fixed-price quote within 48 hours, with timeline and deliverables in writing.' },
      { q: 'How long does a project take?', a: 'A website: 1–2 weeks. A custom app or business system: 4–12 weeks depending on complexity. I use AI in development to shorten timelines without losing quality.' },
      { q: 'Do you publish apps on Google Play and the App Store?', a: 'Yes. I handle the whole process: developer account, listings, screenshots, policies and release. KILO, for example, is live on Google Play.' },
      { q: 'Do you work with WordPress?', a: 'Yes. I build fast, secure, easy-to-manage WordPress sites, and Next.js sites when a project needs more performance or custom features.' },
      { q: 'Do you work with international clients?', a: 'Yes. I work 100% remotely with clients in Argentina, Latin America, the US and Europe, in English or Spanish, and accept international payments.' },
      { q: 'Can you integrate payments and invoicing?', a: 'Yes. I have integrated Stripe, Mercado Pago, QR payments, Argentine e-invoicing (AFIP/ARCA) and the WhatsApp API in systems running in production.' },
      { q: 'What happens after delivery?', a: 'You get the code, credentials and documentation. I offer maintenance and support plans to fix, improve and monitor the system.' },
      { q: 'Can you join my team as a developer?', a: 'Yes. Besides turnkey projects, I join teams as a full stack or AI engineer, on contract or part-time.' },
    ] as Faq[],
    ctaTitle: 'Got a project in mind?',
    ctaSubtitle: "Tell me the idea. I'll reply within 24 hours with next steps and an estimate.",
    form: {
      name: 'Your name',
      email: 'Your email',
      type: 'Project type',
      types: ['Mobile app', 'Business system / ERP', 'SaaS / MVP', 'Website / WordPress', 'E-commerce', 'AI / Automation', 'Join your team', 'Other'],
      budget: 'Approximate budget',
      budgets: ['Not sure yet', 'Under USD 1,000', 'USD 1,000 – 3,000', 'USD 3,000 – 10,000', 'Over USD 10,000'],
      message: 'Tell me what you want to build',
      send: 'Send inquiry',
      sending: 'Sending…',
      ok: "Done! I got your message. I'll reply within 24 h.",
      error: "Couldn't send it. Message me on WhatsApp and I'll answer right away.",
      or: 'or reach me directly',
    },
    cvCta: 'Download resume',
    footer: 'Freelance full stack developer in Jujuy, Argentina. Apps, systems, SaaS and websites for clients worldwide.',
  },
};

export type SiteContent = (typeof content)['es'];

// ---------- CV ----------
export const cv = {
  es: {
    headline: 'Full Stack & AI Product Engineer',
    summary:
      'Desarrollador full stack y fundador de producto con más de 4 años construyendo software en producción. Fundé KILO (SaaS de gestión para comercios con app en Google Play) y la agencia ZonaJujuy. Llevo productos de la idea al lanzamiento en semanas: apps móviles, sistemas de gestión multi-tenant, e-commerce e integraciones con IA, pagos y facturación electrónica. Uso IA (Claude, GPT, Gemini) de forma intensiva para acelerar el desarrollo sin perder calidad.',
    highlights: [
      'SaaS multi-tenant propio en producción, lanzado en 4 meses',
      'Apps Android publicadas en Google Play',
      '+15 proyectos entregados a clientes',
      'Integraciones AFIP/ARCA, Mercado Pago, Stripe y WhatsApp API',
    ],
    jobs: [
      {
        role: 'Founder & Lead Product Engineer',
        company: 'KILO — SaaS de gestión para comercios',
        period: '2023 – Actualidad',
        url: 'somoskilo.com',
        bullets: [
          'Diseñé y construí de punta a punta un ERP + punto de venta multi-tenant (web, PC y Android) lanzado en 4 meses.',
          'Integré facturación electrónica AFIP/ARCA, cobros con QR de Mercado Pago y ventas por WhatsApp.',
          'Arquitectura en Docker sobre VPS Linux con Coolify, CI/CD y aislamiento de datos por tenant (JWT + RBAC).',
          'Publiqué y mantengo la app en Google Play.',
        ],
      },
      {
        role: 'Founder & Full Stack Developer',
        company: 'ZonaJujuy — Agencia de software',
        period: '2022 – Actualidad',
        url: 'zonajujuy.com',
        bullets: [
          'Desarrollo de sistemas a medida, apps, tiendas online y sitios web (Next.js, WordPress) para empresas y comercios.',
          'Más de 15 proyectos entregados: gastronomía, salud, turismo, retail y servicios.',
          'Relación directa con clientes: relevamiento, presupuesto, desarrollo, publicación y soporte.',
        ],
      },
      {
        role: 'Product Engineer',
        company: 'SLOT / ZonaSalud — Software médico con IA',
        period: '2025 – 2026',
        url: 'slot.zonajujuy.com',
        bullets: [
          'Integré LLMs en NestJS para resumir historias clínicas en JSON estructurado.',
          'Construí colas virtuales por QR y CronJobs anti-ausentismo que reasignan turnos automáticamente.',
        ],
      },
      {
        role: 'Product Engineer',
        company: 'CHEFI — SaaS gastronómico',
        period: '2025 – 2026',
        url: 'chefi.zonajujuy.com',
        bullets: [
          'Pedidos por QR en tiempo real, login con WhatsApp OTP e impresión de comandas desde la nube.',
          'Reduje en un 40% los errores en la toma de pedidos.',
        ],
      },
    ] as Job[],
    skills: [
      { group: 'Frontend y mobile', items: 'React, Next.js, TypeScript, React Native, Android, Capacitor, Angular, Tailwind, WordPress' },
      { group: 'Backend', items: 'Node.js, NestJS, PostgreSQL, MongoDB, Redis, Supabase, Firebase, REST, GraphQL' },
      { group: 'Infraestructura', items: 'Docker, Linux, Coolify, Netlify, CI/CD, arquitectura multi-tenant' },
      { group: 'IA e integraciones', items: 'Claude, OpenAI, Gemini, RAG, agentes, WhatsApp Cloud API, Mercado Pago, Stripe, AFIP/ARCA' },
    ],
    education: [{ title: 'Analista Programador Universitario', place: 'Facultad de Ingeniería, UNJu', period: '2022 – 2026 (en curso)' }],
    languages: 'Español nativo · Inglés B1–B2 (lectura técnica)',
    labels: {
      summary: 'Perfil',
      experience: 'Experiencia',
      skills: 'Habilidades',
      education: 'Educación',
      languages: 'Idiomas',
      highlights: 'Logros destacados',
      download: 'Descargar PDF',
      print: 'Imprimir',
      back: 'Volver al portfolio',
      remote: 'Remoto · Disponible',
    },
  },
  en: {
    headline: 'Full Stack & AI Product Engineer',
    summary:
      'Full stack developer and product founder with 4+ years shipping production software. Founded KILO (a retail management SaaS with an app on Google Play) and the software agency ZonaJujuy. I take products from idea to launch in weeks: mobile apps, multi-tenant business systems, e-commerce, and integrations with AI, payments and e-invoicing. I use AI (Claude, GPT, Gemini) heavily to speed up delivery without sacrificing quality.',
    highlights: [
      'Own multi-tenant SaaS in production, launched in 4 months',
      'Android apps published on Google Play',
      '15+ projects delivered to clients',
      'Integrations: Stripe, Mercado Pago, AFIP/ARCA, WhatsApp API',
    ],
    jobs: [
      {
        role: 'Founder & Lead Product Engineer',
        company: 'KILO — Retail management SaaS',
        period: '2023 – Present',
        url: 'somoskilo.com',
        bullets: [
          'Designed and built end to end a multi-tenant ERP + point of sale (web, desktop, Android) launched in 4 months.',
          'Integrated AFIP/ARCA e-invoicing, Mercado Pago QR payments and WhatsApp sales.',
          'Docker architecture on Linux VPS with Coolify, CI/CD and per-tenant data isolation (JWT + RBAC).',
          'Published and maintain the app on Google Play.',
        ],
      },
      {
        role: 'Founder & Full Stack Developer',
        company: 'ZonaJujuy — Software agency',
        period: '2022 – Present',
        url: 'zonajujuy.com',
        bullets: [
          'Custom systems, apps, online stores and websites (Next.js, WordPress) for companies and retailers.',
          '15+ projects delivered across food service, healthcare, tourism, retail and services.',
          'Direct client work: discovery, quoting, development, release and support.',
        ],
      },
      {
        role: 'Product Engineer',
        company: 'SLOT / ZonaSalud — AI healthcare software',
        period: '2025 – 2026',
        url: 'slot.zonajujuy.com',
        bullets: [
          'Integrated LLMs in NestJS to summarize medical records into structured JSON.',
          'Built QR virtual queues and anti-no-show CronJobs that automatically reassign appointments.',
        ],
      },
      {
        role: 'Product Engineer',
        company: 'CHEFI — Restaurant SaaS',
        period: '2025 – 2026',
        url: 'chefi.zonajujuy.com',
        bullets: [
          'Real-time QR ordering, WhatsApp OTP login and cloud ticket printing.',
          'Cut order-taking errors by 40%.',
        ],
      },
    ] as Job[],
    skills: [
      { group: 'Frontend & mobile', items: 'React, Next.js, TypeScript, React Native, Android, Capacitor, Angular, Tailwind, WordPress' },
      { group: 'Backend', items: 'Node.js, NestJS, PostgreSQL, MongoDB, Redis, Supabase, Firebase, REST, GraphQL' },
      { group: 'Infrastructure', items: 'Docker, Linux, Coolify, Netlify, CI/CD, multi-tenant architecture' },
      { group: 'AI & integrations', items: 'Claude, OpenAI, Gemini, RAG, agents, WhatsApp Cloud API, Stripe, Mercado Pago, AFIP/ARCA' },
    ],
    education: [{ title: 'University Programmer Analyst', place: 'School of Engineering, UNJu (Argentina)', period: '2022 – 2026 (in progress)' }],
    languages: 'Spanish (native) · English B1–B2 (technical reading)',
    labels: {
      summary: 'Profile',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      languages: 'Languages',
      highlights: 'Key achievements',
      download: 'Download PDF',
      print: 'Print',
      back: 'Back to portfolio',
      remote: 'Remote · Available',
    },
  },
};

export const cvPdf = { es: '/cv/Gabriel-Iturre-CV-ES.pdf', en: '/cv/Gabriel-Iturre-CV-EN.pdf' };
