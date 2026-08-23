# Clase 4 - Grafos ponderados y algoritmo de Dijkstra

## 1. De un grafo a un problema de costo

En un grafo no ponderado, una arista indica que existe una conexión entre dos nodos. Sin embargo, en muchos problemas reales no todas las conexiones tienen el mismo costo.

Un **grafo ponderado** es un grafo en el que cada arista tiene asociado un valor numérico llamado **peso**.

Ese peso puede representar, por ejemplo:

- distancia entre dos lugares;
- tiempo de desplazamiento;
- costo económico;
- consumo de energía;
- latencia de una conexión;
- dificultad de una transición;
- riesgo asociado a una decisión.

Por tanto, en un grafo ponderado ya no basta con preguntar:

> ¿Cuántas aristas tiene el camino?

También debemos preguntar:

> ¿Cuál es el costo total del camino?

---

## 2. Conceptos fundamentales

Un grafo puede representarse como:

\[
G = (V,E)
\]

donde:

- \(V\) es el conjunto de vértices o nodos;
- \(E\) es el conjunto de aristas.

En un grafo ponderado añadimos una función de peso:

\[
w(u,v)
\]

que indica el costo de recorrer la arista entre los nodos \(u\) y \(v\).

### Ejemplo

Si existe una arista:

```text
A ----4---- B
```

el peso de esa conexión es:

```text
w(A,B) = 4
```

Si el grafo representa carreteras, ese 4 podría significar 4 km. Si representa una red, podría significar 4 ms de latencia.

---

## 3. Camino y costo de un camino

Un **camino** es una secuencia de nodos conectados por aristas.

Por ejemplo:

```text
A -> B -> D -> F
```

Si los pesos son:

```text
A --4-- B
B --5-- D
D --6-- F
```

el costo total es:

```text
4 + 5 + 6 = 15
```

Formalmente, el costo de un camino es la suma de los pesos de las aristas que lo componen.

### Importante

El camino con menos aristas no necesariamente es el camino de menor costo.

Un camino puede ser más largo en cantidad de pasos, pero más barato en costo acumulado.

---

# 4. Ejemplo principal

Trabajaremos con el siguiente grafo no dirigido:

```text
          4          5          6
     A ------- B -------- D -------- F
      \       /             \        /
      2\    1/               2\    /3
        \   /                  \  /
          C --------10---------- E
```

Las aristas son:

| Arista | Peso |
|---|---:|
| A - B | 4 |
| A - C | 2 |
| B - C | 1 |
| B - D | 5 |
| C - E | 10 |
| D - E | 2 |
| D - F | 6 |
| E - F | 3 |

Queremos encontrar el camino de **menor costo desde A hasta F**.

Algunas rutas posibles son:

```text
A -> B -> D -> F
Costo = 4 + 5 + 6 = 15
```

```text
A -> C -> E -> F
Costo = 2 + 10 + 3 = 15
```

```text
A -> C -> B -> D -> F
Costo = 2 + 1 + 5 + 6 = 14
```

```text
A -> C -> B -> D -> E -> F
Costo = 2 + 1 + 5 + 2 + 3 = 13
```

La última ruta tiene más aristas, pero su costo total es menor.

---

# 5. ¿Por qué DFS no resuelve este problema?

DFS decide qué explorar según la **profundidad de una rama**. No utiliza los pesos para priorizar el camino más barato.

Por ello, DFS puede encontrar una ruta válida, pero no garantiza encontrar la de menor costo.

Cuando los pesos importan necesitamos una estrategia que considere el costo acumulado.

Ahí aparece el **algoritmo de Dijkstra**.

---

# 6. Algoritmo de Dijkstra

El algoritmo de Dijkstra encuentra las distancias mínimas desde un nodo origen hacia los demás nodos de un grafo con pesos **no negativos**.

Para un origen determinado, mantiene una estimación de la mejor distancia conocida hacia cada nodo.

## Ideas clave

### Distancia tentativa

Es el mejor costo conocido hasta el momento para llegar a un nodo.

Al inicio:

```text
distancia(origen) = 0
distancia(resto)  = infinito
```

### Nodo no visitado con menor distancia

En cada iteración se elige el nodo no finalizado cuya distancia tentativa sea menor.

### Relajación

Cuando analizamos una arista \(u -> v\), preguntamos:

> ¿Llegar a \(v\) pasando por \(u\) es más barato que la mejor ruta que conocíamos?

La operación se expresa como:

```text
nuevo_costo = distancia[u] + peso(u,v)
```

Si:

```text
nuevo_costo < distancia[v]
```

actualizamos:

```text
distancia[v] = nuevo_costo
predecesor[v] = u
```

Este proceso se llama **relajación de una arista**.

---

# 7. Dijkstra paso a paso

Usaremos nuevamente:

