class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  // 在任意位置插入元素
  insert(element,index) {
    if(index >= 0 && index < this.count) {
      const Node = new node(element)
      let current = this.head
      if(index === 0){ //向头部插入成为第一项
        if(this.head == null) { // 空链表
          this.head = node
          node.next = head
        } else { // 非空链表
          node.next = current
          current = this.getElementAt(this.size()) // 获取最后一项，即尾结点的引用
          node = this.head // 头结点为node
          current.next = this.head //尾结点的next指向头结点
        }
      } else { // 其他位置插入
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        current = node
      }
      this.count ++
      return true
    }
    return false
  }
}
