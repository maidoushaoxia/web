const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
	entry: './src/main.js',
	output: {
		// 所以依赖合并输出到一个文件夹中
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
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
	plugins: [
		new MiniCssExtractPlugin({
			// 提取出来的css文件名
			filename: `[name].[contenthash:8].css`
		})
	]
}