const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: ['./src/app/index.tsx', 'webpack/hot/dev-server'],
    vendor: ['react', 'react-dom']
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8361,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
