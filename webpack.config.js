const path = require('path');
const webpack  = require('webpack');
const dotenv = require('dotenv')
dotenv.config()
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'weather',
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [
      {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {browsers: ['last 2 chrome versions']},
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "react-refresh/babel"
        ]
      },
      exclude: path.join(__dirname, 'node_modules'),
    },
    {
      test: /\.(png|jpg|jpeg)$/,
      use:[
        'file-loader'
      ]
    },
    {
      test: /\.css?$/,
      use: ['style-loader', 'css-loader'],
    },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env" : JSON.stringify(process.env)
    })
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/dist',
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
};