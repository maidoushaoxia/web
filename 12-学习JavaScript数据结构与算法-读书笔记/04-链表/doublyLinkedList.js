class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }

  // 在任意位置插入新元素
  insert(element,index) {
    if(index >= 0 && index < this.count) {
      let node = new DoublyNode(element)
      let current = this.head
      if(index === 0){ //向头部插入成为第一项
        if(this.head == null) { // 空链表
          this.head = node
          this.tail = node // 首尾都是这个元素
        } else { // 链表中有一个元素
          this.head = node // 头结点引用指向node
          node.next = current // node的向后指针指向current
          current.prev = node // current的向前指针指向node
        }
      } else if (index == this.count) { // 向尾部插入成为最后一项
        current = this.tail
        current.next = node // current的向后指针指向node
        node.prev = current // node的向前指针指向current
        this.tail = node // 尾指针引用指向node
      } else { // 任意位置插入
        const previous = this.getElementAt(index - 1) // previous指向要插入点的前一项
        current = previous.next
        previous.next = node // previous的向后指针指向node
        node.prev = previous // node的向前指针指向previous
        node.next = current // node的向后指针指向current
        current.prev = node // current的向前指针指向node
      }
      this.count ++
      return true
    }
    return false
  }

  //从任意位置移除元素
  removeAt(index) {
    if(index >= 0 && index < this.count) {
      let current = this.head
      if(index === 0){ // 删除头结点
        this.head = current.next // 让头结点指向current.next
        if(this.count === 1) { // 仅一个元素时
          this.tail = undefined // 更新尾结点
        } else {
          current.next.prev = undefined // 将current.next的prev引用改为undefined
        }
      } else if(index === this.count - 1) { // 删除最后一项
        current = this.tail
        current.prev.next = undefined // 直接将尾结点的前一个结点的向后指针引用改为undefined

      } else {
        const previous = this.getElementAt(index)
        current = previous.next
        previous.next = current.next
        current.next.prev = previous // 断开previous与current之间的连接
      }
      this.count--
      return current.element
    }
    return undefined
  }
}
