<template>
  <div id="app">
    <h1>Vue SSR Demo</h1>
    <p>当前时间: {{ now }}</p>
    <button @click="sayHello">点击我</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: new Date().toLocaleString(),
    };
  },
  methods: {
    sayHello() {
      alert("Hello from Vue SSR!");
    },
  },
  // 只在客户端执行的钩子
  mounted() {
    console.log("客户端 mounted 钩子被调用");
  },
};
</script>
