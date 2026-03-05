import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on all network interfaces
    port: 5173,
    watch: {
      usePolling: true, // ensures HMR detects changes on mounted volumes
    },
  },
});