```text
          4          5          6
     A ------- B -------- D -------- F
      \       /             \        /
      2\    1/               2\    /3
        \   /                  \  /
          C --------10---------- E
```

Origen:

```text
A
```

Objetivo:

```text
F
```

## Inicialización

| Nodo | Distancia | Predecesor |
|---|---:|---|
| A | 0 | - |
| B | ∞ | - |
| C | ∞ | - |
| D | ∞ | - |
| E | ∞ | - |
| F | ∞ | - |

El nodo con menor distancia es A.

---

## Iteración 1 - procesar A

Vecinos de A:

```text
B con peso 4
C con peso 2
```

Para B:

```text
0 + 4 = 4
```

Actualizamos:

```text
dist(B) = 4
pred(B) = A
```

Para C:

```text
0 + 2 = 2
```

Actualizamos:

```text
dist(C) = 2
pred(C) = A
```

Tabla:

| Nodo | Distancia | Predecesor |
|---|---:|---|
| A | 0 | - |
| B | 4 | A |
| C | 2 | A |
| D | ∞ | - |
| E | ∞ | - |
| F | ∞ | - |

A queda finalizado.

El siguiente nodo no finalizado con menor distancia es C, con costo 2.

---

## Iteración 2 - procesar C

Vecinos relevantes de C:

```text
B con peso 1
E con peso 10
```

### Revisar B

La mejor distancia conocida para B es:

```text
4
```

Pero pasando por C:

```text
dist(C) + peso(C,B)
2 + 1 = 3
```

Como:

```text
3 < 4
```

mejoramos B:

```text
dist(B) = 3
pred(B) = C
```

### Revisar E

```text
2 + 10 = 12
```

Como E estaba en infinito:

```text
dist(E) = 12
pred(E) = C
```

Tabla:

| Nodo | Distancia | Predecesor |
|---|---:|---|
| A | 0 | - |
| B | 3 | C |
| C | 2 | A |
| D | ∞ | - |
| E | 12 | C |
| F | ∞ | - |

C queda finalizado.

El siguiente nodo es B, con distancia 3.

---

## Iteración 3 - procesar B

B conecta con D mediante peso 5.

```text
dist(B) + peso(B,D)
3 + 5 = 8
```

Entonces:

```text
dist(D) = 8
pred(D) = B
```

Tabla:

| Nodo | Distancia | Predecesor |
|---|---:|---|
| A | 0 | - |
| B | 3 | C |
| C | 2 | A |
| D | 8 | B |
| E | 12 | C |
| F | ∞ | - |

B queda finalizado.

El siguiente nodo es D, con distancia 8.

---

## Iteración 4 - procesar D

D tiene dos conexiones importantes:

```text
D - E con peso 2
D - F con peso 6
```

### Revisar E

La distancia conocida de E es:

```text
12
```

Pero pasando por D:

```text
8 + 2 = 10
```

Como:

```text
10 < 12
```

actualizamos:

```text
dist(E) = 10
pred(E) = D
```

### Revisar F

```text
8 + 6 = 14
```

Actualizamos:

```text
dist(F) = 14
pred(F) = D
```

Tabla:

| Nodo | Distancia | Predecesor |
|---|---:|---|
| A | 0 | - |
| B | 3 | C |
| C | 2 | A |
| D | 8 | B |
| E | 10 | D |
| F | 14 | D |

D queda finalizado.

El siguiente nodo es E, con distancia 10.

---

## Iteración 5 - procesar E

E conecta con F mediante peso 3.

La mejor distancia conocida de F es:

```text
14
```

Pasando por E:

```text
10 + 3 = 13
```

Como:

```text
13 < 14
```

actualizamos:

```text
dist(F) = 13
pred(F) = E
```

Tabla:

| Nodo | Distancia | Predecesor |
|---|---:|---|
| A | 0 | - |
| B | 3 | C |
| C | 2 | A |
| D | 8 | B |
| E | 10 | D |
| F | 13 | E |

E queda finalizado.

El siguiente nodo es F.

Como F es nuestro objetivo, podemos detenernos.

---

# 8. Reconstrucción del camino

La distancia mínima hasta F es:

```text
13
```

Pero también queremos conocer la ruta.

Utilizamos los predecesores:

```text
F <- E
E <- D
D <- B
B <- C
C <- A
```

Leemos la secuencia al revés:

```text
A -> C -> B -> D -> E -> F
```

Costo:

```text
2 + 1 + 5 + 2 + 3 = 13
```

## Resultado

```text
Camino mínimo:
A -> C -> B -> D -> E -> F

Costo mínimo:
13
```

---

# 9. ¿Qué significa "finalizar" un nodo?

Mientras un nodo no ha sido seleccionado como el de menor distancia, su valor todavía puede mejorar.

Ejemplo:

