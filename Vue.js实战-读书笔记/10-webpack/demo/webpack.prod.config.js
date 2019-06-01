var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var {VueLoaderPlugin} = require('vue-loader');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');

webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig,{
	output:{
		publicPath:'/dist/',
		filename:'[name].[hash].js'
	},
	plugins:[
		new ExtractTextPlugin({
			filename:'[name].[hash].css', 
			allChunks:true
		}),
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV:'"production"'
			}
		}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress:{
		// 		warnings:false
		// 	}
    // }),
    // 加上这段会报错
		new HtmlWebpackPlugin({
			filename:'../index_prod.html',
			template:'./index.ejs',
			inject:false
		}),
		new VueLoaderPlugin() //vue-loader，15的版本需要再添加plugin的配置
	]
});
