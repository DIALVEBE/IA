# Incertidumbre en Inteligencia Artificial

## Razonar y tomar decisiones cuando no conocemos todo con certeza

La Inteligencia Artificial no trabaja siempre con mundos perfectamente conocidos. En muchas situaciones reales, un sistema debe **inferir, predecir o decidir utilizando información incompleta, ambigua, ruidosa o probabilística**.

Un vehículo autónomo no sabe con certeza absoluta si un objeto detectado por una cámara es un peatón.  
Un sistema médico no sabe con certeza absoluta qué enfermedad tiene una persona solamente porque presenta fiebre.  
Un detector de fraude no puede asegurar que una transacción sea fraudulenta únicamente porque tiene un comportamiento extraño.

En estos casos, la IA debe responder una pregunta diferente:

> **¿Qué tan probable es que una hipótesis sea verdadera dadas las evidencias disponibles?**

---

## 1. De la lógica determinista a la incertidumbre

En un sistema basado únicamente en reglas, podríamos encontrar algo como:

```text
SI tiene_fiebre Y tiene_tos
ENTONCES tiene_gripe
```

El problema es que el mundo real rara vez funciona de manera tan rígida.

Una persona con fiebre y tos podría tener:

- gripe;
- COVID;
- una infección respiratoria;
- neumonía;
- otra condición.

En lugar de producir solamente una afirmación verdadera o falsa, un sistema puede manejar **grados de creencia**:

```text
P(gripe | fiebre, tos) = 0.72
P(covid | fiebre, tos) = 0.18
P(otra_causa | fiebre, tos) = 0.10
```

El símbolo `|` se lee como **"dado que"**.

Por ejemplo:

```text
P(gripe | fiebre, tos)
```

significa:

> Probabilidad de que exista gripe **dado que** se observaron fiebre y tos.

![Determinismo frente a incertidumbre](assets/01_determinismo_vs_incertidumbre.svg)

---

# 2. ¿Por qué aparece incertidumbre?

La incertidumbre puede aparecer por diferentes razones.

## 2.1 Información incompleta

Un sistema no conoce todas las variables relevantes.

Ejemplo:

```text
Queremos saber si mañana lloverá.

Conocemos:
- humedad;
- temperatura;
- presión atmosférica.

No conocemos perfectamente:
- formación futura de nubes;
- movimientos locales del viento;
- cambios repentinos del clima.
```

---

## 2.2 Sensores imperfectos

Los sensores pueden equivocarse.

Una cámara puede confundir:

```text
persona ↔ sombra
perro ↔ objeto
señal de tránsito ↔ anuncio
```

Un sensor de proximidad puede detectar un obstáculo que no existe o no detectar uno real.

---

## 2.3 Datos con ruido

Los datos pueden contener:

- errores;
- valores faltantes;
- mediciones imprecisas;
- información contradictoria.

---

## 2.4 Comportamiento humano

Muchas decisiones humanas son difíciles de predecir.

Ejemplos:

- ¿comprará un producto?
- ¿abandonará una plataforma?
- ¿pagará un crédito?
- ¿abrirá un correo?
- ¿hará clic en un anuncio?

---

## 2.5 Aleatoriedad real

Algunos fenómenos tienen un componente inherentemente aleatorio.

Por ejemplo:

- lanzamiento de una moneda;
- fallos de componentes;
- llegada de clientes;
- variaciones del tráfico.

---

# 3. Probabilidad: representar incertidumbre con números

Una probabilidad es un número entre:

\[
0 \le P(A) \le 1
\]

donde:

- `0` significa imposible;
- `1` significa seguro;
- los valores intermedios representan distintos grados de posibilidad.

| Probabilidad | Interpretación aproximada |
|---:|---|
| 0.00 | imposible |
| 0.10 | muy poco probable |
| 0.50 | tan probable como improbable |
| 0.80 | bastante probable |
| 0.99 | extremadamente probable |
| 1.00 | seguro |

Por ejemplo:

```text
P(lluvia) = 0.70
```

significa que, según nuestro modelo o conocimiento disponible, asignamos una probabilidad del **70 %** a que ocurra lluvia.

## Importante

Una probabilidad del 70 % **no significa** que el evento esté "70 % ocurrido".

Significa que existe un determinado grado de incertidumbre sobre si el evento ocurrirá o no.

---

# 4. Conceptos fundamentales

## 4.1 Evento

