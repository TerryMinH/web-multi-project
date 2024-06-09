<!--
 * @Author: TerryMin
 * @Date: 2023-03-02 14:40:02
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-03-11 17:03:56
 * @Description: [Pinia函数式处理](https://juejin.cn/post/7057439040911441957)
-->
<template>
  <div class="box-styl">
    <h1>Setup模式</h1>
    <p class="section-box">
      Pinia的state: count = <b>{{ obj.count }}</b>
    </p>
    <p class="section-box">
      Pinia的getters: doubleCount() = <b>{{ doubleCount() }}</b>
    </p>
    <div class="section-box">
      <p>Pinia的action: increment()</p>
      <button @click="increment">点我</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStoreForSetup } from "@/stores/counterForSetup";

// setup composition API模式
const counterStoreForSetup = useCounterStoreForSetup();
console.log(counterStoreForSetup);

const { obj, count } = storeToRefs(counterStoreForSetup);
const { increment, doubleCount } = counterStoreForSetup;
console.log(55, obj.count, count.value);
</script>

<style lang="less" scoped>
.box-styl {
  margin: 10px;
  .section-box {
    // margin: 20px auto;
    width: 300px;
    background-color: #d7ffed;
    border: 1px solid #000;
  }
}
</style>
