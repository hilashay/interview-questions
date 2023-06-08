class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    //push to the end
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this;
  }

  dequeue() {
    let nodeRemoved = this.first;
    if (!this.first) throw Error("queue is empty");
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return nodeRemoved;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
// queue.enqueue(3);

let nodeRemoved = queue.dequeue();
// console.log(queue);
console.log(nodeRemoved);
