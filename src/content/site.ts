// Fuente única de verdad del sitio: copy, proyectos, precios, FAQ y CV.
// La web, el JSON-LD, /llms.txt y el CV leen todo desde acá.

export type Lang = 'es' | 'en';

export const SITE_URL = 'https://gabrieliturre.tech';

export const contact = {
  name: 'Gabriel Iturre',
  email: 'gabriel13iturre@gmail.com',
  whatsapp: '543884472423',
  whatsappDisplay: '+54 9 388 447-2423',
  linkedin: 'https://www.linkedin.com/in/gabriel-iturre/',
  github: 'https://github.com/GabrielIturreCs',
  agency: 'https://zonajujuy.com',
  // Sólo provincia y país: nunca publicar el domicilio.
  region: 'Jujuy',
  country: 'AR',
  photo: '/Images/gabriel-iturre-programador-jujuy.png',
};

// ---------- AGENDA ----------
// Pegá acá el link de tu agenda y el sitio la muestra embebida en la sección «Agendá una llamada».
// - Cal.com: el link público del evento, por ejemplo 'https://cal.com/gabrieliturre/15min'.
// - Google Calendar (agenda de citas): el link de «Página de reservas», el que empieza con
//   'https://calendar.google.com/calendar/appointments/schedules/...'.
// Mientras quede vacío, se usa el formulario propio de reservas (te llega por email).
export const bookingUrl = '';

// ---------- GUÍA GRATIS ----------
// Los correos quedan en Netlify → tu sitio → Forms → «guia».
export const guidePdf = {
  es: '/guia/automatizar-tu-negocio-con-ia-en-7-dias.pdf',
  en: '/guia/automate-your-business-with-ai-in-7-days.pdf',
};

export function whatsappLink(text: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const cvPdf = { es: '/cv/Gabriel-Iturre-CV-ES.pdf', en: '/cv/Gabriel-Iturre-CV-EN.pdf' };

// ---------- Proyectos ----------
// Cada proyecto muestra capturas reales dentro de un celular, una ventana de navegador o ambos.
// - phone: capturas verticales (540 px de ancho) en /public/work/<slug>/
// - browser: capturas de escritorio 1440x900; `scroll` es una captura larga que se desplaza sola.
// - steps: el texto de cada pantalla del celular (o del navegador si no hay celular), en el mismo orden.
export type Showcase = {
  slug: string;
  name: string;
  kind: string;
  year: string;
  summary: string;
  tags: string[];
  url?: string;
  status?: string;
  note?: string;
  phone?: string[];
  browser?: string[];
  scroll?: string;
  steps: string[];
  tone: 'green' | 'orange' | 'blue' | 'ink' | 'violet';
};

// Webs para clientes: tarjetas simples debajo de los proyectos (captura 1440x900).
export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  url?: string;
  image?: string;
  year: string;
  tags: string[];
};

export type Faq = { q: string; a: string };
export type Price = { name: string; from: string; note: string };

// IMPORTANTE: precios de referencia. Confirmalos antes de publicar.
const prices = {
  es: {
    plan: {
      badge: 'Plan mensual',
      name: 'AI Engineer dedicado',
      price: 'USD 1.490',
      per: '/mes',
      features: ['Un pedido a la vez', 'Entregas cada pocos días', 'Apps, sistemas, IA y automatizaciones', 'Arreglos y mejoras incluidos', 'Servidores y publicación', 'Pausá o cancelá cuando quieras'],
      cta: 'Agendá una llamada',
    },
    from: [
      { name: 'Landing page', from: 'USD 290', note: 'Lista en 1 semana' },
      { name: 'Sitio web o WordPress', from: 'USD 590', note: 'Hasta 6 secciones' },
      { name: 'App móvil o MVP', from: 'USD 2.900', note: 'Android / iOS / web' },
      { name: 'Sistema a medida', from: 'USD 3.900', note: 'Punto de venta, turnos, stock' },
    ] as Price[],
    note: 'Son precios de partida. En una llamada de 15 minutos te paso un número real y cerrado.',
    perks: [
      { title: 'Precio cerrado', desc: 'Presupuesto por escrito en 48 h. Sin sorpresas.' },
      { title: 'Pagás por etapas', desc: 'Un anticipo y el resto contra entregas.' },
    ],
  },
  en: {
    plan: {
      badge: 'Monthly plan',
      name: 'Dedicated AI Engineer',
      price: 'USD 1,490',
      per: '/month',
      features: ['One request at a time', 'Delivery every few days', 'Apps, systems, AI & automations', 'Fixes & improvements included', 'Servers & store releases', 'Pause or cancel anytime'],
      cta: 'Book a call',
    },
    from: [
      { name: 'Landing page', from: 'USD 290', note: 'Ready in 1 week' },
      { name: 'Website or WordPress', from: 'USD 590', note: 'Up to 6 sections' },
      { name: 'Mobile app or MVP', from: 'USD 2,900', note: 'Android / iOS / web' },
      { name: 'Custom system', from: 'USD 3,900', note: 'Point of sale, booking, inventory' },
    ] as Price[],
    note: "These are starting points. On a 15-minute call I'll give you a real, fixed number.",
    perks: [
      { title: 'Fixed price', desc: 'Written quote within 48 h. No surprises.' },
      { title: 'Pay in milestones', desc: 'A deposit, then pay as we deliver.' },
    ],
  },
};

// KILO: datos verificados al 18/10/2026. No agregar cifras sin verificar.
export const kiloLinks = {
  site: 'https://somoskilo.com',
  play: 'https://play.google.com/store/apps/details?id=com.kilo.app&hl=es_AR',
  // Capturas reales de la app (1080x2400), en el orden en que se muestran.
  screens: ['/work/kilo/tienda.webp', '/work/kilo/pedido.webp', '/work/kilo/home.webp', '/work/kilo/caja.webp', '/work/kilo/productos.webp', '/work/kilo/reportes.webp', '/work/kilo/ofertas.webp', '/work/kilo/oferta-lista.webp'],
  landing: '/work/kilo/landing-larga.webp',
  badge: '/Images/google-play-badge-es-300x116.png',
};

