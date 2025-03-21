<!--
 * @Author: TerryMin
 * @Date: 2025-01-07 11:13:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-22 20:13:30
 * @Description: file not
-->

# 架构设计

## 项目场景 (性能优化、架构思维)

- 注意事项

  1.  在回答性能优化相关问题时，建议结合具体项目场景，**突出你的技术深度和解决问题的能力**。通过清晰的逻辑和实际案例，展示你在性能优化方面的经验和成果。

- 你在项目中遇到哪些问题是如何解决的？(问题描述 - 分析原因(多方案对比) - 解决办法 - 经验总结)

  1.  项目工程化优化:
      1.1 咪咕影院 H5 项目版本升级: 该项目由于常年业务迭代,导致页面模块不断累积,开发时编译和打包时间接近 1 分钟多。首先通过 Speed Measure Plugin 和编译耗时相关分析工具进行分析具体原因; 制定优化方案:项目版本升级 webpack5、开启多线程打包、开启 webpack 缓存。
      1.2 Webpack 5 相比 Webpack 4 在打包启动速度上有显著提升: 引入了持久化缓存机制、模块联邦（Module Federation）、优化了模块解析算法和并行处理能力增强、更好的 Tree Shaking 支持
      1.3 经验总结:规范代码开发,通过程序配置层面去控制编码规范

  2.  参与项目微内核系统架构设计开发:
      2.1 视频播放器是一个独立的模块作为内核，广告插件、弹幕插件、会员插件等等

  3.  利用模块联邦提高开发效率:
      3.1 利用模块联邦,页面复用,提高开发效率

- 说说你对低代码平台的理解

  1.  定义:低代码平台（Low-Code Platform）是一种可视化的软件开发平台，它通过提供图形化界面和少量代码编写的方式，让开发者能够快速创建应用程序
  2.  优势:
      2.1 提高开发效率
      2.2 降低开发成本
      2.3 促进业务与技术融合
  3.  挑战与局限:
      3.1 定制化能力有限：虽然低代码平台提供了一定的自定义功能，但在处理复杂的业务逻辑和特殊需求时，可能会受到平台的限制
      3.2 性能和安全性问题

