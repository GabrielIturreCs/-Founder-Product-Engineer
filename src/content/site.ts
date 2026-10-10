// Fuente única de verdad del sitio: copy, proyectos, precios, FAQ y CV.
// La web, el JSON-LD, /llms.txt y el CV leen todo desde acá.

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

export const cvPdf = { es: '/cv/Gabriel-Iturre-CV-ES.pdf', en: '/cv/Gabriel-Iturre-CV-EN.pdf' };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  url?: string;
  image?: string;
  year: string;
  tags: string[];
  soon?: boolean;
};

export type Faq = { q: string; a: string };
export type Price = { name: string; from: string; note: string };

// IMPORTANTE: precios de referencia. Confirmalos antes de publicar.
const prices = {
  es: {
    plan: {
      badge: 'Plan mensual',
      name: 'Desarrollador dedicado',
      price: 'USD 1.490',
      per: '/mes',
      features: ['Un pedido a la vez', 'Entregas cada pocos días', 'Apps, sistemas y webs', 'Arreglos y mejoras incluidos', 'Servidores y publicación', 'Pausá o cancelá cuando quieras'],
      cta: 'Empezar hoy',
    },
    from: [
      { name: 'Landing page', from: 'USD 290', note: 'Lista en 1 semana' },
      { name: 'Sitio web o WordPress', from: 'USD 590', note: 'Hasta 6 secciones' },
      { name: 'App móvil o MVP', from: 'USD 2.900', note: 'Android / iOS / web' },
      { name: 'Sistema a medida', from: 'USD 3.900', note: 'ERP, turnos, stock, POS' },
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
      name: 'Dedicated developer',
      price: 'USD 1,490',
      per: '/month',
      features: ['One request at a time', 'Delivery every few days', 'Apps, systems & websites', 'Fixes & improvements included', 'Servers & store releases', 'Pause or cancel anytime'],
      cta: 'Start today',
    },
    from: [
      { name: 'Landing page', from: 'USD 290', note: 'Ready in 1 week' },
      { name: 'Website or WordPress', from: 'USD 590', note: 'Up to 6 sections' },
      { name: 'Mobile app or MVP', from: 'USD 2,900', note: 'Android / iOS / web' },
      { name: 'Custom system', from: 'USD 3,900', note: 'ERP, booking, inventory, POS' },
    ] as Price[],
    note: "These are starting points. On a 15-minute call I'll give you a real, fixed number.",
    perks: [
      { title: 'Fixed price', desc: 'Written quote within 48 h. No surprises.' },
      { title: 'Pay in milestones', desc: 'A deposit, then pay as we deliver.' },
    ],
  },
};

