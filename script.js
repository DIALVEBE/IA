const slides = [
  {
    id: "intro",
    image: "image1.jpg",
    en: {
      kicker: "Class 01 / Orientation",
      title: "Introduction to Artificial Intelligence",
      summary: "AI studies how to build systems that perceive, reason, learn, and act toward goals.",
      points: [
        "Distinguish automation, machine learning, and modern generative systems.",
        "Recognize intelligent agents: sensors, actions, environment, objectives.",
        "Discuss social impact: productivity, bias, accountability, and academic integrity."
      ],
      note: "Start from everyday examples: maps, search engines, recommendation systems, translators, assistants, and coding tools."
    },
    es: {
      kicker: "Clase 01 / Orientacion",
      title: "Introduccion a la Inteligencia Artificial",
      summary: "La IA estudia como construir sistemas que perciben, razonan, aprenden y actuan para cumplir objetivos.",
      points: [
        "Diferenciar automatizacion, aprendizaje automatico y sistemas generativos modernos.",
        "Reconocer agentes inteligentes: sensores, acciones, entorno y objetivos.",
        "Discutir impacto social: productividad, sesgos, responsabilidad e integridad academica."
      ],
      note: "Comience con ejemplos cotidianos: mapas, buscadores, recomendadores, traductores, asistentes y herramientas de programacion."
    }
  },
  {
    id: "search",
    image: "image14.jpg",
    en: {
      kicker: "Reasoning Under Structure",
      title: "Search",
      summary: "Search turns a problem into states, actions, costs, and goals, then explores possible paths.",
      points: [
        "Uninformed methods: breadth-first, depth-first, uniform-cost search.",
        "Informed methods: greedy search and A* with useful heuristics.",
        "Tradeoffs: completeness, optimality, branching factor, and memory."
      ],
      note: "Use route planning, puzzle solving, and game trees to show why representation affects performance."
    },
    es: {
      kicker: "Razonamiento Con Estructura",
      title: "Busqueda",
      summary: "La busqueda convierte un problema en estados, acciones, costos y metas, y explora rutas posibles.",
      points: [
        "Metodos no informados: amplitud, profundidad y costo uniforme.",
        "Metodos informados: busqueda voraz y A* con heuristicas utiles.",
        "Compromisos: completitud, optimalidad, factor de ramificacion y memoria."
      ],
      note: "Use planeacion de rutas, rompecabezas y arboles de juego para mostrar por que la representacion cambia el rendimiento."
    }
  },
  {
    id: "knowledge",
    image: "image7.jpg",
    en: {
      kicker: "Symbolic AI",
      title: "Knowledge",
      summary: "Knowledge representation gives machines a way to store facts, rules, constraints, and relationships.",
      points: [
        "Logic represents propositions and lets systems infer new conclusions.",
        "Ontologies and graphs connect entities through explicit relationships.",
        "Reasoning depends on sound rules and carefully modeled assumptions."
      ],
      note: "Contrast a database lookup with inference: a system can derive a fact that was not stored verbatim."
    },
    es: {
      kicker: "IA Simbolica",
      title: "Conocimiento",
      summary: "La representacion de conocimiento permite guardar hechos, reglas, restricciones y relaciones.",
      points: [
        "La logica representa proposiciones y permite inferir nuevas conclusiones.",
        "Las ontologias y grafos conectan entidades mediante relaciones explicitas.",
        "El razonamiento depende de reglas solidas y supuestos bien modelados."
      ],
      note: "Contraste una consulta a base de datos con una inferencia: el sistema puede derivar un hecho que no estaba guardado literalmente."
    }
  },
  {
    id: "uncertainty",
    image: "image15.jpg",
    en: {
      kicker: "Probabilistic Reasoning",
      title: "Uncertainty",
      summary: "AI systems often act with incomplete, noisy, or changing information.",
      points: [
        "Probability models express degrees of belief instead of binary truth.",
        "Bayesian networks connect causes, evidence, and updated beliefs.",
        "Expected value helps choose actions when outcomes are uncertain."
      ],
      note: "Frame uncertainty as normal engineering reality: sensors fail, users are ambiguous, and data is incomplete."
    },
    es: {
      kicker: "Razonamiento Probabilistico",
      title: "Incertidumbre",
      summary: "Los sistemas de IA suelen actuar con informacion incompleta, ruidosa o cambiante.",
      points: [
        "Los modelos probabilisticos expresan grados de creencia, no verdad binaria.",
        "Las redes bayesianas conectan causas, evidencia y creencias actualizadas.",
        "El valor esperado ayuda a elegir acciones cuando los resultados son inciertos."
      ],
      note: "Presente la incertidumbre como una realidad de ingenieria: los sensores fallan, los usuarios son ambiguos y los datos son incompletos."
    }
  },
  {
    id: "optimization",
    image: "image23.jpg",
    en: {
      kicker: "Finding Better Solutions",
      title: "Optimization",
      summary: "Optimization searches for the best solution according to an objective function and constraints.",
      points: [
        "Local search improves candidates through neighboring states.",
        "Gradient-based methods power many learning systems.",
        "Real problems balance quality, cost, time, and constraints."
      ],
      note: "Connect optimization to schedules, delivery routes, model training, resource allocation, and prompt refinement."
    },
    es: {
      kicker: "Encontrar Mejores Soluciones",
      title: "Optimizacion",
      summary: "La optimizacion busca la mejor solucion segun una funcion objetivo y sus restricciones.",
      points: [
        "La busqueda local mejora candidatos mediante estados vecinos.",
        "Los metodos basados en gradiente impulsan muchos sistemas de aprendizaje.",
        "Los problemas reales equilibran calidad, costo, tiempo y restricciones."
      ],
      note: "Conecte optimizacion con horarios, rutas, entrenamiento de modelos, asignacion de recursos y refinamiento de prompts."
    }
  },
  {
    id: "learning",
    image: "image3.jpg",
    en: {
      kicker: "Data To Behavior",
      title: "Learning",
      summary: "Machine learning builds behavior from examples instead of manually written rules.",
      points: [
        "Supervised learning maps inputs to known labels.",
        "Unsupervised learning discovers structure without labels.",
        "Reinforcement learning improves actions through rewards."
      ],
      note: "Explain the lifecycle: data, features, training, validation, deployment, monitoring, and feedback."
    },
    es: {
      kicker: "Datos A Comportamiento",
      title: "Aprendizaje",
      summary: "El aprendizaje automatico construye comportamiento desde ejemplos en lugar de reglas escritas a mano.",
      points: [
        "El aprendizaje supervisado mapea entradas a etiquetas conocidas.",
        "El aprendizaje no supervisado descubre estructura sin etiquetas.",
        "El aprendizaje por refuerzo mejora acciones mediante recompensas."
      ],
      note: "Explique el ciclo de vida: datos, caracteristicas, entrenamiento, validacion, despliegue, monitoreo y retroalimentacion."
    }
  },
  {
    id: "neural-networks",
    image: "image17.jpg",
    en: {
      kicker: "Differentiable Programs",
      title: "Neural Networks",
      summary: "Neural networks learn layered transformations that turn raw inputs into useful predictions.",
      points: [
        "Neurons combine weighted inputs and nonlinear activation functions.",
        "Backpropagation adjusts weights from error signals.",
        "Architecture choices shape what the network can learn efficiently."
      ],
      note: "Use a visual analogy: each layer reshapes the signal, gradually making task-relevant patterns easier to separate."
    },
    es: {
      kicker: "Programas Diferenciables",
      title: "Redes Neuronales",
      summary: "Las redes neuronales aprenden transformaciones por capas que convierten entradas en predicciones utiles.",
      points: [
        "Las neuronas combinan entradas ponderadas y funciones de activacion no lineales.",
        "La retropropagacion ajusta pesos a partir de senales de error.",
        "La arquitectura define que puede aprender la red de forma eficiente."
      ],
      note: "Use una analogia visual: cada capa transforma la senal y hace mas separables los patrones relevantes para la tarea."
    }
  },
  {
    id: "language",
    image: "image10.jpg",
    en: {
      kicker: "Natural Language AI",
      title: "Language",
      summary: "Language systems connect text, meaning, context, and generation.",
      points: [
        "Tokenization converts text into units a model can process.",
        "Embeddings represent semantic similarity in vector space.",
        "Context determines whether a response is useful, safe, and grounded."
      ],
      note: "Show how language is not only grammar: intent, ambiguity, world knowledge, and context all matter."
    },
    es: {
      kicker: "IA De Lenguaje Natural",
      title: "Lenguaje",
      summary: "Los sistemas de lenguaje conectan texto, significado, contexto y generacion.",
      points: [
        "La tokenizacion convierte texto en unidades que el modelo puede procesar.",
        "Los embeddings representan similitud semantica en espacios vectoriales.",
        "El contexto determina si una respuesta es util, segura y fundamentada."
      ],
      note: "Muestre que el lenguaje no es solo gramatica: tambien importan intencion, ambiguedad, conocimiento del mundo y contexto."
    }
  },
  {
    id: "generative-ai",
    image: "image11.jpg",
    en: {
      kicker: "Creation With Models",
      title: "Generative Artificial Intelligence",
      summary: "Generative AI produces new text, images, audio, video, code, and structured data from learned patterns.",
      points: [
        "Generation is probabilistic: the model samples plausible outputs.",
        "Prompting, examples, and constraints guide the output space.",
        "Evaluation must include correctness, originality, safety, and usefulness."
      ],
      note: "Discuss both opportunity and risk: acceleration, hallucination, copyright, privacy, and verification."
    },
    es: {
      kicker: "Creacion Con Modelos",
      title: "Inteligencia Artificial Generativa",
      summary: "La IA generativa produce texto, imagenes, audio, video, codigo y datos estructurados desde patrones aprendidos.",
      points: [
        "La generacion es probabilistica: el modelo muestrea salidas plausibles.",
        "Prompts, ejemplos y restricciones guian el espacio de salida.",
        "La evaluacion debe incluir correccion, originalidad, seguridad y utilidad."
      ],
      note: "Discuta oportunidad y riesgo: aceleracion, alucinaciones, derechos de autor, privacidad y verificacion."
    }
  },
  {
    id: "llms",
    image: "image22.jpg",
    en: {
      kicker: "Foundation Models",
      title: "Large Language Models (LLMs)",
      summary: "LLMs are large neural networks trained to model language and adapt to many tasks through context.",
      points: [
        "Transformers use attention to relate tokens across a context window.",
        "Instruction tuning aligns base models with human task formats.",
        "RAG and tools help connect the model to current or private knowledge."
      ],
      note: "Emphasize that an LLM is not a database. It predicts text, and systems around it provide grounding and actions."
    },
    es: {
      kicker: "Modelos Fundacionales",
      title: "Modelos Grandes De Lenguaje (LLMs)",
      summary: "Los LLMs son redes neuronales grandes entrenadas para modelar lenguaje y adaptarse a muchas tareas mediante contexto.",
      points: [
        "Los transformers usan atencion para relacionar tokens dentro de una ventana de contexto.",
        "El ajuste por instrucciones alinea modelos base con formatos de tareas humanas.",
        "RAG y herramientas conectan el modelo con conocimiento actual o privado."
      ],
      note: "Enfatice que un LLM no es una base de datos. Predice texto; los sistemas alrededor aportan fundamento y acciones."
    }
  },
  {
    id: "vibe-coding",
    image: "image25.jpg",
    en: {
      kicker: "AI-Assisted Software",
      title: "Vibe Coding",
      summary: "Vibe coding uses conversational AI to explore, generate, modify, and test software through fast feedback loops.",
      points: [
        "The developer steers intent, constraints, review, and verification.",
        "Good prompts include goal, context, examples, risks, and acceptance checks.",
        "Generated code still needs tests, security review, and maintainability judgment."
      ],
      note: "Frame it as a practice method, not magic: the strongest students learn to read diffs, run tests, and ask precise follow-up questions."
    },
    es: {
      kicker: "Software Asistido Por IA",
      title: "Vibe Coding",
      summary: "Vibe coding usa IA conversacional para explorar, generar, modificar y probar software con ciclos rapidos de retroalimentacion.",
      points: [
        "La persona desarrolladora dirige intencion, restricciones, revision y verificacion.",
        "Buenos prompts incluyen objetivo, contexto, ejemplos, riesgos y criterios de aceptacion.",
        "El codigo generado aun requiere pruebas, revision de seguridad y criterio de mantenibilidad."
      ],
      note: "Presentelo como metodo de practica, no magia: los estudiantes mas fuertes aprenden a leer diffs, ejecutar pruebas y preguntar con precision."
    }
  },
  {
    id: "notebook",
    image: "image31.png",
    en: {
      kicker: "Repository Workflow",
      title: "Public Notebook For The Course",
      summary: "The repository can grow class by class while preserving a stable published site.",
      points: [
        "Keep `main` deployable and use branches for class experiments.",
        "Create topic branches such as `class-02-search` or `lab-llm-prompts`.",
        "Merge finished notes into `main` when the class material is ready to publish."
      ],
      note: "For the second class, create a new branch, add the subtopic page or slide, commit it, and open a pull request before publishing."
    },
    es: {
      kicker: "Flujo Del Repositorio",
      title: "Notebook Publico Para El Curso",
      summary: "El repositorio puede crecer clase por clase mientras conserva un sitio publicado estable.",
      points: [
        "Mantenga `main` desplegable y use ramas para experimentos de clase.",
        "Cree ramas por tema como `class-02-search` o `lab-llm-prompts`.",
        "Integre las notas terminadas a `main` cuando el material este listo para publicar."
      ],
      note: "Para la segunda clase, cree una rama nueva, agregue la pagina o diapositiva del subtema, haga commit y abra un pull request antes de publicar."
    }
  }
];