Un evento es algo que puede ocurrir.

```text
A = "mañana llueve"
B = "una transacción es fraude"
C = "el paciente tiene gripe"
```

---

## 4.2 Probabilidad previa o *prior*

Es lo que creemos **antes de observar nueva evidencia**.

Ejemplo:

```text
P(fraude) = 0.01
```

Antes de analizar una transacción específica, sabemos que aproximadamente el 1 % de las transacciones son fraudulentas.

---

## 4.3 Evidencia

Es nueva información observada.

Ejemplo:

```text
La transacción:
- ocurrió a las 3:00 a. m.;
- fue realizada desde otro país;
- tiene un valor inusualmente alto.
```

---

## 4.4 Verosimilitud o *likelihood*

Mide qué tan compatible es una evidencia con una hipótesis.

Ejemplo:

```text
P(transacción_inusual | fraude) = 0.90
```

Se interpreta como:

> Si una transacción realmente fuera fraude, existe 90 % de probabilidad de observar este comportamiento inusual.

---

## 4.5 Probabilidad posterior o *posterior*

Es nuestra nueva creencia **después de observar la evidencia**.

```text
P(fraude | transacción_inusual)
```

Esta es normalmente la cantidad que queremos calcular.

![Ciclo de actualización bayesiana](assets/02_ciclo_bayes.svg)

---

# 5. Probabilidad condicional

La probabilidad condicional mide la probabilidad de un evento cuando ya sabemos que ocurrió otro.

Se escribe:

\[
P(A|B)
\]

y se calcula como:

\[
P(A|B)=\frac{P(A\cap B)}{P(B)}
\]

siempre que:

\[
P(B)>0
\]

---

## Ejemplo sencillo

Supongamos que tenemos 100 estudiantes.

- 60 estudian Python.
- 40 estudian Java.
- 30 estudian Python y también Inteligencia Artificial.
- De los 60 que estudian Python, queremos saber cuántos también estudian IA.

Entonces:

\[
P(IA|Python)=\frac{30}{60}=0.5
\]

Por tanto:

```text
P(IA | Python) = 0.50
```

Es decir:

> Entre los estudiantes que estudian Python, el 50 % también estudia Inteligencia Artificial.

---

# 6. Teorema de Bayes

El Teorema de Bayes permite **invertir una probabilidad condicional**.

Su expresión es:

\[
P(H|E)=\frac{P(E|H)P(H)}{P(E)}
\]

donde:

- \(H\) = hipótesis;
- \(E\) = evidencia;
- \(P(H)\) = probabilidad previa;
- \(P(E|H)\) = probabilidad de observar la evidencia si la hipótesis es verdadera;
- \(P(E)\) = probabilidad total de observar la evidencia;
- \(P(H|E)\) = probabilidad posterior.

La idea más importante no es memorizar la fórmula.

La idea es:

```text
CREENCIA ANTERIOR
       +
NUEVA EVIDENCIA
       ↓
ACTUALIZACIÓN
       ↓
NUEVA CREENCIA
```

---

# 7. Ejemplo completo 1: las tres cajas

Tenemos tres cajas.

![Tres cajas con distintas probabilidades](assets/03_cajas_monedas.svg)

Las probabilidades de extraer una moneda de oro son:

| Caja | P(oro) | P(plata) |
|---|---:|---:|
| A | 0.70 | 0.30 |
| B | 0.40 | 0.60 |
| C | 0.10 | 0.90 |

Una persona selecciona una caja al azar, pero no nos dice cuál.

Como las tres cajas son igualmente probables al inicio:

\[
P(A)=P(B)=P(C)=\frac{1}{3}
\]

Por tanto:

```text
A = 33.33 %
B = 33.33 %
C = 33.33 %
```

---

## Observación 1: aparece una moneda de ORO

Queremos calcular:

```text
P(A | oro)
P(B | oro)
P(C | oro)
```

Antes de normalizar, multiplicamos:

```text
creencia previa × probabilidad de observar oro
```

### Caja A

\[
P(A)\times P(oro|A)
\]

\[
\frac{1}{3}\times0.70=0.2333
\]

### Caja B

\[
\frac{1}{3}\times0.40=0.1333
\]

### Caja C

\[
\frac{1}{3}\times0.10=0.0333
\]

Sumamos:

\[
0.2333+0.1333+0.0333=0.40
\]

Ahora normalizamos.

