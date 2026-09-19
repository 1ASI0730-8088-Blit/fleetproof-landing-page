/* ========================================
  FleetProof Landing Page
  Feature: Navigation
   ======================================== */

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const navActions = document.querySelector(".nav-actions");

function toggleMobileMenu(forceState) {
  const shouldOpen =
    typeof forceState === "boolean"
      ? forceState
      : !primaryNav.classList.contains("open");

  primaryNav.classList.toggle("open", shouldOpen);
  navActions.classList.toggle("open", shouldOpen);
  navToggle.setAttribute("aria-expanded", String(shouldOpen));
}

function closeMenuOnNavigation() {
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobileMenu(false);
    });
  });
}

function handleResize() {
  if (window.innerWidth > 900) {
    toggleMobileMenu(false);
  }
}

navToggle.addEventListener("click", () => toggleMobileMenu());
window.addEventListener("resize", handleResize);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleMobileMenu(false);
  }
});

closeMenuOnNavigation();

/* Progressive enhancement: keep content visible without JavaScript. */
function setupRevealAnimation() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  document.documentElement.classList.add("js-motion");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((element) => observer.observe(element));
}

setupRevealAnimation();

/* Numbers for the decorative workflow step backgrounds. */
function setupWorkflowNumbers() {
  document.querySelectorAll(".workflow-step").forEach((step, index) => {
    step.dataset.step = String(index + 1).padStart(2, "0");
  });
}

setupWorkflowNumbers();

