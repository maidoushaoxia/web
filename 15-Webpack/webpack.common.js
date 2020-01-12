const path = require('path')
// 该插件主要是清除前次打包文件，需要hash配合
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// HTMLWebpackPlugin可以生成html模板并且自动添加script
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/main.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    output: {
        // name就是上面的app
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}