# Clase 3 - Búsqueda en amplitud (BFS)

## 1. Búsqueda por niveles

Breadth-First Search (BFS), o búsqueda en amplitud, recorre un grafo por niveles. Primero visita el nodo inicial, luego todos sus vecinos directos, después los vecinos que están a distancia dos, y así sucesivamente.

Una frase resume el comportamiento del algoritmo:

> **BFS no profundiza primero: expande la frontera por capas.**

## 2. Problema de búsqueda

Para resolver un problema con BFS se identifican:

- **Nodo inicial:** punto desde el cual comienza la búsqueda.
- **Nodo objetivo:** estado que se quiere encontrar.
- **Conexiones:** movimientos posibles entre estados.
- **Regla de desempate:** criterio utilizado cuando existen varias alternativas en el mismo nivel.

## 3. Regla de desempate

BFS define que se exploran primero los nodos más cercanos al inicio. Si varios nodos pertenecen al mismo nivel, se necesita una regla de desempate.

En estos ejemplos se usa:

> **Orden alfabético ascendente.**

Por tanto, ante B, C y D, se visita B antes que C y D.

## 4. Ejemplo completo resuelto

Grafo:

```text
                         A
                    /    |    \
                   B     C     D
                  / \    |    / \
                 E   F   G   H   I
                    / \      |
                   J   K     L
                       |
                       M
```

Nodo inicial:

```text
A
```

Nodo objetivo:

```text
M
```

Regla de desempate:

```text
orden alfabético ascendente
```

## 5. Orden de exploración BFS

BFS visita por niveles:

```text
Nivel 0: A
Nivel 1: B, C, D
Nivel 2: E, F, G, H, I
Nivel 3: J, K, L
Nivel 4: M
```

Orden de exploración:

```text
A -> B -> C -> D -> E -> F -> G -> H -> I -> J -> K -> L -> M
```

## 6. Camino solución

El orden de exploración no es lo mismo que el camino solución. Aunque BFS visita muchos nodos antes de llegar a M, la ruta que conecta el inicio con el objetivo es:

```text
A -> B -> F -> K -> M
```

## 7. La cola en BFS

BFS usa una cola o queue. Una cola sigue el principio:

```text
FIFO
First In, First Out
Primero en entrar, primero en salir
```

La cola permite recordar qué nodos fueron descubiertos y deben explorarse después.

## 8. Estados visitados

En grafos con ciclos, BFS mantiene un conjunto de nodos visitados para evitar repetir trabajo o quedar atrapado recorriendo las mismas conexiones.

Regla práctica:

> **Un nodo ya visitado no se vuelve a encolar ni a explorar.**

## 9. BFS y la ruta más corta

En grafos no ponderados, BFS sí garantiza encontrar un camino con el menor número de aristas desde el inicio hasta el objetivo, siempre que exista una solución.

Esto no significa que BFS encuentre siempre la ruta de menor costo cuando las aristas tienen pesos diferentes. Si los costos cambian, se necesitan otros algoritmos.

## 10. Procedimiento manual para BFS

1. Identifica el nodo inicial.
2. Identifica el nodo objetivo.
3. Define la regla de desempate.
4. Crea una cola e inserta el nodo inicial.
5. Marca el nodo inicial como visitado.
6. Extrae el primer nodo de la cola.
7. Verifica si ese nodo es el objetivo.
8. Identifica sus vecinos no visitados.
9. Ordénalos con la regla de desempate.
10. Agrégalos al final de la cola y márcalos como visitados.
11. Repite hasta encontrar el objetivo o hasta que la cola quede vacía.

## 11. Propiedades básicas de BFS

| Característica | BFS |
|---|---|
| Nombre | Breadth-First Search |
| Traducción | Búsqueda en amplitud |
| Estrategia | Explorar por niveles |
| Estructura asociada | Cola / Queue |
| Principio | FIFO |
| Usa visitados en grafos | Sí |
| Requiere regla de desempate | Sí, cuando hay varias alternativas |
| Garantiza ruta más corta en grafos no ponderados | Sí |
| Puede consumir mucha memoria | Sí |

## 12. Ideas clave

- Un grafo puede explorarse por profundidad o por amplitud.
- BFS recorre primero los nodos más cercanos al inicio.
- La cola conserva la frontera de búsqueda.
- El orden de los sucesores modifica el orden de exploración.
- En grafos es necesario controlar los nodos visitados.
- El orden de exploración no es necesariamente el camino solución.
- En grafos no ponderados, BFS encuentra una ruta con el menor número de aristas.
