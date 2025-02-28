/*
 * @Author: TerryMin
 * @Date: 2023-02-23 10:32:36
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-28 20:28:34
 * @Description: https://juejin.cn/post/7137562715676999710
 */
import { defineAsyncComponent } from "vue";

// export { default as ChildComponent } from "./libs-component/ChildComponent.vue";
// export { default as BaseComponent } from "./libs-component/BaseComponent.vue";
// export { default as HookComponent } from "./libs-component/HookComponent.vue";
// export { default as TodoList } from "./libs-component/TodoList.vue";
// export { default as PiniaComponent } from "./libs-component/PiniaComponent.vue";
// export { default as PinaBasicSetUp } from "./libs-component/PinaBasicSetUp.vue";

export default (app) => {
  // 结构化组件的位置
  const context = import.meta.glob("./libs-component/**/*.vue");
  const REG = /(?<=libs-component\/).*?(?=.vue)/gi;
  for (const path in context) {
    const component = path.match(REG);
    if (component) {
      component[0] &&
        app.component(
          component[0],
          defineAsyncComponent(() => import(/* @vite-ignore */ `${path}`))
        );
    }
  }
};

// function registerGlobalAsyncComponents(app) {
//   const modules = import.meta.glob('./components/libs-component/*.vue');
//   console.log(11,modules);
//   for (const path in modules) {
//     const result = path.match(/.*\/(.+).vue$/);
//     console.log(result);
//     console.log(path);
//     if (result) {
//       const name = result[1];
//       const component = modules[path];
//       console.log(component);
//       app.component(name, defineAsyncComponent(`${component}`));
//       app.component(name, defineAsyncComponent(() => import(`${path}`));
//     }
//   }
// }
