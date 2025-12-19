# Contenedores y Breakpoints en Bootstrap 5

## ¿Qué son los Breakpoints?

Los **breakpoints** son puntos de quiebre predefinidos en Bootstrap que determinan cuándo el diseño de tu página debe cambiar para adaptarse a diferentes tamaños de pantalla. Son la base del diseño responsive en Bootstrap.

### Breakpoints de Bootstrap 5

| Breakpoint | Clase | Ancho mínimo | Dispositivos típicos |
|------------|-------|--------------|---------------------|
| Extra pequeño | (ninguno) | < 576px | Móviles en vertical |
| Pequeño | `sm` | ≥ 576px | Móviles en horizontal |
| Mediano | `md` | ≥ 768px | Tabletas |
| Grande | `lg` | ≥ 992px | Laptops/Monitores pequeños |
| Extra grande | `xl` | ≥ 1200px | Monitores grandes |
| Extra extra grande | `xxl` | ≥ 1400px | Monitores muy grandes |

### ¿Cómo funcionan?

Los breakpoints funcionan de forma **ascendente** (mobile-first). Esto significa que:

- Una clase sin prefijo o con `sm` se aplica desde ese tamaño hacia arriba
- Puedes combinar clases para diferentes breakpoints
- Si no especificas un breakpoint mayor, el estilo se mantiene

**Ejemplo:**
```html
<div class="col-12 col-md-6 col-lg-4">
  <!-- 12 columnas en móvil (< 768px) -->
  <!-- 6 columnas en tableta (≥ 768px) -->
  <!-- 4 columnas en escritorio (≥ 992px) -->
</div>
```

## ¿Qué son los Contenedores?

Los **contenedores** son el elemento de diseño más básico en Bootstrap y son **requeridos** cuando se usa el sistema de cuadrícula. Envuelven el contenido y ayudan a alinear y espaciar el contenido dentro de la ventana del navegador.

### Tipos de Contenedores

#### 1. `.container`
- Contenedor con ancho fijo que cambia en cada breakpoint
- Tiene márgenes automáticos (centrado)
- Es el más común para páginas con diseño limitado

```html
<div class="container">
  <!-- Tu contenido aquí -->
</div>
```

**Anchos máximos:**
- < 576px: 100%
- ≥ 576px: 540px
- ≥ 768px: 720px
- ≥ 992px: 960px
- ≥ 1200px: 1140px
- ≥ 1400px: 1320px

#### 2. `.container-fluid`
- Siempre ocupa el 100% del ancho disponible
- No tiene anchos máximos
- Ideal para diseños de ancho completo

```html
<div class="container-fluid">
  <!-- Contenido a ancho completo -->
</div>
```

#### 3. Contenedores Responsive (`.container-{breakpoint}`)
- Son 100% anchos hasta alcanzar el breakpoint especificado
- Después del breakpoint, se comportan como `.container`

```html
<!-- 100% ancho hasta 768px, luego ancho fijo -->
<div class="container-md">
  <!-- Tu contenido -->
</div>
```

**Opciones disponibles:**
- `.container-sm` → Fijo desde 576px
- `.container-md` → Fijo desde 768px
- `.container-lg` → Fijo desde 992px
- `.container-xl` → Fijo desde 1200px
- `.container-xxl` → Fijo desde 1400px

## ¿Cómo se usan?

### Uso Básico

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  
  <!-- Contenedor básico -->
  <div class="container">
    <h1>Mi Título</h1>
    <p>Mi contenido</p>
  </div>

</body>
</html>
```

### Eligiendo el Contenedor Adecuado

#### Usa `.container` cuando:
- Quieres un diseño centrado con anchos máximos controlados
- Necesitas márgenes laterales en pantallas grandes
- Es un sitio web tradicional (blog, portafolio, página corporativa)

#### Usa `.container-fluid` cuando:
- Quieres que el contenido ocupe todo el ancho disponible
- Diseñas aplicaciones web o dashboards
- Necesitas máximo espacio para el contenido

#### Usa `.container-{breakpoint}` cuando:
- Quieres ancho completo en móviles pero limitado en escritorio
- Necesitas un balance entre diseño fluido y controlado
- Ejemplo: `.container-md` para móviles a ancho completo pero tabletas en adelante con ancho fijo

### Ejemplos Prácticos

#### Ejemplo 1: Página tradicional
```html
<div class="container">
  <header>
    <h1>Mi Blog</h1>
  </header>
  <main>
    <article>
      <h2>Título del Artículo</h2>
      <p>Contenido del artículo...</p>
    </article>
  </main>
</div>
```

#### Ejemplo 2: Dashboard a ancho completo
```html
<div class="container-fluid">
  <div class="row">
    <div class="col-md-2">
      <!-- Sidebar -->
    </div>
    <div class="col-md-10">
      <!-- Contenido principal -->
    </div>
  </div>
</div>
```

#### Ejemplo 3: Responsive moderno
```html
<!-- Ancho completo en móvil, fijo desde tablet -->
<div class="container-md">
  <nav>...</nav>
  <section>...</section>
  <footer>...</footer>
</div>
```

### Combinando con el Sistema de Cuadrícula

Los contenedores trabajan junto con filas (`.row`) y columnas (`.col-*`):

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      Columna 1
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      Columna 2
    </div>
    <div class="col-12 col-md-12 col-lg-4">
      Columna 3
    </div>
  </div>
</div>
```

En este ejemplo:
- **Móvil (< 768px):** 3 columnas apiladas verticalmente (cada una 100% de ancho)
- **Tablet (≥ 768px):** 2 columnas en la primera fila, 1 columna completa en la segunda
- **Escritorio (≥ 992px):** 3 columnas iguales en una sola fila

## Mejores Prácticas

1. **Siempre usa un contenedor** antes de usar `.row` y `.col-*`
2. **Mobile-first:** Diseña primero para móviles, luego añade breakpoints mayores
3. **No anides contenedores** dentro de otros contenedores directamente
4. **Usa padding en lugar de margin** dentro de los contenedores
5. **Prueba en diferentes tamaños** usando las herramientas de desarrollo del navegador (F12 → Responsive mode)

## Recursos Adicionales

- [Documentación oficial de Bootstrap 5 - Breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/)
- [Documentación oficial de Bootstrap 5 - Containers](https://getbootstrap.com/docs/5.0/layout/containers/)
- [Sistema de Cuadrícula de Bootstrap](https://getbootstrap.com/docs/5.0/layout/grid/)
