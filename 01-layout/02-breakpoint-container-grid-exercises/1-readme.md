# Ejercicio 1: Layout Responsive con Bootstrap Grid

## Objetivo
Crear un layout responsive utilizando el sistema de grid de Bootstrap 5 que se adapte a diferentes tamaños de pantalla (móvil, tablet y desktop).

## Estructura del Layout

### 1. Header (Verde)
- **Altura**: 50px
- **Color de fondo**: `green`
- Ocupa las 12 columnas en todos los dispositivos

### 2. Barra Lateral (Roja)
- **Altura**: 876px
- **Color de fondo**: `red`
- **Texto**: "soy rojo"
- **Comportamiento responsive**:
  - Desktop (md): 2 columnas
  - Tablet (sm): 3 columnas
  - Móvil: Oculto (`d-none d-sm-block`)

### 3. Área Principal
Ocupa el espacio restante (10 columnas en desktop, 9 en tablet, 12 en móvil)

#### 3.1 Sección Rosa
- **Altura**: 156px
- **Color de fondo**: `pink`
- Ocupa las 12 columnas

#### 3.2 Dos Columnas Naranjas
- **Altura**: 300px cada una
- **Color de fondo**: `orange`
- **Texto**: "1 de 2" y "2 de 2"
- **Comportamiento responsive**:
  - Desktop (md): 2 columnas de 6 cada una
  - Móvil: 12 columnas (apiladas)

#### 3.3 Grid de Cajas Azules (10 cajas totales)
- **Altura**: 200px cada una
- **Color de fondo**: `blue`
- **Texto**: "azul"
- **Distribución responsive**:
  - **Desktop (md)**: 2-2-4-2-2-2-2-4-2-2 columnas
  - **Tablet (sm)**: 4 columnas cada una
  - **Móvil**: 6 columnas cada una (2 por fila)

### 4. Footer (Verde)
- **Altura**: 25px
- **Color de fondo**: `green`
- Ocupa las 12 columnas

## Requisitos Técnicos
- Usar Bootstrap 5.3.0
- Usar clases de grid: `container`, `row`, `col-*`
- Aplicar breakpoints: `col-`, `col-sm-`, `col-md-`
- Usar clases de display para ocultar elementos: `d-none`, `d-sm-block`
- Agregar márgenes de 3px entre elementos usando estilos inline

## Resultado Esperado
El layout debe adaptarse fluidamente:
- En móvil: barra lateral oculta, columnas apiladas
- En tablet: barra lateral visible (3 cols), cajas azules en 4 columnas
- En desktop: barra lateral más estrecha (2 cols), distribución óptima de las cajas azules
