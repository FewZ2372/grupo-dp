document.body.classList.add("js-enhanced");

const page = document.body.dataset.page || "home";
const base = document.body.dataset.base || "./";
const languageStorageKey = "grupo-dp-language";

const routes = {
  home: "index.html",
  quienes: "quienes-somos/",
  hitos: "hitos/",
  sustentabilidad: "sustentabilidad/",
  news: "news/",
  contacto: "contacto/",
  dp: "unidades/dp-industria-publicitaria/",
  comex: "unidades/comex/",
  pack: "unidades/pack-gourmet/",
  efectivo: "unidades/efectivo-365/",
  nautik: "unidades/nautik/",
  power: "unidades/power-station/"
};

const navSections = {
  home: "home",
  quienes: "institucional",
  hitos: "institucional",
  sustentabilidad: "institucional",
  news: "institucional",
  contacto: "contacto",
  dp: "unidades",
  comex: "unidades",
  pack: "unidades",
  efectivo: "unidades",
  nautik: "unidades",
  power: "unidades"
};

const text = (es, en) => ({ es, en });

const brands = [
  {
    key: "dp",
    path: routes.dp,
    label: "DP Industria Publicitaria",
    unitMeta: [
      {
        value: text("Retail + Banking", "Retail + Banking"),
        label: text(
          "Aplicaciones para puntos de contacto, exhibición y atención.",
          "Applications for customer-facing, display and service environments."
        )
      },
      {
        value: text("Turnkey", "Turnkey"),
        label: text(
          "Diseño, fabricación y montaje dentro de un mismo recorrido.",
          "Design, fabrication and installation within the same project flow."
        )
      },
      {
        value: text("Laser + Signage", "Laser + Signage"),
        label: text(
          "Corte, letras corporeas y piezas especiales de terminación.",
          "Cutting, dimensional lettering and special finishing pieces."
        )
      }
    ],
    navDescription: text(
      "Identidad, exhibición y espacios comerciales",
      "Identity, display and commercial spaces"
    ),
    marqueeSector: text("Industria y comunicación", "Industry and communication"),
    marqueeDescription: text(
      "Identidad, exhibición y soluciones integrales para espacios comerciales e institucionales.",
      "Identity, display and integrated solutions for commercial and institutional spaces."
    )
  },
  {
    key: "comex",
    path: routes.comex,
    label: "COMEX",
    unitMeta: [
      {
        value: text("Import / Export", "Import / Export"),
        label: text(
          "Operaciones internacionales leidas con criterio comercial y operativo.",
          "International operations managed with commercial and operational judgment."
        )
      },
      {
        value: text("US | CN | PT | BR | ES", "US | CN | PT | BR | ES"),
        label: text(
          "Mercados estrategicos priorizados por la unidad.",
          "Strategic markets prioritized by the unit."
        )
      },
      {
        value: text("Docs + Logistics", "Docs + Logistics"),
        label: text(
          "Coordinacion documental, administrativa y logística.",
          "Document, administrative and logistics coordination."
        )
      }
    ],
    navDescription: text(
      "Comercio exterior y articulación operativa",
      "Foreign trade and operational coordination"
    ),
    marqueeSector: text("Comercio exterior", "Foreign trade"),
    marqueeDescription: text(
      "Gestión integral para operaciones internacionales y vínculo con mercados estratégicos.",
      "End-to-end management for international operations and strategic market connections."
    )
  },
  {
    key: "pack",
    path: routes.pack,
    label: "Pack Gourmet",
    unitMeta: [
      {
        value: text("B2B Packaging", "B2B Packaging"),
        label: text(
          "Trae tu producto y lo envasamos con una presentación más visible.",
          "Bring your product and we package it with a more visible presentation."
        )
      },
      {
        value: text("Own Lines", "Own Lines"),
        label: text(
          "Espacio abierto para marcas y desarrollos propios.",
          "Open ground for in-house brands and product developments."
        )
      },
      {
        value: text("Shelf Impact", "Shelf Impact"),
        label: text(
          "Formato sellado, exhibible y adaptable a distintos contenidos.",
          "A sealed, display-ready format adaptable to different contents."
        )
      }
    ],
    navDescription: text(
      "Food solutions y packaging especializado",
      "Food solutions and specialized packaging"
    ),
    marqueeSector: text("Food solutions", "Food solutions"),
    marqueeDescription: text(
      "Packaging especializado para terceros y líneas propias con foco en presentación.",
      "Specialized packaging for third parties and in-house lines with a presentation-first approach."
    )
  },
  {
    key: "efectivo",
    path: routes.efectivo,
    label: "Efectivo 365",
    unitMeta: [
      {
        value: text("ATM Network", "ATM Network"),
        label: text(
          "Compra, venta, consignación y despliegue de equipos.",
          "Purchase, sale, consignment and rollout of ATM units."
        )
      },
      {
        value: text("Monitoring", "Monitoring"),
        label: text(
          "Software, soporte técnico y continuidad operativa.",
          "Software, technical support and operational continuity."
        )
      },
      {
        value: text("Field Service", "Field Service"),
        label: text(
          "Instalación, logística y mantenimiento en campo.",
          "Installation, logistics and on-site maintenance."
        )
      }
    ],
    navDescription: text(
      "Autoservicio y operación de cajeros automáticos",
      "Self-service and ATM operations"
    ),
    marqueeSector: text("Autoservicio", "Self-service"),
    marqueeDescription: text(
      "Comercialización, instalación, mantenimiento y operación de cajeros extra bancarios.",
      "Commercialization, installation, maintenance and operation of off-bank ATMs."
    )
  },
  {
    key: "nautik",
    path: routes.nautik,
    label: "Nautik",
    unitMeta: [
      {
        value: text("Premium Marine", "Premium Marine"),
        label: text(
          "Lenguaje cuidado para embarcaciones, cubiertas y marinas.",
          "Refined language for boats, decks and marina environments."
        )
      },
      {
        value: text("Custom Pieces", "Custom Pieces"),
        label: text(
          "Tableros, puertas, divisiones y accesorios a medida.",
          "Custom panels, doors, partitions and onboard accessories."
        )
      },
      {
        value: text("Marina Tower", "Marina Tower"),
        label: text(
          "Producto destacado con ficha técnica todavía en desarrollo.",
          "Featured product with a technical sheet still under development."
        )
      }
    ],
    navDescription: text(
      "Diseño y equipamiento para embarcaciones",
      "Design and equipment for vessels"
    ),
    marqueeSector: text("Náutica", "Nautical"),
    marqueeDescription: text(
      "Diseño, restyling y piezas especiales para embarcaciones y marinas premium.",
      "Design, restyling and special parts for premium boats and marinas."
    )
  },
  {
    key: "power",
    path: routes.power,
    label: "Power Station",
    unitMeta: [
      {
        value: text("Charging Tower", "Charging Tower"),
        label: text(
          "Producto insignia para espacios de alto tránsito.",
          "Flagship product for high-traffic environments."
        )
      },
      {
        value: text("Flexible Use", "Flexible Use"),
        label: text(
          "Ferias, retail, corporativo y áreas de espera.",
          "Fairs, retail, corporate spaces and waiting areas."
        )
      },
      {
        value: text("Technical Base", "Technical Base"),
        label: text(
          "Marca preparada para evolucionar desde un equipo concreto.",
          "A brand ready to evolve from one concrete technical product."
        )
      }
    ],
    navDescription: text(
      "Estaciones de carga para espacios de alto tránsito",
      "Charging stations for high-traffic spaces"
    ),
    marqueeSector: text("Charging solutions", "Charging solutions"),
    marqueeDescription: text(
      "Torres de carga para celulares pensadas para servicio, utilidad y presencia.",
      "Cell-phone charging towers built for service, utility and presence."
    )
  }
];

const chromeCopy = {
  es: {
    skipLink: "Saltar al contenido",
    brandSubtitle: "Industria, diseño y soluciones especializadas",
    brandAria: "Inicio Grupo DP",
    menu: "Menú",
    navAria: "Principal",
    home: "Inicio",
    institutional: "Institucional",
    about: "Quiénes somos",
    milestones: "Hitos",
    sustainability: "Sustentabilidad",
    news: "News",
    businessUnits: "Unidades de negocio",
    contact: "Contacto",
    languageLabel: "Idioma del sitio",
    footerSummary:
      "Grupo empresario con base en Buenos Aires, Argentina, orientado al desarrollo de unidades de negocio vinculadas a industria, comercio y servicios especializados.",
    footerInstitutional: "Institucional",
    footerBusiness: "Unidades de negocio",
    footerContact: "Contacto",
    footerLocation: "[Placeholder] Buenos Aires, Argentina",
    footerEmail: "[Placeholder] info@grupodp.com.ar",
    footerPhone: "[Placeholder] +54 11 0000 0000",
    footerHours: "[Placeholder] Lunes a viernes de 9 a 18 h",
    footerChannel: "Canal institucional",
    footerTagline: "Industria, diseño y soluciones especializadas."
  },
  en: {
    skipLink: "Skip to content",
    brandSubtitle: "Industry, design and specialized solutions",
    brandAria: "Grupo DP home",
    menu: "Menu",
    navAria: "Primary",
    home: "Home",
    institutional: "Institutional",
    about: "About us",
    milestones: "Milestones",
    sustainability: "Sustainability",
    news: "News",
    businessUnits: "Business units",
    contact: "Contact",
    languageLabel: "Site language",
    footerSummary:
      "Business group based in Buenos Aires, Argentina, focused on developing business units linked to industry, trade and specialized services.",
    footerInstitutional: "Institutional",
    footerBusiness: "Business units",
    footerContact: "Contact",
    footerLocation: "[Placeholder] Buenos Aires, Argentina",
    footerEmail: "[Placeholder] info@grupodp.com.ar",
    footerPhone: "[Placeholder] +54 11 0000 0000",
    footerHours: "[Placeholder] Monday to Friday, 9 am to 6 pm",
    footerChannel: "Institutional channel",
    footerTagline: "Industry, design and specialized solutions."
  }
};

