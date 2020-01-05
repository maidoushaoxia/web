## npm script

1. 概念：在package.json文件里面，使用scripts字段定义脚本命令。

   - 使用：

     ```javascript
     {
       "scripts": {
         "build": "node bulid.js"
       }
     }
     ```

     则build命令对应的脚本是node build.js。

   - npm run：可以查看当前项目的所有npm脚本命令。

2. 原理：每当执行npm run，就会自动新建一个Shell，在这个Shell里面执行指定的脚本命令。
3. 通配符：
   - *：表示任意文件名

4. 执行顺序：
   - 平行执行：使用&符号
   - 按顺序执行：使用&&符号

5. 默认值

   - ```javascript
     "start": "node serve.js"
     ```

   - ```javascript
     "install": "node-gyp rebuild"
     ```

6. 简写
   - npm start：npm run start
   - npm stop：npm run stop
   - npm test：npm run test
   - npm restart：npm run stop && npm run restart && npm run start，具体钩子执行顺序如下：
     - prerestart
     - prestop
     - stop
     - poststop
     - restart
     - prestart
     - start
     - poststart
     - postprestart

7. 变量
   - npm_package_name：可以拿到package.json文件里的name字段
   - env命令可以列出所有环境变量