- 前端性能优化方式:

  1. 网络层面优化:
     1.1 减少 http 请求: 使用工具对代码进行压缩。将多个 CSS(mini-css-extract-plugin) 文件合并为一个，多个 JavaScript 文件合并为一个,使用 base64 表示简单的图片,减少 HTTP 请求次数。

     1.2 减少资源体积:js 压缩(terser-webpack-plugin)、css 压缩(css-minimizer-webpack-plugin)、图片压缩、gzip 压缩

     1.3 缓存:

     - DNS(（Domain Name System) 缓存:由于浏览器会在 DNS 解析步骤中消耗一定的时间，所以，对于一些高访问量网站来说，做好 DNS 的缓存工作，就会一定程度上提升网站效率
     - CDN(Content Delivery Network) 缓存:CDN 作为静态资源文件的分发网络，本身就已经提升了，网站静态资源的获取速度，加快网站的加载速度，同时也给静态资源做好缓存工作，有效的利用已缓存的静态资源，加快获取速度
     - HTTP 缓存:也是给资源设定缓存时间，防止在有效的缓存时间内对资源进行重复的下载，从而提升整体网页的加载速度[缓存](https://www.cnblogs.com/terrymin/p/13717855.html)

  2. 工程化层面: 资源(图片、脚本、CSS 样式)优化
     2.1 图片懒加载: 可以使用 IntersectionObserver API 实现图片懒加载
     2.2 JS 模块按需加载:使用动态导入（Dynamic Import）来按需加载 JavaScript 模块，避免一次性加载所有的 JavaScript 代码。

     2.3 预加载与预渲染: 对于重要的资源（如关键的脚本和样式表），使用预加载（<link rel="preload">）提前加载到浏览器缓存中。对于一些可能会被用户访问的页面，使用预渲染（<link rel="prerender">）提前在后台渲染，当用户访问时可以立即显示
     2.4 预渲染(渲染方式分为三种:客户端渲染,服务端渲染,预渲染)

     - 服务端渲染(Server-Side Rendering，SSR):
       在服务端渲染模式下，服务器在接收到客户端请求后，会将页面的初始 HTML 内容生成并发送给客户端。客户端接收到 HTML 后，进行解析和渲染，最终呈现给用户。在这种模式下，页面的大部分内容在服务器端已经渲染完成，因此页面加载速度相对较快，并且对搜索引擎友好。但是，交互式的内容和功能需要等待客户端的 JavaScript 代码执行完成后才能实现。对应的库(Next.js:基于 React 的 SSR 框架,Nuxt.js:基于 Vue 的 SSR 框架)

     - 客户端渲染（Client-Side Rendering，CSR）:
       在客户端渲染模式下，服务器返回一个基本的 HTML 页面结构和一些必要的 JavaScript 和 CSS 文件。然后，客户端的浏览器通过执行 JavaScript 代码来请求数据，并根据数据动态生成页面内容。这种模式下，页面的渲染过程主要由客户端的浏览器完成，可以实现更丰富的交互和动态内容。但是，初始加载时需要下载和执行大量的 JavaScript 代码，页面加载速度相对较慢，对搜索引擎的可访问性较差。对应的库(React,Vue)

     - 预渲染:
       就是将浏览器解析 javascript 动态渲染页面的这部分工作，在打包阶段就完成了，（只构建了静态数据）换个说法在构建过程中，webpack 通过使用 prerender-spa-plugin 插件生成静态结构的 html

  3. 项目开发层面:DOM 层面优化
     3.1 重绘和回流:

     - 重绘:是指当元素的外观（如颜色、背景色、边框颜色等不影响布局的样式）发生改变时，浏览器重新绘制该元素的过程。它不会引起页面布局的重新计算。
     - 重排:即回流，是指当 DOM 的结构或者元素的几何属性（如宽度、高度、位置、浮动等）发生变化时，浏览器需要重新计算元素的布局，并重新绘制受影响的部分。回流的性能开销比重绘要大得多，因为它涉及到重新布局整个页面或者部分页面。

  4. 复杂的脚本执行性能问题:
     4.1 减少 DOM 操作:使用文档片段（DocumentFragment）来批量处理 DOM 节点，最后再将文档片段插入到 DOM 树中。
     4.2 防抖与节流
     4.3 使用 Web Workers:对于一些耗时的计算任务，可以将其放到 Web Workers 中执行，避免阻塞主线程。Web Workers 可以在后台线程中独立运行，不会影响页面的渲染和交互。

- 微内核系统架构

  1. 微内核架构（也称为插件化架构）:是一种将系统的核心功能和扩展功能分离的架构模式。核心系统提供基本的服务和功能，而扩展功能则以插件的形式存在，这些插件可以根据需要动态地加载和卸载，从而实现系统的功能扩展
  2. [微内核架构在前端实现及其应用](https://juejin.cn/post/7163078031601303583)
  3. 多个插件运行方式:
     3.1 管道式:插件直接顺序执行
     3.2 洋葱式:插件也是顺序执行,但是会经过两次（如： koa 中间件、babel 遍历过程中访问器 vistor 的进出过程也是如此）。
     3.3 集散式:插件独立作用,和顺序无关,一般不修改内核,而是扩展功能

- 微前端了解么？
  [微前端架构](https://blog.csdn.net/mmc123125/article/details/143559240#)

  1.  定义: 微前端是一种将前端应用拆分成多个小型、自治的前端应用，并将这些小型应用组合成一个大型前端应用的架构模式。它借鉴了后端微服务架构的思想，强调将前端应用按照业务功能进行拆分，每个微前端应用可以独立开发、测试、部署和维护。
  2.  微前端解决的问题:解决不同产品之间集成困难、可以达到与技术栈灵活、独立开发、独立部署。可扩展性和灵活性高

- 微内核与微前端区别:

  1. 微前端
     - 优点：提高开发效率、技术栈灵活、易于维护和扩展。
     - 缺点：通信复杂性较高、性能开销可能较大、部署和运维难度相对较大。
     - 适用场景：适用于大型前端应用的开发，尤其是由多个团队协同开发、业务功能复杂且不断变化的项目。例如电商平台的前端应用，不同的业务模块（如商品展示、购物车、订单管理等）可以拆分成独立的微前端应用，由不同的团队负责开发和维护。
  2. 微内核架构
     - 优点：高度可扩展性和灵活性、核心系统稳定、便于功能扩展和定制。
     - 缺点：插件管理和兼容性问题可能较为复杂、对核心系统的设计要求较高。
     - 适用场景：常用于需要高度可扩展性和灵活性的系统，如编辑器、浏览器等。这些系统的核心功能相对稳定，但需要支持各种插件来扩展功能，用户可以根据自己的需求选择安装不同的插件。

- 模块联邦(Module Federation)
  [ Module Federation 2.0 构建下一代微前端架构](https://segmentfault.com/a/1190000045448357)

- 组件库设计

  1.  前期规划
      1.1 目标:要清晰知晓组件库的使用场景与目标。例如，如果是面向企业级后台管理系统，组件库可能需要更注重稳定性、功能性和与现有系统的集成；要是用于移动端的项目，那就得强调组件的轻量化和适配性。
      1.2 调研与竞品分析:对市场上现有的同类型组件库进行调研分析，学习它们的优点，同时找出尚未被满足的需求点，以此来确定自己组件库的特色与优势。
  2.  架构设计
      2.1 合理规划目录结构
      2.2 确定技术栈
      2.3 组件设计: 功能设计、API 设计、样式设计
  3.  文档与测试
  4.  版本管理与发布
  5.  持续更新与维护

## React 与 Vue 对比

- [React 与 Vue 区别](https://zhuanlan.zhihu.com/p/180455618)

  1. React 使用的 JSX 语法;Vue 使用的是模板系统
  2. 拥有各自框架的生命周期及基于框架的状态管理库和路由库
  3. React 拥有庞大的生态系统和丰富的社区资源，可能能更好的应对项目中各种挑战。Vue 社区活跃度较高,在国内有广泛的应用和支持，对初学者非常友好。

- Vue 与 React 虚拟 DOM 有什么区别?

  1. 虚拟 DOM 创建和更新方式的不同
     1.1 React 使用 JSX 语法来创建虚拟 DOM,在更新虚拟 DOM 时，React 通常会重新渲染整个组件，然后通过 Diff 算法找出差异并更新真实 DOM。
     1.2 Vue 使用模板语法来创建虚拟 DOM。在更新虚拟 DOM 时，Vue 会根据数据的变化自动更新受影响的 DOM 节点，而不需要重新渲染整个组件。这种细粒度的更新方式使得 Vue 在处理小规模的 DOM 变化时更加高效

  2. 性能优化策略的差异
     2.1 React 主要通过手动控制组件的渲染来优化性能。例如，使用 shouldComponentUpdate 生命周期方法可以在组件更新前进行条件判断，决定是否需要重新渲染组件；使用 React.memo 可以对函数组件进行浅比较，只有当组件的 props 发生变化时才重新渲染。
     2.2 Vue 采用了响应式原理和细粒度更新机制，能够自动追踪数据的变化并只更新受影响的 DOM 节点，这本身就是一种高效的性能优化策略

  3. 虚拟 DOM 实现原理的差异:
     3.1 React 使用递归的方式来创建和更新虚拟 DOM 树,React 的 Diff 算法采用了深度优先遍历的方式。
     3.2 Vue 采用了基于响应式原理的细粒度更新机制,Vue 在初始化时会对数据进行劫持，当数据发生变化时，Vue 会自动追踪到哪些 DOM 节点依赖于这些数据，并只更新这些受影响的节点。

- 说说函数式编程理解

  1. 函数式编程（Functional Programming，FP）是一种编程范式，它将计算视为函数的求值，避免使用共享状态和可变数据，强调函数的纯粹性和不可变性。
     1.1 纯函数:纯函数是函数式编程的核心概念之一，它具有两个重要特性。一是相同的输入始终会返回相同的输出，不受任何外部状态的影响；二是不会产生任何副作用，如修改全局变量、改变外部数据结构、进行 I/O 操作等。
     1.2 不可变数据:不可变数据指的是一旦创建就不能被修改的数据。在函数式编程中，通常通过创建新的数据结构来代替修改现有数据，这样可以避免因数据的意外修改而导致的复杂问题，提高代码的可维护性和可预测性。
     1.3 高阶函数:高阶函数是指可以接受一个或多个函数作为参数，或者将函数作为返回值的函数。高阶函数使得函数可以像普通数据一样被传递和使用，增加了代码的灵活性和复用性。
     1.4 函数组合(柯里化):把一个多参数函数转换为一系列单参数函数的过程。也就是说，原本接收多个参数的函数，经过柯里化后，每次只接收一个参数，并返回一个新的函数，这个新函数会等待接收下一个参数，直到所有参数都被接收完毕，才会执行原函数的逻辑。
     1.4.1 柯里化特点：参数复用、延迟计算

  2. 函数式编程优缺点:
     - 优点:复用性强、更好的状态管理、组合更灵活、减少代码量，提高维护性。
     - 缺点: 资源占用大：在 JS 中为了实现对象状态的不可变，往往会创建新的对象、递归消耗性能。

- MVVM 你是怎么理解

  1.  MVVM（Model-View-ViewModel）是一种前端开发的设计模式，它是在 MVC（Model-View-Controller）和 MVP（Model-View-Presenter）模式的基础上发展而来，主要用于实现视图（View）和数据模型（Model）的分离，提高代码的可维护性和可测试性。
  2.  MVVM 模式通过引入 ViewModel 实现了视图和数据模型的分离，利用数据绑定和双向数据绑定机制实现了两者之间的自动同步，在提高代码可维护性和可测试性方面具有显著优势，是现代前端开发中常用的设计模式之一。
  3.  [MVVM 与 MVC 区别](https://blog.csdn.net/qq_51066068/article/details/125441774)
      3.1 MVVM 与 MVC 最大的区别就是：它实现了 View 和 Model 的自动同步：当 Model 的属性改变时，我们不用再自己手动操作 Dom 元素来改变 View 的显示，它会自动变化。
      3.2 MVC 和 MVVM 都是一种设计思想。 主要就是 MVC 中 Controller 演变成 MVVM 中的 viewModel。 MVVM 主要解决了 MVC 中大量 DOM 操作使页面渲染性能降低，加载速度变慢的问题 。
      3.3 MVVM 并不是用 VM 完全取代了 C，ViewModel 存在目的在于抽离 Controller 中展示的业务逻辑，而不是替代 Controller，其它视图操作业务等还是应该放在 Controller 中实现。
