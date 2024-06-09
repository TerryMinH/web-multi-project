/*
 * @Author: TerryMin
 * @Date: 2022-05-28 23:28:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-07-06 09:30:06
 * @Description: file not
 */
import { createApp } from 'vue'
import App from './components/App.vue'
import store from './store'
// import { currency } from './currency'

const app = createApp(App)

app.use(store)

app.mount('#app')