const translations = {
  en: {
    skipLink: "Skip to main content",
    menuOpen: "Open navigation menu",
    languageSwitch: "Switch language",
    highlightsAria: "Product highlights",
    sourcesAria: "Example information sources",
    comparisonAria: "Comparison between a traditional report and FleetProof",
    fleetImageAlt: "Fleet of vehicles",
    personalImageAlt: "Vehicle for individual owners and buyers",
    dashboardAlt: "FleetProof dashboard preview with vehicle alerts and reports",
    videoAria: "Placeholder for the About the Product video",
    navProduct: "Product",
    navSolutions: "Solutions",
    navPlans: "Plans",
    navHow: "How it works",
    navAbout: "About us",
    login: "Sign in",
    start: "Get started",

    heroEyebrow: "TRACEABLE VEHICLE REPORTS",
    heroTitle1: "Know today.",
    heroTitle2: "Prevent tomorrow.",
    heroLead:
      "Create verifiable vehicle reports and monitor changes that may affect your fleet before they become an operational problem.",
    ctaFleet: "Monitor your fleet",
    ctaVehicle: "Check a vehicle",
    heroTrust1: "Traceable reports",
    heroTrust2: "Explainable findings",
    heroTrust3: "Continuous monitoring",

    benefit1Title: "Save time",
    benefit1Text: "Consolidate information from different sources in one workflow.",
    benefit2Title: "Reduce uncertainty",
    benefit2Text:
      "Identify observations, expirations and changes before they affect operations.",
    benefit3Title: "Keep traceability",
    benefit3Text:
      "Keep source, date, evidence and responsible person attached to every finding.",
    benefit4Title: "Work as a team",
    benefit4Text:
      "Assign cases, document regularization and close issues with evidence.",

    solutionsEyebrow: "SOLUTIONS FOR EACH NEED",
    solutionsTitle: "Two ways to move forward. One goal.",
    solutionsLead: "Reliable vehicle information for companies and individuals.",
    b2bBadge: "For companies",
    b2cBadge: "For individuals",
    fleetTitle: "Fleet companies",
    fleetText:
      "Monitor documentary risk across your fleet and act on each observation before it impacts operations.",
    fleetPoint1: "Fleet dashboard and continuous monitoring",
    fleetPoint2: "Cases, owners and evidence",
    fleetPoint3: "Consolidated reports and exports",
    personalTitle: "Owners and buyers",
    personalText:
      "Understand vehicle history, review findings and keep monitoring your plate after the first check.",
    personalPoint1: "Individual, understandable report",
    personalPoint2: "Evidence and source traceability",
    personalPoint3: "Alerts when relevant changes appear",

    howEyebrow: "HOW IT WORKS",
    howTitle: "From scattered checks to a traceable decision",
    howLead: "A simple workflow designed around evidence, comparison and follow-up.",
    step1Title: "Register vehicles",
    step1Text: "Add a plate manually or import a fleet from CSV.",
    step2Title: "Review sources",
    step2Text:
      "Capture results, source, date and evidence through a structured checklist.",
    step3Title: "Compare and prioritize",
    step3Text: "See what changed and identify vehicles that require attention.",
    step4Title: "Resolve and prove",
    step4Text:
      "Assign a case, attach evidence and close the regularization traceably.",

    compareEyebrow: "WHY FLEETPROOF",
    compareTitle: "More than a one-time PDF",
    compareLead:
      "The value is not only gathering data. FleetProof is designed to show what changed, what needs attention and how it was resolved.",
    dimension: "Dimension",
    traditional: "Traditional report",
    moment: "Moment",
    traditionalMoment: "One-time check",
    fleetproofMoment: "Check + recurring monitoring",
    analysisUnit: "Analysis unit",
    traditionalUnit: "One plate",
    fleetproofUnit: "Vehicle and fleet",
    traceability: "Traceability",
    traditionalTrace: "Final PDF",
    fleetproofTrace: "Source, date, evidence and owner",
    changes: "Changes",
    traditionalChanges: "Manual comparison",
    fleetproofChanges: "Snapshot comparison",
    followup: "Follow-up",
    traditionalFollow: "Outside the report",
    fleetproofFollow: "Cases, owners and closure evidence",

    plansEyebrow: "SUBSCRIPTION PLANS",
    plansTitle: "Choose the perfect plan",
    plansLead:
      "Initial academic proposal. Prices and limits must be validated with target users.",
    personalAudience: "For owners and independent drivers.",
    starterAudience: "For taxi, delivery and small fleets.",
    businessAudience: "For medium fleet operators.",
    perMonth: "/month",
    personalPlan1: "1–2 vehicles",
    personalPlan2: "1 complete monthly check",
    personalPlan3: "History and alerts",
    personalPlan4: "1 user",
    starterPlan1: "Up to 25 vehicles",
    starterPlan2: "CSV fleet import",
    starterPlan3: "Dashboard and consolidated reports",
    starterPlan4: "Cases and up to 5 users",
    businessPlan1: "Up to 100–150 vehicles",
    businessPlan2: "Branches and user roles",
    businessPlan3: "Audit trail and more checks",
    businessPlan4: "Exports and priority support",
    popular: "Most popular",
    bestValue: "Best value",
    contactSales: "Contact sales",
    pricingNote:
      "The one-time report can remain available as an additional purchase. Subscription limits must be enforced by the product, not only displayed on this page.",

    sourcesEyebrow: "TRACEABILITY FIRST",
    sourcesTitle: "Source and date attached to every result",
    sourcesText:
      "FleetProof is designed to consolidate permitted public information and authorized providers without presenting itself as an official source.",
    publicSources: "Public sources",
    authorizedProviders: "Authorized providers",

    aboutEyebrow: "ABOUT THE PRODUCT",
    aboutTitle: "A safer way to understand vehicle status",
    aboutText:
      "FleetProof is an academic software project by Blip focused on traceable vehicle intelligence, continuous monitoring and collaborative resolution workflows.",
    aboutDisclaimer:
      "FleetProof does not replace official certificates or legal advice. Every result must preserve its source, consultation date and evidence.",
    videoTitle: "About the Product video",
    videoText: "Replace this block with your final YouTube embed when it is available.",

    finalEyebrow: "FLEET IN COMPLIANCE. FEWER SURPRISES.",
    finalTitle: "Start today with FleetProof",
    finalText: "Less uncertainty. More control. Vehicle by vehicle.",

    terms: "Terms",
    privacy: "Privacy",
    academicNote:
      "Academic working document. Names, prices and metrics require validation.",

    routeNotice:
      "Demo route. Replace YOUR-WEB-APP.example in script.js with the real URL of your Web Application.",
    termsTitle: "Terms of Service",
    privacyTitle: "Privacy Notice",
    close: "Close dialog",
    menuClose: "Close navigation menu"
  },

  es: {
    skipLink: "Saltar al contenido principal",
    menuOpen: "Abrir menú de navegación",
    languageSwitch: "Cambiar idioma",
    highlightsAria: "Beneficios del producto",
    sourcesAria: "Ejemplos de fuentes de información",
    comparisonAria: "Comparación entre un reporte tradicional y FleetProof",
    fleetImageAlt: "Flota de vehículos",
    personalImageAlt: "Vehículo para propietarios y compradores",
    dashboardAlt: "Vista previa de FleetProof con alertas y reportes vehiculares",
    videoAria: "Espacio reservado para el video sobre el producto",
    navProduct: "Producto",
    navSolutions: "Soluciones",
    navPlans: "Planes",
    navHow: "Cómo funciona",
    navAbout: "Nosotros",
    login: "Iniciar sesión",
    start: "Comenzar",

    heroEyebrow: "REPORTES VEHICULARES TRAZABLES",
    heroTitle1: "Conoce hoy.",
    heroTitle2: "Previene mañana.",
    heroLead:
      "Genera reportes vehiculares verificables y monitorea cambios que puedan afectar tu flota antes de que se conviertan en un problema operativo.",
    ctaFleet: "Monitorea tu flota",
    ctaVehicle: "Consulta un vehículo",
    heroTrust1: "Reportes trazables",
    heroTrust2: "Hallazgos explicables",
    heroTrust3: "Monitoreo continuo",

    benefit1Title: "Ahorra tiempo",
    benefit1Text: "Consolida información de diferentes fuentes en un solo flujo.",
    benefit2Title: "Reduce incertidumbre",
    benefit2Text:
      "Detecta observaciones, vencimientos y cambios antes de que afecten la operación.",
    benefit3Title: "Mantén trazabilidad",
    benefit3Text:
      "Conserva fuente, fecha, evidencia y responsable en cada hallazgo.",
    benefit4Title: "Trabaja en equipo",
    benefit4Text:
      "Asigna casos, documenta la regularización y cierra incidencias con evidencia.",

    solutionsEyebrow: "SOLUCIONES PARA CADA NECESIDAD",
    solutionsTitle: "Dos formas de avanzar. Un mismo objetivo.",
    solutionsLead: "Información vehicular confiable para empresas y particulares.",
    b2bBadge: "Para empresas",
    b2cBadge: "Para particulares",
    fleetTitle: "Empresas con flotas",
    fleetText:
      "Controla el riesgo documentario de toda tu flota y atiende cada observación antes de que afecte la operación.",
    fleetPoint1: "Dashboard y monitoreo continuo",
    fleetPoint2: "Casos, responsables y evidencias",
    fleetPoint3: "Reportes consolidados y exportaciones",
    personalTitle: "Propietarios y compradores",
    personalText:
      "Conoce el historial, revisa hallazgos y continúa monitoreando tu placa después de la primera consulta.",
    personalPoint1: "Reporte individual y comprensible",
    personalPoint2: "Evidencia y trazabilidad por fuente",
    personalPoint3: "Alertas cuando aparecen cambios relevantes",

    howEyebrow: "CÓMO FUNCIONA",
    howTitle: "De consultas dispersas a una decisión trazable",
    howLead: "Un flujo simple basado en evidencia, comparación y seguimiento.",
    step1Title: "Registra vehículos",
    step1Text: "Agrega una placa manualmente o importa una flota desde CSV.",
    step2Title: "Revisa fuentes",
    step2Text:
      "Registra resultado, fuente, fecha y evidencia mediante un checklist estructurado.",
    step3Title: "Compara y prioriza",
    step3Text: "Identifica qué cambió y qué vehículos requieren atención.",
    step4Title: "Resuelve y demuestra",
    step4Text:
      "Asigna un caso, adjunta evidencia y cierra la regularización de forma trazable.",

    compareEyebrow: "POR QUÉ FLEETPROOF",
    compareTitle: "Más que un PDF puntual",
    compareLead:
      "El valor no está solo en reunir datos. FleetProof busca mostrar qué cambió, qué requiere atención y cómo se resolvió.",
    dimension: "Dimensión",
    traditional: "Reporte tradicional",
    moment: "Momento",
    traditionalMoment: "Consulta puntual",
    fleetproofMoment: "Consulta + monitoreo recurrente",
    analysisUnit: "Unidad de análisis",
    traditionalUnit: "Una placa",
    fleetproofUnit: "Vehículo y flota",
    traceability: "Trazabilidad",
    traditionalTrace: "PDF final",
    fleetproofTrace: "Fuente, fecha, evidencia y responsable",
    changes: "Cambios",
    traditionalChanges: "Comparación manual",
    fleetproofChanges: "Comparación entre snapshots",
    followup: "Seguimiento",
    traditionalFollow: "Fuera del reporte",
    fleetproofFollow: "Casos, responsables y evidencia de cierre",

    plansEyebrow: "PLANES DE SUSCRIPCIÓN",
    plansTitle: "Elige el plan ideal",
    plansLead:
      "Propuesta académica inicial. Los precios y límites deben validarse con usuarios objetivo.",
    personalAudience: "Para propietarios y conductores independientes.",
    starterAudience: "Para taxi, reparto y flotas pequeñas.",
    businessAudience: "Para operadores de flota medianos.",
    perMonth: "/mes",
    personalPlan1: "1–2 vehículos",
    personalPlan2: "1 consulta completa mensual",
    personalPlan3: "Historial y alertas",
    personalPlan4: "1 usuario",
    starterPlan1: "Hasta 25 vehículos",
    starterPlan2: "Carga de flota por CSV",
    starterPlan3: "Dashboard y reportes consolidados",
    starterPlan4: "Casos y hasta 5 usuarios",
    businessPlan1: "Hasta 100–150 vehículos",
    businessPlan2: "Sedes y roles de usuario",
    businessPlan3: "Auditoría y más consultas",
    businessPlan4: "Exportaciones y soporte prioritario",
    popular: "Más popular",
    bestValue: "Mejor relación precio-beneficios",
    contactSales: "Contactar ventas",
    pricingNote:
      "El reporte unitario puede mantenerse como compra adicional. Los límites de suscripción deben aplicarse realmente en el producto, no solo mostrarse en esta página.",

    sourcesEyebrow: "TRAZABILIDAD PRIMERO",
    sourcesTitle: "Fuente y fecha asociadas a cada resultado",
    sourcesText:
      "FleetProof está diseñado para consolidar información pública permitida y proveedores autorizados sin presentarse como una fuente oficial.",
    publicSources: "Fuentes públicas",
    authorizedProviders: "Proveedores autorizados",

    aboutEyebrow: "SOBRE EL PRODUCTO",
    aboutTitle: "Una forma más segura de comprender el estado vehicular",
    aboutText:
      "FleetProof es un proyecto académico de software de Blip enfocado en inteligencia vehicular trazable, monitoreo continuo y flujos colaborativos de resolución.",
    aboutDisclaimer:
      "FleetProof no reemplaza certificados oficiales ni asesoría legal. Cada resultado debe conservar su fuente, fecha de consulta y evidencia.",
    videoTitle: "Video About the Product",
    videoText: "Reemplaza este bloque con el embed final de YouTube cuando esté disponible.",

    finalEyebrow: "FLOTA EN REGLA. MENOS SORPRESAS.",
    finalTitle: "Empieza hoy con FleetProof",
    finalText: "Menos incertidumbre. Más control. Vehículo por vehículo.",

    terms: "Términos",
    privacy: "Privacidad",
    academicNote:
      "Documento de trabajo académico. Nombres, precios y métricas requieren validación.",

    routeNotice:
      "Ruta de demostración. Reemplaza YOUR-WEB-APP.example en script.js por la URL real de tu Web Application.",
    termsTitle: "Términos y condiciones",
    privacyTitle: "Aviso de privacidad",
    close: "Cerrar diálogo",
    menuClose: "Cerrar menú de navegación"
  }
};