### Posterior para A

\[
P(A|oro)=\frac{0.2333}{0.40}=0.5833
\]

### Posterior para B

\[
P(B|oro)=\frac{0.1333}{0.40}=0.3333
\]

### Posterior para C

\[
P(C|oro)=\frac{0.0333}{0.40}=0.0833
\]

Resultado:

```text
A = 58.33 %
B = 33.33 %
C =  8.33 %
```

Antes de observar la moneda:

```text
A = B = C
```

Después de observar oro:

```text
A > B > C
```

La evidencia modificó nuestra creencia.

---

## Observación 2: aparece otra moneda de ORO

La posterior anterior se convierte ahora en nuestro nuevo prior.

Tenemos:

```text
A = 0.5833
B = 0.3333
C = 0.0833
```

Multiplicamos nuevamente por la probabilidad de obtener oro:

```text
A: 0.5833 × 0.70 = 0.4083
B: 0.3333 × 0.40 = 0.1333
C: 0.0833 × 0.10 = 0.0083
```

La suma es aproximadamente:

```text
0.55
```

Normalizamos:

```text
A ≈ 74.24 %
B ≈ 24.24 %
C ≈  1.52 %
```

Dos monedas de oro hacen que la Caja A sea mucho más probable.

Pero todavía **no tenemos certeza absoluta**.

---

## Observación 3: aparece una moneda de PLATA

Ahora usamos:

```text
P(plata | A) = 0.30
P(plata | B) = 0.60
P(plata | C) = 0.90
```

Después de actualizar:

```text
A ≈ 58.33 %
B ≈ 38.10 %
C ≈  3.57 %
```

La evidencia nueva hace que la probabilidad de B aumente.

Esto muestra una propiedad fundamental del razonamiento probabilístico:

> Una IA puede cambiar sus creencias cuando aparece nueva información.

---

# 8. Programando el ejemplo de las cajas

No necesitamos una biblioteca de Machine Learning.

```python
prob_oro = {
    "A": 0.70,
    "B": 0.40,
    "C": 0.10
}

creencias = {
    "A": 1 / 3,
    "B": 1 / 3,
    "C": 1 / 3
}

print(creencias)
```

Salida aproximada:

```text
{
    'A': 0.3333,
    'B': 0.3333,
    'C': 0.3333
}
```

Creamos una función para actualizar las creencias.

```python
def actualizar(creencias, probabilidades_evidencia):
    no_normalizadas = {}

    for hipotesis in creencias:
        no_normalizadas[hipotesis] = (
            creencias[hipotesis]
            * probabilidades_evidencia[hipotesis]
        )

    total = sum(no_normalizadas.values())

    posteriores = {}

    for hipotesis in no_normalizadas:
        posteriores[hipotesis] = (
            no_normalizadas[hipotesis] / total
        )

    return posteriores
```

Si observamos oro:

```python
creencias = actualizar(
    creencias,
    prob_oro
)

print(creencias)
```

Resultado:

```text
A ≈ 0.5833
B ≈ 0.3333
C ≈ 0.0833
```

---

## Procesando varias observaciones

Podemos definir las probabilidades para oro y plata:

```python
probabilidades = {
    "oro": {
        "A": 0.70,
        "B": 0.40,
        "C": 0.10
    },
    "plata": {
        "A": 0.30,
        "B": 0.60,
        "C": 0.90
    }
}
```

Y actualizar cada vez que llegue una observación.

```python
creencias = {
    "A": 1 / 3,
    "B": 1 / 3,
    "C": 1 / 3
}

observaciones = [
    "oro",
    "oro",
    "plata"
]

for evidencia in observaciones:
    creencias = actualizar(
        creencias,
        probabilidades[evidencia]
    )

    print(
        evidencia,
        creencias
    )
```

El sistema está realizando una forma sencilla de **inferencia bayesiana secuencial**.

---

# 9. Ejemplo completo 2: una prueba médica que acierta el 95 %

Supongamos una enfermedad poco frecuente.

Datos:

```text
P(enfermedad) = 0.01
```

Es decir, afecta al 1 % de la población.

La prueba tiene:

```text
Sensibilidad = 95 %
```

Esto significa:

\[
P(+|enfermedad)=0.95
\]

También produce un 5 % de falsos positivos:

\[
P(+|no\ enfermedad)=0.05
\]

Una persona obtiene resultado positivo.

Pregunta:

