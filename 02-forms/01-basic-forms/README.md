# Formularios en Bootstrap 5

Este repositorio contiene ejemplos prácticos de cómo crear y estructurar formularios utilizando Bootstrap 5.0.2.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Requisitos](#requisitos)
- [Ejemplos Incluidos](#ejemplos-incluidos)
- [Clases Principales](#clases-principales)
- [Estructura Básica](#estructura-básica)
- [Ejemplos Detallados](#ejemplos-detallados)

## Introducción

Bootstrap proporciona un conjunto completo de clases CSS para crear formularios responsivos y estilizados de manera consistente. Los ejemplos en este proyecto demuestran diferentes patrones de diseño de formularios comúnmente utilizados.

## Requisitos

Todos los ejemplos utilizan Bootstrap 5.0.2 mediante CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

## Ejemplos Incluidos

### 1. [index-01.html](index-01.html) - Formulario Básico con Labels

Demuestra la estructura más simple de un formulario con:
- Inputs de texto con etiquetas (`label`)
- Clase `form-control` para estilizar inputs
- Clase `form-label` para las etiquetas
- Espaciado con clase `mb-3` (margin-bottom)

### 2. [index-02.html](index-02.html) - Formulario con Grid System

Muestra cómo utilizar el sistema de grid de Bootstrap para formularios:
- Layout de dos columnas usando `row` y `col`
- Espaciado entre elementos con `g-3` (gutter)
- Campos sin etiquetas pero con placeholders y atributos `aria-label`

### 3. [index-03.html](index-03.html) - Formulario Complejo en Grid

Ejemplo de formulario completo con múltiples tipos de campos:
- Sistema de grid responsive (`col-md-6`, `col-md-4`, `col-12`)
- Diferentes tipos de inputs (email, password, text)
- Select/dropdown con clase `form-select`
- Checkbox con clases `form-check` y `form-check-input`
- Botón de submit estilizado

### 4. [index-04.html](index-04.html) - Formulario Horizontal

Formulario con layout horizontal (etiquetas a la izquierda):
- Clase `col-form-label` para alinear etiquetas con inputs
- Radio buttons con `form-check-input` tipo radio
- Uso de `fieldset` y `legend` para agrupar opciones
- Checkbox con `offset-sm-2` para alineación
- Estados deshabilitados en radio buttons

## Clases Principales

### Para Contenedores de Formulario

- **`mb-3`**: Añade margen inferior (margin-bottom) de 1rem
- **`row`**: Crea una fila del sistema grid
- **`col`**: Crea una columna de ancho automático
- **`col-{breakpoint}-{number}`**: Columna responsive (ej: `col-md-6`, `col-sm-10`)
- **`g-3`**: Añade espacio (gutter) entre columnas y filas

### Para Inputs y Labels

- **`form-control`**: Clase principal para inputs de texto, email, password, etc.
- **`form-label`**: Estiliza las etiquetas de formulario
- **`col-form-label`**: Etiqueta para formularios horizontales (alineada verticalmente)
- **`form-select`**: Estiliza elementos `<select>` (dropdowns)

### Para Checkboxes y Radio Buttons

- **`form-check`**: Contenedor para checkbox/radio
- **`form-check-input`**: Estiliza el input checkbox/radio
- **`form-check-label`**: Etiqueta asociada al checkbox/radio

### Para Botones

- **`btn`**: Clase base para botones
- **`btn-primary`**: Botón con color primario (azul por defecto)

## Estructura Básica

### Formulario Simple

```html
<div class="mb-3">
  <label for="inputId" class="form-label">Etiqueta</label>
  <input type="text" class="form-control" id="inputId" placeholder="Texto de ejemplo">
</div>
```

### Formulario con Grid (2 columnas)

```html
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="Primera columna">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Segunda columna">
  </div>
</div>
```

### Checkbox

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="checkboxId">
  <label class="form-check-label" for="checkboxId">
    Texto del checkbox
  </label>
</div>
```

### Radio Button

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="groupName" id="radioId" value="option1">
  <label class="form-check-label" for="radioId">
    Opción 1
  </label>
</div>
```

### Select/Dropdown

```html
<label for="selectId" class="form-label">Selecciona una opción</label>
<select id="selectId" class="form-select">
  <option selected>Elige...</option>
  <option value="1">Opción 1</option>
  <option value="2">Opción 2</option>
</select>
```

## Ejemplos Detallados

### Formulario con Sistema de Grid Responsive

El ejemplo en [index-03.html](index-03.html) muestra un formulario completo con diseño responsive:

```html
<form class="row g-3">
  <div class="col-md-6">
    <!-- Campo de Email ocupa 6 columnas en pantallas medianas -->
  </div>
  <div class="col-md-6">
    <!-- Campo de Password ocupa 6 columnas en pantallas medianas -->
  </div>
  <div class="col-12">
    <!-- Campo de dirección ocupa 12 columnas (ancho completo) -->
  </div>
  <div class="col-md-6">
    <!-- Ciudad: 6 columnas en medianas -->
  </div>
  <div class="col-md-4">
    <!-- Estado: 4 columnas en medianas -->
  </div>
  <div class="col-md-2">
    <!-- Código postal: 2 columnas en medianas -->
  </div>
</form>
```

### Formulario Horizontal

El ejemplo en [index-04.html](index-04.html) demuestra un layout horizontal donde las etiquetas están a la izquierda:

```html
<div class="row mb-3">
  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control" id="inputEmail3">
  </div>
</div>
```

Esta estructura divide cada fila del formulario en:
- 2 columnas para la etiqueta (`col-sm-2`)
- 10 columnas para el input (`col-sm-10`)

## Mejores Prácticas

1. **Siempre usa `id` único** para asociar labels con inputs mediante el atributo `for`
2. **Usa `aria-label`** cuando no haya label visible para mejorar accesibilidad
3. **Aplica `form-control`** a todos los inputs de texto, email, password, etc.
4. **Usa el sistema grid** (`row` y `col-*`) para layouts complejos
5. **Añade espaciado** con clases de utilidad como `mb-3`, `g-3`
6. **Agrupa radio buttons** con el mismo atributo `name`
7. **Usa `form-select`** para elementos `<select>`, no `form-control`
8. **Emplea `fieldset` y `legend`** para agrupar elementos relacionados

## Responsive Design

Bootstrap incluye breakpoints para diferentes tamaños de pantalla:

- **`col-sm-*`**: Small devices (≥576px)
- **`col-md-*`**: Medium devices (≥768px)
- **`col-lg-*`**: Large devices (≥992px)
- **`col-xl-*`**: Extra large devices (≥1200px)

Ejemplo: `col-md-6` significa que en pantallas medianas y superiores, el elemento ocupará 6 de las 12 columnas disponibles (50%).

## Recursos Adicionales

- [Documentación oficial de Bootstrap Forms](https://getbootstrap.com/docs/5.0/forms/overview/)
- [Bootstrap Grid System](https://getbootstrap.com/docs/5.0/layout/grid/)
- [Bootstrap Utilities](https://getbootstrap.com/docs/5.0/utilities/spacing/)

---

**Versión de Bootstrap utilizada:** 5.0.2
