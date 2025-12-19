## Conceptos Básicos

### ¿Qué es un Container?

Un **container** es una caja que envuelve tu contenido y lo centra en la página.

**Tipos:**
- `.container` - Tiene un ancho máximo y está centrado
- `.container-fluid` - Ocupa el 100% del ancho disponible
- `.container-md` - Ancho completo en móviles, fijo desde tablets

**Ejemplo:**
```html
<div class="container">
  Tu contenido aquí
</div>
```

---

### ¿Qué es un Breakpoint?

Un **breakpoint** es un punto en el que el diseño cambia según el tamaño de la pantalla.

**Breakpoints de Bootstrap:**
- Sin prefijo - Móviles (< 576px)
- `sm` - Tablets pequeñas (≥ 576px)
- `md` - Tablets (≥ 768px)
- `lg` - Escritorio (≥ 992px)
- `xl` - Pantallas grandes (≥ 1200px)
- `xxl` - Pantallas muy grandes (≥ 1400px)

**Ejemplo:**
```html
<div class="col-12 col-md-6">
  <!-- 100% en móvil, 50% en tablet -->
</div>
```

---

### ¿Qué es un Grid (Cuadrícula)?

El **grid** es un sistema de diseño que divide la página en **12 columnas** para organizar el contenido.

**Estructura básica:**
```html
<div class="container">
  <div class="row">
    <div class="col">Columna</div>
  </div>
</div>
```

---

### ¿Qué es un Row (Fila)?

Un **row** es una fila que agrupa columnas horizontalmente.

- Siempre se usa dentro de un container
- Usa la clase `.row`
- Puede contener múltiples columnas

**Ejemplo:**
```html
<div class="row">
  <div class="col">Columna 1</div>
  <div class="col">Columna 2</div>
</div>
```

---

### ¿Qué es un Col (Columna)?

Una **col** es una columna donde va tu contenido.

**Sistema de 12 columnas:**
- `.col-12` = 100% de ancho (12 de 12)
- `.col-6` = 50% de ancho (6 de 12)
- `.col-4` = 33.33% de ancho (4 de 12)
- `.col-3` = 25% de ancho (3 de 12)

**Ejemplo:**
```html
<div class="row">
  <div class="col-6">50%</div>
  <div class="col-6">50%</div>
</div>
```

---

## Archivos de Ejemplo

### Ejemplos de Containers (lee index-01.md)
- `index-01-ejemplo-01.html` - Container básico (.container)
- `index-01-ejemplo-02.html` - Container fluido (.container-fluid)
- `index-01-ejemplo-03.html` - Container responsive (.container-md)

### Ejemplos de Grid (lee index-02.md)
- `index-02-ejemplo-01.html` - Dos columnas iguales (.col-6)
- `index-02-ejemplo-02.html` - Tres columnas iguales (.col-4)
- `index-02-ejemplo-03.html` - Sidebar + Contenido (.col-3 + .col-9)
- `index-02-ejemplo-04.html` - Columnas responsive (col-12 col-md-6 col-lg-3)
- `index-02-ejemplo-05.html` - Grid anidado (grid dentro de grid)
- `index-02-ejemplo-06.html` - Múltiples grids
---

## Cómo usar estos ejemplos

1. Abre cualquier archivo `.html` en tu navegador
2. Observa cómo se ven las columnas con diferentes colores
3. Cambia el tamaño de la ventana para ver el comportamiento responsive
4. Lee los archivos `.md` para más información detallada

---

## Reglas Importantes

1. **Siempre usa un container** antes de crear filas y columnas
2. **Las columnas van dentro de rows** (filas)
3. **Máximo 12 columnas por fila** (si sumas más, se van a la siguiente línea)
4. **Mobile-first:** Define primero para móviles, luego para pantallas más grandes

---

## Recursos Adicionales

- [Documentación oficial de Bootstrap 5](https://getbootstrap.com/docs/5.0/)
- [Grid System](https://getbootstrap.com/docs/5.0/layout/grid/)
- [Breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/)
- [Containers](https://getbootstrap.com/docs/5.0/layout/containers/)