> ¿La probabilidad de que realmente tenga la enfermedad es 95 %?

**No.**

![Prueba médica y tasa base](assets/04_prueba_medica.svg)

---

## Paso 1. Imaginemos 10 000 personas

Con prevalencia del 1 %:

```text
100 personas tienen la enfermedad.
9 900 personas no la tienen.
```

---

## Paso 2. Aplicamos la prueba a las 100 personas enfermas

La prueba detecta correctamente el 95 %:

```text
100 × 0.95 = 95
```

Tenemos:

```text
95 positivos verdaderos
```

---

## Paso 3. Aplicamos la prueba a las 9 900 personas sanas

Existe un 5 % de falsos positivos:

```text
9 900 × 0.05 = 495
```

Tenemos:

```text
495 falsos positivos
```

---

## Paso 4. Observamos todos los resultados positivos

Hay:

```text
95 positivos verdaderos
+
495 falsos positivos
=
590 positivos
```

De esos 590:

```text
95 realmente tienen la enfermedad
```

Por tanto:

\[
P(enfermedad|+)=\frac{95}{590}
\]

\[
P(enfermedad|+)\approx0.161
\]

Resultado:

```text
≈ 16.1 %
```

Aunque la prueba tiene una sensibilidad del 95 %, un resultado positivo no implica automáticamente una probabilidad del 95 % de enfermedad.

---

# 10. El problema de ignorar la tasa base

Este ejemplo muestra algo muy importante en IA:

> **Las probabilidades previas importan.**

Una evidencia puede parecer muy fuerte, pero su interpretación depende también de qué tan frecuente era la hipótesis antes de observarla.

Este fenómeno aparece en:

- detección de fraude;
- ciberseguridad;
- detección de enfermedades;
- sistemas de alarma;
- detección de anomalías;
- clasificación de eventos raros.

---

# 11. Código del ejemplo médico

```python
p_enfermedad = 0.01

p_positivo_dado_enfermedad = 0.95

p_positivo_dado_sano = 0.05

p_sano = 1 - p_enfermedad

numerador = (
    p_positivo_dado_enfermedad
    * p_enfermedad
)

p_positivo = (
    p_positivo_dado_enfermedad
    * p_enfermedad
    +
    p_positivo_dado_sano
    * p_sano
)

posterior = numerador / p_positivo

print(posterior)
```

Salida:

```text
0.161016949...
```

En porcentaje:

```python
print(
    f"{posterior * 100:.2f}%"
)
```

Salida:

```text
16.10%
```

---

# 12. Ejemplo 3: detector de spam

Supongamos:

```text
P(spam) = 0.30
P(no spam) = 0.70
```

Queremos utilizar la palabra:

```text
"premio"
```

como evidencia.

Sabemos que:

```text
P("premio" | spam) = 0.80

P("premio" | no spam) = 0.05
```

Llega un correo que contiene la palabra `"premio"`.

Queremos calcular:

\[
P(spam|"premio")
\]

---

## Paso 1. Numerador

\[
P("premio"|spam)P(spam)
\]

\[
0.80\times0.30=0.24
\]

---

## Paso 2. Probabilidad total de observar "premio"

\[
P("premio")
\]

\[
=(0.80)(0.30)+(0.05)(0.70)
\]

\[
=0.24+0.035
\]

\[
=0.275
\]

---

## Paso 3. Posterior

\[
P(spam|"premio")=
\frac{0.24}{0.275}
\]

\[
\approx0.8727
\]

Resultado:

```text
P(spam | "premio") ≈ 87.27 %
```

---

## Código

```python
p_spam = 0.30
p_no_spam = 0.70

p_premio_spam = 0.80
p_premio_no_spam = 0.05

numerador = (
    p_premio_spam
    * p_spam
)

denominador = (
    p_premio_spam
    * p_spam
    +
    p_premio_no_spam
    * p_no_spam
)

posterior = (
    numerador / denominador
)

print(
    f"Probabilidad de spam: "
    f"{posterior:.4f}"
)
```

---

# 13. ¿Y si aparece más de una evidencia?

Supongamos que el correo contiene:

```text
"premio"
"urgente"
```

Tenemos:

```text
P(premio | spam) = 0.80
P(urgente | spam) = 0.70

P(premio | no spam) = 0.05
P(urgente | no spam) = 0.10
```

