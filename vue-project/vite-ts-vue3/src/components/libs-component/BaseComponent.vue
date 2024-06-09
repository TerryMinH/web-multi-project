<!--
 * @Author: TerryMin
 * @Date: 2022-04-26 10:00:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-11-14 14:37:55
 * @Description: file not
-->
<template>
  <div>
    <button type="button" @click="changeBtn('1')">按钮1</button>
    <button @click="changeBtn('2')">按钮2</button>
    <ChildComponent :address="'中国'"></ChildComponent>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, toRefs, toRef, computed } from "vue";
import ChildComponent from "./ChildComponent.vue";

let obj = { name: "alice", age: 12 };
let newObj = toRef(obj, "name");

onMounted(() => {});

const changeBtn = (type) => {
  switch (type) {
    case "1":
      // msg.value = "terrymin";
      break;
    case "2":
      newObj.value = "Tom";
      console.log(obj, newObj);
      break;
  }
};
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>
