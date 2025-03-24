/*
 * @Author: TerryMin
 * @Date: 2023-11-14 14:02:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-23 11:25:07
 * @Description: file not
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    // 如果你还有其他需要定义的特性标志，也可以在这里添加
    // 例如 __VUE_OPTIONS_API__: true 
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
})
