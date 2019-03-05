const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      },
      {
				test: /\.(jpe?g|png|gif|svg)$/i, 
				loader: 'file-loader'
			},
    ]
  }
};