const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    plugins: [
        new TsConfigPathsPlugin(/* { tsconfig, compiler } */)
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
