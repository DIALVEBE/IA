const lessonUi = {
  en: {
    navRoute: "Route",
    navActivity: "Activity",
    navReferences: "References",
    heroKicker: "Search | Week 2",
    heroTitle: "Depth-First Search",
    heroText:
      "Model a problem as a graph, explore one branch as deeply as possible, backtrack when needed, and distinguish the exploration order from the solution path.",
    startClass: "Start class",
    routeTitle: "Route",
    idxGraphs: "1. Graphs",
    idxProblem: "2. Search problem",
    idxDfs: "3. DFS",
    idxTie: "4. Tie-break rule",
    idxExample: "5. Solved example",
    idxPath: "6. Order vs path",
    idxStack: "7. Stack and visited",
    idxLimits: "8. Limits",
    idxActivity: "9. Activity",
    idxClosing: "10. Closing",
    idxReferences: "R. References",
    footerText: "Class 02 | Artificial Intelligence",
    backTop: "Back to top"
  },
  es: {
    navRoute: "Ruta",
    navActivity: "Actividad",
    navReferences: "Referencias",
    heroKicker: "Búsqueda | Semana 2",
    heroTitle: "Búsqueda en profundidad",
    heroText:
      "Modela un problema como grafo, explora una rama tan profundamente como sea posible, retrocede cuando haga falta y distingue el orden de exploración del camino solución.",
    startClass: "Empezar clase",
    routeTitle: "Ruta",
    idxGraphs: "1. Grafos",
    idxProblem: "2. Problema de búsqueda",
    idxDfs: "3. DFS",
    idxTie: "4. Regla de desempate",
    idxExample: "5. Ejemplo resuelto",
    idxPath: "6. Orden y camino",
    idxStack: "7. Pila y visitados",
    idxLimits: "8. Límites",
    idxActivity: "9. Actividad",
    idxClosing: "10. Cierre",
    idxReferences: "R. Referencias",
    footerText: "Clase 02 | Inteligencia Artificial",
    backTop: "Volver arriba"
  }
};

const lessonAnchors = {
  en: {
    graphs: "#graphs",
    problem: "#problem",
    dfs: "#dfs",
    tie: "#tie",
    example: "#example",
    path: "#path",
    stack: "#stack",
    limits: "#limits",
    activity: "#activity-en",
    closing: "#closing",
    references: "#references-en"
  },
  es: {
    graphs: "#grafos",
    problem: "#problema",
    dfs: "#dfs-es",
    tie: "#desempate",
    example: "#ejemplo",
    path: "#orden-camino",
    stack: "#pila-visitados",
    limits: "#limites",
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
