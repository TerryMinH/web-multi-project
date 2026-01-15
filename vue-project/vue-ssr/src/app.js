import Vue from 'vue'
import App from './App.vue'

// 导出一个工厂函数，用于创建新的应用程序实例
export function createApp() {
  const app = new Vue({
    render: h => h(App)
  })
  return { app }
}