import { defineConfig } from 'astro/config';

export default defineConfig({
  publicDir: './public',
  
  server: {
    host: true,        
    port: 4321,        
    strictPort: true,  
  },
  
  vite: {
    server: {
      fs: {
        allow: ['.'], 
      },
    },
  },
});
