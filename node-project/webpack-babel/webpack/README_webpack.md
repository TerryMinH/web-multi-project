# [webpack](https://webpack.js.org/)

- [webpack 自定义插件](https://www.webpackjs.com/contribute/writing-a-plugin/#creating-a-plugin)

  1. webpack 常见的钩子(Hooks):

     - environment：环境准备完成后，同步类型钩子(SyncHook)
     - compile：创建新的 compilation 前，SyncHook
     - compilation compilation 创建完成后 SyncHook
     - emit 生成资源到 output 目录前 AsyncSeriesHook
     - afterEmit 生成资源到 output 目录后 AsyncSeriesHook
     - done compilation 完成时 AsyncSeriesHook

       ```js
       // 完整插件
       class FileStatsPlugin {
         constructor(options = {}) {
           this.options = {
             filename: "file-stats.json",
             ...options,
           };
         }

         apply(compiler) {
           // 在emit阶段（生成资源到output目录之前）执行
           compiler.hooks.emit.tapAsync(
             "FileStatsPlugin",
             (compilation, callback) => {
               // 收集文件信息
               const stats = {};

               // 遍历所有编译过的资源文件
               for (const assetName in compilation.assets) {
                 const asset = compilation.assets[assetName];
                 stats[assetName] = {
                   size: asset.size(),
                   sourceSize: asset.source().length,
                   mtime: asset.info && asset.info.mtime,
                 };
               }

               // 添加新的资源文件
               compilation.assets[this.options.filename] = {
                 source: () => JSON.stringify(stats, null, 2),
                 size: () => JSON.stringify(stats, null, 2).length,
               };

               callback();
             }
           );
         }
       }

       module.exports = FileStatsPlugin;
       ```
