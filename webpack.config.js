/* eslint-disable no-unused-vars */
const path = require('path')
const webpack = require('webpack')
module.exports = {
	entry: {
		app: ['./src/index.js', './src/app.js'],
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
      { test: /\.css$/, 
        exclude: /node_modules/, 
        use: ['style-loader', 'css-loader'],
			},
      { test: /\.(scss|sass)$/,
        exclude: /node_modules/, 
				use: ['style-loader','css-loader','sass-loader'],
      },
      {
        enforce: 'pre', //enforce it check code previously
        test: /\.(jsx|js)$/, 
        exclude: /node_modules/,
        loader: 'eslint-loader',
      }
		],
	},
	optimization: { //split the static or larger code to vendor file
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		},
	},
	devServer: {
		port: 9100,
		stats: 'errors-only',
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	stats: 'errors-only',
}