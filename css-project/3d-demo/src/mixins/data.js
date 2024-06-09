/*
 * @Author: TerryMin
 * @Date: 2023-03-23 16:35:02
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-23 16:51:09
 * @Description: file not
 */
export default {
  data() {
    return {
      name: "from data.js",
    };
  },
  computed: {
    showMode() {
      if (this.isDisplay) {
        return;
      }
      console.log(55);
      return {
        address: "上海",
      };
    },
    showName() {
      console.log("data.js");
    },
  },
};