const showcaseEs: Showcase[] = [
  {
    slug: 'chefi',
    name: 'Chefi',
    kind: 'SaaS para gastronomía',
    year: '2025',
    summary: 'Menú online con carrito, pedidos por WhatsApp, panel para el local e impresión directa en la comandera.',
    tags: ['Next.js', 'NestJS', 'MongoDB', 'Mercado Pago'],
    url: 'https://chefi.zonajujuy.com',
    phone: ['/work/chefi/menu.webp', '/work/chefi/categoria.webp', '/work/chefi/producto.webp', '/work/chefi/pedido.webp'],
    browser: ['/work/chefi/tienda-web.webp'],
    steps: ['El cliente abre el menú', 'Filtra por categoría', 'Elige tamaño y extras', 'Confirma el pedido'],
    tone: 'orange',
  },
  {
    slug: 'prometo',
    name: 'Prometo',
    kind: 'Pagos entre amigos con IA',
    year: '2026',
    status: 'Hackathon',
    summary: 'Amigos ponen dólares digitales detrás de una meta y los que cumplen se llevan el pozo. Entrás con tu huella, mostrás que cumpliste con una foto que revisa un modelo de visión y el contrato reparte solo.',
    note: 'Hecho para Monad Metropolis 2026 (Consumer Products & Payments). Corre en testnet. Capturas del video de demo.',
    tags: ['React', 'Cloudflare Workers', 'Workers AI', 'Solidity'],
    url: 'https://web.gabriel13iturre.workers.dev',
    phone: ['/work/prometo/inicio.webp', '/work/prometo/nueva-promesa.webp', '/work/prometo/sala-de-espera.webp', '/work/prometo/check-in.webp', '/work/prometo/pruebas.webp', '/work/prometo/pozo-repartido.webp', '/work/prometo/desafio.webp'],
    steps: ['Tu saldo en dólares digitales', 'Creás la promesa', 'Tus amigos entran', 'Check-in con foto', 'Las pruebas del grupo', 'Se reparte el pozo', 'Desafío entre amigos'],
    tone: 'violet',
  },
  {
    slug: 'tubondi',
    name: 'Tu Bondi Jujuy',
    kind: 'Transporte en tiempo real',
    year: '2026',
    status: 'En desarrollo',
    summary: 'Colectivos de Jujuy en el mapa: app del chofer con GPS, app del pasajero con llegada estimada y panel para la flota.',
    note: 'Panel corriendo en local, con datos de ejemplo.',
    tags: ['NestJS', 'PostGIS', 'Socket.io', 'Expo'],
    browser: ['/work/bondi/monitoreo.webp', '/work/bondi/recorridos.webp', '/work/bondi/avisos.webp', '/work/bondi/reportes.webp'],
    steps: ['Monitoreo de la flota', 'Editor de recorridos', 'Avisos a pasajeros', 'Reportes por línea'],
    tone: 'blue',
  },
  {
    slug: 'slot',
    name: 'SLOT',
    kind: 'Software para clínicas con IA',
    year: '2025',
    summary: 'Agenda y turnos, ingreso de pacientes con cola de espera, resúmenes con IA para el médico y turnos por WhatsApp.',
    tags: ['Next.js', 'Supabase', 'Gemini', 'WhatsApp API'],
    url: 'https://slot.zonajujuy.com',
    phone: ['/work/slot/ingreso-paciente.webp', '/work/slot/registro.webp'],
    browser: ['/work/slot/login-web.webp'],
    steps: ['El paciente se anota solo', 'La clínica crea su cuenta'],
    tone: 'green',
  },
  {
    slug: 'aevum',
    name: 'Aevum',
    kind: 'IA para empresas',
    year: '2026',
    summary: 'Los manuales y documentos de una empresa respondiendo preguntas con IA, con equipos e invitaciones.',
    tags: ['RAG', 'Pinecone', 'Gemini', 'Next.js'],
    url: 'https://aevum.zonajujuy.com',
    phone: ['/work/aevum/inicio.webp'],
    scroll: '/work/aevum/landing.webp',
    steps: ['Base de conocimiento con IA'],
    tone: 'ink',
  },
  {
    slug: 'sudo',
    name: 'SUDO',
    kind: 'Ventas y stock para supermercados',
    year: '2025',
    summary: 'Sistema de ventas que sigue funcionando sin internet, con app de escritorio e impresión de tickets térmicos.',
    tags: ['Angular', 'Electron', 'MongoDB', 'ESC/POS'],
    url: 'https://sudo.zonajujuy.com',
    phone: ['/work/sudo/login.webp'],
    browser: ['/work/sudo/login-web.webp'],
    steps: ['Cada comercio con su código'],
    tone: 'orange',
  },
  {
    slug: 'zonasalud',
    name: 'ZonaSalud',
    kind: 'Gestión de consultorios',
    year: '2025',
    summary: 'Pacientes, historia clínica, caja y avisos por WhatsApp para consultorios médicos.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL'],
    url: 'https://salud.zonajujuy.com',
    phone: ['/work/salud/login.webp'],
    browser: ['/work/salud.webp'],
    steps: ['Acceso por consultorio'],
    tone: 'blue',
  },
];

const showcaseEnPatch: Record<string, Partial<Showcase>> = {
  chefi: {
    kind: 'Restaurant SaaS',
    summary: 'Online menu with a cart, WhatsApp orders, a dashboard for the venue and direct printing to the kitchen printer.',
    steps: ['The customer opens the menu', 'Filters by category', 'Picks size and extras', 'Places the order'],
  },
  prometo: {
    kind: 'Payments between friends, with AI',
    status: 'Hackathon',
    summary: 'Friends put digital dollars behind a goal and those who follow through take the pool. Sign in with your fingerprint, prove it with a photo reviewed by a vision model and the contract pays out on its own.',
    note: 'Built for Monad Metropolis 2026 (Consumer Products & Payments). Runs on testnet. Screens from the demo video.',
    steps: ['Your balance in digital dollars', 'Create the promise', 'Friends join', 'Photo check-in', "The group's proofs", 'The pool is split', 'Challenge between friends'],
  },
  tubondi: {
    name: 'Tu Bondi Jujuy',
    kind: 'Real-time public transit',
    status: 'In development',
    summary: "Jujuy's buses on a map: a driver app with GPS, a rider app with arrival times and a fleet dashboard.",
    note: 'Dashboard running locally, with sample data.',
    steps: ['Fleet monitoring', 'Route editor', 'Rider alerts', 'Reports by line'],
  },
  slot: {
    kind: 'AI software for clinics',
    summary: 'Scheduling, patient check-in with a waiting queue, AI summaries for the doctor and WhatsApp booking.',
    steps: ['Patients check themselves in', 'The clinic creates its account'],
  },
  aevum: {
    kind: 'AI for companies',
    summary: "A company's manuals and documents answering questions with AI, with teams and invitations.",
    steps: ['AI knowledge base'],
  },
  sudo: {
    kind: 'Sales & inventory for supermarkets',
    summary: 'A point of sale that keeps working offline, with a desktop app and thermal ticket printing.',
    steps: ['Each store with its own code'],
  },
  zonasalud: {
    kind: 'Clinic management',
    summary: 'Patients, medical records, cash register and WhatsApp reminders for medical practices.',
    steps: ['Sign-in per practice'],
  },
};
const showcaseEn: Showcase[] = showcaseEs.map((p) => ({ ...p, ...showcaseEnPatch[p.slug] }));

