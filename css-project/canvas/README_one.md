<!--
 * @Author: TerryMin
 * @Date: 2023-01-10 11:35:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-12-19 15:33:37
 * @Description: file not
-->

# CSS 图形处理技术

一 [图片与 Base64 编码的利弊](https://juejin.cn/post/6844903989444608014)：

- 优点：Base64 可以减少一次 Http 请求：Base64 可以随着 HTML 的下载同时下载到本地，从而减少 Http 请求（cssscript 技术也可以减少 http 请求，但有其自身的局限性）
- 缺点：

1.  Base64 会增加 CSS 文件体积，会导致 CRP（Critical Rendering Path，关键渲染路径）阻塞 。
2.  图片被编码之后，生成的字符串编码大小一般而言都会比原文件稍大一些。

- 适用场景：如果图片足够小且因为用处的特殊性无法被制作成雪碧图（CssSprites），在整个网站的复用性很高且基本不会被更新。


二 [Canvas](https://juejin.cn/post/7116784455561248775#heading-56)

- Canvas 和 SVG 是当前 HTML5 中主要使用的图形绘制技术，前者提供画布标签和绘制 API，后者是一整套独立的矢量图形语言,使用 XML 格式定义图像。

1. Canvas 通过 JS 绘制图形，只有当个 HTML 元素；而 SVG 使用 XML 格式定义图形，生成的图形包含多种图形元素(Path、Line、Rect)。
2. Canvas 绘制基于像素级控制；SVG 则基于内部图形元素操作控制；
3. Canvas 是像素级渲染，依赖分辨率；SVG 则是矢量图形，缩放时图形质量不会失真；
4. 事件交互：Canvas 中，事件只能注册到< canvas>标签上，但通过事件委托，可以细化到像素点(x,y)的交互；SVG 则可以为某个元素附加 单独的 JavaScript 事件处理器，但也只能控制细化在图形元素上。
5. Canvas 适合小面积、大数据应用场景；SVG 适合大面积、小数量应用场景(图像元素少)。
6. Canvas 适用场景：适合像素处理，动态渲染和大数据量绘制; 适合图像密集型的游戏;SVG 适用场景：适合静态图片展示，高保真文档查看和打印的应用场景。


三 [Canvas使用](https://juejin.cn/post/7119495608938790942)



