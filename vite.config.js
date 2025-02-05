import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/PortafolioPersonal/', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: true, // Abre el navegador al iniciar el servidor
  },
  build: {
    outDir: 'dist', // Directorio de salida para la compilación
  },
});