// Para sumar un proyecto: agregalo acá (y su traducción en `en` más abajo).
// Los primeros 6 se muestran siempre; el resto aparece con "Ver más proyectos".
// Capturas: 1440x900 en /public/work/<slug>.webp
const projectsEs: Project[] = [
  { slug: 'chefi', name: 'Chefi', kind: 'SaaS gastronómico', year: '2025', summary: 'Pedidos por QR, mesas en tiempo real y login por WhatsApp.', url: 'https://chefi.zonajujuy.com', image: '/work/chefi.webp', tags: ['React', 'Node.js', 'WhatsApp API'] },
  { slug: 'slot', name: 'SLOT', kind: 'Software médico con IA', year: '2025', summary: 'Turnos, colas virtuales por QR e historias clínicas resumidas con IA.', url: 'https://slot.zonajujuy.com', image: '/work/slot.webp', tags: ['NestJS', 'Supabase', 'Gemini'] },
  { slug: 'aevum', name: 'Aevum', kind: 'IA para empresas', year: '2026', summary: 'Los manuales de la empresa, respondiendo preguntas con IA.', url: 'https://aevum.zonajujuy.com', image: '/work/aevum.webp', tags: ['RAG', 'LLMs', 'Next.js'] },
  { slug: 'zonasalud', name: 'ZonaSalud', kind: 'Gestión de consultorios', year: '2025', summary: 'Agenda, pacientes y facturación para clínicas.', url: 'https://salud.zonajujuy.com', image: '/work/salud.webp', tags: ['Angular', 'Node.js', 'PostgreSQL'] },
  { slug: 'intimates', name: 'Inti Mates', kind: 'E-commerce', year: '2026', summary: 'Tienda online de mates artesanales premium.', url: 'https://intimatesjujuy.netlify.app', image: '/work/intimates.webp', tags: ['E-commerce', 'Next.js'] },
  { slug: 'petit', name: 'Peluquería Petit', kind: 'Web + turnos', year: '2025', summary: 'Sitio con SEO local y reservas online.', url: 'https://peluqueriapetit.zonajujuy.com', image: '/work/petit.webp', tags: ['Web', 'SEO local'] },
  { slug: 'zonajujuy', name: 'ZonaJujuy', kind: 'Agencia de software', year: '2024', summary: 'Mi agencia: sistemas, apps y webs para empresas.', url: 'https://zonajujuy.com', image: '/work/zonajujuy.webp', tags: ['Next.js', 'Branding'] },
  { slug: 'victor', name: 'Viajes con Víctor', kind: 'Landing de servicios', year: '2025', summary: 'Landing que convierte visitas en viajes por WhatsApp.', url: 'https://victormartinez.zonajujuy.com', image: '/work/victor.webp', tags: ['Landing', 'WhatsApp'] },
  { slug: 'burguesita', name: 'La Burguesita', kind: 'Web + menú digital', year: '2025', summary: 'Menú online con pedidos directos por WhatsApp.', url: 'https://laburguesita.netlify.app', image: '/work/burguesita.webp', tags: ['Web', 'Menú digital'] },
  { slug: 'colectivos', name: 'App de colectivos', kind: 'App nativa · Transporte', year: '2026', summary: 'Líneas, recorridos y llegada de colectivos en el mapa.', tags: ['Android', 'Mapas', 'Tiempo real'], soon: true },
];

const en: Record<string, Partial<Project>> = {
  chefi: { kind: 'Restaurant SaaS', summary: 'QR ordering, real-time tables and WhatsApp login.' },
  slot: { kind: 'AI healthcare software', summary: 'Booking, QR virtual queues and AI-summarized medical records.' },
  aevum: { kind: 'AI for companies', summary: 'Company manuals that answer questions with AI.' },
  zonasalud: { kind: 'Clinic management', summary: 'Scheduling, patients and billing for clinics.' },
  intimates: { kind: 'E-commerce', summary: 'Online store for premium handcrafted mate gourds.' },
  petit: { name: 'Petit Hair Salon', kind: 'Website + booking', summary: 'Local-SEO website with online booking.' },
  zonajujuy: { kind: 'Software agency', summary: 'My agency: systems, apps and websites for companies.' },
  victor: { name: 'Rides with Víctor', kind: 'Service landing page', summary: 'Landing page that turns visits into WhatsApp bookings.' },
  burguesita: { kind: 'Website + digital menu', summary: 'Online menu with direct WhatsApp orders.' },
  colectivos: { name: 'Bus tracker app', kind: 'Native app · Transit', summary: 'Bus lines, routes and live arrivals on a map.', tags: ['Android', 'Maps', 'Real time'] },
};
const projectsEn: Project[] = projectsEs.map((p) => ({ ...p, ...en[p.slug] }));

