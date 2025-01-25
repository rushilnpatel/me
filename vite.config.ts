import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/me/', // Replace <REPO_NAME> with your GitHub repository name
  root: path.resolve(__dirname, '.'),
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    fs: {
      allow: ['src']
    }
  }
});