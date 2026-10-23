// Fuente única de verdad del sitio: copy, proyectos, precios, FAQ y CV.
// La web, el JSON-LD, /llms.txt y el CV leen todo desde acá.

export type Lang = 'es' | 'en';

export const SITE_URL = 'https://gabrieliturre.tech';

export const contact = {
  name: 'Gabriel Iturre',
  email: 'gabriel13iturre@gmail.com',
  whatsapp: '5493885877934',
  whatsappDisplay: '+54 9 388 587-7934',
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
// Los correos los guarda el Worker de Cloudflare en KV (gabrieliturre-leads) y llegan por email.
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
  // Qué dispositivo marca los pasos cuando hay celular y ventana (por defecto, el celular).
  lead?: 'phone' | 'browser';
  // 'bare': las capturas de escritorio ya traen su propia ventana (app de escritorio), sin barra de navegador.
  frame?: 'bare';
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

// Más proyectos de GitHub: tarjetas con portada diseñada (1200x750) en /public/work/portadas/.
export type Extra = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  cover: string;
  year: string;
  url?: string;
  label?: string;
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
    phone: ['/work/prometo/inicio.webp', '/work/prometo/nueva-promesa.webp', '/work/prometo/sala-de-espera.webp', '/work/prometo/check-in.webp', '/work/prometo/pruebas.webp', '/work/prometo/pozo-repartido.webp', '/work/prometo/desafio.webp'],
    steps: ['Tu saldo en dólares digitales', 'Creás la promesa', 'Tus amigos entran', 'Check-in con foto', 'Las pruebas del grupo', 'Se reparte el pozo', 'Desafío entre amigos'],
    tone: 'violet',
  },
  {
    slug: 'tubondi',
    name: 'Tu Bondi Jujuy',
    kind: 'Transporte en tiempo real',
    year: '2026',
    summary: 'Colectivos de Jujuy en el mapa: app del chofer con GPS, app del pasajero con llegada estimada y panel para la flota.',
    note: 'Panel: capturas reales corriendo en local, con datos de ejemplo. App del pasajero: pantallas diseñadas a partir de su código.',
    tags: ['NestJS', 'PostGIS', 'Socket.io', 'Expo'],
    browser: ['/work/bondi/monitoreo.webp', '/work/bondi/recorridos.webp', '/work/bondi/avisos.webp', '/work/bondi/reportes.webp'],
    phone: ['/work/bondi/app-mapa.webp', '/work/bondi/app-paradas.webp'],
    lead: 'browser',
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
    note: 'El ingreso del paciente es una captura real; recepción, fila e historial son pantallas diseñadas a partir de su código.',
    phone: ['/work/slot/ingreso-paciente.webp', '/work/slot/recepcion.webp', '/work/slot/fila.webp', '/work/slot/historial.webp'],
    browser: ['/work/slot/login-web.webp'],
    steps: ['El paciente se anota solo', 'Recepción: agenda del día', 'Terminal médica: fila de hoy', 'Historial con resumen de IA'],
    tone: 'green',
  },
  {
    slug: 'aevum',
    name: 'Aevum',
    kind: 'IA para empresas',
    year: '2026',
    summary: 'Los manuales y documentos de una empresa respondiendo preguntas con IA, con equipos e invitaciones.',
    tags: ['RAG', 'Pinecone', 'Gemini', 'Next.js'],
    note: 'La landing es real; el chat y la base de conocimiento son pantallas diseñadas a partir de su código.',
    phone: ['/work/aevum/chat.webp', '/work/aevum/conocimiento.webp', '/work/aevum/inicio.webp'],
    scroll: '/work/aevum/landing.webp',
    steps: ['Respuestas con la página exacta', 'Base de conocimiento del equipo', 'La landing del producto'],
    tone: 'ink',
  },
  {
    slug: 'sudo',
    name: 'SUDO',
    kind: 'Ventas y stock para supermercados',
    year: '2025',
    summary: 'Sistema de ventas que sigue funcionando sin internet, con app de escritorio e impresión de tickets térmicos.',
    tags: ['Angular', 'Electron', 'MongoDB', 'ESC/POS'],
    note: 'La app de escritorio está rediseñada a partir de su código: venta, reportes y cajas usan sus funciones reales con datos de ejemplo.',
    browser: ['/work/sudo/app-venta.webp', '/work/sudo/app-reportes.webp', '/work/sudo/app-caja.webp'],
    frame: 'bare',
    steps: ['Venta con balanza y pagos mixtos', 'Reporte financiero por caja', 'Apertura y cierre de cajas'],
    tone: 'orange',
  },
  {
    slug: 'zonasalud',
    name: 'ZonaSalud',
    kind: 'Gestión de consultorios',
    year: '2025',
    summary: 'Turnos, historia clínica, caja con coseguros y recetas por WhatsApp para consultorios médicos.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL'],
    note: 'Pantallas de la app rediseñadas a partir de su código, con datos de ejemplo.',
    phone: ['/work/salud/turnos.webp', '/work/salud/ficha.webp', '/work/salud/caja.webp', '/work/salud/receta-whatsapp.webp'],
    steps: ['Turnos del día', 'Historia clínica del paciente', 'Caja y coseguros', 'Receta por WhatsApp'],
    tone: 'blue',
  },
  {
    slug: 'expojuy',
    name: 'ExpoJuy Conecta',
    kind: 'App para una feria',
    year: '2026',
    status: 'Prototipo',
    summary: 'La feria en el celular: mapa con rutas accesibles hasta cada stand, agenda por día y una sección personal con tu próxima actividad.',
    note: 'Prototipo navegable presentado a la convocatoria de la ExpoJuy 2026; no es la plataforma oficial. Capturas reales.',
    tags: ['Astro', 'React', 'Mapa interactivo', 'Rutas accesibles'],
    phone: ['/work/expojuy/portada.webp', '/work/expojuy/mapa.webp', '/work/expojuy/agenda.webp', '/work/expojuy/mi-expo.webp'],
    browser: ['/work/expojuy/web.webp'],
    steps: ['Portada de la feria', 'Mapa con rutas a cada stand', 'Agenda por día', 'Mi Expo: tu próxima actividad'],
    tone: 'violet',
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
    summary: "Jujuy's buses on a map: a driver app with GPS, a rider app with arrival times and a fleet dashboard.",
    note: 'Dashboard: real screenshots running locally, with sample data. Rider app: screens designed from its code.',
    steps: ['Fleet monitoring', 'Route editor', 'Rider alerts', 'Reports by line'],
  },
  slot: {
    kind: 'AI software for clinics',
    summary: 'Scheduling, patient check-in with a waiting queue, AI summaries for the doctor and WhatsApp booking.',
    note: 'Patient check-in is a real screenshot; reception, queue and records are screens designed from its code.',
    steps: ['Patients check themselves in', "Reception: today's schedule", "Doctor's terminal: today's queue", 'Records with an AI summary'],
  },
  aevum: {
    kind: 'AI for companies',
    summary: "A company's manuals and documents answering questions with AI, with teams and invitations.",
    note: 'The landing page is real; chat and knowledge base are screens designed from its code.',
    steps: ['Answers with the exact page', "The team's knowledge base", 'The product landing page'],
  },
  sudo: {
    kind: 'Sales & inventory for supermarkets',
    summary: 'A point of sale that keeps working offline, with a desktop app and thermal ticket printing.',
    note: 'The desktop app is redesigned from its code: sales, reports and registers use its real features with sample data.',
    steps: ['Sale with scale and split payments', 'Financial report by register', 'Opening and closing registers'],
  },
  zonasalud: {
    kind: 'Clinic management',
    summary: 'Appointments, medical records, a cash register with co-pays and prescriptions via WhatsApp for medical practices.',
    note: 'App screens redesigned from its code, with sample data.',
    steps: ["Today's appointments", "The patient's medical record", 'Register and co-pays', 'Prescription via WhatsApp'],
  },
  expojuy: {
    kind: 'App for a trade fair',
    status: 'Prototype',
    summary: 'The fair on your phone: a map with accessible routes to every stand, a day-by-day agenda and a personal section with your next activity.',
    note: 'Clickable prototype submitted to the ExpoJuy 2026 call; not the official platform. Real screenshots.',
    tags: ['Astro', 'React', 'Interactive map', 'Accessible routes'],
    steps: ['The fair home page', 'Map with routes to every stand', 'Agenda by day', 'My Expo: your next activity'],
  },
};
const showcaseEn: Showcase[] = showcaseEs.map((p) => ({ ...p, ...showcaseEnPatch[p.slug] }));

