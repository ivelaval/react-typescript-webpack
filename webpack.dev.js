const merge = require('webpack-merge');
const common = require('./webpack.common');

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
});
