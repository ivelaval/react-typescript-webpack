const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    entry: {
    app: ['./src/app/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') }),
    ],
});