// Webs para clientes (se muestran con «Ver más proyectos»).
const sitesEs: Project[] = [
  { slug: 'intimates', name: 'Inti Mates', kind: 'E-commerce', year: '2026', summary: 'Tienda online de mates artesanales.', image: '/work/intimates.webp', tags: ['E-commerce', 'Next.js'] },
  { slug: 'petit', name: 'Peluquería Petit', kind: 'Web + turnos', year: '2025', summary: 'Sitio con SEO local y reservas online.', image: '/work/petit.webp', tags: ['Web', 'SEO local'] },
  { slug: 'zonajujuy', name: 'ZonaJujuy', kind: 'Agencia de software', year: '2024', summary: 'Mi agencia: sistemas, apps y webs para empresas.', image: '/work/zonajujuy.webp', tags: ['Next.js', 'Branding'] },
  { slug: 'victor', name: 'Viajes con Víctor', kind: 'Landing de servicios', year: '2025', summary: 'Landing que lleva las consultas a WhatsApp.', image: '/work/victor.webp', tags: ['Landing', 'WhatsApp'] },
  { slug: 'burguesita', name: 'La Burguesita', kind: 'Web + menú digital', year: '2025', summary: 'Menú online con pedidos directos por WhatsApp.', image: '/work/burguesita.webp', tags: ['Web', 'Menú digital'] },
];
const sitesEnPatch: Record<string, Partial<Project>> = {
  intimates: { summary: 'Online store for handcrafted mate gourds.' },
  petit: { name: 'Petit Hair Salon', kind: 'Website + booking', summary: 'Local-SEO website with online booking.' },
  zonajujuy: { kind: 'Software agency', summary: 'My agency: systems, apps and websites for companies.' },
  victor: { name: 'Rides with Víctor', kind: 'Service landing page', summary: 'Landing page that sends inquiries to WhatsApp.' },
  burguesita: { kind: 'Website + digital menu', summary: 'Online menu with direct WhatsApp orders.' },
};
const sitesEn: Project[] = sitesEs.map((p) => ({ ...p, ...sitesEnPatch[p.slug] }));