export const content = {
  es: {
    lang: 'es' as Lang,
    title: 'Gabriel Iturre · Desarrollador freelance | Apps, sistemas y webs a medida',
    description:
      'Desarrollo apps Android e iOS, sistemas de gestión, SaaS, tiendas online, sitios WordPress y automatizaciones con IA. Precio cerrado, entregas rápidas, código tuyo. Clientes en Argentina y el mundo.',
    nav: { work: 'Proyectos', pricing: 'Precios', faq: 'Preguntas', call: 'Agendar llamada', seePricing: 'Ver precios', home: 'Inicio', cv: 'CV' },
    hero: {
      status: 'Aceptando proyectos nuevos',
      title: ['Apps, sistemas y webs que', 'hacen crecer', 'tu negocio'],
      sub: 'De la idea a producción en semanas. Precio cerrado, código tuyo.',
      hello: 'Hola, soy Gabriel',
      helloSub: 'Fundador de KILO',
      cardBadge: 'Empezá hoy',
      cardTitle: 'Trabajemos juntos',
      cardSub: 'Un desarrollador senior para todo tu proyecto.',
      cardCall: 'Agendá una llamada de 15 min',
      cardCallSub: 'Elegí día y horario',
    },
    logosLabel: 'Productos y clientes',
    how: {
      title: ['Software a medida,', 'como debería', 'haber sido siempre'],
      steps: [
        { title: 'Contame', desc: 'Una llamada de 15 minutos. Vos traés la idea, yo el plan.' },
        { title: 'Construyo', desc: 'Lo que necesites: de una landing a un sistema completo.' },
        { title: 'Lanzás', desc: 'Publicado en la web o en Play Store, con soporte.' },
      ],
      chat: ['Necesito una app para mi negocio 📱', '¡Dale! Te paso propuesta y precio en 48 h.', 'Perfecto 🙌'],
      launched: 'Publicado en Google Play',
    },
    tags: ['Apps Android', 'Apps iOS', 'Sistemas de gestión', 'Punto de venta', 'SaaS', 'MVPs', 'Landing pages', 'WordPress', 'E-commerce', 'Mercado Pago', 'Bots de WhatsApp', 'IA', 'Integraciones', 'APIs', 'Facturación ARCA', 'Arreglos', 'Migraciones', 'Maquetación', 'Mantenimiento', 'Servidores'],
    note:
      'Desde 2022 construyo software real para negocios reales. Fundé KILO —un sistema de gestión con app en Google Play— y la agencia ZonaJujuy. Trabajás directo conmigo, sin intermediarios, y uso Claude y Codex para entregar en semanas lo que antes llevaba meses.',
    benefits: {
      pill: 'Por qué yo',
      title: ['Mejor que una agencia.', 'Más rápido', 'que un equipo.'],
      sub: 'Un solo responsable, de punta a punta. Calidad senior, tiempos de startup.',
      items: [
        { icon: 'price', title: 'Precio cerrado', desc: 'Sabés cuánto pagás antes de empezar.' },
        { icon: 'fast', title: 'Entregas rápidas', desc: 'Avances cada semana, con demo en vivo.' },
        { icon: 'quality', title: 'Calidad senior', desc: 'Arquitectura pensada para crecer.' },
        { icon: 'all', title: 'Todo en un lugar', desc: 'Diseño, código, servidores y publicación.' },
        { icon: 'code', title: 'El código es tuyo', desc: 'Te llevás código, accesos y documentación.' },
        { icon: 'support', title: 'Soporte real', desc: 'Después del lanzamiento, sigo ahí.' },
      ],
    },
    work: {
      pill: 'Proyectos',
      title: ['Trabajo', 'reciente'],
      sub: 'Productos propios y de clientes, en producción hoy. Entrá y probalos.',
      kilo: {
        kind: 'SaaS + App Android',
        title: 'KILO',
        desc: 'Sistema de gestión para comercios: punto de venta, stock, caja, cobros con QR, facturación electrónica y ventas por WhatsApp. Lo diseñé, lo construí y lo lancé en 4 meses.',
        stats: [
          { v: '4 meses', l: 'de idea a producción' },
          { v: 'Android', l: 'publicada en Google Play' },
          { v: 'Multi-tenant', l: 'un sistema, muchos comercios' },
        ],
        site: 'Ver sitio',
        play: 'Google Play',
      },
      visit: 'Ver sitio',
      soon: 'Próximamente',
      more: 'Ver más proyectos',
      less: 'Ver menos',
    },
    services: {
      title: ['Apps, sistemas, webs', 'y mucho más'],
      sub: 'Todo lo que necesitás, bajo un mismo techo.',
      more: '+ todo lo que imagines',
    },
    pricing: {
      pill: 'Precios',
      title: ['Precios claros,', 'sin sorpresas'],
      fromLabel: 'Desde',
      ...prices.es,
    },
    faq: {
      title: ['Preguntas', 'frecuentes'],
      items: [
        { q: '¿Cuánto cuesta mi proyecto?', a: 'Depende del alcance. Tenés precios de partida arriba; después de una llamada de 15 minutos te mando un presupuesto cerrado por escrito en 48 horas.' },
        { q: '¿Cuánto tarda?', a: 'Una landing, alrededor de una semana. Un sitio web, 1 a 2 semanas. Una app o un sistema a medida, entre 4 y 12 semanas según la complejidad.' },
        { q: '¿Cómo empezamos?', a: 'Agendás una llamada, me contás la idea y te mando una propuesta con alcance, plazos y precio. Si te sirve, firmamos, pagás el anticipo y arranco esa misma semana.' },
        { q: '¿Quién hace el trabajo?', a: 'Yo, de punta a punta. En proyectos grandes sumo a mi equipo de confianza de ZonaJujuy, pero siempre hablás conmigo.' },
        { q: '¿Qué tipo de proyectos hacés?', a: 'Apps Android e iOS, sistemas de gestión, SaaS, MVPs, tiendas online, sitios WordPress, landing pages, bots de WhatsApp, automatizaciones con IA e integraciones con pagos y facturación.' },
        { q: '¿Trabajás con WordPress?', a: 'Sí. Hago sitios WordPress rápidos y fáciles de administrar, y también arreglo o mejoro los que ya tenés.' },
        { q: '¿Podés arreglar un sistema o una web que ya tengo?', a: 'Sí. Reviso el código, te digo qué está mal y cuánto cuesta arreglarlo. También migro sistemas viejos a tecnologías modernas.' },
        { q: '¿Publicás apps en Google Play y App Store?', a: 'Sí. Me encargo de todo: cuenta de desarrollador, fichas, capturas, políticas y publicación. KILO ya está en Google Play.' },
        { q: '¿Cómo funciona el plan mensual?', a: 'Pagás un monto fijo por mes y me vas pasando pedidos: nuevas funciones, arreglos, pantallas o webs. Trabajo uno a la vez y te entrego cada pocos días. Podés pausar o cancelar cuando quieras.' },
        { q: '¿Cómo se paga?', a: 'En proyectos cerrados, un anticipo y el resto por etapas contra entregas. Acepto transferencia, Mercado Pago y pagos internacionales.' },
        { q: '¿Qué pasa si algo no me gusta?', a: 'Cada semana ves una demo en vivo y opinás. Ajustamos sobre la marcha hasta que quede como lo querés, dentro del alcance acordado.' },
        { q: '¿El código es mío?', a: 'Sí. Al terminar te entrego el código fuente, los accesos y la documentación. No quedás atado a nadie.' },
        { q: '¿Trabajás con clientes de otros países?', a: 'Sí. Trabajo 100% remoto con clientes de Argentina, Latinoamérica, Estados Unidos y Europa, en español o en inglés.' },
        { q: '¿Usás IA para programar?', a: 'Sí, uso Claude y Codex todos los días. Me permite entregar mucho más rápido; todo el código lo reviso yo antes de que llegue a producción.' },
        { q: '¿Qué pasa después del lanzamiento?', a: 'Te acompaño con soporte y mantenimiento: corrijo errores, sumo mejoras y monitoreo que todo funcione.' },
      ] as Faq[],
      callTitle: 'Agendá una llamada de 15 min',
      callBtn: 'Agendar llamada',
      emailLabel: '¿Preferís escribir?',
    },
    cta: {
      title: ['Veamos si somos', 'el match ideal'],
      aside: '(spoiler: sí)',
      sub: 'Una llamada de 15 minutos, gratis y sin compromiso.',
      whatsapp: 'O escribime por WhatsApp',
      waText: 'Hola Gabriel, vi tu portfolio y quiero cotizar un proyecto: ',
    },
    booking: {
      pick: 'Elegí un día',
      times: 'Horarios (hora Argentina)',
      name: 'Tu nombre',
      email: 'Tu email',
      about: '¿Qué querés construir?',
      confirm: 'Confirmar llamada',
      sending: 'Agendando…',
      ok: '¡Listo! Te llega la confirmación por email.',
      error: 'No se pudo agendar. Escribime por WhatsApp.',
      back: 'Cambiar',
      taken: 'Ocupado',
    },
    footer: { place: 'Desde Jujuy, Argentina · Para todo el mundo', cv: 'CV', rights: 'Gabriel Iturre' },
    dock: { theme: 'Cambiar tema', lang: 'English' },
    projects: projectsEs,
  },
  en: {
    lang: 'en' as Lang,
    title: 'Gabriel Iturre · Freelance developer | Custom apps, systems & websites',
    description:
      'I build Android and iOS apps, business systems, SaaS, online stores, WordPress sites and AI automations. Fixed price, fast delivery, you own the code. Clients in Argentina and worldwide.',
    nav: { work: 'Work', pricing: 'Pricing', faq: 'FAQ', call: 'Book a call', seePricing: 'See pricing', home: 'Home', cv: 'Resume' },
    hero: {
      status: 'Taking on new projects',
      title: ['Apps, systems and websites that', 'grow', 'your business'],
      sub: 'From idea to production in weeks. Fixed price, you own the code.',
      hello: "Hi, I'm Gabriel",
      helloSub: 'Founder of KILO',
      cardBadge: 'Start today',
      cardTitle: "Let's work together",
      cardSub: 'One senior developer for your whole project.',
      cardCall: 'Book a 15-min intro call',
      cardCallSub: 'Pick a day and time',
    },
    logosLabel: 'Products & clients',
    how: {
      title: ['Custom software,', 'the way it should', 'have always been'],
      steps: [
        { title: 'Tell me', desc: 'A 15-minute call. You bring the idea, I bring the plan.' },
        { title: 'I build', desc: 'Whatever you need: from a landing page to a full system.' },
        { title: 'You launch', desc: 'Live on the web or Google Play, with support.' },
      ],
      chat: ['I need an app for my business 📱', "Sure! Proposal and price in 48 h.", 'Perfect 🙌'],
      launched: 'Live on Google Play',
    },
    tags: ['Android apps', 'iOS apps', 'Business systems', 'Point of sale', 'SaaS', 'MVPs', 'Landing pages', 'WordPress', 'E-commerce', 'Stripe', 'WhatsApp bots', 'AI', 'Integrations', 'APIs', 'E-invoicing', 'Fixes', 'Migrations', 'Front-end', 'Maintenance', 'Servers'],
    note:
      "Since 2022 I've built real software for real businesses. I founded KILO —a business management system with an app on Google Play— and the agency ZonaJujuy. You work directly with me, no middlemen, and I use Claude and Codex to ship in weeks what used to take months.",
    benefits: {
      pill: 'Why me',
      title: ['Better than an agency.', 'Faster', 'than a team.'],
      sub: 'One accountable person, end to end. Senior quality, startup speed.',
      items: [
        { icon: 'price', title: 'Fixed price', desc: 'You know the cost before we start.' },
        { icon: 'fast', title: 'Fast delivery', desc: 'Progress every week, with a live demo.' },
        { icon: 'quality', title: 'Senior quality', desc: 'Architecture built to scale.' },
        { icon: 'all', title: 'All in one place', desc: 'Design, code, servers and release.' },
        { icon: 'code', title: 'You own the code', desc: 'Code, credentials and docs are yours.' },
        { icon: 'support', title: 'Real support', desc: "After launch, I'm still here." },
      ],
    },
    work: {
      pill: 'Work',
      title: ['Recent', 'work'],
      sub: 'Products of my own and for clients, live today. Go try them.',
      kilo: {
        kind: 'SaaS + Android app',
        title: 'KILO',
        desc: 'Business management for retailers: point of sale, inventory, cash register, QR payments, e-invoicing and WhatsApp sales. I designed, built and launched it in 4 months.',
        stats: [
          { v: '4 months', l: 'from idea to production' },
          { v: 'Android', l: 'live on Google Play' },
          { v: 'Multi-tenant', l: 'one system, many stores' },
        ],
        site: 'Visit site',
        play: 'Google Play',
      },
      visit: 'Visit site',
      soon: 'Coming soon',
      more: 'See more projects',
      less: 'See less',
    },
    services: {
      title: ['Apps, systems, websites', '& more'],
      sub: 'Everything you need, under one roof.',
      more: '+ whatever you imagine',
    },
    pricing: {
      pill: 'Pricing',
      title: ['Clear pricing,', 'no surprises'],
      fromLabel: 'From',
      ...prices.en,
    },
    faq: {
      title: ['Frequently', 'asked questions'],
      items: [
        { q: 'How much does my project cost?', a: "It depends on scope. You'll find starting prices above; after a 15-minute call I send a fixed, written quote within 48 hours." },
        { q: 'How long does it take?', a: 'A landing page, about a week. A website, 1–2 weeks. A custom app or system, 4–12 weeks depending on complexity.' },
        { q: 'How do we get started?', a: 'Book a call, tell me the idea and I send a proposal with scope, timeline and price. If it works for you, we sign, you pay the deposit and I start that same week.' },
        { q: 'Who does the work?', a: 'I do, end to end. On large projects I bring in my trusted team from ZonaJujuy, but you always talk to me.' },
        { q: 'What kind of projects do you take?', a: 'Android and iOS apps, business systems, SaaS, MVPs, online stores, WordPress sites, landing pages, WhatsApp bots, AI automations and payment/invoicing integrations.' },
        { q: 'Do you work with WordPress?', a: 'Yes. I build fast, easy-to-manage WordPress sites, and fix or improve the ones you already have.' },
        { q: 'Can you fix a system or website I already have?', a: "Yes. I review the code, tell you what's wrong and what it costs to fix. I also migrate legacy systems to modern stacks." },
        { q: 'Do you publish apps on Google Play and the App Store?', a: 'Yes. I handle everything: developer account, listings, screenshots, policies and release. KILO is already on Google Play.' },
        { q: 'How does the monthly plan work?', a: 'You pay a fixed monthly fee and send requests: new features, fixes, screens or websites. I work on one at a time and deliver every few days. Pause or cancel anytime.' },
        { q: 'How do payments work?', a: 'For fixed projects, a deposit and the rest in milestones as I deliver. I accept international payments.' },
        { q: "What if I don't like something?", a: 'You see a live demo every week and give feedback. We adjust along the way until it is right, within the agreed scope.' },
        { q: 'Do I own the code?', a: "Yes. At the end you get the source code, credentials and documentation. You're never locked in." },
        { q: 'Do you work with international clients?', a: 'Yes. I work 100% remotely with clients in Argentina, Latin America, the US and Europe, in English or Spanish.' },
        { q: 'Do you use AI to code?', a: 'Yes, I use Claude and Codex every day. It lets me ship much faster; I review every line before it reaches production.' },
        { q: 'What happens after launch?', a: 'I stay with you for support and maintenance: fixing bugs, adding improvements and monitoring that everything runs.' },
      ] as Faq[],
      callTitle: 'Book a 15-min intro call',
      callBtn: 'Book a call',
      emailLabel: 'Prefer to email?',
    },
    cta: {
      title: ["Let's see if we're", 'the right fit'],
      aside: '(spoiler: we are)',
      sub: 'A free, no-strings 15-minute call.',
      whatsapp: 'Or message me on WhatsApp',
      waText: "Hi Gabriel, I saw your portfolio and I'd like a quote for a project: ",
    },
    booking: {
      pick: 'Pick a day',
      times: 'Times (Argentina, GMT-3)',
      name: 'Your name',
      email: 'Your email',
      about: 'What do you want to build?',
      confirm: 'Confirm call',
      sending: 'Booking…',
      ok: "Done! You'll get a confirmation email.",
      error: "Couldn't book it. Message me on WhatsApp.",
      back: 'Change',
      taken: 'Taken',
    },
    footer: { place: 'Based in Jujuy, Argentina · Working worldwide', cv: 'Resume', rights: 'Gabriel Iturre' },
    dock: { theme: 'Toggle theme', lang: 'Español' },
    projects: projectsEn,
  },
};

