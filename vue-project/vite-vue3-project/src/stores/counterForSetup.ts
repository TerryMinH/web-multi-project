/*
 * @Author: TerryMin
 * @Date: 2023-03-02 14:44:26
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-03-11 17:03:45
 * @Description: file not
 */
import { ref, reactive } from "vue";
import { defineStore } from "pinia";

// 使用setup模式定义
export const useCounterStoreForSetup = defineStore("counterForSetup", () => {
  const count = ref<number>(1);
  const obj = reactive({
    count: 1,
  });
  function increment() {
    obj.count++;
    count.value++;
  }

  function doubleCount() {
    console.log(obj.count);
    return obj.count * 2;
  }

  return { obj,count, increment, doubleCount };
});
