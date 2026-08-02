const slides = [
  {
    id: "intro",
    image: "image1.jpg",
    en: {
      kicker: "Class 01",
      title: "Introduction to Artificial Intelligence",
      summary: "Artificial Intelligence is the field that studies how to build systems capable of performing tasks that normally require human intelligence.",
      body: "An AI system can perceive information, represent a situation, make decisions, learn from data, and act toward a goal. Some systems follow explicit rules, while others learn patterns from examples. Modern AI combines search, probability, optimization, learning, language, and generative models.",
      points: [
        "AI is not one single technology; it is a family of methods for reasoning, learning, and acting.",
        "An intelligent agent receives input from an environment and chooses actions that move it closer to an objective.",
        "The central question is not only whether a system is powerful, but whether it is useful, reliable, fair, and safe."
      ]
    },
    es: {
      kicker: "Clase 01",
      title: "Introducción a la inteligencia artificial",
      summary: "La inteligencia artificial estudia cómo construir sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.",
      body: "Un sistema de IA puede percibir información, representar una situación, tomar decisiones, aprender de datos y actuar para cumplir un objetivo. Algunos sistemas siguen reglas explícitas, mientras otros aprenden patrones desde ejemplos. La IA moderna combina búsqueda, probabilidad, optimización, aprendizaje, lenguaje y modelos generativos.",
      points: [
        "La IA no es una sola tecnología; es una familia de métodos para razonar, aprender y actuar.",
        "Un agente inteligente recibe información de un entorno y elige acciones para acercarse a un objetivo.",
        "La pregunta central no es solo si un sistema es potente, sino si es útil, confiable, justo y seguro."
      ]
    }
  },
  {
    id: "search",
    image: "image14.jpg",
    en: {
      kicker: "Problem Solving",
      title: "Search",
      summary: "Search is a way to solve problems by exploring possible states until a goal is reached.",
      body: "Many AI problems can be described as a starting state, a set of possible actions, a cost for each action, and a goal condition. Search algorithms compare possible paths and decide which one to explore next. This is useful when the solution is not immediately visible but can be found by systematically exploring alternatives.",
      points: [
        "Examples include route planning, puzzle solving, scheduling, robotics, and game strategies.",
        "Breadth-first and depth-first search explore without domain knowledge; A* uses a heuristic to move toward promising paths.",
        "A good representation can make a hard problem easier because it controls what the algorithm can see and compare."
      ]
    },
    es: {
      kicker: "Resolución de problemas",
      title: "Búsqueda",
      summary: "La búsqueda resuelve problemas explorando estados posibles hasta encontrar una meta.",
      body: "Muchos problemas de IA pueden describirse con un estado inicial, un conjunto de acciones posibles, un costo por acción y una condición de meta. Los algoritmos de búsqueda comparan rutas posibles y deciden cuál explorar. Esto sirve cuando la solución no es inmediata, pero puede encontrarse al revisar alternativas de forma sistemática.",
      points: [
        "Ejemplos: planeación de rutas, rompecabezas, horarios, robótica y estrategias de juego.",
        "La búsqueda en amplitud y la búsqueda en profundidad exploran sin conocimiento del dominio; A* usa una heurística para seguir rutas prometedoras.",
        "Una buena representación puede volver más fácil un problema difícil porque define qué puede ver y comparar el algoritmo."
      ]
    }
  },
  {
    id: "knowledge",
    image: "image7.jpg",
    en: {
      kicker: "Symbolic Reasoning",
      title: "Knowledge",
      summary: "Knowledge representation gives an AI system a structured way to store facts, relationships, rules, and constraints.",
      body: "When a system has explicit knowledge, it can reason with information instead of only memorizing data. For example, if it knows that all mammals are animals and that whales are mammals, it can infer that whales are animals. Knowledge-based systems are useful when explanations, consistency, and traceable reasoning matter.",
      points: [
        "Logic represents facts and rules so a system can derive new conclusions.",
        "Knowledge graphs connect concepts such as people, places, courses, symptoms, products, or events.",
        "The quality of reasoning depends on the quality of the modeled assumptions and relationships."
      ]
    },
    es: {
      kicker: "Razonamiento simbólico",
      title: "Conocimiento",
      summary: "La representación de conocimiento permite guardar hechos, relaciones, reglas y restricciones de forma estructurada.",
      body: "Cuando un sistema tiene conocimiento explícito, puede razonar con información en lugar de solo memorizar datos. Por ejemplo, si sabe que todos los mamíferos son animales y que las ballenas son mamíferos, puede inferir que las ballenas son animales. Estos sistemas son útiles cuando importan la explicación, la consistencia y el razonamiento rastreable.",
      points: [
        "La lógica representa hechos y reglas para que un sistema derive nuevas conclusiones.",
        "Los grafos de conocimiento conectan conceptos como personas, lugares, cursos, síntomas, productos o eventos.",
        "La calidad del razonamiento depende de la calidad de los supuestos y relaciones modeladas."
      ]
    }
  },
  {
    id: "uncertainty",
    image: "image15.jpg",
    en: {
      kicker: "Probabilistic AI",
      title: "Uncertainty",
      summary: "Uncertainty appears when an AI system must make decisions with incomplete, noisy, or changing information.",
      body: "Real-world data is rarely perfect. A medical system may receive uncertain symptoms, a robot may have noisy sensors, and a language model may receive an ambiguous question. Probability helps AI systems express degrees of belief and update those beliefs when new evidence appears.",
      points: [
        "Instead of only true or false, probability represents how likely something is.",
        "Bayesian reasoning updates beliefs when new evidence changes what is most plausible.",
        "Decision-making under uncertainty compares possible actions by expected outcomes and risk."
      ]
    },
    es: {
      kicker: "IA probabilística",
      title: "Incertidumbre",
      summary: "La incertidumbre aparece cuando un sistema de IA decide con información incompleta, ruidosa o cambiante.",
      body: "Los datos del mundo real casi nunca son perfectos. Un sistema médico puede recibir síntomas inciertos, un robot puede tener sensores ruidosos y un modelo de lenguaje puede recibir una pregunta ambigua. La probabilidad ayuda a expresar grados de creencia y a actualizar esas creencias cuando aparece nueva evidencia.",
      points: [
        "En lugar de solo verdadero o falso, la probabilidad representa qué tan probable es algo.",
        "El razonamiento bayesiano actualiza creencias cuando nueva evidencia cambia lo más plausible.",
        "Decidir bajo incertidumbre implica comparar acciones según resultados esperados y riesgo."
      ]
    }
  },
  {
    id: "optimization",
    image: "image23.jpg",
    en: {
      kicker: "Better Decisions",
      title: "Optimization",
      summary: "Optimization searches for the best possible solution according to a goal, a cost, and a set of constraints.",
      body: "In AI, many tasks become optimization problems: choose the fastest route, minimize prediction error, assign limited resources, or find the best model parameters. The system needs an objective function that defines what better means. Then it uses a strategy to improve candidate solutions.",
      points: [
        "A solution is evaluated by how well it satisfies the objective and respects the constraints.",
        "Local search improves a current solution step by step; gradient methods improve model parameters during training.",
        "Real optimization is about tradeoffs: speed, quality, cost, fairness, and available data."
      ]
    },
    es: {
      kicker: "Mejores decisiones",
      title: "Optimización",
      summary: "La optimización busca la mejor solución posible según una meta, un costo y un conjunto de restricciones.",
      body: "En IA, muchas tareas se convierten en problemas de optimización: elegir la ruta más rápida, minimizar el error de predicción, asignar recursos limitados o encontrar los mejores parámetros de un modelo. El sistema necesita una función objetivo que defina qué significa mejorar. Luego usa una estrategia para mejorar soluciones candidatas.",
      points: [
        "Una solución se evalúa según qué tan bien cumple el objetivo y respeta las restricciones.",
        "La búsqueda local mejora una solución paso a paso; los métodos de gradiente ajustan parámetros durante el entrenamiento.",
        "La optimización real maneja compromisos: velocidad, calidad, costo, justicia y datos disponibles."
      ]
    }
  },
  {
    id: "learning",
    image: "image3.jpg",
    en: {
      kicker: "From Data To Models",
      title: "Learning",
      summary: "Machine learning allows systems to improve their behavior from data instead of relying only on hand-written rules.",
      body: "A learning system receives examples, detects patterns, and builds a model that can make predictions or decisions on new cases. The goal is not to memorize the training data, but to generalize. This is why evaluation on unseen data is essential.",
      points: [
        "Supervised learning uses labeled examples, such as images with categories or emails marked as spam.",
        "Unsupervised learning finds hidden structure, such as clusters of similar customers or documents.",
        "Reinforcement learning improves actions through feedback from rewards and penalties."
      ]
    },
    es: {
      kicker: "De datos a modelos",
      title: "Aprendizaje",
      summary: "El aprendizaje automático permite mejorar el comportamiento de un sistema desde datos, no solo desde reglas escritas a mano.",
      body: "Un sistema de aprendizaje recibe ejemplos, detecta patrones y construye un modelo que puede hacer predicciones o decisiones en casos nuevos. La meta no es memorizar los datos de entrenamiento, sino generalizar. Por eso la evaluación con datos no vistos es esencial.",
      points: [
        "El aprendizaje supervisado usa ejemplos etiquetados, como imágenes con categorías o correos marcados como spam.",
        "El aprendizaje no supervisado encuentra estructura oculta, como grupos de clientes o documentos similares.",
        "El aprendizaje por refuerzo mejora acciones mediante retroalimentación de recompensas y penalizaciones."
      ]
    }
  },
  {
    id: "neural-networks",
    image: "image17.jpg",
    en: {
      kicker: "Deep Learning",
      title: "Neural Networks",
      summary: "Neural networks are models made of layers that transform input data into useful representations and predictions.",
      body: "A neural network receives numbers as input, passes them through layers of weighted connections, and produces an output. During training, the network compares its output with the expected answer and adjusts its weights to reduce error. Deep neural networks can learn complex patterns in images, audio, text, and code.",
      points: [
        "Each layer can learn a different level of abstraction, from simple signals to complex concepts.",
        "Backpropagation is the process that tells the network how to adjust its weights after an error.",
        "The architecture matters: different networks are designed for images, sequences, language, or multimodal data."
      ]
    },
    es: {
      kicker: "Aprendizaje profundo",
      title: "Redes neuronales",
      summary: "Las redes neuronales son modelos formados por capas que transforman datos en representaciones y predicciones útiles.",
      body: "Una red neuronal recibe números como entrada, los pasa por capas de conexiones ponderadas y produce una salida. Durante el entrenamiento, la red compara su salida con la respuesta esperada y ajusta sus pesos para reducir el error. Las redes profundas pueden aprender patrones complejos en imágenes, audio, texto y código.",
      points: [
        "Cada capa puede aprender un nivel de abstracción diferente, desde señales simples hasta conceptos complejos.",
        "La retropropagación indica a la red cómo ajustar sus pesos después de un error.",
        "La arquitectura importa: distintas redes se diseñan para imágenes, secuencias, lenguaje o datos multimodales."
      ]
    }
  },
  {
    id: "language",
    image: "image10.jpg",
    en: {
      kicker: "Natural Language",
      title: "Language",
      summary: "Language AI focuses on understanding, representing, transforming, and generating human language.",
      body: "Human language is ambiguous and context-dependent. The same word can mean different things, and the same sentence can have different intentions. AI systems handle language by converting text into tokens and numerical representations that capture patterns of meaning and usage.",
      points: [
        "Tokenization splits text into units that a model can process.",
        "Embeddings place words, phrases, or documents in a vector space where similar meanings are close.",
        "Useful language systems need context, grounding, and evaluation, not only fluent sentences."
      ]
    },
    es: {
      kicker: "Lenguaje natural",
      title: "Lenguaje",
      summary: "La IA de lenguaje se enfoca en comprender, representar, transformar y generar lenguaje humano.",
      body: "El lenguaje humano es ambiguo y depende del contexto. Una misma palabra puede tener distintos significados, y una misma frase puede tener intenciones diferentes. Los sistemas de IA manejan lenguaje convirtiendo texto en tokens y representaciones numéricas que capturan patrones de significado y uso.",
      points: [
        "La tokenización divide el texto en unidades que el modelo puede procesar.",
        "Los embeddings ubican palabras, frases o documentos en un espacio vectorial donde significados similares quedan cerca.",
        "Un sistema de lenguaje útil necesita contexto, fundamento y evaluación, no solo frases fluidas."
      ]
    }
  },
  {
    id: "generative-ai",
    image: "image11.jpg",
    en: {
      kicker: "Creative Systems",
      title: "Generative Artificial Intelligence",
      summary: "Generative AI creates new content by learning patterns from large collections of examples.",
      body: "A generative model does not simply copy a fixed answer. It produces new outputs that are statistically plausible according to what it learned. These outputs can be text, images, audio, video, code, data, or combinations of several modalities. The quality depends on data, model design, prompts, constraints, and verification.",
      points: [
        "Generation is useful for drafting, brainstorming, simulation, summarization, translation, design, and programming.",
        "Because generated content can be wrong or misleading, human review and factual checking remain necessary.",
        "Responsible use requires attention to privacy, bias, authorship, academic integrity, and social impact."
      ]
    },
    es: {
      kicker: "Sistemas creativos",
      title: "Inteligencia artificial generativa",
      summary: "La IA generativa crea contenido nuevo aprendiendo patrones desde grandes colecciones de ejemplos.",
      body: "Un modelo generativo no copia simplemente una respuesta fija. Produce salidas nuevas que son estadísticamente plausibles según lo aprendido. Estas salidas pueden ser texto, imágenes, audio, video, código, datos o combinaciones de varias modalidades. La calidad depende de datos, diseño del modelo, prompts, restricciones y verificación.",
      points: [
        "La generación sirve para borradores, lluvia de ideas, simulación, resumen, traducción, diseño y programación.",
        "Como el contenido generado puede ser incorrecto o engañoso, la revisión humana y la verificación factual siguen siendo necesarias.",
        "El uso responsable exige cuidar privacidad, sesgos, autoría, integridad académica e impacto social."
      ]
    }
  },
  {
    id: "llms",
    image: "image22.jpg",
    en: {
      kicker: "Foundation Models",
      title: "Large Language Models (LLMs)",
      summary: "LLMs are large neural networks trained on language data to predict, generate, transform, and reason over text.",
      body: "Modern LLMs are usually based on transformer architectures. They process text as tokens and use attention to connect information across a context window. Their strength is flexibility: the same model can answer questions, summarize, translate, write code, classify text, and follow instructions when given enough context.",
      points: [
        "An LLM predicts likely next tokens; it does not automatically know whether a statement is true.",
        "Prompting, examples, retrieval, tools, and system design shape the quality of the final application.",
        "Common limitations include hallucinations, outdated knowledge, hidden bias, weak math reliability, and context limits."
      ]
    },
    es: {
      kicker: "Modelos fundacionales",
      title: "Modelos grandes de lenguaje (LLMs)",
      summary: "Los LLMs son redes neuronales grandes entrenadas con datos de lenguaje para predecir, generar, transformar y razonar sobre texto.",
      body: "Los LLMs modernos suelen basarse en arquitecturas transformer. Procesan texto como tokens y usan atención para conectar información dentro de una ventana de contexto. Su fortaleza es la flexibilidad: el mismo modelo puede responder preguntas, resumir, traducir, escribir código, clasificar texto y seguir instrucciones si recibe contexto suficiente.",
      points: [
        "Un LLM predice tokens probables; no sabe automáticamente si una afirmación es verdadera.",
        "Prompts, ejemplos, recuperación de información, herramientas y diseño del sistema moldean la calidad de la aplicación final.",
        "Limitaciones comunes: alucinaciones, conocimiento desactualizado, sesgos ocultos, baja confiabilidad matemática y límites de contexto."
      ]
    }
  },
  {
    id: "vibe-coding",
    image: "image25.jpg",
    en: {
      kicker: "AI-Assisted Software",
      title: "Vibe Coding",
      summary: "Vibe coding is a style of building software through conversation with an AI assistant while keeping human control over direction and quality.",
      body: "In this workflow, the developer explains the goal, provides context, asks the AI to generate or modify code, runs the result, reviews the changes, and gives feedback. The speed can be high, but the responsibility remains human: the developer must understand the code well enough to test it, debug it, and decide whether it belongs in the project.",
      points: [
        "Good AI-assisted coding starts with clear requirements, examples, constraints, and acceptance criteria.",
        "The most important skills are reading diffs, running tests, checking edge cases, and asking precise follow-up questions.",
        "Vibe coding is strongest when used as a feedback loop: prompt, inspect, run, verify, refine."
      ]
    },
    es: {
      kicker: "Software asistido por IA",
      title: "Vibe Coding",
      summary: "Vibe coding es una forma de construir software conversando con un asistente de IA, manteniendo control humano sobre dirección y calidad.",
      body: "En este flujo, la persona desarrolladora explica el objetivo, entrega contexto, pide a la IA generar o modificar código, ejecuta el resultado, revisa los cambios y da retroalimentación. La velocidad puede ser alta, pero la responsabilidad sigue siendo humana: quien desarrolla debe entender el código lo suficiente para probarlo, depurarlo y decidir si pertenece al proyecto.",
      points: [
        "Un buen trabajo asistido por IA comienza con requisitos claros, ejemplos, restricciones y criterios de aceptación.",
        "Las habilidades más importantes son leer diffs, ejecutar pruebas, revisar casos borde y hacer preguntas precisas.",
        "Vibe coding funciona mejor como ciclo de retroalimentación: pedir, inspeccionar, ejecutar, verificar y refinar."
      ]
    }
  },
  {
    id: "notebook",
    image: "image31.png",
    en: {
      kicker: "Course Repository",
      title: "Public Notebook For The Course",
      summary: "A public repository can work as a living notebook where class material grows over time.",
      body: "Instead of treating the course as a fixed document, the repository can show how ideas evolve. Each class can add examples, exercises, explanations, branches, and small experiments. This also lets students see a professional workflow: version control, commits, branches, review, and publication.",
      points: [
        "The published site is the stable version students can always access.",
        "Branches can be used for new lessons, subtopics, experiments, and class activities before they are merged.",
        "The history of commits becomes part of the learning process because it shows how the material was built."
      ]
    },
    es: {
      kicker: "Repositorio del curso",
      title: "Notebook público para el curso",
      summary: "Un repositorio público puede funcionar como un notebook vivo donde el material de clase crece con el tiempo.",
      body: "En lugar de tratar el curso como un documento fijo, el repositorio puede mostrar cómo evolucionan las ideas. Cada clase puede agregar ejemplos, ejercicios, explicaciones, ramas y pequeños experimentos. Esto también permite que los estudiantes vean un flujo profesional: control de versiones, commits, ramas, revisión y publicación.",
      points: [
        "El sitio publicado es la versión estable que los estudiantes siempre pueden consultar.",
        "Las ramas pueden usarse para nuevas lecciones, subtemas, experimentos y actividades antes de integrarlas.",
        "El historial de commits se vuelve parte del aprendizaje porque muestra cómo se construyó el material."
      ]
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
      ? `<div class="module-meta"><span class="chip">AI</span><span class="chip">Course</span><span class="chip">Notebook</span></div>`
      : "";
    return `
      <article class="slide ${index === 0 ? "hero" : ""}" id="${slide.id}" style="--slide-image: url('assets/template/${slide.image}')">
        <div class="slide-inner">
          <div class="slide-copy">
            <p class="kicker">${content.kicker}</p>
            <h${index === 0 ? "1" : "2"}>${content.title}</h${index === 0 ? "1" : "2"}>
            <p class="summary">${content.summary}</p>
            <p class="explanation">${content.body}</p>
            <ul class="points">${points}</ul>
            ${chips}
          </div>
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
