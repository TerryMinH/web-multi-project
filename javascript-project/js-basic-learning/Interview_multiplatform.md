<!--
 * @Author: TerryMin
 * @Date: 2025-01-07 11:13:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-09 08:56:33
 * @Description: file not
-->

# 多端应用

## HybridApp

- HybridApp 理解:

      1.  定义:Hybrid App（混合应用程序）是一种融合了原生开发和 Web 开发技术的移动应用程序。它结合了原生应用和 Web 应用的优势，一部分功能使用原生代码（如 Java、Objective - C、Swift 等）实现，另一部分功能使用 Web 技术（如 HTML、CSS、JavaScript 等）实现，通过特定的桥梁机制使两者能够相互通信和协作。
      2.  通信机制:JavaScript 与原生代码的交互：通过 WebView 提供的接口，JavaScript 代码可以调用原生代码的方法，原生代码也可以调用 JavaScript 代码。例如，在 Hybrid App 中，JavaScript 可以调用原生的分享功能，将网页内容分享到社交媒体平台
      3. 优缺点:
       优点:
        - 跨平台兼容性好：一套代码可以在多个平台（如 iOS 和 Android）上运行，降低了开发和维护的难度
        - 更新便捷：Web 页面的更新不需要像原生应用那样通过应用商店审核，开发者可以直接在服务器端更新 Web 资源，用户下次打开应用时就能看到最新的内容
        - 开发效率高：使用 Web 技术开发部分功能，开发者可复用已有 Web 开发技能，减少开发周期与成本。

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
