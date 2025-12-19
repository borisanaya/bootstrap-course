# Curso de Componentes Bootstrap 5

Este repositorio trata de explicar y poner en practica el uso de los principales componentes de Bootstrap 5, desde lo más básico hasta ejemplos prácticos y ejercicios de aplicación. A continuación se detalla la estructura y el contenido de cada carpeta.

### Estructura de Aprendizaje Recomendada

1. **Fundamentos (01-02)**: Comienza con layout y forms para entender la base
2. **Componentes Básicos (03-12)**: Explora cada componente individualmente con html incluidos, entra en README para comprender el funcionamiento del ejemplo html propuesto. Verás que algunos README contienen muchísima información, pero con las primeras secciones tendrás suficiente para entender el ejemplo html propuesto.
3. **Práctica Nivel 1 (13-exercices-1)**: Resuelve los 5 ejercicios básicos para afianzar conceptos
4. **Práctica Nivel 2 (14-exercises-2)**: Avanza con ejercicios que integran múltiples componentes
5. **Ejemplos Reales (15-more-examples)**: Estudia implementaciones completas de proyectos reales

---

## Parte 1: Fundamentos (01-02).

En esta parte se verán el sistema  de diseño y los formularios. Cada carpeta contiene ejercicios y sus soluciones, realiza los ejercicios sin ver las soluciones, en la medida de lo posible. Pregunta en el foro si hay algo que no entiendes.

### 01-layout: Sistema de Layout
Introducción al sistema de diseño de Bootstrap 5:
- Plantilla inicial (starter template)
- Breakpoints, contenedores y sistema de grid
- Ejercicios prácticos de diseño responsivo

Incluye ejemplos demostrativos y ejercicios con soluciones.

### 02-forms: Formularios
Construcción y estilizado de formularios con Bootstrap:
- Formularios básicos (inputs, selects, checkboxes, radios)
- Validación de formularios (client-side y HTML5)
- Ejemplo de formulario de inicio de sesión completo

Incluye ejercicios de validación en tiempo real y estilos personalizados.

## Parte 2: Componentes Básicos (03-12).

En esta parte se muestran los componentes más usados de bootstrap.

### ¿Qué es un componente de Bootstrap?

Un **componente de Bootstrap** es un bloque predefinido de código HTML, CSS y, en algunos casos, JavaScript que forma parte del framework **Bootstrap**. Estos componentes están diseñados para facilitar la creación de interfaces web modernas y responsivas sin tener que escribir todo desde cero.

### Uso de las carpetas de esta parte:

Todas las carpetas contienen uno o varios html con ejemplo de uso, este html es suficiente para entender el componente. Además se incluye un **readme** con una explicación muy detallada del componente. Normalmente, con las primeras secciones del readme, tendrás suficiente para comprender el funcionamiento del ejemplo html.

### 03-accordion: Acordeón
Componente para mostrar/ocultar contenido de forma interactiva:
- Estructura básica del acordeón
- Variantes: siempre abierto, con flush
- Uso con JavaScript para control programático

Incluye README con ejemplos, casos de uso y mejores prácticas.

### 04-alerts: Alertas
Mensajes informativos y alertas contextuales:
- Alertas con diferentes niveles (success, danger, warning, info)
- Alertas con contenido HTML y enlaces
- Alertas dismissibles (con botón de cierre)

Incluye README con ejemplos de uso y accesibilidad.

### 05-buttons-buttom-group: Botones y Grupos
Botones y agrupaciones de botones:
- Botones con diferentes estilos y tamaños
- Button groups (horizontal y vertical)
- Botones con estados (active, disabled)

Incluye README con variantes, tamaños y casos de uso.

### 06-card: Tarjetas
Componente versátil para mostrar contenido agrupado:
- Estructura de cards (header, body, footer)
- Cards con imágenes, listas y navegación
- Grid de cards y cards horizontales

Incluye README con ejemplos de diseño y personalización.

### 07-list-group: Listas Agrupadas
Listas estilizadas para mostrar contenido estructurado:
- Listas básicas y con badges
- Listas interactivas (clickeable)
- Listas con contenido personalizado

Incluye README con casos de uso y variantes.