Si hacemos la **suposición simplificadora** de que ambas palabras son condicionalmente independientes dada la clase, podemos multiplicar:

```text
P(premio, urgente | spam)
≈
P(premio | spam)
×
P(urgente | spam)
```

Entonces:

```text
0.80 × 0.70 = 0.56
```

Para correos que no son spam:

```text
0.05 × 0.10 = 0.005
```

Aplicando Bayes:

```text
P(spam | premio, urgente)
≈ 97.96 %
```

Este tipo de razonamiento está relacionado con el clasificador conocido como **Naive Bayes**.

La palabra *Naive* aparece porque se introduce una suposición fuerte de independencia entre características que muchas veces no es completamente cierta, pero que puede funcionar sorprendentemente bien en algunos problemas.

---

# 14. Ejemplo 4: un robot con un sensor imperfecto

Un robot se desplaza por un entorno.

Antes de recibir información del sensor:

```text
P(obstáculo) = 0.20
```

El sensor funciona así:

```text
P(beep | obstáculo) = 0.90

P(beep | no obstáculo) = 0.10
```

El sensor emite:

```text
BEEP
```

Queremos saber:

\[
P(obstáculo|beep)
\]

---

## Cálculo

Numerador:

\[
0.90\times0.20=0.18
\]

Denominador:

\[
(0.90)(0.20)+(0.10)(0.80)
\]

\[
=0.18+0.08
\]

\[
=0.26
\]

Posterior:

\[
\frac{0.18}{0.26}\approx0.6923
\]

Resultado:

```text
P(obstáculo | beep) ≈ 69.23 %
```

![Robot: inferencia y decisión](assets/06_sensor_robot.svg)

---

# 15. Inferir no es lo mismo que decidir

La inferencia produjo:

```text
P(obstáculo | beep) = 0.6923
```

Pero ahora aparece otra pregunta:

> ¿Qué debe hacer el robot?

Podemos establecer una política:

```text
Si P(obstáculo) >= 0.60:
    detenerse
```

Entonces:

```python
prob_obstaculo = 0.6923

umbral = 0.60

if prob_obstaculo >= umbral:
    print("DETENER ROBOT")
else:
    print("CONTINUAR")
```

Salida:

```text
DETENER ROBOT
```

Aquí aparecen dos etapas distintas:

```text
EVIDENCIA
   ↓
INFERENCIA
   ↓
PROBABILIDAD
   ↓
DECISIÓN
   ↓
ACCIÓN
```

---

# 16. Decisiones bajo incertidumbre

Una IA no siempre debe elegir simplemente la hipótesis con mayor probabilidad.

También puede considerar:

- costos;
- beneficios;
- riesgos;
- consecuencias de equivocarse.

---

## Ejemplo

Un sistema estima:

```text
P(fraude) = 0.20
```

Podría parecer una probabilidad relativamente baja.

Pero supongamos:

```text
Costo de dejar pasar un fraude = $1 000
Costo de revisar manualmente una transacción legítima = $5
```

Aunque solamente exista un 20 % de probabilidad de fraude, podría ser razonable revisar la operación porque el costo esperado del fraude es alto.

Esta idea conduce al concepto de **utilidad esperada** y a la **teoría de decisiones**.

---

# 17. Probabilidad conjunta

La probabilidad conjunta representa que dos eventos ocurran simultáneamente.

Se escribe:

\[
P(A,B)
\]

o:

\[
P(A\cap B)
\]

Por ejemplo:

```text
P(lluvia, tráfico_alto)
```

representa la probabilidad de que:

```text
llueva
Y
haya tráfico alto.
```

La regla del producto es:

\[
P(A,B)=P(A|B)P(B)
\]

También:

\[
P(A,B)=P(B|A)P(A)
\]

Estas dos expresiones son una de las bases desde las cuales se obtiene el Teorema de Bayes.

---

# 18. Independencia

Dos eventos son independientes cuando conocer uno no cambia la probabilidad del otro.

Formalmente:

\[
P(A|B)=P(A)
\]

y:

\[
P(A,B)=P(A)P(B)
\]

Ejemplo aproximado:

```text
resultado de lanzar una moneda
resultado de lanzar otra moneda independiente
```

Si dos variables son dependientes, no podemos multiplicar sus probabilidades sin tener en cuenta esa dependencia.

---

# 19. Redes Bayesianas

Cuando existen muchas variables, escribir todas las combinaciones posibles puede volverse muy costoso.

