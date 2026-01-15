const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/entry-client.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    publicPath: "/",
  },
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
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new WebpackManifestPlugin({
      fileName: "vue-ssr-server-bundle.json",
    }),
  ],
};
