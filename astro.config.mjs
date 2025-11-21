import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

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

  build: {
    outDir: 'dist', 
  },

  base: '/',  

  site: "https://przystanekdundee.vercel.app/",
  integrations: [sitemap()],
});
