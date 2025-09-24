import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/booknest/',  // ✅ Base URL for Tomcat deployment
  plugins: [react()],
  build: {
    outDir: 'dist',      // Ensure the output directory is 'dist'
    assetsDir: 'assets', // Keep assets inside 'assets' folder
    rollupOptions: {
      output: {
        // Preserve entry file names
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
});
