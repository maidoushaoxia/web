const { Queue } = PacktDataStructuresAlgorithms;


//使用Queue类
const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue('哈哈')
queue.enqueue('嘻嘻')
console.log(queue.toString())

console.log(queue.size())

queue.dequeue()
console.log(queue.toString())
