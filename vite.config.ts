import { defineConfig, loadEnv } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { minifyHtml, injectHtml } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), minifyHtml(), injectHtml()],
  build: {
    chunkSizeWarningLimit: 1000,
    assetsDir: "assets",
  },
});
