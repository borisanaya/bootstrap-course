# Ejercicio 06: Dashboard con Cards y Estadísticas

## Objetivo del Ejercicio

Crear un **dashboard responsive** con tarjetas de estadísticas, gráficos simulados y tablas de datos usando Cards, List Groups y el sistema Grid de Bootstrap.

---

## Enunciado

Debes crear una página de dashboard (panel de control) con las siguientes características:

### Requisitos:

1. **Navbar fijo superior** con:
   - Logo/título "Admin Dashboard"
   - Enlaces: Dashboard, Usuarios, Reportes
   - Avatar de usuario con dropdown (Perfil, Configuración, Salir)

2. **4 Cards de estadísticas** en la parte superior:
   - Ventas Totales (con icono y porcentaje de crecimiento)
   - Nuevos Usuarios (con badge)
   - Pedidos Pendientes
   - Ingresos del Mes
   
3. **Distribución responsive**:
   - Desktop: 4 columnas (4 cards en una fila)
   - Tablet: 2 columnas (2 cards por fila)
   - Móvil: 1 columna (1 card por fila)

4. **Sección de actividad reciente**:
   - Card con List Group mostrando 5 actividades
   - Incluir iconos y timestamps

5. **Tabla de productos más vendidos**:
   - Card con tabla responsive
   - Al menos 5 productos con nombre, categoría y ventas

---

## Resultado Esperado

Tu dashboard debe:
- Mostrar métricas claras y fáciles de leer
- Cards con efectos hover
- Iconos que refuercen la información
- Colores contextuales (success, primary, warning, danger)
- Totalmente responsive

---

## Tutorial Paso a Paso

### Paso 1: Estructura HTML Básica

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ejercicio 06 - Dashboard</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
  
  <style>
    body {
      background-color: #f8f9fa;
      padding-top: 56px;
    }
    
    .stat-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
    
    .stat-icon {
      font-size: 2.5rem;
      opacity: 0.7;
    }
  </style>
</head>
<body>

  <!-- Aquí irá el contenido -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**¿Qué hemos hecho?**
- Importamos Bootstrap Icons para los iconos
- `padding-top: 56px`: Compensar el navbar fijo
- Estilos para efectos hover en las cards

---

### Paso 2: Navbar con Dropdown de Usuario

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <i class="bi bi-speedometer2 me-2"></i>Admin Dashboard
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Usuarios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reportes</a>
        </li>
      </ul>
      
      <!-- Avatar con dropdown -->
      <div class="dropdown">
        <a class="nav-link dropdown-toggle text-white" href="#" role="button" 
           data-bs-toggle="dropdown">
          <i class="bi bi-person-circle me-1"></i>Admin
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Perfil</a></li>
          <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Configuración</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right me-2"></i>Salir</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
```

**Explicación:**
- `fixed-top`: Navbar fijo en la parte superior
- Dropdown con `dropdown-menu-end` para alinearlo a la derecha
- Iconos de Bootstrap Icons para mejor UX

---

### Paso 3: Cards de Estadísticas

```html
<div class="container-fluid mt-4">
  <div class="row g-3 mb-4">
    
    <!-- Card 1: Ventas Totales -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card stat-card h-100 border-0 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h6 class="text-muted mb-2">Ventas Totales</h6>
              <h2 class="mb-0">€24,567</h2>
              <small class="text-success">
                <i class="bi bi-arrow-up"></i> 12.5% vs mes anterior
              </small>
            </div>
            <div class="text-primary stat-icon">
              <i class="bi bi-graph-up"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Card 2: Nuevos Usuarios -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card stat-card h-100 border-0 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h6 class="text-muted mb-2">Nuevos Usuarios</h6>
              <h2 class="mb-0">1,234
                <span class="badge bg-success ms-2">+89</span>
              </h2>
              <small class="text-success">
                <i class="bi bi-arrow-up"></i> 8.2% esta semana
              </small>
            </div>
            <div class="text-success stat-icon">
              <i class="bi bi-people"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Card 3: Pedidos Pendientes -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card stat-card h-100 border-0 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h6 class="text-muted mb-2">Pedidos Pendientes</h6>
              <h2 class="mb-0">45</h2>
              <small class="text-warning">
                <i class="bi bi-exclamation-triangle"></i> Requieren atención
              </small>
            </div>
            <div class="text-warning stat-icon">
              <i class="bi bi-cart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Card 4: Ingresos del Mes -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card stat-card h-100 border-0 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h6 class="text-muted mb-2">Ingresos del Mes</h6>
              <h2 class="mb-0">€89,234</h2>
              <small class="text-danger">
                <i class="bi bi-arrow-down"></i> 3.1% vs objetivo
              </small>
            </div>
            <div class="text-info stat-icon">
              <i class="bi bi-currency-euro"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
