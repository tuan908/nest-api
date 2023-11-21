const path = require('node:path');
const {EsbuildPlugin} = require('esbuild-loader');

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
      minimizer: [
        new EsbuildPlugin({
          target: 'es2020',
          format: 'esm',
          minify: true,
          treeShaking: true,
        }),
      ],
    },
    module: {
      rules: [
        // Use esbuild instead of tsc to transpile:
        {
          test: /\.[jt]sx?$/,
          loader: 'esbuild-loader',
          options: {
            target: 'es2020',
            tsconfig: './tsconfig.build.json'
          },
        },
      ],
    },
  };

  return config;
};
