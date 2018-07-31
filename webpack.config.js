const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'index.dist.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: {
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				}),
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
		],
	},
	plugins: [
		new ExtractTextPlugin('styles.dist.css'),
	]
};