Las **redes bayesianas** representan variables y relaciones probabilísticas mediante un grafo dirigido.

![Red bayesiana simple](assets/05_red_bayesiana.svg)

En este ejemplo:

```text
Enfermedad
   ↓
Fiebre

Enfermedad
   ↓
Tos

Enfermedad
   ↓
Fatiga
```

La estructura expresa que la probabilidad de los síntomas depende directamente de la enfermedad.

Podríamos tener:

```text
P(enfermedad) = 0.05
```

y probabilidades condicionales como:

```text
P(fiebre | enfermedad) = 0.80
P(tos | enfermedad) = 0.70
P(fatiga | enfermedad) = 0.60
```

También necesitaríamos conocer cómo se comportan estos síntomas cuando la enfermedad no está presente.

Por ejemplo:

```text
P(fiebre | no enfermedad) = 0.10
P(tos | no enfermedad) = 0.20
P(fatiga | no enfermedad) = 0.25
```

Con esas probabilidades podemos actualizar nuestra creencia a medida que observamos síntomas.

---

# 20. Una red bayesiana no es simplemente un diagrama

Una red bayesiana tiene dos componentes:

## 20.1 Estructura

Un grafo dirigido acíclico.

```text
Variable A
    ↓
Variable B
```

La flecha representa dependencia probabilística directa.

---

## 20.2 Parámetros

Cada variable tiene una distribución de probabilidad.

Si tiene padres, se utiliza una tabla de probabilidad condicional.

Ejemplo:

| Enfermedad | P(Fiebre = sí) |
|---|---:|
| Sí | 0.80 |
| No | 0.10 |

---

# 21. Simular incertidumbre con Python

También podemos utilizar simulaciones para estudiar comportamientos probabilísticos.

```python
import random

probabilidad_lluvia = 0.30

dias = 10_000

dias_con_lluvia = 0

for _ in range(dias):
    if random.random() < probabilidad_lluvia:
        dias_con_lluvia += 1

frecuencia = (
    dias_con_lluvia / dias
)

print(
    frecuencia
)
```

La salida debería aproximarse a:

```text
0.30
```

aunque no será exactamente igual cada vez.

---

# 22. Simulación de un sensor

Supongamos un sensor con:

```text
P(detectar | obstáculo) = 0.90
```

Podemos simular su comportamiento.

```python
import random

def sensor(hay_obstaculo):
    if hay_obstaculo:
        return random.random() < 0.90

    return random.random() < 0.10
```

Prueba:

```python
for _ in range(10):
    resultado = sensor(
        hay_obstaculo=True
    )

    print(resultado)
```

Aunque realmente existe un obstáculo, el sensor podría fallar en algunas ocasiones.

Esta es una forma sencilla de representar **ruido**.

---

# 23. Un pequeño sistema de inferencia probabilística

Podemos construir una función genérica para dos hipótesis:

```python
def bayes(
    prior,
    likelihood,
    likelihood_no_h
):
    p_no_h = 1 - prior

    numerador = (
        likelihood * prior
    )

    denominador = (
        likelihood * prior
        +
        likelihood_no_h * p_no_h
    )

    return (
        numerador / denominador
    )
```

Ejemplo del robot:

```python
posterior = bayes(
    prior=0.20,
    likelihood=0.90,
    likelihood_no_h=0.10
)

print(
    posterior
)
```

Resultado:

```text
0.692307...
```

---

# 24. Bayes no es Machine Learning por sí solo

En los ejemplos anteriores **no entrenamos un modelo**.

No usamos:

```python
model.fit(X_train, y_train)
```

Las probabilidades fueron proporcionadas previamente.

El proceso fue:

```text
CONOCIMIENTO PREVIO
        ↓
PROBABILIDADES
        ↓
EVIDENCIA
        ↓
INFERENCIA
        ↓
POSTERIOR
```

En Machine Learning, muchas de esas probabilidades o relaciones pueden ser **aprendidas a partir de datos**.

Por ejemplo:

```text
datos históricos
      ↓
aprendizaje
      ↓
parámetros estimados
      ↓
modelo
      ↓
predicción
```

Por eso incertidumbre y aprendizaje están relacionados, pero no son exactamente lo mismo.

---

# 25. Probabilidad, puntuación y confianza no siempre significan lo mismo

Es importante evitar una confusión frecuente.

Un sistema puede mostrar:

