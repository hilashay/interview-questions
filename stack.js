class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push(value) {
  //   let newNode = new Node(value);
  //   if (!this.first) {
  //     this.first = newNode;
  //     this.last = this.first;
  //   } else {
  //     let prev = this.first;
  //     //make the first elements equal to the new node
  //     this.first = newNode;
  //     //next of new node equal to the old biggining
  //     this.first.next = prev;
  //   }
  //   this.size++;
  //   return this;
  // }

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.last;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    let removedNode;
    if (!this.first) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      removedNode = this.first;
      this.first = this.first.next;
    }

    this.size--;
    return removedNode;
  }

  peek() {
    return this.first;
  }

  print() {
    // let values = [];
    // let current = this.first;
    // while (current) {
    //   values.push(current.value);
    //   current = current.next;
    // }
    // console.log(values);
    let str = "";
    let current = this.first;
    while (current) {
      str += `${current.value} -> `;
      current = current.next;
    }
    console.log(str);
  }
}

const list = new Stack();
list.push(1);
list.push(2);
list.push(3);
console.log(list);
// lis
