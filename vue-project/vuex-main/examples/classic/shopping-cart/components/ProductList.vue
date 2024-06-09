<!--
 * @Author: TerryMin
 * @Date: 2022-05-28 23:28:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-07-05 16:58:57
 * @Description: file not
-->
<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ currency(product.price) }}
      <br>
      <button :disabled="!product.inventory" @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { currency } from '../currency'

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: {
    ...mapActions('cart', [
      'addProductToCart'
    ]),
    currency
  },
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