const planCurrencyFormatter = {
  en: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
  es: new Intl.NumberFormat("es-PE", {
    style: "currency", currency: "PEN",
    minimumFractionDigits: 0, maximumFractionDigits: 0
  })
};

let currentLanguage = "en";

const languageButton = document.getElementById("language-button");
const languageLabel = document.getElementById("language-label");

function translatePage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = language === "en"
    ? "FleetProof | Traceable vehicle reports and monitoring"
    : "FleetProof | Reportes vehiculares trazables y monitoreo";

  const description = document.querySelector('meta[name="description"]');
  description.setAttribute("content", language === "en"
    ? "FleetProof helps fleets and vehicle owners create traceable vehicle reports, compare changes and monitor administrative risk."
    : "FleetProof ayuda a flotas y propietarios a generar reportes vehiculares trazables, comparar cambios y monitorear riesgo administrativo.");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = translations[language][element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((image) => {
    const value = translations[language][image.dataset.i18nAlt];
    if (value !== undefined) image.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-price-pen][data-price-usd]").forEach((price) => {
    const amount = language === "en" ? price.dataset.priceUsd : price.dataset.pricePen;
    price.textContent = planCurrencyFormatter[language].format(Number(amount));
  });

  languageLabel.textContent = language === "en" ? "ES" : "EN";
  try { localStorage.setItem("fleetproof-language", language); } catch (_) {
    // Storage may be disabled in private or local-file contexts.
  }
}

