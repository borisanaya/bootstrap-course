# README: Pricing Example (index.html)

Este documento explica en detalle cómo está construido el archivo `index.html` de la carpeta `10-pricing-ex`, paso a paso, para que puedas entender y modificar fácilmente su estructura y funcionalidad.

## 1. Estructura General
- El archivo utiliza **Bootstrap 5** para el diseño y los componentes visuales.
- Incluye una hoja de estilos personalizada `pricing.css` para ajustes específicos.
- El contenido está organizado en **container**, con las secciones: header, main y footer.

## 2. Cabecera (`<head>`) y Recursos
- Se define el `doctype` y el idioma (`lang="en"`).
- Se incluyen los metadatos básicos (charset, viewport, descripción, autor).
- Se importa Bootstrap 5 desde CDN para estilos y scripts.
- Se añade un bloque `<style>` para estilos rápidos y una referencia a `pricing.css` para estilos personalizados.

## 3. SVG de Utilidad
- Se define un símbolo SVG oculto (`#check`) que se reutiliza como icono de "check" en la tabla de comparación de planes.

## 4. Contenedor Principal
- Todo el contenido está dentro de `<div class="container py-3">` para centrar y dar padding.

## 5. Header
- Incluye:
  - **Logo SVG** y título "Pricing example".
  - **Barra de navegación** con enlaces ficticios (Features, Enterprise, Support, Pricing).
  - **Encabezado de precios**: título grande y descripción introductoria.

## 6. Main: Tabla de Precios
- Sección principal con dos partes:

### a) Tarjetas de Precios
- Tres columnas (`row row-cols-1 row-cols-md-3`): Free, Pro, Enterprise.
- Cada columna es una **card** de Bootstrap:
  - Título del plan.
  - Precio destacado.
  - Lista de características.
  - Botón de acción (diferente color según el plan).
  - El plan "Enterprise" tiene estilos destacados (borde y fondo azul).

### b) Tabla Comparativa de Planes
- Título: "Compare plans".
- Tabla responsiva con `<table class="table text-center">`.
- Filas comparan características entre los planes (Public, Private, Permissions, Sharing, Unlimited members, Extra security).
- Se usan los iconos SVG de check para indicar disponibilidad de cada característica.

## 7. Footer
- Pie de página dividido en tres columnas:
  - **Features**: lista de enlaces ficticios a características.
  - **Resources**: enlaces a recursos.
  - **About**: enlaces sobre la empresa/equipo.
- Todo con clases Bootstrap para diseño responsivo y limpio.

## 8. Scripts
- Al final del body, se importa el bundle JS de Bootstrap desde CDN para habilitar componentes interactivos.

## 9. Personalización
- Los estilos adicionales se encuentran en `pricing.css` (no detallado aquí, pero puedes editarlo para cambiar colores, márgenes, etc).

## 10. ¿Cómo modificar?
- Cambia los textos de los planes o los precios editando las cards en el `<main>`.
- Agrega o quita características en las listas `<ul>` o en la tabla comparativa.
- Personaliza colores y estilos en `pricing.css`.
- Puedes agregar enlaces reales en la barra de navegación y el footer.
