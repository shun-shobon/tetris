import type { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import sass from "sass";
import fibers from "fibers";
import { resolve } from "path";

const isProduction = process.env["NODE_ENV"] === "production";
const basePath = process.env["BASE_PATH"] ?? "/";

const config: Configuration = {
  target: "web",
  mode: isProduction ? "production" : "development",
  entry: {
    index: resolve("src", "index.tsx"),
  },
  output: {
    path: resolve("dist"),
    publicPath: basePath,
    filename: "assets/scripts/[name].[contenthash:8].js",
    chunkFilename: "assets/scripts/chunk.[contenthash:8].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "ts-loader",
            options: {
              configFile: resolve("src", "tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.(?:c|sa|sc)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              sourceMap: !isProduction,
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: isProduction
                  ? "[hash:base64:8]"
                  : "[path][name]__[local]",
                exportLocalsConvention: "dashesOnly",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: !isProduction,
              implementation: sass,
              sassOptions: {
                fiber: fibers,
              },
            },
          },
        ],
      },
      {
        test: /\.(?:png|jpe?g|svg|gif)$/,
        type: "asset",
        generator: {
          filename: "assets/images/[name].[contenthash:8].[ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4KB
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      scriptLoading: "defer",
      minify: isProduction,
      template: resolve("src", "index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve("public"),
        },
      ],
    }) as any,
    new MiniCssExtractPlugin({
      filename: "assets/styles/[name].[contenthash:8].css",
    }),
  ],
  devtool: isProduction ? "nosources-source-map" : "eval-source-map",
  cache: {
    type: "filesystem",
  },
};

export default config;
