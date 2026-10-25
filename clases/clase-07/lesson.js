const ui = {
  en: {
    navRoute: "Route", navPractice: "Explore", kicker: "Neural networks | Class 07",
    title: "Neurito: a virtual pet with an artificial brain",
    intro: "Follow three needs through a neural network to an action you can see. Build the model with NumPy and connect its prediction to an animated Pygame pet.",
    start: "Explore the class", heroCaption: "The network predicts an action; the program turns it into an animated state.",
    contents: "Contents", idxProblem: "1. The problem", idxNeuron: "2. One artificial neuron",
    idxNetwork: "3. Network architecture", idxForward: "4. From input to prediction",
    idxTraining: "5. Training", idxEvaluation: "6. Evaluation and limits",
    idxPet: "7. The animated pet", idxPractice: "8. Run and experiment",
    networkAria: "Neural network with 3 input neurons, 6 hidden neurons, and 3 output neurons",
    input: ["Hunger", "Energy", "Boredom"], hidden: "Hidden", output: ["Eat", "Sleep", "Play"],
    eat: "Eat", sleep: "Sleep", play: "Play", footer: "Class 07 | Artificial Intelligence",
    codeKicker: "Runnable example", codeTitle: "Complete program: train the network and animate Neurito",
    codeIntro: "This self-contained example trains a 3–6–3 network, evaluates it, loads the supplied sprites, and connects predictions to a Pygame window. Choose the interface language on the LANGUAGE line.",
    codeDetails: "Show complete Python program",
    top: "Back to top", copy: "Copy", copied: "Copied", copyError: "Select and copy"
  },
  es: {
    navRoute: "Ruta", navPractice: "Explorar", kicker: "Redes neuronales | Clase 07",
    title: "Neurito: una mascota virtual con cerebro artificial",
    intro: "Sigue tres necesidades por una red neuronal hasta una acción visible. Construye el modelo con NumPy y conecta su predicción con una mascota animada en Pygame.",
    start: "Explorar la clase", heroCaption: "La red predice una acción y el programa la convierte en un estado animado.",
    contents: "Contenido", idxProblem: "1. El problema", idxNeuron: "2. Una neurona artificial",
    idxNetwork: "3. Arquitectura de la red", idxForward: "4. De la entrada a la predicción",
    idxTraining: "5. Entrenamiento", idxEvaluation: "6. Evaluación y límites",
    idxPet: "7. La mascota animada", idxPractice: "8. Ejecutar y experimentar",
    networkAria: "Red neuronal con 3 neuronas de entrada, 6 ocultas y 3 de salida",
    input: ["Hambre", "Energía", "Aburrimiento"], hidden: "Ocultas", output: ["Comer", "Dormir", "Jugar"],
    eat: "Comer", sleep: "Dormir", play: "Jugar", footer: "Clase 07 | Inteligencia Artificial",
    codeKicker: "Ejemplo ejecutable", codeTitle: "Programa completo: entrena la red y anima a Neurito",
    codeIntro: "Este ejemplo autocontenido entrena una red 3–6–3, la evalúa, carga los sprites y conecta las predicciones con una ventana de Pygame. Elige el idioma de la interfaz en la línea LANGUAGE.",
    codeDetails: "Mostrar el programa completo en Python",
    top: "Volver arriba", copy: "Copiar", copied: "Copiado", copyError: "Selecciona y copia"
  }
};

const anchors = {
  en: { problem: "problem-en", neuron: "neuron-en", network: "network-en", forward: "forward-en", training: "training-en", evaluation: "evaluation-en", pet: "pet-en", practice: "practice-en" },
  es: { problem: "problem-es", neuron: "neuron-es", network: "network-es", forward: "forward-es", training: "training-es", evaluation: "evaluation-es", pet: "pet-es", practice: "practice-es" }
};

