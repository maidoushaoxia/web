//基于JavaScript对象的Stack类

//ES6声明栈类
class Stack {
  constructor() {
    //创建一个对象保存数据结构
    this.count = 0
    this.items = {}

  }

  //向栈添加元素,一次只能插入一个元素
  push(element) {
    this.items[this.count] = element
    this.count ++
  }

  //检查栈是否为空
  isEmpty() {
    return this.count == 0
  }

  //查看栈的长度
  size() {
    return this.count
  }

  //从栈中弹出元素
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count --
    const result = this.items[this.count]  //保存栈顶元素
    delete this.items[this.count]  //删除栈顶元素
    return result  //返回栈顶元素
    
  }

  //查看栈顶元素并将栈清空
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  //清空栈元素
  clear() {
    this.items = {}
    this.count = 0
  }

  //toString方法
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`  //用底部的第一个值作为字符串初始值
    for (let i = 1;i<this.count;i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }

}

//使用Stack类
const stack = new Stack()

console.log(stack.isEmpty())  //true

stack.push(5)
stack.push(8)
console.log(stack.peek()) //8

stack.push(11)
console.log(stack.size())  //3
console.log(stack.isEmpty())  //false

stack.push(15)
stack.pop()
stack.pop()
console.log(stack.size()) //2

console.log(stack.toString())  //5,8
console.log(typeof(stack.toString()))  //string
