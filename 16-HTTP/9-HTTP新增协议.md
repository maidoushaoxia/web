## HTTP新增协议

### 消除HTTP瓶颈

#### 1. Ajax

- 使用HTTP协议若想知道服务器是否有内容更新，必须频繁地从客户端到服务器端确认
- Ajax利用JavaScript和DOM的操作，达到局部Web页面替换加载的异步通信手段

#### 2. Comet

- 服务器有内容更新，直接给客户端返回响应
- 是利用延迟应答，即服务器端收到请求，处理完毕后，Comet将响应挂起， 当服务器有内容更新时，再返回响应

### WebSocket

- 由客户端发起WebSocket通信连接，连接成功后就保持连接状态，且不论是服务器还是客户端，任意一方都可直接向对方发送报文

- 利用请求报文的Upgrade首部字段告知服务器通信协议发生改变。

  `Upgrade: websocket`

- WebSocket API:：

  ```java
  var socket = new WebSocket('ws://game.xxx.com:1234/updates')
  // 指定连接成功后的回调函数
  socket.onopen = function() {
    setInterval(() => {
      // 还有多少字节的数据没有发送出去，用来判断发送是否结束
      if (socket.bufferedAmount === 0) {
        // 向服务器发送数据
        socket.send(getUpdateData())
      }
    }, 50)
  }
  ```

### WebDAV

- 可对Web服务器上的内容直接进行文件复制、编辑等操作的分布式文件系统