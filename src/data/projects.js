// src/data/projects.js
// All project data for Helmy Elfiky's portfolio
// Main projects (shown on homepage) + Archive projects (shown at /archive)

// ─────────────────────────────────────────────
// MAIN PROJECTS (5 projects, tiered display)
// ─────────────────────────────────────────────

export const mainProjects = [

  // ─────────────────────────────────────────────
  // TIER 1 — HERO PROJECT (full case study page)
  // ─────────────────────────────────────────────

  {
    id: 'omni-portal',
    slug: 'omni-portal',
    name: 'Omni Portal',
    tagline: 'Multi-system ops platform for call-center break scheduling and QA scoring.',
    logo: '/images/omni-portal-logo.png',
    screenshots: ['/screenshots/omni-1.png', '/screenshots/omni-2.png'],
    shortDescription:
      'A real-time workforce operations portal that schedules agent breaks, enforces capacity and shift rules, and runs a full QA call-scoring workflow. Built for call-center team leads and admins managing dozens of agents across overnight shifts.',
    fullDescription: `Omni Portal is a multi-system internal platform built around a launchpad that hosts three distinct applications — a Break Management system, a QA call-auditing system, and an Employees/RBAC administration system — under one authenticated React shell.

The core problem it solves is the chaos of manually coordinating breaks for a large call-center floor: agents get two breaks a day with minimum-gap rules, slots have hard capacity limits, shifts restrict which slots are usable, and overnight shifts cross the midnight boundary where naive date logic silently breaks. On top of that, team leads need live visibility into who is on break, who is overdue, and quality scoring for recorded calls.

Technically it is a Node.js/Express + SQLite backend with a strict routes→controllers→services layering, a React + Vite frontend organized by feature systems, and Socket.IO for live dashboard updates. Business-day logic is centralized in a single localDate.js module that rolls the day over at 5 AM Egypt time and is DST-aware, so overnight breaks are attributed to the correct calendar day. A configurable rules table drives every timing threshold rather than hardcoding them. Secrets are pulled from Azure Key Vault at boot, PII is encrypted at rest with AES, and a custom RBAC layer with roles, permissions, agent types, and audit logging gates every privileged action.`,
    problem:
      'Coordinating two daily breaks for a large call-center floor by hand is error-prone: slots overflow capacity, agents take breaks outside their shift, gaps between breaks are not enforced, and overnight shifts crossing midnight get attributed to the wrong day. Team leads also lack live visibility into who is overdue and have no structured way to score call quality.',
    solution:
      'A layered Express/SQLite backend (routes→controllers→services) with Socket.IO live updates, all date logic funneled through a single 5-AM-boundary DST-aware localDate module, and every timing threshold driven by a configurable rules table. A multi-system React/Vite frontend hosts Breaks, QA, and RBAC apps behind one auth shell, with secrets in Azure Key Vault and PII encrypted at rest.',
    challenges: [
      {
        title: 'Overnight Date Attribution',
        description:
          'Overnight shifts crossing midnight mis-attributed breaks to the wrong calendar day. Solved by banning raw new Date() and routing all date logic through localDate.js with a 5 AM business-day boundary and DST-aware Egypt offset.',
      },
      {
        title: 'Break Overrun Accounting',
        description:
          'Agents abusing break length. Implemented overrun accounting in breakService.endBreak/getActiveSessions that computes overrun_seconds and deducts a Break-1 overrun from the agent\'s Break-2 duration allowance.',
      },
      {
        title: 'Azure Key Vault Encryption Key Ordering',
        description:
          'Key Vault overriding the App Service ENCRYPTION_KEY caused decrypt mismatches and 401s on the seeded system_owner account. Fixed by deferring syncOwnerPassword() until after loadEncryptionKey() resolves.',
      },
      {
        title: 'Live Schema Evolution',
        description:
          'Evolving a live production schema safely — handled via 12+ incremental numbered migrations plus phased email/name/password/security migrations and a users-table CHECK-constraint rebuild to add the system_owner role.',
      },
      {
        title: 'AI Architectural Context',
        description:
          'Giving AI assistants architectural context without grepping 70+ files — built a graphify knowledge-graph pipeline and a read-only MCP server exposing god-node/community/query tools.',
      },
    ],
    techStack: {
      frontend: ['React 18', 'Vite 5', 'React Router 6', 'Recharts', 'TipTap', 'Tailwind CSS', 'Socket.IO client'],
      backend: ['Node.js', 'Express 4', 'Socket.IO', 'JWT', 'bcryptjs', 'Helmet', 'express-rate-limit', 'Multer'],
      database: ['SQLite'],
      devops: ['Azure App Service', 'Azure Files (SMB)', 'Azure Key Vault', 'Render'],
      other: ['Chrome Extension', 'Model Context Protocol (MCP) server', 'Knowledge Graph', 'VAPID Web Push', 'AES Encryption'],
    },
    keyFeatures: [
      { icon: 'FiRadio', label: 'Real-time Dashboard', description: 'Socket.IO live team status — who is on break, on shift, or overdue, updating without refresh.' },
      { icon: 'FiClock', label: 'Break Overrun Accounting', description: 'Break-1 overrun time is automatically deducted from the agent\'s Break-2 allowance.' },
      { icon: 'FiShield', label: 'Custom RBAC Layer', description: 'Roles, permissions, agent types, and a role_audit_log enforced by requirePermission middleware.' },
      { icon: 'FiFileText', label: 'Full QA Audit System', description: 'Rubric-driven call scoring matrix with drafts, coaching notes, analytics, and Excel import/export.' },
      { icon: 'FiSettings', label: 'Configurable Rules Engine', description: 'All timing thresholds (break gaps, stuck windows, ending-soon alerts) driven by a runtime rules table.' },
      { icon: 'FiCpu', label: 'MCP Server & Knowledge Graph', description: 'A read-only MCP server and graphify knowledge graph feed codebase context to AI assistants.' },
    ],
    status: 'in-progress',
    complexity: 'advanced',
    tier: 1,
    isHero: true,
    category: 'enterprise',
    tags: ['React', 'Node.js', 'Express', 'SQLite', 'Socket.IO', 'JWT', 'Azure', 'Vite', 'RBAC', 'MCP'],
    liveUrl: 'https://breakmanagement-arb7h6hbgaepemec.uaenorth-01.azurewebsites.net',
    githubUrl: null,
    isInternalTool: false,
    enterpriseNote: 'Repository hosted on IBM Enterprise GitHub (private). Live demo available above.',
    highlights: [
      { icon: '🔴', label: 'Live on Azure' },
      { icon: '☁️', label: 'Azure Key Vault' },
      { icon: '⚡', label: 'Socket.IO Real-time' },
      { icon: '🔒', label: 'Custom RBAC' },
    ],
  },

  // ─────────────────────────────────────────────
  // TIER 2 — FEATURED PROJECTS (modal on click)
  // ─────────────────────────────────────────────

  {
    id: 'agent-call-notes',
    slug: 'agent-call-notes',
    name: 'Agent Call Notes',
    tagline: 'Desktop support tool streamlining technical support workflows for Lenovo agents.',
    logo: '/images/agents-notes-logo.ico',
    screenshots: [
      '/screenshots/agent-notes-1.png',
      '/screenshots/agent-notes-2.png',
      '/screenshots/agent-notes-3.png',
      '/screenshots/agent-notes-4.png',
    ],
    shortDescription:
      'An Electron-based desktop application built for technical support agents handling Lenovo hardware cases. Combines note-taking, analytics tracking, callback scheduling, and SSR workflow management into a unified productivity tool.',
    fullDescription: `Agent Call Notes is a comprehensive desktop application designed specifically for technical support agents managing Lenovo hardware support cases at IBM. The application addresses the complexity of juggling multiple systems, tracking case details, managing callbacks across time zones, and maintaining consistent documentation standards during high-volume support operations.

The solution implements a modular ES6 architecture with 23+ feature modules coordinating through a centralized event system. Core functionality includes intelligent form validation, real-time analytics with automatic daily/monthly resets, timezone-aware callback scheduling with floating notification windows, and a sophisticated database migration system. The app uses better-sqlite3 for local data persistence with 11 normalized tables, IPC-based Electron architecture with 60+ secure channels, and a custom template engine supporting dynamic variable replacement for email generation.`,
    keyFeatures: [
      'Modular ES6 architecture with 23 feature modules coordinated through a centralized event-manager for loose coupling',
      'Intelligent callback scheduling with timezone-aware notifications across 5 US time zones, 15-minute advance reminders, and snooze functionality',
      'Analytics dashboard with automatic daily reset at 6 AM and monthly archival on the 1st, tracking PPSNR, work order types, and transfer metrics',
      '\'For You\' personalized dashboard surfacing CRU cases, FOP follow-ups, and important cases with one-click email template generation',
      'Secure IPC architecture with 60+ channels exposed through preload.js contextBridge',
    ],
    technicalHighlight:
      'The schedulingManager implements precise callback notifications using setTimeout with millisecond-accurate timezone conversions, storing timeout IDs in a Map<callbackId, Date> for cleanup. A separate database migration system checks 5 possible legacy database locations, creates timestamped backups, and handles schema evolution without data loss — critical because user data existed in different paths depending on installation history.',
    topChallenge: {
      problem: 'Callback notifications needed to fire at exact times across 5 US time zones from a desktop app that may restart between sessions.',
      solution: 'Implemented setTimeout-based scheduling (more reliable than polling) with a notifiedCallbackIds Set to prevent duplicate notifications across restarts, and timezone conversion logic supporting Cairo, Eastern, Central, Mountain, and Pacific time.',
    },
    techStack: {
      frontend: ['Vanilla JavaScript (ES6 Modules)', 'Tailwind CSS', 'HTML5'],
      backend: ['Electron', 'Node.js'],
      database: ['SQLite (better-sqlite3)'],
      devops: ['electron-builder', 'electron-rebuild'],
      other: ['IPC / contextBridge', 'SheetJS (XLSX)', 'Event-driven architecture'],
    },
    status: 'completed',
    complexity: 'advanced',
    tier: 2,
    isHero: false,
    category: 'desktop-app',
    tags: ['Electron', 'SQLite', 'JavaScript', 'Node.js', 'Tailwind CSS', 'IPC', 'ES6 Modules'],
    liveUrl: null,
    githubUrl: null,
    isInternalTool: true,
    enterpriseNote: 'Internal IBM tool — not publicly available.',
  },

  {
    id: 'enterprise-inventory',
    slug: 'enterprise-inventory-management',
    name: 'Enterprise Inventory Management',
    tagline: 'Desktop app for tracking IT hardware with Excel integration.',
    logo: '/images/Inventory-management-logo.ico',
    screenshots: ['/screenshots/inventory-1.png'],
    shortDescription:
      'A secure Electron-based desktop application for managing enterprise IT inventory including MIFI devices, headsets, monitors, and laptops. Features advanced replacement tracking, bulk Excel import/export, and offline-first SQLite storage.',
    fullDescription: `Enterprise Inventory Management System addresses the challenge of tracking thousands of IT assets across an organization without relying on cloud infrastructure. The solution implements a desktop-first architecture using Electron.js with a secure IPC bridge between the renderer and main processes.

The backend leverages better-sqlite3 for synchronous database operations capable of handling large datasets, with automatic schema migrations tracked in a dedicated migrations table. The Excel integration uses the xlsx library to parse and generate spreadsheets with intelligent column mapping, supporting three import modes (append, merge, overwrite) and multi-sheet exports that include replacement history. The repository pattern abstracts database operations across four product categories, each with category-specific tables joined to a common products table via foreign keys with CASCADE deletion.`,
    keyFeatures: [
      'Multi-category inventory management (MIFI, Headset, Monitor, Laptop) with category-specific fields stored in separate joined tables',
      'Replacement history tracking system with dedicated tables (mifi_replacements, laptop_replacements) supporting full CRUD through modal interfaces',
      'Excel bulk import with three modes: append (skip duplicates), merge (update existing + add new), overwrite (replace all data), with intelligent column mapping',
      'Secure IPC architecture using contextBridge with context isolation enabled, nodeIntegration disabled, and curated API surface in preload.js',
      'Automatic database migration system that tracks executed migrations transactionally and handles schema evolution across versions',
    ],
    technicalHighlight:
      'The Excel import handler supports three distinct strategies with intelligent column mapping — one of the harder UX problems in enterprise tools. The secure IPC bridge exposes only necessary CRUD operations through contextBridge while maintaining context isolation and disabled nodeIntegration, preventing XSS attacks from renderer content. Database uses foreign key constraints with CASCADE deletion to maintain referential integrity across the products parent table and four category-specific child tables.',
    topChallenge: {
      problem: 'Managing enterprise IT assets across 4 device categories with different schemas, while supporting bulk Excel import from arbitrary column formats.',
      solution: 'Implemented a repository pattern per category with a shared products parent table and category-specific child tables joined via foreign keys. Built a three-mode Excel import system (append/merge/overwrite) with automatic column mapping that validates data before bulk insertion.',
    },
    techStack: {
      frontend: ['Vanilla JavaScript (ES6 Modules)', 'HTML5', 'Tailwind CSS'],
      backend: ['Electron.js', 'Node.js'],
      database: ['SQLite (better-sqlite3)'],
      devops: ['electron-builder'],
      other: ['xlsx (SheetJS)', 'IPC / contextBridge', 'Repository Pattern'],
    },
    status: 'completed',
    complexity: 'advanced',
    tier: 2,
    isHero: false,
    category: 'desktop-app',
    tags: ['Electron.js', 'SQLite', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Excel', 'IPC'],
    liveUrl: null,
    githubUrl: null,
    isInternalTool: true,
    enterpriseNote: 'Internal IBM tool — not publicly available.',
  },

  // ─────────────────────────────────────────────
  // TIER 3 — STANDARD CARDS
  // ─────────────────────────────────────────────

  {
    id: 'osat-dashboard',
    slug: 'osat-analytics-dashboard',
    name: 'OSAT Analytics Dashboard',
    tagline: 'Client-side Excel analytics with interactive charts and dark mode.',
    shortDescription:
      'A React-based analytics dashboard for OSAT (Overall Satisfaction) survey data. Upload Excel files, visualize score distributions, category breakdowns, and vendor performance — entirely in the browser, zero backend.',
    techStack: {
      frontend: ['React 18', 'Tailwind CSS v4', 'Recharts'],
      backend: [],
      database: [],
      devops: ['Vite'],
      other: ['SheetJS (xlsx)', 'Axios'],
    },
    status: 'completed',
    complexity: 'intermediate',
    tier: 3,
    isHero: false,
    category: 'web-app',
    tags: ['React', 'Recharts', 'Tailwind CSS', 'Vite', 'SheetJS'],
    liveUrl: null,
    githubUrl: null,
    isInternalTool: true,
  },

  {
    id: 'pyramids-adhesives',
    slug: 'pyramids-adhesives',
    name: 'Pyramids Adhesives',
    tagline: 'Multilingual B2B landing page for an Egyptian industrial manufacturer.',
    shortDescription:
      'A responsive multilingual landing website for a company specializing in adhesive manufacturing. Built with pure HTML, CSS, and JavaScript — custom i18n system supporting English, Arabic (RTL), and French with zero page reloads.',
    techStack: {
      frontend: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'CSS Grid', 'CSS Custom Properties'],
      backend: [],
      database: [],
      devops: ['Netlify', 'Vercel'],
      other: ['AOS', 'Splide.js', 'FontAwesome', 'FormSubmit'],
    },
    status: 'completed',
    complexity: 'intermediate',
    tier: 3,
    isHero: false,
    category: 'freelance',
    tags: ['Vanilla JS', 'CSS Grid', 'i18n', 'RTL Support', 'B2B', 'Responsive'],
    liveUrl: null,
    githubUrl: null,
    isInternalTool: false,
  },
]