const pageTranslations = {
  home: {
    meta: {
      title: text(
        "Grupo DP | Industria, dise\u00f1o y soluciones especializadas",
        "Grupo DP | Industry, design and specialized solutions"
      ),
      description: text(
        "Grupo DP es una compa\u00f1\u00eda argentina que articula unidades de negocio vinculadas a industria, comercio exterior, packaging, autoservicio y soluciones especializadas.",
        "Grupo DP is an Argentine company that connects business units linked to industry, foreign trade, packaging, self-service and specialized solutions."
      ),
      ogDescription: text(
        "Industria, dise\u00f1o y soluciones especializadas desde Buenos Aires, Argentina.",
        "Industry, design and specialized solutions from Buenos Aires, Argentina."
      )
    },
    texts: [
      { selector: ".home-hero__eyebrow", value: text("Grupo DP", "Grupo DP") },
      {
        selector: ".home-hero__title",
        value: text(
          "Un grupo empresario con unidades de negocio especializadas.",
          "A business group with specialized business units."
        )
      },
      {
        selector: ".home-hero__lead",
        value: text(
          "Grupo DP re\u00fane seis unidades con perfiles complementarios en industria, comercio exterior, packaging, autoservicio, n\u00e1utica y soluciones de carga desde Buenos Aires, Argentina.",
          "Grupo DP brings together six complementary units in industry, foreign trade, packaging, self-service, nautical solutions and charging systems from Buenos Aires, Argentina."
        )
      },
      {
        selector: ".home-hero__primary",
        value: text("Unidades de negocio", "Business units")
      },
      { selector: ".home-hero__secondary", value: text("Qui\u00e9nes somos", "About us") },
      {
        selector: ".home-hero__visual-title",
        value: text("Imagen institucional Grupo DP", "Grupo DP institutional image")
      },
      {
        selector: ".home-hero__visual-copy",
        value: text(
          "Planta, equipo, fachada corporativa o retrato institucional.",
          "Plant, team, corporate facade or institutional portrait."
        )
      }
    ]
  },
  quienes: {
    meta: {
      title: text("Quiénes somos | Grupo DP", "About us | Grupo DP"),
      description: text(
        "Conocé la visión de Grupo DP, una compañía argentina que articula distintas unidades de negocio con foco industrial, comercial y operativo.",
        "Learn about Grupo DP's vision, an Argentine company that connects different business units with an industrial, commercial and operational focus."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio"], ["Home"]) },
      { selector: "nav.breadcrumbs strong", value: text("Quiénes somos", "About us") },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Quiénes somos", "About us") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Un grupo empresario con mirada industrial.", "A business group with an industrial mindset.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Grupo DP reúne unidades de negocio que operan en sectores distintos pero complementarios, con una misma forma de entender el trabajo: hacer bien, con criterio, continuidad y atención por el detalle.",
          "Grupo DP brings together business units that operate in different yet complementary sectors, with one shared way of understanding work: do it well, with judgment, continuity and attention to detail."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media strong",
        value: text("Imagen institucional", "Institutional image")
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media span",
        value: text(
          "Planta, equipo, retrato corporativo o composición general del grupo.",
          "Plant, team, corporate portrait or overall group composition."
        )
      },
      {
        selector: "main > section:nth-of-type(2) .eyebrow",
        value: text("Somos", "Who we are")
      },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Experiencia, crecimiento y diversificación.", "Experience, growth and diversification.")
      },
      {
        selector: "main > section:nth-of-type(2) > .container > .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "Con base en Buenos Aires, Grupo DP desarrolla negocios vinculados a producción publicitaria, comercio exterior, packaging, autoservicio y soluciones especializadas. La diversidad de sus unidades no responde a una suma casual, sino a una visión empresarial que busca detectar oportunidades y transformarlas en proyectos sostenibles.",
            "La combinación entre sensibilidad comercial, capacidad productiva y lectura operativa permite abordar desafíos muy distintos sin perder coherencia institucional."
          ],
          [
            "Based in Buenos Aires, Grupo DP develops businesses linked to advertising production, foreign trade, packaging, self-service and specialized solutions. The diversity of its units is not accidental; it responds to a business vision that identifies opportunities and turns them into sustainable projects.",
            "The combination of commercial sensitivity, productive capacity and operational judgment makes it possible to face very different challenges without losing institutional coherence."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Perfil del grupo", "Group profile") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          [
            "Compañía argentina orientada al desarrollo de negocios.",
            "Visión B2B y enfoque en soluciones concretas.",
            "Capacidad para articular diseño, industria y operación.",
            "Presencia en sectores diversos con identidad común."
          ],
          [
            "Argentine company focused on business development.",
            "B2B mindset and a focus on practical solutions.",
            "Ability to connect design, industry and operations.",
            "Presence across diverse sectors with a shared identity."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Nuestra visión", "Our vision") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Crecer donde hay margen para hacer mejor.", "Grow where there is room to do better.")
      },
      {
        selector: "main > section:nth-of-type(3) .section-heading p",
        value: text(
          "En Grupo DP buscamos construir negocios sólidos, con sentido de permanencia y una relación cercana entre idea, ejecución y resultado. Nos interesa desarrollar propuestas nobles, funcionales y bien resueltas, acompañadas por equipos que puedan sostener calidad en el tiempo.",
          "At Grupo DP, we seek to build solid businesses with a long-term outlook and a close relationship between idea, execution and outcome. We are interested in developing honest, functional and well-resolved proposals, supported by teams capable of sustaining quality over time."
        )
      },
      {
        selector: "main > section:nth-of-type(3) .process-grid h3",
        all: true,
        value: text(
          ["Liderazgo con criterio", "Trabajo honesto", "Evolución permanente"],
          ["Judgment-led leadership", "Honest work", "Continuous evolution"]
        )
      },
      {
        selector: "main > section:nth-of-type(3) .process-grid p",
        all: true,
        value: text(
          [
            "Priorizamos decisiones que sumen valor real y consoliden cada unidad en su propio mercado.",
            "Creemos en equipos comprometidos, procesos claros y relaciones de largo plazo.",
            "La inquietud por crecer y aprender forma parte de la identidad que sostiene al grupo."
          ],
          [
            "We prioritize decisions that add real value and strengthen each unit in its own market.",
            "We believe in committed teams, clear processes and long-term relationships.",
            "The drive to grow and learn is part of the identity that supports the group."
          ]
        )
      },
      { selector: "main > section:nth-of-type(4) .eyebrow", value: text("Unidades de negocio", "Business units") },
      {
        selector: "main > section:nth-of-type(4) h2",
        value: text("Una estructura ordenada por especialidad.", "A structure organized by specialization.")
      },
      {
        selector: "main > section:nth-of-type(4) .card-grid p",
        all: true,
        value: text(
          [
            "Espacios, exhibición e identidad visual aplicada a entornos comerciales e institucionales.",
            "Comercio exterior con enfoque operativo y articulación entre mercados estratégicos.",
            "Food solutions y packaging especializado con fuerte valor de presentación.",
            "Autoservicio, continuidad operativa y soluciones para cajeros extra bancarios.",
            "Diseño y equipamiento con sensibilidad premium para el entorno náutico.",
            "Estaciones de carga pensadas para sumar servicio y presencia en espacios de uso intensivo."
          ],
          [
            "Spaces, displays and visual identity applied to commercial and institutional environments.",
            "Foreign trade with an operational approach and coordination between strategic markets.",
            "Food solutions and specialized packaging with strong presentation value.",
            "Self-service, operational continuity and solutions for off-bank ATMs.",
            "Design and equipment with a premium sensitivity for the nautical environment.",
            "Charging stations built to add service and presence in high-use spaces."
          ]
        )
      }
    ]
  },
  hitos: {
    meta: {
      title: text("Hitos | Grupo DP", "Milestones | Grupo DP"),
      description: text(
        "Recorrido por las etapas de crecimiento y diversificación de Grupo DP.",
        "A look at Grupo DP's stages of growth and diversification."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio"], ["Home"]) },
      { selector: "nav.breadcrumbs strong", value: text("Hitos", "Milestones") },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Hitos", "Milestones") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Una expansión construida por etapas.", "An expansion built step by step.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Cada etapa incorporó nuevas herramientas, nuevos desafíos y nuevas oportunidades para consolidar una compañía cada vez más diversa.",
          "Each stage added new tools, new challenges and new opportunities to strengthen an increasingly diverse company."
        )
      },
      {
        selector: "main > section:nth-of-type(2) .eyebrow",
        value: text("Nuestro recorrido", "Our journey")
      },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text(
          "De la base productiva a una estructura diversificada.",
          "From a productive foundation to a diversified structure."
        )
      },
      {
        selector: "main > section:nth-of-type(2) .section-heading p",
        value: text(
          "La evolución de Grupo DP se explica mejor por su capacidad de ampliar horizontes que por una única especialidad. A medida que creció, también creció su campo de acción.",
          "Grupo DP's evolution is better explained by its ability to widen horizons than by a single specialty. As it grew, so did its field of action."
        )
      },
      {
        selector: "main > section:nth-of-type(2) .timeline .card",
        all: true,
        attr: "data-step",
        value: text(["Etapa 01", "Etapa 02", "Etapa 03", "Etapa 04"], ["Stage 01", "Stage 02", "Stage 03", "Stage 04"])
      },
      {
        selector: "main > section:nth-of-type(2) .timeline h3",
        all: true,
        value: text(
          ["Base industrial", "Consolidación comercial", "Diversificación", "Especialización"],
          ["Industrial foundation", "Commercial consolidation", "Diversification", "Specialization"]
        )
      },
      {
        selector: "main > section:nth-of-type(2) .timeline p",
        all: true,
        value: text(
          [
            "La experiencia en producción y resolución concreta fue el punto de partida del grupo.",
            "La identidad visual, la exhibición y los espacios comerciales ampliaron el alcance del negocio.",
            "Nuevas unidades incorporaron packaging, comercio exterior y operación de autoservicio.",
            "El grupo profundizó su presencia en propuestas premium y soluciones de alto valor agregado."
          ],
          [
            "Experience in production and hands-on execution was the group's starting point.",
            "Visual identity, display and commercial spaces expanded the reach of the business.",
            "New units added packaging, foreign trade and self-service operations.",
            "The group deepened its presence in premium proposals and high-value solutions."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Presente", "Present") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Expandirse también es dar dirección.", "Expanding also means setting direction.")
      },
      {
        selector: "main > section:nth-of-type(3) > .container > .split-layout > div:first-child p",
        value: text(
          "Hoy Grupo DP se proyecta como una compañía que articula especialidades distintas bajo una misma lógica: detectar oportunidades, construir estructura y sostener la calidad de cada desarrollo.",
          "Today, Grupo DP projects itself as a company that connects different specialties under one shared logic: identify opportunities, build structure and sustain the quality of every development."
        )
      },
      { selector: "main > section:nth-of-type(3) .panel h3", value: text("Áreas en expansión", "Growth areas") },
      {
        selector: "main > section:nth-of-type(3) .list-clean li",
        all: true,
        value: text(
          [
            "Industria publicitaria y ejecución comercial.",
            "Comercio exterior y articulación entre mercados.",
            "Packaging, autoservicio y soluciones especializadas.",
            "Propuestas premium para segmentos específicos."
          ],
          [
            "Advertising industry and commercial execution.",
            "Foreign trade and market coordination.",
            "Packaging, self-service and specialized solutions.",
            "Premium proposals for specific segments."
          ]
        )
      }
    ]
  },
  sustentabilidad: {
    meta: {
      title: text("Sustentabilidad | Grupo DP", "Sustainability | Grupo DP"),
      description: text(
        "La mirada de Grupo DP sobre sustentabilidad, eficiencia y mejora continua aplicada a sus procesos y decisiones.",
        "Grupo DP's perspective on sustainability, efficiency and continuous improvement applied to its processes and decisions."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio"], ["Home"]) },
      { selector: "nav.breadcrumbs strong", value: text("Sustentabilidad", "Sustainability") },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Sustentabilidad", "Sustainability") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Diseñar, producir y decidir con responsabilidad.", "Design, produce and decide responsibly.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Para Grupo DP, la sustentabilidad se expresa en la forma de trabajar: elegir mejor, optimizar procesos, extender la vida útil de cada solución y sostener una mejora continua que tenga impacto real.",
          "For Grupo DP, sustainability is expressed in the way it works: choosing better, optimizing processes, extending the useful life of each solution and sustaining continuous improvement with real impact."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media strong",
        value: text("Proceso, material o planta", "Process, material or plant")
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media span",
        value: text(
          "Detalle de producción, superficies, texturas o contexto industrial.",
          "Production detail, surfaces, textures or industrial context."
        )
      },
      { selector: "main > section:nth-of-type(2) .eyebrow", value: text("Principios", "Principles") },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Una práctica cotidiana, no un discurso aislado.", "A daily practice, not an isolated speech.")
      },
      {
        selector: "main > section:nth-of-type(2) .card-grid h3",
        all: true,
        value: text(
          ["Eficiencia", "Durabilidad", "Mejora continua", "Criterio material", "Escala responsable", "Innovación aplicada"],
          ["Efficiency", "Durability", "Continuous improvement", "Material judgment", "Responsible scale", "Applied innovation"]
        )
      },
      {
        selector: "main > section:nth-of-type(2) .card-grid p",
        all: true,
        value: text(
          [
            "Optimizar recursos y procesos para trabajar con mayor inteligencia y menor desperdicio.",
            "Desarrollar soluciones que puedan sostener uso, mantenimiento y continuidad en el tiempo.",
            "Revisar lo hecho para encontrar nuevas formas de producir mejor.",
            "Elegir materiales y procesos de acuerdo con el contexto real de cada proyecto.",
            "Crecer sin perder control, coherencia ni calidad entre las distintas unidades.",
            "Incorporar mejoras técnicas cuando agregan valor concreto al producto o al servicio."
          ],
          [
            "Optimize resources and processes to work more intelligently and with less waste.",
            "Develop solutions that can sustain use, maintenance and continuity over time.",
            "Review what has been done to find new ways of producing better.",
            "Choose materials and processes according to the real context of each project.",
            "Grow without losing control, coherence or quality across the different units.",
            "Incorporate technical improvements when they add concrete value to the product or service."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Compromiso", "Commitment") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("La calidad también se mide en el entorno.", "Quality is also measured by its environment.")
      },
      {
        selector: "main > section:nth-of-type(3) > .container > .split-layout > div:first-child p",
        value: text(
          "Nuestro enfoque busca equilibrar productividad, cuidado del entorno y mejora permanente, entendiendo que la sustentabilidad no es una capa adicional sino una parte esencial de la gestión.",
          "Our approach seeks to balance productivity, environmental care and constant improvement, understanding that sustainability is not an added layer but an essential part of management."
        )
      },
      {
        selector: "main > section:nth-of-type(3) .quote",
        value: text(
          "Trabajar mejor también implica producir con más conciencia y proyectar con mayor responsabilidad.",
          "Working better also means producing with more awareness and projecting with greater responsibility."
        )
      }
    ]
  },
  news: {
    meta: {
      title: text("News | Grupo DP", "News | Grupo DP"),
      description: text(
        "News de Grupo DP: una sección para compartir novedades, desarrollos y movimientos del grupo y sus unidades de negocio.",
        "Grupo DP News: a section to share updates, developments and movements across the group and its business units."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio"], ["Home"]) },
      { selector: "nav.breadcrumbs strong", value: text("News", "News") },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("News", "News") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Novedades y movimientos del grupo.", "Updates and moves across the group.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Esta sección reúne la dimensión editorial de Grupo DP: proyectos, lanzamientos, expansiones y acontecimientos institucionales vinculados a sus unidades de negocio.",
          "This section brings together the editorial dimension of Grupo DP: projects, launches, expansions and institutional developments related to its business units."
        )
      },
      { selector: "main > section:nth-of-type(2) .eyebrow", value: text("Temas", "Topics") },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Una agenda abierta sobre lo que pasa en Grupo DP.", "An open agenda about what is happening at Grupo DP.")
      },
      {
        selector: "main > section:nth-of-type(2) .news-grid h3",
        all: true,
        value: text(["Proyectos", "Lanzamientos", "Institucional"], ["Projects", "Launches", "Institutional"])
      },
      {
        selector: "main > section:nth-of-type(2) .news-grid p",
        all: true,
        value: text(
          [
            "Implementaciones, desarrollos especiales y casos que reflejan la capacidad de ejecución del grupo.",
            "Nuevos productos, formatos, propuestas o presentaciónes dentro de las distintas unidades.",
            "Novedades vinculadas al crecimiento del grupo, sus alianzas y sus movimientos estratégicos."
          ],
          [
            "Implementations, special developments and cases that reflect the group's execution capacity.",
            "New products, formats, proposals or presentations across the different units.",
            "News linked to the group's growth, partnerships and strategic moves."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Perspectiva", "Perspective") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Contar lo que hacemos también construye identidad.", "Sharing what we do also builds identity.")
      },
      {
        selector: "main > section:nth-of-type(3) > .container > .split-layout > div:first-child p",
        value: text(
          "La sección News acompaña el crecimiento del grupo desde una mirada editorial: poner en contexto los proyectos, dar visibilidad a los desarrollos y compartir la evolución de cada unidad en el momento adecuado.",
          "The News section supports the group's growth from an editorial point of view: putting projects in context, giving visibility to developments and sharing the evolution of each unit at the right time."
        )
      },
      { selector: "main > section:nth-of-type(3) .panel h3", value: text("Contenidos posibles", "Possible content") },
      {
        selector: "main > section:nth-of-type(3) .list-clean li",
        all: true,
        value: text(
          ["Casos destacados.", "Nuevas líneas o productos.", "Expansión de mercados y alianzas.", "Noticias institucionales del grupo."],
          ["Featured cases.", "New lines or products.", "Market expansion and partnerships.", "Institutional news from the group."]
        )
      }
    ]
  },
  contacto: {
    meta: {
      title: text("Contacto | Grupo DP", "Contact | Grupo DP"),
      description: text(
        "Canal institucional de Grupo DP para consultas generales, comerciales y vinculadas a sus unidades de negocio.",
        "Grupo DP's institutional channel for general, commercial and business-unit-related inquiries."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio"], ["Home"]) },
      { selector: "nav.breadcrumbs strong", value: text("Contacto", "Contact") },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Contacto", "Contact") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Un punto de entrada para dialogar con el grupo.", "A point of entry to connect with the group.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Nuestro equipo acompaña consultas institucionales y comerciales vinculadas a las distintas áreas de Grupo DP desde Buenos Aires, Argentina.",
          "Our team handles institutional and commercial inquiries connected to Grupo DP's different areas from Buenos Aires, Argentina."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media strong",
        value: text("Oficina, showroom o punto de atención", "Office, showroom or service point")
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media span",
        value: text(
          "Imagen institucional vinculada al contacto del grupo.",
          "Institutional image linked to the group's contact point."
        )
      },
      { selector: "main > section:nth-of-type(2) .eyebrow", value: text("Buenos Aires", "Buenos Aires") },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Una mirada amplia sobre distintos sectores.", "A broad view across different sectors.")
      },
      {
        selector: "main > section:nth-of-type(2) > .container > .split-layout > div:first-child p",
        value: text(
          "Si querés conocer más sobre una unidad de negocio, conversar sobre una oportunidad o ponerte en contacto con el grupo, podés hacerlo a través de nuestros canales institucionales.",
          "If you want to learn more about a business unit, discuss an opportunity or get in touch with the group, you can do so through our institutional channels."
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Canales disponibles", "Available channels") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          [
            "Instagram: @dpindustriapublicitaria",
            "Ubicación: Buenos Aires, Argentina.",
            "Consultas vinculadas a todas las unidades del grupo."
          ],
          [
            "Instagram: @dpindustriapublicitaria",
            "Location: Buenos Aires, Argentina.",
            "Inquiries related to every unit within the group."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Unidades de negocio", "Business units") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Orientación según el tipo de consulta.", "Guidance according to the type of inquiry.")
      },
      {
        selector: "main > section:nth-of-type(3) .contact-grid h3",
        all: true,
        value: text(
          ["Industria y exhibición", "Comercio exterior", "Food solutions", "Autoservicio", "Náutica", "Carga y energía"],
          ["Industry and display", "Foreign trade", "Food solutions", "Self-service", "Nautical", "Charging and energy"]
        )
      },
      { selector: "main > section:nth-of-type(3) .button-row .button", value: text("Ir a Instagram", "Go to Instagram") }
    ]
  },
  dp: {
    meta: {
      title: text("DP Industria Publicitaria | Grupo DP", "DP Industria Publicitaria | Grupo DP"),
      description: text(
        "DP Industria Publicitaria desarrolla soluciones integrales de identidad, exhibición y espacios comerciales.",
        "DP Industria Publicitaria develops end-to-end identity, display and commercial-space solutions."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Identidad, exhibición y espacios comerciales.", "Identity, display and commercial spaces.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "DP Industria Publicitaria trabaja junto a empresas e instituciones en el desarrollo de piezas, soportes y proyectos que combinan diseño, producción e implementación.",
          "DP Industria Publicitaria works with companies and institutions on pieces, structures and projects that combine design, production and implementation."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .tag",
        all: true,
        value: text(
          ["Imagen institucional", "Retail y banking", "Stands y exhibidores", "Obras integrales"],
          ["Institutional identity", "Retail and banking", "Stands and displays", "Integrated works"]
        )
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media strong",
        value: text("Proyecto destacado", "Featured project")
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media span",
        value: text(
          "Stand, fachada, interior comercial o instalación institucional.",
          "Stand, facade, commercial interior or institutional installation."
        )
      },
      { selector: "main > section:nth-of-type(2) .eyebrow", value: text("Qué hacemos", "What we do") },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Experiencias visuales en el espacio.", "Visual experiences in space.")
      },
      {
        selector: "main > section:nth-of-type(2) > .container > .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "La unidad reúne experiencia en gráfica, diseño industrial y ejecución para proyectos donde la presencia visual debe expresarse con claridad, escala y calidad de terminación.",
            "Su campo de acción va desde piezas puntuales hasta desarrollos llave en mano para entornos comerciales, institucionales y de exhibición."
          ],
          [
            "The unit brings together experience in graphics, industrial design and execution for projects where visual presence must be expressed with clarity, scale and finishing quality.",
            "Its scope ranges from specific pieces to turnkey developments for commercial, institutional and display environments."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Áreas de trabajo", "Work areas") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          [
            "Imagen institucional y ambientación comercial.",
            "Soluciones para retail, banking y espacios de atención.",
            "Diseño gráfico e industrial aplicado a soportes y estructuras.",
            "Fabricación, montaje y puesta en marcha de proyectos integrales."
          ],
          [
            "Institutional identity and commercial setting.",
            "Solutions for retail, banking and service spaces.",
            "Graphic and industrial design applied to supports and structures.",
            "Manufacturing, installation and launch of integrated projects."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Capacidades", "Capabilities") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Creatividad, técnica y ejecución.", "Creativity, technique and execution.")
      },
      {
        selector: "main > section:nth-of-type(3) .service-grid h3",
        all: true,
        value: text(
          ["Imagen institucional", "Stands y exhibidores", "Gráfica y ambientación", "Corte láser y letras corpóreas", "Diseño industrial", "Obras llave en mano"],
          ["Institutional identity", "Stands and displays", "Graphics and spatial styling", "Laser cutting and dimensional lettering", "Industrial design", "Turnkey works"]
        )
      },
      {
        selector: "main > section:nth-of-type(3) .service-grid p",
        all: true,
        value: text(
          [
            "Desarrollo visual para fachadas, interiores y puntos de contacto.",
            "Espacios pensados para exhibir, ordenar y generar una experiencia más sólida.",
            "Aplicaciones gráficas que acompañan recorridos, campañas y entornos comerciales.",
            "Piezas de precisión y volumen para señalización, identidad y presencia institucional.",
            "Soluciones funcionales y visuales desarrolladas con criterio productivo.",
            "Gestión integral desde el relevamiento inicial hasta la entrega final."
          ],
          [
            "Visual development for facades, interiors and customer touchpoints.",
            "Spaces designed to display, organize and create a stronger experience.",
            "Graphic applications that support journeys, campaigns and commercial environments.",
            "Precision and dimensional pieces for signage, identity and institutional presence.",
            "Functional and visual solutions developed with production judgment.",
            "End-to-end management from the first survey to final delivery."
          ]
        )
      },
      { selector: "main > section:nth-of-type(4) .eyebrow", value: text("Proyectos", "Projects") },
      {
        selector: "main > section:nth-of-type(4) h2",
        value: text("Proyectos pensados para hacerse visibles.", "Projects designed to become visible.")
      },
      {
        selector: "main > section:nth-of-type(4) .media-grid strong",
        all: true,
        value: text(["Espacios comerciales", "Stands y exhibición", "Piezas especiales"], ["Commercial spaces", "Stands and display", "Special pieces"])
      },
      {
        selector: "main > section:nth-of-type(4) .media-grid span",
        all: true,
        value: text(
          [
            "Locales, fachadas, interiores y señalización institucional.",
            "Ferias, activaciones y soportes para producto.",
            "Letras corpóreas, corte láser y soluciones de detalle."
          ],
          [
            "Stores, facades, interiors and institutional signage.",
            "Trade fairs, activations and product supports.",
            "Dimensional lettering, laser cutting and detail-driven solutions."
          ]
        )
      }
    ]
  },
  comex: {
    meta: {
      title: text("COMEX | Grupo DP", "COMEX | Grupo DP"),
      description: text(
        "COMEX brinda una mirada integral sobre comercio exterior, articulando gestión operativa, documentación y vinculación con mercados estratégicos.",
        "COMEX provides an end-to-end foreign trade perspective, coordinating operations, documentation and strategic market connections."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Comercio exterior con visión integral.", "Foreign trade with an end-to-end vision.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "COMEX acompaña operaciones internacionales desde una mirada práctica, ordenada y orientada a facilitar vínculos con mercados estratégicos.",
          "COMEX supports international operations from a practical, structured point of view focused on enabling connections with strategic markets."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .tag",
        all: true,
        value: text(
          ["Gestión integral", "Coordinación operativa", "Mercados estratégicos", "Visión internacional"],
          ["End-to-end management", "Operational coordination", "Strategic markets", "International outlook"]
        )
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media strong",
        value: text("Operación internacional", "International operation")
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media span",
        value: text("Mapa, logística, carga o movimiento de mercaderías.", "Map, logistics, cargo or movement of goods.")
      },
      { selector: "main > section:nth-of-type(2) .eyebrow", value: text("Qué hacemos", "What we do") },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Comercio exterior con una gestión más clara.", "Foreign trade with clearer management.")
      },
      {
        selector: "main > section:nth-of-type(2) > .container > .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "La unidad trabaja sobre procesos de importación y exportación entendiendo que una buena operación depende tanto del negocio como de la coordinación entre tiempos, actores, documentación y logística.",
            "Su enfoque integra criterio comercial y orden operativo para acompañar decisiones con una mirada más amplia sobre el recorrido de cada operación."
          ],
          [
            "The unit works on import and export processes understanding that a good operation depends on the business as much as on the coordination between timelines, stakeholders, documentation and logistics.",
            "Its approach integrates commercial judgment and operational order to support decisions with a broader view of each operation's path."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Enfoque de trabajo", "Working approach") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          [
            "Lectura integral de la operación.",
            "Coordinación documental y administrativa.",
            "Articulación logística según destino y origen.",
            "Vinculación con mercados estratégicos."
          ],
          [
            "End-to-end reading of the operation.",
            "Document and administrative coordination.",
            "Logistics coordination according to destination and origin.",
            "Connection with strategic markets."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Mercados", "Markets") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Mercados estratégicos.", "Strategic markets.")
      },
      {
        selector: "main > section:nth-of-type(3) .market-grid h3",
        all: true,
        value: text(["Estados Unidos", "China", "Portugal", "Brasil", "España"], ["United States", "China", "Portugal", "Brazil", "Spain"])
      },
      {
        selector: "main > section:nth-of-type(3) .market-grid p",
        all: true,
        value: text(
          [
            "Un mercado relevante para oportunidades comerciales y articulación internacional.",
            "Origen estratégico para abastecimiento, escala y búsqueda de proveedores.",
            "Vínculo con Europa y operaciones de perfil especializado.",
            "Mercado regional clave por cercanía, escala y dinamismo comercial.",
            "Destino y origen con afinidad cultural y proyección comercial."
          ],
          [
            "A relevant market for commercial opportunities and international coordination.",
            "A strategic origin for sourcing, scale and supplier search.",
            "A bridge to Europe and specialized operations.",
            "A key regional market because of proximity, scale and commercial dynamism.",
            "Destination and origin with cultural affinity and commercial projection."
          ]
        )
      },
      { selector: "main > section:nth-of-type(4) .eyebrow", value: text("Servicios", "Services") },
      {
        selector: "main > section:nth-of-type(4) h2",
        value: text("Gestión de punta a punta.", "End-to-end management.")
      },
      {
        selector: "main > section:nth-of-type(4) .service-grid h3",
        all: true,
        value: text(
          ["Gestión integral", "Documentación", "Logística", "Importación y exportación", "Vinculación comercial"],
          ["End-to-end management", "Documentation", "Logistics", "Import and export", "Commercial linking"]
        )
      },
      {
        selector: "main > section:nth-of-type(4) .service-grid p",
        all: true,
        value: text(
          [
            "Coordinación general para ordenar las distintas etapas de una operación internacional.",
            "Organización administrativa y seguimiento de procesos documentales.",
            "Lectura del recorrido operativo y articulación entre necesidades de transporte y tiempos.",
            "Acompañamiento estratégico para operaciones de entrada o salida de productos.",
            "Conexión entre oportunidades locales y actores internacionales relevantes."
          ],
          [
            "Overall coordination to organize the different stages of an international operation.",
            "Administrative organization and follow-up of documentary processes.",
            "Operational-route reading and coordination between transport needs and timelines.",
            "Strategic support for inbound or outbound product operations.",
            "Connection between local opportunities and relevant international players."
          ]
        )
      }
    ]
  },
  pack: {
    meta: {
      title: text("Pack Gourmet | Grupo DP", "Pack Gourmet | Grupo DP"),
      description: text(
        "Pack Gourmet desarrolla food solutions y soluciones de envasado para terceros y líneas propias.",
        "Pack Gourmet develops food solutions and packaging systems for third parties and in-house lines."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Food solutions con una nueva presencia.", "Food solutions with a new presence.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Pack Gourmet desarrolla soluciones de envasado en recipientes transparentes tipo lata, con cierre seguro y una fuerte vocación por mejorar la presentación del producto.",
          "Pack Gourmet develops packaging solutions in transparent can-like containers with secure closure and a strong drive to enhance product presentation."
        )
      },
      { selector: "main > section:nth-of-type(1) .hero-card .quote", value: text("Envasamos ideas.", "We package ideas.") },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media strong",
        value: text("Envase, tapa y producto final", "Container, lid and finished product")
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media span",
        value: text(
          "Packshot de sistema de envasado, variantes y exhibición.",
          "Packshot of the packaging system, variants and display."
        )
      },
      { selector: "main > section:nth-of-type(2) .eyebrow", value: text("Qué hacemos", "What we do") },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Conservación, impacto visual y diferenciación.", "Preservation, visual impact and differentiation.")
      },
      {
        selector: "main > section:nth-of-type(2) > .container > .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "La propuesta se apoya en un recipiente similar a una lata, pero realizado en plástico transparente. El formato permite mostrar el contenido, sellarlo y conservarlo hasta el momento de apertura, generando una experiencia distinta desde el envase.",
            "Su versatilidad lo vuelve apto para múltiples aplicaciones, tanto en desarrollos para terceros como en líneas propias de producto."
          ],
          [
            "The proposal is built around a container similar to a can, but made of transparent plastic. The format makes it possible to show the contents, seal them and preserve them until opening, creating a distinct experience from the package itself.",
            "Its versatility makes it suitable for multiple applications, both in third-party developments and in in-house product lines."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Atributos del formato", "Format attributes") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          [
            "Alta visibilidad del contenido.",
            "Cierre seguro y apertura asociada al consumo.",
            "Aplicación en productos sólidos o líquidos.",
            "Potencial de exhibición y diferenciación en góndola."
          ],
          [
            "High visibility of the contents.",
            "Secure closure and opening linked to consumption.",
            "Suitable for solid or liquid products.",
            "Strong display and shelf-differentiation potential."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Modelos de trabajo", "Ways of working") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Dos formas de desarrollar la propuesta.", "Two ways to develop the proposal.")
      },
      {
        selector: "main > section:nth-of-type(3) .route-card__label",
        all: true,
        value: text(["Servicio para terceros", "Desarrollos propios"], ["Third-party service", "In-house developments"])
      },
      {
        selector: "main > section:nth-of-type(3) .route-card h3",
        all: true,
        value: text(
          ["Traé tu producto y lo envasamos.", "Productos o desarrollos con identidad propia."],
          ["Bring your product and we package it.", "Products or developments with their own identity."]
        )
      },
      {
        selector: "main > section:nth-of-type(3) .route-card p",
        all: true,
        value: text(
          [
            "Una modalidad orientada a empresas que ya cuentan con su producto y buscan un sistema de packaging más atractivo, funcional y diferenciado.",
            "Una línea pensada para crear productos propios donde el envase también forme parte de la propuesta comercial y del posicionamiento."
          ],
          [
            "A model aimed at companies that already have a product and are looking for a more attractive, functional and differentiated packaging system.",
            "A line created to build in-house products where the package is also part of the commercial proposal and the positioning."
          ]
        )
      },
      { selector: "main > section:nth-of-type(4) .eyebrow", value: text("Capacidades", "Capabilities") },
      {
        selector: "main > section:nth-of-type(4) h2",
        value: text("Packaging, presentación y desarrollo comercial.", "Packaging, presentation and commercial development.")
      },
      {
        selector: "main > section:nth-of-type(4) .service-grid h3",
        all: true,
        value: text(
          ["Envasado para terceros", "Recipientes y tapas", "Soluciones para exhibición", "Food solutions", "Líneas propias"],
          ["Third-party packaging", "Containers and lids", "Display solutions", "Food solutions", "In-house lines"]
        )
      },
      {
        selector: "main > section:nth-of-type(4) .service-grid p",
        all: true,
        value: text(
          [
            "Servicio B2B para empresas que quieren transformar la manera en que presentan su producto.",
            "Opciones de formato para adaptar el sistema de cierre al contenido y al uso.",
            "Desarrollo de exhibidores y soportes que acompañan el posicionamiento del producto.",
            "Una mirada amplia sobre el producto, su conservación y su experiencia de consumo.",
            "Construcción de identidad para productos desarrollados dentro de la unidad."
          ],
          [
            "A B2B service for companies that want to transform how they present their product.",
            "Format options to adapt the closure system to the content and its use.",
            "Development of displays and supports that reinforce the product's positioning.",
            "A broad view of the product, its preservation and its consumption experience.",
            "Identity building for products developed within the unit."
          ]
        )
      },
      { selector: "main > section:nth-of-type(5) .eyebrow", value: text("Desarrollos", "Developments") },
      {
        selector: "main > section:nth-of-type(5) h2",
        value: text("Primeras líneas de la propuesta.", "First lines of the proposal.")
      },
      {
        selector: "main > section:nth-of-type(5) .card-grid p",
        all: true,
        value: text(
          [
            "Una línea preparada para construirse desde el envase, la identidad y la experiencia del producto.",
            "Un desarrollo con perfil funcional, pensado para una presentación distintiva y contemporánea."
          ],
          [
            "A line prepared to be built from the package, the identity and the product experience.",
            "A functional development designed for a distinctive and contemporary presentation."
          ]
        )
      },
      {
        selector: "main > section:nth-of-type(5) .placeholder-media strong",
        value: text("Producto y exhibición", "Product and display")
      },
      {
        selector: "main > section:nth-of-type(5) .placeholder-media span",
        value: text("Packshot, línea completa o material promocional.", "Packshot, full line or promotional material.")
      }
    ]
  },
  efectivo: {
    meta: {
      title: text("Efectivo 365 | Grupo DP", "Efectivo 365 | Grupo DP"),
      description: text(
        "Efectivo 365 desarrolla soluciones para cajeros automáticos extra bancarios, con comercialización, instalación, mantenimiento y operación.",
        "Efectivo 365 develops solutions for off-bank ATMs, including commercialization, installation, maintenance and operation."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Autoservicio para entornos extra bancarios.", "Self-service for off-bank environments.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Efectivo 365 reúne comercialización, instalación, mantenimiento y operación de cajeros automáticos para ampliar disponibilidad de servicio en distintos contextos.",
          "Efectivo 365 brings together commercialization, installation, maintenance and ATM operation to expand service availability in different contexts."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .tag",
        all: true,
        value: text(
          ["Compra y consignación", "Instalación", "Mantenimiento", "Software y logística"],
          ["Purchase and consignment", "Installation", "Maintenance", "Software and logistics"]
        )
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media strong",
        value: text("Cajero en funcionamiento", "ATM in operation")
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media span",
        value: text("Equipo instalado, punto de atención o contexto de uso.", "Installed unit, service point or usage context.")
      },
      { selector: "main > section:nth-of-type(2) .eyebrow", value: text("Qué hacemos", "What we do") },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Equipos y operación dentro de una misma propuesta.", "Equipment and operations within one proposal.")
      },
      {
        selector: "main > section:nth-of-type(2) > .container > .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "La unidad está orientada al desarrollo de soluciones de autoservicio que necesitan algo más que el equipo: necesitan instalación, monitoreo, mantenimiento y continuidad.",
            "Ese enfoque integral permite pensar al cajero automático como parte de una red de servicio, y no solo como una pieza aislada."
          ],
          [
            "The unit is focused on developing self-service solutions that need more than the hardware itself: they need installation, monitoring, maintenance and continuity.",
            "That integrated approach makes it possible to think of the ATM as part of a service network, not merely as an isolated piece of equipment."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Alcance", "Scope") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          [
            "Compra, venta y consignación de equipos.",
            "Instalación y puesta en marcha.",
            "Soporte técnico, software y mantenimiento.",
            "Logística y operación de red."
          ],
          [
            "Purchase, sale and consignment of equipment.",
            "Installation and commissioning.",
            "Technical support, software and maintenance.",
            "Logistics and network operation."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Servicios", "Services") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Una estructura pensada para sostener el servicio.", "A structure designed to sustain the service.")
      },
      {
        selector: "main > section:nth-of-type(3) .service-grid h3",
        all: true,
        value: text(
          ["Comercialización", "Instalación", "Mantenimiento", "Software y monitoreo", "Logística y reposición", "Operación integral"],
          ["Commercialization", "Installation", "Maintenance", "Software and monitoring", "Logistics and replenishment", "End-to-end operation"]
        )
      },
      {
        selector: "main > section:nth-of-type(3) .service-grid p",
        all: true,
        value: text(
          [
            "Compra, venta y consignación de cajeros automáticos según necesidad operativa.",
            "Montaje y puesta en marcha con foco en operatividad y confiabilidad.",
            "Soporte preventivo y correctivo para asegurar continuidad del servicio.",
            "Herramientas para seguimiento, control y gestión de la operación.",
            "Coordinación de los recursos necesarios para que la red siga funcionando.",
            "Una mirada completa sobre el servicio, desde el equipo hasta su desempeño en campo."
          ],
          [
            "Purchase, sale and consignment of ATMs according to operational need.",
            "Assembly and commissioning focused on operability and reliability.",
            "Preventive and corrective support to ensure service continuity.",
            "Tools for tracking, control and operation management.",
            "Coordination of the resources required to keep the network running.",
            "A complete view of the service, from the unit itself to field performance."
          ]
        )
      },
      { selector: "main > section:nth-of-type(4) .eyebrow", value: text("Casos", "Cases") },
      {
        selector: "main > section:nth-of-type(4) h2",
        value: text("Implementaciones y entornos de uso.", "Implementations and use environments.")
      },
      {
        selector: "main > section:nth-of-type(4) .media-grid strong",
        all: true,
        value: text(["Cajero Express Tucumán", "Cajero Express Bariloche", "Operación y soporte"], ["Cajero Express Tucumán", "Cajero Express Bariloche", "Operation and support"])
      },
      {
        selector: "main > section:nth-of-type(4) .media-grid span",
        all: true,
        value: text(
          [
            "Video, imágenes o síntesis del caso.",
            "Video, imágenes o síntesis del caso.",
            "Software, monitoreo o escenas de mantenimiento."
          ],
          [
            "Video, imagery or case summary.",
            "Video, imagery or case summary.",
            "Software, monitoring or maintenance scenes."
          ]
        )
      }
    ]
  },
  nautik: {
    meta: {
      title: text("Nautik | Grupo DP", "Nautik | Grupo DP"),
      description: text(
        "Nautik desarrolla soluciones de diseño y equipamiento para embarcaciones, con una mirada premium sobre el detalle y la funcionalidad.",
        "Nautik develops design and equipment solutions for vessels, with a premium view of detail and functionality."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Diseño y equipamiento para embarcaciones.", "Design and equipment for vessels.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Nautik reúne identidad, restyling y piezas especiales para embarcaciones y espacios vinculados al agua, combinando detalle, funcionalidad y presencia.",
          "Nautik brings together identity, restyling and special pieces for vessels and water-linked spaces, combining detail, functionality and presence."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .tag",
        all: true,
        value: text(["Restyling", "Identidad náutica", "Piezas especiales", "Marinas"], ["Restyling", "Nautical identity", "Special pieces", "Marinas"])
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media strong",
        value: text("Embarcación o marina", "Boat or marina")
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media span",
        value: text("Exterior, interior o contexto náutico con lenguaje premium.", "Exterior, interior or nautical context with premium language.")
      },
      { selector: "main > section:nth-of-type(2) .eyebrow", value: text("Qué hacemos", "What we do") },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Detalle, materialidad y experiencia a bordo.", "Detail, materiality and the onboard experience.")
      },
      {
        selector: "main > section:nth-of-type(2) > .container > .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "La unidad está pensada para desarrollar soluciones que mejoran la vida a bordo y la percepción del espacio, integrando piezas funcionales con una mirada estética más cuidada.",
            "El resultado es una propuesta donde diseño y uso conviven de forma natural."
          ],
          [
            "The unit is designed to develop solutions that improve life on board and the perception of space, integrating functional pieces with a more refined aesthetic view.",
            "The result is a proposal where design and use coexist naturally."
          ]
        )
      },
      {
        selector: "main > section:nth-of-type(2) .quote",
        value: text(
          "La experiencia náutica también se construye en los materiales, las terminaciónes y la forma en que cada pieza acompaña el uso.",
          "The nautical experience is also built through materials, finishes and the way each piece supports use."
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Capacidades", "Capabilities") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Equipamiento para distintos momentos a bordo.", "Equipment for different moments on board.")
      },
      {
        selector: "main > section:nth-of-type(3) .service-grid h3",
        all: true,
        value: text(
          ["Identidad para embarcaciones", "Restyling", "Tableros y puertas", "Mesas, divisiones y accesorios", "Cavas exhibidores", "Torre energética para marinas"],
          ["Identity for boats", "Restyling", "Panels and doors", "Tables, partitions and accessories", "Display wine cellars", "Energy tower for marinas"]
        )
      },
      {
        selector: "main > section:nth-of-type(3) .service-grid p",
        all: true,
        value: text(
          [
            "Aplicaciones visuales y materiales que refuerzan carácter y presencia.",
            "Actualizaciones estéticas y funcionales para renovar la experiencia de uso.",
            "Piezas especiales desarrolladas para integrarse con precisión al conjunto.",
            "Elementos que ordenan, acompañan y elevan la experiencia a bordo.",
            "Soluciones donde la funcionalidad se combina con una presentación refinada.",
            "Una pieza multifunción pensada para marinas y desarrollos náuticos de alto nivel."
          ],
          [
            "Visual and material applications that reinforce character and presence.",
            "Aesthetic and functional updates to renew the experience of use.",
            "Special pieces developed to integrate precisely with the whole.",
            "Elements that organize, support and elevate the experience on board.",
            "Solutions where functionality combines with refined presentation.",
            "A multifunctional piece designed for marinas and high-end nautical developments."
          ]
        )
      },
      { selector: "main > section:nth-of-type(4) .eyebrow", value: text("Producto destacado", "Featured product") },
      {
        selector: "main > section:nth-of-type(4) h2",
        value: text("Torre energética para marinas.", "Energy tower for marinas.")
      },
      {
        selector: "main > section:nth-of-type(4) > .container > .split-layout > div:first-child p",
        value: text(
          "Uno de los desarrollos más representativos de la unidad es esta solución para marinas, concebida para integrar funcionalidad, presencia y servicio en un mismo cuerpo.",
          "One of the unit's most representative developments is this marina solution, conceived to integrate functionality, presence and service into a single body."
        )
      },
      {
        selector: "main > section:nth-of-type(4) .spec-grid h3",
        all: true,
        value: text(["Prestaciones", "Materialidad", "Aplicaciones", "Detalle técnico"], ["Features", "Materiality", "Applications", "Technical detail"])
      },
      {
        selector: "main > section:nth-of-type(4) .spec-grid p",
        all: true,
        value: text(
          [
            "Servicios y funciones integradas según configuración del proyecto.",
            "Terminaciones y componentes pensados para el entorno náutico.",
            "Marinas, puertos deportivos y desarrollos premium vinculados al agua.",
            "Medidas, capacidades e instalación según información final del producto."
          ],
          [
            "Integrated services and functions according to project configuration.",
            "Finishes and components designed for the nautical environment.",
            "Marinas, yacht harbors and premium developments linked to the water.",
            "Dimensions, capacities and installation according to the final product information."
          ]
        )
      },
      { selector: "main > section:nth-of-type(5) .eyebrow", value: text("Imágenes", "Imagery") },
      {
        selector: "main > section:nth-of-type(5) h2",
        value: text("Una unidad construida también desde lo visual.", "A unit also built through visual language.")
      },
      {
        selector: "main > section:nth-of-type(5) .media-grid strong",
        all: true,
        value: text(["Interiores y cubiertas", "Restyling", "Torre energética"], ["Interiors and decks", "Restyling", "Energy tower"])
      },
      {
        selector: "main > section:nth-of-type(5) .media-grid span",
        all: true,
        value: text(
          [
            "Mesas, puertas, divisiones y accesorios aplicados.",
            "Proyectos de renovación estética y funcional.",
            "Producto, render o video de aplicación en marina."
          ],
          [
            "Applied tables, doors, partitions and accessories.",
            "Aesthetic and functional renewal projects.",
            "Product, render or application video in a marina."
          ]
        )
      }
    ]
  },
  power: {
    meta: {
      title: text("Power Station | Grupo DP", "Power Station | Grupo DP"),
      description: text(
        "Power Station desarrolla estaciones de carga para celulares pensadas para espacios de alto tránsito.",
        "Power Station develops cell-phone charging stations designed for high-traffic spaces."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Estaciones de carga para espacios de alto tránsito.", "Charging stations for high-traffic spaces.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Power Station se organiza en torno a una solución concreta: una torre de carga para celulares pensada para aportar servicio, presencia y utilidad en contextos de uso intensivo.",
          "Power Station is built around a concrete solution: a cell-phone charging tower designed to add service, presence and utility in high-use environments."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .tag",
        all: true,
        value: text(
          ["Producto insignia", "Servicio al usuario", "Espacios de espera", "Aplicación flexible"],
          ["Flagship product", "User service", "Waiting areas", "Flexible application"]
        )
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media strong",
        value: text("Torre de carga instalada", "Installed charging tower")
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media span",
        value: text("Render, producto en uso o vista técnica del equipo.", "Render, product in use or technical view of the unit.")
      },
      { selector: "main > section:nth-of-type(2) .eyebrow", value: text("Qué hacemos", "What we do") },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Una necesidad cotidiana convertida en solución.", "An everyday need turned into a solution.")
      },
      {
        selector: "main > section:nth-of-type(2) > .container > .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "La unidad nace alrededor de un producto capaz de sumar valor inmediato en ferias, locales, ámbitos corporativos o espacios de espera: ofrecer energía disponible donde las personas realmente la necesitan.",
            "Su potencial está en combinar funcionalidad, diseño y presencia dentro del entorno en el que se instala."
          ],
          [
            "The unit was born around a product capable of adding immediate value in fairs, retail spaces, corporate environments or waiting areas: offering available power where people really need it.",
            "Its potential lies in combining functionality, design and presence within the environment where it is installed."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Aplicaciones", "Applications") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          [
            "Eventos, ferias y congresos.",
            "Locales comerciales y espacios de permanencia.",
            "Ámbitos corporativos o institucionales.",
            "Puntos de contacto con alto flujo de personas."
          ],
          [
            "Events, fairs and conferences.",
            "Retail locations and stay-oriented spaces.",
            "Corporate or institutional environments.",
            "Touchpoints with a high flow of people."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Beneficios", "Benefits") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Servicio visible y alto valor percibido.", "Visible service and high perceived value.")
      },
      {
        selector: "main > section:nth-of-type(3) .card-grid h3",
        all: true,
        value: text(["Servicio", "Presencia", "Proyección"], ["Service", "Presence", "Projection"])
      },
      {
        selector: "main > section:nth-of-type(3) .card-grid p",
        all: true,
        value: text(
          [
            "Aporta una utilidad concreta que mejora la experiencia del usuario dentro del espacio.",
            "Se integra como pieza funcional y, al mismo tiempo, como elemento visible del entorno.",
            "La unidad queda abierta a futuras extensiones de línea o aplicaciones complementarias."
          ],
          [
            "It adds a concrete utility that improves the user's experience within the space.",
            "It integrates as a functional piece and, at the same time, as a visible element within the environment.",
            "The unit remains open to future line extensions or complementary applications."
          ]
        )
      },
      { selector: "main > section:nth-of-type(4) .eyebrow", value: text("Ficha técnica", "Technical sheet") },
      {
        selector: "main > section:nth-of-type(4) h2",
        value: text("Un producto con perfil técnico propio.", "A product with its own technical profile.")
      },
      {
        selector: "main > section:nth-of-type(4) .spec-grid h3",
        all: true,
        value: text(["Dimensiones", "Conectividad", "Materiales", "Instalación"], ["Dimensions", "Connectivity", "Materials", "Installation"])
      },
      {
        selector: "main > section:nth-of-type(4) .spec-grid p",
        all: true,
        value: text(
          [
            "Medidas, peso y formato general del equipo.",
            "Tipos de conexión, potencia y cantidad de puntos de carga disponibles.",
            "Estructura, terminaciónes y opciones de personalización.",
            "Condiciones de uso, anclaje y requerimientos operativos."
          ],
          [
            "Measurements, weight and overall format of the unit.",
            "Connection types, power and number of available charging points.",
            "Structure, finishes and customization options.",
            "Conditions of use, anchoring and operational requirements."
          ]
        )
      },
      { selector: "main > section:nth-of-type(5) .eyebrow", value: text("Imágenes", "Imagery") },
      {
        selector: "main > section:nth-of-type(5) h2",
        value: text("Escenas de uso y vistas del producto.", "Usage scenes and product views.")
      },
      {
        selector: "main > section:nth-of-type(5) .media-grid strong",
        all: true,
        value: text(["Producto en contexto", "Vista técnica", "Video de producto"], ["Product in context", "Technical view", "Product video"])
      },
      {
        selector: "main > section:nth-of-type(5) .media-grid span",
        all: true,
        value: text(
          [
            "Feria, lobby, local o espacio institucional.",
            "Render, frente o lateral del equipo.",
            "Presentación de uso, beneficios y presencia en el espacio."
          ],
          [
            "Fair, lobby, store or institutional environment.",
            "Render, front or side view of the unit.",
            "Presentation of use, benefits and presence within the space."
          ]
        )
      }
    ]
  }
};

