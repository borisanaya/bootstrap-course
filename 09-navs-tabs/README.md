# Navs & Tabs (Navegación y Pestañas)

## ¿Qué son los Navs y Tabs?

Los **Navs** y **Tabs** son componentes de navegación de Bootstrap que permiten organizar contenido en secciones navegables. Los navs proporcionan la estructura de navegación, mientras que los tabs permiten mostrar/ocultar contenido diferente sin recargar la página.

## Características Principales

- **Flexibles**: Múltiples estilos (horizontal, vertical, pills, tabs)
- **Interactivos**: Cambio de contenido sin recargar la página
- **Responsive**: Se adaptan a todos los tamaños de pantalla
- **Accesibles**: Soporte completo para teclado y lectores de pantalla
- **Personalizables**: Fáciles de estilizar

## Tipos de Navegación

### 1. Nav Básico (Base Nav)
```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
```

### 2. Tabs (Pestañas)
```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Deshabilitado</a>
  </li>
</ul>
```

### 3. Pills (Píldoras)
```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link 2</a>
  </li>
</ul>
```

## Clases Principales

### Contenedor
- **`.nav`**: Clase base para la navegación

### Estilos
- **`.nav-tabs`**: Estilo de pestañas
- **`.nav-pills`**: Estilo de píldoras
- **`.nav-underline`**: Subrayado (Bootstrap 5.3+)

### Items
- **`.nav-item`**: Contenedor de cada elemento
- **`.nav-link`**: Enlace de navegación
- **`.active`**: Estado activo
- **`.disabled`**: Estado deshabilitado

### Alineación
- **`.justify-content-center`**: Centrar
- **`.justify-content-end`**: Alinear a la derecha
- **`.flex-column`**: Vertical

## Tabs con Contenido (Tab Panes)

```html
<!-- Navegación de tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" 
            data-bs-target="#home" type="button" role="tab" 
            aria-controls="home" aria-selected="true">
      Home
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" 
            data-bs-target="#profile" type="button" role="tab" 
            aria-controls="profile" aria-selected="false">
      Perfil
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" 
            data-bs-target="#contact" type="button" role="tab" 
            aria-controls="contact" aria-selected="false">
      Contacto
    </button>
  </li>
</ul>

<!-- Contenido de tabs -->
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" 
       aria-labelledby="home-tab">
    <p>Contenido del Home...</p>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" 
       aria-labelledby="profile-tab">
    <p>Contenido del Perfil...</p>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" 
       aria-labelledby="contact-tab">
    <p>Contenido del Contacto...</p>
  </div>
</div>
```

## Pills con Contenido

```html
<!-- Navegación pills -->
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" 
            data-bs-target="#pills-home" type="button">
      Home
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" 
            data-bs-target="#pills-profile" type="button">
      Perfil
    </button>
  </li>
</ul>

<!-- Contenido pills -->
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home">
    Contenido Home...
  </div>
  <div class="tab-pane fade" id="pills-profile">
    Contenido Perfil...
  </div>
</div>
```

## Navegación Vertical

### Tabs Verticales
```html
<div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" 
            data-bs-target="#v-pills-home" type="button">
      Home
    </button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" 
            data-bs-target="#v-pills-profile" type="button">
      Perfil
    </button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" 
            data-bs-target="#v-pills-messages" type="button">
      Mensajes
    </button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home">
      Contenido Home...
    </div>
    <div class="tab-pane fade" id="v-pills-profile">
      Contenido Perfil...
    </div>
    <div class="tab-pane fade" id="v-pills-messages">
      Contenido Mensajes...
    </div>
  </div>
</div>
```

## Alineación y Distribución

### Centrado
```html
<ul class="nav nav-pills justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
```

### Alineado a la derecha
```html
<ul class="nav nav-pills justify-content-end">
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
```

### Fill (Ocupar todo el ancho)
```html
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link más largo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
```

### Justified (Ancho igual)
```html
<ul class="nav nav-tabs nav-justified">
  <li class="nav-item">
    <a class="nav-link active" href="#">Activo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link más largo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
```

## Dropdowns en Navegación

```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Activo</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
      Dropdown
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acción 1</a></li>
      <li><a class="dropdown-item" href="#">Acción 2</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Otra acción</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
```

## Tabs con Iconos

```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">
      <i class="bi bi-house-door me-2"></i>Home
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      <i class="bi bi-person me-2"></i>Perfil
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      <i class="bi bi-gear me-2"></i>Configuración
    </a>
  </li>
</ul>
```

## Tabs con Badges

```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">
      Home
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      Mensajes
      <span class="badge bg-danger rounded-pill ms-2">5</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      Notificaciones
      <span class="badge bg-primary rounded-pill ms-2">12</span>
    </a>
  </li>
</ul>
```

## Casos de Uso Comunes

1. **Organización de contenido**: Dividir información en secciones
2. **Configuraciones**: Diferentes paneles de configuración
3. **Dashboard**: Diferentes vistas de datos
4. **Productos**: Especificaciones, reviews, descripción
5. **Perfiles de usuario**: Actividad, información, configuración
6. **Formularios multi-paso**: Dividir formularios largos
7. **Documentación**: Diferentes secciones de docs

## JavaScript

### Activar tabs programáticamente
```javascript
// Obtener el tab
const triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]');

// Activar el tab
const tab = new bootstrap.Tab(triggerEl);
tab.show();
```