export type SiteContent = (typeof content)['es'];

export const kiloLinks = {
  site: 'https://somoskilo.com',
  play: 'https://play.google.com/store/apps/details?id=com.kilo.app&hl=es_AR',
  // Capturas reales de la app (1080x2400). Cada celular rota entre 4 pantallas.
  screensA: ['/work/kilo/home.webp', '/work/kilo/reportes.webp', '/work/kilo/caja.webp', '/work/kilo/ofertas.webp'],
  screensB: ['/work/kilo/productos.webp', '/work/kilo/tienda.webp', '/work/kilo/pedido.webp', '/work/kilo/oferta-lista.webp'],
  badge: '/Images/google-play-badge-es-300x116.png',
};

// ---------- CV / perfil para clientes ----------
export const cv = {
  es: {
    headline: 'Desarrollo de software a medida',
    tagline: 'Apps, sistemas y webs que hacen crecer tu negocio.',
    summary:
      'Desarrollador full stack y fundador de producto. Desde 2022 llevo ideas a producción en semanas: apps móviles, sistemas de gestión, SaaS, e-commerce y automatizaciones con IA. Fundé KILO (sistema de gestión con app en Google Play) y la agencia ZonaJujuy. Trabajo con Claude y Codex para entregar más rápido, con calidad senior y precio cerrado.',
    services: [
      { t: 'Apps móviles', d: 'Android e iOS, publicadas en las tiendas.' },
      { t: 'Sistemas a medida', d: 'ERP, punto de venta, turnos, stock, CRM.' },
      { t: 'SaaS y MVPs', d: 'Tu startup en producción en semanas.' },
      { t: 'Webs y WordPress', d: 'Landings, sitios corporativos y e-commerce.' },
      { t: 'IA y automatización', d: 'Bots de WhatsApp, asistentes y RAG.' },
      { t: 'Arreglos y soporte', d: 'Mejoro, migro y mantengo lo que ya tenés.' },
    ],
    projects: [
      { n: 'KILO', u: 'somoskilo.com', d: 'ERP + punto de venta multi-tenant con app Android en Google Play. De idea a producción en 4 meses.' },
      { n: 'Chefi', u: 'chefi.zonajujuy.com', d: 'SaaS gastronómico: pedidos por QR, login por WhatsApp. 40% menos errores en pedidos.' },
      { n: 'SLOT · ZonaSalud', u: 'slot.zonajujuy.com', d: 'Turnos, colas por QR e historias clínicas resumidas con IA.' },
      { n: 'Aevum', u: 'aevum.zonajujuy.com', d: 'IA (RAG) que responde preguntas sobre los documentos de una empresa.' },
      { n: 'Webs para clientes', u: 'zonajujuy.com', d: 'E-commerce, landings y sitios con SEO local: Inti Mates, Petit, La Burguesita y más.' },
    ],
    process: ['Llamada de 15 min', 'Propuesta y precio cerrado en 48 h', 'Demos semanales', 'Lanzamiento y soporte'],
    numbers: [
      { v: '+4', l: 'años construyendo software' },
      { v: '+15', l: 'proyectos entregados' },
      { v: '4 meses', l: 'de idea a SaaS (KILO)' },
      { v: 'Play Store', l: 'apps publicadas' },
    ],
    stack: [
      { g: 'IA', i: 'Claude, Codex, OpenAI, Gemini, RAG, agentes' },
      { g: 'Frontend y apps', i: 'React, Next.js, TypeScript, React Native, Android, WordPress' },
      { g: 'Backend', i: 'Node.js, NestJS, PostgreSQL, MongoDB, Supabase, Firebase' },
      { g: 'Infra e integraciones', i: 'Docker, Linux, Coolify, Netlify, Mercado Pago, Stripe, ARCA, WhatsApp API' },
    ],
    background: [
      { t: 'Fundador · KILO', p: '2023 – hoy' },
      { t: 'Fundador · ZonaJujuy', p: '2022 – hoy' },
      { t: 'Analista Programador · UNJu', p: 'en curso' },
    ],
    languages: 'Español nativo · Inglés técnico (B1–B2)',
    labels: {
      what: 'Qué puedo construir para vos',
      projects: 'Proyectos en producción',
      process: 'Cómo trabajo',
      numbers: 'En números',
      stack: 'Tecnologías',
      background: 'Trayectoria',
      languages: 'Idiomas',
      cta: 'Agendá una llamada',
      download: 'Descargar PDF',
      back: 'Volver al sitio',
      other: 'English version',
    },
  },
  en: {
    headline: 'Custom software development',
    tagline: 'Apps, systems and websites that grow your business.',
    summary:
      'Full stack developer and product founder. Since 2022 I take ideas to production in weeks: mobile apps, business systems, SaaS, e-commerce and AI automation. I founded KILO (a business management system with an app on Google Play) and the agency ZonaJujuy. I work with Claude and Codex to ship faster, with senior quality and fixed prices.',
    services: [
      { t: 'Mobile apps', d: 'Android and iOS, published on the stores.' },
      { t: 'Custom systems', d: 'ERP, point of sale, booking, inventory, CRM.' },
      { t: 'SaaS & MVPs', d: 'Your startup in production in weeks.' },
      { t: 'Websites & WordPress', d: 'Landing pages, company sites and e-commerce.' },
      { t: 'AI & automation', d: 'WhatsApp bots, assistants and RAG.' },
      { t: 'Fixes & support', d: 'I improve, migrate and maintain what you have.' },
    ],
    projects: [
      { n: 'KILO', u: 'somoskilo.com', d: 'Multi-tenant ERP + point of sale with an Android app on Google Play. Idea to production in 4 months.' },
      { n: 'Chefi', u: 'chefi.zonajujuy.com', d: 'Restaurant SaaS: QR ordering, WhatsApp login. 40% fewer order errors.' },
      { n: 'SLOT · ZonaSalud', u: 'slot.zonajujuy.com', d: 'Booking, QR queues and AI-summarized medical records.' },
      { n: 'Aevum', u: 'aevum.zonajujuy.com', d: 'AI (RAG) that answers questions about a company’s documents.' },
      { n: 'Client websites', u: 'zonajujuy.com', d: 'E-commerce, landing pages and local-SEO sites: Inti Mates, Petit, La Burguesita and more.' },
    ],
    process: ['15-min call', 'Proposal & fixed price in 48 h', 'Weekly demos', 'Launch & support'],
    numbers: [
      { v: '4+', l: 'years building software' },
      { v: '15+', l: 'projects delivered' },
      { v: '4 months', l: 'idea to SaaS (KILO)' },
      { v: 'Play Store', l: 'apps published' },
    ],
    stack: [
      { g: 'AI', i: 'Claude, Codex, OpenAI, Gemini, RAG, agents' },
      { g: 'Frontend & apps', i: 'React, Next.js, TypeScript, React Native, Android, WordPress' },
      { g: 'Backend', i: 'Node.js, NestJS, PostgreSQL, MongoDB, Supabase, Firebase' },
      { g: 'Infra & integrations', i: 'Docker, Linux, Coolify, Netlify, Stripe, Mercado Pago, WhatsApp API' },
    ],
    background: [
      { t: 'Founder · KILO', p: '2023 – now' },
      { t: 'Founder · ZonaJujuy', p: '2022 – now' },
      { t: 'Programmer Analyst · UNJu', p: 'in progress' },
    ],
    languages: 'Spanish (native) · English (technical, B1–B2)',
    labels: {
      what: 'What I can build for you',
      projects: 'Projects in production',
      process: 'How I work',
      numbers: 'By the numbers',
      stack: 'Tech',
      background: 'Background',
      languages: 'Languages',
      cta: 'Book a call',
      download: 'Download PDF',
      back: 'Back to site',
      other: 'Versión en español',
    },
  },
};