const storedLanguage = (() => {
  try {
    return window.localStorage.getItem(languageStorageKey);
  } catch (error) {
    return null;
  }
})();

const queryLanguage = new URLSearchParams(window.location.search).get("lang");

let currentLanguage =
  queryLanguage === "en" || queryLanguage === "es"
    ? queryLanguage
    : storedLanguage === "en"
      ? "en"
      : "es";

const href = (path) => {
  if (!path) {
    return path;
  }

  if (
    path.startsWith("#") ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }

  const resolved = `${base}${path}`;
  if (currentLanguage !== "en") {
    return resolved;
  }

  return resolved.includes("?") ? `${resolved}&lang=en` : `${resolved}?lang=en`;
};

const isCurrent = (slug) => (page === slug ? "is-current" : "");
const isCurrentSection = (section) =>
  navSections[page] === section ? "is-current-section" : "";

const getCopy = (token, language = currentLanguage) => token[language];

const setStoredLanguage = (language) => {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch (error) {
    // Ignore storage failures in private mode or restricted contexts.
  }
};

const updateLanguageQuery = (language) => {
  const url = new URL(window.location.href);
  if (language === "en") {
    url.searchParams.set("lang", "en");
  } else {
    url.searchParams.delete("lang");
  }

  window.history.replaceState({}, "", url);
};

