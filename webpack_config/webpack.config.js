const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const clean = new cleanWebpackPlugin();

const rootPath = path.resolve(__dirname,'..');

const webpackConfig = (env, argv) => {

  return {
    entry: path.resolve(rootPath, 'src/index.js'),
    output: {
      filename: '[name].[hash:8].js',
      path: path.resolve(rootPath, 'dist'),
      library: 'ChartLib',
      // "var", "assign", "this", "window", "global", "commonjs",
      // "commonjs2", "commonjs-module", "amd", "umd", "umd2", "jsonp"
      libraryTarget: 'umd',
    },
    devtool: argv.mode === 'development' ? "source-map" : 'none',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          }
        }
      ]
    },
    plugins: [
      clean,
    ]
  }
};

module.exports = webpackConfig;