## webpack知识 ##
1. 新建项目，在终端运行npm init，初始化。

2. 安装,npm wepack webpack-cli --save-dev.
  - -save-dev是保存的开发环境的依赖Devdependencies中，
    -save是生产环境的依赖dependencies中。

3. webpack.config.js里面配置入口文件和出口文件。

4. npm webpack build打包，dist文件夹是打包目录。

5. Entry用法：
  - 单入口：Entry是一个字符串，直接写路径，

  - 多入口：对象格式

6. output用法：根据单入口和多入口来配置。

7. babel-loader配置文件：.babelrc,主要用来解析ES6。

8. 文件指纹：文件的后缀
  - js文件设置：使用chunkhash
  - CSS文件指纹设置： containerthash
  - 图片文件指纹设置：hash
