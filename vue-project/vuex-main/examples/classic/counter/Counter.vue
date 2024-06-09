<!--
 * @Author: TerryMin
 * @Date: 2022-05-28 23:28:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-10-27 13:27:44
 * @Description: file not
-->
<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    {{ $store.state.name }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <button @click="changeName">修改姓名1</button>
    <button @click="say">say</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'evenOrOdd'
    ])
  },
  mounted() {
    console.log(22, this.evenOrOdd)
  },
  methods: {
    ...mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
    'changeName'
  ]),
  say() {
    console.log(this.evenOrOdd)
  }
  }
}
</script>
