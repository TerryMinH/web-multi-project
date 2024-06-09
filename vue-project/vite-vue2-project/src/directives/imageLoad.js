/*
 * @Author: TerryMin
 * @Date: 2022-12-13 19:14:14
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-20 11:09:48
 * @Description: 图片懒加载：https://blog.csdn.net/qq_44182284/article/details/111309028
 */
const imageLoad = {
  inserted(el, binding) {
    const color = Math.floor(Math.random() * 1000000);
    el.style.backgroundColor = `#${color}`;
    let img = new Image();
    // console.log(binding);
    img.src = binding.value;
    img.onload = () => {
      // console.log(binding.value);
      el.style.backgroundImage = `url(${binding.value})`;
    };
  },
};
export default imageLoad;
