import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/SessFem/",
  publicPath: process.env.NODE_ENV === "production" ? "/Vue-project/" : "/",
  plugins: [vue()],
});
