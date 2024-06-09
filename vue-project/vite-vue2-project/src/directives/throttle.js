/*
 * @Author: TerryMin
 * @Date: 2022-03-23 10:26:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-16 11:34:49
 * @Description: file not
 */
const throttle = {
  bind: function (el, { value: { fn, time } }) {
    if (typeof fn !== "function") return;
    el._flag = true; //开关默认为开
    el._timer = null;
    el.handler = function () {
      if (!el._flag) return;
      //执行之后开关关闭
      el._flag && fn();
      el._flag = false;
      if (el._timer !== null) {
        clearTimeout(el._timer);
        el._timer = null;
      }
      el._timer = setTimeout(() => {
        el._flag = true; //三秒后开关开启
      }, time);
    };
    el.addEventListener("click", el.handler);
  },
  unbind: function (el, _binding) {
    el.removeEventListener("click", el.handler);
  },
};

export default throttle;
