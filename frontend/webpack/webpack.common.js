const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `${path.resolve(__dirname, '../src')}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
<<<<<<< HEAD
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
=======
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
>>>>>>> dev/FE
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
<<<<<<< HEAD
      template: path.resolve(__dirname, '/public/index.html'),
=======
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.png'),
>>>>>>> dev/FE
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
<<<<<<< HEAD
=======
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
>>>>>>> dev/FE
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
