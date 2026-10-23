# CAA English A1

Sitio web de práctica autónoma de inglés, nivel A1, del CAA Virtual (BUAP).
50 unidades organizadas en 10 módulos según los descriptores A1 del Marco Común Europeo de Referencia para las Lenguas (MCER / CEFR).
Todo el contenido para alumnos está en inglés.

## Temario

| Módulo | Descriptor MCER A1 | Unidades |
| --- | --- | --- |
| 1 · Hello! | Presentarse y dar/pedir datos personales | 1 Hello and Goodbye · 2 Hi, My Name Is… · 3 Numbers Everywhere · 4 Where Are You From? · 5 What's Your Job? |
| 2 · People in My Life | Describir a la familia, amigos y mascotas; habilidades | 6 This Is My Family · 7 Describing Myself and Others · 8 My Best Friend · 9 Have You Got a Pet? · 10 Can You Swim? |
| 3 · Things and Places | Describir objetos, la casa y el barrio; direcciones | 11 What Is This? · 12 What Is in Your Room? · 13 Welcome to My Home · 14 My Neighborhood · 15 Turn Left, Turn Right |
| 4 · Time and Routines | La hora, fechas y rutinas | 16 What Time Is It? · 17 When Is Your Birthday? · 18 My Daily Routine · 19 Who Does the Chores? · 20 My School Day |
| 5 · Free Time | Gustos, pasatiempos e invitaciones | 21 What Do You Like Doing? · 22 Do You Play Sports? · 23 Music and Movies · 24 Let's Go Out! · 25 My Phone and Me |
| 6 · Food and Drink | Comida, pedir en un café, precios y cantidades | 26 I'm Hungry! · 27 Is There Any Milk? · 28 At the Café · 29 How Much Is It? · 30 Breakfast Around the World |
| 7 · Right Now | Lo que pasa ahora, ropa, clima, postales | 31 What Are You Doing? · 32 What Are You Wearing? · 33 Can I Try It On? · 34 What's the Weather Like? · 35 Greetings From… |
| 8 · Getting Around | Transporte, boletos, hotel, lugares y fiestas | 36 How Do You Get to School? · 37 At the Bus Station · 38 My Hometown · 39 At the Hotel · 40 Let's Celebrate! |
| 9 · Everyday Needs | Salud, permisos, pedir ayuda, deseos, disculpas | 41 What's the Matter? · 42 School Rules · 43 Can You Help Me? · 44 I Want to Be… · 45 Sorry, I'm Late! |
| 10 · Looking Back, Looking Forward | Pasado simple, planes y proyecto final | 46 Where Were You? · 47 What Did You Do? · 48 My Last Birthday · 49 Next Weekend · 50 This Is Me! |

Las unidades 2, 7, 10, 12, 17, 18, 21 y 31 vienen del sitio *CAA English Practice*; las otras 42 son nuevas.

Cada unidad sigue los mismos 5 pasos: Presentation → Objectives → Explanation → Practice (Listening, Reading, Writing, Speaking) → Self-assessment.

## Qué hay en esta carpeta

| Carpeta / archivo | Qué es |
| --- | --- |
| `index.html` | Página principal: 10 módulos, buscador, filtro por módulo y barra de progreso. |
| `assets/unit.js`, `assets/unit.css` | La plantilla común: dibuja cualquier unidad a partir de su `data.js`. |
| `assets/config.js` | Ajustes del sitio: dirección para recibir los textos de writing y la plataforma de speaking. |
| Una carpeta por unidad (50) | Cada unidad completa: `index.html` + `data.js`. |
| `_template/` | Copia de una unidad para crear temas nuevos. |
| `tools/writing-collector.gs` | Script de Google para recibir los textos de writing en una hoja de cálculo. |

## 1. Publicar en GitHub Pages (en dos partes)

GitHub solo deja subir 100 archivos a la vez desde el navegador, por eso el sitio viene en dos partes.

1. Crea un repositorio público en github.com, por ejemplo `caa-english-a1`.
2. Descomprime **parte 1** y sube todo su contenido (no la carpeta en sí): **Add file → Upload files → Commit changes**.
3. Descomprime **parte 2** y sube su contenido al mismo repositorio, de la misma forma.
4. **Settings → Pages → Branch: `main`, carpeta `/ (root)` → Save.**
5. En 1–2 minutos el sitio queda en `https://TU-USUARIO.github.io/caa-english-a1/`.
6. En Google Sites: **Insertar → Insertar → Por URL**, y pega esa dirección.

## 2. Recibir los textos de writing

Sin configurar nada, el alumno descarga su texto y lo entrega al asesor.
Para recibirlos automáticamente en una hoja de Google, sigue los pasos al inicio de `tools/writing-collector.gs` y pega la URL en `assets/config.js`.

## 3. Speaking

Cada unidad tiene dos actividades de speaking:

1. **Listen and repeat (pronunciación):** 6 frases de la unidad. El alumno escucha la frase (normal o lenta), la dice y la página le da un porcentaje. Las palabras que se entendieron salen en verde y las que no, en rojo. Necesita 70 % para aprobar cada frase. Usa el reconocimiento de voz del navegador:
   - Funciona en **Google Chrome, Microsoft Edge y Safari** (también en celular). En Firefox no hay calificación: el alumno puede escuchar, repetir y grabarse.
   - Necesita internet y permiso del micrófono. Chrome y Edge mandan la voz a un servicio en línea (Google / Microsoft) para reconocerla.
   - Es una aproximación: mide si el navegador **entendió** las palabras, no evalúa sonidos uno por uno. Sirve como práctica, no como examen.
   - Para cambiar las frases de una unidad, edita la lista `items` de la actividad `type: "repeat"` en su `data.js`.
2. **Grabación individual (evidencia):** el alumno graba en la página y descarga su audio para subirlo a la plataforma del curso.

En `assets/config.js` escribe el nombre y el enlace de la plataforma (`speakingPlatformName`, `speakingPlatformUrl`).

## 4. Crear una unidad nueva

1. Copia la carpeta `_template` y cámbiale el nombre (sin espacios ni acentos).
2. Edita `data.js`: cambia `slug` por el nombre de la carpeta, pon su `number` y reemplaza el contenido.
3. Agrega una línea a la lista `UNITS` en `index.html` con su módulo (`mod`).

## Notas

- El progreso se guarda en el navegador con la clave `a1:` (distinta de `caa:` del otro sitio), así que no se mezcla aunque los dos sitios estén en la misma cuenta de GitHub.
- Los audios usan las voces del navegador. Cada personaje tiene voz de mujer u hombre en `speakers` dentro de su `data.js`. Las voces más naturales están en Microsoft Edge y Google Chrome.
- La grabación de voz necesita `https://` (GitHub Pages lo tiene) y que el alumno permita el micrófono.
