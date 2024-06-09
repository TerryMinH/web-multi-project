/*
 * @Author: TerryMin
 * @Date: 2023-08-10 17:40:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-08-10 17:41:09
 * @Description: file not
 */
import Vue from "vue";
class Bus {
  constructor() {
    this.bus = null;

    let bus = new Vue();

    bus.$on("log", (msg = "") => {
      console.log(msg);
    });

    bus.origin_emit = bus.$emit;

    let self = this;

    bus.$emit = function () {
      self.bus && self.bus.$emit.apply(self.bus, arguments);
      bus.origin_emit.apply(bus, arguments);
    };

    bus.setBus = (bus) => {
      if (bus && typeof bus.$emit === "function") {
        this.bus = bus;
      }
    };

    return bus;
  }
}
export default new Bus();
