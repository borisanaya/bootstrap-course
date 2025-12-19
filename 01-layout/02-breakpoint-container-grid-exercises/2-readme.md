# Ejercicio 2: Layout Avanzado con Offsets, Order y Display

## Objetivo
Crear un layout responsive avanzado utilizando offsets, order y clases de display de Bootstrap 5 para reordenar y posicionar elementos según el tamaño de pantalla.

## Estructura del Layout

### 1. Header
- **Altura**: 50px
- **Color de fondo**: `chartreuse`
- **Texto**: "header"
- **Borde**: 2px sólido `darkgrey`
- Ocupa las 12 columnas

### 2. Primera Fila de Cajas (1, 2, 3, 4)
Cuatro cajas con fondo `lightblue`, altura 150px, numeradas del 1 al 4

#### Comportamiento Responsive:
- **Móvil**:
  - Cajas 1 y 2: 6 columnas cada una
  - Cajas 3 y 4: 6 columnas cada una
  
- **Tablet (sm)**:
  - Cada caja: 3 columnas
  - Todas en una fila

- **Desktop (md)**:
  - Caja 1: 3 columnas con `offset-md-3` (3 columnas vacías a la izquierda)
  - Caja 2: 3 columnas
  - Espacio vacío: 3 columnas
  - Caja 3: 3 columnas
  - Caja 4: 3 columnas con `ml-md-auto` (margen izquierdo automático)

### 3. Indicador de Tablet
- **Altura**: 25px
- **Color de fondo**: `cyan`
- **Texto**: "Tablet"
- **Visibilidad**: Solo en tablet (`d-none d-sm-block d-md-none`)

### 4. Segunda Fila de Cajas (a, b, c, d)
Cuatro cajas grises con altura 150px, fondo `grey`, letras a, b, c, d

#### Comportamiento Responsive con Order:
- **Móvil y Tablet**: 
  - Orden normal: a, b, c, d
  - Cajas en 6 columnas (móvil) o 3 columnas (tablet)

- **Desktop (md)**:
  - Orden invertido usando clases `order-md-*`:
    - Caja a: `order-md-4`
    - Caja b: `order-md-3`
    - Caja c: `order-md-2`
    - Caja d: `order-md-1`
  - Resultado visual: d, c, b, a

### 5. Indicador de Desktop
- **Color de fondo**: `cyan`
- **Texto**: "Desktop"
- **Visibilidad**: Solo en desktop (`d-none d-md-block`)

### 6. Indicador de Mobile
- **Color de fondo**: `cyan`
- **Texto**: "Mobile"
- **Visibilidad**: Solo en móvil (`d-block d-sm-none`)

### 7. Tercera Fila de Cajas (:D y ;))
Dos cajas naranjas con altura 150px, fondo `orange`

#### Comportamiento Responsive:
- **Móvil**:
  - Caja :D: 12 columnas
  
- **Tablet (sm)**:
  - Ambas cajas: 6 columnas cada una

- **Desktop (md)**:
  - Caja ;): 3 columnas con `offset-md-3`, `order-md-1` (aparece primero)
  - Espacio vacío: 3 columnas
  - Caja :D: 3 columnas, `order-md-2` (aparece después)
  - Caja ;) solo visible en tablet y desktop (`d-none d-sm-block`)

### 8. Footer
- **Altura**: 35px
- **Color de fondo**: `olive`
- **Texto**: "footer"
- **Visibilidad**: Oculto en móvil (`d-none d-sm-block`)

## Requisitos Técnicos
- Usar Bootstrap 5.3.0
- Aplicar clases de offset: `offset-md-*`
- Aplicar clases de order: `order-md-*`
- Usar margin utilities: `ml-md-auto`
- Usar clases de display condicionales:
  - `d-none` / `d-block`
  - `d-sm-block` / `d-sm-none`
  - `d-md-block` / `d-md-none`
- Aplicar bordes de 2px sólidos `darkgrey` a las cajas
- Centrar texto con `text-align: center`
- Tamaño de fuente 2em para las cajas

## Resultado Esperado
El layout debe demostrar:
- Uso de offsets para crear espacios horizontales
- Reordenamiento de elementos con `order-*`
- Visibilidad condicional según breakpoint
- Uso de márgenes automáticos para alineación