```

**Conceptos clave:**
- `col-12 col-md-6 col-xl-3`: Responsive grid (1 col móvil, 2 tablet, 4 desktop)
- `h-100`: Todas las cards con la misma altura
- `d-flex justify-content-between`: Layout flexbox para alinear contenido
- Iconos grandes con opacidad para no dominar visualmente

---

### Paso 4: Actividad Reciente con List Group

```html
<div class="container-fluid">
  <div class="row g-3">
    
    <!-- Columna de actividad reciente -->
    <div class="col-lg-6">
      <div class="card shadow-sm border-0">
        <div class="card-header bg-white">
          <h5 class="mb-0">
            <i class="bi bi-clock-history me-2"></i>Actividad Reciente
          </h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="d-flex">
              <div class="me-3">
                <span class="badge bg-success rounded-circle p-2">
                  <i class="bi bi-check"></i>
                </span>
              </div>
              <div class="flex-grow-1">
                <strong>Pedido #1234 completado</strong>
                <p class="mb-0 text-muted small">Cliente: Juan Pérez</p>
                <small class="text-muted">Hace 5 minutos</small>
              </div>
              <div>
                <span class="badge bg-success">€89.99</span>
              </div>
            </div>
          </li>
          
          <li class="list-group-item">
            <div class="d-flex">
              <div class="me-3">
                <span class="badge bg-primary rounded-circle p-2">
                  <i class="bi bi-person-plus"></i>
                </span>
              </div>
              <div class="flex-grow-1">
                <strong>Nuevo usuario registrado</strong>
                <p class="mb-0 text-muted small">Email: maria@example.com</p>
                <small class="text-muted">Hace 12 minutos</small>
              </div>
            </div>
          </li>
          
          <li class="list-group-item">
            <div class="d-flex">
              <div class="me-3">
                <span class="badge bg-warning rounded-circle p-2">
                  <i class="bi bi-exclamation"></i>
                </span>
              </div>
              <div class="flex-grow-1">
                <strong>Stock bajo detectado</strong>
                <p class="mb-0 text-muted small">Producto: Laptop XYZ</p>
                <small class="text-muted">Hace 1 hora</small>
              </div>
            </div>
          </li>
          
          <li class="list-group-item">
            <div class="d-flex">
              <div class="me-3">
                <span class="badge bg-info rounded-circle p-2">
                  <i class="bi bi-chat"></i>
                </span>
              </div>
              <div class="flex-grow-1">
                <strong>Nuevo mensaje de soporte</strong>
                <p class="mb-0 text-muted small">Ticket #456</p>
                <small class="text-muted">Hace 2 horas</small>
              </div>
            </div>
          </li>
          
          <li class="list-group-item">
            <div class="d-flex">
              <div class="me-3">
                <span class="badge bg-danger rounded-circle p-2">
                  <i class="bi bi-x"></i>
                </span>
              </div>
              <div class="flex-grow-1">
                <strong>Pago rechazado</strong>
                <p class="mb-0 text-muted small">Pedido #1230</p>
                <small class="text-muted">Hace 3 horas</small>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</div>
