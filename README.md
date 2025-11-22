# 🚀 Eureky - Task Management App

Modern task management application built with React, TypeScript, and Tailwind CSS v4.

## 📱 Features

- **Mobile-First Design** - Optimized for 375x806 viewport
- **Responsive Layout** - Seamlessly adapts to desktop with sidebar navigation
- **Calendar Integration** - View and manage your daily schedule
- **Task Management** - Create, complete, and organize tasks
- **Dark Theme** - Beautiful dark UI with custom color system
- **Component-Based Architecture** - Atomic Design methodology

## 🏗️ Project Structure

\`\`\`
src/
├── assets/
│   └── icons/              # SVG icon components
├── components/
│   ├── atoms/              # Base components (Button, Avatar, Badge, Checkbox)
│   ├── molecules/          # Composite components (TopBar, InputBar, EventItem, etc.)
│   ├── organisms/          # Complex components (CalendarSection, TaskList, Sidebar, etc.)
│   └── layout/             # Layout wrappers (MainLayout)
├── hooks/
│   └── useAppData.ts       # Custom hook for app state management
├── pages/
│   ├── Home.tsx            # Main responsive page wrapper
│   ├── HomeMobile.tsx      # Mobile view (< 768px)
│   └── HomeDesktop.tsx     # Desktop view (≥ 768px)
├── types/
│   └── index.ts            # TypeScript type definitions
├── App.tsx                 # Root component
├── main.tsx                # Application entry point
└── index.css               # Global styles & Tailwind configuration
\`\`\`

## 🎨 Design System

### Colors
- **Background**: #050912 (app), #0F1521 (surface), #1C273E (surface alt)
- **Text**: #FFFFFF (primary), #CDCEDF (secondary), #444358 (muted)
- **Brand**: #4E36AF (primary), #5E49B1 (soft), #242865 (dark)
- **Status**: #4AC27B (online)

### Typography
- **Display**: Figtree (Bold)
- **Body**: DM Sans (Regular, Medium, Semibold)

### Breakpoints
- **Mobile**: < 768px (375px optimal)
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px
- **Wide**: ≥ 1440px

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling with @tailwindcss/postcss
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

## 🚀 Getting Started

### Installation
\`\`\`bash
npm install
\`\`\`

### Development
\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:5173 in your browser.

### Build
\`\`\`bash
npm run build
\`\`\`

## 📦 Component Guidelines

### Atomic Design Structure

1. **Atoms** - Smallest building blocks (Button, Avatar, Badge, Checkbox)
2. **Molecules** - Simple combinations of atoms (TopBar, InputBar, EventItem)
3. **Organisms** - Complex components (CalendarSection, TaskList, Sidebar)
4. **Layout** - Page-level wrappers (MainLayout)
5. **Pages** - Full page compositions (Home, HomeMobile, HomeDesktop)

## 🎯 TODO

### Immediate Priorities
- [ ] Replace placeholder SVG icons with actual design icons
- [ ] Add real calendar API integration
- [ ] Implement task persistence (localStorage/backend)
- [ ] Add animations and transitions
- [ ] Create additional pages (7 días, Mi calendario, Mis listas)

### Future Enhancements
- [ ] User authentication
- [ ] Backend API integration
- [ ] Real-time sync
- [ ] Notifications
- [ ] Task categories and labels
- [ ] Search and filtering

## 📝 Notes

- The app uses **Tailwind CSS v4** with CSS-based configuration (@theme)
- Icons are placeholder SVGs - replace with Figma design assets
- Mobile viewport is locked at 375px max-width for consistency
- Desktop layout shows sidebar at ≥768px breakpoint

---

Built with ❤️ by a Senior Frontend Developer
