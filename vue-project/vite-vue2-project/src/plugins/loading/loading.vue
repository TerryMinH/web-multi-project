<!--
 * @Author: TerryMin
 * @Date: 2022-03-24 11:42:54
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-17 10:33:02
 * @Description: file not
-->
<template>
  <div class="wrapper" v-if="isshow">
    <div class="loading">
      <img src="./loading.gif" alt="" width="40" height="40" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: String,
      default: "1s", //默认1s
    },
    isshow: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style scoped></style>