Inicialmente encontramos:

```text
A -> B = 4
```

pero después descubrimos:

```text
A -> C -> B = 2 + 1 = 3
```

Por eso B pasó de 4 a 3.

Cuando Dijkstra selecciona un nodo como el no visitado de menor distancia, bajo las condiciones del algoritmo su distancia queda definitiva.

---

# 10. Condición importante: no usar pesos negativos

Dijkstra requiere pesos no negativos.

Ejemplos válidos:

```text
0, 1, 2, 5, 20...
```

Ejemplo problemático:

```text
A ---- 4 ---- B
 \            |
  1          -10
   \          |
      C -------
```

Una arista negativa puede hacer que una ruta que parecía definitiva se vuelva más barata después.

Para grafos con pesos negativos se necesitan otros algoritmos, como Bellman-Ford.

---

# 11. Procedimiento manual

Para resolver Dijkstra a mano:

1. Asigna 0 al nodo inicial.
2. Asigna infinito a todos los demás.
3. Selecciona el nodo no finalizado con menor distancia.
4. Revisa cada vecino.
5. Calcula:

```text
distancia_actual + peso_de_la_arista
```

6. Si el nuevo costo es menor, actualiza la distancia.
7. Guarda el predecesor que produjo la mejora.
8. Finaliza el nodo actual.
9. Repite.
10. Al finalizar, reconstruye el camino usando los predecesores.

---

# 12. Tabla de trabajo recomendada

| Nodo | Distancia tentativa | Predecesor | Finalizado |
|---|---:|---|---|
| A | 0 | - | Sí/No |
| B | ∞ | - | Sí/No |
| C | ∞ | - | Sí/No |
| ... | ... | ... | ... |

La tabla permite observar claramente cómo las distancias van mejorando.

---

# 13. Errores frecuentes

## Elegir el nodo por orden alfabético

Dijkstra no selecciona el siguiente nodo por su nombre.

Selecciona:

> el nodo no finalizado con menor distancia tentativa.

---

## Sumar solamente el peso de la última arista

Incorrecto:

```text
D -> E pesa 2
por tanto E cuesta 2
```

Correcto:

```text
dist(D) = 8
peso(D,E) = 2

dist(E) = 8 + 2 = 10
```

---

## No actualizar una distancia que mejora

Si teníamos:

```text
dist(B) = 4
```

y encontramos una ruta de costo:

```text
3
```

debemos reemplazar 4 por 3.

---

## Cambiar el predecesor sin mejorar el costo

El predecesor se actualiza únicamente cuando encontramos una ruta mejor.

---

## Confundir número de aristas con costo

Dijkstra minimiza la suma de pesos, no necesariamente la cantidad de movimientos.

---

## Usar Dijkstra con pesos negativos

El algoritmo no garantiza resultados correctos cuando existen pesos negativos.

---

# 14. Comparación rápida con DFS

| Característica | DFS | Dijkstra |
|---|---|---|
| Criterio principal | Profundidad | Menor costo acumulado |
| Usa pesos | No para decidir | Sí |
| Garantiza menor costo | No | Sí, con pesos no negativos |
| Estructura conceptual | Pila | Prioridad por distancia |
| Puede retroceder | Sí | Actualiza costos mediante relajación |
| Resultado buscado | Una solución/recorrido | Camino de costo mínimo |

---

# 15. Complejidad

La implementación influye en el costo computacional.

Con una cola de prioridad eficiente, una forma habitual de expresar la complejidad es:

\[
O((V+E)\log V)
\]

En una implementación sencilla basada en buscar linealmente el menor nodo pendiente, puede llegar a:

\[
O(V^2)
\]

En esta clase el objetivo principal es comprender el funcionamiento manual del algoritmo antes de estudiar su implementación.

---

# 16. Ideas que deben quedar claras

- Un grafo ponderado asigna costos a sus aristas.
- Un camino se evalúa sumando sus pesos.
- Menos pasos no significa necesariamente menor costo.
- Dijkstra mantiene la mejor distancia conocida hacia cada nodo.
- La relajación intenta mejorar una distancia existente.
- Siempre se procesa el nodo no finalizado con menor distancia tentativa.
- Los predecesores permiten reconstruir el camino mínimo.
- Dijkstra requiere pesos no negativos.
- El resultado no es solamente "llegar": es llegar con el menor costo posible.

---

# Ejercicio de comprobación

Considere:

```text
        3
   A -------- B
   |          |
  6|          |2
   |          |
   C -------- D
        1
```

Además existe:

```text
B --5-- C
```

Encuentre con Dijkstra el camino de menor costo desde A hasta D.

Registre en cada iteración:

1. nodo seleccionado;
2. distancias tentativas;
3. actualizaciones realizadas;
4. predecesores;
5. camino final;
6. costo total.
