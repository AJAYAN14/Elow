import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Essential for Chrome Extension to load assets via relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
