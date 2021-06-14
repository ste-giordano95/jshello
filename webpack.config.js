const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESlintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options:{
              presets:['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  resolve:{
    extensions:['*', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Pagina test webpack da configurazione',
      template: './src/index.html',
    }),
    new ESlintPlugin({ fix: true }),
  ],
};