```text
confianza = 0.95
```

pero ese valor no necesariamente representa:

```text
95 % de probabilidad real
```

Depende de cómo fue construido el modelo.

En sistemas de Machine Learning aparece el concepto de **calibración probabilística**.

Un modelo está bien calibrado cuando, aproximadamente:

> Entre los casos a los que asigna probabilidad 0.80, cerca del 80 % termina perteneciendo realmente a esa clase.

Por eso no se debe interpretar cualquier número producido por un modelo como una probabilidad perfecta.

---

# 26. Resumen conceptual

La incertidumbre en IA puede resumirse así:

```text
No conozco completamente el mundo.
            ↓
Represento mi incertidumbre.
            ↓
Observo evidencia.
            ↓
Actualizo mis creencias.
            ↓
Estimo probabilidades.
            ↓
Tomo una decisión.
```

Conceptos fundamentales:

| Concepto | Pregunta |
|---|---|
| Probabilidad | ¿Qué tan posible es? |
| Prior | ¿Qué creía antes? |
| Evidencia | ¿Qué observé? |
| Likelihood | ¿Qué tan esperable era esa evidencia bajo una hipótesis? |
| Posterior | ¿Qué creo ahora? |
| Bayes | ¿Cómo actualizo mi creencia? |
| Red bayesiana | ¿Cómo represento dependencias entre muchas variables? |
| Decisión | ¿Qué acción tomo con esa incertidumbre? |

---

# 27. Ejercicios de práctica

## Ejercicio 1 — Interpretación

Un sistema devuelve:

```text
P(lluvia | nubes_oscuras) = 0.75
```

Explica con tus propias palabras qué significa.

---

## Ejercicio 2 — Probabilidad condicional

En un grupo de 200 personas:

```text
120 utilizan Python.
80 utilizan Java.
60 utilizan Python y Machine Learning.
```

Calcula:

\[
P(ML|Python)
\]

---

## Ejercicio 3 — Detector de fraude

Supongamos:

```text
P(fraude) = 0.02

P(alerta | fraude) = 0.90

P(alerta | no fraude) = 0.04
```

Si una transacción produce una alerta, calcula:

\[
P(fraude|alerta)
\]

Antes de calcular, escribe tu estimación intuitiva.

Después compara tu intuición con el resultado.

---

## Ejercicio 4 — Sensor de humo

Datos:

```text
P(incendio) = 0.005

P(alarma | incendio) = 0.99

P(alarma | no incendio) = 0.02
```

Calcula:

\[
P(incendio|alarma)
\]

Pregunta adicional:

> ¿Por qué una alarma muy sensible puede producir una probabilidad posterior menor de la que intuitivamente esperamos?

---

## Ejercicio 5 — Spam

Datos:

```text
P(spam) = 0.25

P("gratis" | spam) = 0.70

P("gratis" | no spam) = 0.08
```

Calcula:

\[
P(spam|"gratis")
\]

---

## Ejercicio 6 — Actualización secuencial

Tres cajas tienen:

```text
P(rojo | A) = 0.80
P(rojo | B) = 0.50
P(rojo | C) = 0.20
```

Inicialmente:

```text
P(A) = P(B) = P(C) = 1/3
```

Se observan, en este orden:

```text
rojo
rojo
no rojo
```

Calcula las probabilidades posteriores después de cada observación.

---

# 28. Ejercicios de programación

## Reto 1 — Función Bayes genérica

Construye:

```python
def bayes(
    prior,
    p_evidencia_si_h,
    p_evidencia_si_no_h
):
    ...
```

Debe devolver:

```text
P(H | evidencia)
```

Prueba la función con:

- prueba médica;
- detector de fraude;
- sensor del robot.

---

## Reto 2 — Clasificador probabilístico simple de correo

Crea un programa que reciba una palabra:

```text
premio
urgente
gratis
reunion
proyecto
```

y estime si un correo tiene mayor probabilidad de ser:

```text
SPAM
NO SPAM
```

Define manualmente probabilidades para cada palabra.

Ejemplo:

```python
p_palabra_spam = {
    "premio": 0.80,
    "urgente": 0.70,
    "gratis": 0.75,
    "reunion": 0.10,
    "proyecto": 0.08
}
```

Construye también:

```python
p_palabra_no_spam
```

y actualiza la probabilidad usando Bayes.

---

## Reto 3 — Robot probabilístico

