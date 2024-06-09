<!--
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-04-13 09:47:49
 * @Description: file not
-->

# Vue3 API 学习

1. [Ref 与 Reactive 区别](https://juejin.cn/post/7192994086255591480)

一 [ref、 toRef 、 toRefs](https://blog.csdn.net/cookcyq__/article/details/121618833)
ref 的本质是拷贝，与原始数据没有引用关系.响应式数据发生改变，而原始数据并不会改变,界面会自动更新.

toRef 的本质是引用，与原始数据有关联,并不会触发 UI 界面的更新

toRefs 接收一个对象作为参数，它会遍历对象身上的所有属性，然后挨个调用 toRef 执行

toRef 与 toRefs 两者区别:

toRef 与 toRefs 都是将 reactive 的 json 内节点提取出来，做为独立的响应式结构。

toRef 是指定某一节点提取出来，toRefs 是一次性将所有节点提取出来。但 toRefs 只能提取一级节点！

toRefs 返回的变量修改，与原始值无任何响应式关联。toRefs 只提取第一级子节点

```js
let obj = { name: "alice", age: 12 };
let newObj = ref(obj.name);
let newObj2 = toRef(obj, "name");
let newObj3 = toRefs(obj);

function change() {
  newObj.value = "Tom";
  console.log(obj, newObj);
}
```

2. [defineComponent 解决的问题](https://blog.csdn.net/qq_36157085/article/details/109498473)

3. Vue 组件间通信
   [Vue3 父子组件通信](https://juejin.cn/post/7069251532339806238#heading-34)
   [mitt 事件总线分析](https://juejin.cn/post/7056688469719908388)

4. [Vue2 与 Vue3 最大的区别 — Vue2 使用选项类型 API（Options API）对比 Vue3 合成型 API（Composition API） 组合 API 使用](https://juejin.cn/post/6976830388580646942)

5. [vue3 全局变量定义](https://blog.csdn.net/weixin_50077637/article/details/118693210)

6. Hooks 与 Mixin 区别
   [自定义 Hooks](https://juejin.cn/post/7083401842733875208)

7. Vue 异步组件与动态组件

- 异步组件:只在需要的时候才从服务器加载,一个可以让组件异步加载的方式；它一般会用于性能优化，比如减小首屏加载时间、加载资源大小。(将每个组件生成一个对应的静态文件。正常是所有组件打包合并在一起生成一个 js 文件)
- 动态组件：是 Vue 中一个特殊的 Html 元素：<component>，它拥有一个特殊的 is 属性，属性值可以是 已注册组件的名称 或 一个组件的选项对象，它是用于不同组件之间进行动态切换的。

8. [解构](https://juejin.cn/post/7220681627977515066)

9. Vue 中 h() 函数

- 其实不是一个实际的 DOM 元素。它更准确的名字可能是 createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息。我们把这样的节点描述为“虚拟节点 (virtual node)”，也常简写它为 VNode 。“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。
- [h() 函数学习和使用](https://blog.csdn.net/ganyingxie123456/article/details/135848963)



# [Pinia 使用](https://pinia.vuejs.org/zh/core-concepts/getters.html)

1. storeToRefs:直接解构 store 实例会 使数据丢失响应式,storeToRefs 只能把 state 里面的数据变为单独的响应式 的 ref 但是不能结构 actions 中的方法;

# [Vue Router](https://router.vuejs.org/zh/guide/)
