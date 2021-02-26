import type { Configuration } from "webpack";
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
          {
            loader: "ts-loader",
            options: {
              configFile: resolve("src", "tsconfig.json"),
            },
          },
        ],
      },
    ],
  },
  devtool: isProduction ? "nosources-source-map" : "eval-source-map",
  cache: {
    type: "filesystem",
  },
};

export default config;
