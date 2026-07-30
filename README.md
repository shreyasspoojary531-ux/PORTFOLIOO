# Shreyas S Poojary — Award-Quality Editorial Portfolio

[![Vite](https://img.shields.io/badge/Vite-8.1.5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-000000?style=flat-square)](LICENSE)

An award-quality, high-contrast monochrome digital portfolio built for **Shreyas S Poojary** — Product Engineer & Systems Architect. Engineered with precision typography, custom OGL WebGL shaders, scrollytelling mathematics, and lightweight zero-dependency UI architectures.

---

## ✨ Architectural Highlights

* **High-Contrast Monochrome Design System**: Full black & white (`#000000` / `#FFFFFF`) editorial aesthetic inspired by high-end engineering spec documents and print journalism.
* **WebGL Shaders (`OGL`)**: Custom reactive ray fan visual effects (`SideRays.jsx`) and 3D circular gallery shader planes (`circular-gallery.jsx`).
* **Scrollytelling & Wheel Mathematics**: Interactive 3D option wheel with dual-mode support — pinned GSAP `ScrollTrigger` scrollytelling on desktop, and clean collapsible FAQ accordions on mobile.
* **Mobile-First Touch Architecture**: Infinite horizontal auto-scroll marquees moving in counter-opposing directions for mobile visual contrast (`RollOfHonor` vs `LifeInFrames`).
* **Performance & Asset Optimization**:
  * **Code Splitting**: `React.lazy` & `Suspense` for below-the-fold sections with 2-second `requestIdleCallback` prefetching.
  * **Rolldown Vendor Chunking**: Manual chunking into 7 vendor bundles (`vendor-react`, `vendor-motion`, `vendor-gsap`, `vendor-ogl`, `vendor-lenis`, `vendor-shaders`).
  * **Sharp Image Compression**: 3.2MB+ total asset compression with WebP/mozjpeg rendering.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
|---|---|
| **Core Framework** | React 19, Vite 8 (Rolldown) |
| **Styling & Design Tokens** | Tailwind CSS v4 (inline theme definitions), Vanilla CSS |
| **Animation & Kinetics** | Motion (`motion/react`), GSAP 3 (ScrollTrigger), Lenis Smooth Scroll |
| **Graphics & WebGL** | OGL (Lightweight 3D WebGL Library), Custom GLSL Fragment Shaders |
| **DevOps & Hosting** | Vercel (Edge CDN, immutable asset caching, security headers) |

---

## 📂 Project Structure

```
PORT/
├── public/
│   ├── assets/               # Compressed image assets (Certs, Frames, Avatars)
│   └── favicon.svg           # High-contrast geometric monogram SVG favicon
├── scripts/
│   └── compress-assets.mjs   # Automated sharp image compression script
├── src/
│   ├── animations/           # Reusable Motion animation wrappers (FadeIn, LineReveal)
│   ├── components/
│   │   ├── layout/           # Container, Section, Navbar, SmoothScroll
│   │   ├── sections/         # Hero, About, Projects, RollOfHonor, Expertise, LifeInFrames, GitHub, Contact
│   │   └── ui/               # OGL SideRays, CircularGallery, OptionWheel, ShinyText
│   ├── lib/
│   │   ├── animations.js     # Shared cubic-bezier easing curves
│   │   └── constants.js      # Portfolio text content, milestones, and project data
│   ├── App.jsx               # Lazy-loaded main layout container
│   ├── index.css             # Tailwind CSS v4 setup & custom scrollbars
│   └── main.jsx              # Application entry point
├── index.html                # SEO-hardened metadata, Open Graph, Twitter cards & JSON-LD
├── vercel.json               # Vercel SPA rewrites & security headers
└── vite.config.js            # Rolldown build optimizations & manual chunking
```

---

## ⚡ Getting Started

### Prerequisites

* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shreyasspoojary531-ux/PORT.git
   cd PORT
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment (Vercel)

This repository is pre-configured for one-click deployment on **Vercel**:

1. Push your repository to GitHub.
2. Import the project into your Vercel Dashboard.
3. Vercel automatically detects `vite` framework settings and uses `vercel.json` for routing & cache headers.

---

## 📄 License

This project is open-source under the **MIT License**.
