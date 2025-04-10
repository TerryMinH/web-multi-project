<!--
 * @Author: TerryMin
 * @Date: 2022-09-24 14:28:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-10 10:24:19
 * @Description: file not
-->

# 工程化构建工具

## [webpack](https://webpack.js.org/)

- webpack 构建流程(编译原理)

  1. 初始化参数
     1.1 配置文件读取：Webpack 启动后，会先读取用户提供的配置文件（通常是 webpack.config.js），也可以通过命令行参数来覆盖配置文件中的部分配置。配置文件中包含了入口文件、输出路径、loader、插件等各种编译所需的信息。
     1.2 合并默认配置：Webpack 有一套自己的默认配置，会将用户提供的配置与默认配置进行合并，最终得到完整的编译配置参数。
  2. 创建编译器对象
     2.1 实例化 Compiler：根据合并后的配置参数，Webpack 会创建一个 Compiler 对象。Compiler 对象是 Webpack 的核心对象，它包含了整个编译过程的所有信息和方法，负责统筹管理整个编译流程。
     2.2 挂载插件：在创建 Compiler 对象的过程中，Webpack 会遍历配置中定义的插件，并调用它们的 apply 方法，将 Compiler 对象作为参数传递给插件。插件可以通过监听 Compiler 对象上的各种钩子事件，在编译过程的不同阶段执行特定的任务。
  3. 开始编译
     3.1 确定入口文件：根据配置中的 entry 选项，Webpack 会确定编译的入口文件。入口文件是整个应用程序的起点，Webpack 会从入口文件开始递归地解析所有依赖的模块。
     3.2 创建 Compilation 对象：Compiler 对象会创建一个 Compilation 对象，Compilation 对象代表了一次完整的编译过程，它负责管理模块的构建、打包等具体任务。
  4. 模块解析
     4.1 构建模块依赖图：Webpack 从入口文件开始，通过 loader 对文件进行转换，然后解析文件中的 import、require 等语句，找出该模块所依赖的其他模块。接着，对这些依赖模块进行同样的处理，递归地构建出整个应用程序的模块依赖图。
     4.2 loader 处理：在解析模块的过程中，Webpack 会根据配置中的 module.rules 选项，使用相应的 loader 对不同类型的文件进行处理。例如，使用 babel-loader 处理 JavaScript 文件，将 ES6+ 代码转换为向后兼容的版本；使用 css-loader 和 style-loader 处理 CSS 文件，将 CSS 代码注入到 HTML 中。
  5. 模块打包
     5.1 生成 chunk：在构建完模块依赖图后，Webpack 会根据一定的规则将模块分割成多个 chunk（代码块）。chunk 是 Webpack 打包过程中的一个重要概念，它可以是一个入口文件及其所有依赖模块，也可以是通过代码分割（如 import() 动态导入）生成的异步模块。
     5.2 代码生成：对于每个 chunk，Webpack 会将其中的模块代码进行合并和优化，生成最终的 JavaScript 代码。在生成代码的过程中，Webpack 会为每个模块分配一个唯一的 ID，并使用特定的模块加载机制（如 CommonJS、ES Modules）来确保模块之间的正确加载和执行。
  6. 输出文件
     写入文件系统：Webpack 会根据配置中的 output 选项，将生成的 chunk 代码写入到指定的输出目录中。通常，每个 chunk 会对应一个输出文件，文件名可以通过配置进行自定义。

