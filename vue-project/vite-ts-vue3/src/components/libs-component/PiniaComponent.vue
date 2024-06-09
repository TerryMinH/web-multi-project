<!--
 * @Author: TerryMin
 * @Date: 2022-06-14 06:54:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-04-19 18:43:13
 * @Description: Pinia基本使用](https://juejin.cn/post/7068113574043844622#heading-10)
-->
<template>
  <div>
    <button @click="handleBtn(1)">点击事件1</button>
    <button @click="handleBtn(2)">点击事件2</button>
    <button @click="handleBtn(3)">重置</button>
    <button @click="handleBtn(4)">终止监听</button>
  </div>

  <div>
    <h3>内容展示:</h3>
    <p>pina count is {{ counterStore.count }}</p>
    <div v-for="(item, index) in userList" :key="index">
      {{ item }}
    </div>
  </div>

  <div>
    <button type="button" @click="subscribeNormal">subscribeNormal</button>
    <button type="button" @click="subscribeError">subscribeError</button>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
const { count, userList } = storeToRefs(counterStore);

let subscribe = null;
onMounted(() => {
  console.log(count.value);
  subscribe = counterStore.$subscribe((mutation, state) => {
    console.log(mutation);
    console.log(state);
  });
});

const handleBtn = (type) => {
  switch (type) {
    case 1:
      counterStore.increment();
      break;
    case 2:
      counterStore.$patch((state) => {
        state.count += 10;
        state.userList.push({ name: "批量修改数据" });
      });
      break;
    case 3:
      console.log(counterStore);
      counterStore.$reset();
      break;
    case 4:
      subscribe && subscribe();
      break;
  }
};

function subscribeNormal() {
  counterStore.subscribeAction("小李", 18, false);
}

function subscribeError() {
  counterStore.subscribeAction("小白", 17, true);
}

// 监听action的动作及结果
const unsubscribe = counterStore.$onAction(
  ({
    name, // action 函数的名称
    store, // store 实例，这里是 counterStore
    args, // action 函数参数数组
    after, // 钩子函数，在action函数执行完成返回或者resolves后执行
    onError, // 钩子函数，在action函数报错或者rejects后执行
  }) => {
    console.log("action的函数名", name);
    console.log("参数数组", args);
    console.log("store实例", store);

    after((result) => {
      console.log("$onAction after函数", result);
    });

    onError((error) => {
      console.log("错误捕获", error);
    });
  }
);
</script>
<style lang="less" scoped></style>
