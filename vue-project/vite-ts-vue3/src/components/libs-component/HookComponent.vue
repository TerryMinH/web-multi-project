<!--
 * @Author: TerryMin
 * @Date: 2023-03-07 15:56:46
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-11-14 11:16:05
 * @Description: file not
-->

<template>
  <div>
    <p>是否登录：{{ state.isAdmin }}</p>
    <p>name:{{ state.name }}</p>
    <!-- <p>数字:{{ number }} {{ ReactvieObj.testNumber }}</p> -->
    <p>{{ testComputed }}</p>
    <!-- <div>{{ nameTest }}{{ proxyObj.testNumber }}</div> -->
    <button @click="toggleLogin">切换登录</button>
  </div>
</template>

<script setup>
import { toRefs, toRef, ref, reactive } from "vue";
// import { useStorage } from "@vueuse/core";
import { useAdd } from "@/hooks/useAdd";
const obj = reactive({
  testNumber: 5,
});
const useAddCenter = useAdd(obj);
const { store, login, logout, changeNumber, testComputed } =
  useAddCenter;

const { state } = store;

const toggleLogin = async () => {
  console.log(state);
  obj.testNumber=10;
  // await logout();
  changeNumber();
};
</script>
