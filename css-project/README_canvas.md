<!--
 * @Author: TerryMin
 * @Date: 2023-01-10 11:35:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-10 11:35:01
 * @Description: file not
-->

# CSS 图形处理技术

- [Canvas](https://juejin.cn/post/7116784455561248775#heading-56)

  - Canvas 和 SVG 是当前 HTML5 中主要使用的图形绘制技术，前者提供画布标签和绘制 API，后者是一整套独立的矢量图形语言,使用 XML 格式定义图像。

  - Canvas 与 SVG 区别

    1. 图形类型：

       - Canvas 是位图技术，通过像素操作绘制图形
       - SVG 是矢量图技术，使用 XML 描述图形，缩放时图形质量不会失真。

    2. DOM 支持：

       - Canvas 是单一 DOM 元素，绘制后无法单独访问内部图形，事件只能注册到< canvas>标签上，但通过事件委托，可以细化到像素点(x,y)的交互
       - SVG 每个图形都是 DOM 节点，可以单独操作和绑定事件，但也只能控制细化在图形元素上。

    3. 渲染方式：

       - Canvas 采用立即模式：绘制指令执行后不保留图形对象
       - SVG 采用保留模式：维护完整的图形对象树

    4. 适用场景：

       - Canvas 适合大数据量场景（如数千个元素），适合像素处理，动态渲染；适合图像密集型的游戏。
       - SVG 适合复杂交互场景（如图形编辑工具），适合静态图片展示，高保真文档查看和打印的应用场景。

    5. 扩展思考：在现代前端开发中，两种技术常结合使用：

       - 使用 Canvas 渲染大数据量的图表主体
       - 用 SVG 叠加交互元素和文本标签
       - 通过 Web Workers + OffscreenCanvas 提升性能

- Canvas & SVG 学习资源

  1.  [Canvas 使用](https://juejin.cn/post/7119495608938790942)

