const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
   mode: 'production',
   devtool: 'inline-source-map',
  entry: {
    app: ['./src/app/index.tsx'],
    vendor: ['react', 'react-dom']
  },
});
