## node.js

### 模块

1. 导出

   ```javascript
   module.exports = xxx
   ```

2. 引入

   ```javascript
   var xxx = require('./hello/js')
   ```

###  基本模块

1. 文件系统模块fs
   - 异步/同步读文件
     - readFile
     - raedFileSync
   - 异步/同步写文件
     - writeFile
     - writeFileSync
   - 获取文件状态信息
     - fs.stat()
2. 流stream
   - 读取流
     - fs.createReadStream
   - 写入流
     - fs.createWriteStream
   - 连接读取流和写入流
     - 读取流.pipe(写入流）
3. 服务器http
   - request
   - Response

