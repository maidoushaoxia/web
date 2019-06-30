//ES6声明栈类
class Stack {
  constructor () {
    //创建一个数组保存数据结构
    this.items = []
  }
  
  //向栈添加元素
  push(element) {
    this.items.push(element)
  }

  //从栈顶移除元素
  pop() {
    return this.items.pop()
  }

  //查看栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }

  //检查栈是否为空
  isEmpty() {
    return this.items.length == 0
  }

  //清空栈元素
  clear() {
    this.items = []
  }

  //查看栈的长度
  size() {
    return this.items.length
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
