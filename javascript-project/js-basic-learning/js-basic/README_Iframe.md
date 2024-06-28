<!--
 * @Author: TerryMin
 * @Date: 2023-05-15 19:09:29
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-06-20 10:49:28
 * @Description: file not
-->

# Iframe

## URL 地址格式

## Cookie

## [Iframe 通信](https://ruanyifeng.com/blog/2016/04/same-origin-policy.html)

- [判断当前网页是否在 Iframe 中](https://blog.csdn.net/ivan5277/article/details/137518415)
- [地址域名格式](https://www.cnblogs.com/guanghe/p/11975387.html)

# 跨域

- 204: 非简单请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为"预检"请求（preflight）。浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些 HTTP 动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的 XMLHttpRequest 请求，否则就报错。

# 页面性能分析

- [lighthouse 与 performance 性能分析](https://juejin.cn/post/6965744691979485197)
- [浏览器控制面板使用技巧](https://juejin.cn/post/7076277971392135176)
- DOMContentLoaded: 当初始的 HTML 文档被完全加载和解析完成之后,DOMContentLoaded 触发。即 HTML 下载、解析完毕之后就触发。
- load: 当一个页面资源及其依赖资源已完成加载时，将触发 load 事件。即 html、css、js、图片等资源都已经加载完之后触发
