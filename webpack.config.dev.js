const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    assetModuleFilename: 'images/[name][ext]'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|jpeg|webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react',
                {
                  runtime: 'automatic'
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html')
  }), new MiniCssExtractPlugin(), new Dotenv()]
}
