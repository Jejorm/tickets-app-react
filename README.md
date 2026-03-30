# 🎫 Tickets App - Real-Time Queue System

Una aplicación de gestión de turnos y colas de espera de alto rendimiento, construida con **React 19**, **TypeScript** y **WebSockets** nativos. Diseñada para ser rápida, visualmente clara y totalmente reactiva.

---

## 🚀 Funcionalidades Principales

El sistema está dividido en tres roles principales que interactúan en tiempo real:

1.  **Kiosco (Kiosk):** Interfaz para que los clientes soliciten su turno. Soporta turnos normales y preferenciales.
2.  **Escritorio (Desk):** Panel para los operadores. Permite ver el turno actual, llamar al siguiente cliente y gestionar la atención desde un escritorio específico.
3.  **Pantalla Pública (Board):** Una vista de alta visibilidad para salas de espera que muestra los últimos turnos llamados y el historial reciente con animaciones fluidas.

---

## 🛠️ Stack Tecnológico

-   **Frontend:** React 19 (utilizando el nuevo hook `use`).
-   **Bundler:** Vite 8.
-   **Lenguaje:** TypeScript (Tipado estricto para mensajes de Socket y Modelos).
-   **Estilos:** Tailwind CSS 4.
-   **Comunicación:** WebSockets Nativos (sin dependencias externas para máxima eficiencia).
-   **Enrutamiento:** React Router 7.

---

## 🏗️ Arquitectura del Proyecto

La aplicación sigue patrones de diseño modernos para separar la lógica de infraestructura de la UI:

-   `src/context/`: Gestión centralizada del ciclo de vida del WebSocket (reconexión automática, listeners).
-   `src/hooks/`: Abstracciones de dominio (como `useSocketTicket`) para interactuar con la cola sin tocar el socket directamente.
-   `src/layouts/`: Plantillas de diseño reutilizables para diferentes anchos de pantalla (Contained vs Full).
-   `src/types/`: Definición de protocolos de comunicación (Mensajes Cliente/Servidor).

---

## 🔧 Instalación y Uso

### Requisitos Previos
-   [Bun](https://bun.sh/) (Recomendado por el `bun.lock`) o Node.js v18+.
-   Tener el servidor de backend (WebSockets) corriendo en el puerto `3200`.

### 1. Clonar e Instalar
```bash
# Instalar dependencias con Bun
bun install

# O con NPM
npm install
```

### 2. Desarrollo
Para iniciar el servidor de desarrollo con Hot Module Replacement (HMR):
```bash
npm run dev
```

### 3. Construcción para Producción
Para generar un build optimizado:
```bash
npm run build
```
Los archivos se generarán en la carpeta `dist/`.

---

## 🖥️ Cómo utilizar la aplicación

Una vez que la aplicación esté corriendo, podés acceder a las siguientes rutas:

-   `/`: Pantalla de bienvenida.
-   `/kiosk`: Para generar nuevos tickets (Ideal para tablets en la entrada).
-   `/desk/select`: Para que un operador elija su número de escritorio.
-   `/board`: Pantalla principal para la sala de espera (Muestra quién debe pasar y a qué escritorio).

---

## 📝 Notas de Implementación

-   **Reconexión:** El sistema cuenta con una estrategia de reconexión exponencial si se pierde la conexión con el servidor.
-   **Rendimiento:** Utiliza el **React Compiler** para optimizar las re-renderizaciones automáticamente.
-   **Estilos:** Los colores de los badges y estados se gestionan mediante utilidades dinámicas en `src/utils/badge-class.ts`.

---
Creado con ❤️ para la gestión eficiente de flujos de personas.