// ─────────────────────────────────────────────
// ARCHIVE PROJECTS (shown at /archive only)
// ─────────────────────────────────────────────

export const archiveProjects = [

  {
    id: 'expense-tracker',
    slug: 'personal-expense-tracker',
    name: 'Personal Expense Tracker',
    tagline: 'Multi-user financial management with family account support.',
    screenshots: [
      '/screenshots/exp-1.png',
      '/screenshots/exp-2.png',
      '/screenshots/exp-3.png',
      '/screenshots/exp-4.png',
      '/screenshots/exp-5.png',
      '/screenshots/exp-6.png',
      '/screenshots/exp-7.png',
    ],
    shortDescription:
      'A Django-based web application for tracking personal and family finances with real-time balance calculations and Chart.js analytics. Supports individual and family account types with role-based access.',
    techStack: {
      frontend: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5', 'Chart.js', 'jQuery'],
      backend: ['Python 3.10', 'Django 5.1', 'Django Crispy Forms'],
      database: ['SQLite3'],
      devops: ['Docker', 'Docker Compose', 'Gunicorn'],
      other: ['Pandas', 'NumPy', 'OpenPyXL'],
    },
    status: 'completed',
    complexity: 'intermediate',
    tier: 3,
    isHero: false,
    category: 'fullstack',
    tags: ['Django', 'Python', 'SQLite', 'Chart.js', 'Bootstrap', 'Docker'],
    liveUrl: null,
    githubUrl: null,
    note: 'Freelance full-stack project',
  },

  {
    id: 'image-caption-generator',
    slug: 'voice-based-image-caption-generator',
    name: 'Voice Based Image Caption Generator',
    tagline: 'Deep learning accessibility tool for the visually impaired.',
    shortDescription:
      'B.Sc. graduation project — a mobile app that generates spoken captions for images using two deep learning architectures (CNN+LSTM and CNN+Transformer), evaluated with BLEU scores. Built to improve visual content accessibility for visually impaired users.',
    techStack: {
      frontend: ['Mobile Application'],
      backend: ['Python'],
      database: [],
      devops: [],
      other: ['CNN (VGG16)', 'LSTM', 'Transformer', 'Flickr Dataset', 'BLEU Evaluation', 'Text-to-Speech'],
    },
    status: 'completed',
    complexity: 'advanced',
    tier: 3,
    isHero: false,
    category: 'ai-ml',
    tags: ['Python', 'Deep Learning', 'CNN', 'LSTM', 'Transformer', 'Computer Vision', 'NLP'],
    liveUrl: null,
    githubUrl: null,
    note: 'Graduation Project — Arab Academy for Science, Technology & Maritime Transport, July 2024. Team of 5.',
  },

  {
    id: 'vehicle-infotainment',
    slug: 'vehicle-infotainment-system',
    name: 'Vehicle Infotainment System',
    tagline: 'End-to-end QA testing for automotive software.',
    shortDescription:
      'Designed and executed comprehensive test cases for a vehicle infotainment system at Valeo. Conducted diagnostics and documented software defects across functionality, performance, and usability dimensions.',
    techStack: {
      frontend: [],
      backend: [],
      database: [],
      devops: [],
      other: ['Software Testing', 'Test Case Design', 'Defect Documentation', 'Diagnostics'],
    },
    status: 'completed',
    complexity: 'intermediate',
    tier: 3,
    isHero: false,
    category: 'qa-testing',
    tags: ['Software Testing', 'QA', 'Test Cases', 'Automotive', 'Diagnostics'],
    liveUrl: null,
    githubUrl: null,
    note: 'Valeo Project — QA & Testing engagement. No source code.',
  },

  {
    id: 'shipping-service-system',
    slug: 'shipping-service-system',
    name: 'Shipping Service System',
    tagline: 'Package tracking and delivery driver management system.',
    shortDescription:
      'A shipping management system capable of tracking package delivery status and monitoring delivery drivers across routes. Built as an academic Java project.',
    techStack: {
      frontend: [],
      backend: ['Java'],
      database: [],
      devops: [],
      other: [],
    },
    status: 'completed',
    complexity: 'beginner',
    tier: 3,
    isHero: false,
    category: 'backend',
    tags: ['Java', 'OOP', 'Backend'],
    liveUrl: null,
    githubUrl: null,
    note: 'Academic project.',
  },

  {
    id: 'movies-database',
    slug: 'movies-database',
    name: 'Movies Database',
    tagline: 'IMDB-style movie and series database with ratings and cast.',
    shortDescription:
      'A responsive movie and series database with information on ratings, cast, and awards — built with MySQL and a custom HTML/CSS user interface.',
    techStack: {
      frontend: ['HTML', 'CSS'],
      backend: [],
      database: ['MySQL'],
      devops: [],
      other: [],
    },
    status: 'completed',
    complexity: 'beginner',
    tier: 3,
    isHero: false,
    category: 'web-app',
    tags: ['MySQL', 'HTML', 'CSS', 'Database Design'],
    liveUrl: null,
    githubUrl: null,
    note: 'Academic project.',
  },
]

// ─────────────────────────────────────────────
// FILTER CATEGORIES (for the project grid filter bar)
// ─────────────────────────────────────────────

export const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'desktop-app', label: 'Desktop App' },
  { id: 'web-app', label: 'Web App' },
  { id: 'freelance', label: 'Freelance' },
]

// ─────────────────────────────────────────────
// HELPER — get project by slug
// ─────────────────────────────────────────────

export const getProjectBySlug = (slug) =>
  [...mainProjects, ...archiveProjects].find((p) => p.slug === slug) || null
