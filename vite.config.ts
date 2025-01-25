import { defineConfig } from 'vite';

export default defineConfig({
  base: '/me/', // Replace <REPO_NAME> with your GitHub repository name which is me
  build: {
    outDir: 'dist',
  },
});