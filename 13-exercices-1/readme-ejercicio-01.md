# Ejercicio 01: Tarjeta de Producto

## Objetivo del Ejercicio

Crear una **tarjeta de producto** (product card) usando Bootstrap 5. Este es tu primer ejercicio práctico para familiarizarte con el componente Card de Bootstrap.

---

## Enunciado

Debes crear una página HTML que contenga una tarjeta de producto con las siguientes características:

### Requisitos:

1. **Estructura básica HTML5** con Bootstrap 5 importado desde CDN
2. **Una tarjeta (card)** centrada en la página con las siguientes partes:
   - **Imagen del producto** en la parte superior (puedes usar placeholder)
   - **Badge** que diga "Nuevo" en color azul
   - **Título del producto**: "Smartphone XYZ Pro"
   - **Precio**: "€799.99" en negrita y grande
   - **Descripción breve**: "Última generación con cámara de 108MP y batería de larga duración."
   - **Lista de características** (3 ítems con iconos):
     - Pantalla 6.7" AMOLED
     - Cámara 108MP
     - Batería 5000mAh
   - **Dos botones**:
     - "Comprar Ahora" (botón azul)
     - "Ver Detalles" (botón con borde)

3. La tarjeta debe tener:
   - Ancho máximo de 400px
   - Sombra
   - Bordes redondeados

---

## Resultado Esperado

Tu página debe verse así:
- Una tarjeta centrada en la pantalla
- Imagen arriba
- Badge "Nuevo" en la esquina
- Contenido bien espaciado
- Botones alineados horizontalmente
- Responsive (se adapta a móvil)

---

## Tutorial Paso a Paso

### Paso 1: Crear la Estructura HTML Básica

Primero, crea un archivo `ejercicio-01.html` y añade la estructura HTML5 básica:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ejercicio 01 - Tarjeta de Producto</title>
  
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <!-- Aquí irá nuestro código -->

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**¿Qué hemos hecho?**
- `<!doctype html>`: Declara que es HTML5
- `<meta charset="utf-8">`: Permite caracteres especiales (€, ñ, etc.)
- `<meta name="viewport"...>`: Hace que sea responsive
- Importamos Bootstrap CSS desde CDN (Content Delivery Network)
- Importamos Bootstrap JS al final (mejor rendimiento)

---

### Paso 2: Crear el Contenedor Principal

Dentro del `<body>`, añade un contenedor que centre la tarjeta:

```html
<body class="bg-light">
  
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <!-- Aquí irá la tarjeta -->
  </div>

  <script src="..."></script>
</body>
```

**¿Qué significan estas clases?**
- `bg-light`: Fondo gris claro para toda la página
- `container`: Contenedor Bootstrap que centra el contenido
- `d-flex`: Display flex (permite usar flexbox)
- `justify-content-center`: Centra horizontalmente
- `align-items-center`: Centra verticalmente
- `min-vh-100`: Altura mínima del 100% del viewport (pantalla completa)

---

### Paso 3: Crear la Tarjeta Base

Dentro del contenedor, añade la estructura básica de la tarjeta:

```html
<div class="card shadow" style="max-width: 400px;">
  <!-- Aquí irá el contenido -->
</div>
```

**¿Qué hemos hecho?**
- `card`: Componente Card de Bootstrap
- `shadow`: Añade una sombra (profundidad visual)
- `max-width: 400px`: Limita el ancho máximo de la tarjeta

---

### Paso 4: Añadir la Imagen

Dentro de la tarjeta, añade la imagen:

```html
<div class="card shadow" style="max-width: 400px;">
  <img src="https://via.placeholder.com/400x250/667eea/ffffff?text=Smartphone" 
       class="card-img-top" 
       alt="Smartphone">
  <!-- Más contenido -->
</div>
```

**¿Qué significan estas clases?**
- `card-img-top`: Imagen que va en la parte superior de la tarjeta
- La imagen se ajusta automáticamente al ancho de la tarjeta
- `alt`: Texto alternativo (importante para accesibilidad)

**Nota sobre la imagen:**
- Usamos `via.placeholder.com` para generar una imagen de prueba
- En un proyecto real, usarías: `src="img/smartphone.jpg"`

---

### Paso 5: Añadir el Cuerpo de la Tarjeta

Después de la imagen, añade el `card-body`:

```html
<div class="card-body">
  <!-- Aquí irá todo el contenido de texto -->
</div>
```

**¿Qué es card-body?**
- Contenedor para el contenido principal de la tarjeta
- Añade padding automáticamente
- Separa visualmente el contenido de los bordes

---

### Paso 6: Añadir el Badge y Título

Dentro del `card-body`, añade:

```html
<div class="card-body">
  <span class="badge bg-primary mb-2">Nuevo</span>
  <h5 class="card-title">Smartphone XYZ Pro</h5>
</div>
```

**¿Qué hemos hecho?**
- `badge`: Componente Bootstrap para etiquetas pequeñas
- `bg-primary`: Fondo azul (color principal de Bootstrap)
- `mb-2`: Margin bottom (separación inferior)
- `card-title`: Clase especial para títulos de tarjetas

---

### Paso 7: Añadir el Precio

Después del título:

```html
<p class="h3 text-primary mb-3">€799.99</p>
```