// Webs para clientes (se muestran con «Ver más proyectos»).
const sitesEs: Project[] = [
  { slug: 'intimates', name: 'Inti Mates', kind: 'E-commerce', year: '2026', summary: 'Tienda online de mates artesanales.', url: 'https://intimatesjujuy.netlify.app', image: '/work/intimates.webp', tags: ['E-commerce', 'Next.js'] },
  { slug: 'petit', name: 'Peluquería Petit', kind: 'Web + turnos', year: '2025', summary: 'Sitio con SEO local y reservas online.', url: 'https://peluqueriapetit.zonajujuy.com', image: '/work/petit.webp', tags: ['Web', 'SEO local'] },
  { slug: 'zonajujuy', name: 'ZonaJujuy', kind: 'Agencia de software', year: '2024', summary: 'Mi agencia: sistemas, apps y webs para empresas.', url: 'https://zonajujuy.com', image: '/work/zonajujuy.webp', tags: ['Next.js', 'Branding'] },
  { slug: 'victor', name: 'Viajes con Víctor', kind: 'Landing de servicios', year: '2025', summary: 'Landing que lleva las consultas a WhatsApp.', url: 'https://victormartinez.zonajujuy.com', image: '/work/victor.webp', tags: ['Landing', 'WhatsApp'] },
  { slug: 'burguesita', name: 'La Burguesita', kind: 'Web + menú digital', year: '2025', summary: 'Menú online con pedidos directos por WhatsApp.', url: 'https://laburguesita.netlify.app', image: '/work/burguesita.webp', tags: ['Web', 'Menú digital'] },
];
const sitesEnPatch: Record<string, Partial<Project>> = {
  intimates: { summary: 'Online store for handcrafted mate gourds.' },
  petit: { name: 'Petit Hair Salon', kind: 'Website + booking', summary: 'Local-SEO website with online booking.' },
  zonajujuy: { kind: 'Software agency', summary: 'My agency: systems, apps and websites for companies.' },
  victor: { name: 'Rides with Víctor', kind: 'Service landing page', summary: 'Landing page that sends inquiries to WhatsApp.' },
  burguesita: { kind: 'Website + digital menu', summary: 'Online menu with direct WhatsApp orders.' },
};
const sitesEn: Project[] = sitesEs.map((p) => ({ ...p, ...sitesEnPatch[p.slug] }));

// Landings y webs publicadas: el muro animado de la sección de proyectos.
export const landings = [
  { name: 'somoskilo.com', image: '/work/kilo-web.webp' },
  { name: 'Gaby Gym', image: '/work/landings/gaby-gym.webp' },
  { name: 'Peluquería Petit', image: '/work/petit.webp' },
  { name: 'Hacela corta', image: '/work/landings/hacela-corta.webp' },
  { name: 'Inti Mates', image: '/work/intimates.webp' },
  { name: 'Jujuy Gym', image: '/work/landings/jujuy-gym.webp' },
  { name: 'Aevum', image: '/work/aevum.webp' },
  { name: 'Viajes con Víctor', image: '/work/victor.webp' },
  { name: 'Empleo Flash', image: '/work/landings/empleo-flash.webp' },
  { name: 'La Burguesita', image: '/work/burguesita.webp' },
  { name: 'Peluquería Palpalá', image: '/work/landings/peluqueria-palpala.webp' },
  { name: 'ZonaJujuy', image: '/work/zonajujuy.webp' },
];

