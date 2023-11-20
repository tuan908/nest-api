const path = require('node:path');

module.exports = function (options) {
  /** @type {import('webpack').Configuration}*/
  const config = {
    ...options,
    mode: 'production',
    output: {
      filename: 'main.[fullhash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };

  return config;
};
