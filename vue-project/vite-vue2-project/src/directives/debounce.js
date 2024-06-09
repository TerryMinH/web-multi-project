/*
 * @Author: TerryMin
 * @Date: 2022-03-23 10:26:06
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-17 11:30:52
 * @Description: vue自定义指令及原理 https://juejin.cn/post/6939185485667532814
 */

const debounce = {
  bind: function (el, binding, vnode) {
    console.log(el, binding, vnode);
    var s = JSON.stringify;
    el.innerHTML =
      "name: " +
      s(binding.name) +
      "<br>" +
      "value: " +
      s(binding.value) +
      "<br>" +
      "expression: " +
      s(binding.expression) +
      "<br>" +
      "argument: " +
      s(binding.arg) +
      "<br>" +
      "modifiers: " +
      s(binding.modifiers) +
      "<br>" +
      "vnode keys: " +
      Object.keys(vnode).join(", ");
  },
  inserted: function (el, { value: { fn, event, time } }) {
    //没绑定函数直接返回
    if (typeof fn !== "function") return;
    el._timer = null;
    //监听点击事件，限定事件内如果再次点击则清空定时器并重新定时
    el.addEventListener(event, () => {
      if (el._timer !== null) {
        clearTimeout(el._timer);
        el._timer = null;
      }
      el._timer = setTimeout(() => {
        fn();
      }, time);
    });
  },
};

export default debounce;