function toggleLanguage() {
  translatePage(currentLanguage === "en" ? "es" : "en");
}

languageButton.addEventListener("click", toggleLanguage);
let storedLanguage = null;
try { storedLanguage = localStorage.getItem("fleetproof-language"); } catch (_) {
  // Continue with English as the default language.
}
translatePage(storedLanguage === "es" ? "es" : "en");

const legalCopy = {
  en: {
    terms: `
      <h2 id="legal-title">Terms of Service</h2>
      <p><strong>Academic prototype.</strong> These terms are a starter text for the FleetProof course project and must be reviewed before any real commercial launch.</p>

      <h3>1. Service purpose</h3>
      <p>FleetProof organizes vehicle checks, evidence, reports, monitoring alerts and resolution cases. It does not issue official certificates and does not replace information published by competent authorities.</p>

      <h3>2. User responsibilities</h3>
      <ul>
        <li>Use the service only for legitimate vehicle-management or purchase-evaluation purposes.</li>
        <li>Do not use FleetProof for harassment, discrimination, unlawful surveillance or improper exposure of personal information.</li>
        <li>Verify critical decisions against the corresponding official source.</li>
      </ul>

      <h3>3. Data accuracy</h3>
      <p>Results may depend on third-party sources, manually entered data or authorized providers. FleetProof must preserve source, consultation date and evidence so users can understand the origin of each result.</p>

      <h3>4. Account and subscription</h3>
      <p>Plan limits, renewal dates and usage quotas shown in the product form part of the service rules. Final commercial prices are subject to validation.</p>

      <h3>5. Corrections</h3>
      <p>Users must be given a reasonable mechanism to report an incorrect result and request correction when applicable.</p>
    `,
    privacy: `
      <h2 id="legal-title">Privacy Notice</h2>
      <p><strong>Academic prototype.</strong> This notice is a starter text for the FleetProof course project and should be adapted to the final implementation and applicable law.</p>

      <h3>1. Data minimization</h3>
      <p>FleetProof should collect only the account, vehicle and operational information required to deliver reports, monitoring and case-management features.</p>

      <h3>2. Purpose</h3>
      <p>Information is processed to manage accounts, vehicles, report requests, evidence, subscriptions, alerts and resolution workflows.</p>

      <h3>3. Traceability</h3>
      <p>Each vehicle result should include the source and consultation date. Sensitive or unnecessary personal information should not be stored.</p>

      <h3>4. User rights</h3>
      <p>The final product should provide mechanisms for access, correction, export and deletion where applicable.</p>

      <h3>5. Retention and security</h3>
      <p>The team must define retention periods, access permissions and reasonable security controls before production use.</p>
    `
  },

  es: {
    terms: `
      <h2 id="legal-title">Términos y condiciones</h2>
      <p><strong>Prototipo académico.</strong> Este texto es una base para el proyecto FleetProof del curso y debe revisarse antes de cualquier lanzamiento comercial real.</p>

      <h3>1. Propósito del servicio</h3>
      <p>FleetProof organiza consultas vehiculares, evidencias, reportes, alertas de monitoreo y casos de resolución. No emite certificados oficiales ni reemplaza la información publicada por las autoridades competentes.</p>

      <h3>2. Responsabilidades del usuario</h3>
      <ul>
        <li>Usar el servicio únicamente para fines legítimos de gestión vehicular o evaluación de compra.</li>
        <li>No utilizar FleetProof para acoso, discriminación, vigilancia ilícita o exposición indebida de información personal.</li>
        <li>Verificar decisiones críticas contra la fuente oficial correspondiente.</li>
      </ul>

      <h3>3. Exactitud de los datos</h3>
      <p>Los resultados pueden depender de fuentes de terceros, ingreso manual o proveedores autorizados. FleetProof debe conservar fuente, fecha de consulta y evidencia para que el usuario comprenda el origen de cada resultado.</p>

      <h3>4. Cuenta y suscripción</h3>
      <p>Los límites del plan, fechas de renovación y cuotas de uso mostradas en el producto forman parte de las reglas del servicio. Los precios comerciales finales están sujetos a validación.</p>

      <h3>5. Correcciones</h3>
      <p>El usuario debe contar con un mecanismo razonable para reportar un resultado incorrecto y solicitar su corrección cuando corresponda.</p>
    `,
    privacy: `
      <h2 id="legal-title">Aviso de privacidad</h2>
      <p><strong>Prototipo académico.</strong> Este aviso es una base para el proyecto FleetProof del curso y debe adaptarse a la implementación final y a la normativa aplicable.</p>

      <h3>1. Minimización de datos</h3>
      <p>FleetProof debe recopilar únicamente la información de cuenta, vehículo y operación necesaria para ofrecer reportes, monitoreo y gestión de casos.</p>

      <h3>2. Finalidad</h3>
      <p>La información se procesa para administrar cuentas, vehículos, solicitudes de reporte, evidencias, suscripciones, alertas y flujos de resolución.</p>

      <h3>3. Trazabilidad</h3>
      <p>Cada resultado vehicular debe incluir la fuente y fecha de consulta. No debe almacenarse información personal sensible o innecesaria.</p>

      <h3>4. Derechos del usuario</h3>
      <p>El producto final debe ofrecer mecanismos de acceso, corrección, exportación y eliminación cuando corresponda.</p>

      <h3>5. Retención y seguridad</h3>
      <p>El equipo debe definir períodos de retención, permisos de acceso y controles razonables de seguridad antes del uso en producción.</p>
    `
  }
};


