<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-23 17:38:01
 * @Description: file not
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>mixins: {{ showMode }}</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import dataMixin from "./mixins/data";
// import initMixin from "./mixins/init";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      isDisplay:true
    };
  },
  mixins: [dataMixin],
  mounted() {
    console.log(this.showMode);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
