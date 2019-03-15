# 脚手架安装与部署项目流程

## 1:依赖软件 nodejs 6.xx 
### 1.1：	下载nodejs

         http://nodejs.cn/download/
         https://npm.taobao.org/mirrors/node/
         X86   适用 32 windows
         X64   适用 64 windows

### 1.2:  	下一步下一步

        安装目录: 不要中文不要有空格
        c:/program files/nodejs

### 1.3:   检测(windows->开始->运行->cmd)

        node  -v
 

# 2:安装cnpm 工具(nodejs工具 npm 安装软件) #
 npm install -g cnpm --registry=https://registry.npm.taobao.org
  
# 3:安装 vue-cli 脚手架 #
 cnpm install --global vue-cli

# 4:通过(脚手架)初始化项目(自动项目完整目录与配置文件) #

 vue init webpack 项目名称

### 示例 ###

 vue  init  webpack   my-project

*提问 * 项目名称 :my-project

 安装:vue-router? Yes/No   Yes

 安装:EsLint    ?         No

 检测：自动生成目录

 build   脚本目录

 config  配置目录(..)

 node_modules   所有nodejs依赖工具包目录(空)

##  src          代码目录  ##
   assets         	资源目录(img/css/js)

   components    	组件目录

   router         	路由配置

   App.vue       	最上层组件

   main.js        	程序入口js

##  package.json     项目描述文件 ##

#5:安装依赖工具包  #
cnpm install

# 6:启动项目 #
 cnpm run dev
 注意：启动服务器:端口 8080
 注意:  不需要apache
 检测: http://127.0.0.1:8080/#/
 停止服务器: ctrl+c
# 7:代码开发 #
  src

# 8:vue 项目启动流程 
在执行cnpm run dev 的时候 ，会在当前目录下找一个文件
package.json文件，启动服务器默认端口8080

找到src目录文件main.js ,创建项目唯一 new Vue();
要加载模板内容 App, App是src目录 App.vue结尾文件,
有一个 <router-view></router-view>
