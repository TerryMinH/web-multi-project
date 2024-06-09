<!--
 * @Author: TerryMin
 * @Date: 2022-09-15 09:28:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-03 16:02:01
 * @Description: file not
-->

# Vue2 API 学习

1. [computed 与 watch 的区别](https://www.jianshu.com/p/5f83e06ae32f)

- computed 是计算属性: 支持缓存不支持异步。如果 computed 属性值是函数，那么默认会走 get 方法。一般可用于页面有大量或者复杂的表达式去处理数据时使用。

- watch 是侦听属性: 不支持缓存支持异步,一般可用于组件属性值变化的动态监听, watch 函数有两个配置项 deep(深度监听) immediate(组件加载立即触发回调函数的执行)

2. [Vue 中$set 的使用场景](https://blog.csdn.net/Web_J/article/details/86361105)
   [Vue 中$set 的实现原理](https://juejin.cn/post/7015214879330172964)

3. [Vue 组件通信](https://juejin.cn/post/6844903845642911752)

```js
// 监听值的动态变化:
// 方式1 computed监听
computed: {
   // isPropShow 新定义的监听变量
    isPropShow: function () {
      return this.isShow; // 子组件props定义的属性
    },
  },

// 方式2 watch监听
  watch: {
   // 子组件props定义的属性
    isShow(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },

```

4. [Vue2 指令与 Vue3 区别](https://blog.csdn.net/m0_46846526/article/details/118911913)

- 自定义指令使用场景: 需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。需要将某些功能在指定 DOM 元素上使用，但对于需要操作大量 DOM 元素或者大变动时候，推荐使用组件，而不是指令
  bind → beforeMount
  inserted → mounted
  beforeUpdate：新的！这是在元素本身更新之前调用的，很像组件生命周期钩子。
  componentUpdated → updated
  beforeUnmount：新的！与组件生命周期钩子类似，它将在卸载元素之前调用。
  unbind -> unmounted

5. [Vue 插件](https://juejin.cn/post/6844903946343940104)

- 插件 (Plugins) 是一种能为 Vue 添加全局功能的工具代码,插件可以是一个带 install() 方法的对象，亦或直接是一个将被用作 install() 方法的函数.

6. Vue 项目优化
   [Vue 打包优化 external](https://juejin.cn/post/6844904190083350542)
