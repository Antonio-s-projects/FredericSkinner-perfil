const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
    assetModuleFilename: 'assets/images/[hash][contenthash][query]'
  },

  mode: 'production',

  devtool: 'source-map',

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.html/,
        use: {
          loader: 'html-loader'
        }
      },

      {
        test: /\.(css)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              import: true
            }
          }
        ]
      },

      {
        test: /\.(png|svg)$/i,
        type: 'asset/resource'
      },

      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: '[name].[contenthash].[ext]',
            outputPath: './assets/fonts/',
            publicPath: '../assets/fonts/',
            esModule: false,
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),

    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'static/images'),
          to: 'assets/images'
        }
      ]
    }),

    new CleanWebpackPlugin()
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizer()
    ]
  }
}