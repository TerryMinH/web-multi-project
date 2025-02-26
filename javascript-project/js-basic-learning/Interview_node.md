<!--
 * @Author: TerryMin
 * @Date: 2025-01-07 11:13:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-25 14:27:46
 * @Description: file not
-->

# Nodejs

## webpack

- webpack 插件如何编写?

## Http

- [Http 三次握手与四次挥手](https://www.cnblogs.com/terrymin/p/14554404.html)

  1. 三次握手与四次挥手:一般是发生在用户在浏览器输入 URL 地址后,经过 DNS 域名解析返回 IP 地址,然后通过三次握手建立 Http 与 TCP 的链接。资源加载完后再进行四次挥手操作。

- [ Http2.0 与 Http1.1 区别](https://www.cnblogs.com/terrymin/articles/14010138.html)

  1. 新的二进制格式：二进制协议，不再是纯文本；
  2. 多路复用：可发起多个请求，废弃了 1.1 里的管道；
  3. header 压缩：使用专用算法压缩头部，减少数据传输量；
  4. 服务端推送：允许服务器向客户端推送数据；
  5. 增强了安全性，要求通信加密；

## Nodejs
