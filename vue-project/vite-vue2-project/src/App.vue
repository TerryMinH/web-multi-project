<!--
 * @Author: TerryMin
 * @Date: 2022-09-15 09:28:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-15 14:42:05
 * @Description: file not
-->
<script setup></script>

<template>
  <div id="app">
    <div class="wrapper">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </div>

    <router-view />
  </div>
</template>

<style scoped></style>
