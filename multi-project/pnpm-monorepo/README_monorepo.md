<!--
 * @Author: TerryMin
 * @Date: 2022-07-27 18:06:28
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-13 11:27:22
 * @Description: file not
-->

## monorepo

- monorepo

  1.  定义：Monorepo 是一种项目代码管理方式，指单个仓库中管理多个项目，有助于简化代码共享、版本控制、构建和部署等方面的复杂性，并提供更好的可重用性和协作性
  2.  [monorepo 演进](https://juejin.cn/post/7215886869199896637)

- monorepo 多项目管理

  [monorepo 进行多项目管理实践](https://juejin.cn/post/7043990636751503390)
  [monorepo 多项目打包问题及方案分析](https://juejin.cn/post/6950082433647640612)
  [monorepo 源码管理总结](https://blog.csdn.net/QcloudCommunity/article/details/122994881)

- changesets:主要用于 monorepo 项目下子项目版本的更新、changelog 文件生成、包的发布
  [changesets 构建 monorepo](https://juejin.cn/post/7098609682519949325)
  [vue3+vite 配置](https://juejin.cn/post/6975442828386107400)

## [pnpm](https://pnpm.io/zh/)

- pnpm 与 npm 区别

  1. 安装机制：

     - npm 扁平化 node_modules， 会提升依赖到顶层，容易导致幽灵依赖(指项目中能够直接使用但未在 package.json 中显式声明的依赖，这种依赖可能通过其他依赖包被间接安装，导致潜在的风险)
     - pnpm 内容可寻址存储 + 硬链接方式管理依赖，使用隔离的.pnpm 组织依赖，禁止未声明依赖访问

  2. 性能：
     - npm 由于重复存储，磁盘占用内存高，安装速度慢（网络/解压瓶颈）
     - pnpm 共享相同文件磁盘占用内存低，安装快（本地缓存优先）

- pnpm 软链接与硬链接区别

  - 软连接（Symbolic Link）和硬链接（Hard Link）是两种不同的文件链接方式，它们在工作原理和使用场景上有显著差异。
