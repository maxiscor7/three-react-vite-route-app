import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/three-react-vite-route-app/',  // Reemplaza 'NOMBRE-DEL-REPOSITORIO' con el nombre de tu repositorio.
});