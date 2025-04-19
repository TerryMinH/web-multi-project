<!--
 * @Author: TerryMin
 * @Date: 2022-05-31 09:09:32
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-18 15:39:21
 * @Description: file not
-->

# [Nodejs](https://nodejs.cn/api/)

## Node 基本 API

- Node 全局变量

  1.  process(进程)
      - process.cwd()：返回的是当前 Node.js 进程的工作目录。工作目录是指在命令行中启动 Node.js 脚本时所在的目录，它会随着进程的执行环境变化而改变。(current working directory)
  2.  \_\_dirname(模块级别全局对象)：它是一个在模块作用域内有效的全局变量，返回的是当前执行脚本所在的目录的绝对路径。如果是 node 支持 ESM 形式则：import.meta.direname。
  3.  \_\_filename(模块级别全局对象)：获取当前文件所在的路径和文件名称，包括后面的文件名称

  ```js
  /**
   * 文件路径：D:\project\src\example.js
   假设你在 D:\project\src 目录下执行 node example.js，那么 process.cwd() 和 __dirname 都会返回 D:\project\src。但如果你在 D:\project 目录下执行 node src\example.js，process.cwd() 会返回 D:\project，而 __dirname 仍然返回 D:\project\src。
   **/
  console.log("process.cwd():", process.cwd());
  console.log("__dirname:", __dirname);
  ```

- path 模块

  1. path: path 是 nodeJS 的一个内置模块，可以直接在其他 js 文件中导入该模块

  ```js
  var path = require("path");
  const p = path.resolve("./", "demo", "img");
  console.log(p);
  ```

  2. path.join() 主要用于拼接路径，返回的可能是相对路径，也可能是绝对路径，这取决于传入的路径片段。
  3. path.resolve() 用于将路径解析为绝对路径，适合需要绝对路径的场景。如果没有传入任何参数，它会返回当前**工作目录**的绝对路径。

