const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssoWebpackPlugin = require("csso-webpack-plugin").default;
const CopyPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    scripts: [
      "./source/js/script.js",
      "./source/scss/style.scss",
      "./source/css/main.css",
      "./source/index.html",
    ],
  },
  resolve: {
    extensions: [".js", ".scss", ".css"],
    modules: ["./node_modules/"],
  },
  mode: "development",
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 7777,
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "",
    filename: "js/script.js",
  },
  module: {
    rules: [
      {
        test: /\.s[a|c]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attributes: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WriteFilePlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "source/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.min.css",
      chunkFilename: "[id].css",
    }),
    new CssoWebpackPlugin({
      pluginOutputPostfix: "min",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new CopyPlugin([
      {
        from: "source/fonts/**/*.{woff,woff2}",
        to: path.join(__dirname, "build", "fonts"),
        flatten: true,
      },
      {
        from: "source/img/**",
        to: path.join(__dirname, "build"),
        transformPath(targetPath) {
          return targetPath.replace(`source${path.sep}`, "");
        },
      },
      {
        from: "source/*.ico",
        to: path.join(__dirname, "build"),
        flatten: true,
      },
    ]),
  ],
};
