/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:16
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-04-07 11:09:11
 * @Description: file not
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server:{
    host:'0.0.0.0' // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 将监听所有地址，包括局域网和公网地址
  }
})
