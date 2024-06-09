/*
 * @Author: TerryMin
 * @Date: 2023-03-23 16:35:02
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-23 16:42:02
 * @Description: file not
 */
export default {
  data() {
    return {
      name: " from init.js",
    };
  },
  computed: {
    showMode() {
      console.log("init.js");
      return 11;
    },
  },
};
