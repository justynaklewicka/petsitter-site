import { defineConfig } from 'astro/config';

export default defineConfig({
  publicDir: './public',
  vite: {
    server: {
      fs: {
        allow: ['.'], 
      },
    },
  },
});
