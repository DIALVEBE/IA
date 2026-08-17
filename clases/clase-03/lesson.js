const lessonUi = {
  en: {
    navRoute: "Route",
    navActivity: "Activity",
    navReferences: "References",
    heroKicker: "Search | Week 3",
    heroTitle: "Breadth-First Search",
    heroText:
      "Explore a graph by levels, keep the frontier in a queue, avoid revisiting nodes, and identify when BFS guarantees a shortest path.",
    startClass: "Start class",
    routeTitle: "Route",
    idxGraphs: "1. Graphs",
    idxProblem: "2. Search problem",
    idxBfs: "3. BFS",
    idxTie: "4. Tie-break rule",
    idxExample: "5. Solved example",
    idxPath: "6. Order vs path",
    idxQueue: "7. Queue and visited",
    idxLimits: "8. Shortest path",
    idxActivity: "9. Activity",
    idxClosing: "10. Closing",
    idxReferences: "R. References",
    footerText: "Class 03 | Artificial Intelligence",
    backTop: "Back to top"
  },
  es: {
    navRoute: "Ruta",
    navActivity: "Actividad",
    navReferences: "Referencias",
    heroKicker: "Búsqueda | Semana 3",
    heroTitle: "Búsqueda en amplitud",
    heroText:
      "Explora un grafo por niveles, conserva la frontera en una cola, evita visitar nodos repetidos e identifica cuándo BFS garantiza una ruta más corta.",
    startClass: "Empezar clase",
    routeTitle: "Ruta",
    idxGraphs: "1. Grafos",
    idxProblem: "2. Problema de búsqueda",
    idxBfs: "3. BFS",
    idxTie: "4. Regla de desempate",
    idxExample: "5. Ejemplo resuelto",
    idxPath: "6. Orden y camino",
    idxQueue: "7. Cola y visitados",
    idxLimits: "8. Ruta más corta",
    idxActivity: "9. Actividad",
    idxClosing: "10. Cierre",
    idxReferences: "R. Referencias",
    footerText: "Clase 03 | Inteligencia Artificial",
    backTop: "Volver arriba"
  }
};

const lessonAnchors = {
  en: {
    graphs: "#graphs",
    problem: "#problem",
    bfs: "#bfs",
    tie: "#tie",
    example: "#example",
    path: "#path",
    queue: "#queue",
    limits: "#limits",
    activity: "#activity-en",
    closing: "#closing",
    references: "#references-en"
  },
  es: {
    graphs: "#grafos",
    problem: "#problema",
    bfs: "#bfs-es",
    tie: "#desempate",
    example: "#ejemplo",
    path: "#orden-camino",
    queue: "#cola-visitados",
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
