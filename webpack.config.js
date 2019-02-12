const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: ['./src/index.jsx', './src/app.jsx'],
    vendors: ['react'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
  module: {
    rules: [
      { 
        test: /\.(jsx|js)$/, 
        exclude: /node_modules/, use: { 
        loader: 'babel-loader', 
        
        options: { presets: ['@babel/preset-react'] } }
      },
      { test: /.js$/, exclude: /node_modules/, use: { 
        loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } }
      },
      { test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'],
      },
      { test: /\.(scss|sass)$/,
        use: ['style-loader','css-loader','sass-loader'],
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
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}