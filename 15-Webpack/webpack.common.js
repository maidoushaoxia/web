const path = require('path')
// 该插件主要是清除前次打包文件，需要hash配合
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// HTMLWebpackPlugin可以生成html模板并且自动添加script
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/main.js',
        another: './src/another-module.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    output: {
        // name就是上面的app
        filename: '[name].[contenthash:8].bundle.js',
        chunkFilename: '[name].[contenthash:8].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 name: 'common',
    //                 chunks: 'all',
    //                 minSize: 1, // 生成块的最小大小
    //             }
    //         }
    //     }
    // }
}