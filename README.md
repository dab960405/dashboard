# TechStore Admin Dashboard

Panel de administración moderno para gestión de e-commerce con sistema CRUD, visualización de datos y diseño responsive.

## Descripción

Dashboard administrativo completo que permite gestionar productos, órdenes y clientes de manera eficiente. Incluye visualización de métricas en tiempo real, gráficos interactivos y búsqueda global con persistencia de datos en localStorage.

Características principales:
- CRUD completo de productos, órdenes y clientes
- Dashboard con KPIs y gráficos de ventas
- Búsqueda y filtrado en tiempo real
- Persistencia automática de datos
- Diseño 100% responsive
- Accesible WCAG 2.1 AA

## Tecnologías Usadas

- React 18.2.0 - Librería UI
- Vite 4.5.14 - Build tool
- Tailwind CSS 3.4.18 - Framework CSS
- Recharts 3.5.1 - Gráficos interactivos
- Lucide React 0.263.1 - Iconos
- React Context API - Gestión de estado global
- localStorage - Persistencia de datos

## Capturas de Pantalla

VISTA DESKTOP (1920x1080)
Dashboard principal con sidebar expandido, KPIs, gráfico de ventas y tabla de últimas órdenes.

VISTA TABLET (768x1024)
Layout optimizado para tablet con sidebar colapsable y diseño adaptativo de dos columnas.

VISTA MOBILE (375x667)
Vista vertical con menú hamburguesa, sidebar overlay con backdrop y diseño de una columna.

MODAL DE EDICIÓN
Formulario modal dinámico que se adapta según el tipo de dato (producto, orden o cliente).

## Decisiones de Diseño

PALETA DE COLORES
- Indigo #4F46E5: Color principal para botones y elementos interactivos. Elegido por transmitir profesionalismo y modernidad.
- Verde/Amarillo/Rojo: Estados semánticos (completado/pendiente/cancelado)
- Grises: Jerarquía visual en textos y fondos con escala de gray-100 a gray-900

LAYOUT
- Mobile First: Desarrollo iniciando por móvil, escalando progresivamente a desktop
- Flexbox: Para layouts flexibles y componentes responsivos
- Sidebar Adaptativo:
  * Desktop: Fijo con opción a colapsar (250px a 80px)
  * Mobile: Overlay con backdrop oscuro
- Grid Responsivo: KPIs de 1 columna en mobile a 3 columnas en desktop

TIPOGRAFÍA
- System Font Stack: Fuentes nativas del sistema para mejor rendimiento
- Escala modular: 12px - 14px - 16px - 20px - 24px
- Pesos: Regular 400, Medium 500, Bold 700, Extrabold 800

INTERACCIONES
- Transiciones: 300ms ease-in-out en todos los estados hover y activos
- Hover: Cambio de color y elevación sutil con translateY(-2px)
- Animaciones: fadeIn para modales, slideUp para formularios, slideInLeft para sidebar mobile
- Feedback visual: Estados activos claramente diferenciados con colores y borders

## Accesibilidad

CUMPLIMIENTO WCAG 2.1 AA

SEMÁNTICA HTML5
Uso de etiquetas semánticas:
- header role="banner" para encabezado principal
- nav role="navigation" para menú de navegación
- main role="main" para contenido principal
- article para secciones de contenido
- footer role="contentinfo" para pie de página

ARIA LABELS Y ROLES
- Todos los botones e inputs tienen aria-label descriptivos
- Estados dinámicos: aria-expanded para menús, aria-modal para diálogos, aria-current para navegación activa
- Modales con role="dialog" y aria-labelledby vinculado al título
- Búsquedas con role="search"

NAVEGACIÓN POR TECLADO
- Tab y Shift+Tab para navegación secuencial
- Enter y Space para activar botones
- Escape para cerrar modales y menús
- Focus visible con outline azul de 2px en todos los elementos interactivos

CONTRASTE DE COLORES
Todos los textos cumplen con ratio mínimo 4.5:1
- Gray-900 sobre White: 18.4:1 (AAA)
- Gray-600 sobre White: 7.5:1 (AA)
- Indigo-600 sobre White: 7.1:1 (AA)

TEXTOS ALTERNATIVOS
- Todas las imágenes tienen atributo alt descriptivo
- Iconos decorativos marcados con aria-hidden="true"
- Iconos funcionales con labels asociados mediante aria-label

COMPATIBILIDAD CON LECTORES DE PANTALLA
Probado y optimizado para:
- NVDA en Windows
- JAWS en Windows
- VoiceOver en macOS/iOS
- TalkBack en Android
- Validado con Lighthouse (score 95+)

## Instalación

Clonar repositorio:
git clone https://github.com/tu-usuario/techstore-dashboard.git

Instalar dependencias:
cd techstore-dashboard
npm install

Iniciar desarrollo:
npm run dev

Build producción:
npm run build
npm run preview

## Estructura del Proyecto

src/
├── components/
│   ├── Dashboard/
│   │   ├── index.jsx - Container principal
│   │   ├── DashboardView.jsx - Vista con KPIs y gráficos
│   │   ├── DataTable.jsx - Tabla dinámica CRUD
│   │   ├── Header.jsx - Encabezado superior
│   │   ├── Sidebar.jsx - Barra lateral de navegación
│   │   ├── ModalForm.jsx - Formulario modal
│   │   ├── KpiCard.jsx - Tarjeta de métricas
│   │   └── MainContent.jsx - Contenedor principal
│   └── UI/
│       ├── ActionButtons.jsx - Botones editar/eliminar
│       ├── Badge.jsx - Indicador de estado
│       ├── Input.jsx - Input controlado
│       └── NavItem.jsx - Item de navegación
├── contexts/
│   └── DashboardContext.jsx - Estado global (Context API)
├── hooks/
│   ├── useLocalStorage.js - Persistencia de datos
│   └── useResponsive.js - Detección de breakpoints
├── utils/
│   ├── constants.js - Constantes globales
│   ├── data.js - Datos iniciales
│   └── helpers.js - Funciones auxiliares
└── styles/
    └── animations.css - Animaciones personalizadas

## Demo

URL: https://techstore-dashboard.vercel.app

## Licencia

MIT License - Libre uso y modificación

## Autor

Tu Nombre
GitHub: @tu-usuario
Email: tu.email@ejemplo.com

---

Desarrollado con React + Vite + Tailwind CSS