**¿Qué significan estas clases?**
- `h3`: Tamaño de fuente como un `<h3>` pero usando `<p>`
- `text-primary`: Color azul del texto
- `mb-3`: Margin bottom de 1rem (16px)

---

### Paso 8: Añadir la Descripción

```html
<p class="card-text text-muted mb-3">
  Última generación con cámara de 108MP y batería de larga duración.
</p>
```

**¿Qué hemos hecho?**
- `card-text`: Clase para el texto descriptivo de la tarjeta
- `text-muted`: Color gris (menos prominente)
- `mb-3`: Separación inferior

---

### Paso 9: Añadir la Lista de Características

```html
<ul class="list-unstyled mb-3">
  <li class="mb-2">Pantalla 6.7" AMOLED</li>
  <li class="mb-2">Cámara 108MP</li>
  <li class="mb-2">Batería 5000mAh</li>
</ul>
```

**¿Qué significan estas clases?**
- `list-unstyled`: Elimina las viñetas (bullets) de la lista
- `mb-3`: Separación después de la lista
- `mb-2`: Separación entre cada ítem
- Usamos emojis como iconos (puedes usar Bootstrap Icons si prefieres)

**Alternativa con Bootstrap Icons:**
```html
<ul class="list-unstyled mb-3">
  <li class="mb-2"><i class="bi bi-phone"></i> Pantalla 6.7" AMOLED</li>
  <li class="mb-2"><i class="bi bi-camera"></i> Cámara 108MP</li>
  <li class="mb-2"><i class="bi bi-battery-charging"></i> Batería 5000mAh</li>
</ul>
```

---

### Paso 10: Añadir los Botones

Finalmente, añade los botones:

```html
<div class="d-grid gap-2">
  <a href="#" class="btn btn-primary">Comprar Ahora</a>
  <a href="#" class="btn btn-outline-primary">Ver Detalles</a>
</div>
```

**¿Qué significan estas clases?**
- `d-grid`: Display grid (para botones apilados)
- `gap-2`: Espacio entre los botones
- `btn`: Clase base para todos los botones
- `btn-primary`: Botón azul sólido
- `btn-outline-primary`: Botón con borde azul y fondo transparente

---

## Mejoras Opcionales

### 1. Hacer que los Botones Estén en Línea (Desktop)

```html
<div class="d-grid gap-2 d-md-flex">
  <a href="#" class="btn btn-primary flex-fill">Comprar Ahora</a>
  <a href="#" class="btn btn-outline-primary flex-fill">Ver Detalles</a>
</div>
```

- `d-md-flex`: En pantallas medianas (tablet/desktop), usa flexbox
- `flex-fill`: Cada botón ocupa el mismo espacio

### 2. Añadir un Hover Effect Personalizado

Añade esto en un `<style>` en el `<head>`:

```css
<style>
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
  }
</style>
```

### 3. Añadir Bootstrap Icons

En el `<head>`, después del Bootstrap CSS:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
```

Luego puedes usar iconos así:
```html
<li class="mb-2"><i class="bi bi-phone text-primary"></i> Pantalla 6.7" AMOLED</li>
```

---

## Errores Comunes y Soluciones

### Error 1: La tarjeta no se centra
**Problema**: Olvidaste añadir las clases de flexbox al contenedor
**Solución**: Asegúrate de tener `d-flex justify-content-center align-items-center` en el contenedor

### Error 2: Los botones no tienen espacio entre ellos
**Problema**: Falta la clase `gap-2`
**Solución**: Añade `gap-2` al div que contiene los botones

### Error 3: La imagen se deforma
**Problema**: La imagen no tiene las proporciones correctas
**Solución**: Usa `card-img-top` y una imagen con ratio 16:9 o similar

### Error 4: Bootstrap no funciona
**Problema**: El link del CDN está mal o no hay internet
**Solución**: Copia exactamente el link del CDN desde la documentación oficial

---

## Checklist Final

Antes de dar el ejercicio por terminado, verifica:

- [ ] La página tiene la estructura HTML5 correcta
- [ ] Bootstrap CSS está importado en el `<head>`
- [ ] Bootstrap JS está importado antes del cierre del `</body>`
- [ ] La tarjeta está centrada en la página
- [ ] La tarjeta tiene imagen, badge, título, precio, descripción y lista
- [ ] Hay dos botones funcionales
- [ ] La tarjeta tiene sombra (`shadow`)
- [ ] Todo el texto es legible y está bien espaciado
- [ ] La página es responsive (prueba en móvil)

---

## Conceptos Aprendidos

En este ejercicio has aprendido:

 **Estructura HTML5 básica**
 **Importar Bootstrap desde CDN**
 **Componente Card** (`card`, `card-img-top`, `card-body`, `card-title`, `card-text`)
 **Badge** para etiquetas
 **Flexbox con Bootstrap** (`d-flex`, `justify-content-center`, `align-items-center`)
 **Sistema de espaciado** (`mb-2`, `mb-3`)
 **Botones** (`btn`, `btn-primary`, `btn-outline-primary`)
 **Grid para botones** (`d-grid`, `gap-2`)
 **Utilidades de color** (`bg-primary`, `text-primary`, `text-muted`)
 **Listas sin estilo** (`list-unstyled`)

---

##  Siguiente Paso

Una vez completes este ejercicio, estarás listo para el **Ejercicio 02**, donde trabajarás con el sistema Grid de Bootstrap para crear un layout con múltiples tarjetas responsive.


