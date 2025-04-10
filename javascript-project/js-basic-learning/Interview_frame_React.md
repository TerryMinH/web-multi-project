<!--
 * @Author: TerryMin
 * @Date: 2025-01-07 11:13:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-10 15:37:03
 * @Description: file not
-->

# [React](https://react.dev/)

- react 资源

  1. [React 中文文档](https://zh-hans.react.dev/)
  2. [前端哪些事儿](https://github.com/jonny-wei)

- setState 是同步还是异步?

  1.  在 React 中，setState 的执行表现既可以是异步的，也可以是同步的，这取决于它的调用场景:
  2.  异步场景:
      2.1 React 事件处理函数中:setState 是异步执行的。这样做的主要目的是为了提高性能，React 会将多次 setState 调用合并成一次更新，从而减少不必要的渲染。
      2.2 生命周期函数中:setState 同样是异步执行的
  3.  同步场景:
      3.1 原生事件处理函数中:在原生事件处理函数（如 addEventListener 绑定的事件）中，setState 是同步执行的。因为原生事件不受 React 合成事件系统的管理，React 不会对其进行批量更新。
      3.2 setTimeout 和 Promise 等异步回调中:在 setTimeout、Promise 等异步回调函数中，setState 也是同步执行的。这是因为这些异步回调函数的执行时机在 React 批量更新之后。

- React 组件通信有几种方式

  1.  子组件向父组件传递数据有几种方式：
      1.1 回调函数:父组件把一个回调函数作为 prop 传递给子组件，子组件在需要的时候调用这个回调函数，并且把数据当作参数传入。
      1.2 自定义事件（在类组件中使用 createEvent 模拟）:子组件通过 CustomEvent 创建一个自定义事件，并且使用 window.dispatchEvent 触发该事件。父组件在 componentDidMount 里监听这个事件，在 handleChildEvent 中处理接收到的数据。
      1.3 跨级组件通信:可以使用 React 的上下文（Context）来实现跨级组件通信，避免通过多层 props 传递。
      1.4 状态管理库

- Hooks 为什么只能在最顶端呼叫？

  1.  主要是为了 React 能正确将内部 state 和对应的 Hook 进行关联。如果写在 if…else 判断式中，那每次渲染的顺序可能就会产生变化，这会使得 React 无法得知每个 Hook 对应的值应该返回什么，这将导致 state 的顺序可能错乱

- [常用 Hooks](https://juejin.cn/post/7118937685653192735)

  1.  useState:用于定义和保存元件中状态(state)
  2.  useReducer:也是一种管理 state 的 hook，可作为 useState 替代方案。当状态管理逻辑变 更复杂时，通常会建议使用 useReducer 而非 useState。
  3.  useContext 的实现原理基于 React 的上下文机制，通过 Context.Provider 提供数据，useContext 消费数据。React 的内部实现确保了上下文数据的更新能够及时反映到消费组件中，从而实现了组件间的数据共享。

  4.  useEffect:是异步执行的。在 React 完成 DOM 更新、浏览器绘制页面之后，才会执行 useEffect 中的回调函数
  5.  useLayoutEffect:是同步执行的。它会在 React 完成 DOM 更新，但浏览器还未绘制页面之前 行。也就是说，useLayoutEffect 的回调函数会阻塞浏览器的渲染，直到回调函数执行完毕，浏览器 会进行页面绘制。(对应 componentDidMount 和 componentDidUpdate )

  6.  useMemo：用于记忆一个计算结果。当某些依赖项未改变时，它会直接返回之前计算得到的结果，避免重复计算，以此提升性能。通常在需要进行昂贵计算的场景中使用，例如复杂的数组排序、对象的深度比较等。
  7.  useCallback：用于记忆一个函数。当依赖项未改变时，它会返回同一个函数实例，防止因函数的重新创建而致使子组件不必要的重新渲染。一般在将函数作为 props 传递给子组件时使用。
  8.  useRef：创建一个可变 ref 对象，这个对象在组件的整个生命周期内不会改变，可以用来存储一些不应该因为状态变化而变化的值或函数。
  9.  React.memo:React 提供的一个高阶组件（Higher-Order Component，HOC），主要用于优化函数组件的性能，避免不必要的渲染。适用 纯展示组件和 频繁渲染的组件。

- React 生命周期方法有哪些？
  [生命周期图谱](https://cloud.tencent.com/developer/article/2204517)

  1.  componentWillMount:在渲染之前执行，用于根组件中的 App 级配置。
  2.  componentDidMount:在第一次渲染之后执行可以在这里做 AJAX 请求，DOM 的操作或状态更新 及设置事件监听器。
  3.  componentWillReceiveProps:在初始化 render 的时候不会执行，它会在组件接受到新的状 (Props)时被触发，一般用于业组件状态更新时子组件的重新渲染。
  4.  shouldComponentUpdate:确定是否更新组件。默认情况下，它返回 true。如果确定在 state 或 props 更新后组件不需要在重新渲染，则可以返回 false，这是一个提高性能的方法。
  5.  componentWillUpdate:在 shouldComponentUpdate 返回 true 确定要更新组件之前执行。
  6.  componentDidUpdate:它主要用于更新 DOM 以响应 props 或 state 更改。
  7.  componentWillUnmount:它用于取消任何的网络请求，或删除与组件关联的所有事件监听器。

- 高阶组件(HOC)

  [高阶组件在 vue 中的应用](https://juejin.cn/post/6844904094885216269)
  [吃透 React 高阶组件](https://juejin.cn/post/6940422320427106335#heading-25)

  1. 定义：高阶组件是一个函数，它接收一个组件作为参数，并返回一个新的组件。它像是一个组件工厂，可以对传入的组件进行增强或复用，从而生成一个具备新特性的组件。
  2. 作用：
     2.1 代码复用：高阶组件能够把多个组件之间的公共逻辑提取出来，封装在高阶组件中，这样多个组件就可以复用这些逻辑，避免代码的重复编写。
     2.2 状态抽象和管理：可以将状态管理逻辑从组件中分离出来，让组件专注于 UI 渲染。高阶组件可以处理状态的获取、更新等操作，并将处理好的数据通过 props 传递给被包裹的组件。
     2.3 代码增强：对现有组件进行功能增强，比如添加日志记录、错误处理、性能监控等功能。
  3. 使用场景：
     3.1 权限控制：在一些需要权限验证的场景中，高阶组件可以检查用户的权限，如果用户没有相应的权限，则可以重定向到登录页面或显示权限不足的提示信息。
     3.2 日志记录：可以创建一个高阶组件，在组件的生命周期方法中添加日志记录功能，记录组件的挂载、更新和卸载等操作，方便调试和监控。
     3.3 性能优化：通过高阶组件实现代码分割、懒加载等功能，提高应用的性能。

- React 项目优化
  [React 优化建议](https://juejin.cn/post/6908895801116721160)

  1. 减少不必要的渲染（React.memo、useCallback、useMemo）。
  2. 代码分割与懒加载（React.lazy、Suspense）。
  3. 长列表渲染优化（react-window）。
  4. 网络请求优化（缓存、防抖、节流）。
  5. 资源加载: 压缩 gzip、字体压缩、http2
  6. 首屏加载: nextjs prefetch、服务端渲染（SSR）或其他高级优化手段。
  7. 打包构建: terser tree-shaking 构建缓存

- React 原理

  1. 虚拟 DOM(Virtual DOM)机制

     - 本质与作用：
       - 轻量级的 JavaScript 对象表示
       - 跨平台渲染的基础抽象层
       - 内存中计算最小 DOM 操作
     - 创建过程：
       ```js
       // JSX转译结果
       const element = React.createElement(
         "div",
         { className: "container" },
         React.createElement("h1", null, "Hello")
       );
       ```
     - 核心优势：

       - 跨平台能力,可以映射到多平台
       - 批量更新减少重排重绘
       - 差异比较算法优化性能
       - 屏蔽底层 DOM 操作差异

  2. React 核心算法:

     - 协调算法（Reconciliation）：从虚拟 DOM 比较到实际 DOM 更新的全流程，主要任务：协调渲染、调度、提交等全过程。
     - Diff 算法：Diff 算法是调和算法的核心，用于比较新旧虚拟 DOM 节点的差异。通过 Diff 算法，React 可以高效地找出需要更新的节点，减少不必要的 DOM 操作。
     - 调度算法（Scheduling）：在 React 16.x 及以后版本引入了 Fiber 架构，调度算法是 Fiber 架构的核心之一。Fiber 架构革新：链表结构实现可中断渲染、时间切片(Time Slicing)支持、优先级调度控制。

  3. [React 合成事件](https://vue3js.cn/interview/React/SyntheticEvent.html)

     - React 采用合成事件:
       - React 会将所有的事件都绑定到文档（document）上,采用事件冒泡传播,React 通过事件委托机制监听文档上面的事件类型。
       - 统一事件接口:合成事件提供了统一的接口，无论在哪个浏览器中使用，开发者都可以使用相同的方式来处理事件。这使得代码具有更好的可移植性和兼容性。提供了跨浏览器兼容的 API。
     - 阻止原生事件冒泡后 React 仍可监听的原因: React 事件是基于合成事件系统和事件委托机制，它并不依赖原生事件在 DOM 树中完整的冒泡过程来触发事件处理函数。只要事件触发点对应的 React 组件绑定了相应的事件处理函数，React 就能通过自己的机制捕获到事件并执行处理函数。

  - React 源码解读

    1.  react-dom 处理端的能力(浏览器 api `react-dom`,跨端开发`react-native`,3D 开发`react-three-fiber`),渲染器逻辑
        1.1 createRoot、ReactDom.createRoot()、createContainer
        1.2 render、updateCotainer

    2.  react 为外部开发者统一提供接口协议
        2.1 useState
        2.2 useEffect

    3.  react-reconciler(调和)
        3.1 diff 当数据变化时在执行调度器
        3.2 Filber 架构(createFiberRoot、initializaUpdateQueue)
        3.3 createUpdate、enqueueUpdate

    4.  scheduler(优先级调度):实现页面更新
        4.1 React 自己开发一个 scheduler 库(功能类似:requestIdleCallback、scheduler.postTask,但是它们无法满足):类似定时器一直检查数据是否变化,如果变化更新 DOM
        4.2 利用小根堆处理优先级

    5.  react-noop-renderer:定义 react 宿主环境

        ```js
        /**
         * 传统是面向DOM开发,通过事件驱动数据更新
         * 数据(状态) => 事件 => 渲染(虚拟DOM)
         * **/
        ```

  - React Fiber 架构理解:

    1. React Fiber 是 React 16.x 版本之后引入的协调算法架构，其目的是为了解决旧版协调算法在处理大型应用时性能方面的问题。
    2. 在 React 16 之前，采用的是栈协调算法，这是一种递归的方式来进行虚拟 DOM 的比较和更新。当组件树比较庞大时，一旦开始协调过程，就会持续占用主线程，直到整个协调完成。在这个过程中，浏览器无法处理其他任务，像用户输入、动画渲染这类操作都会被阻塞，从而导致页面出现卡顿现象。
    3. Fiber 原理:通过将协调过程拆分成小任务、实现优先级调度以及可中断和恢复的特性，有效解决了旧版协调算法在处理大型应用时的性能问题。
    4. React 不直接使用 requestIdleCallback 而是自己实现 Scheduler 模块，是为了更好地满足跨平台兼容性、灵活的优先级调度和精确的时间控制等需求，从而提高 React 应用的性能和响应能力。

## [React-redux](https://cn.react-redux.js.org/)