- fs 模块

  1. (fs 基本使用)[https://blog.csdn.net/github_38140984/article/details/83006101]
  2. readFile 与 createReadStream 函数区别
     2.1 readFile: 函数异步读取文件的全部内容，并存储在内存中，然后再传递给用户。
     2.2 createReadStream: 使用一个可读的流，逐块读取文件，而不是全部存储在内存中。
     2.3 与 readFile 相比，createReadStream 使用更少的内存和更快的速度来优化文件读取操作。如果文件相当大，用户不必等待很长时间直到读取整个内容，因为读取时会先向用户发送小块内容。
  3. 文件读取两种模式：同步和异步，I/O(Input/Output)

- os 模块

- process(进程)

  - 进程与线程区别

    - 进程：

      - 定义：是程序在操作系统中的一次执行过程，是系统进行资源分配和调度的基本单位。
      - 资源管理：每个进程都有自己独立的内存空间、系统资源（如文件描述符、进程 ID 等）。创建和销毁进程时需要操作系统进行较多的资源分配和回收操作，因此进程的创建和销毁开销相对较大。而且进程之间的通信也相对复杂，需要使用特定的进程间通信（IPC）机制，如管道、消息队列、共享内存等。

    - 线程(thread)：

      - 定义：线程是进程中的一个执行单元，是 CPU 调度和分派的基本单位。一个进程可以包含多个线程，这些线程共享进程的内存空间和系统资源，但每个线程有自己独立的执行栈和程序计数器，用于记录线程当前的执行状态。比如在浏览器进程中，可能会有负责渲染页面的线程、处理用户交互的线程等。
      - 资源管理：线程共享所属进程的资源，创建和销毁线程的开销相对较小。线程通信直接访问内存共享区域；但是多个线程同时访问共享资源时可能会产生竞态条件，需要使用同步机制（如锁、信号量等）来保证数据的一致性。

    - 进程和线程资源：

      - [浏览器多进程到 js 单线程](https://segmentfault.com/a/1190000012925872)
      - [GPU 与 CPU 区别](https://zhuanlan.zhihu.com/p/156171120)
      - [nodejs 进程使用场景](https://juejin.cn/post/6913498911973834759)

  - child_process

    1. 定义：child_process 模块允许你创建子进程。这些子进程和主进程是相互独立的，能执行不同的任务。子进程可以是外部程序，也可以是另一个 Node.js 脚本。借助 child_process，你可以在 Node.js 应用中调用系统命令、执行其他脚本等。
    2. 进程间通信：子进程和主进程之间的通信相对灵活。你可以通过标准输入输出（stdin、stdout、stderr）进行通信，也可以使用 send 方法发送消息。通信方式通常根据具体需求进行设计。
    3. 适用场景：适用于需要执行外部程序、与操作系统交互、调用其他脚本的场景。例如，在 Node.js 应用中调用 Python 脚本进行数据分析，或者执行系统命令进行文件操作。适用于并发任务、CPU 密集型任务等场景。

    - 创建子进程三种方式 exec()、spawn()、fork()区别

      - exec()：

        - 命令执行方式：会缓冲命令的输出结果，当命令执行完成后，将完整的输出结果作为回调函数的参数返回。如果输出结果很大，可能会导致内存问题。
        - 资源消耗：由于使用 shell 执行命令，会创建一个新的 shell 进程，因此资源消耗相对较大。
        - 适用场景：适用于执行简单的命令、输出量较小的 shell 命令。并且需要获取完整的输出结果。例如，执行系统命令获取文件列表、查看系统信息等。

      - spawn()：

        - 命令执行方式：返回一个 ChildProcess 对象，该对象有 stdout、stderr 和 stdin 三个流属性，你可以通过监听这些流的事件来处理数据。
        - 适用场景：以流的方式处理命令的输出，不会在内存中缓冲整个输出。适用于大量数据量的处理，或者需要实时处理命令输出的场景。例如，执行一个持续产生大量日志的脚本。

      - fork()：

        - 命令执行方式：fork() 创建的子进程与父进程之间通过 IPC（进程间通信）进行数据交换。你可以使用 send() 方法在父进程和子进程之间发送消息。
        - 输出处理方式：主要用于进程间的消息传递，通过 send() 方法发送消息，通过监听 message 事件接收消息。
        - 适用场景：专门用于创建新的 Node.js 进程，并在新进程中执行一个 Node.js 模块。它主要用于在 Node.js 应用中实现多进程架构，例如创建多个工作进程来处理并发任务。

  - child_preocess 和 cluster 区别

    1.  cluster 定义：cluster 模块构建于 child_process 之上，主要用于创建多个 Node.js 进程，这些进程共享同一个服务器端口，从而实现负载均衡。
    2.  cluster 设计目的：重点在于提升 Node.js 应用的性能和并发处理能力。由于 Node.js 是单线程的，使用 cluster 模块可以创建多个 Node.js 进程，充分利用多核 CPU 的优势，将负载分配到多个进程中。
    3.  cluster 通信：主进程和工作进程之间的通信主要通过 send 方法。cluster 模块内置了一些机制来管理进程间的通信，例如可以方便地在主进程和工作进程之间传递消息。
    4.  cluster 适用场景：适用于需要提高 Node.js 应用性能和并发处理能力的场景。例如，构建高并发的 Web 服务器，通过创建多个工作进程来处理大量的客户端请求。

  - Buffer 与 Stream 区别

    1. Buffer:

       - 定义： Buffer 是 Node.js 内置的一个全局类，用于直接处理二进制数据。它在内存中分配了一块连续的区域，用来存储二进制数据，类似于数组，每个元素代表一个字节，取值范围是 0 - 255。
       - 适用场景：网络编程、文件操作、数据编码转换和加密解密等场景中发挥着关键作用

    2. Stream：

       - 定义：Stream 表示的是一个有序的、有起点和终点的数据流。数据可以以小块的形式按顺序传输，而不需要一次性将整个数据加载到内存中。
       - 适用场景：
         - 文件处理：读取和写入大文件时，使用流可以避免内存溢出，提高性能。
         - 网络通信：在网络编程中，流可以高效地处理网络数据的传输，如 HTTP 请求和响应、WebSocket 通信等。
         - 数据转换：对数据进行实时转换，如压缩、解压缩、加密、解密等。

- Nodejs 相关工具生态：

  1. [cNode 社区资源](https://cnodejs.org/)
  2. [Nodejs 学习指南](https://github.com/chyingp/nodejs-learning-guide)
  3. [Nodejs 技术栈](https://github.com/qufei1993/Nodejs-Roadmap)
  4. [基于 Http-service 快速搭建本地静态服务](https://blog.csdn.net/weixin_45932733/article/details/115861292)
  5. Nodejs 调试 ：[使用 ndb 调试 Nodejs 项目](https://juejin.cn/post/6844903651694100487)

- Nodejs 常见知识点

  1. 类似 node:fs 与 fs 区别：

     - fs：这是旧的引入方式，在早期的 Node.js 版本中就已经存在。它是一种相对传统的模块引入方式，在很多旧的代码库和教程中比较常见。
     - node:fs：这是从 Node.js 14 版本开始引入的新的引入方式，采用这种方式引入 Node.js 的内置模块可以更清晰地表明你引入的是 Node.js 的**内置模块**，而非第三方模块或者自定义模块。这样可以避免在模块解析时出现混淆。
