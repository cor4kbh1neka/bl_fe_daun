import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/users": {
        target: "https://c0rh4kq.leafwgag.com",
        changeOrigin: true,
        secure: true,
        credentials: "omit",
      },
      "/authentications": {
        target: "https://c0rh4kq.leafwgag.com",
        changeOrigin: true,
        secure: true,
        credentials: "omit",
      },
      "/api": {
        target: "https://c0rh4kq.leafwgag.com",
        changeOrigin: true,
        secure: true,
        credentials: "omit",
      },
      "/prx": {
        target: "https://c0rh4kq.leafwgag.com",
        changeOrigin: true,
        secure: true,
        credentials: "omit",
      },
      "/memo": {
        target: "https://c0rh4kq.leafwgag.com",
        changeOrigin: true,
        secure: true,
        credentials: "omit",
      },
      "/banks": {
        target: "https://c0rh4kq.leafwgag.com",
        changeOrigin: true,
        secure: true,
        credentials: "omit",
      },
      "/content": {
        target: "https://back-staging.bosraka.com",
        changeOrigin: true,
        secure: false,
        credentials: "omit",
      },
      "/content": {
        target: "https://c0rh4kq.leafwgag.com",
        changeOrigin: true,
        secure: true,
        credentials: "omit",
      },
    },
  },
});