const legalModal = document.getElementById("legal-modal");
const legalContent = document.getElementById("legal-content");
const modalClose = document.getElementById("modal-close");
let previousFocus = null;
let activeLegalKind = null;

function openLegalModal(kind) {
  if (!legalCopy[currentLanguage][kind]) return;
  previousFocus = document.activeElement;
  activeLegalKind = kind;
  legalContent.innerHTML = legalCopy[currentLanguage][kind]; // Static team-authored text only.
  legalModal.hidden = false;
  document.body.classList.add("modal-open");
  modalClose.setAttribute("aria-label", translations[currentLanguage].close);
  modalClose.focus();
}

function closeLegalModal() {
  if (legalModal.hidden) return;
  legalModal.hidden = true;
  document.body.classList.remove("modal-open");
  activeLegalKind = null;
  if (previousFocus && document.contains(previousFocus)) previousFocus.focus();
}

document.querySelectorAll(".legal-trigger").forEach((button) => {
  button.addEventListener("click", () => openLegalModal(button.dataset.legal));
});
modalClose.addEventListener("click", closeLegalModal);
legalModal.addEventListener("click", (event) => {
  if (event.target === legalModal) closeLegalModal();
});
document.addEventListener("keydown", (event) => {
  if (legalModal.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeLegalModal();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = [...legalModal.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter((element) => element.getClientRects().length > 0);
  if (!focusable.length) { event.preventDefault(); modalClose.focus(); return; }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault(); last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault(); first.focus();
  }
});
