<!--
 * @Author: TerryMin
 * @Date: 2025-01-07 11:13:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-18 10:51:31
 * @Description: file not
-->

# 多端应用

## [Taro](https://docs.taro.zone/docs/)

- HybridApp 理解:

      1.  定义:Hybrid App（混合应用程序）是一种融合了原生开发和 Web 开发技术的移动应用程序。它结合了原生应用和 Web 应用的优势，一部分功能使用原生代码（如 Java、Objective - C、Swift 等）实现，另一部分功能使用 Web 技术（如 HTML、CSS、JavaScript 等）实现，通过特定的桥梁机制使两者能够相互通信和协作。
      2.  通信机制:JavaScript 与原生代码的交互：通过 WebView 提供的接口，JavaScript 代码可以调用原生代码的方法，原生代码也可以调用 JavaScript 代码。例如，在 Hybrid App 中，JavaScript 可以调用原生的分享功能，将网页内容分享到社交媒体平台
      3. 优缺点:
       优点:
        - 提升开发效率,降低开发成本：使用 Web 技术开发部分功能，开发者可复用已有 Web 开发技能，减少开发周期与成本。
        - 跨平台兼容性好：一套代码可以在多个平台（如 iOS 和 Android）上运行，降低了开发和维护的难度
        - 更新便捷：Web 页面的更新不需要像原生应用那样通过应用商店审核，开发者可以直接在服务器端更新 Web 资源，用户下次打开应用时就能看到最新的内容

      缺点:
        - 性能相对较低：由于涉及到 WebView（用于在原生应用中显示 Web 页面的组件）的渲染和通信，Hybrid App 的性能可能不如纯原生应用。在处理复杂的动画、图形计算等场景时，可能会出现卡顿现象。
        - 依赖网络：部分功能依赖网络连接，如果网络状况不佳，可能会影响用户体验

      4. 挑战:
       4.1 性能问题：WebView 的渲染性能相对原生组件可能较低，尤其是在处理复杂的动画、大量数据加载等场景时，可能会出现卡顿现象。
       4.1.1 性能优化:可以通过缓存网页资源、优化 HTML 和 CSS 代码、减少 JavaScript 执行时间等方式来提高 WebView 的性能。例如，使用 Service Worker 进行资源缓存，避免重复请求。
       4.2 安全风险：由于 WebView 可以加载外部网页，存在一定的安全风险，如 XSS（跨站脚本攻击）、CSRF（跨站请求伪造）等。开发者需要采取相应的安全措施来防范这些风险
       4.2.1 安全优化：对 WebView 进行安全配置，如禁用 JavaScript 的某些危险功能、设置严格的 CSP（内容安全策略）等，防止安全漏洞的出现。
       4.3 兼容性问题：不同版本的操作系统和设备对 WebView 的支持可能存在差异，需要进行充分的测试和兼容处理。
       4.3.1 兼容性优化：在开发过程中，进行多设备、多版本的测试，针对不同的设备和系统版本进行适配和优化。同时，关注 WebView 内核的更新，及时修复兼容性问题。

- Taro 多端适配基本原理

  1. 编译时(编译阶段某一个时间点操作)
     1.1 代码解析：
     1.1.1 生成抽象语法树（AST）：Taro 借助 Babel、PostCSS 等工具把 React、Vue 等框架编写的代码（像 JSX、Vue 模板等）解析成抽象语法树（AST）。
     1.1.2 提取关键信息：对生成的 AST 展开分析，提取组件、样式、事件等关键信息

     1.2 代码转换：
     1.2.1 平台适配转换：依据目标平台（如微信小程序、支付宝小程序、H5、App 等）的特点和规范，对 AST 进行转换。
     1.2.2 样式处理：对样式代码进行处理，将 CSS 转换为各平台支持的样式格式。
     1.2.3 资源处理：处理项目中的静态资源，如图片、字体等。

     1.3 代码生成：生成最终可在目标平台运行的代码，并且输出到指定的目录（通常是 dist 目录）。
     1.3.1 生成目标代码：根据转换后的 AST，生成各平台的目标代码。例如，生成微信小程序的 .js、.json、.wxml、.wxss 文件，或者生成 H5 的 HTML、CSS、JavaScript 文件。
     1.3.2 项目结构生成：按照各平台的项目结构规范，生成相应的项目目录和文件。例如，生成小程序项目的 pages、components 等目录，以及 H5 项目的 public、src 等目录。

  2. 运行时
     2.1 跨端编译：Taro 利用 Babel 和 TypeScript 等工具，将开发者编写的 JSX 和 ES6+语法转换为各个平台可理解的代码。编译过程中，Taro 会分析代码中的组件和 API 调用，生成特定平台的相应实现。

     2.2 运行时环境适配：
     2.2.1 API 适配：Taro 提供了一套统一的 API 接口，这些接口会根据不同平台进行适配。例如，当调用 Taro.showToast 方法时，Taro 会依据当前运行的平台，调用相应平台的原生 API（如微信小程序的 wx.showToast、支付宝小程序的 my.showToast 等）。
     2.2.2 组件适配：对于一些跨端组件，Taro 会在运行时根据不同平台进行适配。例如，对于一个自定义的按钮组件，Taro 会根据当前平台的样式规范和交互特性，对按钮的样式和行为进行调整。

     2.3 事件处理：
     2.3.1 事件绑定：在运行时，Taro 会将统一的事件绑定转换为各平台的事件绑定方式。例如，将 React 或 Vue 中的 onClick 事件转换为小程序中的 bindtap 事件。
     2.3.2 事件传递：确保事件在不同平台上能够正确传递和处理。当用户触发一个事件时，Taro 会将事件信息传递给相应的处理函数，并根据不同平台的要求进行处理。

     2.4 样式处理：

