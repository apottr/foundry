module.exports = {
	entry: {
    'index': './src/main.js',
    'annotate': './src/annotate.js'
  },
	output: {
		path: './static',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			},
			{
				test: /\.sass?$/,
				exclude: /(node_modules)/,
				loaders: ["style-loader","css-loader","sass-loader"]
			}
			]
		}
}

