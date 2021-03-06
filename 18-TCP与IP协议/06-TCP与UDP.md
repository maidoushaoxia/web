06-TCP与UDP

### 6.1 传输层的作用

1. 传输层定义：使用端口号来识别在传输层上一层的应用层中所要处理的具体应用程序。
2. 通信处理：传输协议TCP、UDP通过接受数据中的目标端口号识别目标处理程序
3. TCPHRUDP协议：
   - TCP：面向连接、可靠的流协议，即发送的是不间断的数据。
   - UDP：不具有可靠性的数据报协议，可以确保发送消息的大小，不能保证消息一定到达。
4. TCP与UDP区分：根据应用目的按需使用，多播与广播通信中使用UDP

### 6.2 端口号

1. 识别应用：传输层协议利用端口号识别本机中正在进行通信的应用程序
2. 通信识别：
   - 目标端口号相同，使用源端口号区分
   - 目标端口号和源端口号都相同，源IP地址不同

- 一般使用源IP地址、目标IP地址、协议号、源端口号和目标端口号来识别。

3. 确定端口号：
   - 静态方法（标准既定的）：如HTTP、FTP等
   - 时序分配：客户端应用程序不用自己设置端口号，交给操作系统分类
4. 端口号与协议：端口号由使用的传输层协议决定，不同的传输协议可以使用相同的端口号。但是端口号与传输层协议并无关系。

### 6.3 UDP

- 面向无连接，可以随时发生数据，通常用于包总量较少的通信、即时通信等

### 6.4 TCP

1. 特点：IP数据报实现可靠传输有许多问题，YCP可以通过一些机制实现可靠性传输

2. 通过序列号确认应答提高可靠性：

   - 确认应答ACK：当发送端的数据 到达接收主机时，接收端主机会返回一个已收到消息的通知，这个消息就叫做ACK
   - 若长时间没有等到确认应答，发送端就认为数据已经丢失，并进行重发
   - 序列号：按顺序给发送数据的每一个字节都标上号码，接收端查询接收数据TCP首部中的序列号和数据长度，将自己下一步应该接收的序号作为确认应答返送回去，从而实现可靠传输

3. 重发超时：指重发数据之前，等待确认应答到来的那个特定时间间隔，需要考虑往返时间和网络环境引起的偏差，若数据被重发后还是收不到确认应答，等待确认应答的时间将会以2倍、4倍的指数函数延长，直至一定次数后，强制关闭连接。

4. 连接管理：TCP在通信前，会发送一个SYN包作为建立连接的请求等待确认应答，若对端发来确认应答，则认为可以进行数据通信，若未收到确认应答，就不会进行数据通信，同时发送断开连接请求FIN。建立连接“三次握手”，断开连接“四次挥手”

5. 最大消息长度MSS：三次握手时，MSS的大小在两端主机之间计算出，同时发出建立连接请求时会写入TCP首部，告诉对方自己的接口能适应的MSS大小，然后选择其中的较小值。

6. 滑动窗口控制：由于TCP需要为每个包进行确认应答处理，包的往返时间越长，通信性能越低。窗口的大小是指无需等待确认应答而可以继续发送数据的最大值，此机制实现需要使用缓冲区。

   - 若数据发出后如期收到确认应答就可以不用进行重发，数据就从缓冲区清除
   - 收到确认应答时，将窗口滑动到确认应答中的序列号的位置，这样就可以顺序地将多个段同时发送，提高通信性能

7. 窗口控制与重发控制：接收端没有收到自己所期望序号的数据时，会对之前收到的数据进行确认应答，发送端一旦收到某个确认应答，又连续收到3次同样的确认应答，就会认为数据段丢失，将对应的数据重发

8. 流控制：

   - 接收端向发送端通知自己可以接收数据的大小，发送端就不会发送超过这个限度的数据，该限度被称为窗口大小

   - 发送端根据接收端的 窗口大小通知进行流量控制，若窗口的更新通知丢失会导致无法继续通信，因此发送端主机会时不时发送一个窗口探测的数据段，该数据段仅含一个字节，来获取最新的窗口大小信息

9. 拥塞控制：

   - 在通信一开始时通过慢启动的算法得出一个数据，对发送数据量进行控制，即拥塞窗口

   - 在慢启动时，将拥塞窗口的大小设置为1个数据段（1MSS）发送数据，之后每收到一次ACK，拥塞窗口的值就加1

   - 发送数据包时，将拥塞窗口的大小与接收端主机通知的窗口大小做比较，发送比较小值还小的数据量

   - 随着包的每次往返，拥塞窗口以指数函数增长，因此引入慢启动阈值，只要拥塞窗口的值超过阈值，每收到一次确认应答时，用以下比例放大拥塞窗口

     ![image-20200208213817023](/Users/mtdp/Library/Application Support/typora-user-images/image-20200208213817023.png)

   - TCP通信开始时，没有设置慢启动阈值，在超时重发时被设置为当时拥塞窗口的一半

10. 提供网络利用率的规范

    - Nagle算法：发送端未发送的数据很少时，延迟发送的处理机制，满足以下任意条件才发送数据
      - 已发送的数据都已收到确认应答
      - 可以发送最大段长度的数据时
    - 延迟确认应答
    - 捎带应答：发送消息到达对端并处理后，返回一个回执，此时确认应答和回执数据通过一个包发送，前提是启用延迟确认应答

### 6.5 其他传输层协议

1. UDP-Lite：可以由应用自行决定校验和
2. 流控制传输协议SCTP：数据到达与否的相关性检查
3. 数据报拥塞控制协议DCCP：辅助UDP的协议，因为UDP没有拥塞控制机制，容易出现问题

### 6.6 UDP首部的格式

1. 源端口号：字段长16位，若不需要返回数据，该字段设为0
2. 目标端口号：长16位
3. 包长度：UDP首部长度与数据长度之和，单位为字节
4. 校验和

### 6.7 TCP首部格式

1. 源端口号：16位
2. 目标端口号：16位
3. 序列号：32号
4. 确认应答号：32位，值下一次应该收到的数据的序列号
5. 数据偏移：长4位，单位为4字节，指数据部分从哪个位开始计算，也可看作是TCP首部的长度
6. 保留：为了以后扩展使用，长度为4位，一般设为0
7. 控制位：长8位，包含8个控制位
   - CWR：用于IP首部的ECN字段
   - ECE：也是用于IP首部的ECN字段，置为1时会通知对方已将拥塞窗口缩小
   - URG：为1时，表示包中有需要紧急处理的数据
   - ACK：为1时，确认应答的字段有效，规定必须设为1
   - PSH：为1时，将收到的数据立刻传给上层应用协议；为0时，先进行缓存
   - RST：为1时，TCP连接出现异常就强制断开连接
   - SYN：为1表示希望建立连接
   - FIN：为1时，表示断开连接，不在发送数据
8. 窗口大小：长16位，用于通知从相同TCP首部的确认应答号所指位置开始能够接收的数据大小
9. 校验和
10. 紧急指针：长16位，只在URG位1时有效，表示本报文中紧急数据末尾的指针
11. 选项：用于提高TCP的传输性能，最大长度为40字节