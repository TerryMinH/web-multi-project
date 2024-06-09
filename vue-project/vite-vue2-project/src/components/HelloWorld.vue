<!--
 * @Author: TerryMin
 * @Date: 2022-09-15 09:28:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-10-12 07:28:33
 * @Description: file not
-->
<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