```

**Explicación:**
- `list-group-flush`: Elimina bordes externos para mejor integración con la card
- Badges circulares con iconos para identificación rápida visual
- Layout flexbox para estructura consistente

---

### Paso 5: Tabla de Productos Más Vendidos

```html
    <!-- Columna de productos más vendidos -->
    <div class="col-lg-6">
      <div class="card shadow-sm border-0">
        <div class="card-header bg-white">
          <h5 class="mb-0">
            <i class="bi bi-trophy me-2"></i>Productos Más Vendidos
          </h5>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th class="text-end">Ventas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Laptop Pro 15"</strong>
                  </td>
                  <td>
                    <span class="badge bg-primary">Electrónica</span>
                  </td>
                  <td class="text-end">
                    <strong>234</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Smartphone XYZ</strong>
                  </td>
                  <td>
                    <span class="badge bg-primary">Electrónica</span>
                  </td>
                  <td class="text-end">
                    <strong>189</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Auriculares Bluetooth</strong>
                  </td>
                  <td>
                    <span class="badge bg-success">Accesorios</span>
                  </td>
                  <td class="text-end">
                    <strong>156</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Teclado Mecánico RGB</strong>
                  </td>
                  <td>
                    <span class="badge bg-success">Accesorios</span>
                  </td>
                  <td class="text-end">
                    <strong>142</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Monitor 27" 4K</strong>
                  </td>
                  <td>
                    <span class="badge bg-primary">Electrónica</span>
                  </td>
                  <td class="text-end">
                    <strong>128</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card-footer bg-white text-center">
          <a href="#" class="btn btn-outline-primary btn-sm">Ver todos los productos</a>
        </div>
      </div>
    </div>
    
  </div> <!-- Fin row -->
</div> <!-- Fin container -->
```

**Conceptos:**
- `table-responsive`: Hace la tabla scrollable en móviles
- `table-hover`: Efecto hover en las filas
- Badges para categorías con colores contextuales
- Card-footer para acción adicional

---

## Componentes Bootstrap Utilizados

1. **Navbar** - Navegación principal fija
2. **Dropdown** - Menú de usuario
3. **Cards** - Contenedores de información
4. **Grid System** - Layout responsive
5. **List Group** - Lista de actividades
6. **Table** - Tabla de datos
7. **Badges** - Etiquetas y números
8. **Icons** - Bootstrap Icons

---

## Personalización Adicional (Opcional)

### Añadir Gráficos Simulados

```html
<div class="col-12 mt-4">
  <div class="card shadow-sm">
    <div class="card-header bg-white">
      <h5 class="mb-0">Ventas del Año</h5>
    </div>
    <div class="card-body">
      <!-- Aquí podrías integrar Chart.js o similar -->
      <div class="text-center text-muted py-5">
        <i class="bi bi-bar-chart display-1"></i>
        <p class="mt-3">Gráfico de ventas</p>
      </div>
    </div>
  </div>
</div>
```

---

## Desafíos Adicionales

1. **Añade más estadísticas**: Crear 2 cards adicionales con métricas diferentes
2. **Filtros por fecha**: Añadir botones para filtrar por día/semana/mes
3. **Búsqueda en tabla**: Implementar un input para buscar productos
4. **Notificaciones**: Añadir un badge con contador en el navbar
5. **Dark mode**: Implementar un toggle para modo oscuro

---

## Conceptos Aprendidos

✅ Creación de dashboards con Bootstrap  
✅ Cards de estadísticas con iconos  
✅ List Groups para mostrar actividad  
✅ Tablas responsive dentro de cards  
✅ Grid system para layouts complejos  
✅ Navbar con dropdown de usuario  
✅ Uso efectivo de colores contextuales  
✅ Efectos hover y transiciones  

---

## Recursos Útiles

- [Bootstrap Cards](https://getbootstrap.com/docs/5.0/components/card/)
- [Bootstrap List Group](https://getbootstrap.com/docs/5.0/components/list-group/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Bootstrap Grid](https://getbootstrap.com/docs/5.0/layout/grid/)
