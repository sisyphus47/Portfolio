# Portfolio Application

## Overview

This is a modern full-stack portfolio application built with React/TypeScript frontend and Express.js backend. The application serves as a personal portfolio website showcasing skills, projects, and contact information. It features a responsive design with dark/light theme support, smooth animations, and a clean modern interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **State Management**: React Context for theme management, TanStack Query for server state
- **Animations**: Framer Motion for smooth transitions and hover effects
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used)
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development**: Hot module replacement with Vite integration

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **ORM**: Drizzle ORM with Zod validation schemas
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless PostgreSQL

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation and theme toggle
2. **Hero Section**: Landing area with animated name display and call-to-action
3. **About Section**: Personal information and education details
4. **Skills Section**: Categorized technical skills with icons
5. **Projects Section**: Featured project showcase with external links
6. **Contact Section**: Contact form with validation and toast notifications
7. **Theme Provider**: Context-based theme management with localStorage persistence

### Backend Components
1. **Express Server**: Main application server with middleware setup
2. **Route Handler**: Centralized route registration system
3. **Storage Interface**: Abstracted storage layer with in-memory implementation
4. **Vite Integration**: Development server integration for hot reloading

### Shared Components
1. **Database Schema**: Shared type definitions and validation schemas
2. **Type Safety**: End-to-end TypeScript type safety

## Data Flow

1. **Client Rendering**: Vite serves the React application in development
2. **API Communication**: TanStack Query manages server state and caching
3. **Theme Management**: Context provider manages theme state across components
4. **Form Handling**: React Hook Form with Zod validation for type-safe forms
5. **Navigation**: Smooth scroll behavior for single-page application experience

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, ReactDOM
- **Routing**: Wouter
- **State Management**: TanStack React Query
- **Forms**: React Hook Form with Hookform Resolvers
- **Validation**: Zod
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Icons**: Lucide React, React Icons
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Date Handling**: date-fns
- **Carousel**: Embla Carousel React

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, Neon Database serverless
- **Session**: connect-pg-simple
- **Utilities**: nanoid for ID generation

### Development Dependencies
- **Build Tools**: Vite, esbuild
- **TypeScript**: Full TypeScript support
- **Development**: tsx for development server, Replit-specific plugins

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served from `dist/public`

### Environment Configuration
- **Development**: Uses tsx for hot reloading and Vite dev server
- **Production**: Serves built static files and runs compiled server code
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Hosting Considerations
- **Replit Integration**: Configured for Replit deployment with specific plugins
- **Static File Serving**: Express serves built React application
- **Environment Variables**: Database URL must be configured for production

## Changelog
- July 04, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.