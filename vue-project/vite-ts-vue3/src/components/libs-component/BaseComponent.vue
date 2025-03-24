<!--
 * @Author: TerryMin
 * @Date: 2022-04-26 10:00:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-23 11:22:16
 * @Description: file not
-->
<template>
  <div>
    <button type="button" @click="changeBtn('1')">按钮1</button>
    <button @click="changeBtn('2')">按钮2</button>
  </div>
  <div class="container">
    <p>{{ address.street }}</p>
    <p>{{ address.city }}</p>
    <CustomEle />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, toRefs, h, toRef, computed } from "vue";

let obj = { name: "alice", age: 12 };
let newObj = toRef(obj, "name");
const state = reactive({
  address: {
    street: '123 Main St',
    city: 'Anytown'
  }
});

const CustomEle = h('div', [h('div', { class: 'mg-class' }, 'div hello'), h('span', 'span hello')])

const { address } = toRefs(state);

onMounted(() => { 
  console.log(this);
});


const changeBtn = (type) => {
  switch (type) {
    case "1":
      state.address.city = "terrymin";
      break;
    case "2":
      newObj.value = "Tom";
      console.log(obj, newObj);
      break;
  }
};
</script>

<style scoped>
h1 {
  color: v-bind(color);
}

.container {
  border: 1px solid;
}

:deep(.mg-class) {
  color: green;
}
</style>
