# Clase 2 - Búsqueda en profundidad (DFS)

## 1. Búsqueda en grafos

En muchos problemas de Inteligencia Artificial es necesario encontrar una forma de llegar desde un estado inicial hasta un estado objetivo. Una manera de representar este tipo de problemas es mediante **grafos**.

Un grafo se puede expresar como:

\[
G = (V, E)
\]

Donde:

- **V** es el conjunto de vértices o nodos.
- **E** es el conjunto de aristas o conexiones entre nodos.

Por ejemplo:

```text
             A
          /  |  \
         B   C   D
        / \  |  / \
       E   F G H   I
          / \   |
         J   K  L
             |
             M
```

En este grafo:

```text
V = {A, B, C, D, E, F, G, H, I, J, K, L, M}
```

Algunas de sus conexiones son:

```text
(A,B)
(A,C)
(A,D)
(B,E)
(B,F)
(F,J)
(F,K)
(K,M)
```

Los nodos pueden representar **estados posibles** de un problema, mientras que las aristas representan las posibilidades de pasar de un estado a otro.

---

## 2. Problema de búsqueda

Para resolver un problema de búsqueda debemos identificar, como mínimo:

- **Nodo inicial:** punto desde el cual comienza la búsqueda.
- **Nodo objetivo:** estado que queremos encontrar.
- **Conexiones:** movimientos posibles entre estados.
- **Regla de selección:** criterio utilizado cuando existen varias alternativas.

En el grafo anterior podemos definir:

```text
Nodo inicial = A
Nodo objetivo = M
```

El problema consiste en encontrar una secuencia de nodos que permita llegar desde `A` hasta `M`.

---

# 3. Depth-First Search - DFS

**Depth-First Search (DFS)**, o **Búsqueda en Profundidad**, es una estrategia de recorrido y búsqueda que explora una rama del grafo tan profundamente como sea posible antes de regresar y explorar otra alternativa.

Su comportamiento puede resumirse así:

```text
¿Puedo continuar profundizando?

        SI
        |
        v
      avanzo

        NO
        |
        v
    retrocedo
```

Una idea sencilla para recordarlo es:

> **DFS no salta: profundiza o retrocede.**

---

## 4. Regla de desempate

DFS indica que debemos profundizar, pero no determina por sí mismo cuál vecino debe seleccionarse cuando existen varias opciones.

Considere:

```text
       A
     / | \
    B  C  D
```

Desde `A` existen tres alternativas. DFS podría comenzar por cualquiera de ellas dependiendo de la regla definida.

En estos ejercicios útilizaremos, salvo que se indique lo contrario:

> **Orden alfabético ascendente.**

Por tanto:

```text
B antes que C antes que D
```

DFS comenzaría por `B`.

Es importante recordar que esto **no ocurre porque B esté dibujado a la izquierda**, sino porque se ha definido una regla de selección.

---

# 5. Ejemplo completo resuelto

Considere nuevamente el grafo:

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

Se desea encontrar `M` comenzando en `A`.

Regla de desempate:

```text
orden alfabético ascendente
```

## Paso 1 - Nodo A

Visitamos:

```text
A
```

Vecinos disponibles:

```text
B, C, D
```

Por orden alfabético seleccionamos `B`.

Recorrido hasta el momento:

```text
A -> B
```

---

## Paso 2 - Nodo B

Desde `B` podemos llegar a:

```text
A, E, F
```

`A` ya fue visitado, por lo que quedan:

```text
E, F
```

Seleccionamos `E`.

Recorrido:

```text
A -> B -> E
```

---

## Paso 3 - Nodo E

`E` no es el objetivo y no tiene vecinos nuevos que podamos explorar.

DFS debe **retroceder** hasta el nodo más reciente que tenga una alternativa pendiente.

Ese nodo es `B`.

Desde `B` aún queda pendiente:

```text
F
```

El nodo `B` no se registra nuevamente en el orden de exploración porque ya había sido visitado.

---

## Paso 4 - Nodo F

Visitamos `F`.

Orden de exploración:

```text
A -> B -> E -> F
```

Desde `F` tenemos:

```text
B, J, K
```

`B` ya fue visitado. Entre `J` y `K`, elegimos primero `J`.

---

## Paso 5 - Nodo J

Recorrido:

```text
A -> B -> E -> F -> J
```

`J` no tiene vecinos nuevos.

Retrocedemos hasta `F` y probamos la alternativa pendiente `K`.

---

## Paso 6 - Nodo K

Visitamos `K`:

```text
A -> B -> E -> F -> J -> K
```

Desde `K` podemos llegar a:

```text
F, M
```

`F` ya fue visitado. Queda `M`.

---

## Paso 7 - Nodo M

Visitamos:

```text
M
```

Como `M` es el objetivo, la búsqueda termina.

### Orden de exploración DFS

```text
A -> B -> E -> F -> J -> K -> M
```

---

# 6. Orden de exploración y camino solución

Estos dos conceptos no son equivalentes.

En el ejemplo anterior, DFS visitó:

```text
A -> B -> E -> F -> J -> K -> M
```

Sin embargo, `E` y `J` fueron ramas exploradas que no forman parte de la ruta final entre `A` y `M`.

