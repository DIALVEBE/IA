const slides = [
  {
    id: "intro",
    image: "image1.jpg",
    visual: "agent",
    en: {
      kicker: "Class 01",
      title: "Introduction to Artificial Intelligence",
      summary: "Artificial Intelligence is the field that studies how to build systems capable of performing tasks that normally require human intelligence.",
      body: "An AI system can perceive information, represent a situation, make decisions, learn from data, and act toward a goal. Some systems follow explicit rules, while others learn patterns from examples. Modern AI combines search, probability, optimization, learning, language, and generative models.",
      points: [
        "AI is not one single technology; it is a family of methods for reasoning, learning, and acting.",
        "An intelligent agent receives input from an environment and chooses actions that move it closer to an objective.",
        "The central question is not only whether a system is powerful, but whether it is useful, reliable, fair, and safe."
      ],
      notebook: [
        {
          title: "Mental model",
          items: [
            "Think of AI as a toolbox. A chatbot, a route planner, a spam filter, and a recommendation system may use different tools, but all try to make useful decisions from information.",
            "The word intelligent does not mean conscious. In this course, it means that a system can select actions or outputs that fit a goal."
          ]
        },
        {
          title: "Student check",
          items: [
            "When you see an AI product, ask: What is the input? What is the output? What goal is it optimizing?",
            "A strong answer separates the model from the complete system around it: interface, data, rules, safety checks, and human review."
          ]
        }
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
      ],
      notebook: [
        {
          title: "Modelo mental",
          items: [
            "Piense la IA como una caja de herramientas. Un chatbot, un planificador de rutas, un filtro de spam y un recomendador pueden usar técnicas distintas, pero todos intentan tomar decisiones útiles desde información.",
            "La palabra inteligente no significa consciente. En este curso, significa que un sistema puede seleccionar acciones o salidas que se ajustan a un objetivo."
          ]
        },
        {
          title: "Chequeo de estudio",
          items: [
            "Cuando vea un producto de IA, pregunte: ¿cuál es la entrada?, ¿cuál es la salida?, ¿qué objetivo está optimizando?",
            "Una buena respuesta separa el modelo del sistema completo: interfaz, datos, reglas, controles de seguridad y revisión humana."
          ]
        }
      ]
    }
  },
  {
    id: "search",
    image: "image14.jpg",
    visual: "search",
    en: {
      kicker: "Problem Solving",
      title: "Search",
      summary: "Search is a way to solve problems by exploring possible states until a goal is reached.",
      body: "Many AI problems can be described as a starting state, a set of possible actions, a cost for each action, and a goal condition. Search algorithms compare possible paths and decide which one to explore next. This is useful when the solution is not immediately visible but can be found by systematically exploring alternatives.",
      points: [
        "Examples include route planning, puzzle solving, scheduling, robotics, and game strategies.",
        "Breadth-first and depth-first search explore without domain knowledge; A* uses a heuristic to move toward promising paths.",
        "A good representation can make a hard problem easier because it controls what the algorithm can see and compare."
      ],
      notebook: [
        {
          title: "How to read a search problem",
          items: [
            "A state is one possible situation. An action moves from one state to another. A path is a sequence of actions.",
            "The same real problem can become easy or difficult depending on how states and actions are defined."
          ]
        },
        {
          title: "Example",
          items: [
            "In a maze, the current position is the state, moving up/down/left/right are actions, and reaching the exit is the goal.",
            "In route planning, the heuristic might be straight-line distance to the destination."
          ]
        }
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
      ],
      notebook: [
        {
          title: "Cómo leer un problema de búsqueda",
          items: [
            "Un estado es una situación posible. Una acción mueve el sistema de un estado a otro. Una ruta es una secuencia de acciones.",
            "El mismo problema real puede volverse fácil o difícil según cómo se definan los estados y las acciones."
          ]
        },
        {
          title: "Ejemplo",
          items: [
            "En un laberinto, la posición actual es el estado, moverse arriba/abajo/izquierda/derecha son acciones y llegar a la salida es la meta.",
            "En planeación de rutas, la heurística puede ser la distancia en línea recta hasta el destino."
          ]
        }
      ]
    }
  },
  {
    id: "knowledge",
    image: "image7.jpg",
    visual: "knowledge",
    en: {
      kicker: "Symbolic Reasoning",
      title: "Knowledge",
      summary: "Knowledge representation gives an AI system a structured way to store facts, relationships, rules, and constraints.",
      body: "When a system has explicit knowledge, it can reason with information instead of only memorizing data. For example, if it knows that all mammals are animals and that whales are mammals, it can infer that whales are animals. Knowledge-based systems are useful when explanations, consistency, and traceable reasoning matter.",
      points: [
        "Logic represents facts and rules so a system can derive new conclusions.",
        "Knowledge graphs connect concepts such as people, places, courses, symptoms, products, or events.",
        "The quality of reasoning depends on the quality of the modeled assumptions and relationships."
      ],
      notebook: [
        {
          title: "Why structure matters",
          items: [
            "Knowledge lets a system explain why something follows from known facts instead of only returning a similarity score.",
            "Structured knowledge is useful when correctness, traceability, and consistency are more important than creative generation."
          ]
        },
        {
          title: "Common forms",
          items: [
            "Logic: IF a course has prerequisites AND the student completed them, THEN the student can enroll.",
            "Graph: Course -> belongs to -> Program; Student -> completed -> Course; Skill -> required by -> Job."
          ]
        }
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
      ],
      notebook: [
        {
          title: "Por qué importa la estructura",
          items: [
            "El conocimiento permite explicar por qué algo se deduce de hechos conocidos, en lugar de devolver solo un puntaje de similitud.",
            "El conocimiento estructurado es útil cuando la corrección, la trazabilidad y la consistencia importan más que la generación creativa."
          ]
        },
        {
          title: "Formas comunes",
          items: [
            "Lógica: SI una asignatura tiene prerrequisitos Y el estudiante los aprobó, ENTONCES puede inscribirse.",
            "Grafo: Asignatura -> pertenece a -> Programa; Estudiante -> aprobó -> Asignatura; Habilidad -> requerida por -> Trabajo."
          ]
        }
      ]
    }
  },
  {
    id: "uncertainty",
    image: "image15.jpg",
    visual: "uncertainty",
    en: {
      kicker: "Probabilistic AI",
      title: "Uncertainty",
      summary: "Uncertainty appears when an AI system must make decisions with incomplete, noisy, or changing information.",
      body: "Real-world data is rarely perfect. A medical system may receive uncertain symptoms, a robot may have noisy sensors, and a language model may receive an ambiguous question. Probability helps AI systems express degrees of belief and update those beliefs when new evidence appears.",
      points: [
        "Instead of only true or false, probability represents how likely something is.",
        "Bayesian reasoning updates beliefs when new evidence changes what is most plausible.",
        "Decision-making under uncertainty compares possible actions by expected outcomes and risk."
      ],
      notebook: [
        {
          title: "The key idea",
          items: [
            "Uncertainty does not mean ignorance. It means the system represents limited confidence and can update that confidence.",
            "A probability is useful only when it is connected to evidence, assumptions, and a decision."
          ]
        },
        {
          title: "Example",
          items: [
            "A weather app may say 70% chance of rain. That number should change if new satellite data appears.",
            "A medical model may rank several possible diagnoses instead of pretending that one answer is absolutely certain."
          ]
        }
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
      ],
      notebook: [
        {
          title: "Idea clave",
          items: [
            "Incertidumbre no significa ignorancia. Significa que el sistema representa confianza limitada y puede actualizarla.",
            "Una probabilidad es útil solo cuando está conectada con evidencia, supuestos y una decisión."
          ]
        },
        {
          title: "Ejemplo",
          items: [
            "Una app del clima puede decir 70% de probabilidad de lluvia. Ese número debería cambiar si aparece nueva información satelital.",
            "Un modelo médico puede ordenar varios diagnósticos posibles en lugar de fingir que una respuesta es absolutamente segura."
          ]
        }
      ]
    }
  },
  {
    id: "optimization",
    image: "image23.jpg",
    visual: "optimization",
    en: {
      kicker: "Better Decisions",
      title: "Optimization",
      summary: "Optimization searches for the best possible solution according to a goal, a cost, and a set of constraints.",
      body: "In AI, many tasks become optimization problems: choose the fastest route, minimize prediction error, assign limited resources, or find the best model parameters. The system needs an objective function that defines what better means. Then it uses a strategy to improve candidate solutions.",
      points: [
        "A solution is evaluated by how well it satisfies the objective and respects the constraints.",
        "Local search improves a current solution step by step; gradient methods improve model parameters during training.",
        "Real optimization is about tradeoffs: speed, quality, cost, fairness, and available data."
      ],
      notebook: [
        {
          title: "Objective + constraints",
          items: [
            "The objective says what better means. The constraints say what is allowed.",
            "A model can optimize the wrong thing if the objective is poorly designed, even when the algorithm works correctly."
          ]
        },
        {
          title: "Where it appears",
          items: [
            "Training a neural network is optimization: reduce error by changing parameters.",
            "Scheduling exams is optimization: avoid conflicts, respect rooms, and use time efficiently."
          ]
        }
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
      ],
      notebook: [
        {
          title: "Objetivo + restricciones",
          items: [
            "El objetivo define qué significa mejorar. Las restricciones definen qué está permitido.",
            "Un modelo puede optimizar algo equivocado si el objetivo está mal diseñado, incluso cuando el algoritmo funciona correctamente."
          ]
        },
        {
          title: "Dónde aparece",
          items: [
            "Entrenar una red neuronal es optimización: reducir el error cambiando parámetros.",
            "Programar exámenes es optimización: evitar cruces, respetar salones y usar el tiempo de forma eficiente."
          ]
        }
      ]
    }
  },
  {
    id: "learning",
    image: "image3.jpg",
    visual: "learning",
    en: {
      kicker: "From Data To Models",
      title: "Learning",
      summary: "Machine learning allows systems to improve their behavior from data instead of relying only on hand-written rules.",
      body: "A learning system receives examples, detects patterns, and builds a model that can make predictions or decisions on new cases. The goal is not to memorize the training data, but to generalize. This is why evaluation on unseen data is essential.",
      points: [
        "Supervised learning uses labeled examples, such as images with categories or emails marked as spam.",
        "Unsupervised learning finds hidden structure, such as clusters of similar customers or documents.",
        "Reinforcement learning improves actions through feedback from rewards and penalties."
      ],
      notebook: [
        {
          title: "Generalization",
          items: [
            "The real test of learning is performance on new examples, not examples the system has already seen.",
            "Overfitting happens when a model memorizes training data instead of learning a useful pattern."
          ]
        },
        {
          title: "Learning pipeline",
          items: [
            "Collect data, clean it, split it, train a model, evaluate it, deploy it, and monitor it.",
            "Bad data can create bad predictions even if the algorithm is advanced."
          ]
        }
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
      ],
      notebook: [
        {
          title: "Generalización",
          items: [
            "La prueba real del aprendizaje es el desempeño en ejemplos nuevos, no en ejemplos que el sistema ya vio.",
            "El sobreajuste ocurre cuando un modelo memoriza los datos de entrenamiento en lugar de aprender un patrón útil."
          ]
        },
        {
          title: "Flujo de aprendizaje",
          items: [
            "Recolectar datos, limpiarlos, dividirlos, entrenar un modelo, evaluarlo, desplegarlo y monitorearlo.",
            "Datos malos pueden crear predicciones malas aunque el algoritmo sea avanzado."
          ]
        }
      ]
    }
  },
  {
    id: "neural-networks",
    image: "image17.jpg",
    visual: "neural",
    en: {
      kicker: "Deep Learning",
      title: "Neural Networks",
      summary: "Neural networks are models made of layers that transform input data into useful representations and predictions.",
      body: "A neural network receives numbers as input, passes them through layers of weighted connections, and produces an output. During training, the network compares its output with the expected answer and adjusts its weights to reduce error. Deep neural networks can learn complex patterns in images, audio, text, and code.",
      points: [
        "Each layer can learn a different level of abstraction, from simple signals to complex concepts.",
        "Backpropagation is the process that tells the network how to adjust its weights after an error.",
        "The architecture matters: different networks are designed for images, sequences, language, or multimodal data."
      ],
      notebook: [
        {
          title: "Inside the network",
          items: [
            "Weights control how strongly one unit influences another. Training changes those weights.",
            "Activation functions let the network learn nonlinear patterns instead of only straight-line relationships."
          ]
        },
        {
          title: "Why deep layers help",
          items: [
            "Early layers may detect simple patterns. Later layers combine them into more abstract features.",
            "For images, that can mean edges -> shapes -> objects. For text, tokens -> phrases -> meaning patterns."
          ]
        }
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
      ],
      notebook: [
        {
          title: "Dentro de la red",
          items: [
            "Los pesos controlan qué tanto influye una unidad sobre otra. El entrenamiento cambia esos pesos.",
            "Las funciones de activación permiten aprender patrones no lineales, no solo relaciones en línea recta."
          ]
        },
        {
          title: "Por qué ayudan las capas profundas",
          items: [
            "Las primeras capas pueden detectar patrones simples. Las capas posteriores los combinan en características más abstractas.",
            "En imágenes: bordes -> formas -> objetos. En texto: tokens -> frases -> patrones de significado."
          ]
        }
      ]
    }
  },
  {
    id: "language",
    image: "image10.jpg",
    visual: "language",
    en: {
      kicker: "Natural Language",
      title: "Language",
      summary: "Language AI focuses on understanding, representing, transforming, and generating human language.",
      body: "Human language is ambiguous and context-dependent. The same word can mean different things, and the same sentence can have different intentions. AI systems handle language by converting text into tokens and numerical representations that capture patterns of meaning and usage.",
      points: [
        "Tokenization splits text into units that a model can process.",
        "Embeddings place words, phrases, or documents in a vector space where similar meanings are close.",
        "Useful language systems need context, grounding, and evaluation, not only fluent sentences."
      ],
      notebook: [
        {
          title: "Why language is hard",
          items: [
            "Language carries meaning, intention, culture, ambiguity, and context at the same time.",
            "The same sentence can be a question, a joke, a command, or a warning depending on the situation."
          ]
        },
        {
          title: "Representation",
          items: [
            "Tokens are the pieces the system reads. Embeddings are numerical positions that help compare meaning.",
            "Context changes interpretation: bank can mean a financial institution or the side of a river."
          ]
        }
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
      ],
      notebook: [
        {
          title: "Por qué el lenguaje es difícil",
          items: [
            "El lenguaje mezcla significado, intención, cultura, ambigüedad y contexto al mismo tiempo.",
            "La misma frase puede ser pregunta, chiste, orden o advertencia según la situación."
          ]
        },
        {
          title: "Representación",
          items: [
            "Los tokens son las piezas que el sistema lee. Los embeddings son posiciones numéricas que ayudan a comparar significado.",
            "El contexto cambia la interpretación: banco puede ser una entidad financiera o una banca para sentarse."
          ]
        }
      ]
    }
  },
  {
    id: "generative-ai",
    image: "image11.jpg",
    visual: "generative",
    en: {
      kicker: "Creative Systems",
      title: "Generative Artificial Intelligence",
      summary: "Generative AI creates new content by learning patterns from large collections of examples.",
      body: "A generative model does not simply copy a fixed answer. It produces new outputs that are statistically plausible according to what it learned. These outputs can be text, images, audio, video, code, data, or combinations of several modalities. The quality depends on data, model design, prompts, constraints, and verification.",
      points: [
        "Generation is useful for drafting, brainstorming, simulation, summarization, translation, design, and programming.",
        "Because generated content can be wrong or misleading, human review and factual checking remain necessary.",
        "Responsible use requires attention to privacy, bias, authorship, academic integrity, and social impact."
      ],
      notebook: [
        {
          title: "Generation is guided",
          items: [
            "A prompt does not control the model perfectly. It guides the space of likely outputs.",
            "Good generation often needs constraints: format, audience, tone, examples, sources, and verification."
          ]
        },
        {
          title: "Useful skepticism",
          items: [
            "Generated content can look polished while still being false, incomplete, or biased.",
            "Treat generation as a draft or assistant process, not as automatic truth."
          ]
        }
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
      ],
      notebook: [
        {
          title: "La generación se guía",
          items: [
            "Un prompt no controla el modelo de forma perfecta. Guía el espacio de salidas probables.",
            "Una buena generación suele necesitar restricciones: formato, audiencia, tono, ejemplos, fuentes y verificación."
          ]
        },
        {
          title: "Escepticismo útil",
          items: [
            "El contenido generado puede verse pulido y aun así ser falso, incompleto o sesgado.",
            "Trate la generación como borrador o proceso de asistencia, no como verdad automática."
          ]
        }
      ]
    }
  },
  {
    id: "llms",
    image: "image22.jpg",
    visual: "llm",
    en: {
      kicker: "Foundation Models",
      title: "Large Language Models (LLMs)",
      summary: "LLMs are large neural networks trained on language data to predict, generate, transform, and reason over text.",
      body: "Modern LLMs are usually based on transformer architectures. They process text as tokens and use attention to connect information across a context window. Their strength is flexibility: the same model can answer questions, summarize, translate, write code, classify text, and follow instructions when given enough context.",
      points: [
        "An LLM predicts likely next tokens; it does not automatically know whether a statement is true.",
        "Prompting, examples, retrieval, tools, and system design shape the quality of the final application.",
        "Common limitations include hallucinations, outdated knowledge, hidden bias, weak math reliability, and context limits."
      ],
      notebook: [
        {
          title: "What the model sees",
          items: [
            "The model receives a context window: instructions, user message, examples, retrieved documents, and previous conversation.",
            "It predicts text token by token. The surrounding application decides what documents, tools, and safety rules are available."
          ]
        },
        {
          title: "System patterns",
          items: [
            "RAG adds retrieved documents so answers can be grounded in course material or current sources.",
            "Tool use lets an LLM request actions such as search, calculation, file editing, or API calls."
          ]
        }
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
      ],
      notebook: [
        {
          title: "Qué ve el modelo",
          items: [
            "El modelo recibe una ventana de contexto: instrucciones, mensaje del usuario, ejemplos, documentos recuperados y conversación previa.",
            "Predice texto token por token. La aplicación alrededor decide qué documentos, herramientas y reglas de seguridad están disponibles."
          ]
        },
        {
          title: "Patrones de sistema",
          items: [
            "RAG agrega documentos recuperados para fundamentar respuestas en material del curso o fuentes actuales.",
            "El uso de herramientas permite que un LLM solicite acciones como búsqueda, cálculo, edición de archivos o llamadas a una API."
          ]
        }
      ]
    }
  },
  {
    id: "vibe-coding",
    image: "image25.jpg",
    visual: "vibe",
    en: {
      kicker: "AI-Assisted Software",
      title: "Vibe Coding",
      summary: "Vibe coding is a style of building software through conversation with an AI assistant while keeping human control over direction and quality.",
      body: "In this workflow, the developer explains the goal, provides context, asks the AI to generate or modify code, runs the result, reviews the changes, and gives feedback. The speed can be high, but the responsibility remains human: the developer must understand the code well enough to test it, debug it, and decide whether it belongs in the project.",
      points: [
        "Good AI-assisted coding starts with clear requirements, examples, constraints, and acceptance criteria.",
        "The most important skills are reading diffs, running tests, checking edge cases, and asking precise follow-up questions.",
        "Vibe coding is strongest when used as a feedback loop: prompt, inspect, run, verify, refine."
      ],
      notebook: [
        {
          title: "Practical workflow",
          items: [
            "Start with a small goal. Ask for a change. Inspect the diff. Run the code. Keep or reject the result.",
            "The faster the assistant writes, the more important it becomes to verify behavior with tests and real examples."
          ]
        },
        {
          title: "Good student habit",
          items: [
            "Do not submit code you cannot explain. Use the assistant to accelerate learning, not to skip understanding.",
            "Keep notes about what changed, why it changed, and how you verified it."
          ]
        }
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
      ],
      notebook: [
        {
          title: "Flujo práctico",
          items: [
            "Comience con una meta pequeña. Pida un cambio. Revise el diff. Ejecute el código. Conserve o rechace el resultado.",
            "Mientras más rápido escribe el asistente, más importante es verificar el comportamiento con pruebas y ejemplos reales."
          ]
        },
        {
          title: "Buen hábito de estudiante",
          items: [
            "No entregue código que no pueda explicar. Use el asistente para acelerar el aprendizaje, no para saltarse la comprensión.",
            "Mantenga notas sobre qué cambió, por qué cambió y cómo lo verificó."
          ]
        }
      ]
    }
  }
];

