# Tickets App React

Senior React application for managing a ticketing/queue system using WebSockets for real-time communication.

## Project Overview

- **Purpose**: A ticket management system (queue) for desks/kiosks.
- **Frontend Stack**: React 19 (using `use` hook), TypeScript, Vite, Tailwind CSS 4.
- **Real-time**: Custom WebSocket implementation (`WebSocketContext.tsx`) connecting to a backend (default `ws://localhost:3200`).
- **Routing**: React Router 7 with layout-based organization.
- **Architecture**:
  - `context/`: Core WebSocket state and management.
  - `hooks/`: Domain-specific hooks (e.g., `useSocketTicket`) abstraction.
  - `pages/`: 
    - `BoardPage`: Public display board.
    - `DeskPage`: Operator interface for attending tickets.
    - `KioskPage`: User interface for taking new tickets.
    - `WelcomePage`/`DeskSelectPage`: Initial setup and navigation.
  - `components/`: UI building blocks (Atomic-ish design).
  - `types/`: Strong typing for Socket messages and Ticket models.

## Building and Running

### Prerequisites
- [Bun](https://bun.sh/) (preferred based on `bun.lock`) or Node.js.

### Commands
- **Install Dependencies**: `bun install`
- **Development**: `npm run dev` (starts Vite on localhost).
- **Build**: `npm run build` (runs Typecheck + Vite build).
- **Lint**: `npm run lint` (ESLint with React Compiler rules).
- **Preview**: `npm run preview`

## Development Conventions

- **React 19 Patterns**: Use the `use()` hook for consuming contexts (`src/hooks/useSocketTicket.tsx`).
- **Real-time Communication**: 
  - Do not use raw WebSockets in components. Use `useSocketTicket` or `WebSocketContext`.
  - Subscribe to messages using `subscribeToMessages` which returns an unsubscribe function.
- **Styling**: Tailwind CSS 4 utility classes. Prefer standard layouts from `src/layouts/AppLayout.tsx`.
- **Typing**: Define all socket message payloads in `src/types/socket.ts` and domain models in `src/types/ticket.ts`.
- **Naming**: Use PascalCase for components/layouts and camelCase for hooks/utils.

## Environment Variables
- `ws://localhost:3200`: Hardcoded in `TicketsApp.tsx`. TODO: Move to `.env` if scaling or deploying.
