/*
 * @Author: shaoyun
 * @Date: 2019-09-01 16:10:36
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-16 19:45:06
 * @Description: 常见手撕代码题
 */
/**
 * @description: 解析URL为对象
 * @param {String} url 
 * @return {Object}
 */
function parseParam(url) {
  let str = url.split('?')[1]
  let arr = str.split('&')
  let obj = {}
  arr.forEach(item => {
    let key = decodeURIComponent(item.split('=')[0])
    let value = decodeURIComponent(item.split('=')[1])
    obj[key] = value
  })
  return obj
}

/**
 * @description: 连字符驼峰命名
 * @param {String} 
 * @return {String}
 */
function toHump(str) {
  return str.replace(/-\w/g, function(letter) {
    return letter.substring(1).toUpperCase()
  })
}

/**
 * @description: 驼峰转连字符命名
 * @param {String} str
 * @return {String} 
 */
function toLine(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

/**
 * @description: 查找字符串中出现最多的字符和个数
 * @param {String} 
 * @return {Object}
 */
function maxChar(str) {
  let obj = {}
  for (let i = 0;i <str.length;i++) {
    let char = str[i]
    if (obj[char]) {
      obj[char] ++
    } else {
      obj[char] = 1
    }
  }
  
  let count = 0
  let res = ''
  for(let item in obj) {
    if (count < obj[item]) {
      count = obj[item]
      res = item
    }
  }
  console.log('出现最多的字符为：' + res + '，出现次数为：' + count)
}


/**
 * @description: 数组扁平化
 * @param {Array} arr 
 * @return {Array}
 */
function flatArr(arr) {
  return arr.reduce((res, item) =>
    res.concat(Array.isArray(item) ? flatArr(item) : item), []) // []为初始值
}

/**
 * @description: 数组去重
 * @param {Array} 
 * @return {Array}
 */
function uniqueArr(arr) {
  let res = []
  let flag = true
  for (let i = 0;i < arr.length;i++) {
    if (res.indexOf(arr[i]) === -1) {
      if (arr[i] !== arr[i]) {
        if (flag) {
          res.push(arr[i])
          flag = false
        }
      } else {
        res.push(arr[i])
      }
    }
  }
  return res
}

/**
 * @description: 数组去重ES6简单版
 * @param {Array}  
 * @return {Array}  
 */
function uniqueArr(arr) {
  return Array.from(new Set(arr))

  // 或者用...展开符
  // return [...new Set(arr)]

  // NaN会被去重，而{}会认为是不一样的
  // arr = [NaN, 1, 3, 4, 1, 3, 2, NaN, {},{}] => [NaN, 1, 3, 4, 2, {}, {}]
}

/**
 * @description: 实现深拷贝
 * @param {Object} obj
 * @return {Object}
 */
function deepClone (obj) {
  let cloneObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // if (obj && typeof obj[key] === 'object') {
      //   cloneObj[key] = deepClone(obj[key])
      // } else {
      //   cloneObj[key] = obj[key]
      // }
      cloneObj[key] = (obj && typeof obj[key] === 'object') ? deepClone(obj[key]) : obj[key]
    }
  }
  return cloneObj
}

/**
 * @description: 防抖函数——非立即执行版
 * @param
 * @return
 */
function debounce (fn, time) {
  let timeout = null
  return function () {
    let context = this
    let args = arguments
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, time)
  }
}

/**
 * @description: 防抖函数——立即执行版
 * @param
 * @return
 */
function debounce(fn, time) {
  let timeout = null
  return function () {
    let context = this
    let args = arguments
    if (timeout) {
      clearTimeout(timeout)
    }

    let callNow = !timeout
    timeout = setTimeout(() => {
      timeout = null
    }, time)
    if (callNow) {
      fn.apply(context, args)
    }
  }
}

/**
 * @description: 节流函数——时间戳版
 * @param 
 * @return
 */
function throttle (fn, time) {
  let previous = 0
  return function () {
    let context = this
    let args = arguments
    if (Date.now() - previous > time) {
      fn.apply(context, args)
      previous = Date.now()
    }
  }
}

/**
 * @description: 节流函数——定时器版
 * @param
 * @return
 */
function throttle (fn, time) {
  let timeout = null
  return function () {
    let context = this
    let args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(context, args)
        timeout = null
      }, time)
    }
  }
}

/**
 * @description: 实现call
 * @param {type} 
 * @return: 
 */
