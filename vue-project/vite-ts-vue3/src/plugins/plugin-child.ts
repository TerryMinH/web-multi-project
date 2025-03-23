/*
 * @Author: TerryMin
 * @Date: 2022-08-19 10:34:26
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-23 10:29:42
 * @Description: file not
 */
const plugin = {
  install(app, options?: any) {
    console.log("plugin==>", app, options);
    app.config.globalProperties.$innerAttr = "2222";
    app.directive("focus", {
      mounted(el) {
        el.focus();
      },
    });
  },
};
export default plugin;
