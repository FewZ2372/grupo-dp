document.body.classList.add("js-enhanced");

const page = document.body.dataset.page || "";
const base = document.body.dataset.base || "./";

const links = {
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

const href = (path) => `${base}${path}`;

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

const isCurrent = (slug) => (page === slug ? "is-current" : "");
const isCurrentSection = (section) => (navSections[page] === section ? "is-current-section" : "");

const headerMarkup = `
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand-mark" href="${href(links.home)}" aria-label="Inicio Grupo DP">
        <span class="brand-mark__title">GRUPO DP</span>
        <span class="brand-mark__subtitle">Industria, diseño y soluciones especializadas</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menú</button>
      <nav class="site-nav" id="site-nav" aria-label="Principal">
        <a class="nav-link ${isCurrent("home")}" href="${href(links.home)}">Inicio</a>
        <div class="nav-item ${isCurrentSection("institucional")}">
          <button class="nav-disclosure" type="button" aria-expanded="false">Institucional</button>
          <div class="nav-panel">
            <a class="${isCurrent("quienes")}" href="${href(links.quienes)}">
              Quiénes somos
              <span>La visión, el recorrido y el perfil del grupo</span>
            </a>
            <a class="${isCurrent("hitos")}" href="${href(links.hitos)}">
              Hitos
              <span>Etapas de crecimiento y diversificación</span>
            </a>
            <a class="${isCurrent("sustentabilidad")}" href="${href(links.sustentabilidad)}">
              Sustentabilidad
              <span>Una mirada responsable sobre el hacer cotidiano</span>
            </a>
            <a class="${isCurrent("news")}" href="${href(links.news)}">
              News
              <span>Novedades, desarrollos y movimientos del grupo</span>
            </a>
          </div>
        </div>
        <div class="nav-item ${isCurrentSection("unidades")}">
          <button class="nav-disclosure" type="button" aria-expanded="false">Unidades de negocio</button>
          <div class="nav-panel nav-panel--wide">
            <a class="${isCurrent("dp")}" href="${href(links.dp)}">
              DP Industria Publicitaria
              <span>Identidad, exhibición y espacios comerciales</span>
            </a>
            <a class="${isCurrent("comex")}" href="${href(links.comex)}">
              COMEX
              <span>Comercio exterior y articulación operativa</span>
            </a>
            <a class="${isCurrent("pack")}" href="${href(links.pack)}">
              Pack Gourmet
              <span>Food solutions y packaging especializado</span>
            </a>
            <a class="${isCurrent("efectivo")}" href="${href(links.efectivo)}">
              Efectivo 365
              <span>Autoservicio y operación de cajeros automáticos</span>
            </a>
            <a class="${isCurrent("nautik")}" href="${href(links.nautik)}">
              Nautik
              <span>Diseño y equipamiento para embarcaciones</span>
            </a>
            <a class="${isCurrent("power")}" href="${href(links.power)}">
              Power Station
              <span>Estaciones de carga para espacios de alto tránsito</span>
            </a>
          </div>
        </div>
        <a class="nav-cta ${isCurrentSection("contacto")}" href="${href(links.contacto)}">Contacto</a>
      </nav>
    </div>
  </header>
`;

const footerMarkup = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <span class="footer-title">Grupo DP</span>
          <p>Grupo empresario con base en Buenos Aires, Argentina, orientado al desarrollo de unidades de negocio vinculadas a industria, comercio y servicios especializados.</p>
        </div>
        <div>
          <span class="footer-title">Institucional</span>
          <div class="footer-links">
            <a href="${href(links.quienes)}">Quiénes somos</a>
            <a href="${href(links.hitos)}">Hitos</a>
            <a href="${href(links.sustentabilidad)}">Sustentabilidad</a>
            <a href="${href(links.news)}">News</a>
          </div>
        </div>
        <div>
          <span class="footer-title">Unidades de negocio</span>
          <div class="footer-links">
            <a href="${href(links.dp)}">DP Industria Publicitaria</a>
            <a href="${href(links.comex)}">COMEX</a>
            <a href="${href(links.pack)}">Pack Gourmet</a>
            <a href="${href(links.efectivo)}">Efectivo 365</a>
            <a href="${href(links.nautik)}">Nautik</a>
            <a href="${href(links.power)}">Power Station</a>
          </div>
        </div>
        <div>
          <span class="footer-title">Contacto</span>
          <div class="footer-links">
            <span>Buenos Aires, Argentina</span>
            <a href="https://www.instagram.com/dpindustriapublicitaria/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="${href(links.contacto)}">Canal institucional</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span data-current-year></span> Grupo DP</span>
        <span>Industria, diseño y soluciones especializadas.</span>
      </div>
    </div>
  </footer>
`;

document.body.insertAdjacentHTML("afterbegin", headerMarkup);
document.body.insertAdjacentHTML("beforeend", footerMarkup);

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navItems = [...document.querySelectorAll(".nav-item")];

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

document.addEventListener("click", (event) => {
  if (window.innerWidth > 860) {
    return;
  }

  if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navItems.forEach((item) => {
      item.classList.remove("is-open");
      const button = item.querySelector(".nav-disclosure");
      if (button) {
        button.setAttribute("aria-expanded", "false");
      }
    });
  }
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 16);
});

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const revealables = document.querySelectorAll("[data-reveal]");
if (revealables.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealables.forEach((element) => observer.observe(element));
}
