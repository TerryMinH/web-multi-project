<!--
 * @Author: TerryMin
 * @Date: 2022-10-01 11:16:29
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-26 08:53:27
 * @Description: file not
-->
# Vuejs 设计与实现

1. [底层渲染函数render 实现](https://www.cnblogs.com/Im-Victor/p/15580658.html)


## Vue.js 设计思路

1. Vue描述UI的方式：
- 模板的方式:更加直观

- 虚拟DOM(JS对象):更加灵活

2. 渲染器: 渲染器的作用是，把虚拟 DOM 对象渲染为真实 DOM 元素。它的工作原理是，递归地遍历虚拟 DOM 对象，并调用原生DOM API 来完成真实 DOM 的创建。渲染器的精髓在于后续的更新，它会通过Diff 算法找出变更点，并且只会更新需要更新的内容

3. 编译器:Vue.js 的模板会被一个叫作编译器的程序编译为渲染函数