El **camino solución** es:

```text
A -> B -> F -> K -> M
```

Por tanto:

```text
ORDEN DE EXPLORACIÓN != CAMINO SOLUCIÓN
```

- **Orden de exploración:** secuencia en la que DFS fue descubriendo los nodos.
- **Camino solución:** secuencia de conexiones que realmente une el nodo inicial con el objetivo.

---

# 7. Retroceso o backtracking

El retroceso ocurre cuando DFS llega a un nodo desde el cual no puede continuar hacia ningún vecino no visitado.

Por ejemplo:

```text
      A
      |
      B
     / \
    C   D
```

Si DFS recorre:

```text
A -> B -> C
```

pero `C` no permite continuar, debe regresar a `B` y explorar `D`.

Conceptualmente:

```text
A -> B -> C
         |
         no hay salida
         |
         v
    retroceder a B
         |
         v
         D
```

Retroceder no significa registrar nuevamente `B` como un nodo nuevo. Significa regresar dentro de la estructura de decisiones para encontrar una alternativa pendiente.

---

# 8. La pila en DFS

DFS está relacionado con una estructura de datos llamada **pila** o **stack**.

Una pila sigue el principio:

```text
LIFO
Last In, First Out
Último en entrar, primero en salir
```

Durante un recorrido podemos imaginar la ruta activa de esta manera:

```text
[A]
[A, B]
[A, B, E]
```

Cuando `E` no puede continuar, se elimina de la ruta activa:

```text
[A, B]
```

Luego podemos profundizar hacia otra alternativa:

```text
[A, B, F]
[A, B, F, J]
```

Sí `J` tampoco permite continuar:

```text
[A, B, F]
```

Después:

```text
[A, B, F, K]
[A, B, F, K, M]
```

La pila permite recordar el camino activo y facilita el retroceso.

---

# 9. Estados visitados

En un árbol simple el recorrido puede parecer directo, pero un **grafo** puede contener caminos que vuelven a conectarse o incluso ciclos.

Ejemplo:

```text
       A
      / \
     B   C
    / \ / \
   D   E   F
    \ /
     G
```

Al recorrer el grafo podemos llegar a un nodo que ya había sido visitado.

Para evitar repetir trabajo y quedar atrapados en ciclos se mantiene un conjunto de **visitados**.

Por ejemplo:

```text
Visitados = {A, B, D, G, E}
```

Sí desde `E` aparece nuevamente `B`, no debemos explorarlo otra vez porque ya pertenece al conjunto de visitados.

Una regla importante es:

> **Un nodo ya visitado no se vuelve a explorar.**

---

# 10. DFS y la ruta mas corta

DFS puede encontrar una solución, pero **no garantiza encontrar la ruta mas corta**.

Considere:

```text
             A
            / \
           B   M
          /
         C
        /
       D
      /
     M
```

Sí la regla de desempate hace que `B` se explore primero, DFS puede encontrar:

```text
A -> B -> C -> D -> M
```

Sin embargo existe una ruta mucho mas corta:

```text
A -> M
```

DFS no cometio un error. Simplemente su estrategia consiste en profundizar primero, no en optimizar la longitud de la ruta.

> **Encontrar una solución no significa necesariamente encontrar la mejor solución.**

---

# 11. Procedimiento manual para resolver DFS

Utilice este procedimiento en cada ejercicio:

1. Identifique el **nodo inicial**.
2. Identifique el **nodo objetivo**.
3. Determine la **regla de desempate**.
4. Marque el nodo actual como **visitado**.
5. Verifique sí el nodo actual es el objetivo.
6. Identifique sus vecinos **no visitados**.
7. Sí existen varios vecinos disponibles, aplique la regla de desempate.
8. Sí existe un vecino disponible, profundice hacia él.
9. Sí no existen vecinos disponibles, retroceda.
10. No vuelva a explorar nodos ya visitados.
11. Detenga la búsqueda cuando encuentre el objetivo.

Una plantilla útil para cada ejercicio es:

```text
Nodo inicial:

Nodo objetivo:

Regla de desempate:

Orden DFS:

Camino solución:
```

---

# 12. Propiedades básicas de DFS

| Característica | DFS |
|---|---|
| Nombre | Depth-First Search |
| Traducción | Búsqueda en profundidad |
| Estrategia | Profundizar primero |
| Estructura asociada | Pila / Stack |
| Principio | LIFO |
| Usa visitados en grafos | Sí |
| Requiere regla de desempate | Si, cuando hay varias alternativas |
| Garantiza ruta mas corta | No |
| Puede retroceder | Sí |

---

# 13. Ideas clave

Al finalizar el tema debe quedar claro que:

- Un grafo representa estados y conexiones posibles.
- DFS explora primero en profundidad.
- Cuando no puede seguir profundizando, retrocede.
- El orden de los sucesores modifica el recorrido.
- En grafos es necesario controlar los nodos visitados.
- El orden de exploración no es necesariamente el camino solución.
- DFS puede encontrar una solución sin que sea la mas corta.

Una frase resume el comportamiento del algoritmo:

> **DFS no salta: profundiza o retrocede.**