export const content = {
  es: {
    lang: 'es' as Lang,
    title: 'Gabriel Iturre · AI Engineer freelance | Producto con IA de punta a punta',
    description:
      'AI Engineer y desarrollador full stack. Domino Claude y la IA y construyo el producto completo: apps en Google Play, sistemas, backend, pagos y WhatsApp, pensando también el modelo de negocio. Fundador y CEO de KILO. Freelance y contratos, remoto desde Jujuy, Argentina.',
    nav: { work: 'Proyectos', services: 'Servicios', pricing: 'Precios', faq: 'Preguntas', guide: 'Guía gratis', call: 'WhatsApp', book: 'Agendá una llamada', seePricing: 'Ver precios', home: 'Inicio', cv: 'CV' },
    hero: {
      status: 'Disponible para freelance y contratos',
      title: ['AI Engineer que construye', 'producto real,', 'de punta a punta'],
      sub: 'Domino Claude y la IA, y construyo todo lo que un producto necesita para salir a la calle: apps en Google Play, backend, pagos y WhatsApp. Antes de programar, pensamos el negocio: qué conviene, qué cuesta y qué sobra.',
      hello: 'Hola, soy Gabriel',
      helloSub: 'AI Engineer · Fundador y CEO de KILO',
      cardBadge: 'Agenda abierta',
      cardTitle: 'Contame tu idea',
      cardSub: 'En 15 minutos vemos qué conviene construir, cuánto cuesta y cómo lanzarlo.',
      cardBtn: 'Agendá una llamada',
      cardCall: 'Escribime por WhatsApp',
      cardCallSub: 'Te respondo hoy mismo',
    },
    proof: {
      label: 'KILO, mi producto, al 18 de octubre de 2026',
      items: [
        { v: '83', l: 'comercios registrados en las 6 semanas desde el lanzamiento' },
        { v: '~700', l: 'ventas por mes registradas por esos comercios' },
        { v: '1.900+', l: 'commits en 10 meses, todos hechos por mí' },
        { v: 'Google Play', l: 'app Android publicada' },
      ],
    },
    logosLabel: 'Productos que construí',
    how: {
      title: ['Primero el negocio,', 'después', 'el código'],
      steps: [
        { title: 'Pulimos la idea', desc: 'Una llamada de 15 minutos. Vos traés la idea; yo te digo qué conviene, qué es caro y qué puede esperar.' },
        { title: 'Construyo con IA', desc: 'Apps, backend, pagos, WhatsApp y servidores. Uso Claude para avanzar rápido y reviso cada línea.' },
        { title: 'Lanzás', desc: 'En la web o en Google Play, con números para medir si funciona y soporte después.' },
      ],
      chat: ['Hola! Tengo una idea para una app de pedidos', 'Buenísimo. Te paso el plan con costos', 'Plan_y_costos.pdf', 'Perfecto, arranquemos'],
      launched: 'Publicado en Google Play',
    },
    tags: ['Claude', 'Agentes de IA', 'Automatización', 'Bots de WhatsApp', 'RAG', 'Apps Android', 'Google Play', 'SaaS', 'MVPs', 'Sistemas de gestión', 'Punto de venta', 'Mercado Pago', 'Facturación ARCA', 'APIs', 'Next.js', 'Node.js', 'PostgreSQL', 'Servidores', 'Modelo de negocio', 'Costos de IA'],
    note:
      'Programo desde 2022 y construyo productos en producción desde 2024. Soy fundador y CEO de KILO, un sistema de gestión y punto de venta para comercios de barrio con app en Google Play: lo programé solo, más de 1.900 commits en 10 meses. Trabajás directo conmigo, sin intermediarios.',
    benefits: {
      pill: 'Por qué yo',
      title: ['Domino la IA.', 'Construyo', 'el producto.'],
      sub: 'Un solo responsable que entiende la tecnología y el negocio.',
      items: [
        { icon: 'ai', title: 'Claude, todos los días', desc: 'Diseño, programo y reviso con Claude. Sé dónde la IA ahorra semanas y dónde no conviene usarla.' },
        { icon: 'all', title: 'De punta a punta', desc: 'App Android, web, backend, base de datos, pagos, WhatsApp y servidores.' },
        { icon: 'business', title: 'Pienso el negocio', desc: 'Qué conviene construir, qué es caro, qué es barato y cuánto te va a costar la IA por mes.' },
        { icon: 'quality', title: 'Producto propio en la calle', desc: 'KILO está en Google Play y los comercios registran ventas reales con él.' },
        { icon: 'code', title: 'El código es tuyo', desc: 'Te llevás código, accesos y documentación.' },
        { icon: 'price', title: 'Precio cerrado', desc: 'Sabés cuánto pagás antes de empezar.' },
      ],
    },
    services: {
      pill: 'Servicios',
      title: ['Lo que puedo', 'hacer', 'por vos'],
      sub: 'Para negocios que quieren su producto, para startups que necesitan salir rápido y para equipos que buscan un AI Engineer.',
      items: [
        { icon: 'product', title: 'Producto con IA de punta a punta', desc: 'MVPs, SaaS y apps Android publicadas en Google Play. De la idea a usuarios reales.', tags: ['MVP', 'SaaS', 'Google Play'] },
        { icon: 'bot', title: 'Automatización con IA', desc: 'Asistentes con Claude que atienden por WhatsApp, toman pedidos y turnos, y responden con los datos de tu negocio.', tags: ['WhatsApp', 'Agentes', 'RAG'] },
        { icon: 'system', title: 'Sistemas a medida', desc: 'Punto de venta, stock, turnos y gestión, con cobros por Mercado Pago y facturación electrónica.', tags: ['Punto de venta', 'Mercado Pago', 'ARCA'] },
        { icon: 'strategy', title: 'Estrategia de producto e IA', desc: 'Pulimos la idea, elegimos qué construir primero y estimamos costos de IA, servidores y tiendas antes de gastar.', tags: ['Modelo de negocio', 'Costos', 'Prioridades'] },
        { icon: 'team', title: 'Contratos y equipos', desc: 'Me sumo a tu equipo como AI Engineer o full stack, remoto, por proyecto o de forma continua.', tags: ['Remoto', 'Español / inglés', 'Por contrato'] },
      ],
      cloudTitle: ['Y todo lo que', 'haga falta'],
      cloudSub: 'Backend, pagos, servidores, publicación en tiendas y soporte, bajo un mismo techo.',
      more: '+ lo que tu producto necesite',
    },
    work: {
      pill: 'Proyectos',
      title: ['Productos reales,', 'en movimiento'],
      sub: 'Capturas reales de apps y sistemas que construí. Tocá cada paso para ver la pantalla.',
      kilo: {
        kind: 'Mi producto · SaaS + app Android',
        title: 'KILO',
        desc: 'Sistema de gestión y punto de venta para comercios de barrio: caja, stock, reportes, ofertas, tienda online y pedidos. Trae a Kilito, un asistente sobre la API de Claude: con una foto carga un producto o actualiza stock y costos desde la factura del proveedor. Lo diseñé, lo programé y lo lancé; hoy está en Google Play.',
        stats: [
          { v: '83', l: 'comercios en 6 semanas' },
          { v: '~700', l: 'ventas por mes' },
          { v: '1.900+', l: 'commits en 10 meses' },
        ],
        steps: ['Tienda online del comercio', 'Pedido registrado', 'Ventas del día', 'Caja del turno', 'Productos y stock', 'Reportes', 'Ofertas', 'Oferta activada'],
        site: 'Ver sitio',
        play: 'Google Play',
      },
      visit: 'Ver sitio',
      live: 'En producción',
      sitesTitle: 'Webs para clientes',
      wallTitle: ['Y muchas', 'landings', 'publicadas'],
      wallSub: 'Sitios y landings que diseñé y puse en línea para negocios de Jujuy y para mis productos.',
      more: 'Ver webs para clientes',
      less: 'Ver menos',
    },
    pricing: {
      pill: 'Precios',
      title: ['Precios claros,', 'sin sorpresas'],
      fromLabel: 'Desde',
      ...prices.es,
    },
    guide: {
      pill: 'Guía gratis',
      title: ['Cómo automatizar tu negocio', 'con IA', 'en 7 días'],
      sub: 'Un plan de 7 días, paso a paso, para que tu negocio atienda, venda y ordene sus datos con IA. Con herramientas concretas, costos y lo que no conviene hacer.',
      bullets: ['Qué tareas automatizar primero (y cuáles no)', 'Cómo armar un asistente de WhatsApp con los datos de tu negocio', 'Cuánto cuesta por mes, con cuentas hechas', 'Checklist de 7 días para imprimir'],
      cover: ['Guía', 'Automatizá tu negocio con IA en 7 días'],
      pages: '14 páginas · PDF',
      email: 'Tu email',
      name: 'Tu nombre (opcional)',
      submit: 'Quiero la guía',
      sending: 'Enviando…',
      ok: 'Listo. Acá tenés tu guía:',
      download: 'Descargar la guía (PDF)',
      privacy: 'Te escribo sólo si tengo algo útil. Te das de baja cuando quieras.',
    },
    booking: {
      pill: 'Agenda',
      title: ['Agendá una', 'llamada', 'de 15 minutos'],
      sub: 'Elegí día y horario, y te confirmo la llamada con el link de la videollamada.',
      embedTitle: 'Agenda de Gabriel Iturre',
      pick: 'Elegí un día',
      times: 'Horarios (hora Argentina)',
      name: 'Tu nombre',
      email: 'Tu email',
      about: '¿Qué querés construir?',
      confirm: 'Confirmar llamada',
      sending: 'Agendando…',
      ok: '¡Listo! Te escribo por email para confirmar la llamada.',
      error: 'No se pudo agendar. Escribime por WhatsApp.',
      back: 'Cambiar',
      taken: 'Ocupado',
    },
    faq: {
      title: ['Preguntas', 'frecuentes'],
      items: [
        { q: '¿Qué hace un AI Engineer por mi negocio?', a: 'Pone la IA a trabajar donde rinde: asistentes que atienden por WhatsApp, sistemas que ordenan pedidos, turnos o stock, y apps que tus clientes usan. Y te dice dónde no conviene usarla.' },
        { q: '¿Me ayudás a decidir si mi idea conviene?', a: 'Sí. Antes de programar vemos qué problema resuelve, quién paga, qué es caro, qué es barato y qué se puede dejar para después. A veces la mejor decisión es construir menos.' },
        { q: '¿Cuánto cuesta mi proyecto?', a: 'Depende del alcance. Tenés precios de partida arriba; después de una llamada de 15 minutos te mando un presupuesto cerrado por escrito en 48 horas.' },
        { q: '¿Cuánto tarda?', a: 'Una landing, alrededor de una semana. Un sitio web, 1 a 2 semanas. Una app o un sistema a medida, entre 4 y 12 semanas según la complejidad.' },
        { q: '¿Trabajás por contrato o sólo por proyecto?', a: 'Las dos cosas. Puedo hacer un proyecto cerrado, trabajar con un plan mensual o sumarme a tu equipo por contrato, remoto, en español o en inglés.' },
        { q: '¿Cómo empezamos?', a: 'Agendás una llamada, me contás la idea y te mando una propuesta con alcance, plazos y precio. Si te sirve, firmamos, pagás el anticipo y arranco esa misma semana.' },
        { q: '¿Quién hace el trabajo?', a: 'Yo, de punta a punta. Siempre hablás conmigo.' },
        { q: '¿Cuánto cuesta usar IA todos los meses?', a: 'Depende de cuántas consultas haga tu negocio. Antes de construir te paso una estimación mensual con el modelo que conviene, para que no haya sorpresas en la factura.' },
        { q: '¿Publicás apps en Google Play y App Store?', a: 'Sí. Me encargo de todo: cuenta de desarrollador, fichas, capturas, políticas y publicación. KILO ya está en Google Play.' },
        { q: '¿Podés arreglar un sistema o una web que ya tengo?', a: 'Sí. Reviso el código, te digo qué está mal y cuánto cuesta arreglarlo. También migro sistemas viejos a tecnologías modernas.' },
        { q: '¿Cómo funciona el plan mensual?', a: 'Pagás un monto fijo por mes y me vas pasando pedidos: nuevas funciones, automatizaciones, arreglos o pantallas. Trabajo uno a la vez y te entrego cada pocos días. Podés pausar o cancelar cuando quieras.' },
        { q: '¿Cómo se paga?', a: 'En proyectos cerrados, un anticipo y el resto por etapas contra entregas. Acepto transferencia, Mercado Pago y pagos internacionales.' },
        { q: '¿El código es mío?', a: 'Sí. Al terminar te entrego el código fuente, los accesos y la documentación. No quedás atado a nadie.' },
        { q: '¿Trabajás con clientes de otros países?', a: 'Sí. Trabajo 100% remoto desde Jujuy, Argentina, en español o en inglés.' },
        { q: '¿Qué pasa después del lanzamiento?', a: 'Te acompaño con soporte y mantenimiento: corrijo errores, sumo mejoras y monitoreo que todo funcione.' },
      ] as Faq[],
      callTitle: '¿Lo hablamos por WhatsApp?',
      callBtn: 'Abrir WhatsApp',
      emailLabel: '¿Preferís escribir?',
    },
    cta: {
      title: ['Veamos si somos', 'el match ideal'],
      aside: '(spoiler: sí)',
      sub: 'Agendá una llamada de 15 minutos o escribime por WhatsApp y te paso tu plan.',
      whatsapp: 'Escribime por WhatsApp',
      waText: 'Hola Gabriel, vi tu portfolio y quiero hablar de un proyecto: ',
    },
    footer: { place: 'Desde Jujuy, Argentina · Para todo el mundo', cv: 'CV', rights: 'Gabriel Iturre' },
    dock: { theme: 'Cambiar tema', lang: 'English' },
    showcase: showcaseEs,
    sites: sitesEs,
  },
  en: {
    lang: 'en' as Lang,
    title: 'Gabriel Iturre · Freelance AI Engineer | End-to-end AI products',
    description:
      'AI Engineer and full stack developer. I master Claude and modern AI and build the whole product: Google Play apps, systems, backend, payments and WhatsApp, while thinking through the business model. Founder and CEO of KILO. Freelance and contract work, remote from Jujuy, Argentina.',
    nav: { work: 'Work', services: 'Services', pricing: 'Pricing', faq: 'FAQ', guide: 'Free guide', call: 'WhatsApp', book: 'Book a call', seePricing: 'See pricing', home: 'Home', cv: 'Resume' },
    hero: {
      status: 'Available for freelance and contract work',
      title: ['AI Engineer who builds', 'real products,', 'end to end'],
      sub: 'I master Claude and modern AI, and I build everything a product needs to ship: Google Play apps, backend, payments and WhatsApp. Before writing code, we work out the business: what pays off, what it costs and what to cut.',
      hello: "Hi, I'm Gabriel",
      helloSub: 'AI Engineer · Founder & CEO of KILO',
      cardBadge: 'Booking open',
      cardTitle: 'Tell me your idea',
      cardSub: 'In 15 minutes we work out what to build, what it costs and how to launch it.',
      cardBtn: 'Book a call',
      cardCall: 'Message me on WhatsApp',
      cardCallSub: 'I reply the same day',
    },
    proof: {
      label: 'KILO, my product, as of October 18, 2026',
      items: [
        { v: '83', l: 'stores signed up in the 6 weeks since launch' },
        { v: '~700', l: 'sales a month recorded by those stores' },
        { v: '1,900+', l: 'commits in 10 months, all mine' },
        { v: 'Google Play', l: 'Android app live' },
      ],
    },
    logosLabel: 'Products I built',
    how: {
      title: ['Business first,', 'then', 'the code'],
      steps: [
        { title: 'We sharpen the idea', desc: 'A 15-minute call. You bring the idea; I tell you what pays off, what is expensive and what can wait.' },
        { title: 'I build with AI', desc: 'Apps, backend, payments, WhatsApp and servers. I use Claude to move fast and review every line.' },
        { title: 'You launch', desc: 'On the web or Google Play, with metrics to see if it works and support afterwards.' },
      ],
      chat: ['Hi! I have an idea for an ordering app', 'Great. Here is the plan with costs', 'Plan_and_costs.pdf', "Perfect, let's start"],
      launched: 'Live on Google Play',
    },
    tags: ['Claude', 'AI agents', 'Automation', 'WhatsApp bots', 'RAG', 'Android apps', 'Google Play', 'SaaS', 'MVPs', 'Business systems', 'Point of sale', 'Payments', 'E-invoicing', 'APIs', 'Next.js', 'Node.js', 'PostgreSQL', 'Servers', 'Business model', 'AI costs'],
    note:
      "Coding since 2022, shipping products to production since 2024. I'm the founder and CEO of KILO, a management and point-of-sale system for neighborhood stores with an app on Google Play: I built it on my own, 1,900+ commits in 10 months. You work directly with me, no middlemen.",
    benefits: {
      pill: 'Why me',
      title: ['I master AI.', 'I build', 'the product.'],
      sub: 'One accountable person who understands both the tech and the business.',
      items: [
        { icon: 'ai', title: 'Claude, every day', desc: 'I design, code and review with Claude. I know where AI saves weeks and where it does not belong.' },
        { icon: 'all', title: 'End to end', desc: 'Android app, web, backend, database, payments, WhatsApp and servers.' },
        { icon: 'business', title: 'Business thinking', desc: 'What to build, what is expensive, what is cheap and what AI will cost you each month.' },
        { icon: 'quality', title: 'My own product, live', desc: 'KILO is on Google Play and stores record real sales with it.' },
        { icon: 'code', title: 'You own the code', desc: 'Code, credentials and docs are yours.' },
        { icon: 'price', title: 'Fixed price', desc: 'You know the cost before we start.' },
      ],
    },
    services: {
      pill: 'Services',
      title: ['What I can', 'do', 'for you'],
      sub: 'For businesses that want their own product, startups that need to ship fast and teams looking for an AI Engineer.',
      items: [
        { icon: 'product', title: 'End-to-end AI products', desc: 'MVPs, SaaS and Android apps published on Google Play. From idea to real users.', tags: ['MVP', 'SaaS', 'Google Play'] },
        { icon: 'bot', title: 'AI automation', desc: 'Claude-powered assistants that answer on WhatsApp, take orders and bookings, and reply with your business data.', tags: ['WhatsApp', 'Agents', 'RAG'] },
        { icon: 'system', title: 'Custom systems', desc: 'Point of sale, inventory, booking and back office, with payments and e-invoicing.', tags: ['Point of sale', 'Payments', 'E-invoicing'] },
        { icon: 'strategy', title: 'Product & AI strategy', desc: 'We sharpen the idea, pick what to build first and estimate AI, server and store costs before spending.', tags: ['Business model', 'Costs', 'Priorities'] },
        { icon: 'team', title: 'Contracts & teams', desc: 'I join your team as an AI Engineer or full stack developer, remote, per project or ongoing.', tags: ['Remote', 'English / Spanish', 'Contract'] },
      ],
      cloudTitle: ['And whatever', 'it takes'],
      cloudSub: 'Backend, payments, servers, store releases and support, under one roof.',
      more: '+ whatever your product needs',
    },
    work: {
      pill: 'Work',
      title: ['Real products,', 'in motion'],
      sub: 'Real screenshots of apps and systems I built. Tap each step to see the screen.',
      kilo: {
        kind: 'My product · SaaS + Android app',
        title: 'KILO',
        desc: "Management and point of sale for neighborhood stores: cash register, inventory, reports, offers, an online store and orders. It ships Kilito, an assistant on the Claude API: one photo creates a product or updates stock and costs from a supplier's invoice. I designed, built and launched it; today it is on Google Play.",
        stats: [
          { v: '83', l: 'stores in 6 weeks' },
          { v: '~700', l: 'sales a month' },
          { v: '1,900+', l: 'commits in 10 months' },
        ],
        steps: ["The store's online shop", 'Order placed', "Today's sales", 'Cash register', 'Products & stock', 'Reports', 'Offers', 'Offer live'],
        site: 'Visit site',
        play: 'Google Play',
      },
      visit: 'Visit site',
      live: 'Live',
      sitesTitle: 'Client websites',
      wallTitle: ['And plenty of', 'landing pages', 'shipped'],
      wallSub: 'Sites and landing pages I designed and put online for businesses in Jujuy and for my own products.',
      more: 'See client websites',
      less: 'See less',
    },
    pricing: {
      pill: 'Pricing',
      title: ['Clear pricing,', 'no surprises'],
      fromLabel: 'From',
      ...prices.en,
    },
    guide: {
      pill: 'Free guide',
      title: ['How to automate your business', 'with AI', 'in 7 days'],
      sub: 'A step-by-step 7-day plan so your business answers, sells and organizes its data with AI. With concrete tools, costs and what not to do.',
      bullets: ['Which tasks to automate first (and which not to)', 'How to build a WhatsApp assistant with your business data', 'What it costs per month, with the math done', 'A printable 7-day checklist'],
      cover: ['Guide', 'Automate your business with AI in 7 days'],
      pages: '14 pages · PDF',
      email: 'Your email',
      name: 'Your name (optional)',
      submit: 'Send me the guide',
      sending: 'Sending…',
      ok: "Done. Here's your guide:",
      download: 'Download the guide (PDF)',
      privacy: 'I only write when I have something useful. Unsubscribe anytime.',
    },
    booking: {
      pill: 'Booking',
      title: ['Book a', '15-minute', 'call'],
      sub: "Pick a day and time, and I'll confirm the call with the video link.",
      embedTitle: "Gabriel Iturre's calendar",
      pick: 'Pick a day',
      times: 'Times (Argentina, GMT-3)',
      name: 'Your name',
      email: 'Your email',
      about: 'What do you want to build?',
      confirm: 'Confirm call',
      sending: 'Booking…',
      ok: "Done! I'll email you to confirm the call.",
      error: "Couldn't book it. Message me on WhatsApp.",
      back: 'Change',
      taken: 'Taken',
    },
    faq: {
      title: ['Frequently', 'asked questions'],
      items: [
        { q: 'What does an AI Engineer do for my business?', a: 'Puts AI to work where it pays off: assistants that answer on WhatsApp, systems that organize orders, bookings or inventory, and apps your customers use. And tells you where it does not belong.' },
        { q: 'Can you help me decide if my idea is worth it?', a: 'Yes. Before coding we look at what problem it solves, who pays, what is expensive, what is cheap and what can wait. Sometimes the best call is to build less.' },
        { q: 'How much does my project cost?', a: "It depends on scope. You'll find starting prices above; after a 15-minute call I send a fixed, written quote within 48 hours." },
        { q: 'How long does it take?', a: 'A landing page, about a week. A website, 1–2 weeks. A custom app or system, 4–12 weeks depending on complexity.' },
        { q: 'Do you take contracts or only projects?', a: 'Both. I can do a fixed project, work on a monthly plan or join your team on contract, remote, in English or Spanish.' },
        { q: 'How do we get started?', a: 'Book a call, tell me the idea and I send a proposal with scope, timeline and price. If it works for you, we sign, you pay the deposit and I start that same week.' },
        { q: 'Who does the work?', a: 'I do, end to end. You always talk to me.' },
        { q: 'How much does running AI cost every month?', a: 'It depends on how many requests your business makes. Before building I give you a monthly estimate with the right model, so the bill has no surprises.' },
        { q: 'Do you publish apps on Google Play and the App Store?', a: 'Yes. I handle everything: developer account, listings, screenshots, policies and release. KILO is already on Google Play.' },
        { q: 'Can you fix a system or website I already have?', a: "Yes. I review the code, tell you what's wrong and what it costs to fix. I also migrate legacy systems to modern stacks." },
        { q: 'How does the monthly plan work?', a: 'You pay a fixed monthly fee and send requests: new features, automations, fixes or screens. I work on one at a time and deliver every few days. Pause or cancel anytime.' },
        { q: 'How do payments work?', a: 'For fixed projects, a deposit and the rest in milestones as I deliver. I accept international payments.' },
        { q: 'Do I own the code?', a: "Yes. At the end you get the source code, credentials and documentation. You're never locked in." },
        { q: 'Do you work with international clients?', a: 'Yes. I work 100% remotely from Jujuy, Argentina, in English or Spanish.' },
        { q: 'What happens after launch?', a: 'I stay with you for support and maintenance: fixing bugs, adding improvements and monitoring that everything runs.' },
      ] as Faq[],
      callTitle: 'Shall we talk on WhatsApp?',
      callBtn: 'Open WhatsApp',
      emailLabel: 'Prefer to email?',
    },
    cta: {
      title: ["Let's see if we're", 'the right fit'],
      aside: '(spoiler: we are)',
      sub: "Book a 15-minute call or message me on WhatsApp and I'll send your plan.",
      whatsapp: 'Message me on WhatsApp',
      waText: "Hi Gabriel, I saw your portfolio and I'd like to talk about a project: ",
    },
    footer: { place: 'Based in Jujuy, Argentina · Working worldwide', cv: 'Resume', rights: 'Gabriel Iturre' },
    dock: { theme: 'Toggle theme', lang: 'Español' },
    showcase: showcaseEn,
    sites: sitesEn,
  },
};

