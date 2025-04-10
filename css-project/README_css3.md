<!--
 * @Author: TerryMin
 * @Date: 2023-12-17 08:44:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-10 10:35:11
 * @Description: file not
-->

## CSS3 特效相关 API

- [setTimeOut 与 requestAnimationFrame 区别](https://blog.csdn.net/weixin_40851188/article/details/89669416)

  1. 引擎层面：setTimeout 属于 JS 引擎，存在事件轮询，存在事件队列。requestAnimationFrame 属于 GUI 引擎，发生在渲 染过程的中重绘重排部分，与电脑分辨率保持一致。

  2. 性能层面：当页面被隐藏或最小化时，定时器 setTimeout 仍在后台执行动画任 务。当页面处于未激活的状态下，该页面的屏幕刷新任 务会被系统暂停，requestAnimationFrame 也会停止。

  3. 应用层面：利用 setTimeout，这种定时机制去做动画，模拟固定时间刷新页面。requestAnimationFrame 由浏览器专门为动画提供 的 API，在运行时浏览器会自动优化方法的调用，在特定性环境下可以有效节省了 CPU 开销。

- [web 中的度数](https://zhuanlan.zhihu.com/p/42323283)

  1. 现实中，角度值是随着逆时针方向增加。在 Web 上，角度值却是随着顺时针方向增加。

- [Filter 滤镜](https://blog.csdn.net/jingru2017/article/details/79126381)

- [CSS Filter 使用示例](https://juejin.cn/post/7002829486806794276)

示例:
[前端动画库](https://juejin.cn/post/7069945906518294536#comment)
