const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const jsonImporter = require('node-sass-json-importer');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'index.dist.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								importer: jsonImporter,
							},
						},
					],
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