export type SiteContent = (typeof content)['es'];

// ---------- CV / perfil para clientes ----------
export const cv = {
  es: {
    headline: 'AI Engineer de productos con LLM en producción',
    tagline: 'AI Engineer · Productos con LLM en producción · Fundador y CEO de KILO. Programando desde 2022, en producción desde 2024.',
    summary:
      'AI Engineer y desarrollador full stack: programo desde 2022 y llevo productos a producción desde 2024. Fundador y CEO de KILO, sistema de gestión y punto de venta para comercios de barrio con app en Google Play: 83 comercios registrados en las 6 semanas desde el lanzamiento y más de 1.900 commits en 10 meses, todos míos. Construyo apps, sistemas, backend, pagos y automatizaciones con WhatsApp e IA, y ayudo a decidir qué conviene construir y cuánto cuesta.',
    services: [
      { t: 'Producto con IA', d: 'MVPs, SaaS y apps en Google Play.' },
      { t: 'Automatización con IA', d: 'Asistentes con Claude, WhatsApp y RAG.' },
      { t: 'Sistemas a medida', d: 'Punto de venta, turnos, stock, pagos.' },
      { t: 'Estrategia de producto', d: 'Qué construir, en qué orden y a qué costo.' },
      { t: 'Contratos', d: 'AI Engineer o full stack en tu equipo.' },
      { t: 'Arreglos y soporte', d: 'Mejoro, migro y mantengo lo que ya tenés.' },
    ],
    projects: [
      { n: 'KILO', u: 'somoskilo.com', d: 'Gestión y punto de venta con app Android en Google Play. 83 comercios en 6 semanas, ~700 ventas por mes registradas.' },
      { n: 'Chefi', u: 'chefi.zonajujuy.com', d: 'SaaS gastronómico: menú online, pedidos por WhatsApp e impresión en comandera.' },
      { n: 'SLOT · ZonaSalud', u: 'slot.zonajujuy.com', d: 'Turnos, ingreso de pacientes por cola y resúmenes clínicos con IA.' },
      { n: 'Aevum', u: 'aevum.zonajujuy.com', d: 'IA (RAG) que responde preguntas sobre los documentos de una empresa.' },
      { n: 'Prometo', u: 'web.gabriel13iturre.workers.dev', d: 'Hackathon Monad 2026: metas entre amigos con plata en juego, check-in con foto revisado por IA de visión.' },
      { n: 'SUDO · Tu Bondi Jujuy', u: 'sudo.zonajujuy.com', d: 'Ventas sin conexión para supermercados y colectivos en tiempo real (en desarrollo).' },
    ],
    process: ['Llamada de 15 min', 'Propuesta y precio cerrado en 48 h', 'Demos semanales', 'Lanzamiento y soporte'],
    numbers: [
      { v: '83', l: 'comercios en KILO en 6 semanas' },
      { v: '~700', l: 'ventas por mes en KILO' },
      { v: '1.900+', l: 'commits en 10 meses' },
      { v: 'Play Store', l: 'app publicada' },
    ],
    stack: [
      { g: 'IA', i: 'Claude, Codex, OpenAI, Gemini, RAG, agentes' },
      { g: 'Frontend y apps', i: 'React, Next.js, TypeScript, React Native, Android, WordPress' },
      { g: 'Backend', i: 'Node.js, NestJS, PostgreSQL, MongoDB, Supabase, Firebase' },
      { g: 'Infra e integraciones', i: 'Docker, Linux, Coolify, Netlify, Cloudflare, Mercado Pago, Stripe, ARCA, WhatsApp API' },
    ],
    background: [
      { t: 'Fundador y CEO · KILO', p: 'actualidad' },
      { t: 'Full-Stack Engineer · Cheffi', p: '2025 – 2026' },
      { t: 'Estudio propio · ZonaJujuy', p: 'actualidad' },
      { t: 'Programando desde 2022', p: 'en producción desde 2024' },
      { t: 'Analista Programador · UNJu', p: 'en curso' },
    ],
    languages: 'Español nativo · Inglés técnico (B1–B2)',
    labels: {
      what: 'Qué puedo construir para vos',
      projects: 'Proyectos',
      process: 'Cómo trabajo',
      numbers: 'En números',
      stack: 'Tecnologías',
      background: 'Trayectoria',
      languages: 'Idiomas',
      cta: 'Escribime por WhatsApp',
      download: 'Descargar PDF',
      back: 'Volver al sitio',
      other: 'English version',
    },
  },
  en: {
    headline: 'AI Engineer shipping LLM products to production',
    tagline: 'AI Engineer · LLM products in production · Founder & CEO of KILO. Coding since 2022, in production since 2024.',
    summary:
      'AI Engineer and full stack developer: coding since 2022, shipping to production since 2024. Founder and CEO of KILO, a management and point-of-sale system for neighborhood stores with an app on Google Play: 83 stores signed up in the 6 weeks since launch and 1,900+ commits in 10 months, all mine. I build apps, systems, backend, payments and WhatsApp + AI automations, and help decide what is worth building and what it costs.',
    services: [
      { t: 'AI products', d: 'MVPs, SaaS and Google Play apps.' },
      { t: 'AI automation', d: 'Claude assistants, WhatsApp and RAG.' },
      { t: 'Custom systems', d: 'Point of sale, booking, inventory, payments.' },
      { t: 'Product strategy', d: 'What to build, in what order, at what cost.' },
      { t: 'Contracts', d: 'AI Engineer or full stack on your team.' },
      { t: 'Fixes & support', d: 'I improve, migrate and maintain what you have.' },
    ],
    projects: [
      { n: 'KILO', u: 'somoskilo.com', d: 'Management and point of sale with an Android app on Google Play. 83 stores in 6 weeks, ~700 sales a month recorded.' },
      { n: 'Chefi', u: 'chefi.zonajujuy.com', d: 'Restaurant SaaS: online menu, WhatsApp orders and kitchen printing.' },
      { n: 'SLOT · ZonaSalud', u: 'slot.zonajujuy.com', d: 'Booking, patient check-in queues and AI clinical summaries.' },
      { n: 'Aevum', u: 'aevum.zonajujuy.com', d: 'AI (RAG) that answers questions about a company’s documents.' },
      { n: 'Prometo', u: 'web.gabriel13iturre.workers.dev', d: 'Monad 2026 hackathon: goals between friends with money at stake, photo check-ins reviewed by a vision model.' },
      { n: 'SUDO · Tu Bondi Jujuy', u: 'sudo.zonajujuy.com', d: 'Offline point of sale for supermarkets and real-time buses (in development).' },
    ],
    process: ['15-min call', 'Proposal & fixed price in 48 h', 'Weekly demos', 'Launch & support'],
    numbers: [
      { v: '83', l: 'stores on KILO in 6 weeks' },
      { v: '~700', l: 'sales a month on KILO' },
      { v: '1,900+', l: 'commits in 10 months' },
      { v: 'Play Store', l: 'app published' },
    ],
    stack: [
      { g: 'AI', i: 'Claude, Codex, OpenAI, Gemini, RAG, agents' },
      { g: 'Frontend & apps', i: 'React, Next.js, TypeScript, React Native, Android, WordPress' },
      { g: 'Backend', i: 'Node.js, NestJS, PostgreSQL, MongoDB, Supabase, Firebase' },
      { g: 'Infra & integrations', i: 'Docker, Linux, Coolify, Netlify, Cloudflare, Stripe, Mercado Pago, WhatsApp API' },
    ],
    background: [
      { t: 'Founder & CEO · KILO', p: 'now' },
      { t: 'Full-Stack Engineer · Cheffi', p: '2025 – 2026' },
      { t: 'Own studio · ZonaJujuy', p: 'now' },
      { t: 'Coding since 2022', p: 'in production since 2024' },
      { t: 'Programmer Analyst · UNJu', p: 'in progress' },
    ],
    languages: 'Spanish (native) · English (technical, B1–B2)',
    labels: {
      what: 'What I can build for you',
      projects: 'Projects',
      process: 'How I work',
      numbers: 'By the numbers',
      stack: 'Tech',
      background: 'Background',
      languages: 'Languages',
      cta: 'Message me on WhatsApp',
      download: 'Download PDF',
      back: 'Back to site',
      other: 'Versión en español',
    },
  },
};
