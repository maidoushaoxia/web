class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  // 在任意位置插入元素，此部分代码有问题
  insert(element,index) {
    if(index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head
      if(index === 0){ //向头部插入成为第一项
        if(this.head == null) { // 空链表
          this.head = node
          node.next = this.head
        } else { // 非空链表
          node.next = current
          current = this.getElementAt(this.size()) // 获取最后一项，即尾结点的引用
          this.head = node// 头结点为node
          current.next = this.head // 尾结点的next指向头结点
        }
      } else { // 其他位置插入,包括尾部
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

  // 从任意位置移除元素
  remove(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index == 0){
        if(this.size() == 1) {
          this.head = current
        } else {
          this.head = current.next
          current = this.getElementAt(this.size())
          current.next = this.head
        }
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return true
    }
    return false
  }
}
