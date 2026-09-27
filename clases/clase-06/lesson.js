const lessonUi = {
  en: {
    navRoute: "Route",
    navPractice: "Practice",
    navReferences: "References",
    heroKicker: "Optimization | Week 6",
    heroTitle: "Optimization and Hill Climbing",
    heroText:
      "Move from finding any solution to improving candidate solutions with an objective function, neighbors, and local decisions.",
    heroStart: "Start",
    heroLocal: "Local optimum",
    heroGlobal: "Global optimum",
    startClass: "Start class",
    routeTitle: "Route",
    idxOptimization: "1. Optimization",
    idxObjective: "2. Objective function",
    idxHill: "3. Hill Climbing",
    idxSteps: "4. Step by step",
    idxCode: "5. Code",
    idxSpace: "6. Search space",
    idxLocal: "7. Local optimum",
    idxRestart: "8. Random restarts",
    idxMl: "9. ML connection",
    idxBeyond: "10. Beyond Hill Climbing",
    idxPractice: "11. Practice",
    idxReferences: "R. References",
    copyCode: "Copy",
    copiedCode: "Copied",
    footerText: "Class 06 | Artificial Intelligence",
    backTop: "Back to top"
  },
  es: {
    navRoute: "Ruta",
    navPractice: "Práctica",
    navReferences: "Referencias",
    heroKicker: "Optimización | Semana 6",
    heroTitle: "Optimización y Hill Climbing",
    heroText:
      "Pasa de encontrar cualquier solución a mejorar soluciones candidatas con una función objetivo, vecinos y decisiones locales.",
    heroStart: "Inicio",
    heroLocal: "Óptimo local",
    heroGlobal: "Óptimo global",
    startClass: "Empezar clase",
    routeTitle: "Ruta",
    idxOptimization: "1. Optimización",
    idxObjective: "2. Función objetivo",
    idxHill: "3. Hill Climbing",
    idxSteps: "4. Paso a paso",
    idxCode: "5. Código",
    idxSpace: "6. Espacio de búsqueda",
    idxLocal: "7. Óptimo local",
    idxRestart: "8. Reinicios aleatorios",
    idxMl: "9. Conexión con ML",
    idxBeyond: "10. Más allá de Hill Climbing",
    idxPractice: "11. Práctica",
    idxReferences: "R. Referencias",
    copyCode: "Copiar",
    copiedCode: "Copiado",
    footerText: "Clase 06 | Inteligencia Artificial",
    backTop: "Volver arriba"
  }
};

const lessonAnchors = {
  en: {
    optimization: "#optimization-en",
    objective: "#objective-en",
    hill: "#hill-en",
    steps: "#steps-en",
    code: "#code-en",
    space: "#space-en",
    local: "#local-en",
    restart: "#restart-en",
    ml: "#ml-en",
    beyond: "#beyond-en",
    practice: "#practice-en",
    references: "#references-en"
  },
  es: {
    optimization: "#optimizacion",
    objective: "#objetivo",
    hill: "#hill-es",
    steps: "#pasos",
    code: "#codigo",
    space: "#espacio",
    local: "#local",
    restart: "#reinicios",
    ml: "#ml",
    beyond: "#mas-alla",
    practice: "#practica",
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

  document.querySelectorAll(".copy-code-button").forEach((button) => {
    button.textContent = lessonUi[safeLanguage].copyCode;
    button.setAttribute("aria-label", lessonUi[safeLanguage].copyCode);
  });
}

function enhanceCodeBlocks() {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const pre = codeBlock.parentElement;
    if (!pre || pre.parentElement.classList.contains("code-copy-wrap")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "code-copy-wrap";

    const button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.dataset.copyCode = "";

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(button);
    wrapper.appendChild(pre);
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest(".lang-button");
  if (button) {
    event.preventDefault();
    localStorage.setItem("ia-language", button.dataset.lang);
    renderLesson(button.dataset.lang);
    return;
  }

  const copyButton = event.target.closest(".copy-code-button");
  if (!copyButton) return;

  const code = copyButton.parentElement.querySelector("code");
  const currentLanguage = localStorage.getItem("ia-language") || document.documentElement.lang || "en";
  const safeLanguage = lessonUi[currentLanguage] ? currentLanguage : "en";
  navigator.clipboard.writeText(code.textContent).then(() => {
    copyButton.textContent = lessonUi[safeLanguage].copiedCode;
    window.setTimeout(() => {
      copyButton.textContent = lessonUi[safeLanguage].copyCode;
    }, 1400);
  });
});

enhanceCodeBlocks();
renderLesson(localStorage.getItem("ia-language") || "en");
