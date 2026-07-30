import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Target modern browsers for smaller, faster output
    target: 'es2020',
    // Inline assets smaller than 4kb (reduces requests)
    assetsInlineLimit: 4096,
    // Emit source maps for Vercel error tracking (hidden from users)
    sourcemap: false,
    // Chunk strategy: split vendor libs from app code for better cache hits
    rollupOptions: {
      output: {
        // Hashed filenames for immutable caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks(id) {
          // Core React runtime — rarely changes, maximise cache hit
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          // Animation libraries — isolated so React chunk stays lean
          if (id.includes('node_modules/motion') || id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/gsap')) {
            return 'vendor-gsap';
          }
          // WebGL/3D — largest libs, isolated for parallel network fetch
          if (id.includes('node_modules/ogl')) {
            return 'vendor-ogl';
          }
          if (id.includes('node_modules/lenis')) {
            return 'vendor-lenis';
          }
          if (id.includes('node_modules/@paper-design')) {
            return 'vendor-shaders';
          }
        },
      },
    },
    // Raise chunk warning limit to 600kb (we've split manually above)
    chunkSizeWarningLimit: 600,
  },
  // Allow deep imports for libraries that need it
  optimizeDeps: {
    include: ['react', 'react-dom', 'motion', 'gsap', 'lenis', 'ogl'],
  },
})

