const path = require('path')
// 该插件主要是清除前次打包文件，需要hash配合
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// HTMLWebpackPlugin可以生成html模板并且自动添加script
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: {
        index: './src/main.js',
        another: './src/another-module.js',
        vendor: ['lodash']
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true, // 不允许遗留任何“旧的”ServiceWorkers
            skipWaiting: true // 快速启动ServiceWorkers
        })
    ],
    output: {
        // name就是上面的index
        filename: '[name].[contenthash:8].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js', // 决定非入口chunk的名称
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                },
                vendor: {
                    name: 'common',
                    chunks: 'all',
                    minSize: 1, // 生成块的最小大小
                },
            }
        }
    }
}