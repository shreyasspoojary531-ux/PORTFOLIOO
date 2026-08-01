# Shreyas S Poojary — Portfolio

[![Vite](https://img.shields.io/badge/Vite-8.1.5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-000000?style=flat-square)](LICENSE)

A high-contrast monochrome digital portfolio built for **Shreyas S Poojary** — Product Engineer & Systems Architect. Features custom OGL WebGL shaders, scrollytelling interactions, and a focus on performance and typography.

🌐 **Live site**: [shreyas-poojary.vercel.app](https://shreyas-poojary.vercel.app/)

---

## Tech Stack

| Layer | Technologies Used |
|---|---|
| **Core Framework** | React 19, Vite 8 (Rolldown) |
| **Styling & Design Tokens** | Tailwind CSS v4, Vanilla CSS |
| **Animation** | Motion, GSAP 3 (ScrollTrigger), Lenis Smooth Scroll |
| **Graphics & WebGL** | OGL, Custom GLSL Fragment Shaders |
| **DevOps & Hosting** | Vercel (Edge CDN, immutable caching, security headers) |

---

## Project Structure

```
PORT/
├── public/
│   ├── assets/               # Compressed image assets
│   └── favicon.svg           # Custom SVG favicon
├── scripts/
│   └── compress-assets.mjs   # Image compression script
├── src/
│   ├── components/
│   │   ├── layout/           # Container, Section, Navbar, SmoothScroll
│   │   ├── sections/         # Hero, About, Projects, RollOfHonor, Expertise, etc.
│   │   └── ui/               # OGL SideRays, CircularGallery, OptionWheel
│   ├── lib/
│   │   ├── animations.js     # Shared easing curves
│   │   └── constants.js      # Portfolio content and project data
│   ├── App.jsx               # Lazy-loaded main layout
│   ├── index.css             # Tailwind CSS v4 setup
│   └── main.jsx              # Application entry point
├── index.html                # SEO metadata, Open Graph, Twitter card
├── vercel.json               # Vercel routing & headers
└── vite.config.js            # Rolldown build configuration
```

---

## Getting Started

### Prerequisites

* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### Install & Run

```bash
git clone https://github.com/shreyasspoojary531-ux/PORT.git
cd PORT
npm install
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Build for production
npm run preview    # Preview production build
```

---

## Deployment

This project is pre-configured for Vercel deployment:

1. Push the repository to GitHub.
2. Import into Vercel Dashboard.
3. Vercel auto-detects the Vite framework and applies settings from `vercel.json`.

---

## License

MIT