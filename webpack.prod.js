const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    entry: {
    app: ['./src/app/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
    ],
});
