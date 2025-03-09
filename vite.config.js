import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/w
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "permissions-policy": "interest-cohort=()",
    },
  },
});
