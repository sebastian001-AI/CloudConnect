import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    rewrite: (path) => path.startsWith('/api') ? path : '/index.html', // Ensure fallback to index.html for React Router
  },
});
