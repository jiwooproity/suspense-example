import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/suspense-example",
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    minify: true,
    outDir: "./build",
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
