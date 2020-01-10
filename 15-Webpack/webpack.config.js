const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin')

module.exports = function (env = {}, argv) {
	const plugins = [
		new MiniCssExtractPlugin({
			// 提取出来的css文件名
			filename: `[name].[contenthash:8].css`
		})
	]

	const isProduction = env['production']

	if (isProduction) {
		plugins.push(
			new UglifyJsPlugin({
				uglifyOptions: {
					comments: false // 删除所有注释
				}
			})
		)
	}

	return {
		entry: './src/main.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
			// publicPath: 'http://localhost:8080/dist'
		},
		module: {
			// 配置一些规则，告诉Webpack遇到哪些文件使使用哪些Loader
			rules: [
				{
					// 正则匹配.css后缀的文件
					test: /\.css$/,
					// use: ['style-loader', 'css-loader']
					use: [
						MiniCssExtractPlugin.loader, 'css-loader'
					]
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: ['file-loader']
				}
			]
		},
		plugins: plugins,
		devServer: {
			contentBase: path.resolve(__dirname, 'src')
		},
		devtool: isProduction ? undefined : 'source-map'
	}
}