- Taro 与 Uniapp 区别

  1. 框架背景与生态
     1.1 Taro
     1.1.1 由京东开发并开源，在电商领域应用广泛，有一定的技术积累和应用案例。
     1.1.2 生态发展较好，拥有丰富的插件和组件库，并且与京东系的技术和业务有一定的结合。社区活跃度高，开发者可以在社区中获取到大量的技术支持和资源。
     1.2 uni-app
     1.2.1 由 DCloud 公司开发，该公司长期专注于移动开发领域，旗下有 HBuilderX 开发工具。
     1.2.2 生态丰富，拥有大量的插件市场，并且与 HBuilderX 深度集成，开发者可以方便地使用 HBuilderX 的各种功能进行开发、调试和发布。
  2. 语法支持
     2.1 Taro：支持多种前端框架语法，如 React、Vue、Nerv 等。开发者可以根据自己的技术栈和项目需求选择合适的语法进行开发。例如，如果开发者熟悉 React，就可以使用 Taro + React 进行开发，利用 React 的组件化和状态管理等特性。
     2.2 uni-app：主要基于 Vue 语法进行开发，对于熟悉 Vue 的开发者来说，学习成本较低。它遵循 Vue 的开发规范，使用 Vue 的模板语法和组件化开发方式，能够快速上手。
  3. 编译和打包机制
     3.1 Taro：编译过程相对复杂，会根据不同的平台进行针对性的编译，生成不同平台的代码。在编译过程中，会对代码进行优化和转换，以确保在各个平台上的性能和兼容性。
     3.2 uni-app：编译速度较快，借助 HBuilderX 的优化编译机制，能够快速生成各个平台的代码。同样支持多端打包，并且在 HBuilderX 中提供了可视化的打包界面，操作简单方便。

- hybridApp jsbridge 实现原理

  - 面试回答：JSBridge 的核心是建立双向通信通道。我们团队采用分层设计：底层通过 Android 的 @JavascriptInterface 和 iOS 的 evaluateJavaScript 实现原生能力注入，上层封装 Promise 化接口。关键创新点是增加了协议版本协商和心跳检测，确保在弱网环境下自动降级。最近我们还探索了基于 WebView postMessage 的零延迟方案，相比传统 URL Scheme 性能提升 40%。

  - 核心原理： JSBridge 本质是 双向通信通道，实现 JavaScript 与 Native（Android/iOS）的互操作，关键技术点：

    1. 通信协议层

       - URL Scheme 拦截（WebView 请求拦截）
       - JavaScriptCore/WebKit 注入（iOS 的 evaluateJavaScript，Android 的 addJavascriptInterface）
       - 消息队列轮询（Android 的 @JavascriptInterface 双向调用）

    2. 数据传输格式
       - 标准化 JSON-RPC 协议（包含 method, params, callbackId）
       - 二进制数据通过 Base64 编码传输

  - 具体实现方案：

    - URL Scheme 拦截（经典方案）

      ```js
      // JS 调用 Native
      function callNative(method, params, callback) {
        const callbackId = "cb_" + Math.random().toString(36).substr(2);
        window[callbackId] = callback; // 挂载回调到全局

        const url = `myapp://${method}?${JSON.stringify(
          params
        )}&callback=${callbackId}`;
        const iframe = document.createElement("iframe");
        iframe.src = url;
        document.body.appendChild(iframe);
        setTimeout(() => iframe.remove(), 100);
      }
      // Native 拦截 WebView 的 shouldOverrideUrlLoading 处理请求
      ```

    - Native 注入 API（高性能方案）
      ```js
        // Android 示例
          webView.addJavascriptInterface(new Object() {
            @JavascriptInterface
            public void nativeMethod(String params) {
              // 处理逻辑后通过 webView.loadUrl("javascript:callback()") 回调
            }
          }, "NativeBridge");
      ```
    - WebView 消息管道（现代方案）

      ```js
      // 使用 window.postMessage + onMessage
      window.NativeBridge = {
        postMessage: (message) => {
          window.ReactNativeWebView?.postMessage(JSON.stringify(message));
        },
      };

      // Native 通过 WebView 的 onMessage 回调接收
      ```

