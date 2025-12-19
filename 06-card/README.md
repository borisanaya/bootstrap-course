# Cards (Tarjetas)

## ¿Qué son las Cards?

Las **Cards** son contenedores flexibles y extensibles que sirven como elemento fundamental para mostrar contenido en Bootstrap. Son uno de los componentes más versátiles y utilizados, perfectos para organizar información de manera visual y estructurada.

## Características Principales

- **Flexibles**: Pueden contener cualquier tipo de contenido
- **Modulares**: Múltiples secciones (header, body, footer, imagen)
- **Responsive**: Se adaptan perfectamente a cualquier tamaño de pantalla
- **Personalizables**: Fáciles de estilizar con clases de Bootstrap
- **Variantes**: Diferentes estilos y colores disponibles

## Estructura Básica

```html
<div class="card">
  <img src="imagen.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Contenido de la tarjeta.</p>
    <a href="#" class="btn btn-primary">Ver más</a>
  </div>
</div>
```

## Componentes de una Card

### 1. Card Header (Encabezado)
```html
<div class="card">
  <div class="card-header">
    Encabezado
  </div>
  <div class="card-body">
    Contenido
  </div>
</div>
```

### 2. Card Body (Cuerpo)
```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <h6 class="card-subtitle mb-2 text-muted">Subtítulo</h6>
    <p class="card-text">Texto principal del contenido.</p>
    <a href="#" class="card-link">Enlace 1</a>
    <a href="#" class="card-link">Enlace 2</a>
  </div>
</div>
```

### 3. Card Footer (Pie)
```html
<div class="card">
  <div class="card-body">
    Contenido
  </div>
  <div class="card-footer text-muted">
    Hace 2 días
  </div>
</div>
```

### 4. Card con Imagen
```html
<!-- Imagen arriba -->
<div class="card">
  <img src="imagen.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Contenido</p>
  </div>
</div>

<!-- Imagen abajo -->
<div class="card">
  <div class="card-body">
    <p class="card-text">Contenido</p>
  </div>
  <img src="imagen.jpg" class="card-img-bottom" alt="...">
</div>
```

## Clases Principales

### Contenedor Principal
- **`.card`**: Clase base del contenedor

### Secciones de la Card
- **`.card-header`**: Encabezado de la tarjeta
- **`.card-body`**: Cuerpo principal (padding automático)
- **`.card-footer`**: Pie de la tarjeta
- **`.card-img-top`**: Imagen en la parte superior
- **`.card-img-bottom`**: Imagen en la parte inferior
- **`.card-img-overlay`**: Contenido superpuesto sobre la imagen

### Elementos de Texto
- **`.card-title`**: Título principal
- **`.card-subtitle`**: Subtítulo
- **`.card-text`**: Texto del contenido
- **`.card-link`**: Enlaces dentro de la card

## Variantes de Color

### Con Backgrounds Contextuales
```html
<div class="card text-white bg-primary mb-3">
  <div class="card-body">
    <h5 class="card-title">Card Primary</h5>
    <p class="card-text">Contenido con fondo azul.</p>
  </div>
</div>

<div class="card text-white bg-success mb-3">
  <div class="card-body">
    <h5 class="card-title">Card Success</h5>
    <p class="card-text">Contenido con fondo verde.</p>
  </div>
</div>

<div class="card text-white bg-danger mb-3">
  <div class="card-body">
    <h5 class="card-title">Card Danger</h5>
    <p class="card-text">Contenido con fondo rojo.</p>
  </div>
</div>
```

### Con Bordes Contextuales
```html
<div class="card border-primary mb-3">
  <div class="card-body text-primary">
    <h5 class="card-title">Card con borde primary</h5>
    <p class="card-text">Solo el borde es de color.</p>
  </div>
</div>
```

## Image Overlays (Texto sobre imagen)

```html
<div class="card text-white">
  <img src="imagen.jpg" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Título sobre imagen</h5>
    <p class="card-text">Texto superpuesto sobre la imagen.</p>
    <p class="card-text">Última actualización hace 3 mins</p>
  </div>
</div>
```

## Cards Horizontales

```html
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="imagen.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card Horizontal</h5>
        <p class="card-text">Contenido al lado de la imagen.</p>
        <p class="card-text"><small class="text-muted">Hace 3 mins</small></p>
      </div>
    </div>
  </div>
</div>
```

## Listas dentro de Cards

```html
<div class="card">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
    <li class="list-group-item">Item 3</li>
  </ul>
</div>

<!-- Card completa con lista -->
<div class="card">
  <div class="card-header">
    Características
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Característica 1</li>
    <li class="list-group-item">Característica 2</li>
    <li class="list-group-item">Característica 3</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Ver más</a>
  </div>
</div>
```

## Card Groups

Agrupa múltiples cards como un solo elemento:

```html
<div class="card-group">
  <div class="card">
    <img src="imagen1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card 1</h5>
      <p class="card-text">Contenido de la primera card.</p>
    </div>
  </div>
  <div class="card">
    <img src="imagen2.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card 2</h5>
      <p class="card-text">Contenido de la segunda card.</p>
    </div>
  </div>
  <div class="card">
    <img src="imagen3.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card 3</h5>
      <p class="card-text">Contenido de la tercera card.</p>
    </div>
  </div>
</div>
```

