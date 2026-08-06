const lessonUi = {
  en: {
    purpose: "#purpose",
    navRoute: "Route",
    navActivity: "Activity",
    navReferences: "References",
    heroKicker: "Elective I Advanced Track | Week 1",
    heroTitle: "Introduction to Artificial Intelligence",
    heroText:
      "Teaching guide for a 120-minute in-person session. The goal is to distinguish what an AI system is, how it is structured, and how it differs from automation, traditional software, machine learning, and generative AI.",
    startClass: "Start class",
    sourceWord: "Source Word",
    routeTitle: "Route",
    idxPurpose: "0. Purpose",
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
    idxAppendix: "A. Appendix",
    idxReferences: "R. References",
    footerText: "Class 01 | Artificial Intelligence",
    backTop: "Back to top"
  },
  es: {
    purpose: "#proposito",
    navRoute: "Ruta",
    navActivity: "Actividad",
    navReferences: "Referencias",
    heroKicker: "Electiva I profundizacion | Semana 1",
    heroTitle: "Introduccion a la inteligencia artificial",
    heroText:
      "Guia docente para una sesion presencial de 120 minutos. El objetivo es distinguir que es un sistema de IA, como se estructura y en que se diferencia de automatizacion, software tradicional, aprendizaje automatico e IA generativa.",
    startClass: "Empezar clase",
    sourceWord: "Fuente Word",
    routeTitle: "Ruta",
    idxPurpose: "0. Proposito",
    idxOpening: "1. Apertura",
    idxDefinition: "2. Definicion",
    idxAutomation: "3. IA y automatizacion",
    idxEvolution: "4. Evolucion",
    idxAgents: "5. Agentes",
    idxProblems: "6. Problemas",
    idxApplications: "7. Aplicaciones",
    idxRisks: "8. Riesgos",
    idxActivity: "9. Actividad",
    idxClosing: "10. Cierre",
    idxAppendix: "A. Apendice",
    idxReferences: "R. Referencias",
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
    appendix: "#references-en",
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
    appendix: "#apendice",
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
    button.classList.toggle("is-active", button.dataset.lang === safeLanguage);
  });
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.setItem("ia-language", button.dataset.lang);
    renderLesson(button.dataset.lang);
  });
});

renderLesson(localStorage.getItem("ia-language") || "en");
