// webpack.config.dev.js
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'build.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
}
