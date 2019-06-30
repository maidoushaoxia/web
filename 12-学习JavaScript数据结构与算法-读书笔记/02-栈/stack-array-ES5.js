//ES5声明栈类
function Stack() {
  //创建一个数组保存数据结构
  this.items = []
  this.push = push
  this.pop = pop
  this.peek = peek
  this.isEmpty = isEmpty
  this.clear = clear
  this.size = size
}

//向栈添加元素
function push(element){
  this.items.push(element)
}

//从栈顶移除元素
function pop() {
  return this.items.pop()
}

//查看栈顶元素
function peek() {
  return this.items[this.items.length - 1]
}

//检查栈是否为空
function isEmpty() {
  return this.items.length == 0
}

//清空栈元素
function clear() {
  this.items = []
}

//查看栈的长度
function size() {
  return this.items.length
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
