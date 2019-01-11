const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = (_, argv) => {
  const production = argv.mode === 'production';

  const common = {
    mode: production ? 'production' : 'development',
    devtool: production ? 'source-map' : 'inline-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({ 'global.GENTLY': false })
    ]
  };

  const node = merge(common, {
    target: 'node',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: 'index.js',
      libraryTarget: 'commonjs'
    }
  });

  const browser = merge(common, {
    entry: './src/index-browser.ts',
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: 'index-browser.js',
      library: 'steemdunk',
      libraryTarget: 'global'
    }
  });

  return [node, browser];
};
