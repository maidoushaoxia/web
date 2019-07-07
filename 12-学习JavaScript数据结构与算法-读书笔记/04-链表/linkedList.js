class LinkedList {
  // 声明链表
  constructor(equalsFn = defaultEquals) {
    this.count = 0 // 链表中元素个数
    this.head = undefined // 保存头节点的引用，第一个节点的引用是整个链表
    this.equalsFn = equalsFn
  }

  // 向链表尾部添加元素
  push(element) {
    const node = new Node(element)
    let current
    if(this.head == null) {
      this.head = node
    } else {
      current = this.head
      while(current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count ++
  }

  // 从链表中移除元素
  //从特定位置移除
  removeAt(index) {
    if(index >=0 && index < this.count) {
      let current = this.head
      if(index == 0) {
        this.head = current.next
      } else {
        let previous
        for(let i = 0;i < index;i++) {
          previous = current
          current = current.next // 遍历链表，使current指向我们要删除的元素
        }
        previous.next = current.next
      }
      this.count --
      return current.element
    }
    return undefined
  }

  // 循环迭代链表直到目标位置
  getElementAt(index) {
    if(index >= 0 && index < this.count) {
      let node = this.head
      for(let i = 0;i < index && node != null;i++){
        node = node.next
      }
      return node
    }
    return undefined
  }

  // 在任意位置插入元素
  insert(element, index) {
    if(index >= 0 && index <= this.count) {
      const node = new Node(element)
      if(index == 0){
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        previous.next = node
        node.next = current
      }
      this.count ++ // 更新链表的长度
      return true
    }
    return false
  }

  // 返回元素的位置
  indexOf(element) {
    let current = this.head
    for(let i = 0;i < this.count && current != null;i++){
      if(this.equalsFn(element,current.element)){
        return i
      }
      current = current.next
    }
    return -1
  }

  // 从链表中移除元素
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 返回链表元素个数
  size(){
    return this.count
  }

  //检查链表是否为空
  isEmpty(){
    return this.size() == 0
  }

  // 返回头结点
  getHead() {
    return this.head
  }

  // toString方法
  toString() {
    if(this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for(let i = 1;i < this.size() && current != null;i++){
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}
