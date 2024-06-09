<!--
 * @Author: TerryMin
 * @Date: 2023-02-22 17:53:00
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-06-16 11:00:10
 * @Description: file not
-->
<template lang="">
  <div>
    <button @click="changeHobby">改值</button>
    <div v-for="item in list" :key="item.code">
      <input type="checkbox" v-model="item.state" />{{ item.hobby }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: {
    msg: String,
  },
  data() {
    return {
      list: [
        { hobby: "看书", code: 100 },
        { hobby: "写字", code: 101 },
        { hobby: "敲代码", code: 102 },
      ],
    };
  },
  mounted() {
    // console.log(44);
  },
  methods: {
    changeHobby() {
      console.log(this);
      this.$set(this.list, 2, { hobby: "玩魔方" });
    },
  },
};
</script>
