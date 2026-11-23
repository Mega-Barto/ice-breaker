# Mega Ice-breaker

Un juego de preguntas para conocer mejor a tus amigos, familia o pareja — desarrollado con React y Tailwind CSS.

**Producción:** [megabarto.com/ice-breaker](https://megabarto.com/ice-breaker/) (GitHub Pages usa el nombre del repo como ruta; debe coincidir con `base` en `vite.config.ts`).

**Cómo se juega:** tú preguntas, el otro responde hasta el hartazgo.

## 🌈 Vibe Coding

Este proyecto fue desarrollado aplicando **Vibe Coding**:

> *El vibe coding se basa en utilizar modelos de lenguaje de gran escala (LLM, por sus siglas en inglés) para generar código a partir de descripciones en lenguaje natural. En lugar de escribir código línea por línea, el desarrollador proporciona instrucciones o ideas, y la IA se encarga de traducirlas en código funcional. Este enfoque permite a personas sin conocimientos técnicos profundos crear software funcional, ya que la IA realiza la mayor parte del trabajo pesado​.*

## ✨ Características

- 🎲 Pregunta aleatoria destacada para iniciar conversaciones
- 📋 Categorías desplegables para explorar diferentes temas
- 👆 Tarjetas interactivas que revelan preguntas al hacer clic
- 📱 Diseño totalmente responsivo
- 🌓 Interfaz moderna con gradientes, sombras y efectos visuales

## 📚 Categorías

Las preguntas viven en `src/data/questions.json`, agrupadas por categoría:

### Conocerse
- **Personalidad** — cómo eres y qué te define
- **Infancia** — recuerdos y experiencias de pequeño/a
- **Gustos** — preferencias del día a día
- **Sueños y Aspiraciones** — metas y motivación
- **Relaciones y Vida Social** — amistad, convivencia y vínculos
- **Valores y Creencias** — principios y lo que te importa
- **Creatividad y Pasatiempos** — proyectos, hobbies y desconexión
- **Romántico** — afecto, pareja y conexión emocional

### Entretenimiento
- **Música** — canciones, artistas y conciertos
- **Películas** — cine y universos cinematográficos
- **Series** — historias en formato episodio
- **Cultura Pop** — ficción, tendencias y recomendaciones

### Temáticas
- **Anime** — series, personajes y géneros del anime
- **Videojuegos** — plataformas, géneros y experiencias de juego
- **Libros** — lectura, autores y formatos
- **Tecnología** — gadgets, apps, IA y futuro digital

### Dinámica
- **Curiosidades** — manías, talentos y preguntas inesperadas
- **¿Y si...?** — hipotéticas ligeras para imaginar en voz alta
- **Desarrollo Profesional** — trabajo, carrera y aprendizaje
- **Cultura e Internet** — memes, historia y nostalgia online

### Selección especial (oculta)
- **Barto's Selection** — no aparece en la interfaz ni en el sorteo aleatorio hasta desbloquearla. Pulsa el botón `?`, introduce el patrón `0830` y la sección quedará visible durante la sesión. Añade preguntas en `src/data/questions.json` con `"category": "Barto's Selection"`.

Puedes editar o ampliar cualquier categoría en `src/data/questions.json`.

## 🚀 Tecnologías

- React con TypeScript
- Tailwind CSS para estilos
- Vite como herramienta de construcción
- Animaciones CSS personalizadas
- Arquitectura de componentes modular

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Mega-Barto/ice-breaker.git

# Entrar al directorio
cd ice-breaker

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
# → http://localhost:5173/ice-breaker/
```

## 🎮 Cómo jugar

Tú preguntas, el otro responde hasta el hartazgo.

(Elige categoría o pregunta aleatoria, revela la tarjeta, y a darle.)

## 🖼️ Filosofía de diseño

El diseño sigue principios de **Neuromorfismo Suave** combinado con **Glassmorfismo**, creando una interfaz que:
- Es visualmente atractiva pero no distrae
- Utiliza profundidad y textura sutiles para crear jerarquía
- Implementa microinteracciones que generan momentos de deleite
- Mantiene un esquema de color cohesivo que evoca calma y curiosidad

---

Creado con 😭 aplicando Vibe Coding