const renderChrome = () => {
  const ui = chromeCopy[currentLanguage];

  document.querySelectorAll(".skip-link, .site-header, .site-footer").forEach((node) => node.remove());

  const institutionalLinks = `
    <a class="${isCurrent("quienes")}" href="${href(routes.quienes)}">
      ${ui.about}
      <span>${currentLanguage === "es" ? "La visión, el recorrido y el perfil del grupo" : "The vision, track record and profile of the group"}</span>
    </a>
    <a class="${isCurrent("hitos")}" href="${href(routes.hitos)}">
      ${ui.milestones}
      <span>${currentLanguage === "es" ? "Etapas de crecimiento y diversificación" : "Growth and diversification milestones"}</span>
    </a>
    <a class="${isCurrent("sustentabilidad")}" href="${href(routes.sustentabilidad)}">
      ${ui.sustainability}
      <span>${currentLanguage === "es" ? "Una mirada responsable sobre el hacer cotidiano" : "A responsible approach to everyday work"}</span>
    </a>
    <a class="${isCurrent("news")}" href="${href(routes.news)}">
      ${ui.news}
      <span>${currentLanguage === "es" ? "Novedades, desarrollos y movimientos del grupo" : "Updates, developments and moves across the group"}</span>
    </a>
  `;

  const businessUnitLinks = brands
    .map(
      (brand) => `
        <a class="${isCurrent(brand.key)}" href="${href(brand.path)}">
          ${brand.label}
          <span>${getCopy(brand.navDescription)}</span>
        </a>
      `
    )
    .join("");

  const headerMarkup = `
    <a class="skip-link" href="#contenido">${ui.skipLink}</a>
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand-mark" href="${href(routes.home)}" aria-label="${ui.brandAria}">
          <span class="brand-mark__title">GRUPO DP</span>
          <span class="brand-mark__subtitle">${ui.brandSubtitle}</span>
        </a>
        <div class="header-tools">
          <nav class="site-nav" id="site-nav" aria-label="${ui.navAria}">
            <a class="nav-link ${isCurrent("home")}" href="${href(routes.home)}">${ui.home}</a>
            <div class="nav-item ${isCurrentSection("institucional")}">
              <button class="nav-disclosure" type="button" aria-expanded="false">${ui.institutional}</button>
              <div class="nav-panel">${institutionalLinks}</div>
            </div>
            <div class="nav-item ${isCurrentSection("unidades")}">
              <button class="nav-disclosure" type="button" aria-expanded="false">${ui.businessUnits}</button>
              <div class="nav-panel nav-panel--wide">${businessUnitLinks}</div>
            </div>
            <a class="nav-cta ${isCurrentSection("contacto")}" href="${href(routes.contacto)}">${ui.contact}</a>
          </nav>
          <div class="lang-switch" role="group" aria-label="${ui.languageLabel}">
            <button class="lang-switch__button ${currentLanguage === "es" ? "is-active" : ""}" type="button" data-set-language="es">ES</button>
            <button class="lang-switch__button ${currentLanguage === "en" ? "is-active" : ""}" type="button" data-set-language="en">EN</button>
          </div>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">${ui.menu}</button>
        </div>
      </div>
    </header>
  `;

  const footerMarkup = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <span class="footer-title">Grupo DP</span>
            <p>${ui.footerSummary}</p>
          </div>
          <div>
            <span class="footer-title">${ui.footerInstitutional}</span>
            <div class="footer-links">
              <a href="${href(routes.quienes)}">${ui.about}</a>
              <a href="${href(routes.hitos)}">${ui.milestones}</a>
              <a href="${href(routes.sustentabilidad)}">${ui.sustainability}</a>
              <a href="${href(routes.news)}">${ui.news}</a>
            </div>
          </div>
          <div>
            <span class="footer-title">${ui.footerBusiness}</span>
            <div class="footer-links">
              ${brands
                .map((brand) => `<a href="${href(brand.path)}">${brand.label}</a>`)
                .join("")}
            </div>
          </div>
          <div>
            <span class="footer-title">${ui.footerContact}</span>
            <div class="footer-links">
              <span>${ui.footerLocation}</span>
              <span>${ui.footerEmail}</span>
              <span>${ui.footerPhone}</span>
              <span>${ui.footerHours}</span>
              <a href="${href(routes.contacto)}">${ui.footerChannel}</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span data-current-year></span> Grupo DP</span>
          <span>${ui.footerTagline}</span>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerMarkup);
  document.body.insertAdjacentHTML("beforeend", footerMarkup);

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  bindHeaderControls();
  syncHeaderState();
};

