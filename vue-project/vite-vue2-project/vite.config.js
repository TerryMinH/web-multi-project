/*
 * @Author: TerryMin
 * @Date: 2022-09-15 09:28:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-20 11:33:48
 * @Description: file not
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";
import resolveExternalsPlugin from "vite-plugin-resolve-externals"; // externals插件配置
import { visualizer } from "rollup-plugin-visualizer"; // 打包分析工具

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    resolveExternalsPlugin({
      jquery: "jQuery", // 这个名字可以直接打印window，看window上挂的是什么名字，就写什么名字
    }),
    visualizer(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
