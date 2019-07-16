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

2. Promise的基础知识  
  - Promise的生命周期：进行中（pending）和已处理（有两种状态：Fulfilled和rejected）。
  
    - Promise的then()方法接受两个参数，第一个是Promise状态为fulfilled时要调用的函数；第二个是Promise状态为rejected时要调用的函数。

    - Promise的catch()方法相当于只给其传入拒绝处理程序的then()方法（第一个参数传null）。

    - 一定要添加拒绝处理程序，否则失败就自动被忽略了。

  - 创建未完成的Promise
    - 用Promise构造函数创建，构造函数只接受一个执行器函数；执行器函数接收两个参数，分别是resolve()函数（成功调用）和reject()函数（失败调用）。

    - 任务编排：向任务队列添加一个新任务，并明确指定将任务延后执行。

  - 创建已处理的Promise
    - 使用Promise.resolve()：该方法只接受一个参数并返回一个完成态的Promise，即没有任务编排的过程

    - 使用Promise.reject()：创建已拒绝Promise。

    - 非Promise的Thenable对象：就是拥有then()方法并接受resolve和reject这两个参数的普通对象，会创建一个新的Promise，并在then()函数中被调用。
      ```javascript
      let thenable = {
        then: function(resolve, reject) {
          resolve(42)
        }
      }

      let p1 = Promise.resolve(thenable)
      p1.then(function(value) {
        console.log(value) // 42
      })
      ```
    - 执行器错误：如果执行器内部抛出一个错误，则Promise的拒绝处理程序就会被调用。只有当拒绝处理程序存在时才会记录执行器中抛出的错误，否则错误会被忽略掉。

3. 全局的Promise拒绝处理：无法检测一个Promise何时被处理。
  - Node.js环境的拒绝处理

  - 浏览器环境的拒绝处理：与Node.js中的完全等效。
    - unhandledrejection：在一个事件循环中，当Promise被拒绝，并且没有提供拒绝处理程序时，触发该事件。

    - rejectionhandled：在一个事件循环中，当Promise被拒绝，若拒绝处理程序被调用，触发该事件。

    - 事件处理程序接受一个有以下属性的事件对象作为参数：
      - type：事件名称（'unhandledrejection'或'rejectionhandled'）；

      - promise：被拒绝的Promise对象；

      - reason：来自Promise的拒绝值
      ```javascript
      let rejected

      window.onunhandledrejection = function(event) {
        console.log(event.type)
        console.log(event.reason.message)
        console.log(rejected === event.promise)
      }

      window.onrejectionhandled = function(event) {
        console.log(event.type)
        console.log(event.reason.message)
        console.log(rejected === event.promise)
      }

      rejected =  Promise.reject(new Error('hahaha'))
      ```

4. 串联Promise：每次调用then()或catch()方法时实际上创建并返回了另一个Promise，只有当第一个Promise完成或拒绝后，第二个才会被解决。
    ```javascript
    let p1 = new Promise(function(resolve, reject) {
      resolve(42)
    })

    p1.then(function(value) {
      console.log(value)
    }).then(function() {
      console.log('finished')
    })

    输出：
        42
        finished
    ```
  
  - 捕获错误：Promise链可以用来捕获完成处理程序或拒绝处理程序中发生的错误。
    ```javascript
    let p1 = new Promise(function(resolve, reject) {
      resolve(42)
    })

    p1.then(function(value) {
      throw new Error('Boom!')
    }).catch(function(error) {
      console.log(error.message) // Boom!
    })
    ```
    要在Promise连你的末尾留有一个拒绝处理程序，以确保能够正确处理所有可能发生的错误。

  - Promise链的返回值：如果在完成处理程序中指定一个返回值，则可以沿着这条链继续传递数据。

  - 在Promise链中返回Promise
    ```javascript
    let p1 = new Promise(function(resolve,reject) {
      resolve(42)
    })

    let p2 = new Promise(function(resolve,reject) {
      resolve(43)
    })

    p1.then(function(value) {
      console.log(value) // 42
      return p2
    }).then(function(value) {
      console.log(value) // 43
    })
    ```
    p1的完成处理程序返回一个已解决状态的Promise p2，由于p2已完成，因此第二个完成处理程序被调用；如果p2被拒绝，则调用拒绝处理程序（then()方法里的永远不会被调用），即调用catch()方法。
    
5. 响应多个Promise
  - Promise.all()方法：只接受一个参数并返回一个Promise，该参数是一个含有多个Promise的可迭代对象。只有当可迭代对象中所有Promise都被解决后返回的Promise才会被解决；只要有一个被拒绝，那么返回的Promise不等所有Promise都完成就立即被拒绝。

  - Promise.race()方法：只要有一个Promise被解决则返回的Promise就被解决，无需等待所有。该方法会返回第一个完成的Promise，忽略其他的。

6. 自Promise继承
    ```javascript
    class MyPromise extends Promise {
      success(resolve,reject) {
        return this.then(resolve,reject)
      }

      failure(reject) {
        return this.catch(reject)
      }
    }

    let promise = new MyPromise(function(resolve,reject) {
      resolve(42)
    })

    promise.success(function(value) {
      console.log(value) // 42
    }).failure(function(value) {
      console.log(value)
    })
    ```

7. 基于Promise的异步任务执行

8. await语法：用async标记的函数代替生成器，用await代替yield来调用函数。
    ```javascript
    (async function () {
      let contents = await readFile('config.json')
      doSomethingsWith(contents)
      console.log('Done')
    })
    ```
    在函数前添加async关键字表示该函数以异步模式运行，await关键字表示调用readFile()函数应该返回一个Promise实例。