const closeMobileNavigation = () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navItems = [...document.querySelectorAll(".nav-item")];

  if (!navToggle || !siteNav) {
    return;
  }

  siteNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");

  navItems.forEach((item) => {
    item.classList.remove("is-open");
    const disclosure = item.querySelector(".nav-disclosure");
    if (disclosure) {
      disclosure.setAttribute("aria-expanded", "false");
    }
  });
};

const bindHeaderControls = () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navItems = [...document.querySelectorAll(".nav-item")];
  const languageButtons = [...document.querySelectorAll("[data-set-language]")];

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  navItems.forEach((item) => {
    const button = item.querySelector(".nav-disclosure");
    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      if (window.innerWidth > 860) {
        return;
      }

      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.setLanguage === "en" ? "en" : "es";
      if (nextLanguage === currentLanguage) {
        return;
      }

      applyLanguage(nextLanguage);
    });
  });
};

const syncHeaderState = () => {
  const header = document.querySelector(".site-header");
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

document.addEventListener("click", (event) => {
  if (window.innerWidth > 860) {
    return;
  }

  const siteNav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");

  if (!siteNav || !navToggle) {
    return;
  }

  if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
    closeMobileNavigation();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    closeMobileNavigation();
  }
});

window.addEventListener("scroll", syncHeaderState, { passive: true });

