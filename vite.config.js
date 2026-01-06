import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import createSitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSitemap({
      hostname: 'https://www.revovest.in/', 
      dynamicRoutes: [ 
        '/about', 
        '/noc', 
        '/structural-stability',
        '/clearance',
        '/approvals',
        '/contact-us',
      ],
    }),
  ],
});
