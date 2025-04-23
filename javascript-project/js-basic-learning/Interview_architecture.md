<!--
 * @Author: TerryMin
 * @Date: 2025-01-07 11:13:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-23 11:36:53
 * @Description: file not
-->

# 架构设计

## React 与 Vue 对比

- [React 与 Vue 区别](https://zhuanlan.zhihu.com/p/180455618)

  1. React 使用的 JSX 语法;Vue 使用的是模板系统
  2. 数据流向的不同：react 从诞生开始就推崇单向数据流，而 Vue 是双向数据流
  3. 数据更新原理不同：Vue：通过响应式系统自动追踪数据的变化，当数据变化时，直接更新与之绑定的 DOM。React：当数据变化时，重新渲染组件，通过 Diff 算法找出需要更新的部分并更新真实 DOM。
  4. 拥有各自框架的生命周期及基于框架的状态管理库和路由库
  5. React 拥有庞大的生态系统和丰富的社区资源，可能能更好的应对项目中各种挑战。Vue 社区活跃度较高,在国内有广泛的应用和支持，对初学者非常友好。

  6. Vue 与 React 虚拟 DOM 有什么区别?

     - 虚拟 DOM 创建和更新方式的不同

       - React 使用 JSX 语法来创建虚拟 DOM,在更新虚拟 DOM 时，React 通常会重新渲染整个组件，然后通过 Diff 算法找出差异并更新真实 DOM。
       - Vue 使用模板语法来创建虚拟 DOM。在更新虚拟 DOM 时，Vue 会根据数据的变化自动更新受影响的 DOM 节点，而不需要重新渲染整个组件。这种细粒度的更新方式使得 Vue 在处理小规模的 DOM 变化时更加高效

     - 性能优化策略的差异:

       - React 主要通过手动控制组件的渲染来优化性能。例如，使用 shouldComponentUpdate 生命周期方法可以在组件更新前进行条件判断，决定是否需要重新渲染组件；使用 React.memo 可以对函数组件进行浅比较，只有当组件的 props 发生变化时才重新渲染。
       - Vue 采用了响应式原理和细粒度更新机制，能够自动追踪数据的变化并只更新受影响的 DOM 节点，这本身就是一种高效的性能优化策略

     - 虚拟 DOM 实现原理的差异:

       - React 使用递归的方式来创建和更新虚拟 DOM 树,React 的 Diff 算法采用了深度优先遍历的方式。
       - Vue 采用了基于响应式原理的细粒度更新机制,Vue 在初始化时会对数据进行劫持，当数据发生变化时，Vue 会自动追踪到哪些 DOM 节点依赖于这些数据，并只更新这些受影响的节点。

- MVVM 你是怎么理解

  1.  MVVM（Model-View-ViewModel）是一种前端开发的设计模式，它是在 MVC（Model-View-Controller）和 MVP（Model-View-Presenter）模式的基础上发展而来，主要用于实现视图（View）和数据模型（Model）的分离，提高代码的可维护性和可测试性。
  2.  MVVM 模式通过引入 ViewModel 实现了视图和数据模型的分离，利用数据绑定和双向数据绑定机制实现了两者之间的自动同步，在提高代码可维护性和可测试性方面具有显著优势，是现代前端开发中常用的设计模式之一。
  3.  [MVVM 与 MVC 区别](https://blog.csdn.net/qq_51066068/article/details/125441774)
      3.1 MVVM 与 MVC 最大的区别就是：它实现了 View 和 Model 的自动同步：当 Model 的属性改变时，我们不用再自己手动操作 Dom 元素来改变 View 的显示，它会自动变化。
      3.2 MVC 和 MVVM 都是一种设计思想。 主要就是 MVC 中 Controller 演变成 MVVM 中的 viewModel。 MVVM 主要解决了 MVC 中大量 DOM 操作使页面渲染性能降低，加载速度变慢的问题 。
      3.3 MVVM 并不是用 VM 完全取代了 C，ViewModel 存在目的在于抽离 Controller 中展示的业务逻辑，而不是替代 Controller，其它视图操作业务等还是应该放在 Controller 中实现。

## 常见编程思想

- 面向对象编程

  1.  定义：面向对象编程（Object-Oriented Programming）是一种编程范式，它围绕对象来组织代码，以模拟现实世界的实体及其交互。类是对象的蓝图，对象是类的实例。

  2.  四大特性：

      - 封装：隐藏内部实现，暴露接口
        ```js
        class Counter {
          #count = 0; // 私有字段
          increment() {
            this.#count++;
          }
          getCount() {
            return this.#count;
          }
        }
        ```
      - 继承：子类继承父类特性
        ```js
        class Animal {}
        class Dog extends Animal {}
        ```
      - 多态：同一接口不同实现
        ```js
        class Shape {
          draw() {}
        }
        class Circle extends Shape {
          draw() {
            console.log("画圆");
          }
        }
        ```
      - 抽象：定义规范不实现细节(JS 通过接口模拟)

  3.  设计原则：

      - SOLID 原则(单一职责、开闭原则等)
      - 组合优于继承

  4.  适用场景：
      - 需要模拟现实世界实体关系
      - 系统有明确的层次结构
      - 需要封装复杂状态
      - GUI 开发、游戏开发

- 函数式编程

  1.  函数式编程（Functional Programming，FP）是一种编程范式，它将计算视为函数的求值，避免使用共享状态和可变数据，强调函数的纯粹性和不可变性。

      - 纯函数：纯函数是函数式编程的核心概念之一，它具有两个重要特性。一是相同的输入始终会返回相同的输出，不受任何外部状态的影响；二是不会产生任何副作用，如修改全局变量、改变外部数据结构、进行 I/O 操作等。

      - 不可变数据：不可变数据指的是一旦创建就不能被修改的数据。在函数式编程中，通常通过创建新的数据结构来代替修改现有数据，这样可以避免因数据的意外修改而导致的复杂问题，提高代码的可维护性和可预测性。

      - 高阶函数：

        - 定义：高阶函数是指可以接受一个或多个函数作为参数，返回一个函数作为结果。高阶函数使得函数可以像普通数据一样被传递和使用，增加了代码的灵活性和复用性。柯里化函数实际上是高阶函数的一种特殊形式。
        - 适用场景：当你需要操作函数本身（如包装、增强、组合其他函数）时，使用高阶函数

      - 函数组合(柯里化)：

        - 定义：是一种将多参数函数转换为一系列单参数函数的技术。一个柯里化函数每次只接受一个参数，并返回一个新函数来接受下一个参数，直到所有参数都被收集完毕，然后执行原函数返回最终结果。
        - 柯里化特点：参数复用、延迟计算
        - 适用场景：当你需要分步处理参数或预先设置部分参数时

      ```js
      // 普通函数
      function add(a, b, c) {
        return a + b + c;
      }

      // 柯里化版本
      function curriedAdd(a) {
        return function (b) {
          return function (c) {
            return a + b + c;
          };
        };
      }

      // 使用
      const addOne = curriedAdd(1);
      const addOneAndTwo = addOne(2);
      addOneAndTwo(3); // 6

      // 高阶函数 + 柯里化
      function curry(fn) {
        return function curried(...args) {
          if (args.length >= fn.length) {
            return fn.apply(this, args);
          } else {
            return function (...args2) {
              return curried.apply(this, args.concat(args2));
            };
          }
        };
      }

      // 使用高阶函数curry来柯里化普通函数
      const curriedSum = curry((a, b, c) => a + b + c);
      console.log(curriedSum(1)(2)(3)); // 6
      ```

  2.  函数式编程优缺点:

      - 优点:复用性强、更好的状态管理、组合更灵活、减少代码量，提高维护性。
      - 缺点: 资源占用大：在 JS 中为了实现对象状态的不可变，往往会创建新的对象、递归消耗性能。

  3.  高阶函数与装饰器：

      - 高阶函数更通用：适用于任何函数操作场景
      - 装饰器更声明式：为类及其成员提供优雅的元编程能力
      - 装饰器本质上是特殊的高阶函数：专为类元编程设计(指编写能够操作其他程序（或自身）作为数据的程序的技术。简单说就是"编写能编写代码的代码")。
      - 现代前端开发中：React Hooks 可以看作高阶函数模式，而 Angular/NestJS 大量使用装饰器

- 面向切面编程

  1. 定义：面向切面编程（Aspect-Oriented Programming）是一种编程范式，核心思想是将与核心业务逻辑无关的横切关注点（如日志、权限、性能监控等）分离出来，通过"切面"的方式动态织入到主流程中。AOP 三大核心概念：

     - 切面（Aspect）：封装横切逻辑的模块（如日志记录器）
     - 连接点（Join Point）：程序执行中的特定点（如函数调用时）
     - 通知（Advice）：在连接点执行的动作（如函数执行前后的处理）

  2. AOP 的优势与注意事项

     - 优势：
       - 关注点分离：解决代码分散和代码纠缠问题
       - 代码复用：通用逻辑一处实现多处使用
       - 可维护性：修改横切逻辑不影响主流程
       - 动态增减：可灵活组合切面功能
     - 注意事项：
       - 避免过度使用导致调试困难（调用栈变深）
       - 注意切面执行的顺序问题
       - 在性能敏感场景慎用（代理/装饰器有性能开销）
       - 保持切面功能的单一职责

  3. 适用场景示例：

     - ES7 装饰器（Decorator）、Proxy 代理

       ```js
       // 类方法装饰器
       function log(target, name, descriptor) {
         const original = descriptor.value;
         descriptor.value = function (...args) {
           console.log(`调用方法 ${name}，参数:`, args);
           return original.apply(this, args);
         };
         return descriptor;
       }

       class UserService {
         @log
         getUser(id) {
           return { id, name: "测试用户" };
         }
       }

       new UserService().getUser(1);
       ```

     - 前端常见应用场景：性能监控、错误捕获、权限控制、数据校验

       ```js
       // 性能监控:计算函数执行时间
       function timing(fn) {
         return function (...args) {
           const start = performance.now();
           const result = fn.apply(this, args);
           console.log(`${fn.name} 执行耗时: ${performance.now() - start}ms`);
           return result;
         };
       }
       // 权限控制: 路由守卫示例
       function authGuard(router) {
         router.beforeEach((to, from, next) => {
           if (to.meta.requiresAuth && !store.state.user) {
             next("/login");
           } else {
             next();
           }
         });
       }
       // 数据校验:参数校验切面
       function validate(schema) {
         return function (target, name, descriptor) {
           const original = descriptor.value;
           descriptor.value = function (...args) {
             const { error } = schema.validate(args[0]);
             if (error) throw new Error(`参数错误: ${error.message}`);
             return original.apply(this, args);
           };
         };
       }
       ```

     - 现代框架中的 AOP 实践:React Hooks、Vue 组合式 API

       ```js
       // React Hooks:使用自定义Hook实现AOP
       function useLogger(componentName) {
         useEffect(() => {
           console.log(`${componentName} 已挂载`);
           return () => console.log(`${componentName} 即将卸载`);
         }, [componentName]);
       }

       function MyComponent() {
         useLogger("MyComponent");
         return <div>示例组件</div>;
       }
       ```

## 微前端架构

- 微前端了解么？
  [微前端架构](https://blog.csdn.net/mmc123125/article/details/143559240#)

  1.  定义: 微前端是一种将前端应用拆分成多个小型、自治的前端应用，并将这些小型应用组合成一个大型前端应用的架构模式。它借鉴了后端微服务架构的思想，强调将前端应用按照业务功能进行拆分，每个微前端应用可以独立开发、测试、部署和维护。
  2.  微前端解决的问题:解决不同产品之间集成困难、可以达到与技术栈灵活、独立开发、独立部署。可扩展性和灵活性高

- 基座只需关心子应用

  - 初始化 bootstrap
  - 挂载 mount
  - 卸载 unmount

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

## 微内核架构

- 微内核系统架构

  - 定义： 微内核架构（也称为插件化架构）:是一种将系统的核心功能和扩展功能分离的架构模式。核心系统提供基本的服务和功能，而扩展功能则以插件的形式存在，这些插件可以根据需要动态地加载和卸载，从而实现系统的功能扩展。更关注系统的可扩展性和模块化设计。

  - 微内核示例：[微内核架构在前端实现及其应用](https://juejin.cn/post/7163078031601303583)

    - 多个插件运行方式:
      3.1 管道式:插件直接顺序执行
      3.2 洋葱式:插件也是顺序执行,但是会经过两次（如： koa 中间件、babel 遍历过程中访问器 vistor 的进出过程也是如此）。
      3.3 集散式:插件独立作用,和顺序无关,一般不修改内核,而是扩展功能

  - 微内核架构注意事项

    - 微内核架构与切面编程的联系和区别
    - 微内核与微前端区别:

      1. 微前端

      - 优点：提高开发效率、技术栈灵活、易于维护和扩展。
      - 缺点：通信复杂性较高、性能开销可能较大、部署和运维难度相对较大。
      - 适用场景：适用于大型前端应用的开发，尤其是由多个团队协同开发、业务功能复杂且不断变化的项目。例如电商平台的前端应用，不同的业务模块（如商品展示、购物车、订单管理等）可以拆分成独立的微前端应用，由不同的团队负责开发和维护。

      2. 微内核架构

      - 优点：高度可扩展性和灵活性、核心系统稳定、便于功能扩展和定制。
      - 缺点：插件管理和兼容性问题可能较为复杂、对核心系统的设计要求较高。
      - 适用场景：常用于需要高度可扩展性和灵活性的系统，如编辑器、浏览器等。这些系统的核心功能相对稳定，但需要支持各种插件来扩展功能，用户可以根据自己的需求选择安装不同的插件。

## 低代码平台设计

- 低代码平台设计

  1. 需求分析(目标用户、核心功能)、架构设计（前端架构（具体实现框架）、后端架构、数据库设计）、组件库、后台拖拽界面设计、前台渲染引擎（数据绑定、逻辑编排、代码生成）、版本控制、性能优化、安全性处理、用户体验（文档教程、反馈机制）。沉淀产物（monorepo packages）：
     1.1 物料编排（组件拖拽）layout-engine-sdk（注意版本管理）
     1.2 物料渲染引擎（组件在页面中渲染）material-renderer
     1.3 数据源管理 online-database-sdk
     1.4 流程编辑器（负责配置）+流程引擎（负责执行（内存型流程、工作流流程引擎[OA 审批流、自动化批处理流]））flow-editer、flow-interpretor
     1.5 资源中心（静态资源）(大文件上传) resource

  2. layout-engine-sdk
     2.1 引擎分类

     - block：从上往下布局，相对灵活度比较低
     - flex：如：figma outlayout
     - grid：
     - canvas：一般在设计类软件居多，100%灵活方式（参考工具:figma）

       2.2 应用场景：

     - 管理后台、CRM、ERP
     - 仪表盘
     - 表单、OA、数据源

       2.3 物料管理：插件化设计管理

     - 插件化基座
     - 插件化协议
     - 插件生命周期
     - 插件开发

       2.4 物料最重要两个要素：

     - 数据协议（JSON 数据）
     - 物料渲染引擎：即组件（用来将 json 数据渲染成页面内容）

  3. material-renderer
     3.1 基础功能：框架 JSON、数据 JSON

     - 渲染方式：PC、H5
     - 设备兼容
     - 主题定制：样式 token、样式消费

  4. online-database-sdk
     4.1 canvas、table
     4.2 类似飞书多维表，字段管理，单元格交互（CellEditor、CellRenderer、CellValidator、CellRules）
     4.3 表设计
     4.4 外部数据链接

  - 低代码平台问题
    - 低代码平台渲染引擎不同场景设计：事件系统设计、逻辑编排、数据绑定

## 八年前端技术体系构建（广度 + 深度）

- 八年高级工程师成长反思复盘(初级、中级、高级、专家区别核心竞争力是什么？)

  1. 面试也是构建自己知识框架的一个过程,多复习多复盘,平时工作要有意识去完善自己的**知识广度和深度**。
  2. 多看官网一手资料,碎片化知识学习很难形成完整的知识体系。**能把知识给别人讲明白你才算是真的掌握（博客输出、论坛答疑、同事交流）**。
  3. 培养自己写博客的习惯：
     3.1 知识整理与总结：养成对个人工作和生活的定期复盘
     3.2 激发学习动力：通过博客的形式将知识教会新人也是对自己的一种成长
     3.3 技术交流与分享：与他人沟通交流也能更好的成长自我、自我价值的一种体现
     3.4 个人品牌建设：通过粉丝流量的积累后期可能也是一种财富，潜在雇主或合作伙伴更全面了解自己。
     3.5 人脉资源积累：培养一种兴趣，不要有太重的功利心。
  4. 工作八年前端，你与初级、中级(负责核心模块)、高级工程师(负责一个系统)区别在哪里呢？如果没有区别，公司为什么不选择一个三四年工作经验就能完成工作的年轻人却选择一个年龄更高，价格又贵的大龄程序员呢？虽然社会本来就是一个大草台班子，但是出来混总是要还的。如果能力与实际工作经验不能匹配，那么随着工作年限增长，它只会越来越是你的一个劣势，而且会越发明显。作为一个从事行业八年的高级开发工程师，个人技术能力和多维度的软实力（沟通能力、理解能力、管理能力、学习资源获取能力）不仅适用于这一行，即使后面从事其他行业这种软技能也依然适用

  相关链接：

  - [初中高级前端工程师分别需要掌握哪些技能](https://www.cnblogs.com/sykeswh/p/15205982.html)

- 前端技术能力图谱：

  1. 基本技能：精通 HTML/CSS3/JavaScript/ES6/TypeScript;
  2. 前端框架：React/Vue 理解框架底层实现原理
  3. 跨端开发：熟悉跨端开发框架（如 React Native、Flutter、Taro）。
  4. 混合开发：JSBridge
  5. 桌面端开发：Electron(Electron Forge)、Tauri2（基于 Rust）
  6. 服务端渲染：nuxtjs、nextjs
  7. 数字孪生(图形学与可视化)：
     - 动画
     - Canvas、SVG
     - Echarts、Threejs
     - D3.js、WebGL
  8. AI 大模型 Agent 与前端结合使用。
  9. 设计系统与架构思维：

     - 微前端
     - 微内核
     - monorepo 架构
     - 面向切面编程、函数式编程、面向对象编程思想
     - 低代码平台/无代码
     - 设计模式
     - 算法

  10. 工程化构建和后端开发(全栈)：

      - 组件库开发、性能监控系统
      - CI/CD： CI 脚手架命令、CI(docker K8s)、命令行工具
      - Webpack、Vite 打包工具原理
      - node（基建/脚手架、BFF 开发）：Cluster、Worker、子进程、process
      - 前端工具链：基于 Rust(Oxc、Rsbuild)趋势

  11. 后端与全栈知识

      - Node.js：掌握 Node.js 开发，能够搭建 BFF（Backend for Frontend）层。
      - Nodejs 框架：Express、Koa、Nestjs
      - 数据库基础：了解 SQL 和 NoSQL 数据库的基本使用。
      - DevOps 基础：了解容器化（Docker）、云服务（AWS、Azure）等。

  12. 浏览器与网络

      - 浏览器原理：理解浏览器渲染机制、事件循环、V8 引擎等。
      - 网络协议：熟悉 HTTP/HTTPS、WebSocket、TCP/IP 等协议。
      - 安全知识：了解 XSS、CSRF、CORS 等前端安全问题及解决方案。

  13. 前沿技术与趋势

      - WebAssembly：了解 WebAssembly 的应用场景。
      - Rust：新兴构建工具。
      - PWA：掌握渐进式 Web 应用开发。
      - Web3.0：了解区块链、智能合约等新兴技术

  14. 产品业务思维：

      - 需求把控
      - 方案评审
        - 几十万表格数据如何展示不卡顿？利用 Canvas 画布
      - 产品流程
      - 业务价值

  15. 管理(软实力)：

      - 问题解决能力：能够快速定位和解决复杂技术问题。
      - 学习能力：保持对新技术的敏感度，持续学习。
      - 领导力：能够指导团队成员，推动技术落地。
      - 沟通能力：与产品、设计、后端团队高效协作。
      - **向上管理**：了解领导性格与所需。领导具备哪些能力，日常工作他是如何管理的。换位思考，你能做到什么程度。
