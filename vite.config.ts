import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace with your actual repository name
const repoName = 'Website';

export default defineConfig(({ mode }) => ({
  // Use empty base for custom domain, repo name for GitHub Pages
  base: mode === 'production' ? (process.env.CUSTOM_DOMAIN ? '/' : `/${repoName}/`) : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
