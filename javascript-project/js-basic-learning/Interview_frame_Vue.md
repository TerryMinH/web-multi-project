<!--
 * @Author: TerryMin
 * @Date: 2025-01-07 11:13:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-22 20:14:03
 * @Description: file not
-->

# [Vue](https://cn.vuejs.org/)

## Vue

- Vue2 中 watch 与 computed 区别

  1.  computed
      1.1 computed 是计算属性，本质上是一个函数，它会根据依赖的数据自动计算出一个新的值，并且会对计算结果进行缓存，只有当依赖的数据发生变化时，才会重新计算。
      适用于复杂的计算逻辑和数据缓存。
      2.2 computed 具有缓存机制，只有当依赖的数据发生变化时，才会重新计算。这意味着如果多次访问同一个计算属性，只要依赖的数据没有变化，就会直接返回缓存的结果，避免了重复计算，提高了性能。
      2.3 computed 只能监听数据的浅变化，即当依赖的数据本身发生变化时，计算属性会重新计算
  2.  watch
      2.1 watch 是监听器，用于监听数据的变化，当被监听的数据发生变化时，会执行相应的回调函数。
      2.2 异步操作：当需要在数据变化时执行异步操作，如发送网络请求、更新数据库等，使用 watch 比较合适。例如，当用户输入搜索关键词时，实时发送搜索请求。
      2.3 watch 没有缓存机制，只要被监听的数据发生变化，就会执行回调函数。因此，如果在回调函数中进行了复杂的计算或异步操作，可能会影响性能。
      2.4 watch 可以监听数据的深度变化，通过设置 deep: true 可以监听对象或数组内部的属性变化。

- Vue2 中 data 为什么是函数而不是对象

  1. 如果 data 是一个对象，那么所有组件实例都会共享这个对象的引用，这意味着一个实例对数据的修改会影响到其他实例。
  2. 在组件中把 data 定义为函数，是为了确保每个组件实例都有自己独立的数据，避免数据共享带来的问题，从而提高组件的复用性和可维护性。