const VERSION = "class-sessions-fix-20260806";

const ui = {
  en: {
    navTopics: "Topics",
    navSessions: "Sessions",
    courseLabel: "Course notebook",
    heroTitle: "Artificial Intelligence",
    heroText:
      "A student-facing notebook for understanding intelligent agents, search, knowledge, uncertainty, optimization, learning, neural networks, language, generative AI, LLMs, and AI-assisted coding.",
    startLearning: "Start learning",
    viewMap: "View study map",
    mapLabel: "Notebook route",
    mapTitle: "From reasoning foundations to modern AI systems",
    map1Title: "Reasoning foundations",
    map1Text: "Agents, search, knowledge representation, uncertainty, and optimization.",
    map2Title: "Learning systems",
    map2Text: "Machine learning, neural networks, language representations, and model evaluation.",
    map3Title: "Modern practice",
    map3Text: "Generative AI, LLMs, prompt workflows, verification, and responsible AI-assisted coding.",
    topicsLabel: "Course modules",
    topicsTitle: "Student notebook",
    indexTitle: "Jump to",
    sessionsLabel: "Weekly notebook",
    sessionsTitle: "Class sessions",
    session01Kicker: "Class 01",
    session01Title: "Introduction to Artificial Intelligence",
    session01Text:
      "Definitions, diagnostic checks, intelligent agents, applications, risks, an integrative activity, and references.",
    openSession: "Open class",
    footerText: "Artificial Intelligence course notebook",
    labels: {
      keyIdeas: "Key ideas",
      details: "Notebook details"
    }
  },
  es: {
    navTopics: "Temas",
    navSessions: "Sesiones",
    courseLabel: "Cuaderno del curso",
    heroTitle: "Inteligencia artificial",
    heroText:
      "Un cuaderno para estudiantes sobre agentes inteligentes, búsqueda, conocimiento, incertidumbre, optimización, aprendizaje, redes neuronales, lenguaje, IA generativa, LLMs y programación asistida por IA.",
    startLearning: "Empezar",
    viewMap: "Ver mapa",
    mapLabel: "Ruta del cuaderno",
    mapTitle: "De fundamentos de razonamiento a sistemas modernos de IA",
    map1Title: "Fundamentos de razonamiento",
    map1Text: "Agentes, búsqueda, representación de conocimiento, incertidumbre y optimización.",
    map2Title: "Sistemas de aprendizaje",
    map2Text: "Aprendizaje automático, redes neuronales, representaciones de lenguaje y evaluación de modelos.",
    map3Title: "Práctica moderna",
    map3Text: "IA generativa, LLMs, flujos con prompts, verificación y programación asistida por IA responsable.",
    topicsLabel: "Módulos del curso",
    topicsTitle: "Cuaderno del estudiante",
    indexTitle: "Ir a",
    sessionsLabel: "Cuaderno semanal",
    sessionsTitle: "Sesiones de clase",
    session01Kicker: "Clase 01",
    session01Title: "Introducción a la inteligencia artificial",
    session01Text:
      "Definiciones, diagnóstico, agentes inteligentes, aplicaciones, riesgos, actividad integradora y referencias.",
    openSession: "Abrir clase",
    footerText: "Cuaderno del curso de inteligencia artificial",
    labels: {
      keyIdeas: "Ideas clave",
      details: "Detalles del cuaderno"
    }
  }
};