- webpack 原理

  1. [webpack 简单实现流程](https://juejin.cn/post/6844904038543130637) =>mini-webpack
  2. [webpack 设计理念](https://juejin.cn/post/7170852747749621791?)
  3. [webpack 命令行参数详解](https://blog.csdn.net/victoryzn/article/details/81872718)

- Loader 与 Plugin 区别:

  1. 作用不同:
     1.1 Loader: 本质是一个函数,webpack 默认只能打包处理 JS 文件，或者 JS 模块。但是像 CSS 模块和图片模块需要 loader 工具处理；loader 就是打包那些 webpack 默认打包不了的模块的工具。
     1.2 Plugin：本质是一个类,可以扩展 webpack 的功能，让 webpack 具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

  2. 用法不同:
     2.1 Loader 在 module.rules 中配置，也就是说他作为模块的解析规则而存在。
     2.2 Plugin 在 plugins 中单独配置。 类型为数组，每一项是一个 plugin 的实例，参数都通过构造函数传入。

- webpack 常用 loader?

  1. url-loader:它与 file-loader 作用相似，也是处理图片的，只不过 url-loader 可以设置一个根据图片大小进行不同的操作，如果该图片大小大于指定的大小，则将图片进行打包资源，否则将图片转换为 base64 字符串合并到 js 文件里。
  2. style-loader:通过注入\<style\>标签将 CSS 插入到 DOM 中
  3. css-loader:仅处理 css 的各种加载语法(@import 和 url()函数等),就像 js 解析 import/require() 一样
  4. less-loader:解析 less，转换为 css

- [webpack5 module federation 模块联邦](https://juejin.cn/post/7048125682861703181)

- webpack 性能瓶颈分析与优化升级

  1.  [webpack4 升级到 webpack5](https://blog.csdn.net/m0_37937502/article/details/124986762)
  2.  [五种可视化方案分析 webpack 打包性能瓶颈](https://juejin.cn/post/6844904056985485320)
  3.  [webpack5 性能优化](https://juejin.cn/post/6973607639502553095)

## [Vite](https://cn.vite.dev/)

- Vite 打包原理:

  1.  开发阶段:
      1.1 基于原生 ES 模块（ESM）:Vite 利用现代浏览器对原生 ES 模块的支持，在开发阶段直接以 ESM 的方式提供模块。当启动开发服务器时，Vite 会拦截浏览器的请求，将项目中的模块以 ESM 的格式返回给浏览器。
      1.2 按需加载模块:Vite 采用按需加载策略，只有当浏览器请求某个模块时，Vite 才会对该模块进行处理和编译。
      1.3 快速热更新（HMR）:Vite 的 HMR 功能可以在代码发生变化时，只更新发生变化的模块，而不需要重新加载整个页面。

  2.  生产阶段:
      2.1 构建优化: 在生产环境中，Vite 会使用 Rollup 进行打包。Rollup 是一个 JavaScript 模块打包工具，它可以将多个模块打包成一个或多个文件，以减少浏览器的请求次数。
      Vite 在打包过程中会对代码进行优化，包括压缩代码、去除死代码、合并文件等操作，以减小文件体积，提高页面加载速度。

      2.2 静态资源处理:Vite 会对项目中的静态资源（如图片、字体等）进行处理。对于较小的图片，Vite 可以将其转换为 Base64 编码，直接嵌入到 HTML 或 CSS 文件中，减少请求次数；对于较大的图片，Vite 会对其进行压缩和优化，并生成相应的文件名哈希，以利用浏览器的缓存机制。

      2.3 代码分割:Vite 支持代码分割，将应用程序分割成多个较小的文件，实现按需加载。这样可以避免一次性加载整个应用程序，提高首屏加载速度。例如，对于路由组件，Vite 可以将其分割成独立的文件，当用户访问相应的路由时再加载对应的组件。

      2.4 缓存机制
      2.4.1 文件系统缓存:Vite 会对处理过的模块进行缓存，当再次处理相同的模块时，可以直接从缓存中读取，避免了重复的处理过程。这在项目规模较大或者频繁修改代码时，能够显著提高打包速度。
      2.4.2 浏览器缓存：Vite 会为打包后的文件生成唯一的文件名哈希，利用浏览器的缓存机制，当文件内容没有变化时，浏览器可以直接从缓存中加载文件，减少了不必要的网络请求。

  3.  注意:
      3.1 原生 ES 模块（ESM）:JavaScript 原生 ES 模块（ES Modules）是 ECMAScript 2015（ES6）引入的一种模块系统，用于在 JavaScript 中实现模块化编程。在 ES 模块出现之前，JavaScript 没有内置的模块系统，开发者通常使用 CommonJS（用于 Node.js）、AMD（如 RequireJS）等第三方模块规范来实现模块化

- Bundless 与 esbuild 理解

  1.  bundless:
      - 传统打包构建的问题:传统前端构建流程里，Webpack、Rollup 等打包工具会把项目里所有模块和资源打包成一个或多个文件，部署到生产环境。不过，这种方式存在一些问题：构建时间长、配置复杂、调试困难。
      - Bundless 的工作原理:Bundless 构建过程中，不再对模块进行打包，而是直接将源代码提供给浏览器或运行环境。它利用现代浏览器和运行环境对 ES 模块（ES Modules）的支持，让浏览器或运行环境在运行时动态加载和解析模块。
      - Bundless 的优点:快速构建、简化配置、易于调试
      - Bundless 的缺点:兼容性问题、网络请求增加：由于模块是动态加载的，会增加网络请求次数，在网络状况不佳的情况下，可能会影响页面加载速度。
  2.  esbuild:
      - esbuild 是一个用 Go 语言编写的 JavaScript 和 TypeScript 打包工具
      - 超快的构建速度：由于采用 Go 语言编写，esbuild 充分利用了并行计算的优势，构建速度比传统的 JavaScript 打包工具（如 Webpack、Rollup）快出几个数量级。
      - 支持多种功能：esbuild 支持代码压缩、语法转换、打包等常见的构建功能，能够满足大部分项目的构建需求。
      - 集成性好：esbuild 可以很方便地集成到其他构建工具中，例如 Vite 在开发环境中就使用 esbuild 来进行模块的转换和打包。
      - Vite 在开发阶段使用 esbuild 来处理 JavaScript 和 TypeScript 文件的转换，利用 esbuild 的快速构建能力来实现快速的冷启动和热更新。而在生产环境中，Vite 默认使用 Rollup 进行打包，以确保生成的代码具有更好的兼容性和性能。

- Vite 插件及开发

  1.  定义:Vite 本身支持常见的 JavaScript、CSS、JSON 等文件类型，但对于一些特殊的文件类型，如 .vue、.jsx、.ts 等，需要借助插件来处理。Vite 插件通过扩展 Vite 的功能，为开发者提供了更多的灵活性和便利性，使得 Vite 能够适应各种不同的项目需求。
  2.  Vite 插件开发:[Vite 写一个插件](https://juejin.cn/post/7075678169122439181)

## 工程化工具

- webpack 与 vite 区别？

  1. 设计理念:
     1.1 Webpack 是一个高度可配置的模块打包工具，它采用的是 “打包优先” 的理念。它把所有资源（如 JavaScript、CSS、图片等）都视为模块，通过各种 loader 和 plugin 对这些模块进行处理和转换，最终将它们打包成一个或多个静态文件。
     1.2 Vite 秉持 “服务优先” 的理念，利用现代浏览器原生支持 ES 模块的特性，在开发阶段无需打包，直接以原生 ESM 方式提供源码。只有在生产环境下才进行打包，这样可以显著提高开发服务器的启动速度和热更新速度。

  2. 构建速度:
     2.1 webpack 需要对整个项目进行打包,将所有模块进行解析、转换和合并,这个过程由于会涉及大量文件读写和计算操作,因此启动时间较长
     2.2 Vite 利用 esbuild 进行预打包和依赖解析，首次启动和热更新速度快。在开发环境下无需打包，当浏览器请求某个模块时，Vite 才会对该模块进行即时编译。

  3. 配置复杂度:
     3.1 Webpack 的配置非常灵活和强大，但也相对复杂。需要配置多个方面
     3.2 Vite 的配置相对简单，默认情况下已经提供了很多合理的配置

- 前端工程化的理解

  1. 工程化目标
     1.1 提高开发效率：通过自动化工具和流程，减少重复劳动，例如使用脚手架工具快速搭建项目结构，使用构建工具自动处理代码压缩、合并等任务。
     1.2 保证代码质量：借助代码规范、代码检查工具（如 ESLint、Prettier）和单元测试框架（如 Jest、Mocha），确保代码符合统一的风格和标准，减少潜在的错误和漏洞。
     1.3 增强项目的可维护性：采用模块化开发思想，将代码拆分成独立的模块，降低代码的耦合度，方便后续的修改和扩展。
     1.4 优化项目部署：通过自动化部署工具，实现代码的快速、稳定部署，减少人工操作带来的风险和错误，确保项目能够及时上线。

  2. 工程化的主要内容
     2.1 模块化开发:代码模块化：将一个大型的前端项目拆分成多个小的、独立的模块，每个模块负责特定的功能。资源模块化：不仅代码可以模块化，图片、字体等资源也可以进行模块化管理。
     2.2 组件化开发：将页面中可复用的部分封装成组件，采用组件化架构可以提高开发效率和代码的可维护性。
     2.3 构建工具：打包和压缩、代码转换、资源处理。
     2.4 代码规范和检查
     2.5 持续集成和持续部署（CI/CD）：在开发过程中，频繁地将代码集成到主干分支，并进行自动化测试和构建。通过持续集成，可以及时发现代码合并带来的冲突和问题，保证代码的质量。常见的持续集成工具如 Jenkins、GitLab CI/CD 等。

- 如果让你设计一个打包工具,你怎么设计

  1. 明确需求和目标
     1.1 支持的文件类型：确定工具要支持的文件类型，如 .js、.jsx、.ts、.css 等。
     1.2 打包功能：实现代码分割、模块解析、压缩代码等功能。
     1.3 性能：保证打包速度快，内存占用少。
     1.4 开发阶段：快速开发启动,利用 ESM 模块加载,尽量减少服务启动时间、HMR（模块热替换）
     1.5 生产阶段：生产化构建,提供类似 rollup 这种进行代码拆分、压缩、优化处理；编译侧能力:编译工具、treeShaking、chunk 机制；运行时优化:模块缓存

  2. 设计架构
     2.1 解析阶段：使用解析器（如 @babel/parser）将代码解析成抽象语法树（AST）
     2.2 转换阶段：遍历 AST，找出模块的依赖关系。对代码进行转换，例如将 ES6+ 语法转换为 ES5 语法。
     2.3 打包阶段：模块合并，根据依赖关系将所有模块合并成一个或多个文件。对合并后的代码进行压缩和优化。
     2.4 输出阶段：将优化后的代码写入到磁盘
  3. 测试和优化
  4. 提供插件机制：为了让打包工具更具扩展性，可以提供插件机制，允许开发者自定义打包过程。

- 有了解过哪些打包构建方案

  1.  tsc：
      1.1 仅支持 ts 编译
      1.2 无法代码拆分、模块打包
      1.3 性能差、配置繁琐 tsconfig、有时需要借助 babel、postcss

  2.  rollup：
      2.1 tree-shaking,移除未使用代码
      2.2 简化配置
      2.3 丰富插件生态，将功能的生态构建交给全世界开发者，框架插件规则制定者
      2.4 适用场景：UI 库、工具库（vue-use、react-use）、组件库、按需导入的场景
      2.5 缺点：不适合大型业务项目，一般采用 vite、webpack；热更新和性能方面不足

  3.  tsup：
      3.1 是基于 ESbuild 极速打包工具。
      3.2 性能好、多格式
      3.3 代码动态导入、代码分割
      3.4 适用场景：工具库、脚手架
      3.5 缺点：不适合业务构建、插件生态没有 rollup 繁荣
  4.  parcel：
  5.  webpack
  6.  vite：是基于 esbuild 和 rollup 现代打包工具,充分利用 ES 模块原生能力、提升了开发体验和性能。
  7.  Rspack：
      7.1 定义：是一个基于 Rust 语言开发的高性能前端构建工具，设计目的是提供与 webpack 兼容的 API,，让开发者可以在不进行大量代码修改的情况下，从 Webpack 迁移到 Rspack，同时显著提升构建速度。
      7.2 适用场景：需要平滑迁移现有 Webpack 项目、需要稳定生产构建能力、项目使用多种前端框架、依赖特定 Webpack 插件。
  8.  Turbopack：
      8.1 定义：是由 Webpack 的创建者 Tobias Koppers 携手 Next.js 团队采用 Rust 语言编写的，针对 JavaScript 和 TypeScript 进行优化的增量打包工具。
      8.2 适用场景：使用 Next.js 开发项目

  9.  基于 Rust 构建工具
      9.1 oxc/swc(替代 babel)编译工具
      9.2 解决单线程瓶颈、功能统一(Lint 格式化、ast 统一、代码检查)

## 前端性能优化

- 前端性能优化方式:

  1.  资源层面优化:

      - 优化图片:使用合适的图片格式(WebP),并对图片进行压缩。图片尺寸做一定的限制。
      - 延迟加载:使用懒加载技术，只有在用户滚动到特定区域时再加载相关资源。按需加载所需模块资源
      - 精简 CSS 和 JavaScript：
        - 代码压缩：移除代码中的空格、注释和多余的字符、减少文件大小
        - 合并文件：将多个 CSS 和 JavaScript 文件合并为一个文件，减少 HTTP 请求次数
        - 树摇(Tree Shaking)：移除未使用的代码，减少打包文件的体积
      - 减少第三方库的：按需加载第三方库或使用更轻量级的替代方案。

      - 预加载与预渲染: 对于重要的资源（如关键的脚本和样式表），使用预加载（<link rel="preload">）提前加载到浏览器缓存中。对于一些可能会被用户访问的页面，使用预渲染（<link rel="prerender">）提前在后台渲染，当用户访问时可以立即显示
      - 预渲染(渲染方式分为三种:客户端渲染,服务端渲染,预渲染)

  2.  网络层面优化:

      - 使用 CDN：将静态资源托管在内容分发网络上，缩短资源加载的时间。
      - 压缩文本资源：启用 Gzip 或 Brotli 压缩，减少 HTML、CSS 和 JavaScript 文件的体积。
      - 服务端渲染和静态生成：使用服务端渲染或静态生成技术，减少客户端渲染的压力。
      - 如果服务器支持 HTTP2.0,可以配置服务器在客户端请求 HTMLL 时推送关键资源。
      - 缓存:
        - DNS(（Domain Name System) 缓存:由于浏览器会在 DNS 解析步骤中消耗一定的时间，所以，对于一些高访问量网站来说，做好 DNS 的缓存工作，就会一定程度上提升网站效率
        - CDN(Content Delivery Network) 缓存:CDN 作为静态资源文件的分发网络，本身就已经提升了，网站静态资源的获取速度，加快网站的加载速度，同时也给静态资源做好缓存工作，有效的利用已缓存的静态资源，加快获取速度
        - HTTP 缓存:也是给资源设定缓存时间，防止在有效的缓存时间内对资源进行重复的下载，从而提升整体网页的加载速度[缓存](https://www.cnblogs.com/terrymin/p/13717855.html)

  3.  DOM 操作和脚本执行方面:
      - 减少 DOM 操作:使用文档片段（DocumentFragment）来批量处理 DOM 节点，最后再将文档片段插入到 DOM 树中。
      - 防抖与节流
      - 使用 Web Workers:对于一些耗时的计算任务，可以将其放到 Web Workers 中执行，避免阻塞主线程。Web Workers 可以在后台线程中独立运行，不会影响页面的渲染和交互。

  - 建立性能监测指标：

    1. FP(First Pait) 首次绘制：指的是浏览器首次将任何内容(包含背景、文本、图片等任意元素)绘制到屏幕上的时间点，即只要浏览器开始在屏幕上绘制像素，FP 就被触发。它标志着页面开始有视觉上的变化，是页面加载过程中一个重要的起始视觉信号。
    2. FCP(First Contentful Paint)首次内容绘制：用户首次看到页面上有实际意义内容的时刻。
    3. LCP(Largest Contentful Paint)最大内容绘制：指的是在视口内可见的最大内容元素(图片、视频、包含文本的块级元素等)渲染到屏幕上的时间点。浏览器会根据元素在视口中的大小来确定。
    4. INP(Interaction to Next Paint)交互至下次绘制：衡量的是用户与页面进行交互（如点击按钮、输入文本等）后，页面响应交互并完成下一次绘制所需的时间。
    5. TTI(Time to Interactive)可交互时间：指页面达到完全可交互状态的时间点。是页面在 FCP 之后，主线程在 5 秒内没有长任务，并且所有的子资源（如图片、脚本等）都已加载完成的最早时间。TTI 侧重于衡量页面何时能够稳定地响应用户的各种操作，如点击、输入等。
    6. TBT(Total Blocking Time)总阻塞时间：指的是从 FCP 到 TTI 之间，主线程被阻塞以至于无法响应用户输入的总时间。TBT 时间越长，说明在页面加载过程中，用户等待交互的时间就越长，会让用户感觉页面反应迟钝，操作不流畅。
    7. FMP(First MeaningFul Paint)首次有效绘制：指的是页面的主要内容首次渲染完成的时间点。(缺乏明确计算标准，逐渐被弃用)

    - 统计分析工具
      - FP、FCP 可以用 Performance 工具来检测，FMP 可以使用 MutationObserver 来实现
      - 第三方工具分析：PageSpeed Insight、WebPageTest

    ```js
    // 在浏览器中，可以使用 PerformanceObserver 来统计 INP。
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        let inp = 0;
        list.getEntries().forEach((entry) => {
          if (entry.interactionId) {
            const interactionDuration = entry.duration;
            if (interactionDuration > inp) {
              inp = interactionDuration;
            }
          }
        });
        console.log("INP:", inp);
      });
      observer.observe({ type: "event", buffered: true });
    }

    // 使用 PerformanceObserver 来统计 LCP
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log("LCP:", lastEntry.startTime);
        }
      });
      observer.observe({ type: "largest-contentful-paint", buffered: true });
    }
    ```

- SSR、CSR

  - 服务端渲染(Server-Side Rendering，SSR):
    在服务端渲染模式下，服务器在接收到客户端请求后，会将页面的初始 HTML 内容生成并发送给客户端。客户端接收到 HTML 后，进行解析和渲染，最终呈现给用户。在这种模式下，页面的大部分内容在服务器端已经渲染完成，因此页面加载速度相对较快，并且对搜索引擎友好。但是，交互式的内容和功能需要等待客户端的 JavaScript 代码执行完成后才能实现。对应的库(Next.js:基于 React 的 SSR 框架,Nuxt.js:基于 Vue 的 SSR 框架)

  - 客户端渲染（Client-Side Rendering，CSR）:

    1. 在客户端渲染模式下，服务器返回一个基本的 HTML 页面结构和一些必要的 JavaScript 和 CSS 文件。然后，客户端的浏览器通过执行 JavaScript 代码来请求数据，并根据数据动态生成页面内容。这种模式下，页面的渲染过程主要由客户端的浏览器完成，可以实现更丰富的交互和动态内容。但是，初始加载时需要下载和执行大量的 JavaScript 代码，页面加载速度相对较慢，对搜索引擎的可访问性较差。对应的库(React,Vue)
    2. 适用于单页应用

  - 预渲染:
    就是将浏览器解析 javascript 动态渲染页面的这部分工作，在打包阶段就完成了，（只构建了静态数据）换个说法在构建过程中，webpack 通过使用 prerender-spa-plugin 插件生成静态结构的 html

## Git

- Git 常用那些命令

  1.  git reset 与 git revert 区别
      1.1 git reset：主要用于撤销提交，能让当前分支的指针移动到指定的提交点，把提交历史改变。此操作不会生成新的提交记录，而是直接修改提交历史。
      1.2 git revert：用于撤销某个特定提交所做的更改，而且它会以新的提交记录来保存撤销操作，不会改变原有的提交历史。
      1.3 适用场景：在公共分支上，建议优先使用 git revert 来避免破坏提交历史；而在本地分支上，git reset 可以更方便地丢弃不需要的提交。
  2.  git merge 与 git rebase 区别:在于是否会保留原有的提交（或者说破坏原有的提交结构）
      2.1 git merge 会对提交历史进行保留，更适合多人协作开发的场景，因为如果出现问题也可以追溯到历史的每一次提交。
      2.2 git rebase 则是会让提交历史更加简洁易读，保持提交历史的线性结构，所以更适合个人开发和整理分支的情况。
  3.  git pull 命令是一个高层次的命令，它相当于 git fetch 和 git merge 两个命令的组合。简而言之，git pull 用于从远程仓库拉取更新并将它们合并到当前分支。