### Eventos de Tabs
```javascript
const tabElements = document.querySelectorAll('button[data-bs-toggle="tab"]');

tabElements.forEach(tabElement => {
  tabElement.addEventListener('show.bs.tab', function (event) {
    console.log('Mostrando tab:', event.target.id);
    console.log('Tab anterior:', event.relatedTarget);
  });

  tabElement.addEventListener('shown.bs.tab', function (event) {
    console.log('Tab mostrado:', event.target.id);
    // Cargar datos cuando el tab esté visible
  });

  tabElement.addEventListener('hide.bs.tab', function (event) {
    console.log('Ocultando tab:', event.target.id);
  });

  tabElement.addEventListener('hidden.bs.tab', function (event) {
    console.log('Tab oculto:', event.target.id);
  });
});
```

### Cambiar tab con JavaScript
```javascript
function showTab(tabId) {
  const triggerEl = document.querySelector(`#${tabId}-tab`);
  const tab = new bootstrap.Tab(triggerEl);
  tab.show();
}

// Uso
showTab('profile'); // Muestra el tab de perfil
```

### Navegación con flechas del teclado
```javascript
const tabs = document.querySelectorAll('[role="tab"]');

tabs.forEach((tab, index) => {
  tab.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextTab = tabs[index + 1] || tabs[0];
      new bootstrap.Tab(nextTab).show();
      nextTab.focus();
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevTab = tabs[index - 1] || tabs[tabs.length - 1];
      new bootstrap.Tab(prevTab).show();
      prevTab.focus();
    }
  });
});
```

## Personalización con CSS

```css
/* Tabs personalizados */
.nav-tabs .nav-link {
  border: none;
  border-bottom: 3px solid transparent;
  color: #6c757d;
  transition: all 0.3s ease;
}

.nav-tabs .nav-link:hover {
  border-bottom-color: #0d6efd;
  color: #0d6efd;
}

.nav-tabs .nav-link.active {
  border-bottom-color: #0d6efd;
  color: #0d6efd;
  font-weight: 600;
}

/* Pills personalizados */
.nav-pills .nav-link {
  border-radius: 50px;
  padding: 10px 20px;
  transition: all 0.3s ease;
}

.nav-pills .nav-link:hover {
  background-color: rgba(13, 110, 253, 0.1);
}

.nav-pills .nav-link.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Tabs con animación */
.tab-pane {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Tabs verticales con estilo */
.nav-pills.flex-column .nav-link {
  text-align: left;
  padding: 15px 20px;
  margin-bottom: 5px;
}
```

## Tabs Responsive

Para móviles, considera convertir tabs horizontales en verticales:

```html
<ul class="nav nav-tabs flex-column flex-sm-row">
  <li class="nav-item">
    <a class="nav-link active" href="#">Tab 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Tab 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Tab 3</a>
  </li>
</ul>
```

## Ejemplo Completo: Perfil de Usuario

```html
<!-- Tabs de navegación -->
<ul class="nav nav-tabs mb-4" id="profileTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="activity-tab" data-bs-toggle="tab" 
            data-bs-target="#activity" type="button">
      <i class="bi bi-clock-history me-2"></i>Actividad
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="info-tab" data-bs-toggle="tab" 
            data-bs-target="#info" type="button">
      <i class="bi bi-person me-2"></i>Información
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="tab" 
            data-bs-target="#settings" type="button">
      <i class="bi bi-gear me-2"></i>Configuración
    </button>
  </li>
</ul>

<!-- Contenido de tabs -->
<div class="tab-content" id="profileTabContent">
  <div class="tab-pane fade show active" id="activity">
    <h4>Actividad Reciente</h4>
    <p>Últimas acciones del usuario...</p>
  </div>
  <div class="tab-pane fade" id="info">
    <h4>Información Personal</h4>
    <p>Datos del perfil...</p>
  </div>
  <div class="tab-pane fade" id="settings">
    <h4>Configuración de la Cuenta</h4>
    <p>Opciones de configuración...</p>
  </div>
</div>
```

## Mejores Prácticas

1. **Número de tabs**: No más de 5-7 tabs en horizontal
2. **Etiquetas claras**: Usa nombres descriptivos y concisos
3. **Primer tab visible**: El tab inicial debe mostrar el contenido más importante
4. **Loading states**: Muestra spinners si el contenido tarda en cargar
5. **Deep linking**: Considera permitir URLs con hash (#tab-name)
6. **Mobile first**: Usa tabs verticales o acordeones en móvil si es necesario
7. **Accesibilidad**: Incluye todos los atributos ARIA requeridos
8. **Contenido independiente**: Cada tab debe tener sentido por sí solo

## Accesibilidad

```html
<!-- Ejemplo con accesibilidad completa -->
<ul class="nav nav-tabs" role="tablist" aria-label="Perfil de usuario">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" 
            id="tab1" 
            data-bs-toggle="tab" 
            data-bs-target="#panel1" 
            type="button" 
            role="tab" 
            aria-controls="panel1" 
            aria-selected="true">
      Tab 1
    </button>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane fade show active" 
       id="panel1" 
       role="tabpanel" 
       aria-labelledby="tab1" 
       tabindex="0">
    Contenido accesible
  </div>
</div>
```

## Ventajas

✅ **Organización**: Estructura clara del contenido  
✅ **Espacio eficiente**: Mucha información en poco espacio  
✅ **Navegación intuitiva**: Fácil de entender y usar  
✅ **Sin recarga**: Cambio de contenido instantáneo  
✅ **Flexible**: Múltiples estilos y configuraciones  

## Recursos

- [Documentación oficial Bootstrap Navs & Tabs](https://getbootstrap.com/docs/5.0/components/navs-tabs/)
- Ver ejemplos en: `index.html`