const applyEntries = (entries = []) => {
  entries.forEach((entry) => {
    const value = getCopy(entry.value);

    if (entry.all) {
      const nodes = [...document.querySelectorAll(entry.selector)];
      const values = Array.isArray(value) ? value : [value];

      nodes.forEach((node, index) => {
        const nextValue = values[index];
        if (nextValue === undefined) {
          return;
        }

        if (entry.attr) {
          node.setAttribute(entry.attr, nextValue);
        } else {
          node.textContent = nextValue;
        }
      });

      return;
    }

    const node = document.querySelector(entry.selector);
    if (!node || value === undefined) {
      return;
    }

    if (entry.attr) {
      node.setAttribute(entry.attr, value);
    } else {
      node.textContent = value;
    }
  });
};

const applyMetaTranslations = (meta = {}) => {
  if (meta.title) {
    document.title = getCopy(meta.title);
  }

  if (meta.description) {
    const node = document.querySelector('meta[name="description"]');
    if (node) {
      node.setAttribute("content", getCopy(meta.description));
    }
  }

  if (meta.ogDescription) {
    const node = document.querySelector('meta[property="og:description"]');
    if (node) {
      node.setAttribute("content", getCopy(meta.ogDescription));
    }
  }

  const localeNode = document.querySelector('meta[property="og:locale"]');
  if (localeNode) {
    localeNode.setAttribute("content", currentLanguage === "en" ? "en_US" : "es_AR");
  }

  document.documentElement.lang = currentLanguage;
};

