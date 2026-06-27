# Helmy Elfiky — Portfolio Website

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-0055FF?style=flat&logo=framer)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat&logo=netlify)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

Personal portfolio website showcasing full-stack software projects, professional experience, and technical skills. Built with glassmorphism design, smooth animations, and full dark/light mode support.

**Live site:** [helmyelfiky.netlify.app](https://helmyelfiky.netlify.app)

---

## Preview

> _Screenshots coming soon_

---

## Features

- **Glassmorphism design** with deep navy dark mode and soft periwinkle light mode
- **Dark / Light mode toggle** persisted in localStorage
- **Animated project showcase** — Hero case study, Featured modal cards, Standard cards
- **Omni Portal deep-dive** — dedicated case study page with architecture breakdown
- **Filterable project grid** — filter by category with animated transitions
- **Animated experience timeline** — professional history and education
- **Netlify Forms contact** — zero backend, zero cost
- **Hidden archive route** — early and academic projects at `/archive`
- **Fully responsive** — mobile-first, tested across breakpoints
- **Performance optimized** — code-split archive page, lazy loaded images

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Routing | React Router v6 (HashRouter) |
| Icons | React Icons |
| Forms | Netlify Forms |
| Deployment | Netlify (free tier) |

---

## Project Structure

```
helmy-portfolio/
├── public/
│   ├── favicon.ico
│   ├── robots.txt          # Excludes /archive from indexing
│   └── images/
│       └── placeholder-avatar.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Fixed nav, glass on scroll, mobile hamburger
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx            # Typewriter, floating orbs, CTAs
│   │   │   ├── About.jsx           # Photo, bio, stats row
│   │   │   ├── Skills.jsx          # Grouped tech stack cards
│   │   │   ├── Projects.jsx        # Filter bar + tiered project grid
│   │   │   ├── Experience.jsx      # Animated timeline
│   │   │   └── Contact.jsx         # Netlify form + contact info
│   │   ├── ui/
│   │   │   ├── GlassCard.jsx       # Reusable glass card wrapper
│   │   │   ├── ProjectCard.jsx     # Standard (Tier 3) card
│   │   │   ├── ProjectModal.jsx    # Featured (Tier 2) modal
│   │   │   ├── HeroProjectCard.jsx # Full-width Omni Portal banner
│   │   │   ├── TechBadge.jsx       # Pill badge with icon
│   │   │   ├── ThemeToggle.jsx     # Animated sun/moon toggle
│   │   │   └── SectionHeader.jsx   # Consistent section headers
│   │   └── archive/
│   │       └── ArchivePage.jsx     # Hidden /archive route (code-split)
│   ├── data/
│   │   ├── projects.js             # All project data (main + archive)
│   │   └── skills.js               # Skills grouped by category
│   ├── hooks/
│   │   └── useTheme.js             # Dark/light mode hook
│   ├── styles/
│   │   └── globals.css             # Glass utilities, gradient text, glow
│   ├── App.jsx                     # Router + layout shell
│   └── main.jsx
├── netlify.toml                    # Build config + SPA redirects
├── tailwind.config.js              # Custom color tokens, dark mode class
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Local Development

```bash
# Clone the repo
git clone https://github.com/helmyelfiky/helmy-portfolio.git
cd helmy-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# Opens at http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output in /dist
```

### Preview Production Build

```bash
npm run preview
```

---

## Deployment

This site is deployed on **Netlify** with automatic deploys from the `main` branch.

Every push to `main` triggers a rebuild and redeploy. No manual steps required.

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for the full GitHub → Netlify pipeline setup.

---

## Adding a New Project

1. Open `src/data/projects.js`
2. Add your project to `mainProjects` (or `archiveProjects` for older work)
3. Use the existing object shape:

```js
{
  id: 'your-project-id',
  slug: 'your-project-slug',
  name: 'Project Name',
  tagline: 'One punchy sentence, max 12 words',
  shortDescription: 'Two sentences max.',
  fullDescription: 'Longer description for modal/case study.',
  techStack: {
    frontend: [],
    backend: [],
    database: [],
    devops: [],
    other: []
  },
  keyFeatures: ['Feature 1', 'Feature 2', 'Feature 3'],
  challenges: ['Challenge + how you solved it'],
  status: 'completed',           // 'completed' | 'in-progress' | 'archived'
  complexity: 'intermediate',    // 'beginner' | 'intermediate' | 'advanced'
  tier: 3,                       // 1 (hero) | 2 (featured) | 3 (standard)
  category: 'web-app',           // for filter bar
  tags: ['React', 'Node.js'],    // tech stack pills
  liveUrl: null,                 // or URL string
  githubUrl: null,               // or URL string — null shows "Internal Tool" badge
  isHero: false,
}
```

4. Commit and push — Netlify auto-deploys.

---

## Projects Featured

### Main Portfolio

| Project | Type | Tech |
|---|---|---|
| **Omni Portal** | Enterprise SaaS (Hero) | React, Node.js, Socket.IO, SQLite, Azure |
| **Agent Call Notes** | Internal Desktop Tool | Electron, SQLite, JS |
| **Enterprise Inventory System** | Internal Desktop Tool | Electron, SQLite, JS |
| **OSAT Analytics Dashboard** | Data Visualization | React, Recharts, SheetJS |
| **Pyramids Adhesives** | Freelance Landing Page | HTML, CSS, Vanilla JS, i18n |

### Archive (accessible at `/archive`)

| Project | Type | Tech |
|---|---|---|
| Personal Expense Tracker | Full-Stack Web App | Django, Python, Chart.js |
| Voice Based Image Caption Generator | AI / Deep Learning | Python, CNN, LSTM, Transformer |
| Vehicle Infotainment System | QA & Testing | Test case design, diagnostics |
| Shipping Service System | Backend | Java |
| Movies Database | Web App | MySQL, HTML, CSS |

---

## Contact

**Helmy Youssef Elfiky**
- Email: helmyelfiky@gmail.com
- LinkedIn: [linkedin.com/in/helmyelfiky](https://linkedin.com/in/helmyelfiky)
- GitHub: [github.com/helmyelfiky](https://github.com/helmyelfiky)
- Location: Cairo, Egypt

---

## License

MIT License — feel free to use the structure and code as inspiration for your own portfolio. Please don't copy the content (bio, project descriptions, personal details).

---

_Built with React, Tailwind CSS, and Framer Motion. Deployed on Netlify._
