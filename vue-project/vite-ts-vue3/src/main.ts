/*
 * @Author: TerryMin
 * @Date: 2023-11-14 14:02:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-11-14 14:24:42
 * @Description: file not
 */
import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import components from "@/components/index";
import "./style.css";
import App from "./App.vue";
import plugin from "./plugins/plugin-child.js";

const app = createApp(App);
// console.log(app);
// store
app.use(createPinia());

components(app); // 注册全局组件

// registerGlobalAsyncComponents(app);

app.config.globalProperties.$systemId = "10";

app.use(plugin).use(ElementPlus); // 插件安装

app.mount("#app");
