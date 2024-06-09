<!--
 * @Author: TerryMin
 * @Date: 2022-05-28 23:28:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-01 15:30:01
 * @Description: file not
-->
# [Vuex](https://vuex.vuejs.org/zh/guide/)
1. State 

state:单一状态树,用一个对象就包含了全部的应用层级状态。

mapState辅助函数: 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性

2. Getter

getter:有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数

```js
computed: {
  doneTodosCount () {
    return this.$store.state.todos.filter(todo => todo.done).length
  }
}
```
mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性

3. Mutation

mutations:更改 Vuex 的 store 中的状态的唯一方法是提交 mutation,即通过commit触发如:commit('account/login')

**mutation 必须是同步函数。** 

mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）:

```js
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```
4. Action

action:Action 类似于 mutation，不同在于：
- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。
- 一般通过dispatch触发如: dispatch('account/login')

5. Module

为了解决应用的所有状态会集中到一个比较大的对象。最后变得臃肿。Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

对于模块内部的getter或者action,根节点(rootState)状态会作为第三个参数暴露出来.

6. 模块化详解 

模块化 [Object.create与new Object区别](https://blog.csdn.net/wuxian_wj/article/details/122048927)


## [Vuex使用](https://juejin.cn/post/7013325675129995272)


# [Pinia](https://pinia.web3doc.top/)



