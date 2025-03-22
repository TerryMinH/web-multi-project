<!--
 * @Author: TerryMin
 * @Date: 2022-01-14 14:47:17
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-22 10:50:45
 * @Description: file not
-->

<template>
  <div class="component-wrap">
    <h3>BaseComponent:</h3>
    <BaseComponent />
  </div>

  <div class="component-wrap">
    <h3>HookComponent:</h3>
    <HookComponent />
  </div>

  <div class="component-wrap">
    <h3>PlayComponent:</h3>
    <PlayComponent />
  </div>
  <!-- <div>
    <h3>PinaBasicSetUp:</h3>
    <PinaBasicSetUp />
  </div> -->
</template>

<script setup>
import { provide, getCurrentInstance, defineAsyncComponent, ref } from "vue";
// import { BaseComponent ,HookComponent} from "@/components/index";

const internalInstance = getCurrentInstance();
// 搂一眼，看看注册的组件名字是啥
// console.log(internalInstance.appContext.components);

// provide('location', 'North Pole1')
// provide('geolocation', {
//   longitude: 90,
//   latitude: 1351
// })

// const handleFn = (e) => {
//   console.log(e);

// };
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.component-wrap {
  border: 1px solid #666;
  margin-top:10px;
}
</style>
