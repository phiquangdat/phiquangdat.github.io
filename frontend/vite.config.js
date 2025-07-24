import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load .env from the repo root
  const env = loadEnv(mode, path.resolve(__dirname, ".."), "");
  return {
    plugins: [react()],
    define: {
      "import.meta.env": env,
    },
  };
});
