<!--
 * @Author: TerryMin
 * @Date: 2022-05-20 10:22:36
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-20 17:10:15
 * @Description: file not
-->

# Buffer 
Buffer(Nodejs中的缓冲区)[https://juejin.cn/post/6844903897438371847#heading-0] :Buffer指的是缓冲区，它是计算机中的一个小物理单位；用于读取或操作二进制数据流。做为 Node.js API 的一部分使用时无需 require，用于操作网络协议、数据库、图片和文件 I/O 等一些需要大量二进制数据的场景。

一 创建buffer的三种方式：
1. Buffer.from：表示通过现有的数据结构创建一个buffer
2. Buffer.alloc：表示通过指定长度创建一个buffer 
3. Buffer.allocUnsafe


二 Buffer相关概念：
二进制数据：是使用 0 和 1 两个数码来表示的数据
流，英文 Stream 是对输入输出设备的抽象，这里的设备可以是文件、网络、内存等