Function.prototype.myCall = function (context) {
  context = context || window // 第一个参数可能为null
  context.fn = this // 这里的this是call前面的函数
  var arg = Array.prototype.slice.call(arguments, 1)
  // context.fn(...arg)
  let result = context.fn(...arg)
  delete context.fn // 执行完成后，为了不改变原有变量的属性，将添加的函数删除
  return result
}

/**
 * @description: 实现apply
 * @param {type} 
 * @return: 
 */
Function.prototype.myApply = function (context, arr) {
  context = context || window
  context.fn = this
  var result
  if (arr) {
    result = context.fn(...arr)
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

/**
 * @description: 实现bind
 * @param {type} 
 * @return: 
 */
Function.prototype.myBind1 = function(context) {
  var _self = this
  var arg = Array.prototype.slice.call(arguments, 1)
  // 由于arguments是类数组对象，不拥有数组的slice方法，所以需要通过call来将slice的this指向arguments
  return function () {
    arg = arg.concat(Array.prototype.slice.call(arguments))
    return _self.apply(context, arg)
  }
}

// 作为构造函数时
Function.prototype.myBind2 = function (context) {
  var _self = this
  var arg = Array.prototype.slice.call(arguments, 1)
  function fn () {
    arg = arg.concat(Array.prototype.slice.call(arguments))
    return _self.apply(this instanceof fn ? this : context, arg)
  }
  function Fn(){}
  Fn.prototype = _self.prototype
  fn.prototype = new Fn()
  return fn
}

/**
 * @description: 实现一个红绿灯，用到async和递归
 * @param
 * @return
 */
function timeout (color, time) {
  // 直接返回定时器不能实现等待效果，必须使用promise
  // return setTimeout(() => {
  //   console.log(color)
  // }, ms)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(color)
    },time)
  })
}
async function trafficLight() {
  let green = await timeout('绿', 8000)
  console.log(green)
  let yellow = await timeout('黄', 3000)
  console.log(yellow)
  let red = await timeout('红', 1000)
  console.log(red)
  trafficLight()
}
trafficLight()

/**
 * @description: 用promise实现sleep函数，与红绿灯几乎一样的思路
 * @param
 * @return
 * sleep函数：让线程休眠，等到指定时间再重新唤起
 */
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(1)
      } catch (error) {
        reject(0)
      }
    }, time)
  })
}

async function fn() {
  for (let i = 0;i < 10;i++) {
    await sleep(3000)
    console.log(i)
  }
}

/**
 * @description: 使用Promise，实现每隔一秒输出0,1,2,3,4，最后输出5
 * @param {type} 
 * @return: 
 */
var task = []
var output = function (i) {
  return new Promise((resolve => {
    setTimeout(() => {
      console.log(i)
      resolve()
    }, 1000 * i)
  }))
}

// 生成全部的异步操作
for(var i = 0;i < 5;i++) {
  task.push(output(i))
}

// 输出最后的i
Promise.all(task).then(() => {
  setTimeout(() => {
    console.log(i)
  },1000)
})

/**
 * @description: 使用async和await实现每隔一秒输出0,1,2,3,4，最后输出5
 * @param {type} 
 * @return: 
 */
