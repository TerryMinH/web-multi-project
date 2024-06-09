<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-22 18:58:25
 * @Description: file not
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="my-element" @click="handleSync">异步加载组件</button>
    <component :is="apps" v-if="showComp"></component>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "HelloWorld",
  components: {
    Child,
  },
  props: {
    msg: String,
  },
  data: () => {
    return {
      showComp: false,
      apps: null,
    };
  },
  mounted() {},
  methods: {
    handleSync() {
      console.log(33);
      this.apps = () => import(`./Child`);
      this.show = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
