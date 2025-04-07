import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    ],
    server: {
      proxy: {
        "/api": {
          target: env.API_BASE_URL as string,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
