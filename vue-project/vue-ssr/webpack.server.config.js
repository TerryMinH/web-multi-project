const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./src/entry-server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server-bundle.js",
    libraryTarget: "commonjs2",
  },
  externals: nodeExternals({
    allowlist: /\.css$/,
  }),
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: "vue-style-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new WebpackManifestPlugin({
      fileName: "vue-ssr-client-manifest.json",
    }),
  ],
};
