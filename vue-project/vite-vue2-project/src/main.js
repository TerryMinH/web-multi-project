/*
 * @Author: TerryMin
 * @Date: 2022-09-15 09:28:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-11-22 09:50:01
 * @Description: file not
 */
import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import "./assets/main.css";
import App from "./App.vue";
import router from "./router";

import Directives from "./directives/index.js";
import Toast from "./plugins/toast";
import Loading from "./plugins/loading";

Vue.use(Toast);
Vue.use(Loading);

Vue.use(Directives); // 注册指令

Vue.use(PiniaVuePlugin);
Vue.prototype.GLOBAL = "111";
Vue.prototype.changeData = function () {
  console.log(55);
};

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount("#app");
