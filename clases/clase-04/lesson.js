const lessonUi = {
  en: {
    navRoute: "Route",
    navActivity: "Activity",
    navReferences: "References",
    heroKicker: "Search | Week 4",
    heroTitle: "Weighted Graphs and Dijkstra",
    heroText:
      "Move from counting edges to minimizing accumulated cost with weighted graphs, relaxation, tentative distances, predecessors, and Dijkstra's algorithm.",
    startClass: "Start class",
    routeTitle: "Route",
    idxWeighted: "1. Weighted graphs",
    idxCost: "2. Path cost",
    idxProblem: "3. Main graph",
    idxDijkstra: "4. Dijkstra",
    idxRelaxation: "5. Relaxation",
    idxSteps: "6. Step by step",
    idxPath: "7. Reconstruct path",
    idxLimits: "8. Conditions",
    idxActivity: "9. Activity",
    idxClosing: "10. Closing",
    idxReferences: "R. References",
    footerText: "Class 04 | Artificial Intelligence",
    backTop: "Back to top"
  },
  es: {
    navRoute: "Ruta",
    navActivity: "Actividad",
    navReferences: "Referencias",
    heroKicker: "Búsqueda | Semana 4",
    heroTitle: "Grafos ponderados y Dijkstra",
    heroText:
      "Pasa de contar aristas a minimizar costo acumulado con grafos ponderados, relajación, distancias tentativas, predecesores y el algoritmo de Dijkstra.",
    startClass: "Empezar clase",
    routeTitle: "Ruta",
    idxWeighted: "1. Grafos ponderados",
    idxCost: "2. Costo de camino",
    idxProblem: "3. Grafo principal",
    idxDijkstra: "4. Dijkstra",
    idxRelaxation: "5. Relajación",
    idxSteps: "6. Paso a paso",
    idxPath: "7. Reconstruir camino",
    idxLimits: "8. Condiciones",
    idxActivity: "9. Actividad",
    idxClosing: "10. Cierre",
    idxReferences: "R. Referencias",
    footerText: "Clase 04 | Inteligencia Artificial",
    backTop: "Volver arriba"
  }
};

const lessonAnchors = {
  en: {
    weighted: "#weighted",
    cost: "#cost",
    problem: "#problem",
    dijkstra: "#dijkstra",
    relaxation: "#relaxation",
    steps: "#steps",
    path: "#path",
    limits: "#limits",
    activity: "#activity-en",
    closing: "#closing",
    references: "#references-en"
  },
  es: {
    weighted: "#ponderados",
    cost: "#costo",
    problem: "#problema",
    dijkstra: "#dijkstra-es",
    relaxation: "#relajacion",
    steps: "#pasos",
    path: "#camino",
    limits: "#restricciones",
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
