const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: ['./src/index.js', './src/app.jsx'],
    vendors: ['react'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
  module: {
    rules: [
      { test: /.jsx$/, exclude: /node_modules/, use: { 
        loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } }
      },
      { test: /.js$/, exclude: /node_modules/, use: { 
        loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } }
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
        }
      }
    },
  },
  devServer: {
    port: 9100,
  }
}