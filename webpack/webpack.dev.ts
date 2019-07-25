import * as merge from 'webpack-merge';
import * as common from './webpack.common'; 

import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
});

const config: webpack.Configuration = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  entry: {
    app: ['./src/Index.tsx', 'webpack/hot/dev-server'],
    vendor: ['react', 'react-dom']
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
