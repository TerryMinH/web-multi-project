<!--
 * @Author: TerryMin
 * @Date: 2023-01-02 09:51:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-17 18:22:57
 * @Description: file not
-->

# Nodejs

[cNode社区资源](https://cnodejs.org/)

[Nodejs 学习指南](https://github.com/chyingp/nodejs-learning-guide)

## 进程与线程

[js 运行机制进程与线程](https://blog.csdn.net/dreamingbaobei3/article/details/89513338)

[浏览器多进程到 js 单线程](https://segmentfault.com/a/1190000012925872)

1. 进程(process): 是操作系统分配资源的最小单元, 进程更倾向于内存管理的概念。

2. 线程(thread): 是操作系统调度的最小单元,线程更倾向于 cpu 的运行。 [GPU 与 CPU 区别](https://zhuanlan.zhihu.com/p/156171120)

[nodejs 进程使用场景](https://juejin.cn/post/6913498911973834759)

## 同步与异步

- 异步/同步 与阻塞/非阻塞区别:[Nodejs 技术栈](https://github.com/qufei1993/Nodejs-Roadmap)

  1.  Node 的 api 默认都是异步的， 一般都有同步的方法， 比如 fs.readFile() 同步的方法是 fs.readFileSync()

- 事件驱动[Nodejs 事件驱动模型](https://blog.csdn.net/u010285974/article/details/84383557)

  事件驱动(event-driven)是 nodejs 中的第二大特性。通过监听事件的状态变化来做出相应的操作。比如读取一个文件，文件读取完毕，或者文件读取错误，那么就触发对应的状态，然后调用对应的回掉函数来进行处理。

  当涉及到 I/O 操作的时候，nodejs 会开一个独立的线程来进行异步 I/O 操作，操作结束以后将消息压入消息队列。