function renderVisual(type, language) {
  const labels = {
    en: {
      input: "Input",
      perceive: "Perceive",
      reason: "Reason",
      act: "Act",
      goal: "Goal",
      start: "Start",
      goalNode: "Goal",
      facts: "Facts",
      rules: "Rules",
      inference: "Inference",
      belief: "Belief",
      evidence: "Evidence",
      update: "Update",
      data: "Data",
      train: "Train",
      model: "Model",
      predict: "Predict",
      prompt: "Prompt",
      generate: "Generate",
      verify: "Verify",
      context: "Context",
      attention: "Attention",
      answer: "Answer",
      code: "Code",
      test: "Test"
    },
    es: {
      input: "Entrada",
      perceive: "Percibir",
      reason: "Razonar",
      act: "Actuar",
      goal: "Meta",
      start: "Inicio",
      goalNode: "Meta",
      facts: "Hechos",
      rules: "Reglas",
      inference: "Inferencia",
      belief: "Creencia",
      evidence: "Evidencia",
      update: "Actualizar",
      data: "Datos",
      train: "Entrenar",
      model: "Modelo",
      predict: "Predecir",
      prompt: "Prompt",
      generate: "Generar",
      verify: "Verificar",
      context: "Contexto",
      attention: "Atención",
      answer: "Respuesta",
      code: "Código",
      test: "Prueba"
    }
  }[language];

  const visuals = {
    agent: `
      <div class="visual-card agent-loop">
        <div class="orbit">
          <span>${labels.input}</span>
          <span>${labels.perceive}</span>
          <span>${labels.reason}</span>
          <span>${labels.act}</span>
        </div>
        <div class="core">${labels.goal}</div>
      </div>
    `,
    search: `
      <div class="visual-card search-tree">
        <div class="tree-level"><span>${labels.start}</span></div>
        <div class="tree-level"><span>A</span><span>B</span><span>C</span></div>
        <div class="tree-level"><span>A1</span><span>A2</span><span>B1</span><span class="goal-node">${labels.goalNode}</span></div>
        <div class="path-line"></div>
      </div>
    `,
    knowledge: `
      <div class="visual-card knowledge-graph">
        <span class="node large">${labels.facts}</span>
        <span class="node">${labels.rules}</span>
        <span class="node accent">${labels.inference}</span>
        <span class="node">Graph</span>
        <span class="edge e1"></span>
        <span class="edge e2"></span>
        <span class="edge e3"></span>
      </div>
    `,
    uncertainty: `
      <div class="visual-card probability-visual">
        <div class="prob-row"><span>${labels.belief}</span><i style="--w: 62%"></i><b>0.62</b></div>
        <div class="prob-row"><span>${labels.evidence}</span><i style="--w: 84%"></i><b>0.84</b></div>
        <div class="prob-row"><span>${labels.update}</span><i style="--w: 73%"></i><b>0.73</b></div>
        <div class="dice">?</div>
      </div>
    `,
    optimization: `
      <div class="visual-card optimization-visual">
        <svg viewBox="0 0 420 260" role="img" aria-label="Optimization curve">
          <path class="axis" d="M38 224H390M42 28V226"/>
          <path class="curve" d="M46 202 C90 120 130 116 162 170 S242 240 286 110 S350 42 386 80"/>
          <circle class="best-point" cx="342" cy="61" r="9"/>
          <path class="step-arrow" d="M206 184 L244 148 L282 114 L330 70"/>
        </svg>
      </div>
    `,
    learning: `
      <div class="visual-card learning-pipeline">
        <span>${labels.data}</span>
        <i></i>
        <span>${labels.train}</span>
        <i></i>
        <span>${labels.model}</span>
        <i></i>
        <span>${labels.predict}</span>
      </div>
    `,
    neural: `
      <div class="visual-card neural-visual">
        <div class="layer">${"<span></span>".repeat(4)}</div>
        <div class="layer">${"<span></span>".repeat(5)}</div>
        <div class="layer">${"<span></span>".repeat(4)}</div>
        <div class="layer">${"<span></span>".repeat(2)}</div>
      </div>
    `,
    language: `
      <div class="visual-card language-visual">
        <div class="sentence"><span>Artificial</span><span>Intelligence</span><span>learns</span><span>patterns</span></div>
        <div class="vectors"><i></i><i></i><i></i><i></i><i></i></div>
        <div class="meaning-map"><span></span><span></span><span></span></div>
      </div>
    `,
    generative: `
      <div class="visual-card generative-visual">
        <span>${labels.prompt}</span>
        <i></i>
        <span>${labels.generate}</span>
        <i></i>
        <div class="outputs"><b>Text</b><b>Image</b><b>Code</b></div>
        <span class="verify">${labels.verify}</span>
      </div>
    `,
    llm: `
      <div class="visual-card llm-visual">
        <span>${labels.context}</span>
        <div class="attention-grid">${"<i></i>".repeat(25)}</div>
        <span>${labels.attention}</span>
        <span>${labels.answer}</span>
      </div>
    `,
    vibe: `
      <div class="visual-card vibe-visual">
        <span>${labels.prompt}</span>
        <span>${labels.code}</span>
        <span>${labels.test}</span>
        <span>${labels.verify}</span>
      </div>
    `
  };

  return visuals[type];
}