const renderHomeMarquee = () => {
  const track = document.querySelector("[data-logo-track]");
  if (!track) {
    return;
  }

  const tileMarkup = (duplicate = false) =>
    brands
      .map(
        (brand) => `
          <a
            class="logo-pill"
            href="${href(brand.path)}"
            ${duplicate ? 'aria-hidden="true" tabindex="-1"' : ""}
          >
            <span class="logo-pill__sector">${getCopy(brand.marqueeSector)}</span>
            <strong class="logo-pill__title">${brand.label}</strong>
          </a>
        `
      )
      .join("");

  track.innerHTML = `
    <div class="logo-marquee__group">${tileMarkup(false)}</div>
    <div class="logo-marquee__group" aria-hidden="true">${tileMarkup(true)}</div>
  `;
};

const getCurrentBrand = () => brands.find((brand) => brand.key === page);

const renderUnitMeta = () => {
  const container = document.querySelector("[data-unit-meta]");
  const currentBrand = getCurrentBrand();

  if (!container || !currentBrand || !currentBrand.unitMeta) {
    return;
  }

  container.innerHTML = currentBrand.unitMeta
    .map(
      (item) => `
        <article class="meta-item">
          <strong>${getCopy(item.value)}</strong>
          <span>${getCopy(item.label)}</span>
        </article>
      `
    )
    .join("");
};