Crea un programa con tres estados:

```text
LIBRE
POSIBLE_OBSTACULO
DETENER
```

Reglas sugeridas:

```text
P(obstáculo) < 0.30
→ LIBRE

0.30 <= P(obstáculo) < 0.60
→ POSIBLE_OBSTACULO

P(obstáculo) >= 0.60
→ DETENER
```

El sensor debe generar observaciones imperfectas.

Después de cada observación, actualiza la probabilidad de obstáculo.

---

## Reto 4 — Simulación de 100 000 personas

Reproduce mediante simulación el ejemplo de la prueba médica.

Genera:

```text
100 000 personas
```

Para cada persona:

1. decide probabilísticamente si tiene la enfermedad;
2. simula el resultado de la prueba;
3. cuenta positivos verdaderos;
4. cuenta falsos positivos;
5. estima:

```text
P(enfermedad | positivo)
```

Compara el resultado simulado con el cálculo teórico.

---

# 29. Reto de análisis

Un sistema de seguridad afirma:

```text
"Nuestro detector identifica el 99 % de los ataques."
```

Responde:

1. ¿Esa información es suficiente para saber qué tan confiable es una alerta?
2. ¿Qué otra probabilidad necesitamos conocer?
3. ¿Por qué importa la frecuencia real de ataques?
4. ¿Puede un sistema con 99 % de sensibilidad generar muchas falsas alarmas?
5. ¿Qué consecuencias tendría esto en una empresa?

---

# 30. Soluciones de comprobación

## Ejercicio 1

```text
Dadas las nubes oscuras observadas,
el modelo asigna 75 % de probabilidad
a que ocurra lluvia.
```

---

## Ejercicio 2

\[
P(ML|Python)=\frac{60}{120}=0.50
\]

Resultado:

```text
50 %
```

---

## Ejercicio 3

Datos:

```text
P(fraude) = 0.02
P(no fraude) = 0.98
P(alerta | fraude) = 0.90
P(alerta | no fraude) = 0.04
```

Numerador:

```text
0.90 × 0.02 = 0.018
```

Denominador:

```text
0.018 + (0.04 × 0.98)
=
0.018 + 0.0392
=
0.0572
```

Posterior:

```text
0.018 / 0.0572
≈ 0.3147
```

Resultado:

```text
≈ 31.47 %
```

---

## Ejercicio 4

Numerador:

```text
0.99 × 0.005
=
0.00495
```

Falsos positivos:

```text
0.02 × 0.995
=
0.0199
```

Posterior:

```text
0.00495
/
(0.00495 + 0.0199)
≈
0.1992
```

Resultado:

```text
≈ 19.92 %
```

---

## Ejercicio 5

Numerador:

```text
0.70 × 0.25
=
0.175
```

Denominador:

```text
0.175
+
(0.08 × 0.75)
=
0.235
```

Posterior:

```text
0.175 / 0.235
≈ 0.7447
```

Resultado:

```text
≈ 74.47 %
```

---

# 31. Preguntas para cerrar

1. ¿Por qué una IA necesita trabajar con incertidumbre?
2. ¿Qué diferencia existe entre prior y posterior?
3. ¿Qué representa `P(A | B)`?
4. ¿Por qué la tasa base puede cambiar radicalmente una conclusión?
5. ¿Qué diferencia existe entre inferencia y decisión?
6. ¿Qué representa una flecha en una red bayesiana?
7. ¿Por qué una probabilidad alta no significa certeza?
8. ¿Qué diferencia existe entre inferencia bayesiana y entrenamiento de Machine Learning?

---

# 32. Idea central

Una IA inteligente no necesita saber todo con certeza.

Necesita ser capaz de:

```text
representar lo que no sabe
          ↓
usar la evidencia disponible
          ↓
actualizar sus creencias
          ↓
estimar riesgos
          ↓
tomar decisiones razonables
```

La incertidumbre no es un error del sistema.

En muchos problemas reales, **la incertidumbre es parte del problema que la IA debe aprender a manejar**.

---

# Referencias recomendadas

- Russell, S. J., & Norvig, P. (2021). *Artificial Intelligence: A Modern Approach* (4th ed.). Pearson.
- Murphy, K. P. (2022). *Probabilistic Machine Learning: An Introduction*. MIT Press.
- Pearl, J. (1988). *Probabilistic Reasoning in Intelligent Systems*. Morgan Kaufmann.