## Grid de Cards

Usando el sistema grid de Bootstrap:

```html
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="imagen.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card 1</h5>
        <p class="card-text">Contenido.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="imagen.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card 2</h5>
        <p class="card-text">Contenido.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="imagen.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card 3</h5>
        <p class="card-text">Contenido.</p>
      </div>
    </div>
  </div>
</div>
```

## Tamaño y Ancho

```html
<!-- Ancho fijo -->
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card de 18rem</h5>
    <p class="card-text">Contenido con ancho fijo.</p>
  </div>
</div>

<!-- Con clases de ancho de Bootstrap -->
<div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">Card 75% ancho</h5>
  </div>
</div>

<div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Card 50% ancho</h5>
  </div>
</div>
```

## Casos de Uso Comunes

1. **Galería de productos**: Mostrar productos en un e-commerce
2. **Portfolio**: Proyectos o trabajos realizados
3. **Blog posts**: Vista previa de artículos
4. **Perfiles de usuario**: Información de usuarios o equipos
5. **Características de producto**: Destacar funcionalidades
6. **Pricing tables**: Planes de precios
7. **Dashboard widgets**: Métricas y estadísticas

## Personalización con CSS

```css
/* Card con sombra al hover */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Card con borde superior colorido */
.card-accent {
  border-top: 4px solid #0d6efd;
}

/* Card con gradiente */
.card-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

/* Altura uniforme en grids */
.card {
  height: 100%;
}

/* Imagen con aspect ratio */
.card-img-top {
  height: 200px;
  object-fit: cover;
}
```

## Ejemplos Avanzados

### Card de Producto
```html
<div class="card" style="width: 18rem;">
  <span class="badge bg-danger position-absolute top-0 end-0 m-3">-20%</span>
  <img src="producto.jpg" class="card-img-top" alt="Producto">
  <div class="card-body">
    <h5 class="card-title">Producto XYZ</h5>
    <p class="card-text text-muted">Categoría: Electrónica</p>
    <div class="d-flex justify-content-between align-items-center">
      <span class="h4 mb-0">€99.99</span>
      <button class="btn btn-primary">
        <i class="bi bi-cart"></i> Añadir
      </button>
    </div>
  </div>
</div>
```

### Card de Perfil
```html
<div class="card text-center" style="width: 18rem;">
  <div class="card-body">
    <img src="avatar.jpg" class="rounded-circle mb-3" width="100" alt="Avatar">
    <h5 class="card-title">Juan Pérez</h5>
    <p class="card-text text-muted">Desarrollador Web</p>
    <p class="card-text">
      <small>Madrid, España</small>
    </p>
    <div class="d-flex justify-content-around mt-3">
      <div>
        <strong>1.2K</strong>
        <p class="text-muted mb-0">Seguidores</p>
      </div>
      <div>
        <strong>842</strong>
        <p class="text-muted mb-0">Siguiendo</p>
      </div>
    </div>
    <button class="btn btn-primary w-100 mt-3">Seguir</button>
  </div>
</div>
```

### Card con Estadística
```html
<div class="card">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h6 class="text-muted mb-2">Ventas Totales</h6>
        <h2 class="mb-0">€12,345</h2>
        <small class="text-success">
          <i class="bi bi-arrow-up"></i> 12% vs mes anterior
        </small>
      </div>
      <div class="text-primary">
        <i class="bi bi-graph-up" style="font-size: 3rem;"></i>
      </div>
    </div>
  </div>
</div>
```

## Mejores Prácticas

1. **Contenido consistente**: Mantén la misma estructura en cards similares
2. **Imágenes optimizadas**: Usa imágenes del mismo tamaño/ratio
3. **Altura uniforme**: Usa `h-100` en cards dentro de un grid
4. **Espaciado apropiado**: Usa margins y paddings consistentes
5. **Acciones claras**: Botones bien identificados
6. **Responsive design**: Ajusta columnas según el dispositivo
7. **No sobrecargues**: Mantén el contenido conciso y relevante

## Accesibilidad

```html
<!-- Usa roles semánticos cuando sea apropiado -->
<article class="card">
  <img src="..." class="card-img-top" alt="Descripción de la imagen">
  <div class="card-body">
    <h2 class="card-title">Título del artículo</h2>
    <p class="card-text">Contenido...</p>
  </div>
</article>
```

## Ventajas

✅ **Versatilidad**: Sirven para múltiples propósitos  
✅ **Organización**: Estructuran el contenido de forma clara  
✅ **Responsive**: Se adaptan a cualquier dispositivo  
✅ **Modular**: Fácil de combinar diferentes elementos  
✅ **Estético**: Diseño limpio y profesional  

## Recursos

- [Documentación oficial Bootstrap Cards](https://getbootstrap.com/docs/5.0/components/card/)
- Ver ejemplos en: `index.html`
