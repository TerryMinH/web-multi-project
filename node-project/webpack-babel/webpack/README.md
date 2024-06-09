<!--
 * @Author: TerryMin
 * @Date: 2022-09-24 14:28:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-07-03 14:23:19
 * @Description: file not
-->

# webpack

[webpack](https://webpack.docschina.org/)

1. webpack 构建流程
 - 初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。
 - 开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。
 - 确定入口：根据配置中的 entry 找出所有的入口文件。
 - 编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
 - 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
 - 输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。
 - 输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统。

2. [webpack简单流程实现](https://juejin.cn/post/6844904038543130637?utm_source=gold_browser_extension#heading-17) =>mini-webpack


3. [webpack设计理念](https://juejin.cn/post/7170852747749621791?)


4. [webpack命令行参数详解](https://blog.csdn.net/victoryzn/article/details/81872718)