// Más proyectos de GitHub. Van sin link: los deploys de práctica ya no representan el trabajo actual.
const extrasEs: Extra[] = [
  { slug: 'ghostcut', name: 'GhostCut', kind: 'Herramienta web', year: '2025', summary: 'Convierte, recorta y comprime imágenes en el navegador, sin subirlas a ningún servidor.', cover: '/work/portadas/ghostcut.webp' },
  { slug: 'detaquito', name: 'De Taquito Ligas', kind: 'Ligas de fútbol amateur', year: '2025', summary: 'Partidos con formación en cancha, jugadores y tablas de goleadores, asistencias y tarjetas.', cover: '/work/portadas/de-taquito.webp' },
  { slug: 'serenacita', name: 'SerenaCita', kind: 'Turnos online', year: '2025', summary: 'Reserva de turnos en seis pasos con seña del 50% y un panel con agenda, clientes y reportes.', cover: '/work/portadas/serenacita.webp' },
  { slug: 'opticavistas', name: 'OpticaVistas', kind: 'Gestión para ópticas', year: '2025', summary: 'Ventas con descuentos automáticos por cliente, stock por categoría, egresos y reportes.', cover: '/work/portadas/opticavistas.webp' },
  { slug: 'empleoflash', name: 'Empleo Flash', kind: 'Bolsa de empleo', year: '2024', summary: 'Sitio con ofertas, postulaciones y registro de candidatos.', cover: '/work/portadas/empleo-flash.webp' },
];
const extrasEnPatch: Record<string, Partial<Extra>> = {
  serenacita: { kind: 'Online booking', summary: 'Six-step booking with a 50% deposit and a dashboard with schedule, clients and reports.' },
  detaquito: { kind: 'Amateur football leagues', summary: 'Matches with on-pitch line-ups, players and tables for top scorers, assists and cards.' },
  opticavistas: { kind: 'Optician store management', summary: 'Sales with automatic per-customer discounts, stock by category, expenses and reports.' },
  ghostcut: { kind: 'Web tool', summary: 'Convert, crop and compress images in the browser, without uploading them anywhere.' },
  empleoflash: { kind: 'Job board', summary: 'Website with job offers, applications and candidate sign-up.' },
};
const extrasEn: Extra[] = extrasEs.map((p) => ({ ...p, ...extrasEnPatch[p.slug] }));

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
    title: 'Gabriel Iturre · AI Engineer | Tu negocio vendiendo por WhatsApp con IA',
    description:
      'Te construyo un asistente con IA que atiende, vende y cobra por WhatsApp las 24 horas, en 14 días y con precio cerrado. AI Engineer, fundador y CEO de KILO. También apps, sistemas a medida y contratos como AI Engineer. Desde Jujuy, Argentina.',
    nav: { work: 'Proyectos', services: 'Servicios', pricing: 'Precios', faq: 'Preguntas', guide: 'Guía gratis', offer: 'La oferta', call: 'WhatsApp', book: 'Diagnóstico gratis', seePricing: 'Ver precios', home: 'Inicio', cv: 'CV' },
    hero: {
      status: 'Para negocios que venden por WhatsApp',
      title: ['Tu negocio atiende y vende', 'solo,', 'las 24 horas, con IA'],
      sub: 'Te construyo un asistente con IA que contesta al instante, toma pedidos y turnos, cobra con link de pago y te avisa sólo cuando hace falta una persona. En 14 días y con precio cerrado.',
      points: ['Listo en 14 días', 'Vos no tocás nada técnico', 'Precio cerrado', 'La misma IA que uso en KILO'],
      hello: 'Hola, soy Gabriel',
      helloSub: 'AI Engineer · Fundador y CEO de KILO',
      cardBadge: 'Diagnóstico gratis',
      cardTitle: 'Te digo qué automatizar primero',
      cardSub: 'En 15 minutos por WhatsApp: qué te conviene automatizar, cuánto te ahorra y cuánto cuesta. Me contrates o no.',
      cardBtn: 'Quiero mi diagnóstico gratis',
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
    problem: {
      pill: 'El problema',
      title: ['Cada mensaje que contestás tarde', 'es una venta', 'para otro'],
      items: [
        { title: 'Contestás lo mismo todo el día', desc: 'Precios, horarios, si hay stock, si hacen envíos. Las mismas 20 preguntas, una y otra vez.' },
        { title: 'Los pedidos se pierden', desc: 'Entre audios, fotos y capturas, alguno se olvida o sale mal. Y el cliente no vuelve.' },
        { title: 'A la noche nadie atiende', desc: 'El cliente escribe a las 23 h o un domingo. Si no le contestás, le compra a otro.' },
        { title: 'No sabés cuánto vendiste', desc: 'Hasta fin de mes no sabés qué se vende, qué no y cuánto ganaste de verdad.' },
      ],
      close: 'No te falta esfuerzo: te falta un sistema que trabaje mientras vos atendés el negocio.',
    },
    offer: {
      pill: 'La oferta',
      name: 'Sistema de Ventas por WhatsApp con IA',
      title: ['Tu WhatsApp', 'vendiendo solo', 'en 14 días'],
      sub: 'Todo lo que tu negocio necesita para atender, vender y cobrar por WhatsApp sin que vivas pegado al celular.',
      items: [
        { title: 'Asistente con IA entrenado con tu negocio', desc: 'Conoce tus precios, horarios, catálogo y las preguntas que más te hacen. Contesta en segundos, a cualquier hora.' },
        { title: 'Pedidos y turnos ordenados', desc: 'Toma el pedido o el turno completo y te llega ordenado a un panel. Nada se pierde entre audios.' },
        { title: 'Cobro dentro de la conversación', desc: 'Manda el link de pago de Mercado Pago y te avisa cuando el cliente pagó.' },
        { title: 'Una persona cuando hace falta', desc: 'Si el cliente lo pide o algo se complica, te pasa la conversación con todo el contexto.' },
        { title: 'Resumen semanal', desc: 'Cuántas consultas respondió, cuántos pedidos tomó y qué te preguntan más.' },
        { title: '30 días de ajustes incluidos', desc: 'Después de lanzar, lo afino con conversaciones reales hasta que conteste como vos.' },
      ],
      bonusTitle: 'Y además, gratis',
      bonus: [
        { title: 'Diagnóstico de 15 minutos', desc: 'Antes de pagar nada: qué te conviene automatizar primero y cuánto te ahorra. Me contrates o no.' },
        { title: 'Guía «Automatizá tu negocio con IA en 7 días»', desc: 'El paso a paso que uso, para que entiendas qué estás comprando.' },
      ],
      // PROPUESTA: precio y garantía a confirmar con Gabriel antes de publicar.
      priceLabel: 'Inversión',
      price: 'USD 690',
      priceNote: 'Pago único, precio cerrado. Después, USD 59 por mes de mantenimiento y uso de la IA.',
      guaranteeTitle: 'Garantía de funcionamiento',
      guarantee: 'Si a los 14 días el asistente no está atendiendo a tus clientes reales, sigo trabajando sin cobrarte un peso más hasta que funcione.',
      scarcity: 'Lo construyo yo, uno por uno. Por eso tomo pocos negocios por mes.',
      cta: 'Quiero mi diagnóstico gratis',
      ctaSub: 'Te respondo hoy por WhatsApp. Sin compromiso.',
      waText: 'Hola Gabriel, quiero el diagnóstico gratis para mi negocio. Mi negocio es: ',
    },
    how: {
      title: ['Así de simple:', 'tres pasos', ''],
      steps: [
        { title: 'Diagnóstico gratis', desc: 'Me escribís por WhatsApp, te hago 5 preguntas y te digo qué automatizar primero y cuánto te ahorra.' },
        { title: 'Lo construyo en 14 días', desc: 'Cargo tus precios, horarios y preguntas frecuentes, lo conecto a tu WhatsApp y lo probamos juntos con mensajes reales.' },
        { title: 'Tu WhatsApp vende solo', desc: 'Lanzamos, medimos cuántas consultas responde sin vos y lo ajusto durante 30 días.' },
      ],
      chat: ['Hola! Pierdo ventas porque no llego a contestar', 'Te armo el asistente. Acá va el plan', 'Plan_y_costos.pdf', '¡Dale, arranquemos!'],
      launched: 'Publicado en Google Play',
    },
    tags: ['Claude', 'Agentes de IA', 'Automatización', 'Bots de WhatsApp', 'RAG', 'Apps Android', 'Google Play', 'SaaS', 'MVPs', 'Sistemas de gestión', 'Punto de venta', 'Mercado Pago', 'Facturación ARCA', 'APIs', 'Next.js', 'Node.js', 'PostgreSQL', 'Servidores', 'Modelo de negocio', 'Costos de IA'],
    note:
      'Programo desde 2022 y construyo productos en producción desde 2024. Soy fundador y CEO de KILO, un sistema de gestión y punto de venta para todo tipo de comercio, con multisucursal, multiempleado y app en Google Play: lo programé solo, más de 1.900 commits en 10 meses. Trabajás directo conmigo, sin intermediarios.',
    benefits: {
      pill: 'Por qué yo',
      title: ['No te vendo una idea.', 'Ya funciona', 'en mi propio producto.'],
      sub: 'KILO está en Google Play y 83 comercios se registraron en sus primeras 6 semanas. Lo construí yo, con la misma IA que voy a usar para tu negocio.',
      items: [
        { icon: 'ai', image: '/work/ilustraciones/claude.webp', title: 'Claude, todos los días', desc: 'Diseño, programo y reviso con Claude. Sé dónde la IA ahorra semanas y dónde no conviene usarla.' },
        { icon: 'all', image: '/work/ilustraciones/punta.webp', title: 'De punta a punta', desc: 'App Android, web, backend, base de datos, pagos, WhatsApp y servidores.' },
        { icon: 'business', image: '/work/ilustraciones/negocio.webp', title: 'Pienso el negocio', desc: 'Qué conviene construir, qué es caro, qué es barato y cuánto te va a costar la IA por mes.' },
        { icon: 'quality', image: '/work/ilustraciones/calle.webp', title: 'Producto propio en la calle', desc: 'KILO está en Google Play y los comercios registran ventas reales con él.' },
        { icon: 'code', image: '/work/ilustraciones/codigo.webp', title: 'El código es tuyo', desc: 'Te llevás código, accesos y documentación.' },
        { icon: 'price', image: '/work/ilustraciones/precio.webp', title: 'Precio cerrado', desc: 'Sabés cuánto pagás antes de empezar.' },
      ],
    },
    services: {
      pill: 'Servicios',
      title: ['¿Necesitás', 'algo más grande?', ''],
      sub: 'Apps, sistemas a medida o un AI Engineer en tu equipo. También lo hago, con el mismo precio cerrado.',
      items: [
        { icon: 'product', title: 'Producto con IA de punta a punta', desc: 'MVPs, SaaS y apps Android publicadas en Google Play. De la idea a usuarios reales.', tags: ['MVP', 'SaaS', 'Google Play'] },
        { icon: 'bot', title: 'Automatización con IA', desc: 'Asistentes con Claude que atienden por WhatsApp, toman pedidos y turnos, y responden con los datos de tu negocio.', tags: ['WhatsApp', 'Agentes', 'RAG'] },
        { icon: 'system', title: 'Sistemas a medida', desc: 'Punto de venta, stock, turnos y gestión, con cobros por Mercado Pago y facturación electrónica.', tags: ['Punto de venta', 'Mercado Pago', 'ARCA'] },
        { icon: 'strategy', title: 'Estrategia de producto e IA', desc: 'Pulimos la idea, elegimos qué construir primero y estimamos costos de IA, servidores y tiendas antes de gastar.', tags: ['Modelo de negocio', 'Costos', 'Prioridades'] },
        { icon: 'team', title: 'Contratos y equipos', desc: 'Me sumo a tu equipo como AI Engineer o full stack, remoto, por proyecto o de forma continua.', tags: ['Remoto', 'Español / inglés', 'Por contrato'] },
        { icon: 'web', image: '/work/ilustraciones/wordpress.webp', title: 'Webs y WordPress', desc: 'Landings, sitios y tiendas online, en código o en WordPress, con SEO local y las consultas directo a tu WhatsApp.', tags: ['WordPress', 'Landing pages', 'SEO local'] },
      ],
      cloudTitle: ['Y todo lo que', 'haga falta'],
      cloudSub: 'Backend, pagos, servidores, publicación en tiendas y soporte, bajo un mismo techo.',
      more: '+ lo que tu producto necesite',
    },
    work: {
      pill: 'Proyectos',
      title: ['Productos reales,', 'en movimiento'],
      sub: 'Capturas reales y pantallas diseñadas sobre el código de cada proyecto. Tocá cada paso para verlo.',
      kilo: {
        kind: 'Mi producto · SaaS + app Android',
        title: 'KILO',
        desc: 'Sistema de gestión y punto de venta para todo tipo de comercio, con multisucursal y multiempleado: caja, stock, reportes, ofertas, tienda online y pedidos. Trae a Kilito, un asistente sobre la API de Claude: con una foto carga un producto o actualiza stock y costos desde la factura del proveedor. Lo diseñé, lo programé y lo lancé; hoy está en Google Play.',
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
      extrasTitle: ['Más', 'proyectos', 'en GitHub'],
      extrasSub: 'Otros sistemas y herramientas de mi GitHub. Las portadas están diseñadas a partir de lo que cada uno hace de verdad.',
      open: 'Abrir',
      wallTitle: ['Y muchas', 'landings', 'publicadas'],
      wallSub: 'Sitios y landings que diseñé y puse en línea para negocios de Jujuy y para mis productos.',
      more: 'Ver webs para clientes',
      less: 'Ver menos',
    },
    pricing: {
      pill: 'Otros proyectos',
      title: ['Apps, sistemas y webs', 'con precio cerrado'],
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
        { q: '¿Y si mis clientes no quieren hablar con un asistente?', a: 'Avisa que es un asistente y, si el cliente lo pide o se complica, te pasa la conversación. La mayoría sólo quiere una respuesta rápida: precio, horario o si hay stock.' },
        { q: '¿Tengo que saber de tecnología?', a: 'No. Me pasás tus precios, horarios y las preguntas que más te hacen. Yo me encargo del resto y te muestro cómo usar el panel en 15 minutos.' },
        { q: '¿Y si no funciona?', a: 'Si a los 14 días el asistente no está atendiendo a tus clientes reales, sigo trabajando sin cobrarte más hasta que funcione.' },
        { q: '¿Cuánto cuesta por mes?', a: 'El mantenimiento mensual cubre el uso de la IA y los ajustes. Antes de empezar te paso el número exacto según cuántas consultas recibe tu negocio, para que no haya sorpresas.' },
        { q: '¿Qué hace un AI Engineer por mi negocio?', a: 'Pone la IA a trabajar donde rinde: asistentes que atienden por WhatsApp, sistemas que ordenan pedidos, turnos o stock, y apps que tus clientes usan. Y te dice dónde no conviene usarla.' },
        { q: '¿Cuánto cuesta mi proyecto?', a: 'Depende del alcance. Tenés precios de partida arriba; después de una llamada de 15 minutos te mando un presupuesto cerrado por escrito en 48 horas.' },
        { q: '¿Cuánto tarda?', a: 'Una landing, alrededor de una semana. Un sitio web, 1 a 2 semanas. Una app o un sistema a medida, entre 4 y 12 semanas según la complejidad.' },
        { q: '¿Trabajás por contrato o sólo por proyecto?', a: 'Las dos cosas. Puedo hacer un proyecto cerrado, trabajar con un plan mensual o sumarme a tu equipo por contrato, remoto, en español o en inglés.' },
        { q: '¿Cómo empezamos?', a: 'Me escribís por WhatsApp y hacemos el diagnóstico gratis. Si te sirve, te mando la propuesta con precio cerrado, pagás el anticipo y arranco esa misma semana.' },
        { q: '¿Quién hace el trabajo?', a: 'Yo, de punta a punta. Siempre hablás conmigo.' },
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
      title: ['Tu próximo cliente', 'ya te está escribiendo.'],
      aside: '¿Quién le contesta?',
      sub: 'Escribime por WhatsApp y en 15 minutos te digo qué automatizar primero. Gratis y sin compromiso.',
      whatsapp: 'Quiero mi diagnóstico gratis',
      waText: 'Hola Gabriel, quiero el diagnóstico gratis para mi negocio. Mi negocio es: ',
    },
    footer: { place: 'Desde Jujuy, Argentina · Para todo el mundo', cv: 'CV', rights: 'Gabriel Iturre' },
    dock: { theme: 'Cambiar tema', lang: 'English' },
    showcase: showcaseEs,
    sites: sitesEs,
    extras: extrasEs,
  },
  en: {
    lang: 'en' as Lang,
    title: 'Gabriel Iturre · AI Engineer | Your business selling on WhatsApp with AI',
    description:
      'I build an AI assistant that answers, sells and collects payments on WhatsApp 24/7, in 14 days at a fixed price. AI Engineer, founder and CEO of KILO. Also apps, custom systems and contract work as an AI Engineer. From Jujuy, Argentina.',
    nav: { work: 'Work', services: 'Services', pricing: 'Pricing', faq: 'FAQ', guide: 'Free guide', offer: 'The offer', call: 'WhatsApp', book: 'Free assessment', seePricing: 'See pricing', home: 'Home', cv: 'Resume' },
    hero: {
      status: 'For businesses that sell on WhatsApp',
      title: ['Your business answers and sells', 'on its own,', '24/7, with AI'],
      sub: "I build an AI assistant that replies instantly, takes orders and bookings, collects payments with a link and only calls you when a person is needed. In 14 days, at a fixed price.",
      points: ['Live in 14 days', 'No tech work on your side', 'Fixed price', 'The same AI I use in KILO'],
      hello: "Hi, I'm Gabriel",
      helloSub: 'AI Engineer · Founder & CEO of KILO',
      cardBadge: 'Free assessment',
      cardTitle: "I'll tell you what to automate first",
      cardSub: '15 minutes on WhatsApp: what to automate, what it saves you and what it costs. Whether you hire me or not.',
      cardBtn: 'Get my free assessment',
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
    problem: {
      pill: 'The problem',
      title: ['Every message you answer late', 'is a sale', 'for someone else'],
      items: [
        { title: 'You answer the same thing all day', desc: 'Prices, hours, stock, delivery. The same 20 questions, over and over.' },
        { title: 'Orders get lost', desc: 'Between voice notes, photos and screenshots, some get forgotten or go wrong. And that customer does not come back.' },
        { title: 'Nobody answers at night', desc: 'Customers write at 11 pm or on a Sunday. If you do not reply, they buy elsewhere.' },
        { title: "You don't know what you sold", desc: "Until the end of the month you don't know what sells, what doesn't and what you really made." },
      ],
      close: "It's not a lack of effort: you need a system that works while you run the business.",
    },
    offer: {
      pill: 'The offer',
      name: 'AI WhatsApp Sales System',
      title: ['Your WhatsApp', 'selling on its own', 'in 14 days'],
      sub: 'Everything your business needs to answer, sell and collect payments on WhatsApp without living on your phone.',
      items: [
        { title: 'An AI assistant trained on your business', desc: 'It knows your prices, hours, catalog and top questions. Replies in seconds, any time.' },
        { title: 'Orders and bookings, organized', desc: 'It takes the full order or booking and drops it into a dashboard. Nothing gets lost in voice notes.' },
        { title: 'Payment inside the chat', desc: 'Sends a payment link and lets you know when the customer has paid.' },
        { title: 'A person when needed', desc: 'If the customer asks or things get tricky, it hands you the chat with full context.' },
        { title: 'Weekly summary', desc: 'How many questions it answered, how many orders it took and what people ask most.' },
        { title: '30 days of tuning included', desc: 'After launch I refine it with real conversations until it answers like you.' },
      ],
      bonusTitle: 'Plus, free',
      bonus: [
        { title: '15-minute assessment', desc: 'Before you pay anything: what to automate first and what it saves you. Whether you hire me or not.' },
        { title: 'Guide: "Automate your business with AI in 7 days"', desc: 'The step by step I use, so you understand what you are buying.' },
      ],
      priceLabel: 'Investment',
      price: 'USD 690',
      priceNote: 'One-time, fixed price. Then USD 59 a month for maintenance and AI usage.',
      guaranteeTitle: 'Working guarantee',
      guarantee: "If after 14 days the assistant isn't answering your real customers, I keep working at no extra cost until it does.",
      scarcity: 'I build each one myself. That is why I take on few businesses a month.',
      cta: 'Get my free assessment',
      ctaSub: 'I reply today on WhatsApp. No commitment.',
      waText: "Hi Gabriel, I'd like the free assessment for my business. My business is: ",
    },
    how: {
      title: ['This simple:', 'three steps', ''],
      steps: [
        { title: 'Free assessment', desc: 'You message me on WhatsApp, I ask 5 questions and tell you what to automate first and what it saves you.' },
        { title: 'I build it in 14 days', desc: 'I load your prices, hours and FAQs, connect it to your WhatsApp and we test it together with real messages.' },
        { title: 'Your WhatsApp sells on its own', desc: 'We launch, measure how many questions it answers without you and I tune it for 30 days.' },
      ],
      chat: ["Hi! I'm losing sales because I can't reply in time", "I'll build your assistant. Here's the plan", 'Plan_and_costs.pdf', "Great, let's start!"],
      launched: 'Live on Google Play',
    },
    tags: ['Claude', 'AI agents', 'Automation', 'WhatsApp bots', 'RAG', 'Android apps', 'Google Play', 'SaaS', 'MVPs', 'Business systems', 'Point of sale', 'Payments', 'E-invoicing', 'APIs', 'Next.js', 'Node.js', 'PostgreSQL', 'Servers', 'Business model', 'AI costs'],
    note:
      "Coding since 2022, shipping products to production since 2024. I'm the founder and CEO of KILO, a management and point-of-sale system for any kind of store, with multi-branch, multi-staff support and an app on Google Play: I built it on my own, 1,900+ commits in 10 months. You work directly with me, no middlemen.",
    benefits: {
      pill: 'Why me',
      title: ["I'm not selling an idea.", 'It already works', 'in my own product.'],
      sub: 'KILO is on Google Play and 83 stores signed up in its first 6 weeks. I built it myself, with the same AI I will use for your business.',
      items: [
        { icon: 'ai', image: '/work/ilustraciones/claude.webp', title: 'Claude, every day', desc: 'I design, code and review with Claude. I know where AI saves weeks and where it does not belong.' },
        { icon: 'all', image: '/work/ilustraciones/punta.webp', title: 'End to end', desc: 'Android app, web, backend, database, payments, WhatsApp and servers.' },
        { icon: 'business', image: '/work/ilustraciones/negocio.webp', title: 'Business thinking', desc: 'What to build, what is expensive, what is cheap and what AI will cost you each month.' },
        { icon: 'quality', image: '/work/ilustraciones/calle.webp', title: 'My own product, live', desc: 'KILO is on Google Play and stores record real sales with it.' },
        { icon: 'code', image: '/work/ilustraciones/codigo.webp', title: 'You own the code', desc: 'Code, credentials and docs are yours.' },
        { icon: 'price', image: '/work/ilustraciones/precio.webp', title: 'Fixed price', desc: 'You know the cost before we start.' },
      ],
    },
    services: {
      pill: 'Services',
      title: ['Need', 'something bigger?', ''],
      sub: 'Apps, custom systems or an AI Engineer on your team. I do that too, at the same fixed price.',
      items: [
        { icon: 'product', title: 'End-to-end AI products', desc: 'MVPs, SaaS and Android apps published on Google Play. From idea to real users.', tags: ['MVP', 'SaaS', 'Google Play'] },
        { icon: 'bot', title: 'AI automation', desc: 'Claude-powered assistants that answer on WhatsApp, take orders and bookings, and reply with your business data.', tags: ['WhatsApp', 'Agents', 'RAG'] },
        { icon: 'system', title: 'Custom systems', desc: 'Point of sale, inventory, booking and back office, with payments and e-invoicing.', tags: ['Point of sale', 'Payments', 'E-invoicing'] },
        { icon: 'strategy', title: 'Product & AI strategy', desc: 'We sharpen the idea, pick what to build first and estimate AI, server and store costs before spending.', tags: ['Business model', 'Costs', 'Priorities'] },
        { icon: 'team', title: 'Contracts & teams', desc: 'I join your team as an AI Engineer or full stack developer, remote, per project or ongoing.', tags: ['Remote', 'English / Spanish', 'Contract'] },
        { icon: 'web', image: '/work/ilustraciones/wordpress.webp', title: 'Websites & WordPress', desc: 'Landing pages, websites and online stores, hand-coded or on WordPress, with local SEO and inquiries straight to your WhatsApp.', tags: ['WordPress', 'Landing pages', 'Local SEO'] },
      ],
      cloudTitle: ['And whatever', 'it takes'],
      cloudSub: 'Backend, payments, servers, store releases and support, under one roof.',
      more: '+ whatever your product needs',
    },
    work: {
      pill: 'Work',
      title: ['Real products,', 'in motion'],
      sub: 'Real screenshots and screens designed from each project\'s code. Tap each step to see it.',
      kilo: {
        kind: 'My product · SaaS + Android app',
        title: 'KILO',
        desc: "Management and point of sale for any kind of store, with multi-branch and multi-staff support: cash register, inventory, reports, offers, an online store and orders. It ships Kilito, an assistant on the Claude API: one photo creates a product or updates stock and costs from a supplier's invoice. I designed, built and launched it; today it is on Google Play.",
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
      extrasTitle: ['More', 'projects', 'on GitHub'],
      extrasSub: 'Other systems and tools from my GitHub. Each cover is designed from what the project really does.',
      open: 'Open',
      wallTitle: ['And plenty of', 'landing pages', 'shipped'],
      wallSub: 'Sites and landing pages I designed and put online for businesses in Jujuy and for my own products.',
      more: 'See client websites',
      less: 'See less',
    },
    pricing: {
      pill: 'Other projects',
      title: ['Apps, systems and websites', 'at a fixed price'],
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
        { q: "What if my customers don't want to talk to an assistant?", a: "It says it's an assistant and, if the customer asks or things get tricky, hands you the chat. Most people just want a quick answer: price, hours or stock." },
        { q: 'Do I need to know tech?', a: "No. You send me your prices, hours and the questions you get most. I handle the rest and show you the dashboard in 15 minutes." },
        { q: "What if it doesn't work?", a: "If after 14 days the assistant isn't answering your real customers, I keep working at no extra cost until it does." },
        { q: 'What does it cost per month?', a: 'The monthly maintenance covers AI usage and tuning. Before we start I give you the exact number based on how many messages your business gets, so there are no surprises.' },
        { q: 'What does an AI Engineer do for my business?', a: 'Puts AI to work where it pays off: assistants that answer on WhatsApp, systems that organize orders, bookings or inventory, and apps your customers use. And tells you where it does not belong.' },
        { q: 'How much does my project cost?', a: "It depends on scope. You'll find starting prices above; after a 15-minute call I send a fixed, written quote within 48 hours." },
        { q: 'How long does it take?', a: 'A landing page, about a week. A website, 1–2 weeks. A custom app or system, 4–12 weeks depending on complexity.' },
        { q: 'Do you take contracts or only projects?', a: 'Both. I can do a fixed project, work on a monthly plan or join your team on contract, remote, in English or Spanish.' },
        { q: 'How do we get started?', a: 'Message me on WhatsApp and we do the free assessment. If it fits, I send a fixed-price proposal, you pay the deposit and I start that same week.' },
        { q: 'Who does the work?', a: 'I do, end to end. You always talk to me.' },
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
      title: ['Your next customer', 'is messaging you right now.'],
      aside: "Who's answering?",
      sub: "Message me on WhatsApp and in 15 minutes I'll tell you what to automate first. Free, no commitment.",
      whatsapp: 'Get my free assessment',
      waText: "Hi Gabriel, I'd like the free assessment for my business. My business is: ",
    },
    footer: { place: 'Based in Jujuy, Argentina · Working worldwide', cv: 'Resume', rights: 'Gabriel Iturre' },
    dock: { theme: 'Toggle theme', lang: 'Español' },
    showcase: showcaseEn,
    sites: sitesEn,
    extras: extrasEn,
  },
};

export type SiteContent = (typeof content)['es'];

// ---------- CV / perfil para clientes ----------
export const cv = {
  es: {
    headline: 'AI Engineer de productos con LLM en producción',
    tagline: 'AI Engineer · Productos con LLM en producción · Fundador y CEO de KILO. Programando desde 2022, en producción desde 2024.',
    summary:
      'AI Engineer y desarrollador full stack: programo desde 2022 y llevo productos a producción desde 2024. Fundador y CEO de KILO, sistema de gestión y punto de venta para todo tipo de comercio, con multisucursal, multiempleado y app en Google Play: 83 comercios registrados en las 6 semanas desde el lanzamiento y más de 1.900 commits en 10 meses, todos míos. Construyo apps, sistemas, backend, pagos y automatizaciones con WhatsApp e IA, y ayudo a decidir qué conviene construir y cuánto cuesta.',
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
      { n: 'SUDO · Tu Bondi Jujuy', u: 'sudo.zonajujuy.com', d: 'Ventas sin conexión para supermercados y colectivos en tiempo real.' },
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
      { t: 'Fundador y CEO · KILO', p: '2024 – hoy' },
      { t: 'Full-Stack Engineer · Cheffi', p: '2025 – 2026' },
      { t: 'Estudio propio · ZonaJujuy', p: '2024 – hoy' },
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
      'AI Engineer and full stack developer: coding since 2022, shipping to production since 2024. Founder and CEO of KILO, a management and point-of-sale system for any kind of store, with multi-branch, multi-staff support and an app on Google Play: 83 stores signed up in the 6 weeks since launch and 1,900+ commits in 10 months, all mine. I build apps, systems, backend, payments and WhatsApp + AI automations, and help decide what is worth building and what it costs.',
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
      { n: 'SUDO · Tu Bondi Jujuy', u: 'sudo.zonajujuy.com', d: 'Offline point of sale for supermarkets and real-time buses.' },
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
      { t: 'Founder & CEO · KILO', p: '2024 – now' },
      { t: 'Full-Stack Engineer · Cheffi', p: '2025 – 2026' },
      { t: 'Own studio · ZonaJujuy', p: '2024 – now' },
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