function renderNotebook(sections, labels) {
  return `
    <div class="detail-grid" aria-label="${labels.details}">
      ${sections.map((section) => `
        <section class="detail-card">
          <span class="label">${section.title}</span>
          <ul>
            ${section.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
      `).join("")}
    </div>
  `;
}

function topicCard(slide, index, language) {
  const content = slide[language];
  const labels = ui[language].labels;
  return `
    <article class="topic-card" id="${slide.id}">
      <div class="topic-top">
        <div>
          <div class="topic-number">${String(index + 1).padStart(2, "0")} / ${slides.length}</div>
          <p class="eyebrow">${content.kicker}</p>
          <h3>${content.title}</h3>
          <p class="topic-summary">${content.summary}</p>
          <p class="topic-deep">${content.body}</p>
        </div>
        <div class="visual-card">${renderVisual(slide.visual, language)}</div>
      </div>
      <div class="detail-grid key-grid">
        <section class="detail-card key-card">
          <span class="label">${labels.keyIdeas}</span>
          <ul>${content.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        </section>
      </div>
      ${renderNotebook(content.notebook, labels)}
    </article>
  `;
}

function render(language) {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = ui[language][node.dataset.i18n];
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });

  document.getElementById("topicIndex").innerHTML = slides
    .map((slide, index) => `<a href="#${slide.id}"><span>${String(index + 1).padStart(2, "0")}</span>${slide[language].title}</a>`)
    .join("");

  document.getElementById("topicList").innerHTML = slides
    .map((slide, index) => topicCard(slide, index, language))
    .join("");
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;
    localStorage.setItem("ia-language", language);
    render(language);
  });
});

render(localStorage.getItem("ia-language") || "en");

console.info(`Artificial Intelligence notebook version ${VERSION}`);
