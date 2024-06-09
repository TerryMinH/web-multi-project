<!--
 * @Author: TerryMin
 * @Date: 2022-04-26 10:00:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-12-24 09:42:04
 * @Description: file not
-->
<template>
  <div>
    <button type="button" @click="changeBtn('1')">按钮1</button>
    <button @click="changeBtn('2')">按钮2</button>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, toRefs, toRef, computed } from "vue";

const props = defineProps(["msg"]);

let obj = { name: "alice", age: 12 };
let newObj = toRef(obj, "name");

onMounted(() => {
  // console.log(props);
});

const changeBtn = (type) => {
  switch (type) {
    case "1":
      topAddress.value = "中国上海";
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