- [手写 Vue-router 核心原理](https://cloud.tencent.com/developer/article/1880448)

- ref 与 reactive 区别？

  1. 定义:
     1.1 ref 用于创建一个包含单个响应式值的引用对象。它可以接收任何类型的值，包括基本数据类型（如 number、string、boolean）和引用数据类型（如 object、array）。
     1.2 使用方式：通过 ref 函数创建一个响应式引用，访问其值时需要使用 .value 属性。
     1.3 定义: reactive 用于创建一个响应式的对象或数组，它只能接收对象类型（包括普通对象、数组、Map、Set 等）。
     1.4 使用方式: 直接使用 reactive 函数将一个对象转换为响应式对象，访问和修改其属性时无需使用 .value。

  2. 实现原理:
     2.1 ref 内部使用了 Object.defineProperty() 或 Proxy（取决于运行环境）来实现响应式。它将传入的值包装在一个对象中，并通过 getter 和 setter 来拦截对 .value 属性的访问和修改，从而实现响应式更新。
     2.2 reactive 基于 Proxy 实现响应式。它创建一个代理对象，拦截对原对象属性的访问和修改操作，当属性值发生变化时，会触发相应的更新机制，通知依赖该数据的组件进行重新渲染。

- [Vue 生命周期](https://cn.vuejs.org/guide/essentials/lifecycle)

- Vue 自定义 Hooks 与 工具方法的区别

  1.  概念:
      1.1 Vue 自定义 Hooks：它是基于 Vue 3 组合式 API 衍生出来的一种代码组织方式，本质上是一个函数，通常会使用 Vue 的响应式系统（如 ref、reactive）和生命周期钩子（如 onMounted、onUnmounted）。其主要目的是将有状态的逻辑进行封装和复用，能在不同组件间共享逻辑与状态。
      1.2 工具方法：是普通的 JavaScript 函数，不依赖于 Vue 特定的 API。它主要用于封装一些通用的、无状态的功能，像数据处理、格式转换、数学计算等，可在项目的任意地方使用，不局限于 Vue 组件。

  2.  功能用途:
      2.1 Vue Hooks：侧重于处理有状态的逻辑和组件生命周期相关的操作。例如，处理表单验证逻辑、实现数据的懒加载、监听窗口大小变化等，这些逻辑通常与组件的状态和生命周期紧密相关。
      2.2 工具方法：主要用于执行一些独立的、无状态的任务。比如，格式化日期、生成随机数、加密解密数据等

  3.  依赖关系
      3.1 Vue Hooks：依赖于 Vue 的响应式系统和生命周期钩子，因此只能在 Vue 项目中使用，并且通常需要使用 Vue 3 的组合式 API。
      3.2 工具方法：不依赖于 Vue 框架，具有更高的通用性，可以在任何 JavaScript 项目中使用，无论是 Vue、React 还是其他框架，或者是纯 JavaScript 项目。

- watch 与 watchEffect 区别

  1.  watch 和 watchEffect 都用于响应式地监听数据的变化并执行相应的操作，但它们在使用方式、触发时机、依赖收集等方面存在一些区别。
  2.  watch 显式依赖：watch 需要明确指定要监听的数据源，只有当指定的数据源发生变化时，回调函数才会被触发。惰性执行，可以传递 immediate: true 选项来让 watch 在组件初始化时立即执行一次回调。
  3.  watchEffect 自动依赖收集：watchEffect 会自动收集回调函数中使用的所有响应式数据作为依赖，只要这些依赖中的任何一个发生变化，回调函数就会重新执行

  ```js
  <script setup>
   import { ref, watchEffect } from 'vue';

   const message = ref('');

   watchEffect(() => {
     console.log(`当前消息是: ${message.value}`);
   });
   watch(message, (newValue, oldValue) => {
     console.log(`消息从 ${oldValue} 变为 ${newValue}`);
   }, {
     immediate: true
   });
   </script>
  ```

- Vue 中 <KeepAlive>组件缓存原理?

  1. <KeepAlive> 通过维护一个缓存对象,获取组件的名称作为缓存标识,在组件切换时对组件实例进行缓存和复用，同时利用特殊的生命周期钩子来管理组件的激活和失活状态，从而实现了组件的高效缓存和性能优化。
  2. 组件激活与失活:
     2.1 deactivated：当组件从活跃状态变为不活跃状态（即被切换走）时，会触发 deactivated 钩子。此时组件实例不会被销毁，而是被缓存起来。
     2.2 activated：当组件从缓存中重新被激活（即再次被切换回来）时，会触发 activated 钩子。这样可以在组件重新显示时执行一些特定的操作。
  3. 更新缓存组件方法:
     3.1 keep-alive 的 include 和 exclude 属性可以用来指定哪些组件需要被缓存，哪些不需要。通过动态修改这两个属性，可以控制组件是否被缓存，从而达到更新组件的目的。
     3.2 为被缓存的组件动态设置不同的 key 值，当 key 发生变化时，keep-alive 会认为是一个新的组件实例，从而重新创建组件。
     3.3 手动清除缓存: 可以通过访问 keep-alive 实例的 cache 和 keys 属性来实现。

- $nextTick 实现原理

  1. $nextTick：由于Vue是异步更新，通过异步更新队列来批量更新 DOM，提高性能。$nextTick 用于在 DOM 完成更新后执行回调函数，确保能访问到最新的 DOM 状态。
  2. 实现原理：$nextTick 的实现主要依赖于 JavaScript 的事件循环机制，根据不同的环境选择合适的异步方法（如 Promise.then、MutationObserver、setImmediate、setTimeout 等）来执行回调函数。

- Vue 组件通信有几种方式

  1.  子组件向父组件传递数据:
      1.1 自定义事件（defineEmits）
      1.2 v-model 指令(本质上也是基于自定义事件实现)
      1.3 provide 和 inject 主要用于跨层级组件通信,这种方式会让组件间的耦合度增加。
      1.4 事件总线（Event Bus）(Vue 3 官方不再推荐使用事件总线)
      1.5 状态管理
      1.6 Vue 组件实例属性：
      1.6.1 $parent：适用于子组件需要访问父组件数据和方法的场景，但会增加组件间的耦合度。
      1.6.2 $children：是一个数组，用于父组件需要批量访问所有直接子组件的场景，但缺乏精准性和顺序保障。
      1.6.3 $refs：适合父组件精准访问特定子组件实例或 DOM 元素，灵活性高。

  2.  父组件向子组件传递数据:
      2.1 父组件向子组件传值：props

- vue 事件总线 和状态管理 分别在什么场景下使用

  1. 事件总线适用于简单的组件通信和一次性的事件传递，而状态管理适用于多个组件共享状态和复杂的状态逻辑管理。在实际项目中，需要根据项目的规模和需求来选择合适的通信方式。
  2. 备注：一次性的事件通信：比如某个组件在特定条件下触发一个事件，通知其他组件执行相应操作，使用事件总线会很合适。例如，在用户点击某个按钮后，通知另一个组件进行页面滚动。

- Vue 响应式原理(源码)

  1.  compiler:主要负责把 Vue 组件的模板字符串转化为 JavaScript 渲染函数,这些渲染函数在运行时会生成虚拟 DOM 树，最终被渲染为真实的 DOM 节点。
  2.  reactivity:添加数据响应式,进行依赖收集
      2.1 Object.defineProperty: Vue 2 在创建 Vue 实例时，会遍历 data 选项中的所有属性，使用 Object.defineProperty() 将这些属性转换为 getter/setter 进行数据劫持并在 Watcher 中进行依赖收集,当属性值发生变化会发布更新。
      2.2 Object.defineProperty 缺点: 不能监听数组(重写会改变数组本身的方法)、对嵌套对象属性需要递归添加 getter 与 setter,比较浪费性能、对 ES6 新的数据结构 Map 和 Set 不支持响应式。
      2.3 Proxy(Reflect 先进语法):get 与 set 响应式数据拦截加工、track 响应式数据依赖追踪收集添加到 Map 数据结构里面、trigger 触发更新
  3.  runtime:是 Vue 3 框架中连接虚拟 DOM 和真实 DOM 的桥梁，它通过实现渲染器、封装 DOM 操作、处理特定指令和组件等功能，使得 Vue 应用能够高效地在浏览器中运行，并实现数据驱动的视图更新。

- Vue 编译过程
  Vue 的编译过程主要包括模板解析、优化和代码生成三个阶段:

  1. 解析: 将模板字符串通过词法分析和语法分析解析成（AST，Abstract Syntax Tree），便于后续处理；
  2. 优化: 对 AST 进行优化，通过深度优先遍历 标记出静态节点和静态根节点，以提高渲染性能；
  3. 生成: 将优化后的 AST 转换为渲染函数的代码字符串。渲染函数会生成虚拟 DOM，最终映射到真实 DOM 上

- Vue2 和 Vue3 有哪些区别？

      1. 语法与组合式 API:Vue2 使用选项式 API;Vue3 使用组合式 API,使用函数来组织逻辑,Vue 3 也兼容选项式 API，方便老项目的迁移。
      2. 响应式系统:
      vue2 的响应式原理用 Object.defineProperty 的 get 和 set 进行数据劫持;
      vue3 中响应式原理使用 Proxy 进行代理,Proxy 可以拦截对象中任意的属性变化，当然包括读写，添加，删除等
      3. 虚拟DOM性能优化:对虚拟 DOM 进行了优化，采用了静态提升、PatchFlag 等技术，减少了不必要的 diff 计算，提高了渲染性能，尤其是在处理大型组件树时性能提升明显。
      4. 更好的TypeScript支持: Vue3 增强的 TypeScript 支持，使大规模应用开发更轻松,新增了一些状态管理库pinia。
      5. 生命周期钩子部分做了调整:Vue3大部分生命周期钩子仍然保留，但名称有所变化。例如，beforeDestroy 改为 beforeUnmount，destroyed 改为 unmounted。同时，在组合式 API 中，可以使用新的方式来使用生命周期钩子，如 onBeforeMount、onMounted 等