function drawNetwork(svg, language) {
  const labels = ui[language];
  const xs = [120, 450, 780];
  const ys = [
    [150, 235, 320],
    [75, 131, 187, 243, 299, 355],
    [150, 235, 320]
  ];
  const layers = [ys[0], ys[1], ys[2]];
  let markup = '<title>' + labels.networkAria + '</title>';
  for (let layer = 0; layer < 2; layer++) {
    for (const y1 of layers[layer]) {
      for (const y2 of layers[layer + 1]) {
        markup += '<line class="network-edge" x1="' + xs[layer] + '" y1="' + y1 + '" x2="' + xs[layer + 1] + '" y2="' + y2 + '"/>';
      }
    }
  }
  layers.forEach((nodes, layer) => nodes.forEach((y, index) => {
    markup += '<circle class="network-node layer-' + layer + '" cx="' + xs[layer] + '" cy="' + y + '" r="17"/>';
    if (layer !== 1) {
      const label = layer === 0 ? labels.input[index] : labels.output[index];
      const tx = layer === 0 ? 84 : 814;
      const anchor = layer === 0 ? "end" : "start";
      markup += '<text class="network-label" x="' + tx + '" y="' + (y + 5) + '" text-anchor="' + anchor + '">' + label + '</text>';
    }
  }));
  markup += '<text class="network-layer-label" x="120" y="405" text-anchor="middle">' + (language === "en" ? "Inputs" : "Entradas") + '</text>';
  markup += '<text class="network-layer-label" x="450" y="405" text-anchor="middle">' + labels.hidden + ' (6)</text>';
  markup += '<text class="network-layer-label" x="780" y="405" text-anchor="middle">' + (language === "en" ? "Outputs" : "Salidas") + '</text>';
  svg.innerHTML = markup;
  svg.setAttribute("aria-label", labels.networkAria);
}

function render(language) {
  const lang = ui[language] ? language : "en";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const value = ui[lang][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-content]").forEach(node => {
    node.hidden = node.dataset.content !== lang;
  });
  document.querySelectorAll("[data-nav]").forEach(node => {
    node.href = "#" + anchors[lang][node.dataset.nav];
  });
  document.querySelectorAll("[data-alt-en]").forEach(img => {
    img.alt = img.dataset["alt-" + lang];
  });
  document.querySelectorAll(".lang-button").forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("#networkDiagram, #networkDiagramEs").forEach(svg => drawNetwork(svg, lang));
  document.querySelectorAll(".copy-code-button").forEach(button => button.textContent = ui[lang].copy);
}

function enhanceCode() {
  document.querySelectorAll(".lesson-content pre > code").forEach(code => {
    const pre = code.parentElement;
    if (pre.parentElement.classList.contains("code-copy-wrap")) return;
    const wrap = document.createElement("div");
    wrap.className = "code-copy-wrap";
    const button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.textContent = ui[document.documentElement.lang].copy;
    button.setAttribute("aria-label", ui[document.documentElement.lang].copy);
    pre.before(wrap);
    wrap.append(button, pre);
  });
}

function integrateProgram() {
  const source = document.querySelector(".shared-code .lesson-section");
  if (!source) return;
  ["practice-en", "practice-es"].forEach(id => {
    const practice = document.getElementById(id);
    if (!practice) return;
    const program = source.cloneNode(true);
    program.classList.remove("lesson-section");
    program.classList.add("program-panel");
    practice.append(program);
  });
  source.closest(".shared-code").remove();
}

document.addEventListener("click", async event => {
  const languageButton = event.target.closest(".lang-button");
  if (languageButton) {
    localStorage.setItem("ia-language", languageButton.dataset.lang);
    render(languageButton.dataset.lang);
    return;
  }
  const copyButton = event.target.closest(".copy-code-button");
  if (!copyButton) return;
  const lang = document.documentElement.lang;
  const code = copyButton.parentElement.querySelector("code").textContent;
  try {
    await navigator.clipboard.writeText(code);
    copyButton.textContent = ui[lang].copied;
  } catch {
    const range = document.createRange();
    range.selectNodeContents(copyButton.parentElement.querySelector("code"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = ui[lang].copyError;
  }
  window.setTimeout(() => { copyButton.textContent = ui[document.documentElement.lang].copy; }, 1600);
});

integrateProgram();
enhanceCode();
render(localStorage.getItem("ia-language") || "en");