const deck = document.querySelector("#deck");
const topicList = document.querySelector("#topicList");
const counter = document.querySelector("#slideCounter");
const languageButtons = document.querySelectorAll("[data-lang]");
let currentIndex = Math.max(0, slides.findIndex((slide) => `#${slide.id}` === window.location.hash));
let currentLanguage = localStorage.getItem("language") || "en";

function renderNavigation() {
  topicList.innerHTML = slides.map((slide, index) => {
    const title = slide[currentLanguage].title;
    return `<li><button type="button" data-index="${index}">${String(index + 1).padStart(2, "0")} ${title}</button></li>`;
  }).join("");

  topicList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => showSlide(Number(button.dataset.index)));
  });
}

function renderSlides() {
  deck.innerHTML = slides.map((slide, index) => {
    const content = slide[currentLanguage];
    const points = content.points.map((point) => `<li>${point}</li>`).join("");
    const chips = index === 0
      ? `<div class="module-meta"><span class="chip">AI</span><span class="chip">Notebook</span><span class="chip">EN / ES</span></div>`
      : "";
    return `
      <article class="slide ${index === 0 ? "hero" : ""}" id="${slide.id}" style="--slide-image: url('assets/template/${slide.image}')">
        <div class="slide-inner">
          <div class="slide-copy">
            <p class="kicker">${content.kicker}</p>
            <h${index === 0 ? "1" : "2"}>${content.title}</h${index === 0 ? "1" : "2"}>
            <p class="summary">${content.summary}</p>
            <ul class="points">${points}</ul>
            ${chips}
          </div>
          <aside class="note-panel">
            <h3>${currentLanguage === "en" ? "Teaching note" : "Nota docente"}</h3>
            <p>${content.note}</p>
          </aside>
        </div>
      </article>
    `;
  }).join("");
}

function showSlide(index, updateHash = true) {
  currentIndex = (index + slides.length) % slides.length;
  document.querySelectorAll(".slide").forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentIndex);
  });
  topicList.querySelectorAll("button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === currentIndex);
  });
  counter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  if (updateHash) {
    history.replaceState(null, "", `#${slides[currentIndex].id}`);
  }
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("language", language);
  document.documentElement.lang = language;
  languageButtons.forEach((button) => button.classList.toggle("active", button.dataset.lang === language));
  renderNavigation();
  renderSlides();
  showSlide(currentIndex, false);
}

document.querySelector("#prevSlide").addEventListener("click", () => showSlide(currentIndex - 1));
document.querySelector("#nextSlide").addEventListener("click", () => showSlide(currentIndex + 1));

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") showSlide(currentIndex + 1);
  if (event.key === "ArrowLeft" || event.key === "PageUp") showSlide(currentIndex - 1);
});

window.addEventListener("hashchange", () => {
  const index = slides.findIndex((slide) => `#${slide.id}` === window.location.hash);
  if (index >= 0) showSlide(index, false);
});

setLanguage(currentLanguage);
