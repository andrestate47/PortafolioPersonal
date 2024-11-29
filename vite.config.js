import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/PortafolioAndres/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'shadcn-ui': path.resolve(__dirname, './node_modules/shadcn-ui') 
    }
  }
});
