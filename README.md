# 🎓 Invitación Digital de Graduación · Promoción 2026 (Edición Gala Premium)

Invitación web interactiva, moderna y elegante diseñada para promociones de graduación escolar y universitaria. Desarrollada con **HTML5, Tailwind CSS 4, CSS3 personalizado y JavaScript modular**.

Inspirada en el video de referencia y perfeccionada con una **portada de gala de alto impacto visual**: marco ornamental perimetral en oro y champán, filigranas en las cuatro esquinas, fondo aterciopelado con iluminación radial, partículas luminosas flotantes, sobre con proporciones de lujo y sello de lacre hiperrealista en 3D.

---

## 📁 Estructura del Proyecto

```text
c:\Users\Usuario\Desktop\promoción/
│
├── index.html                  # Estructura principal semántica con Portada Premium y Secciones
│
├── css/
│   ├── input.css               # Configuración de tema y paleta de Tailwind CSS 4
│   ├── tailwind.css            # CSS compilado y minificado por Tailwind CLI
│   ├── estilos.css             # Texturas de gala, marco ornamental, sobre 3D y tipografías
│   └── animaciones.css         # Entrada escalonada, resplandor del lacre, apertura y ecualizador
│
├── js/
│   ├── principal.js            # Orquestación de partículas, apertura 3D del sobre y scroll reveal
│   ├── reproductor.js          # Lógica del reproductor de música y barra de progreso
│   ├── contador.js             # Cuenta regresiva en tiempo real (Días, Horas, Minutos, Segundos)
│   └── confirmacion.js         # Gestión del modal y formulario RSVP + integración WhatsApp
│
├── img/
│   ├── sobre/
│   │   ├── sello-lacre-realista.svg  # Sello de lacre realista en vino tinto, oro y relieve 3D
│   │   ├── sello-vector.svg          # Sello clásico de medallón
│   │   └── sello.png                 # Recurso de respaldo
│   ├── fotografias/            # Fotografías Polaroid provisionales
│   └── decoraciones/
│       ├── emblema-graduacion-header.svg # Emblema superior con laureles de honor y birrete
│       ├── divisor-ornamental.svg        # Filigrana dorada de división de títulos
│       ├── filigrana-esquina.svg         # Adorno ornamental para las cuatro esquinas
│       ├── emblema-class.svg             # Emblema 3D "Class 2026"
│       └── iconos 3D (reloj, mapa, birrete)
│
├── audio/
│   └── musica.mp3              # Melodía de celebración extraída del video de referencia
│
├── package.json                # Dependencias de desarrollo (Tailwind CSS 4 CLI)
└── README.md                   # Documentación y guía de personalización
```

---

## 🎨 Paleta de Colores de Gala

- **Vino Tinto Principal:** `#23040c` / `#2b0611` / `#4a0d1f`
- **Borgoña Oscuro:** `#150207` / `#1f040b`
- **Rojo Granate:** `#5c0f27` / `#7b1635`
- **Marfil / Crema (Tarjeta interior y secciones claras):** `#faf7f2` / `#f4eee2`
- **Champán & Oro de Gala:** `#dfc9a5` / `#edd295` / `#f5e4bc`
- **Plata y Destellos Metálicos:** `#e2e8f0` / `#ffffff`

---

## 👑 Novedades de la Portada Premium

1. **Fondo y Marco Ornamental:**
   - Degradado multicapa con iluminación radial suave detrás del sobre.
   - Textura sutil de terciopelo/papel fino de algodón mediante micro-puntos reflectantes.
   - Viñeta oscura perimetral para profundidad de evento de gala.
   - Doble marco dorado con filigranas ornamentales vectoriales en las cuatro esquinas.
   - Partículas luminosas doradas y plateadas que flotan lentamente hacia arriba.

2. **Encabezado Superior Rediseñado:**
   - Emblema destacado de graduación con corona de laureles dorados y birrete con borla.
   - Texto caligráfico: *«Estás invitado a la»*.
   - Título de gala principal con gran presencia: *«CEREMONIA DE GRADUACIÓN»* en tipografía *Cinzel* con acabado foil dorado.
   - Divisor ornamental con florón y rombo dorado central.
   - Subtítulo: *«Un logro extraordinario que merece ser celebrado»*.

3. **Sobre de Lujo (Pieza Central Protagonista):**
   - Proporciones imponentes y mayor presencia tanto en móviles como en tablets y pantallas grandes.
   - Solapas con degradados naturales, sombras de profundidad y pliegues realistas.
   - Ribetes metálicos finos en color champán a lo largo de los bordes.
   - Lazos cruzados en "X" con brillo satinado y costura dorada.
   - **Sello de Lacre Hiperrealista:** Textura de lacre fundido en vino tinto rubí, anillo perlado dorado, birrete en relieve con el año 2026 y resplandor periódico (*anim-seal-gleam*).

4. **Indicador de Apertura:**
   - Botón *«CLICK PARA ABRIR»* en tipografía *Cinzel* dorada con espaciado amplio.
   - Líneas ornamentales difuminadas a los costados con rombo decorativo.
   - Indicador superior flotante con sutil movimiento vertical.
   - Frase guía: *«Abre esta invitación para descubrir los detalles»*.

5. **Entrada Escalonada (Staggered Intro Animation):**
   - 0s: Entrada del fondo con viñeta.
   - 0.3s: Descenso suave del emblema superior de laureles.
   - 0.6s: Aparición del título y textos de gala.
   - 0.9s: Entrada del sobre con efecto de escala y profundidad.
   - 1.3s: Entrada del botón de apertura y brillo del sello de lacre.
   - Flotación continua de partículas de luz.

---

## 🛠️ Comandos de Desarrollo (Tailwind CSS 4)

```bash
# Compilar y minificar CSS
npm run build:css

# Modo vigía automático (Watch mode)
npm run watch:css
```
