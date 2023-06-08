class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    }
    return this;
  }

  pop() {
    let oldTail = this.tail;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev; //5
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    let oldHead = this.head; //1
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next; //this.head = 2
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.head.next = oldHead;
      this.head.prev = null;
      oldHead.prev = newNode;
    }
    this.length++;
    return this;
  }

  getMiddle() {
    let middle = this.length / 2;
    return middle;
  }

  getFromStart(index) {
    let counter = 0;
    let nodeFounded = this.head;
    while (counter !== index) {
      if (counter > index) {
        return nodeFounded;
      }
      nodeFounded = nodeFounded.next;
      counter++;
    }
    return nodeFounded;
  }

  getFromEnd(index) {
    let counter = this.length - 1;
    let nodeFounded = this.tail;
    while (counter !== index) {
      nodeFounded = nodeFounded.prev;
      counter--;
    }
    return nodeFounded;
  }

  get(index) {
    let nodeFounded;
    if (index < 0 || index >= this.length) return null;
    let middle = this.getMiddle();
    nodeFounded = index <= middle ? this.getFromStart(index) : this.getFromEnd(index);
    return nodeFounded;
  }

  set(index, val) {
    let nodeToUpdate = this.get(index);
    if (nodeToUpdate !== null) {
      nodeToUpdate.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    // index = 2 val = 7
    if (index < 0 || index > this.length - 1) return false;
    if (!this.head) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return !!this.push(val);
    else {
      let newNode = new Node(val);
      let lastIndex = this.get(index); //3
      newNode.prev = lastIndex.prev;
      newNode.next = lastIndex;
      lastIndex.prev.next = newNode;
      lastIndex.prev = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (!this.head) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let removedNode;
    removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;

    return removedNode;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current !== null) {
      prev = current.prev;
      current.prev = current.next;
      current.next = prev;
      current = current.prev;
    }
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }
  print() {
    let str = "";
    let current = this.head;
    while (current) {
      str += `${current.val} <-> `;
      current = current.next;
    }
    console.log(`<- ${str}`);
  }
}

const list = new LinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");

// const reverse = list.reverse();
// console.log("reverse", reverse);
// list.print();
// console.log(list);

// Program to find size of Doubly Linked List
const listSize = (list) => {
  let counter = 0;
  let current = list.head;
  while (current !== null) {
    counter++;
    current = current.next;
  }
  return counter;
};

const listLength = listSize(list);
console.log("listLength", listLength);
list.print();
