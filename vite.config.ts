import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    open: true, // Optional: auto open browser
  },
  build: {
    outDir: 'dist',
  },
  // 🔥 This fixes 404s on refresh and direct route access
  resolve: {
    alias: {
      '@': '/src', // Optional alias for cleaner imports
    },
  },
  base: './', // Ensures relative paths work (especially for GitHub Pages)
});
