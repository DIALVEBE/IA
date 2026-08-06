# Bitacora del repo IA

Fecha de revision: 2026-08-06
Rama de trabajo: `clase-01-introduccion-ia`
Repositorio: https://github.com/DIALVEBE/IA
GitHub Pages: https://dialvebe.github.io/IA/

## Lo revisado

- El repo es un sitio estatico publicado en GitHub Pages desde `main`.
- La portada actual usa `index.html`, `styles.css` y `script.js`.
- El contenido inicial del notebook esta cargado desde `script.js` con selector EN/ES.
- El selector EN/ES es parte central del Pages actual y debe mantenerse en cada nueva sesion.
- El estilo visual viene del `template.pptx` y ya esta consolidado en `styles.css`: fondo oscuro, acentos cyan/pink/lime, tarjetas con borde fino, grilla y visuales tipo presentacion.
- El Pages publicado respondio correctamente con HTTP 200 y sirve la misma estructura de la copia local.
- La carpeta recibida como fuente esta en `Resources/` y contiene `Clase1_Guia_Docente_Semana_1_Introduccion_IA.docx`.
- El Word contiene una guia docente completa para semana 1, no solo una introduccion breve.
- El `.docx` incluye 7 imagenes embebidas de 1600 x 900.

## Decisiones de estructura

- Crear una rama por sesion. Para esta clase se creo `clase-01-introduccion-ia`.
- Mantener una copia versionada de la fuente Word en `resources/clase-01/`.
- Publicar la clase como pagina dedicada en `clases/clase-01/`.
- Guardar imagenes extraidas en `clases/clase-01/assets/` con nombres descriptivos.
- Conservar la portada existente y agregar una seccion de sesiones que enlace a la clase nueva.
- Reutilizar el sistema visual existente desde `styles.css` y extenderlo solo con clases necesarias para paginas de leccion.
- Mantener el flujo bilingue EN/ES: la portada traduce la tarjeta de sesion desde `script.js` y la clase usa `lesson.js` con la misma llave `localStorage` (`ia-language`).

## Clase 01 convertida

La nueva pagina incluye:

- Proposito, alineacion con syllabus y agenda de 120 minutos.
- Apertura con indicadores recientes y diagnostico "es IA?".
- Definicion de inteligencia e IA con las cuatro perspectivas clasicas.
- Diferencia entre software tradicional, automatizacion, IA simbolica, ML, deep learning y GenAI.
- Evolucion historica de la IA.
- Agentes inteligentes, PEAS, robot aspirador y alerta de riesgo de desercion.
- Tipos de problemas que aborda la IA.
- Aplicaciones en salud, finanzas, manufactura y logistica.
- Capacidades, limites, riesgos y marco NIST AI RMF.
- Actividad integradora con canvas de sistema de IA.
- Cierre, ticket de salida, apendice docente, rubrica y referencias.
- Version en ingles estructurada por los mismos bloques para conservar la experiencia bilingue del Pages.

## Plan de trabajo para siguientes sesiones

1. Crear una rama nueva por cada sesion: `clase-02-...`, `clase-03-...`.
2. Agregar la fuente original de cada sesion bajo `resources/clase-NN/`.
3. Extraer imagenes del material fuente y guardarlas en `clases/clase-NN/assets/`.
4. Crear `clases/clase-NN/index.html` reutilizando la estructura de la clase 01.
5. Crear o actualizar el JS de la sesion para mantener EN/ES con `ia-language`.
6. Enlazar cada clase desde la seccion bilingue `Class sessions` / `Sesiones de clase` de la portada.
7. Validar localmente con servidor estatico y revisar enlaces, imagenes, cambio de idioma y responsividad.
8. Commit y push de la rama de sesion para revision antes de integrar a `main`.

## Comandos utiles

```bash
git switch main
git pull --ff-only
git switch -c clase-02-nombre-del-tema
```

```bash
python -m http.server 8000
# abrir http://localhost:8000/
```

Si no hay Python disponible en el entorno:

```bash
busybox httpd -f -p 8000
```

## Pendiente inmediato

- Revisar visualmente la nueva clase en navegador.
- Confirmar si el indice principal debe seguir bilingue o si las sesiones se manejaran solo en espanol.
- Definir si cada rama de clase se fusiona a `main` despues de revision o si se publica temporalmente desde ramas separadas.
