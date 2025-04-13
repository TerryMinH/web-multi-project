/*
 * @Author: TerryMin
 * @Date: 2025-04-13 15:06:40
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-13 15:20:01
 * @Description: file not
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/gateway": "http://36.155.98.130/",
      "/mgs": "http://m.miguvideo.com",
      "/userCenterLogin": "http://m.miguvideo.com",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  },
});