const renderRelatedBrands = () => {
  const container = document.querySelector("[data-related-brands]");
  const eyebrow = document.querySelector(".unit-related__eyebrow");
  const title = document.querySelector(".unit-related__title");
  const currentBrand = getCurrentBrand();

  if (!container || !currentBrand) {
    return;
  }

  if (eyebrow) {
    eyebrow.textContent = currentLanguage === "en" ? "Other units" : "Otras unidades";
  }

  if (title) {
    title.textContent =
      currentLanguage === "en" ? "Also within Grupo DP." : "También dentro de Grupo DP.";
  }

  const currentIndex = brands.findIndex((brand) => brand.key === currentBrand.key);
  const orderedBrands = [...brands.slice(currentIndex + 1), ...brands.slice(0, currentIndex)].slice(
    0,
    3
  );

  container.innerHTML = orderedBrands
    .map(
      (brand) => `
        <article class="brand-card">
          <div class="brand-card__meta">
            <span>${getCopy(brand.marqueeSector)}</span>
            <span class="brand-card__arrow">+</span>
          </div>
          <h3>${brand.label}</h3>
          <p>${getCopy(brand.navDescription)}</p>
          <a class="button button--ghost" href="${href(brand.path)}">${
            currentLanguage === "en" ? "View unit" : "Ver unidad"
          }</a>
        </article>
      `
    )
    .join("");
};

const updateHomeLinks = () => {
  const secondaryButton = document.querySelector(".home-hero__secondary");
  if (secondaryButton) {
    secondaryButton.setAttribute("href", href(routes.quienes));
  }
};

const revealables = [...document.querySelectorAll("[data-reveal]")];
let revealObserver = null;

const setupRevealObserver = () => {
  if (revealables.length === 0) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealables.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealables.forEach((node) => revealObserver.observe(node));
};

const applyLanguage = (language) => {
  currentLanguage = language === "en" ? "en" : "es";
  setStoredLanguage(currentLanguage);
  updateLanguageQuery(currentLanguage);
  renderChrome();

  const pageConfig = pageTranslations[page];
  if (pageConfig) {
    applyMetaTranslations(pageConfig.meta);
    applyEntries(pageConfig.texts);
  } else {
    applyMetaTranslations();
  }

  renderHomeMarquee();
  renderUnitMeta();
  renderRelatedBrands();
  updateHomeLinks();
};

applyLanguage(currentLanguage);
setupRevealObserver();
