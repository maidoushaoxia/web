# 《深入理解ES6》读书笔记 #


## 第11章  Promise与异步编程 #
1. 异步编程的背景知识
  - JavaScript是单线程事件循环的，即将运行的代码被放在任务队列里，当一段代码准备执行时，就会被添加到任务队列。当一段代码结束执行，事件循环会执行任务队列中的下一个任务。

  - 事件模型：点击按钮这样的事件会向任务队列添加一个新任务来响应用户的操作，直到事件触发时才执行事件处理程序。

  - 回调模式：被调用的函数是作为参数传入的。
    ```javascript
    readFile('example.txt', function(err, contents) {
      if(err) {
        throw err;
      }

      console.log(contents)
    })

    console.log('Hi')
    ```
    readFile()函数立即开始执行，当读取磁盘上的文件时会暂停执行，即调用readFile()函数后，console.log('Hi')语句立即执行；当readFile()结束执行即读取结束时，会向任务队列的末尾添加一个新任务，该任务包含回调函数及相应的参数，任务对了前面所有的任务完成后才执行该任务，并最终执行console.log(contents)。可以通过回调模式连接多个调用。
