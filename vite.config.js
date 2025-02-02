import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// vite.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': 'https://your-netlify-site.netlify.app/.netlify/functions/proxy', // URL of your deployed Netlify function
    },
  },
});

