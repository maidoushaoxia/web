const path = require('path')

module.exports = {
	entry: './main.js',
	output: {
		// 所以依赖合并输出到一个文件夹中
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		// 配置一些规则，告诉Webpack遇到哪些文件使使用哪些Loader
		rules: [
			{
				// 正则匹配.css后缀的文件
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
}