- Android 和 IOS 应用基本知识了解

## 小程序

- 小程序生命周期
  小程序的生命周期包括应用生命周期和页面生命周期，它们分别描述了小程序应用整体以及单个页面从创建到销毁的整个过程:

  1.  应用生命周期(在 app.js 文件中进行监听):
      1.1 onLaunch(options): 小程序初始化时触发，全局只触发一次。获取用户信息,版本更新。
      1.2 onShow(options): 小程序启动或从后台进入前台时触发。options 包含小程序的启动参数。
      1.3 onHide:当小程序从前台进入后台时触发。
      1.4 onError:当小程序发生脚本错误，或者 API 调用失败时触发，会带上错误信息。
      1.5 onPageNotFound(options): 小程序要打开的页面不存在时触发，options 包含页面路径等信息
  2.  页面生命周期:
      2.1 onLoad:页面加载时触发，只会触发一次。该函数会接收一个参数 options，其中包含了从其他页面传递过来的参数。
      2.2 onShow:页面显示时触发。每次打开页面都会触发，当从其他页面返回当前页面时也会触发。
      2.3 onReady:在页面初次渲染完成后触发，适合进行页面交互操作。
      2.4 onHide:页面隐藏时触发，比如跳转到其他页面或者小程序进入后台。
      2.5 onUnload
  3.  不同生命周期区别:
      3.1 onHide 与 onUnload 区别:
      3.1.1 onHide 适用于页面临时隐藏时进行一些资源的临时暂停操作，以便在页面再次显示时能快速恢复
      3.1.2 onUnload 适用于页面销毁时进行资源的彻底清理，避免内存泄漏和资源浪费。

- 小程序之间跳转

  1.  小程序跳转到另外一个小程序: wx.navigateToMiniProgram

      ```js
      wx.navigateToMiniProgram({
        appId: "目标小程序的appId", // 必须填写
        path: "pages/index/index", // 可选，跳转目标页面路径（默认首页）
        extraData: { key: "value" }, // 可选，传递给目标小程序的数据
        envVersion: "release", // 目标小程序版本（develop/trial/release）
        success(res) {
          console.log("跳转成功");
        },
      });
      ```

  2.  H5 页面跳转到小程序页面:
      2.1 引入 JS-SDK, 使用微信开放标签 wx-open-launch-weapp
      2.2 通过微信小程序的 web-view 中转

      ```js
      <web-view id="web-view-id" src="your_h5_url"></web-view>;

      function jumpToMiniProgram() {
        window.postMessage({
          type: "jumpToMiniProgram",
          appId: "target_appId",
          path: "pages/index/index",
        });
      }

      Page({
        onLoad() {
          this.webViewContext = this.selectComponent("#web-view-id");
          this.webViewContext.onMessage((e) => {
            if (e.data[0].type === "jumpToMiniProgram") {
              wx.navigateToMiniProgram({
                appId: e.data[0].appId,
                path: e.data[0].path,
                success() {
                  console.log("跳转成功");
                },
                fail(err) {
                  console.error("跳转失败", err);
                },
              });
            }
          });
        },
      });
      ```

- H5 小程序分享

  1.  在微信小程序中分享 H5 页面:在 onShareAppMessage 配置分享信息
  2.  在公众号中分享 H5 页面:前端引入并配置 JS-SDK,设置分享到朋友圈和好友的信息。
  3.  在原生 app 中分享:通过调用原生 app api 分享

- 小程序双线程架构

  1.  逻辑线程（App Service）
      1.1 运行在 JavaScriptCore 引擎中，
      1.2 负责小程序业务逻辑，包括数据的处理、网络请求、事件监听与处理等。
      1.3 不能直接操作视图、需要通过通信机制
  2.  渲染线程（View）
      2.1 运行在 Webview 中，负责页面渲染，解析 HTML、CSS 等页面元素，构建 DOM 树和 CSSOM 树，然后将它们合并成渲染树，最终将页面呈现给用户
      2.2 渲染线程通常基于 WebView 技术实现。例如，微信小程序在 iOS 端使用 WKWebView，在 Android 端使用 X5 内核的 WebView。
  3.  设计目的
      3.1 安全隔离：将渲染线程和逻辑线程分离，可以有效避免恶意代码通过页面渲染漏洞对小程序的逻辑和数据进行攻击，提高小程序的安全性。
      3.2 性能优化：渲染线程专注于页面的渲染，逻辑线程专注于业务逻辑的处理，两者可以并行工作，提高小程序的整体性能。例如，在进行复杂的业务逻辑计算时，不会阻塞页面的渲染，保证页面的流畅性。
      3.3 跨平台兼容性：通过使用 WebView 作为渲染线程，可以利用 Web 技术的跨平台特性，使小程序能够在不同的操作系统和设备上运行。

- 小程序低代码快速搭建平台

  1.  [Zion](https://www.functorz.com/)
