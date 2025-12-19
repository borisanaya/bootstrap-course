# Accordion (Acordeón)

## ¿Qué es el Accordion?

El **Accordion** es un componente de Bootstrap que permite mostrar y ocultar contenido de forma vertical mediante paneles colapsables. Es ideal para organizar grandes cantidades de información en un espacio reducido, permitiendo a los usuarios expandir solo las secciones que les interesan.

## Características Principales

- **Colapsable**: Los paneles se pueden expandir y contraer
- **Múltiples items**: Puedes tener varios paneles en un solo acordeón
- **Control de apertura**: Permite abrir múltiples items simultáneamente o solo uno a la vez
- **Responsive**: Se adapta perfectamente a todos los tamaños de pantalla
- **Accesible**: Incluye atributos ARIA para accesibilidad

## Estructura Básica

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseOne" 
              aria-expanded="true" 
              aria-controls="collapseOne">
        Título del panel #1
      </button>
    </h2>
    <div id="collapseOne" 
         class="accordion-collapse collapse show" 
         aria-labelledby="headingOne"
         data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Contenido del panel #1
      </div>
    </div>
  </div>
</div>
```

## Clases Principales

### Contenedor Principal
- **`.accordion`**: Contenedor principal que engloba todos los items

### Items del Accordion
- **`.accordion-item`**: Cada panel individual del acordeón
- **`.accordion-header`**: Encabezado clickeable del panel
- **`.accordion-button`**: Botón que controla la apertura/cierre
- **`.accordion-collapse`**: Contenedor del contenido colapsable
- **`.accordion-body`**: Contenido interno del panel

### Modificadores
- **`.collapse`**: Oculta el contenido por defecto
- **`.show`**: Muestra el panel expandido inicialmente
- **`.collapsed`**: Estado del botón cuando el panel está cerrado

## Atributos Data

- **`data-bs-toggle="collapse"`**: Activa el comportamiento de colapso
- **`data-bs-target="#id"`**: Especifica qué elemento colapsar
- **`data-bs-parent="#accordionId"`**: Permite que solo un panel esté abierto a la vez
- **`aria-expanded`**: Indica si el panel está expandido o no
- **`aria-controls`**: Conecta el botón con el contenido que controla

## Variantes

### 1. Acordeón con un solo item abierto (default)
```html
<div class="accordion" id="accordionExample">
  <!-- Items con data-bs-parent -->
</div>
```

### 2. Acordeón con múltiples items abiertos
```html
<div class="accordion" id="accordionFlush">
  <div class="accordion-item">
    <!-- Omitir data-bs-parent -->
    <div class="accordion-collapse collapse">
      <!-- Contenido -->
    </div>
  </div>
</div>
```

### 3. Accordion Flush (sin bordes)
```html
<div class="accordion accordion-flush" id="accordionFlush">
  <!-- Items del accordion -->
</div>
```

## Casos de Uso Comunes

1. **FAQ (Preguntas Frecuentes)**: Organizar preguntas y respuestas
2. **Documentación**: Secciones de ayuda o tutoriales
3. **Menús de navegación**: Categorías con subcategorías
4. **Formularios largos**: Dividir formularios en pasos
5. **Comparativas**: Mostrar detalles de productos o servicios

## Personalización con CSS

```css
/* Cambiar color del botón activo */
.accordion-button:not(.collapsed) {
  background-color: #0d6efd;
  color: white;
}

/* Añadir transición suave */
.accordion-collapse {
  transition: height 0.4s ease;
}

/* Personalizar bordes */
.accordion-item {
  border-radius: 8px;
  margin-bottom: 10px;
}
```

## JavaScript

### Métodos disponibles
```javascript
// Obtener instancia del accordion
const accordionElement = document.querySelector('#myAccordion');
const accordion = new bootstrap.Collapse(accordionElement);

// Mostrar un panel
accordion.show();

// Ocultar un panel
accordion.hide();

// Alternar estado
accordion.toggle();
```

### Eventos
```javascript
const myCollapse = document.getElementById('collapseOne');
myCollapse.addEventListener('shown.bs.collapse', function () {
  console.log('Panel expandido');
});

myCollapse.addEventListener('hidden.bs.collapse', function () {
  console.log('Panel colapsado');
});
```

## Ejemplos Prácticos

### FAQ Básico
```html
<div class="accordion" id="faqAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" 
              data-bs-toggle="collapse" data-bs-target="#faq1">
        ¿Cómo puedo crear una cuenta?
      </button>
    </h2>
    <div id="faq1" class="accordion-collapse collapse show" 
         data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Para crear una cuenta, haz clic en el botón "Registrarse"...
      </div>
    </div>
  </div>
</div>
```

## Ventajas

✅ **Ahorra espacio**: Muestra mucha información en poco espacio  
✅ **Mejora la experiencia**: Los usuarios ven solo lo que necesitan  
✅ **Fácil de implementar**: No requiere JavaScript personalizado  
✅ **Accesible**: Compatible con lectores de pantalla  
✅ **Responsive**: Funciona en todos los dispositivos  

## Mejores Prácticas

1. **Usa títulos descriptivos**: Cada panel debe tener un título claro
2. **No sobrecargues**: Evita tener demasiados items (max 10-15)
3. **Primer item abierto**: Considera mostrar el primer panel por defecto
4. **Contenido conciso**: Mantén el contenido breve y al punto
5. **Iconos visuales**: Añade iconos para indicar el estado expandido/colapsado

## Recursos

- [Documentación oficial Bootstrap Accordion](https://getbootstrap.com/docs/5.0/components/accordion/)
- Ver ejemplos en: `index.html`
