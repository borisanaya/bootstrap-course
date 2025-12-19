# Alerts (Alertas)

## ¿Qué son los Alerts?

Los **Alerts** son componentes de Bootstrap diseñados para proporcionar mensajes de retroalimentación contextual a los usuarios. Son perfectos para mostrar mensajes de éxito, advertencias, errores o información importante de manera visible y clara.

## Características Principales

- **8 variantes contextuales**: Diferentes colores según el tipo de mensaje
- **Contenido flexible**: Puede incluir texto, enlaces, iconos y botones
- **Desechables**: Pueden incluir un botón de cierre
- **Responsive**: Se adaptan a todos los tamaños de pantalla
- **Fáciles de usar**: Simple sintaxis HTML

## Estructura Básica

```html
<div class="alert alert-primary" role="alert">
  Este es un mensaje de alerta primario
</div>
```

## Tipos de Alertas

Bootstrap ofrece 8 variantes contextuales diferentes:

### 1. Alert Primary (Primario)
```html
<div class="alert alert-primary" role="alert">
  Alerta primaria - para información general
</div>
```

### 2. Alert Secondary (Secundario)
```html
<div class="alert alert-secondary" role="alert">
  Alerta secundaria - información menos importante
</div>
```

### 3. Alert Success (Éxito)
```html
<div class="alert alert-success" role="alert">
  ¡Operación completada con éxito!
</div>
```

### 4. Alert Danger (Peligro/Error)
```html
<div class="alert alert-danger" role="alert">
  Error: No se pudo completar la operación
</div>
```

### 5. Alert Warning (Advertencia)
```html
<div class="alert alert-warning" role="alert">
  Advertencia: Revisa los datos antes de continuar
</div>
```

### 6. Alert Info (Información)
```html
<div class="alert alert-info" role="alert">
  Información: Nuevas actualizaciones disponibles
</div>
```

### 7. Alert Light (Claro)
```html
<div class="alert alert-light" role="alert">
  Alerta con fondo claro
</div>
```

### 8. Alert Dark (Oscuro)
```html
<div class="alert alert-dark" role="alert">
  Alerta con fondo oscuro
</div>
```

## Clases Principales

- **`.alert`**: Clase base necesaria para todas las alertas
- **`.alert-{color}`**: Define el color contextual (primary, success, danger, etc.)
- **`.alert-dismissible`**: Hace la alerta desechable con botón de cierre
- **`.alert-link`**: Estiliza enlaces dentro de la alerta
- **`.alert-heading`**: Estiliza encabezados dentro de la alerta

## Alertas con Enlaces

```html
<div class="alert alert-success" role="alert">
  Operación exitosa. <a href="#" class="alert-link">Ver detalles</a>
</div>
```

## Alertas con Contenido Adicional

### Con Encabezado
```html
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">¡Bien hecho!</h4>
  <p>Has completado exitosamente el proceso.</p>
</div>
```

### Con Múltiples Elementos
```html
<div class="alert alert-warning" role="alert">
  <h4 class="alert-heading">¡Atención!</h4>
  <p>Por favor, revisa los siguientes puntos:</p>
  <ul>
    <li>Verifica tu correo electrónico</li>
    <li>Confirma tu número de teléfono</li>
  </ul>
  <hr>
  <p class="mb-0">Si necesitas ayuda, <a href="#" class="alert-link">contacta con soporte</a>.</p>
</div>
```

## Alertas Desechables (Dismissible)

Alertas que pueden ser cerradas por el usuario:

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>¡Atención!</strong> Este mensaje se puede cerrar.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

### Componentes necesarios para alertas desechables:
- **`.alert-dismissible`**: Añade espacio para el botón de cierre
- **`.fade`**: Añade efecto de desvanecimiento
- **`.show`**: Muestra la alerta inicialmente
- **`<button class="btn-close">`**: Botón de cierre
- **`data-bs-dismiss="alert"`**: Activa el comportamiento de cierre

## Alertas con Iconos

```html
<div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24">
    <use xlink:href="#check-circle-fill"/>
  </svg>
  <div>
    Archivo guardado correctamente
  </div>
</div>
```

## Casos de Uso Comunes

1. **Confirmación de acciones**: "Usuario creado exitosamente"
2. **Errores de validación**: "Por favor, completa todos los campos"
3. **Advertencias**: "Tu sesión expirará en 5 minutos"
4. **Información del sistema**: "Mantenimiento programado para mañana"
5. **Notificaciones**: "Tienes 3 mensajes nuevos"

## JavaScript

### Cerrar alertas programáticamente
```javascript
// Obtener el elemento alert
const alertElement = document.querySelector('.alert');

// Crear instancia de Alert
const alert = new bootstrap.Alert(alertElement);

// Cerrar la alerta
alert.close();
```

### Eventos
```javascript
const myAlert = document.getElementById('myAlert');
myAlert.addEventListener('closed.bs.alert', function () {
  console.log('La alerta se ha cerrado');
});
```

### Crear alertas dinámicamente
```javascript
function showAlert(message, type) {
  const alertHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
  `;
  document.getElementById('alert-container').innerHTML = alertHTML;
}

// Uso
showAlert('¡Operación exitosa!', 'success');
```

## Personalización con CSS

```css
/* Alerta personalizada */
.alert-custom {
  background-color: #f0f8ff;
  border-left: 4px solid #0066cc;
  color: #003366;
}

/* Animación de entrada */
.alert {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Alerta con sombra */
.alert-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Mejores Prácticas

1. **Usa el color apropiado**: 
   - Success (verde) para confirmaciones
   - Danger (rojo) para errores
   - Warning (amarillo) para advertencias
   - Info (azul) para información

2. **Sé conciso**: Los mensajes deben ser breves y claros

3. **Posición estratégica**: Coloca las alertas donde sean visibles pero no intrusivas

4. **Accesibilidad**: Siempre incluye `role="alert"`

5. **Auto-cierre opcional**: Considera cerrar automáticamente alertas informativas después de unos segundos

6. **Contraste adecuado**: Asegúrate de que el texto sea legible sobre el fondo

## Ejemplo Completo con Múltiples Alertas

```html
<div class="container mt-4">
  <!-- Alerta de éxito -->
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>¡Éxito!</strong> Tu perfil ha sido actualizado.
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>

  <!-- Alerta de error -->
  <div class="alert alert-danger" role="alert">
    <h4 class="alert-heading">Error de validación</h4>
    <p>Se encontraron los siguientes errores:</p>
    <ul class="mb-0">
      <li>El email no es válido</li>
      <li>La contraseña debe tener al menos 8 caracteres</li>
    </ul>
  </div>

  <!-- Alerta informativa -->
  <div class="alert alert-info" role="alert">
    <strong>Nota:</strong> Los cambios pueden tardar hasta 24 horas en aplicarse.
  </div>
</div>
```

## Alertas Flotantes (Toast-style)

Para alertas más sutiles tipo notificación, considera usar el componente Toast de Bootstrap en lugar de Alert.

## Ventajas

✅ **Visibilidad**: Los usuarios ven claramente los mensajes importantes  
✅ **Contextuales**: Diferentes colores comunican diferentes tipos de mensajes  
✅ **Flexibles**: Pueden contener cualquier tipo de contenido HTML  
✅ **Accesibles**: Compatibles con tecnologías de asistencia  
✅ **Fáciles de implementar**: No requieren configuración compleja  

## Recursos

- [Documentación oficial Bootstrap Alerts](https://getbootstrap.com/docs/5.0/components/alerts/)
- Ver ejemplos en: `index.html`
