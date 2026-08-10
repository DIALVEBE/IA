const lessonUi = {
  en: {
    navRoute: "Route",
    navActivity: "Activity",
    navReferences: "References",
    heroKicker: "Elective I Advanced Track | Week 1",
    heroTitle: "Introduction to Artificial Intelligence",
    heroText:
      "Start by identifying what an AI system is, how it is structured, and how it differs from automation, traditional software, machine learning, and generative AI.",
    startClass: "Start class",
    routeTitle: "Route",
    idxOpening: "1. Opening",
    idxDefinition: "2. Definition",
    idxAutomation: "3. AI and automation",
    idxEvolution: "4. Evolution",
    idxAgents: "5. Agents",
    idxProblems: "6. Problems",
    idxApplications: "7. Applications",
    idxRisks: "8. Risks",
    idxActivity: "9. Activity",
    idxClosing: "10. Closing",
    idxReferences: "R. References",
    diagramInput: "Input",
    diagramInfer: "Infer",
    diagramOutput: "Output",
    diagramAct: "Act",
    diagramGoal: "Goal",
    footerText: "Class 01 | Artificial Intelligence",
    backTop: "Back to top"
  },
  es: {
    navRoute: "Ruta",
    navActivity: "Actividad",
    navReferences: "Referencias",
    heroKicker: "Electiva I profundización | Semana 1",
    heroTitle: "Introducción a la inteligencia artificial",
    heroText:
      "Comienza identificando qué es un sistema de IA, cómo se estructura y en qué se diferencia de la automatización, el software tradicional, el aprendizaje automático y la IA generativa.",
    startClass: "Empezar clase",
    routeTitle: "Ruta",
    idxOpening: "1. Apertura",
    idxDefinition: "2. Definición",
    idxAutomation: "3. IA y automatización",
    idxEvolution: "4. Evolución",
    idxAgents: "5. Agentes",
    idxProblems: "6. Problemas",
    idxApplications: "7. Aplicaciones",
    idxRisks: "8. Riesgos",
    idxActivity: "9. Actividad",
    idxClosing: "10. Cierre",
    idxReferences: "R. Referencias",
    diagramInput: "Entrada",
    diagramInfer: "Inferir",
    diagramOutput: "Salida",
    diagramAct: "Actuar",
    diagramGoal: "Objetivo",
    footerText: "Clase 01 | Inteligencia Artificial",
    backTop: "Volver arriba"
  }
};

const lessonAnchors = {
  en: {
    opening: "#opening",
    definition: "#definition",
    automation: "#automation",
    evolution: "#evolution",
    agents: "#agents",
    problems: "#problem-types",
    applications: "#applications",
    risks: "#risks",
    activity: "#activity-en",
    closing: "#closing",
    references: "#references-en"
  },
  es: {
    opening: "#apertura",
    definition: "#definicion",
    automation: "#automatizacion",
    evolution: "#evolucion",
    agents: "#agentes",
    problems: "#problemas",
    applications: "#aplicaciones",
    risks: "#riesgos",
    activity: "#actividad",
    closing: "#cierre",
    references: "#referencias"
  }
};

function renderLesson(language) {
  const safeLanguage = lessonUi[language] ? language : "en";
  document.documentElement.lang = safeLanguage;

  document.querySelectorAll("[data-lesson-i18n]").forEach((node) => {
    node.textContent = lessonUi[safeLanguage][node.dataset.lessonI18n];
  });

  document.querySelectorAll("[data-lang-only]").forEach((node) => {
    node.hidden = node.dataset.langOnly !== safeLanguage;
  });

  document.querySelectorAll("[data-lesson-nav]").forEach((node) => {
    node.setAttribute("href", lessonAnchors[safeLanguage][node.dataset.lessonNav]);
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    const isActive = button.dataset.lang === safeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest(".lang-button");
  if (!button) return;
  event.preventDefault();
  localStorage.setItem("ia-language", button.dataset.lang);
  renderLesson(button.dataset.lang);
});

renderLesson(localStorage.getItem("ia-language") || "en");
