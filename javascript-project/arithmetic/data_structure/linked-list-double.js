// 链表单个元素
// let Node = function (element) {
//   this.element = element;
//   this.next = null;
//   this.prev = null;
// };

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

// 双向链表
class DoubleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null; // 链表表头
  }

  // 在链表的尾部添加新节点
  append(element) {
    let node = new Node(element);
    // console.log('appendNode==>',JSON.parse(JSON.stringify(node)));
    // console.log('appendHead==>',JSON.parse(JSON.stringify(this.head)));

    // 如果当前链表为空，则将head指向node
    if (this.head === null) this.head = node;
    else {
      // 否则，找到链表尾部的元素，然后添加新元素
      let current = this.getElementAt(this.length - 1);
      // console.log('appendCurrent==>',JSON.parse(JSON.stringify(current)));
      current.next = node;
    }

    this.length++;
  }

  // 在链表的任意位置添加节点
  insert(position, element) {
    // position不能超出边界值
    if (position < 0 || position > this.length) return false;

    let node = new Node(element);
    // console.log("appendNode==>", JSON.parse(JSON.stringify(node)));
    // console.log("appendHead==>", JSON.parse(JSON.stringify(this.head)));

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      // 获取插入节点上一个节点
      let previous = this.getElementAt(position - 1);
      // 插入节点在上一个节点和下一个节点中间
      node.next = previous.next;
      previous.next = node;
    }

    this.length++;
    return true;
  }

  // 删除链表中指定位置的节点
  removeAt(position) {
    // position不能超出边界值
    if (position < 0 || position >= this.length) return null;

    let current = this.head;

    if (position === 0) this.head = current.next;
    else {
      let previous = this.getElementAt(position - 1);
      console.log("removeAt==>", JSON.parse(JSON.stringify(previous)));
      // 将中间节点删除，该节点前后节点相连接
      current = previous.next;
      previous.next = current.next;
    }

    this.length--;
    return current.element;
  }

  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (current.element === element) return i;
      current = current.next;
    }

    return -1;
  }

  getElementAt(position) {
    if (position < 0 || position >= this.length) return null;

    // 根据链表特性，通过循环拿到最后一个节点的数据
    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    console.log("current==>", current);
    return current;
  }

  isEmpty() {
    // 两种判断逻辑
    // return this.head === null;
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  toString() {
    let current = this.head;
    let mapToString = "";

    while (current) {
      let next = current.next;
      next = next ? next.element : "null";
      mapToString += `[element: ${current.element}, next: ${next}] `;
      current = current.next;
    }

    return mapToString;
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);

linkedList.insert(0, 9);
linkedList.insert(2, 11);

console.log(linkedList.removeAt(1));
console.log(linkedList);
console.log(linkedList.toString());
