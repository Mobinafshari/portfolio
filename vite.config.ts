import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@styles": "/src/styles",
      "@features": "/src/features",
      "@assets": "/src/assets",
    },
  },
});
