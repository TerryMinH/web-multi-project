/*
 * @Author: TerryMin
 * @Date: 2024-06-09 10:08:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-02 19:29:39
 * @Description: file not
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
console.log(112,Vue);
new Vue({
  render: h => h(App),
}).$mount('#app')
