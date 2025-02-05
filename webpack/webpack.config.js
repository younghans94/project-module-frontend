const path = require("path");

const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".less", ".css"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../public/dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // 将 CSS 注入 DOM
          "css-loader", // 解析 CSS 文件
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        },
      },
      {
        test: /\.tsx$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-react",
              {
                runtime: "automatic",
              },
            ],
            "@babel/preset-typescript",
          ],
        },
      },
    ],
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new ESLintPlugin({ extensions: [".js", ".ts"] }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: true,
      dev: true,
    }),
  ],
};
