<!--
 * @Author: TerryMin
 * @Date: 2025-03-20 17:09:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-22 11:57:03
 * @Description: file not
-->

# HTML & CSS

## HTML

- window.onload 与 DOMContentLoaded 区别
  window.onload 是在整个页面(包括文档内容、样式表、脚本、图片等所有外部资源)完全加载完成后才会触发
  DOMContentLoaded 是在浏览器已经完成 HTML 文档解析、构建好 DOM 树之后就会触发。

## CSS 常见面试题

- link 与@import 区别

  - 定义：

    - <link> 是 HTML 标签，用于在 HTML 文档的 <head> 部分引入外部样式表。例如：<link rel="stylesheet" href="styles.css">，rel 属性指定了链接的关系为样式表，href 属性指向外部样式表文件的路径。
    - @import 是 CSS 规则，通常写在 CSS 文件中，用于从一个 CSS 文件中引入另一个 CSS 文件。例如：@import url('other-styles.css');，它可以放在 CSS 文件的任何位置（通常在文件开头），但必须在其他样式规则之前生效

  - 区别：
    - link 不会阻塞页面渲染，@import 会阻塞页面渲染。
    - link 可以通过标签动态加载，@import 不可以。
    - link 标签是 HTML 标准的一部分，具有良好的兼容性。

