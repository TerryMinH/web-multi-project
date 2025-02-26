<!--
 * @Author: TerryMin
 * @Date: 2025-01-07 11:13:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-24 11:26:12
 * @Description: file not
-->

# React & 小程序

## React

- 什么是 JSX?为什么要用 JSX?

      1.  JSX:JSX 是 JavaScript 的语法扩展。它的特点是，UI 与 JavaScript 逻辑的相融 - 组合成元件
      2.  使用 JSX 原因:JSX 直观上有违写程式的原则,一般程序我们会尽量做关注点分离。原因在于现代的许多网站都是高度动态，许多逻辑会决定内容的呈现，这时把内容与逻辑放在一起 ，能确保有任何更动时两者维持同步，以及在重复使用时也方便。

- React Hooks？

      1.  Hooks 是 React.16.8 之后出现, class component 是使用 React 生命周期函数; functional component 通过 use 开头函数使用 React 的功能和状态。
      2.  纯函数:是一种特殊的函数，它具有特定的输入和输出关系，并且不会产生任何可观察到的副作用

- Hooks 为什么只能在最顶端呼叫？

      1.  主要是为了 React 能正确将内部 state 和对应的 Hook 进行关联。如果写在 if…else 判断式中，那每次渲染的顺序可能就会产生变化，这会使得 React 无法得知每个 Hook 对应的值应该返回什么，这将导致 state 的顺序可能错乱

- [常用 Hooks](https://juejin.cn/post/7118937685653192735)

      1.  useState:用于定义和保存元件中状态(state)
      2.  useEffect:是在 render 渲染结束后执行
      3.  useLayoutEffect:在 DOM 更新之后执行(即浏览器重绘 (repaints) 前执行)
      4.  useReducer:也是一种管理 state 的 hook，可作为 useState 替代方案。当状态管理逻辑变得更复杂时，通常会建议使用 useReducer 而非 useState。
      5.  useCallback:缓存的是一个函数，确保函数的引用在多次渲染之间保持不变。
      6.  useMemo:缓存的是一个值
      7.  useRef：可以创建一个可变 ref 对象，这个对象在组件的整个生命周期内不会改变，可以用来存储一些不应该因为状态变化而变化的值或函数。
      8. React.memo:React 提供的一个高阶组件（Higher-Order Component，HOC），主要用于优化函数组件的性能，避免不必要的渲染。适用 纯展示组件和 频繁渲染的组件。

- 自定义 Hooks 处理过哪些问题？

      1.  权限 Hooks
      2.  表格分页 Hooks
      3.  弹窗 Hooks

- React 生命周期方法有哪些？
  [生命周期图谱](https://cloud.tencent.com/developer/article/2204517)

      1.  componentWillMount:在渲染之前执行，用于根组件中的 App 级配置。
      2.  componentDidMount:在第一次渲染之后执行可以在这里做 AJAX 请求，DOM 的操作或状态更新以及设置事件监听器。
      3.  componentWillReceiveProps:在初始化 render 的时候不会执行，它会在组件接受到新的状态(Props)时被触发，一般用于业组件状态更新时子组件的重新渲染。
      4.  shouldComponentUpdate:确定是否更新组件。默认情况下，它返回 true。如果确定在 state 或 props 更新后组件不需要在重新渲染，则可以返回 false，这是一个提高性能的方法。
      5.  componentWillUpdate:在 shouldComponentUpdate 返回 true 确定要更新组件之前执行。
      6.  componentDidUpdate:它主要用于更新 DOM 以响应 props 或 state 更改。
      7.  componentWillUnmount:它用于取消任何的网络请求，或删除与组件关联的所有事件监听器。

- React 虚拟 DOM?

      1.  虚拟 DOM 定义: 是一个 JavaScript 对象，它是真实 DOM 的抽象表示。React 使用虚拟 DOM 来描述 UI 的结构和状态，并通过 Diff 算法对比新旧虚拟 DOM 的差异，最小化对真实 DOM 的操作。
      2.  虚拟 DOM 工作原理:
         2.1 初始渲染:React 组件首次渲染时，会根据组件的 JSX 生成虚拟 DOM 树。
         2.2 状态更新:当组件的状态（state）或属性（props）发生变化时，React 会重新生成一个新的虚拟 DOM 树。
         2.3 Diff 算法（对比差异）:React 使用 Diff 算法对比新旧虚拟 DOM 树的差异。
         2.4 生成更新操作:根据 Diff 算法的结果，React 生成一组最小的更新操作（如添加、删除、更新节点）
         2.5 应用到真实 DOM:通过 Diff 算法生成的最新结果应用到真实 DOM 上,完成 UI 的更新

      3.  虚拟 DOM 的优点: 通过减少真实 DOM 操作,提高页面性能 ; 跨平台能力,可以映射到多平台 ;声明式编程。
         缺点:内存占用;不适合极高性能要求的场景

- 高阶组件(HOC)
  [高阶组件在 vue 中的应用](https://juejin.cn/post/6844904094885216269)
  [吃透 React 高阶组件](https://juejin.cn/post/6940422320427106335#heading-25)

- React 项目优化
  [React 优化建议](https://juejin.cn/post/6908895801116721160)

      1. 减少不必要的渲染（React.memo、useCallback、useMemo）。
      2. 代码分割与懒加载（React.lazy、Suspense）。
      3. 长列表渲染优化（react-window）。
      4. 网络请求优化（缓存、防抖、节流）。
      5. 服务端渲染（SSR）或其他高级优化手段。

- [React 合成事件](https://vue3js.cn/interview/React/SyntheticEvent.html)

      1. React 基于浏览器的事件机制自身实现了一套事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等

- React 状态管理

      1.状态管理解决问题:一 就是解决跨层级组件通信问题; 二 就是对一些全局公共状态的缓存。

## React 与 Vue 对比

[React 与 Vue 区别](https://zhuanlan.zhihu.com/p/180455618)

- 拥有各自框架的生命周期
- React 使用的 JSX 语法;Vue 使用的是模板系统

## 小程序

1. 小程序生命周期
   小程序的生命周期包括应用生命周期和页面生命周期，它们分别描述了小程序应用整体以及单个页面从创建到销毁的整个过程:
   - 应用生命周期(在 app.js 文件中进行监听):
     1 onLaunch(options): 小程序初始化时触发，全局只触发一次。获取用户信息,版本更新。
     2 onShow(options): 小程序启动或从后台进入前台时触发。options 包含小程序的启动参数。
     3 onHide:当小程序从前台进入后台时触发。
     4 onError:当小程序发生脚本错误，或者 API 调用失败时触发，会带上错误信息。
     5 onPageNotFound(options): 小程序要打开的页面不存在时触发，options 包含页面路径等信息
   - 页面生命周期:
     1 onLoad:页面加载时触发，只会触发一次。该函数会接收一个参数 options，其中包含了从其他页面传递过来的参数。
     2 onShow:页面显示时触发。每次打开页面都会触发，当从其他页面返回当前页面时也会触发。
     3 onReady:在页面初次渲染完成后触发，适合进行页面交互操作。
     4 onHide:页面隐藏时触发，比如跳转到其他页面或者小程序进入后台。
     5 onUnload
