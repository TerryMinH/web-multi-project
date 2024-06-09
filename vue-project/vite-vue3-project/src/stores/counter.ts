/*
 * @Author: TerryMin
 * @Date: 2023-03-02 11:04:44
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-04-19 17:17:20
 * @Description: file not
 */
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 12,
    userList: [
      { name: "小明", age: 18 },
      { name: "小李", age: 15 },
      { name: "小白", age: 16 },
    ],
    user: {
      name: "小明",
      age: 7,
    },
  }),

  actions: {
    increment(state) {
      this.count++;
      this.userList.push({ name: `terry`, age: `${this.count}` });
    },

    subscribeAction(name: string, age: number, manualError?: boolean) {
      return new Promise((resolve, reject) => {
        console.log("subscribeAction函数执行");
        if (manualError) {
          reject("手动报错");
        } else {
          this.user.name = name;
          this.user.age = age;
          resolve(`${this.user.name}今年${this.user.age}岁了`);
        }
      });
    },
  },
});
