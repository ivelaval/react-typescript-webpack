import * as merge from 'webpack-merge';
import * as common from './webpack.common'; 
import * as path from "path";

import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const config: webpack.Configuration = merge(common, {
  mode: "production",
  entry: "./src/Index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.(ts|tsx)?$/, loader: "awesome-typescript-loader" }
    ]
  },
  plugins: [htmlPlugin]
});

export default config;
