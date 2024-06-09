/*
 * @Author: TerryMin
 * @Date: 2022-03-23 10:28:24
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-16 11:34:43
 * @Description: file not
 */
const focus = {
  bind: function (_el, _binding, _vnode) {
    // console.log(el, binding, vnode);
  },
  inserted: function (el) {
    el.focus();
  },
};

export default focus;
