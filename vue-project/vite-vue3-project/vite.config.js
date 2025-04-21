/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:16
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-21 10:27:33
 * @Description: file not
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

function viteTransformPlugin() {
  return {
      // 插件名称
      name: 'vite-transform-plugin',
      // transform 钩子，在模块加载时执行
      transform(code, id) {
        // console.log('transform==>', id);
          // 检查文件是否为 .js 文件
          if (id.endsWith('.js')) {
              // 执行代码转换，将 HELLO 替换为 WORLD
              const transformedCode = code.replace(/HELLO/g, 'WORLD');
              // 返回转换后的代码
              return {
                  code: transformedCode,
                  map: null // 如果不需要源映射，可以设为 null
              };
          }
          // 如果文件不匹配，返回原始代码
          return null;
      }
  };
}

function myVitePlugin() {
  return {
      // 插件名称
      name: 'my-vite-plugin',
      // 配置钩子，在Vite启动时调用
      configResolved(config) {
          console.log('构建开始');
      },
      // 构建完成钩子，在构建完成后调用
      closeBundle() {
          console.log('构建结束');
      }
  };
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteTransformPlugin(),myVitePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  server: {
    host: "0.0.0.0", // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 将监听所有地址，包括局域网和公网地址
  },
});
