const path = require('node:path');

module.exports = function (options) {
  /** @type {import('webpack').Configuration}*/
  const config = {
    ...options,
    mode: 'production',
    output: {
      filename: 'main.[chunkhash].production.min.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    experiments: {
      futureDefaults: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };

  return config;
};
