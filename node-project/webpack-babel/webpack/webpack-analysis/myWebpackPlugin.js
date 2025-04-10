/*
 * @Author: TerryMin
 * @Date: 2025-04-10 19:56:47
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-10 20:21:31
 * @Description: file not
 */

class FileStatsPlugin {
  constructor(options = {}) {
    this.options = {
      filename: "file-state.json",
      ...options,
    };
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync("FileStatsPlugin", (compilation, callback) => {
      const stats = {};
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
    });
  }
}
module.exports = FileStatsPlugin;
