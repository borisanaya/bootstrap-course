# README Detallado: Checkout Example (index.html)


## 1. Estructura General del HTML

- El contenido está envuelto en un `<div class="container">` para centrar y limitar el ancho.
- Se utiliza Bootstrap 5 para el diseño y los componentes visuales.

---

## 2. Cabecera (`<head>`) y Recursos
- **Bootstrap CSS**: Se importa desde CDN (`bootstrap.min.css`). Esto habilita todas las utilidades, componentes y helpers de Bootstrap.
- **Clases Bootstrap en el body**: `bg-light` aplica un fondo gris claro a toda la página.
- **Estilos personalizados**: Se importa `form-validation.css` para ajustes visuales propios.

---

## 3. Estructura Visual Principal y Grid de Bootstrap
- Todo el contenido está dentro de `<div class="container">` (Bootstrap limita el ancho y centra el contenido).
- Se usa `<div class="row g-5">` para crear un grid de dos columnas con separación (`g-5` = gutter de 3rem).
- **Columna derecha**: `<div class="col-md-5 col-lg-4 order-md-last">`:
  - `col-md-5` y `col-lg-4` hacen la columna más angosta en pantallas medianas y grandes.
  - `order-md-last` la coloca a la derecha en escritorio y abajo en móvil.
- **Columna izquierda**: `<div class="col-md-7 col-lg-8">` ocupa el resto del espacio.

---

## 4. Carrito de Compra (Bootstrap List Group y Badge)
- **Título**: `<h4 class="d-flex justify-content-between align-items-center mb-3">` usa utilidades flex para alinear el texto y el badge.
- **Badge**: `<span class="badge bg-primary rounded-pill">3</span>` muestra la cantidad de productos con fondo azul y forma de píldora.
- **Lista de productos**: `<ul class="list-group mb-3">`:
  - Cada producto es un `<li class="list-group-item d-flex justify-content-between lh-sm">`:
    - `list-group-item` aplica el estilo Bootstrap.
    - `d-flex justify-content-between` separa nombre y precio.
    - `lh-sm` reduce el interlineado.
  - Línea de promo: `bg-light text-success` para destacar el descuento.
  - Línea de total: `<strong>` para resaltar el total.
- **Formulario de código promocional**: `<form class="card p-2">`:
  - `card` y `p-2` para fondo y padding.
  - `<div class="input-group">` agrupa el input y el botón en una sola línea.

---

## 5. Formulario de Checkout (Bootstrap Forms)
- **Formulario**: `<form class="needs-validation" novalidate>`:
  - `needs-validation` activa la validación personalizada de Bootstrap.
  - `novalidate` desactiva la validación nativa del navegador para usar la de Bootstrap.
- **Campos**:
  - `<div class="row g-3">` agrupa los campos en una grid con separación vertical.
  - Inputs usan `form-control` para el estilo Bootstrap.
  - Labels usan `form-label`.
  - Selects usan `form-select`.
  - Inputs con icono usan `input-group` y `input-group-text`.
  - Mensajes de error: `<div class="invalid-feedback">` (Bootstrap los muestra cuando el campo es inválido y el formulario tiene la clase `was-validated`).
- **Checkboxes**: `<div class="form-check">` agrupa input y label con el estilo Bootstrap.
- **Sección de pago**:
  - Radios: `<input type="radio" class="form-check-input">` y `<label class="form-check-label">`.
  - Inputs de tarjeta: `form-control` y mensajes de error.
- **Botón de envío**: `<button class="w-100 btn btn-primary btn-lg">`:
  - `w-100` ocupa todo el ancho.
  - `btn btn-primary btn-lg` aplica el estilo Bootstrap azul y tamaño grande.

---

## 6. Validación de Formularios con Bootstrap
- El archivo `form-validation.js` implementa la validación personalizada:
  - Busca todos los formularios con `.needs-validation`.
  - Al enviar, si algún campo no es válido, previene el envío y muestra los mensajes de error agregando la clase `was-validated`.
- Bootstrap muestra automáticamente los mensajes de `<div class="invalid-feedback">` y resalta los campos inválidos.
- Más info: [Validación de formularios en Bootstrap](https://getbootstrap.com/docs/5.0/forms/validation/)

---

## 7. Utilidades Bootstrap Destacadas
- **Espaciado**: `mb-3`, `py-5`, `g-5`, `p-2`, `my-4`, etc. para márgenes y padding.
- **Tipografía**: `lead`, `text-muted`, `text-success`, `fw-bold`, `lh-sm`.
- **Colores**: `bg-light`, `bg-primary`, `text-primary`, `text-success`.
- **Flexbox**: `d-flex`, `justify-content-between`, `align-items-center`.
- **Responsive**: `col-md-*`, `col-lg-*`, `order-md-last`.
- **Componentes**: `list-group`, `badge`, `card`, `input-group`, `form-control`, `form-select`, `form-check`, `btn`.

---

## 8. Footer (Pie de página)
- `<footer class="my-5 pt-5 text-muted text-center text-small">`:
  - `my-5 pt-5` para separación.
  - `text-muted` para color gris.
  - `text-center` y `text-small` para centrar y reducir el texto.
  - Enlaces usan `list-inline` y `list-inline-item` para estar en línea.

---

## 9. Scripts y Recursos
- **Bootstrap JS**: Importado desde CDN para habilitar componentes interactivos.
- **form-validation.js**: Añade validación personalizada al formulario (ver sección 6).

---

## 10. Estilos Personalizados (`form-validation.css`)
- Limita el ancho máximo del contenedor a 960px para una mejor legibilidad:

```css
.container {
  max-width: 960px;
}
```