var sleep = function (time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

async function timeout () {
  // 输出0，1，2，3，4
  for (var i = 0;i < 5;i++) {
    await sleep(1000)
    console.log(i)
  }

  await sleep(1000)
  console.log(i) // 最后输出5
}
timeout()

/**
 * @description: 实现new操作符
 * @param
 * @return
 */
function myNew() {
  // 新建一个对象
  let obj = new Object()
  let constructor = Array.prototype.shift.call(arguments)

  // 类型处理
  if (typeof constructor !== 'function') {
    throw('构造函数第一个参数应为函数')
  }

  // 绑定constructor属性
  obj.constructor = constructor

  // 连接原型
  obj._proto_ = constructor.prototype

  // 将this指向对象
  let resObj = constructor.apply(obj, arguments)

  // 返回对象
  return typeof resObj === 'object' ? resObj : obj
}
myNew(Fn) // Fn是构造函数

/**
 * @description: 二叉树遍历
 * @param
 * @return
 */
// 节点的构造函数
function Node (val) {
  this.left = null
  this.right = null
  this.val = val
}

// 创建二叉树
function binaryTree(arr) {
  let data = arr.shift()
  let node = null
  if (data !== 0) {
    node = new Node(data)
    node.left = binaryTree(arr)
    node.right = binaryTree(arr)
  }
  return node
}

// 前序遍历——递归版
function preOrderTraverse (node) {
  if (node !== null) {
    console.log(node.val)
    preOrderTraverse(node.left)
    preOrderTraverse(node.right)
  }
}

// 前序遍历——非递归版，用栈结构
function preOrderTraverseUnRecursion (root) {
  let arr = []
  let node = null

  arr.unshift(root)

  while (arr.length !== 0) {
    node = arr.shift()
    console.log(node.val)
    // 右节点先入栈，因为下一次循环左节点先出栈
    if (node.right) {
      arr.unshift(node.right)
    }
    if (node.left) {
      arr.unshift(node.left)
    }
  }
}


// 中序遍历——递归版
function inOrderTraverse (node) {
  if (node !== null) {
    inOrderTraverse(node.left)
    console.log(node.val)
    inOrderTraverse(node.right)
  }
}

// 中序遍历——非递归版
function inOrderTraverseUnRecursion (node) {
  let arr = []
  while (arr.length !== 0 || node !== null) {
    if (node === null) {
      node = arr.shift()
      console.log(node.val)
      // 栈已经空，但还要访问右节点
      node = node.right
    } else {
      arr.unshift(node)
      node = node.left
    }
  }
}

// 后序遍历——递归版
function postOrderTraverse (node) {
  if (node !== null) {
    postOrderTraverse(node.left)
    postOrderTraverse(node.right)
    console.log(node.val)
  }
}

// 后序遍历——非递归版
function preOrderTraverseUnRecursion (root) {
  var list = []
  if(root !== null){
    var s1 = []
    var s2 = []
    s1.push(root)
    while(s1.length !== 0){
      head = s1.pop()
      s2.push(head)
      if(head.left !== null){
        s1.push(head.left)
      }
      if(head.right !== null){
        s1.push(head.right)
      }
    }
    while(s2.length !== 0){
      var item = s2.pop()
      list.push(item.val)
    }
  }
  return list
}

/**
 * @description: 美团面试：取出node节点
 * @param {object} obj
 * @return {Array}
 */
let obj = {
  node: 6,
  left: {
    node: 5, 
    left: { 
      node: 4 
    },
    right: { 
      node: 3 
    }
  },
  right: { 
    node: 2, 
    right: { 
      node: 1 
    }
  }
}
let arr = [] // 这个arr要写在外面，用到了闭包
function fn(obj) {
  for (let key in obj) {
    if (obj && obj.hasOwnProperty(key)) {
      if (obj[key] instanceof Object) {
          obj[key] = fn(obj[key])
      } else {
          arr.push(obj['node'])   
      }
    }
  }
  return arr.sort((a,b) => (a - b))
}
console.log(fn(obj))

/**
 * @description: 实现大数相加
 * @param {Number} a 
 * @param {Number} b 
 * @return {String}
 */
function sumBigNunmber(a, b) {
  a = a + ''
  b = b + ''
  // 位数小的补0
  while (a.length < b.length) {
    a = '0' + a
  }
  while (b.length < a.length) {
    b = '0' + b
  }
  let res = []
  a = a.split('').reverse()
  b = b.split('').reverse()
  let carry = 0 // 进位
  for (let i = 0;i < a.length;i++) {
    temp = Number(a[i]) + Number(b[i]) + carry
    res[i] = temp % 10 // 当前位相加的结果
    carry = parseInt(temp / 10) // 相加后的进位
  }
  return res.reverse().join('')
}

 /**
  * @description: 实现map数据结构
  * @param
  * @return {Object}
  */ 
function myMap () {
  var obj = {}

  // put方法存值
  this.put = function(key, value) {
    obj[key] = value
  }

  // get方法取值
  this.get = function (key) {
    if (obj[key] || obj[key] === 0 || obj[key] === false) {
      return obj[key]
    } else {
      return null
    }
  }
}

/**
 * @description: 对象数组的排序方法
 * @param {String} key 
 * @return {Array}
 */
function sortArr (key) {
  return (a, b) => (a[key] - b[key])
}
var arr = [{name:'sy', age: 18}, {name:'mdsx', age: 22}]
arr.sort(sortArr('age'))

/**
 * @description: 函数柯里化的封装
 * @param {Function} fn 
 * @return
 */
function Curry (fn) {
  var args = Array.prototype.slice.call(arguments)
  return function () {
    var _args = args.concat(Array.prototype.slice.call(arguments))
    return fn.apply(this, _args)
  }
}
