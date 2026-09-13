const lessonUi = {
  en: {
    navRoute: "Route",
    navPractice: "Practice",
    navReferences: "References",
    heroKicker: "Reasoning | Week 5",
    heroTitle: "Uncertainty in Artificial Intelligence",
    heroText:
      "Reason with incomplete evidence, update beliefs with Bayes, and separate probabilistic inference from decisions and actions.",
    heroPrior: "Prior",
    heroEvidence: "Evidence",
    heroPosterior: "Posterior",
    startClass: "Start class",
    routeTitle: "Route",
    idxUncertainty: "1. Uncertainty",
    idxProbability: "2. Probability",
    idxConcepts: "3. Concepts",
    idxBayes: "4. Bayes",
    idxBoxes: "5. Three boxes",
    idxMedical: "6. Base rate",
    idxSpam: "7. Spam",
    idxRobot: "8. Sensor",
    idxNetwork: "9. Bayesian networks",
    idxSimulation: "10. Simulation",
    idxPractice: "11. Practice",
    idxReferences: "R. References",
    copyCode: "Copy",
    copiedCode: "Copied",
    footerText: "Class 05 | Artificial Intelligence",
    backTop: "Back to top"
  },
  es: {
    navRoute: "Ruta",
    navPractice: "Práctica",
    navReferences: "Referencias",
    heroKicker: "Razonamiento | Semana 5",
    heroTitle: "Incertidumbre en inteligencia artificial",
    heroText:
      "Razona con evidencia incompleta, actualiza creencias con Bayes y separa la inferencia probabilística de las decisiones y acciones.",
    heroPrior: "Prior",
    heroEvidence: "Evidencia",
    heroPosterior: "Posterior",
    startClass: "Empezar clase",
    routeTitle: "Ruta",
    idxUncertainty: "1. Incertidumbre",
    idxProbability: "2. Probabilidad",
    idxConcepts: "3. Conceptos",
    idxBayes: "4. Bayes",
    idxBoxes: "5. Tres cajas",
    idxMedical: "6. Tasa base",
    idxSpam: "7. Spam",
    idxRobot: "8. Sensor",
    idxNetwork: "9. Redes bayesianas",
    idxSimulation: "10. Simulación",
    idxPractice: "11. Práctica",
    idxReferences: "R. Referencias",
    copyCode: "Copiar",
    copiedCode: "Copiado",
    footerText: "Clase 05 | Inteligencia Artificial",
    backTop: "Volver arriba"
  }
};

const lessonAnchors = {
  en: {
    uncertainty: "#uncertainty-en",
    probability: "#probability-en",
    concepts: "#concepts-en",
    bayes: "#bayes-en",
    boxes: "#boxes-en",
    medical: "#medical-en",
    spam: "#spam-en",
    robot: "#robot-en",
    network: "#network-en",
    simulation: "#simulation-en",
    practice: "#practice-en",
    references: "#references-en"
  },
  es: {
    uncertainty: "#incertidumbre",
    probability: "#probabilidad",
    concepts: "#conceptos",
    bayes: "#bayes-es",
    boxes: "#cajas",
    medical: "#medica",
    spam: "#spam",
    robot: "#robot",
    network: "#redes",
    simulation: "#simulacion",
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
