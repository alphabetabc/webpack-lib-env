### webpack ---js模块开发环境

```markdown
20190520 -- 支持es6+环境
```
## webpack.config.js
```javascript
const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const clean = new cleanWebpackPlugin();

const webpackConfig = (env, argv) => {

  return {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      filename: '[name].[hash:8].js',
      path: path.resolve(__dirname, 'dist'),
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
```
### .babelrc
```json
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ],
  "sourceType":"unambiguous"
}

```