- [Flex 布局：flex:1 与 flex:auto 详解](https://www.cnblogs.com/terrymin/p/14654621.html)

  1.  flex:1 表示 flex:1 1 0% ; flex:auto 表示:1 1 auto

- [盒模型理解](https://www.cnblogs.com/terrymin/p/14586108.html)
  2.1 对于行级元素，margin-top 和 margin-bottom 对于上下元素无效，margin-left 和 margin-right 有效。
  2.2 对于相邻的块级元素 margin-bottom 和 margin-top 取值方式:
  2.2.1 都是正数: 取最大值,距离=Math.max(margin-botton,margin-top)
  2.2.2 都是负数: 取最小值,距离=Math.min(margin-botton,margin-top)
  2.2.3 上面是正数，下面是负数或者 上面是负数，下面是正数: 正负相加,距离=margin-botton+margin-top

- BFC(Block formatting context):

  1. 定义:称为块级格式化上下文，是 CSS 中的一种渲染机制。它决定了块级元素如何对它的子元素内容进行布局，以及与子元素同级别的兄弟元素的关系和相互作用
  2. BFC 解决的问题:
     2.1 使用 Float 脱离文档流，高度塌陷
     2.2 Margin 边距重叠
     2.3 非浮动元素会覆盖浮动元素的位置
  3. 如何触发 BFC:
     3.1 float 的值为 left 或者 right
     3.2 overflow 的值不为 visible
     3.3 display 的值为 table-cell、table-caption 和 inline-block 之一
     3.4 position 的值为 absolute 或者 fixed 中任何一个

- 重绘和重排:

  1. 重绘:是指当元素的外观（如颜色、背景色、边框颜色等不影响布局的样式）发生改变时，浏览器重新绘制该元素的过程。它不会引起页面布局的重新计算。
  2. 重排(回流):是指当 DOM 的结构或者元素的几何属性（如宽度、高度、位置、浮动等）发生变化时，浏览器需要重新计算元素的布局，并重新绘制受影响的部分。回流的性能开销比重绘要大得多，因为它涉及到重新布局整个页面或者部分页面。

- CSS 有哪些选择器

  1.  ID 选择器:通过元素的 id 属性来选择元素，ID 名前需要加上 #。一个 HTML 文档中，每个元素的 id 应该是唯一的
  2.  类选择器
  3.  元素选择器
  4.  属性选择器:根据元素的属性或属性值来选择元素。
  5.  伪类选择器:用于选择处于特定状态的元素，如链接的不同状态、元素的第一个子元素等。伪类名前需要加上一个冒号 :。

      ```js
      /**
       * 1. 链接伪类选择器: :link：用于选择未被访问过的链接,:visited：用于选择已经被访问过的链接等
        2. 结构伪类选择器: :first-child：选择父元素的第一个子元素。:nth-child(n)：选择父元素的第 n 个子元素。:nth-of-type() 是按元素类型筛选后再依据位置选择。
        3. 目标伪类选择器: :target：选择当前活动的目标元素，通常与 URL 中的锚点（# 后面的部分）相关
        4. 表单伪类选择器: :disabled，:checked：选择被选中的表单元素等
      **/
      ```

  6.  伪元素选择器:用于选择元素的特定部分，如元素的第一个字母、第一行等。伪元素名前需要加上双冒号 ::。

      ```js
        /* 选择每个 <p> 元素的第一个字母 */
          p::first-letter {
              font-size: 24px;
          }

          /* 选择每个 <p> 元素的第一行 */
          p::first-line {
              color: brown;
          }

          /* 在每个 <p> 元素的内容前面插入一些文本 */
          p::before {
              content: ">> ";
          }

          /* 在每个 <p> 元素的内容后面插入一些文本 */
          p::after {
              content: " <<";
          }
      ```

  7.  组合选择器:通过组合多个选择器来更精确地选择元素。

      ```js
        /* 后代选择器：选择 <div> 元素内的所有 <p> 元素 */
        div p {
            background-color: lightgray;
        }

        /* 子选择器：选择 <div> 元素的直接子元素 <p> */
        div > p {
            font-style: italic;
        }

        /* 相邻兄弟选择器：选择紧跟在 <h2> 元素后面的 <p> 元素 */
        h2 + p {
            color: orange;
        }

        /* 通用兄弟选择器：选择 <h2> 元素后面的所有 <p> 元素 */
        h2 ~ p {
            text-decoration: underline;
        }
      ```

  8.  CSS 选择器的优先级从高到低依次为：important>内联样式 > ID 选择器 > 类选择器 / 属性选择器 / 伪类选择器(后面会覆盖前面) > 元素选择器 / 伪元素选择器 > 通配符选择器。

- CSS 水平垂直居中有哪些方案

  1.  行内元素或行内块元素水平垂直居中
      1.1 使用 text-align 和 line-height（适用于单行文本）
      1.2 行内块级元素：可以结合 text-align: center 和 vertical-align: middle 以及 display: flex 或 display: table-cell 来实现。
  2.  块级元素水平垂直居中
      2.1 绝对定位:已知宽度和高度的块级元素,使用绝对定位(50%)和负边距(margin-top: -50px;)
      2.2 flexbox:未知宽度和高度的块级元素
      2.3 grid 布局(父元素 display: grid;place-items: center;)
      2.4 使用绝对定位和(子元素 position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);)
      2.5 将绝对定位元素的 top、left、right、bottom 都设置为 0，然后将 margin 设置为 auto 可以实现水平垂直居中。

- CSS 绝对定位与相对定位的区别

  1.  定位参考点：
      1.1 绝对定位：当元素的 position 属性设置为 absolute 时，元素会脱离正常文档流，其定位参考点是离它最近的已定位祖先元素（即 position 属性值不为 static 的祖先元素）。若没有已定位的祖先元素，则参考点为初始包含块（通常是浏览器窗口）
      1.2 当元素的 position 属性设置为 relative 时，元素仍处于正常文档流中，其定位参考点是该元素在正常文档流中的初始位置。

  2.  对文档流的影响：
      2.1 绝对定位：绝对定位的元素会脱离正常文档流，这意味着它不会占据原来在文档流中的空间，其他元素会忽略它的存在，就好像它不存在一样，会自动填充其原本占据的空间。
      2.2 相对定位：相对定位的元素仍处于正常文档流中，它会占据原来在文档流中的空间，即使它的位置发生了偏移，其他元素也不会填充它原本的空间。

  3.  层级关系：
      3.1 绝对定位：绝对定位的元素会创建一个新的层叠上下文，并且默认情况下，绝对定位的元素会覆盖普通文档流中的元素。如果多个绝对定位的元素重叠，后出现的元素会覆盖先出现的元素，也可以通过 z-index 属性来调整它们的层级关系。
      3.2 相对定位：相对定位的元素也可以通过 z-index 属性来调整层级关系，但它不会创建新的层叠上下文，其层级关系是基于正常文档流的顺序。如果多个相对定位的元素重叠，同样后出现的元素会覆盖先出现的元素。

- CSS 像素、设备像素、设备独立像素

  1.  CSS 像素（css pixel, px）：是一个长度单位，一般情况，页面缩放比为 1，1 个 CSS 像素等于 1 个设备独立像素。px 会受每英寸像素（PPI）、设备像素比（DPR）因素影响。CSS 像素（px）主要表现为绝对单位，但在不同设备和特定布局场景下也具有一定的相对特性。
  2.  设备像素（Device Pixel）：这是物理概念，指的是设备屏幕上的最小物理显示单元，是屏幕上实际存在的像素点。
  3.  设备独立像素（Device Independent Pixel，DIP 即 CSS 像素）：这属于逻辑概念，它是一种抽象的像素单位，用于在代码里定义元素的尺寸和位置。
  4.  DPR（device pixel ratio），设备像素比，代表设备像素/设备独立像素的比值，在 JavaScript 中可以通过 window.devicePixelRatio 获取，数值越大越清晰。
  5.  PPI （pixel per inch），每英寸像素，表示每英寸所包含的像素点数目，更确切的说法应该是像素密度。数值越高，说明屏幕能以更高密度显示图像。![PPI计算](https://static.vue-js.com/f734adf0-91f2-11eb-ab90-d9ae814b240d.png)
  6.  屏幕分辨率 “320x480” 描述的是屏幕在水平和垂直方向上所具有的物理像素数量

- table

  - [table 基本概念](https://www.runoob.com/html/html-tables.html)

    - 每个表格均有若干行（由 <tr> 标签定义），每行被分割为若干单元格（由 <td> 标签定义），表格可以包含标题行（<th>）用于定义列的标题：

      - tr：tr 是 table row 的缩写，表示表格的一行。
      - td：td 是 table data 的缩写，表示表格的数据单元格。
      - th：th 是 table header 的缩写，表示表格的表头单元格。

        ```html
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <style>
              table.collapsed {
                border-collapse: collapse;
              }

              table.collapsed,
              table.collapsed th,
              table.collapsed td {
                border: 1px solid black;
              }
            </style>
          </head>

          <body>
            <table class="collapsed">
              <tr>
                <th>姓名</th>
                <th>年龄</th>
              </tr>
              <tr>
                <td>张三</td>
                <td>25</td>
              </tr>
              <tr>
                <td>李四</td>
                <td>30</td>
              </tr>
            </table>
          </body>
        </html>
        ```

  - display:table 与 table 区别
    1. table：
       - HTML 结构：使用表格专用标签(table/tr/td 等)
       - CSS 控制：部分样式受浏览器默认表格样式影响
       - 响应式适配：响应式适配较困难、浏览器兼容性好
    2. display:table：
       - HTML 结构：使用常规 HTML 元素(div/span 等)
       - CSS 控制：完全通过 CSS 实现
       - 响应式适配：更灵活、CSS2.1+ (IE8+)
    3. 适用场景：
       - table：
         - 真实表格数据展示：财务报表、数据统计表、价格对比表
         - 需要表格原生功能的场景：列宽统一控制（<colgroup>）、复杂的表头/表尾（<thead>/<tfoot>）、单元格合并（colspan/rowspan）
         - 需要严格对齐的复杂数据：日历视图、时间表、多维度数据交叉表
       - display:table：
         - 非表格内容的表格布局：表单布局（标签与输入框对齐）、等高列布局、垂直居中实现
         - 响应式设计需求
