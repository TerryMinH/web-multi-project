<!--
 * @Author: TerryMin
 * @Date: 2023-11-14 14:02:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-08 16:28:28
 * @Description: file not
-->
<script setup lang="ts">
import Home from "./views/home.vue";
</script>

<template>
  <Home />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
