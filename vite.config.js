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
    // Uses Rolldown's native codeSplitting API (Vite 8+)
    rolldownOptions: {
      output: {
        // Hashed filenames for immutable caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        codeSplitting: {
          groups: [
            // Core React runtime — rarely changes, maximise cache hit
            {
              test: /node_modules[\\/](?:react[\\/]|react-dom[\\/])/,
              name: 'vendor-react',
            },
            // Animation libraries — isolated so React chunk stays lean
            {
              test: /node_modules[\\/](motion|framer-motion)/,
              name: 'vendor-motion',
            },
            {
              test: /node_modules[\\/]gsap/,
              name: 'vendor-gsap',
            },
            // WebGL/3D — largest libs, isolated for parallel network fetch
            {
              test: /node_modules[\\/]ogl/,
              name: 'vendor-ogl',
            },
            {
              test: /node_modules[\\/]lenis/,
              name: 'vendor-lenis',
            },
            {
              test: /node_modules[\\/]@paper-design/,
              name: 'vendor-shaders',
            },
          ],
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