<!--
 * @Author: TerryMin
 * @Date: 2022-09-24 14:28:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-15 12:25:49
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

  3. 生态系统:
     3.1 Webpack 诞生较早，拥有庞大的生态系统。有大量的 loader 和 plugin 可供选择，可以满足各种复杂的项目需求。
     3.2 Vite 的生态系统在不断发展壮大，但目前相对 Webpack 来说还不够成熟。

  4. 配置复杂度:
     4.1 Webpack 的配置非常灵活和强大，但也相对复杂。需要配置多个方面
     4.2 Vite 的配置相对简单，默认情况下已经提供了很多合理的配置

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
