<!--
 * @Author: TerryMin
 * @Date: 2022-07-27 18:06:28
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-13 10:46:54
 * @Description: file not
-->

# monorepo 项目开发

- 项目启动

  ```js
  node = v16.x;
  根目录 pnpm install

    # 全局安装共用依赖（React/Vue等）
    pnpm add react -w  # -w表示workspace root

    # 子包单独安装特定依赖
    pnpm --filter app add axios
    pnpm --filter admin add @vueuse/core

    # 子包相互引用
    pnpm --filter app add shared@workspace:*
  ```

- 项目初始化

  ```js
  # 创建monorepo结构
  mkdir monorepo && cd monorepo
  pnpm init
  touch pnpm-workspace.yaml

  # 添加子包
  pnpm create vite packages/app --template react-ts
  pnpm create vite packages/admin --template vue-ts
  mkdir packages/shared
  ```

- 依赖管理

  ```js
  # 全局安装共用依赖（React/Vue等）
   pnpm add react -w  # -w表示workspace root

   # 子包单独安装特定依赖
   pnpm --filter app add axios
   pnpm --filter admin add @vueuse/core

   # 子包相互引用
   pnpm --filter app add shared@workspace:*
  ```

- 脚本执行

  ```js
    # 并行运行所有子包的build命令
    pnpm -r run build

    # 仅针对特定子包
    pnpm --filter app run dev
  ```
