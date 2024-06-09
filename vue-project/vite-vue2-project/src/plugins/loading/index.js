/*
 * @Author: TerryMin
 * @Date: 2022-03-24 11:43:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-16 15:38:30
 * @Description: file not
 */
import LoadingComponent from "./loading.vue";

let Loading = {};

Loading.install = (Vue) => {
  Vue.component("loading", LoadingComponent);
};

export default Loading;
