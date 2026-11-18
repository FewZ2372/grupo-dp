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
  dphome: "unidades/dp-home/",
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
  dphome: "unidades",
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
        value: text("Diseño a colocación", "Design to installation"),
        label: text(
          "Creación, materiales, producción y colocación en cualquier punto del país.",
          "Creation, materials, production and installation anywhere in the country."
        )
      },
      {
        value: text("Llave en mano", "Turnkey"),
        label: text(
          "Obras completas, de la idea a la entrega, dentro de un mismo recorrido.",
          "Complete works, from idea to delivery, within the same project flow."
        )
      },
      {
        value: text("Láser + señalética", "Laser + Signage"),
        label: text(
          "Corte, letras corpóreas y piezas especiales de terminación.",
          "Cutting, dimensional lettering and special finishing pieces."
        )
      }
    ],
    navDescription: text(
      "Comunicación visual: diseño, producción y colocación",
      "Visual communication: design, production and installation"
    ),
    marqueeSector: text("Industria y comunicación", "Industry and communication"),
    logo: "logos/SVG/03_DP_INDUSTRIA_PUBLICITARIA.svg",
    marqueeBg: "#171a1d",
    marqueeText: "#ffffff",
    marqueeDescription: text(
      "Diseño, producción, logística y colocación de materiales para la comunicación visual en todo el país.",
      "Design, production, logistics and installation of visual communication materials throughout the country."
    )
  },
  {
    key: "dphome",
    path: routes.dphome,
    label: "DP Home",
    unitMeta: [
      {
        value: text("Arquitectura moderna", "Modern architecture"),
        label: text(
          "Proyectos de arquitectura con una mirada actual.",
          "Architecture projects with a contemporary approach."
        )
      },
      {
        value: text("Refacciones", "Renovations"),
        label: text(
          "Refacciones y obras llave en mano.",
          "Renovations and turnkey works."
        )
      },
      {
        value: text("Línea propia", "Own line"),
        label: text(
          "Mesas de arrime, porta rollos, porta toallas y carritos auxiliares.",
          "Console tables, roll holders, towel holders and utility carts."
        )
      }
    ],
    navDescription: text(
      "Arquitectura moderna, refacciones y productos propios",
      "Modern architecture, renovations and own products"
    ),
    marqueeSector: text("Arquitectura y hogar", "Architecture and home"),
    logo: "logos/SVG/02_DP_HOME.svg",
    marqueeBg: "#171a1d",
    marqueeText: "#ffffff",
    marqueeDescription: text(
      "Arquitectura moderna, refacciones, obras llave en mano y una línea de productos propios para el hogar.",
      "Modern architecture, renovations, turnkey works and an own line of home products."
    )
  },
  {
    key: "comex",
    path: routes.comex,
    label: "COMEX",
    unitMeta: [
      {
        value: text("20 años", "20 years"),
        label: text(
          "Soluciones de comercio exterior con servicio personalizado, dinámico y seguro.",
          "Foreign trade solutions with a personalized, dynamic and secure service."
        )
      },
      {
        value: text("Importación + distribución", "Import + distribution"),
        label: text(
          "Comunicación visual (acrílicos y PVC espumado) y cargadores HUB.",
          "Visual communication materials (acrylics and foamed PVC) and HUB chargers."
        )
      },
      {
        value: text("Despacho + seguro", "Customs + insurance"),
        label: text(
          "Despacho aduanero, transporte internacional y seguro de mercaderías.",
          "Customs clearance, international transport and cargo insurance."
        )
      }
    ],
    navDescription: text(
      "Comercio exterior: importación, despacho y logística",
      "Foreign trade: import, customs and logistics"
    ),
    marqueeSector: text("Comercio exterior", "Foreign trade"),
    logo: "logos/SVG/04_DP_COMEX.svg",
    marqueeBg: "#171a1d",
    marqueeText: "#ffffff",
    marqueeDescription: text(
      "Hace 20 años brinda soluciones de comercio exterior con servicio personalizado, dinámico y seguro.",
      "For 20 years providing foreign trade solutions with a personalized, dynamic and secure service."
    )
  },
  {
    key: "pack",
    path: routes.pack,
    label: "Pack Gourmet",
    unitMeta: [
      {
        value: text("Packaging", "Packaging"),
        label: text(
          "Máquinas de sellado, envases PET y soluciones de packaging.",
          "Sealing machines, PET containers and packaging solutions."
        )
      },
      {
        value: text("Envasado", "Filling"),
        label: text(
          "Líquidos y sólidos en latas de PET alimentario.",
          "Liquids and solids in food-grade PET cans."
        )
      },
      {
        value: text("Productos propios", "Own products"),
        label: text(
          "Agua four pack y traguitos preparados para eventos.",
          "Four-pack water and ready-made shots for events."
        )
      }
    ],
    navDescription: text(
      "Packaging, envasado y productos propios",
      "Packaging, filling and own products"
    ),
    marqueeSector: text("Packaging y envasado", "Packaging and filling"),
    logo: "logos/SVG/06_DP_PACK_GOURMET.svg",
    marqueeBg: "#171a1d",
    marqueeText: "#ffffff",
    marqueeDescription: text(
      "Máquinas de sellado, envases PET, envasado en latas de PET alimentario y desarrollo de productos.",
      "Sealing machines, PET containers, food-grade PET can filling and product development."
    )
  },
  {
    key: "efectivo",
    path: routes.efectivo,
    label: "Efectivo 365",
    unitMeta: [
      {
        value: text("Red propia", "Own network"),
        label: text(
          "ATM en estaciones de servicio y puntos estratégicos de todo el país.",
          "ATMs at service stations and strategic points across the country."
        )
      },
      {
        value: text("+30 años", "30+ years"),
        label: text(
          "Experiencia en servicios integrales del mundo ATM.",
          "Experience in end-to-end ATM services."
        )
      },
      {
        value: text("Billeteras virtuales", "Digital wallets"),
        label: text(
          "Desarrollo de billeteras virtuales y administración de redes de terceros.",
          "Digital wallet development and third-party network management."
        )
      }
    ],
    navDescription: text(
      "Red de ATM y servicios integrales",
      "ATM network and end-to-end services"
    ),
    marqueeSector: text("Cajeros automáticos", "ATMs"),
    logo: "logos/SVG/05_DP_EFECTIVO_365.svg",
    marqueeBg: "#171a1d",
    marqueeText: "#ffffff",
    marqueeDescription: text(
      "Red propia de ATM en todo el país, administración de redes de terceros y billeteras virtuales.",
      "Own ATM network nationwide, third-party network management and digital wallets."
    )
  },
  {
    key: "nautik",
    path: routes.nautik,
    label: "Nautik",
    unitMeta: [
      {
        value: text("Accesorios náuticos", "Nautical accessories"),
        label: text(
          "Desarrollo y fabricación de todo tipo de accesorios para embarcaciones.",
          "Development and manufacturing of all kinds of boat accessories."
        )
      },
      {
        value: text("Piezas propias", "In-house pieces"),
        label: text(
          "Tableros, nombres con luz, portacápsulas, estantes, puertas y muebles.",
          "Panels, illuminated names, capsule holders, shelves, doors and furniture."
        )
      },
      {
        value: text("Power Nautik", "Power Nautik"),
        label: text(
          "Torre energética de acero inoxidable con tablero estanco IP65.",
          "Stainless steel energy tower with IP65 watertight panel."
        )
      }
    ],
    navDescription: text(
      "Accesorios para embarcaciones y torre Power Nautik",
      "Boat accessories and the Power Nautik tower"
    ),
    marqueeSector: text("Soluciones náuticas", "Nautical solutions"),
    logo: "logos/SVG/08_DP_NAUTIK.svg",
    marqueeBg: "#171a1d",
    marqueeText: "#ffffff",
    marqueeDescription: text(
      "Desarrollo y fabricación de accesorios para embarcaciones y torres energéticas para marinas.",
      "Development and manufacturing of boat accessories and energy towers for marinas."
    )
  },
  {
    key: "power",
    path: routes.power,
    label: "Power Station",
    unitMeta: [
      {
        value: text("Torres con locker", "Towers with locker"),
        label: text(
          "Carga para celulares, tablets y otros dispositivos.",
          "Charging for phones, tablets and other devices."
        )
      },
      {
        value: text("Cable 3 en 1", "3-in-1 cable"),
        label: text(
          "Un solo cable para cargar distintos dispositivos.",
          "A single cable to charge different devices."
        )
      },
      {
        value: text("HUB de 6 salidas", "6-outlet HUB"),
        label: text(
          "Enchufe de pared para cargar varios equipos a la vez.",
          "Wall plug to charge several devices at once."
        )
      }
    ],
    navDescription: text(
      "Soluciones integrales de carga para dispositivos",
      "Integrated charging solutions for devices"
    ),
    marqueeSector: text("Soluciones de carga", "Charging solutions"),
    logo: "logos/SVG/07_DP_POWER_STATION.svg",
    marqueeBg: "#171a1d",
    marqueeText: "#ffffff",
    marqueeDescription: text(
      "Torres con locker, cable 3 en 1, HUB de 6 salidas y desarrollos especiales de carga.",
      "Towers with locker, 3-in-1 cable, 6-outlet HUB and special charging developments."
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
    footerLocation: "Agustín de Vedia 2180, Tablada, Buenos Aires, Argentina",
    footerEmail: "gestion@grupodp.com.ar",
    footerPhone: "Tel.: +54 11 2121-2020 / 0404",
    footerWhatsapp: "WhatsApp: +54 9 11 3218-8885",
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
    footerLocation: "Agustín de Vedia 2180, Tablada, Buenos Aires, Argentina",
    footerEmail: "gestion@grupodp.com.ar",
    footerPhone: "Phone: +54 11 2121-2020 / 0404",
    footerWhatsapp: "WhatsApp: +54 9 11 3218-8885",
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
        "Grupo DP es una compa\u00f1\u00eda argentina que articula unidades de negocio vinculadas a industria, arquitectura y hogar, comercio exterior, packaging, cajeros autom\u00e1ticos, n\u00e1utica y soluciones especializadas.",
        "Grupo DP is an Argentine company that connects business units linked to industry, architecture and home, foreign trade, packaging, ATMs, nautical and specialized solutions."
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
          "Grupo DP re\u00fane siete unidades con perfiles complementarios en industria, arquitectura y hogar, comercio exterior, packaging, cajeros autom\u00e1ticos, n\u00e1utica y soluciones de carga desde Buenos Aires, Argentina.",
          "Grupo DP brings together seven complementary units in industry, architecture and home, foreign trade, packaging, ATMs, nautical solutions and charging systems from Buenos Aires, Argentina."
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
            "Soluciones alimentarias y packaging especializado con fuerte valor de presentación.",
            "Cajeros automáticos, continuidad operativa y soluciones para redes extra bancarias.",
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
        selector: "main > section:nth-of-type(2) .split-layout > div:first-child p",
        value: text(
          "Si querés conocer más sobre una unidad de negocio, conversar sobre una oportunidad o ponerte en contacto con el grupo, podés hacerlo a través de nuestros canales institucionales.",
          "If you want to learn more about a business unit, discuss an opportunity or get in touch with the group, you can do so through our institutional channels."
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Canales disponibles", "Available channels") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li > span",
        all: true,
        value: text(
          [
            "Correo electrónico:",
            "WhatsApp:",
            "Teléfono:",
            "Dirección:",
            "Instagram:",
            "Consultas vinculadas a todas las unidades del grupo."
          ],
          [
            "Email:",
            "WhatsApp:",
            "Phone:",
            "Address:",
            "Instagram:",
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
          ["Industria y exhibición", "Arquitectura y hogar", "Comercio exterior", "Soluciones alimentarias", "Cajeros automáticos", "Soluciones náuticas", "Carga y energía"],
          ["Industry and display", "Architecture and home", "Foreign trade", "Food solutions", "ATMs", "Nautical solutions", "Charging and energy"]
        )
      },
      { selector: "main > section:nth-of-type(3) .button-row .button", value: text("Ir a Instagram", "Go to Instagram") }
    ]
  },
  dp: {
    meta: {
      title: text("DP Industria Publicitaria | Grupo DP", "DP Industria Publicitaria | Grupo DP"),
      description: text(
        "DP Industria Publicitaria diseña, desarrolla, produce y gestiona la logística de materiales para comunicación visual, con colocación en cualquier punto del país.",
        "DP Industria Publicitaria designs, develops, produces and manages the logistics of visual communication materials, with installation anywhere in the country."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Comunicación visual, del diseño a la colocación.", "Visual communication, from design to installation.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Diseñamos, desarrollamos, producimos y gestionamos la logística de materiales para la comunicación visual, con colocación en cualquier punto del país.",
          "We design, develop, produce and manage the logistics of visual communication materials, with installation anywhere in the country."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .tag",
        all: true,
        value: text(
          ["Imagen institucional", "Soporte bancario", "Tótems y exhibidores", "Obras integrales"],
          ["Institutional identity", "Banking support", "Totems and displays", "Integrated works"]
        )
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media strong",
        value: text("Comunicación visual aplicada", "Applied visual communication")
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media span",
        value: text(
          "Fachadas, stands, exhibidores, letras corpóreas y piezas institucionales.",
          "Facades, stands, displays, dimensional lettering and institutional pieces."
        )
      },
      { selector: "main > section:nth-of-type(2) .eyebrow", value: text("Qué hacemos", "What we do") },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Todo el proyecto, con un mismo equipo.", "The whole project, with a single team.")
      },
      {
        selector: "main > section:nth-of-type(2) .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "Abarcamos todos los aspectos del proyecto: desde su creación, pasando por la elección de los materiales más convenientes y su elaboración, hasta la colocación en cualquier punto del país.",
            "La calidad de nuestro experimentado equipo de trabajo respalda la confiabilidad de cada producto. La capacitación y la investigación permanentes nos permiten adaptar recursos y servicios a los cambios que exige el mercado actual.",
            "Mantenemos una atención diferencial en cada trabajo y damos lo mejor de nosotros para lograr los resultados más óptimos en cada campaña que emprenden nuestros clientes."
          ],
          [
            "We cover every aspect of the project: from creation, through choosing the most suitable materials and producing them, to installation anywhere in the country.",
            "The quality of our experienced team supports the reliability of every product. Ongoing training and research allow us to adapt our resources and services to the changes demanded by today's market.",
            "We keep a differentiated level of care in every job and do our best to achieve the optimal results in every campaign our clients undertake."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Servicios principales", "Main services") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          [
            "Proceso productivo, diseño gráfico e industrial, tecnología y equipamiento.",
            "Imagen institucional, gráfica y decoración comercial.",
            "Letras corpóreas, corte y grabado láser, tótems y exhibidores.",
            "Stands, support banking y obras llave en mano."
          ],
          [
            "Production process, graphic and industrial design, technology and equipment.",
            "Institutional identity, graphics and commercial decoration.",
            "Dimensional lettering, laser cutting and engraving, totems and displays.",
            "Stands, support banking and turnkey works."
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
          ["Imagen institucional", "Soporte bancario", "Gráfica y decoración comercial", "Corte y grabado láser", "Letras corpóreas", "Obras llave en mano"],
          ["Institutional identity", "Banking support", "Graphics and commercial decoration", "Laser cutting and engraving", "Dimensional lettering", "Turnkey works"]
        )
      },
      {
        selector: "main > section:nth-of-type(3) .service-grid p",
        all: true,
        value: text(
          [
            "Desarrollo visual para fachadas, interiores y puntos de contacto.",
            "Soluciones visuales y funcionales para espacios de atención y operación bancaria.",
            "Aplicaciones gráficas que acompañan recorridos, campañas y entornos comerciales.",
            "Piezas de precisión para señalización, identidad y terminaciones especiales.",
            "Volumen, presencia y lectura clara para fachadas, interiores y puntos de contacto.",
            "Gestión integral desde el relevamiento inicial hasta la entrega final."
          ],
          [
            "Visual development for facades, interiors and customer touchpoints.",
            "Visual and functional solutions for banking service and operation spaces.",
            "Graphic applications that support journeys, campaigns and commercial environments.",
            "Precision pieces for signage, identity and special finishes.",
            "Volume, presence and clear readability for facades, interiors and touchpoints.",
            "End-to-end management from the first survey to final delivery."
          ]
        )
      }
    ]
  },
  comex: {
    meta: {
      title: text("COMEX | Grupo DP", "COMEX | Grupo DP"),
      description: text(
        "COMEX brinda desde hace 20 años soluciones de comercio exterior con servicio personalizado, dinámico y seguro: importación y distribución, despacho aduanero, transporte internacional y seguro de mercaderías.",
        "For 20 years COMEX has provided foreign trade solutions with a personalized, dynamic and secure service: import and distribution, customs clearance, international transport and cargo insurance."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Veinte años de comercio exterior.", "Twenty years of foreign trade.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Desde hace 20 años brindamos soluciones de comercio exterior a través de un servicio personalizado, dinámico y seguro.",
          "For 20 years we have provided foreign trade solutions through a personalized, dynamic and secure service."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .tag",
        all: true,
        value: text(
          ["Importación y distribución", "Despacho aduanero", "Transporte internacional", "Seguro de mercaderías"],
          ["Import and distribution", "Customs clearance", "International transport", "Cargo insurance"]
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
        value: text(
          "Una gestión de comercio exterior cercana y confiable.",
          "Close, reliable foreign trade management."
        )
      },
      {
        selector: "main > section:nth-of-type(2) .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "Acompañamos cada operación con un servicio personalizado, dinámico y seguro, desde el asesoramiento inicial del proyecto hasta la entrega de la mercadería.",
            "Importamos y distribuimos materiales de comunicación visual y cargadores de celular, y buscamos productos a pedido con proveedores homologados en el exterior."
          ],
          [
            "We support every operation with a personalized, dynamic and secure service, from the initial project advice to the delivery of the goods.",
            "We import and distribute visual communication materials and mobile phone chargers, and source products on request through approved suppliers abroad."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Enfoque de trabajo", "Working approach") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          [
            "Servicio personalizado para cada proyecto.",
            "Proveedores homologados en el exterior.",
            "Seguridad jurídica aduanera.",
            "Gestión integral, del origen al destino."
          ],
          [
            "Personalized service for every project.",
            "Approved suppliers abroad.",
            "Legal certainty in customs matters.",
            "End-to-end management, from origin to destination."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Auditoría", "Audits") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text(
          "Auditoría de empresas en Estados Unidos y China.",
          "Company audits in the United States and China."
        )
      },
      {
        selector: "main > section:nth-of-type(3) .market-grid h3",
        all: true,
        value: text(["Estados Unidos", "China"], ["United States", "China"])
      },
      {
        selector: "main > section:nth-of-type(3) .market-grid p",
        all: true,
        value: text(
          [
            "Auditoría de empresas para validar proveedores antes de operar.",
            "Auditoría de empresas para validar proveedores antes de operar."
          ],
          [
            "Company audits to validate suppliers before operating.",
            "Company audits to validate suppliers before operating."
          ]
        )
      },
      { selector: "main > section:nth-of-type(4) .eyebrow", value: text("Servicios", "Services") },
      {
        selector: "main > section:nth-of-type(4) h2",
        value: text("Soluciones de punta a punta.", "End-to-end solutions.")
      },
      {
        selector: "main > section:nth-of-type(4) .service-grid h3",
        all: true,
        value: text(
          [
            "Importación y distribución",
            "Asesoría y búsqueda de productos",
            "Certificaciones y seguridad jurídica",
            "Despacho aduanero",
            "Transporte y seguro"
          ],
          [
            "Import and distribution",
            "Advisory and product sourcing",
            "Certifications and legal certainty",
            "Customs clearance",
            "Transport and insurance"
          ]
        )
      },
      {
        selector: "main > section:nth-of-type(4) .service-grid p",
        all: true,
        value: text(
          [
            "Materiales de comunicación visual (acrílicos y PVC espumado), cargadores de celular HUB y cables 3 en 1.",
            "Servicio internacional, asesoría en proyectos y búsqueda de productos a pedido con proveedores homologados.",
            "Gestión de certificaciones e intervenciones ante organismos, con seguridad jurídica aduanera.",
            "Gestión del despacho de mercaderías para que cada operación avance en tiempo y forma.",
            "Transporte internacional y seguro de mercaderías para proteger cada envío."
          ],
          [
            "Visual communication materials (acrylics and foamed PVC), HUB mobile chargers and 3-in-1 cables.",
            "International service, project advisory and on-request product sourcing through approved suppliers.",
            "Management of certifications and procedures before regulatory bodies, with legal certainty in customs matters.",
            "Customs clearance management so that every operation moves forward on time and in the right way.",
            "International transport and cargo insurance to protect every shipment."
          ]
        )
      }
    ]
  },
  pack: {
    meta: {
      title: text("Pack Gourmet | Grupo DP", "Pack Gourmet | Grupo DP"),
      description: text(
        "Pack Gourmet comercializa máquinas de sellado, envases PET y soluciones de packaging, envasa líquidos y sólidos en latas de PET alimentario y desarrolla productos para terceros y propios.",
        "Pack Gourmet sells sealing machines, PET containers and packaging solutions, fills liquids and solids in food-grade PET cans, and develops products for third parties and its own brands."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Packaging y soluciones de envasado.", "Packaging and filling solutions.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Comercializamos máquinas de sellado, envases PET y soluciones de packaging, y envasamos todo tipo de líquidos y sólidos en latas de PET alimentario.",
          "We sell sealing machines, PET containers and packaging solutions, and we fill all kinds of liquids and solids in food-grade PET cans."
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
        value: text(
          "Packaging, envasado y desarrollo de productos.",
          "Packaging, filling and product development."
        )
      },
      {
        selector: "main > section:nth-of-type(2) .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "Ofrecemos soluciones de packaging integrales: comercializamos máquinas de sellado y envases PET, y envasamos todo tipo de líquidos y sólidos en latas de PET alimentario.",
            "También desarrollamos productos para terceros y contamos con nuestra propia línea de productos."
          ],
          [
            "We offer complete packaging solutions: we sell sealing machines and PET containers, and we fill all kinds of liquids and solids in food-grade PET cans.",
            "We also develop products for third parties and have our own line of products."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Qué ofrecemos", "What we offer") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          [
            "Máquinas de sellado.",
            "Envases PET.",
            "Soluciones de packaging.",
            "Envasado de líquidos y sólidos en latas de PET alimentario."
          ],
          [
            "Sealing machines.",
            "PET containers.",
            "Packaging solutions.",
            "Filling of liquids and solids in food-grade PET cans."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Modelos de trabajo", "Ways of working") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Dos formas de trabajar con nosotros.", "Two ways to work with us.")
      },
      {
        selector: "main > section:nth-of-type(3) .route-card__label",
        all: true,
        value: text(["Servicio para terceros", "Productos propios"], ["Third-party service", "Own products"])
      },
      {
        selector: "main > section:nth-of-type(3) .route-card h3",
        all: true,
        value: text(
          ["Desarrollo de productos para terceros.", "Agua four pack y traguitos para eventos."],
          ["Product development for third parties.", "Four-pack water and shots for events."]
        )
      },
      {
        selector: "main > section:nth-of-type(3) .route-card p",
        all: true,
        value: text(
          [
            "Desarrollamos productos para terceros y envasamos todo tipo de líquidos y sólidos en latas de PET alimentario.",
            "Una línea propia de productos: agua four pack y traguitos preparados para eventos."
          ],
          [
            "We develop products for third parties and fill all kinds of liquids and solids in food-grade PET cans.",
            "Our own product line: four-pack water and ready-made shots for events."
          ]
        )
      },
      { selector: "main > section:nth-of-type(4) .eyebrow", value: text("Capacidades", "Capabilities") },
      {
        selector: "main > section:nth-of-type(4) h2",
        value: text("Packaging, envasado y desarrollo.", "Packaging, filling and development.")
      },
      {
        selector: "main > section:nth-of-type(4) .service-grid h3",
        all: true,
        value: text(
          [
            "Máquinas de sellado",
            "Envases PET",
            "Soluciones de packaging",
            "Envasado en latas de PET alimentario",
            "Desarrollo para terceros"
          ],
          [
            "Sealing machines",
            "PET containers",
            "Packaging solutions",
            "Filling in food-grade PET cans",
            "Development for third parties"
          ]
        )
      },
      {
        selector: "main > section:nth-of-type(4) .service-grid p",
        all: true,
        value: text(
          [
            "Comercialización de máquinas de sellado.",
            "Comercialización de envases PET.",
            "Soluciones de packaging para distintos productos.",
            "Envasamos todo tipo de líquidos y sólidos.",
            "Desarrollo de productos para terceros."
          ],
          [
            "Sales of sealing machines.",
            "Sales of PET containers.",
            "Packaging solutions for different products.",
            "We fill all kinds of liquids and solids.",
            "Product development for third parties."
          ]
        )
      },
      { selector: "main > section:nth-of-type(5) .eyebrow", value: text("Productos propios", "Own products") },
      {
        selector: "main > section:nth-of-type(5) h2",
        value: text("Nuestra línea de productos.", "Our product line.")
      },
      {
        selector: "main > section:nth-of-type(5) .card-grid h3",
        all: true,
        value: text(["Agua four pack", "Traguitos para eventos"], ["Four-pack water", "Shots for events"])
      },
      {
        selector: "main > section:nth-of-type(5) .card-grid p",
        all: true,
        value: text(
          ["Agua envasada en formato four pack.", "Traguitos preparados, pensados para eventos."],
          ["Bottled water in a four-pack format.", "Ready-made shots designed for events."]
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
        "Efectivo 365 cuenta con una red propia de ATM en estaciones de servicio y puntos estratégicos de todo el país, administra redes de terceros y desarrolla billeteras virtuales, con más de 30 años de experiencia.",
        "Efectivo 365 operates its own ATM network at service stations and strategic points across the country, manages third-party networks and develops digital wallets, with over 30 years of experience."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Una red de ATM en todo el país.", "An ATM network across the country.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Contamos con una red propia de ATM en estaciones de servicio y puntos estratégicos distribuidos en todo el país, y brindamos servicios integrales del mundo ATM con más de 30 años de experiencia.",
          "We run our own ATM network at service stations and strategic points across the country, and provide end-to-end ATM services with over 30 years of experience."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .tag",
        all: true,
        value: text(
          ["Red propia de ATM", "Redes de terceros", "Más de 30 años", "Billeteras virtuales"],
          ["Own ATM network", "Third-party networks", "30+ years", "Digital wallets"]
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
        value: text("Más de 30 años en el mundo ATM.", "Over 30 years in the ATM world.")
      },
      {
        selector: "main > section:nth-of-type(2) .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "Operamos una red propia de ATM ubicada en estaciones de servicio y en puntos estratégicos de todo el país.",
            "Además administramos redes de terceros, brindamos servicios integrales del mundo ATM y desarrollamos billeteras virtuales."
          ],
          [
            "We operate our own ATM network, located at service stations and strategic points across the country.",
            "We also manage third-party networks, provide end-to-end ATM services and develop digital wallets."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Alcance", "Scope") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          [
            "Red propia de ATM en estaciones de servicio y puntos estratégicos.",
            "Administración de redes de terceros.",
            "Servicios integrales del mundo ATM.",
            "Desarrollo de billeteras virtuales."
          ],
          [
            "Own ATM network at service stations and strategic points.",
            "Management of third-party networks.",
            "End-to-end ATM services.",
            "Development of digital wallets."
          ]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Servicios", "Services") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Una estructura para sostener el servicio.", "A structure to sustain the service.")
      },
      {
        selector: "main > section:nth-of-type(3) .service-grid h3",
        all: true,
        value: text(
          ["Red propia de ATM", "Administración de redes de terceros", "Servicios integrales ATM", "Billeteras virtuales"],
          ["Own ATM network", "Third-party network management", "End-to-end ATM services", "Digital wallets"]
        )
      },
      {
        selector: "main > section:nth-of-type(3) .service-grid p",
        all: true,
        value: text(
          [
            "Cajeros en estaciones de servicio y puntos estratégicos distribuidos en todo el país.",
            "Gestionamos redes de ATM de otras empresas.",
            "Más de 30 años de experiencia en el mundo ATM.",
            "Desarrollo de billeteras virtuales."
          ],
          [
            "ATMs at service stations and strategic points distributed across the country.",
            "We manage ATM networks for other companies.",
            "Over 30 years of experience in the ATM world.",
            "Development of digital wallets."
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
        "Nautik desarrolla y fabrica accesorios para embarcaciones: tableros, nombres con luz, portacápsulas, estantes, puertas, muebles, portabotellas y juegos de mesa. Incluye Power Nautik, torre energética para marinas.",
        "Nautik develops and manufactures boat accessories: panels, illuminated names, capsule holders, shelves, doors, furniture, bottle holders and board games. Includes Power Nautik, an energy tower for marinas."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Accesorios para embarcaciones.", "Accessories for boats.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Desarrollamos y fabricamos todo tipo de accesorios para embarcaciones, y sumamos Power Nautik, una torre energética para marinas, clubes y amarras privadas.",
          "We develop and manufacture all kinds of boat accessories, and we offer Power Nautik, an energy tower for marinas, clubs and private moorings."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .tag",
        all: true,
        value: text(
          ["Accesorios náuticos", "Desarrollo y fabricación", "Power Nautik", "Marinas"],
          ["Nautical accessories", "Development and manufacturing", "Power Nautik", "Marinas"]
        )
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
        value: text("Piezas pensadas para la vida a bordo.", "Pieces designed for life on board.")
      },
      {
        selector: "main > section:nth-of-type(2) .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "Desarrollamos y fabricamos todo tipo de accesorios para embarcaciones, integrando funcionalidad y una terminación cuidada en cada pieza.",
            "Nuestra línea incluye tableros, nombres con luz, portacápsulas, estantes, puertas, muebles, portabotellas y juegos de mesa."
          ],
          [
            "We develop and manufacture all kinds of boat accessories, combining functionality and careful finishing in every piece.",
            "Our line includes panels, illuminated names, capsule holders, shelves, doors, furniture, bottle holders and board games."
          ]
        )
      },
      {
        selector: "main > section:nth-of-type(2) .quote",
        value: text(
          "La experiencia náutica también se construye en los materiales, las terminaciones y la forma en que cada pieza acompaña el uso.",
          "The nautical experience is also built through materials, finishes and the way each piece supports use."
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Productos", "Products") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Accesorios para distintos momentos a bordo.", "Accessories for every moment on board.")
      },
      {
        selector: "main > section:nth-of-type(3) .service-grid h3",
        all: true,
        value: text(
          ["Tableros", "Nombres con luz", "Puertas y muebles", "Estantes", "Portacápsulas y portabotellas", "Juegos de mesa"],
          ["Panels", "Illuminated names", "Doors and furniture", "Shelves", "Capsule and bottle holders", "Board games"]
        )
      },
      {
        selector: "main > section:nth-of-type(3) .service-grid p",
        all: true,
        value: text(
          [
            "Tableros para embarcaciones, desarrollados y fabricados por Nautik.",
            "Nombres iluminados para identificar cada embarcación.",
            "Puertas y muebles para el equipamiento de a bordo.",
            "Estantes para ordenar y aprovechar el espacio.",
            "Accesorios para tener a mano lo que se usa a bordo.",
            "Juegos de mesa para disfrutar la navegación."
          ],
          [
            "Panels for boats, developed and manufactured by Nautik.",
            "Illuminated names to identify each vessel.",
            "Doors and furniture for on-board outfitting.",
            "Shelves to organize and make the most of the space.",
            "Accessories to keep on-board essentials within reach.",
            "Board games to enjoy life at sea."
          ]
        )
      },
      { selector: "main > section:nth-of-type(4) .eyebrow", value: text("Producto destacado", "Featured product") },
      {
        selector: "main > section:nth-of-type(4) h2",
        value: text("Power Nautik.", "Power Nautik.")
      },
      {
        selector: "main > section:nth-of-type(4) .split-layout > div:first-child p",
        value: text(
          "Torre energética para marinas, clubes y amarras privadas, construida en acero inoxidable.",
          "Energy tower for marinas, clubs and private moorings, built in stainless steel."
        )
      },
      {
        selector: "main > section:nth-of-type(4) .spec-grid h3",
        all: true,
        value: text(["Construcción", "Agua", "Tablero", "Tomas"], ["Construction", "Water", "Panel", "Outlets"])
      },
      {
        selector: "main > section:nth-of-type(4) .spec-grid p",
        all: true,
        value: text(
          [
            "Acero inoxidable.",
            "Canilla FV de acero inoxidable.",
            "Tablero estanco IP65.",
            "Tomas de 32 A, toma 220 V, toma USB y toma USB tipo C."
          ],
          [
            "Stainless steel.",
            "Stainless steel FV tap.",
            "IP65 watertight panel.",
            "32 A outlets, 220 V outlet, USB outlet and USB type C outlet."
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
        value: text(["Accesorios a bordo", "Nombres con luz", "Power Nautik"], ["Accessories on board", "Illuminated names", "Power Nautik"])
      },
      {
        selector: "main > section:nth-of-type(5) .media-grid span",
        all: true,
        value: text(
          [
            "Tableros, estantes, puertas, muebles y portabotellas aplicados.",
            "Nombres iluminados instalados en embarcaciones.",
            "Producto, render o video de aplicación en marina."
          ],
          [
            "Panels, shelves, doors, furniture and bottle holders in use.",
            "Illuminated names installed on boats.",
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
        "Power Station ofrece soluciones integrales de carga para celulares, tablets y otros dispositivos: torres con locker, cable 3 en 1, enchufe de pared HUB de 6 salidas y desarrollos especiales.",
        "Power Station offers integrated charging solutions for phones, tablets and other devices: towers with locker, 3-in-1 cable, 6-outlet HUB wall plug and special developments."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Soluciones integrales de carga.", "Integrated charging solutions.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "Ofrecemos soluciones integrales de carga para celulares, tablets y otros dispositivos.",
          "We offer integrated charging solutions for phones, tablets and other devices."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .tag",
        all: true,
        value: text(
          ["Torres con locker", "Cable 3 en 1", "HUB de 6 salidas", "Desarrollos especiales"],
          ["Towers with locker", "3-in-1 cable", "6-outlet HUB", "Special developments"]
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
        value: text("Energía disponible donde se necesita.", "Power available where it is needed.")
      },
      {
        selector: "main > section:nth-of-type(2) .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "Power Station reúne soluciones de carga pensadas para el uso cotidiano: torres con locker, cable 3 en 1 y enchufe de pared HUB de 6 salidas.",
            "Además desarrollamos soluciones especiales para cada necesidad."
          ],
          [
            "Power Station brings together charging solutions designed for everyday use: towers with locker, a 3-in-1 cable and a 6-outlet HUB wall plug.",
            "We also develop special solutions for each need."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Dispositivos", "Devices") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          ["Celulares.", "Tablets.", "Otros dispositivos."],
          ["Phones.", "Tablets.", "Other devices."]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Productos", "Products") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Línea de productos.", "Product line.")
      },
      {
        selector: "main > section:nth-of-type(3) .split-layout > div:first-child p",
        value: text(
          "Una línea de soluciones de carga para distintos usos y espacios.",
          "A line of charging solutions for different uses and spaces."
        )
      },
      {
        selector: "main > section:nth-of-type(3) .spec-grid h3",
        all: true,
        value: text(
          ["Torres con locker", "Cable 3 en 1", "Enchufe HUB de 6 salidas", "Desarrollos especiales"],
          ["Towers with locker", "3-in-1 cable", "6-outlet HUB plug", "Special developments"]
        )
      },
      {
        selector: "main > section:nth-of-type(3) .spec-grid p",
        all: true,
        value: text(
          [
            "Torres de carga con locker para celulares, tablets y otros dispositivos.",
            "Un solo cable para cargar distintos dispositivos.",
            "Enchufe de pared con 6 salidas para cargar varios equipos a la vez.",
            "Soluciones de carga desarrolladas según cada proyecto."
          ],
          [
            "Charging towers with locker for phones, tablets and other devices.",
            "A single cable to charge different devices.",
            "Wall plug with 6 outlets to charge several devices at once.",
            "Charging solutions developed for each project."
          ]
        )
      },
      { selector: "main > section:nth-of-type(4) .eyebrow", value: text("Imágenes", "Imagery") },
      {
        selector: "main > section:nth-of-type(4) h2",
        value: text("Escenas de uso y vistas del producto.", "Usage scenes and product views.")
      },
      {
        selector: "main > section:nth-of-type(4) .media-grid strong",
        all: true,
        value: text(["Producto en contexto", "Vista técnica", "Video de producto"], ["Product in context", "Technical view", "Product video"])
      },
      {
        selector: "main > section:nth-of-type(4) .media-grid span",
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
  },
  dphome: {
    meta: {
      title: text("DP Home | Grupo DP", "DP Home | Grupo DP"),
      description: text(
        "DP Home desarrolla arquitectura moderna, refacciones y obras llave en mano, y ofrece una línea de productos propios: mesas de arrime, porta rollos, porta toallas y carritos auxiliares multiuso.",
        "DP Home develops modern architecture, renovations and turnkey works, and offers its own product line: console tables, roll holders, towel holders and multipurpose utility carts."
      )
    },
    texts: [
      { selector: "nav.breadcrumbs a", all: true, value: text(["Inicio", "Unidades de negocio"], ["Home", "Business units"]) },
      { selector: "main > section:nth-of-type(1) .eyebrow", value: text("Unidad de negocio", "Business unit") },
      {
        selector: "main > section:nth-of-type(1) h1",
        value: text("Arquitectura moderna para tu hogar.", "Modern architecture for your home.")
      },
      {
        selector: "main > section:nth-of-type(1) .lead",
        value: text(
          "DP Home desarrolla arquitectura moderna, refacciones y obras llave en mano, y suma una línea de productos propios para el hogar.",
          "DP Home develops modern architecture, renovations and turnkey works, and adds its own line of products for the home."
        )
      },
      {
        selector: "main > section:nth-of-type(1) .tag",
        all: true,
        value: text(
          ["Arquitectura moderna", "Refacciones", "Obras llave en mano", "Productos propios"],
          ["Modern architecture", "Renovations", "Turnkey works", "Own products"]
        )
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media strong",
        value: text("Proyecto o producto DP Home", "DP Home project or product")
      },
      {
        selector: "main > section:nth-of-type(1) .placeholder-media span",
        value: text("Obra, ambiente o línea de productos propios.", "Project, interior or own product line.")
      },
      { selector: "main > section:nth-of-type(2) .eyebrow", value: text("Qué hacemos", "What we do") },
      {
        selector: "main > section:nth-of-type(2) h2",
        value: text("Del proyecto a la obra terminada.", "From project to finished work.")
      },
      {
        selector: "main > section:nth-of-type(2) .split-layout > div:first-child p",
        all: true,
        value: text(
          [
            "DP Home reúne arquitectura moderna, refacciones y obras llave en mano, con una mirada actual sobre el diseño de los espacios.",
            "A la vez, desarrolla una línea de productos propios pensados para el hogar."
          ],
          [
            "DP Home brings together modern architecture, renovations and turnkey works, with a contemporary approach to space design.",
            "It also develops its own line of products designed for the home."
          ]
        )
      },
      { selector: "main > section:nth-of-type(2) .panel h3", value: text("Servicios", "Services") },
      {
        selector: "main > section:nth-of-type(2) .list-clean li",
        all: true,
        value: text(
          ["Arquitectura moderna.", "Refacciones.", "Obras llave en mano."],
          ["Modern architecture.", "Renovations.", "Turnkey works."]
        )
      },
      { selector: "main > section:nth-of-type(3) .eyebrow", value: text("Productos propios", "Own products") },
      {
        selector: "main > section:nth-of-type(3) h2",
        value: text("Línea de productos DP Home.", "DP Home product line.")
      },
      {
        selector: "main > section:nth-of-type(3) .split-layout > div:first-child p",
        value: text(
          "Piezas de diseño propio para equipar y ordenar el hogar.",
          "In-house designed pieces to furnish and organize the home."
        )
      },
      {
        selector: "main > section:nth-of-type(3) .spec-grid h3",
        all: true,
        value: text(
          ["Mesas de arrime", "Porta rollos", "Porta toallas", "Carritos auxiliares multiuso"],
          ["Console tables", "Roll holders", "Towel holders", "Multipurpose utility carts"]
        )
      },
      {
        selector: "main > section:nth-of-type(3) .spec-grid p",
        all: true,
        value: text(
          [
            "Mesas de arrime de la línea propia DP Home.",
            "Porta rollos de la línea propia DP Home.",
            "Porta toallas de la línea propia DP Home.",
            "Carritos auxiliares multiuso para distintos ambientes."
          ],
          [
            "Console tables from the DP Home own line.",
            "Roll holders from the DP Home own line.",
            "Towel holders from the DP Home own line.",
            "Multipurpose utility carts for different rooms."
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

const assetHref = (path) => {
  if (!path) {
    return path;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${base}${path}`;
};

const assetMediaHref = (path) => encodeURI(assetHref(path));

const capabilityShowcase = [
  {
    slug: "carteleria-institucional",
    title: text("Cartelería institucional", "Institutional signage"),
    description: text(
      "Piezas pensadas para reforzar identidad, presencia y lectura de marca en fachadas, accesos y espacios de circulación.",
      "Pieces designed to strengthen identity, presence and brand legibility across facades, entrances and circulation areas."
    ),
    meta: [
      text("Imagen institucional", "Institutional identity"),
      text("Fachadas", "Facades"),
      text("Señalización", "Signage")
    ],
    images: [
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.42.jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.42 (4).jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.42 (3).jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.42 (2).jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.42 (1).jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.41.jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.41 (4).jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.41 (2).jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.41 (1).jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.40 (4).jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.40 (3).jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.40 (2).jpeg",
      "imagenes IndustriaDP/Carteleria Institucional/WhatsApp Image 2026-06-04 at 16.26.40 (1).jpeg"
    ]
  },
  {
    slug: "grafica-plotting",
    title: text("Gráfica y plotting", "Graphics and plotting"),
    description: text(
      "Aplicaciones gráficas de gran formato para campañas, recorridos, vidrieras, superficies y activaciones comerciales.",
      "Large-format graphic applications for campaigns, journeys, shop windows, surfaces and commercial activations."
    ),
    meta: [
      text("Ploteo", "Plotting"),
      text("Gran formato", "Large format"),
      text("Campañas", "Campaigns")
    ],
    images: [
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.54 (2).jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.53 (3).jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.53 (2).jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.53 (1).jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.52.jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.52 (2).jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.55 (2).jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.55 (1).jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.54.jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.56 (1).jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.55.jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.56 (3).jpeg",
      "imagenes IndustriaDP/Grágica - Plotting/WhatsApp Image 2026-06-09 at 14.09.56.jpeg"
    ]
  },
  {
    slug: "corte-laser",
    title: text("Corte y grabado láser", "Laser cutting and engraving"),
    description: text(
      "Terminaciones de precisión para identidad, señalización, piezas especiales y resoluciones técnicas con alto nivel de detalle.",
      "Precision finishes for identity, signage, special parts and technical solutions with a high level of detail."
    ),
    meta: [
      text("Precisión", "Precision"),
      text("Piezas especiales", "Special parts"),
      text("Terminaciones", "Finishes")
    ],
    images: [
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.02.jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.02 (2).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.01 (3).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.01 (2).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.01 (1).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.00.jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.00 (2).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.00 (1).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.04 (3).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.04 (2).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.03.jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.03 (3).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.05 (1).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.06 (1).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.05 (2).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.07 (1).jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-23 at 14.49.51.jpeg",
      "imagenes IndustriaDP/Corte y Grabado laser/WhatsApp Image 2026-06-09 at 16.09.04.jpeg"
    ]
  },
  {
    slug: "letras-corporeas",
    title: text("Letras corpóreas", "Dimensional lettering"),
    description: text(
      "Soluciones de volumen y presencia para fachadas, interiores y puntos de contacto donde la marca necesita destacarse.",
      "High-presence volumetric solutions for facades, interiors and touchpoints where the brand needs to stand out."
    ),
    meta: [
      text("Volumen", "Volume"),
      text("Marca", "Brand"),
      text("Visibilidad", "Visibility")
    ],
    images: [
      "imagenes IndustriaDP/Letras Corpóreas/WhatsApp Image 2026-06-09 at 14.06.01 (2).jpeg",
      "imagenes IndustriaDP/Letras Corpóreas/WhatsApp Image 2026-06-09 at 14.06.01 (1).jpeg",
      "imagenes IndustriaDP/Letras Corpóreas/WhatsApp Image 2026-06-09 at 14.06.01 (3).jpeg",
      "imagenes IndustriaDP/Letras Corpóreas/WhatsApp Image 2026-06-09 at 14.06.01 (4).jpeg",
      "imagenes IndustriaDP/Letras Corpóreas/WhatsApp Image 2026-06-09 at 14.06.02 (2).jpeg",
      "imagenes IndustriaDP/Letras Corpóreas/WhatsApp Image 2026-06-09 at 14.06.01.jpeg",
      "imagenes IndustriaDP/Letras Corpóreas/WhatsApp Image 2026-06-09 at 14.06.02 (3).jpeg",
      "imagenes IndustriaDP/Letras Corpóreas/WhatsApp Image 2026-06-09 at 14.06.03 (1).jpeg",
      "imagenes IndustriaDP/Letras Corpóreas/WhatsApp Image 2026-06-09 at 14.06.03 (3).jpeg",
      "imagenes IndustriaDP/Letras Corpóreas/WhatsApp Image 2026-06-09 at 14.06.03 (2).jpeg",
      "imagenes IndustriaDP/Letras Corpóreas/WhatsApp Image 2026-06-09 at 14.06.03.jpeg"
    ]
  },
  {
    slug: "stands",
    title: text("Stands", "Stands"),
    description: text(
      "Espacios preparados para exhibir, recibir y activar marca en ferias, eventos y entornos comerciales de alto impacto.",
      "Spaces built to showcase, host and activate the brand in fairs, events and high-impact commercial environments."
    ),
    meta: [
      text("Eventos", "Events"),
      text("Exhibición", "Display"),
      text("Montaje", "Setup")
    ],
    images: [
      "imagenes IndustriaDP/Stands/WhatsApp Image 2026-06-09 at 15.01.42 (2).jpeg",
      "imagenes IndustriaDP/Stands/WhatsApp Image 2026-06-09 at 15.01.41.jpeg",
      "imagenes IndustriaDP/Stands/WhatsApp Image 2026-06-09 at 15.01.41 (3).jpeg",
      "imagenes IndustriaDP/Stands/WhatsApp Image 2026-06-09 at 15.01.43 (1).jpeg",
      "imagenes IndustriaDP/Stands/WhatsApp Image 2026-06-09 at 15.01.43 (2).jpeg",
      "imagenes IndustriaDP/Stands/WhatsApp Image 2026-06-09 at 15.01.43 (4).jpeg",
      "imagenes IndustriaDP/Stands/WhatsApp Image 2026-06-09 at 15.01.43.jpeg"
    ]
  },
  {
    slug: "diseno-renders",
    title: text("Diseño y renders", "Design and renders"),
    description: text(
      "Etapas de visualización y desarrollo para validar propuestas, recorridos y materialidad antes de la producción.",
      "Visualization and development stages used to validate proposals, journeys and materials before production."
    ),
    meta: [
      text("Concepto", "Concept"),
      text("Visualización", "Visualization"),
      text("Desarrollo", "Development")
    ],
    images: [
      "imagenes IndustriaDP/Diseño - Renders/WhatsApp Image 2026-06-09 at 14.01.32 (2).jpeg",
      "imagenes IndustriaDP/Diseño - Renders/WhatsApp Image 2026-06-09 at 14.01.32 (1).jpeg",
      "imagenes IndustriaDP/Diseño - Renders/WhatsApp Image 2026-06-09 at 14.01.32.jpeg",
      "imagenes IndustriaDP/Diseño - Renders/WhatsApp Image 2026-06-09 at 14.01.33 (1).jpeg",
      "imagenes IndustriaDP/Diseño - Renders/WhatsApp Image 2026-06-09 at 14.01.33 (2).jpeg",
      "imagenes IndustriaDP/Diseño - Renders/WhatsApp Image 2026-06-09 at 14.01.33.jpeg"
    ]
  },
  {
    slug: "proceso-rapipago",
    title: text("Proceso productivo Rapipago", "Rapipago production process"),
    description: text(
      "Secuencias de fabricación e implementación para proyectos bancarios y puntos de atención con despliegue operativo.",
      "Fabrication and implementation sequences for banking projects and service points with operational rollout."
    ),
    meta: [
      text("Soporte bancario", "Banking support"),
      text("Producción", "Production"),
      text("Operación", "Operations")
    ],
    images: [
      "imagenes IndustriaDP/Proceso Productivo Rapipago/WhatsApp Image 2026-06-09 at 14.00.17.jpeg",
      "imagenes IndustriaDP/Proceso Productivo Rapipago/WhatsApp Image 2026-06-09 at 14.00.17 (2).jpeg",
      "imagenes IndustriaDP/Proceso Productivo Rapipago/WhatsApp Image 2026-06-09 at 14.00.17 (1).jpeg",
      "imagenes IndustriaDP/Proceso Productivo Rapipago/WhatsApp Image 2026-06-09 at 14.00.16.jpeg",
      "imagenes IndustriaDP/Proceso Productivo Rapipago/WhatsApp Image 2026-06-09 at 14.00.16 (4).jpeg",
      "imagenes IndustriaDP/Proceso Productivo Rapipago/WhatsApp Image 2026-06-09 at 14.00.16 (3).jpeg",
      "imagenes IndustriaDP/Proceso Productivo Rapipago/WhatsApp Image 2026-06-09 at 14.00.16 (2).jpeg",
      "imagenes IndustriaDP/Proceso Productivo Rapipago/WhatsApp Image 2026-06-09 at 14.00.16 (1).jpeg",
      "imagenes IndustriaDP/Proceso Productivo Rapipago/WhatsApp Image 2026-06-09 at 14.00.15.jpeg",
      "imagenes IndustriaDP/Proceso Productivo Rapipago/WhatsApp Image 2026-06-09 at 14.00.15 (2).jpeg",
      "imagenes IndustriaDP/Proceso Productivo Rapipago/WhatsApp Image 2026-06-09 at 14.00.15 (1).jpeg"
    ]
  },
  {
    slug: "decoracion-comercial",
    title: text("Decoración comercial", "Commercial decoration"),
    description: text(
      "Intervenciones visuales para transformar espacios de venta, mejorar recorridos y potenciar la experiencia de marca.",
      "Visual interventions that transform retail spaces, improve journeys and strengthen the brand experience."
    ),
    meta: [
      text("Retail", "Retail"),
      text("Ambientación", "Spatial styling"),
      text("Experiencia", "Experience")
    ],
    images: [
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.56.jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.56 (3).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.56 (2).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.56 (1).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.55 (3).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.55 (1).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.54.jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.54 (3).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.52 (3).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.53 (2).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.52 (2).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.53 (1).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.52 (1).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.52.jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.51.jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.51 (2).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.51 (1).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.50 (2).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.50 (3).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.50 (1).jpeg",
      "imagenes IndustriaDP/Decoración Comercial/WhatsApp Image 2026-06-09 at 15.00.49.jpeg"
    ]
  }
];

const brandTileStyle = (brand) =>
  [
    brand.marqueeBg ? `--brand-surface: ${brand.marqueeBg}` : "",
    brand.marqueeText ? `--brand-ink: ${brand.marqueeText}` : ""
  ]
    .filter(Boolean)
    .join("; ");

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
          <img
            class="brand-mark__logo"
            src="${assetHref("logos/SVG/01_GRUPO_DP_NEGRO.svg")}"
            alt=""
          />
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
            <img
              class="footer-logo"
              src="${assetHref("logos/SVG/01_GRUPO_DP.svg")}"
              alt="Grupo DP"
              loading="lazy"
            />
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
              <a href="mailto:${ui.footerEmail}">${ui.footerEmail}</a>
              <a href="tel:+541121212020">${ui.footerPhone}</a>
              <a href="https://wa.me/5491132188885" target="_blank" rel="noopener">${ui.footerWhatsapp}</a>
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
      .map((brand) => {
        const tileStyle = brandTileStyle(brand);
        const tagName = brand.path ? "a" : "div";
        const destination = brand.path ? `href="${href(brand.path)}"` : 'role="group"';
        const logoMarkup = brand.logo
          ? `
            <span class="logo-pill__media">
              <img class="logo-pill__image" src="${assetHref(brand.logo)}" alt="${brand.label}" loading="lazy" />
            </span>
          `
          : `<strong class="logo-pill__title">${brand.label}</strong>`;

        return `
          <${tagName}
            class="logo-pill ${brand.logo ? "logo-pill--image" : ""}"
            ${destination}
            ${tileStyle ? `style="${tileStyle}"` : ""}
            ${duplicate ? 'aria-hidden="true" tabindex="-1"' : ""}
          >
            <span class="logo-pill__sector">${getCopy(brand.marqueeSector)}</span>
            ${logoMarkup}
          </${tagName}>
        `;
      })
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
    .map((brand) => {
      const tileStyle = brandTileStyle(brand);
      const logoMarkup = brand.logo
        ? `
          <div class="brand-card__visual" ${tileStyle ? `style="${tileStyle}"` : ""}>
            <img class="brand-card__logo" src="${assetHref(brand.logo)}" alt="${brand.label}" loading="lazy" />
          </div>
        `
        : "";

      return `
        <article class="brand-card ${brand.logo ? "brand-card--logo" : ""}">
          ${logoMarkup}
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
      `;
    })
    .join("");
};

const renderCapabilityShowcase = () => {
  const container = document.querySelector("[data-capability-showcase]");
  if (!container || page !== "dp") {
    return;
  }

  const sectionTitle =
    currentLanguage === "en"
      ? "A visual space for each IndustriaDP specialty."
      : "Un espacio visual para cada especialidad de IndustriaDP.";
  const sectionEyebrow =
    currentLanguage === "en" ? "Capabilities in action" : "Capacidades en acción";
  const sectionIntro =
    currentLanguage === "en"
      ? "Each block brings together real work from the unit to show how its capabilities are applied across different environments, formats and projects."
      : "Cada bloque reúne trabajos reales de la unidad para mostrar cómo se aplican sus capacidades en distintos entornos, formatos y proyectos.";
  const galleryLabel = currentLanguage === "en" ? "Image gallery" : "Galería de imágenes";
  const prevLabel = currentLanguage === "en" ? "Previous image" : "Imagen anterior";
  const nextLabel = currentLanguage === "en" ? "Next image" : "Imagen siguiente";

  container.innerHTML = `
    <div class="section-heading" data-reveal>
      <div class="eyebrow">${sectionEyebrow}</div>
      <h2>${sectionTitle}</h2>
      <p>${sectionIntro}</p>
    </div>
    ${capabilityShowcase
      .map((capability) => {
        const title = getCopy(capability.title);
        const description = getCopy(capability.description);
        const meta = capability.meta
          .map((item) => `<span>${getCopy(item)}</span>`)
          .join("");
        const slides = capability.images
          .map(
            (imagePath, index) => `
              <figure class="capability-slide ${index === 0 ? "is-active" : ""}" data-slide="${
                index + 1
              }">
                <img
                  src="${assetMediaHref(imagePath)}"
                  alt="${title} ${index + 1}"
                  loading="lazy"
                />
              </figure>
            `
          )
          .join("");
        const dots = capability.images
          .map(
            (_, index) => `
              <button
                class="capability-slider__dot ${index === 0 ? "is-active" : ""}"
                type="button"
                aria-label="${title} ${index + 1}"
                data-go-to-slide="${index}"
              ></button>
            `
          )
          .join("");

        return `
          <article class="capability-slider" data-reveal data-slider aria-label="${title}">
            <div class="capability-slider__media">
              <div class="capability-slider__track" aria-label="${galleryLabel}">
                ${slides}
              </div>
              <div class="capability-slider__overlay">
                <span class="capability-slider__counter" data-slider-count>01 / ${String(
                  capability.images.length
                ).padStart(2, "0")}</span>
                <div class="capability-slider__controls">
                  <button
                    class="capability-slider__button"
                    type="button"
                    aria-label="${prevLabel}"
                    data-slider-prev
                  >
                    ←
                  </button>
                  <button
                    class="capability-slider__button"
                    type="button"
                    aria-label="${nextLabel}"
                    data-slider-next
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
            <div class="capability-slider__content">
              <div class="capability-slider__header">
                <div class="capability-slider__eyebrow">${sectionEyebrow}</div>
                <h3 class="capability-slider__title">${title}</h3>
                <p class="capability-slider__description">${description}</p>
              </div>
              <div class="capability-slider__meta">${meta}</div>
              <div class="capability-slider__dots" role="tablist" aria-label="${title}">
                ${dots}
              </div>
            </div>
          </article>
        `;
      })
      .join("")}
  `;

  setupCapabilitySliders();
};

const enhanceCapabilityShowcaseLayout = () => {
  const container = document.querySelector("[data-capability-showcase]");
  if (!container || page !== "dp") {
    return;
  }

  const sectionTitle =
    currentLanguage === "en"
      ? "A visual space for each IndustriaDP specialty."
      : "Un espacio visual para cada especialidad de IndustriaDP.";
  const sectionEyebrow =
    currentLanguage === "en" ? "Capabilities in action" : "Capacidades en acción";
  const sectionIntro =
    currentLanguage === "en"
      ? "Each block brings together real work from the unit to show how its capabilities are applied across different environments, formats and projects."
      : "Cada bloque reúne trabajos reales de la unidad para mostrar cómo se aplican sus capacidades en distintos entornos, formatos y proyectos.";
  const galleryLabel = currentLanguage === "en" ? "Image gallery" : "Galería de imágenes";
  const prevLabel = currentLanguage === "en" ? "Previous image" : "Imagen anterior";
  const nextLabel = currentLanguage === "en" ? "Next image" : "Imagen siguiente";
  const navTitle = currentLanguage === "en" ? "Browse by area" : "Explorá por área";
  const imageCountLabel = currentLanguage === "en" ? "images" : "imágenes";

  container.innerHTML = `
    <div class="section-heading" data-reveal>
      <div class="eyebrow">${sectionEyebrow}</div>
      <h2>${sectionTitle}</h2>
      <p>${sectionIntro}</p>
    </div>
    <nav class="capability-nav" aria-label="${navTitle}" data-reveal>
      ${capabilityShowcase
        .map((capability) => {
          const title = getCopy(capability.title);

          return `
            <a class="capability-nav__link" href="#${capability.slug}">
              <span class="capability-nav__title">${title}</span>
              <span class="capability-nav__count">${capability.images.length} ${imageCountLabel}</span>
            </a>
          `;
        })
        .join("")}
    </nav>
    ${capabilityShowcase
      .map((capability) => {
        const title = getCopy(capability.title);
        const description = getCopy(capability.description);
        const meta = capability.meta
          .map((item) => `<span>${getCopy(item)}</span>`)
          .join("");
        const slides = capability.images
          .map(
            (imagePath, index) => `
              <figure class="capability-slide ${index === 0 ? "is-active" : ""}" data-slide="${
                index + 1
              }">
                <img
                  src="${assetMediaHref(imagePath)}"
                  alt="${title} ${index + 1}"
                  loading="lazy"
                />
              </figure>
            `
          )
          .join("");
        const dots = capability.images
          .map(
            (_, index) => `
              <button
                class="capability-slider__dot ${index === 0 ? "is-active" : ""}"
                type="button"
                aria-label="${title} ${index + 1}"
                data-go-to-slide="${index}"
              ></button>
            `
          )
          .join("");

        return `
          <article
            class="capability-slider capability-slider--segmented"
            data-reveal
            data-slider
            aria-label="${title}"
            id="${capability.slug}"
          >
            <div class="capability-slider__content">
              <div class="capability-slider__header">
                <div class="capability-slider__eyebrow">${sectionEyebrow}</div>
                <div class="capability-slider__title-row">
                  <h3 class="capability-slider__title">${title}</h3>
                  <span class="capability-slider__badge">${capability.images.length} ${imageCountLabel}</span>
                </div>
                <p class="capability-slider__description">${description}</p>
              </div>
              <div class="capability-slider__meta">${meta}</div>
            </div>
            <div class="capability-slider__gallery">
              <div class="capability-slider__media">
                <div class="capability-slider__track" aria-label="${galleryLabel}">
                  ${slides}
                </div>
                <div class="capability-slider__overlay">
                  <span class="capability-slider__counter" data-slider-count>01 / ${String(
                    capability.images.length
                  ).padStart(2, "0")}</span>
                  <div class="capability-slider__controls">
                    <button
                      class="capability-slider__button"
                      type="button"
                      aria-label="${prevLabel}"
                      data-slider-prev
                    >
                      &#8592;
                    </button>
                    <button
                      class="capability-slider__button"
                      type="button"
                      aria-label="${nextLabel}"
                      data-slider-next
                    >
                      &#8594;
                    </button>
                  </div>
                </div>
              </div>
              <div class="capability-slider__dots" role="tablist" aria-label="${title}">
                ${dots}
              </div>
            </div>
          </article>
        `;
      })
      .join("")}
  `;

  setupCapabilitySliders();
};

const setupCapabilitySliders = () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sliders = [...document.querySelectorAll("[data-slider]")];

  sliders.forEach((slider) => {
    const slides = [...slider.querySelectorAll(".capability-slide")];
    const dots = [...slider.querySelectorAll("[data-go-to-slide]")];
    const prevButton = slider.querySelector("[data-slider-prev]");
    const nextButton = slider.querySelector("[data-slider-next]");
    const counter = slider.querySelector("[data-slider-count]");

    if (slides.length <= 1) {
      return;
    }

    let currentIndex = 0;
    let intervalId = null;

    const updateSlider = (nextIndex) => {
      currentIndex = (nextIndex + slides.length) % slides.length;

      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === currentIndex);
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === currentIndex);
      });

      if (counter) {
        counter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(
          slides.length
        ).padStart(2, "0")}`;
      }
    };

    const stopAutoplay = () => {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };

    const startAutoplay = () => {
      if (reducedMotion || intervalId) {
        return;
      }

      intervalId = window.setInterval(() => {
        updateSlider(currentIndex + 1);
      }, 4200);
    };

    prevButton?.addEventListener("click", () => {
      updateSlider(currentIndex - 1);
      stopAutoplay();
      startAutoplay();
    });

    nextButton?.addEventListener("click", () => {
      updateSlider(currentIndex + 1);
      stopAutoplay();
      startAutoplay();
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        updateSlider(Number(dot.dataset.goToSlide || 0));
        stopAutoplay();
        startAutoplay();
      });
    });

    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);

    updateSlider(0);
    startAutoplay();
  });
};

const updateHomeLinks = () => {
  const secondaryButton = document.querySelector(".home-hero__secondary");
  if (secondaryButton) {
    secondaryButton.setAttribute("href", href(routes.quienes));
  }
};

let revealObserver = null;

const setupRevealObserver = () => {
  const revealables = [...document.querySelectorAll("[data-reveal]")];

  if (revealables.length === 0) {
    return;
  }

  if (revealObserver) {
    revealObserver.disconnect();
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
  renderCapabilityShowcase();
  enhanceCapabilityShowcaseLayout();
  updateHomeLinks();
  setupRevealObserver();
};

applyLanguage(currentLanguage);
