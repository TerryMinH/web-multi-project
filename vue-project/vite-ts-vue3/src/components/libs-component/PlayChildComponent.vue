<!--
 * @Author: TerryMin
 * @Date: 2022-06-14 06:54:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-11-14 14:09:34
 * @Description: file not
-->
<template>
  <div id="demo">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    {{ address }}
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const show = ref(true);

const props = defineProps({
  address: String,
});
console.log(props);

onMounted(() => {});
</script>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