### 08-modals: Ventanas Modales
Diálogos y ventanas emergentes:
- Modales básicos con header, body y footer
- Tamaños de modales (small, large, extra-large)
- Modales con formularios y scroll interno

Incluye README y ejemplos con validación de formularios.

### 09-navs-tabs: Navegación y Pestañas
Componentes de navegación por pestañas:
- Tabs (pestañas horizontales)
- Pills (navegación con estilo de píldora)
- Navegación vertical

Incluye README con ejemplos de integración con contenido dinámico.

### 10-navbar: Barra de Navegación
Barra de navegación responsiva y personalizable:
- Navbar con logo, enlaces y dropdown
- Navbar responsiva con collapse
- Variantes de color y posicionamiento

Incluye README con mejores prácticas de navegación.

### 11-offcanvas: Panel Lateral
Panel lateral deslizante para menús y contenido:
- Offcanvas en diferentes posiciones (start, end, top, bottom)
- Offcanvas con navegación
- Integración con navbar

Incluye README con ejemplos de uso y casos prácticos.

### 12-toast: Notificaciones Toast
Notificaciones ligeras y no intrusivas:
- Toasts básicos con título y mensaje
- Posicionamiento de toasts
- Control programático con JavaScript

Incluye README con casos de uso y personalización.

## Parte 3: Práctica Nivel 1.

### Uso de las carpetas de las partes 3 y 4:

Todas las carpetas  **readme** con el enunciado del ejercicio y un tutorial paso a paso para realizarlo. Sigue el tutorial. Se incluye también la solución para que puedas ver que es lo que pide el ejercicio.

### 13-exercices-1: Ejercicios Prácticos (Nivel 1)
Carpeta con cinco ejercicios incrementales para practicar los componentes básicos:

1. **Ejercicio 1: Tarjeta de Producto** - Card con imagen, descripción y botón
2. **Ejercicio 2: Lista de Tareas** - List group interactivo con badges
3. **Ejercicio 3: Formulario de Contacto** - Form con validación
4. **Ejercicio 4: Galería con Modal** - Grid de imágenes que abren en modal
5. **Ejercicio 5: Landing Page Simple** - Página completa con navbar, cards y footer

Cada ejercicio incluye:
- `readme-ejercicio-0X.md`: Enunciado detallado con tutorial paso a paso
- `ejercicio-0X.html`: Solución completa y funcional

## Parte 4: Práctica Nivel 2.

### 14-exercises-2: Ejercicios Prácticos (Nivel 2)
Carpeta con cinco ejercicios avanzados que integran múltiples componentes:

1. **Ejercicio 6: Dashboard de Estadísticas** - Navbar con dropdown, cards de estadísticas, list group de actividades y tabla de productos
2. **Ejercicio 7: Gestor de Tareas con Modales** - Lista de tareas con modal de confirmación para eliminar y modal para agregar, toasts de notificación
3. **Ejercicio 8: Tienda con Filtros** - Navbar con carrito, tabs para categorías, grid de productos, offcanvas para filtros avanzados
4. **Ejercicio 9: Página de Soporte** - Alertas contextuales, accordion con FAQ, formulario de contacto
5. **Ejercicio 10: EventHub - App Completa** - Proyecto final integrando todos los componentes: navbar con dropdown y notificaciones, offcanvas, hero section, tabs de categorías, grid de eventos, modal con tabs internos, toasts de confirmación y footer

Cada ejercicio incluye:
- `readme-ejercicio-0X.md`: Enunciado con requisitos y tutorial detallado
- `ejercicio-0X.html`: Solución completa con JavaScript funcional

## Parte 5: Ejemplos Reales.

### 15-more-examples: Ejemplos Adicionales
Ejemplos completos extraídos de la documentación oficial de Bootstrap:

- **01-pricing-example**: Página de precios con planes y comparación de características
- **02-checkout-example**: Formulario de checkout con validación y resumen de compra

Cada ejemplo incluye HTML, CSS personalizado y README explicativo.

---
**Nota 1:** Contenidos adpatados para el módulo de DIW del CFGS DAW.  
**Nota 2:** Los ejemplos y ejercicios de este curso están inspirados y adaptados de la documentación oficial de Bootstrap 5: [https://getbootstrap.com/docs/5.0/](https://getbootstrap.com/docs/5.0/)
