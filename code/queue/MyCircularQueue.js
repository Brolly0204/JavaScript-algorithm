/**
 * 622. 设计循环队列
 * https://leetcode-cn.com/problems/design-circular-queue/
 */
class MyCircularQueue {
  constructor(k) {
    this.list = Array(k)
    this.front = 0
    this.rear = 0
    this.length = k
  }
  enQueue(value) {
    if (this.isFull()) {
      return false
    } else {
      this.list[this.rear] = value
      this.rear = ++this.rear % this.length
      return true
    }
  }
  deQueue() {
    let v = this.list[this.front]
    if (v != null) {
      this.list[this.front] = null
      this.front = ++this.front % this.length
      return true
    }
    return false
  }
  isEmpty() {
    return this.front === this.rear && this.list[this.front] == null
  }
  isFull() {
    return this.front === this.rear && this.list[this.front] != null
  }
  Front() {
    let res = this.list[this.front]
    return res == null ? -1 : res
  }
  Rear() {
    let rear = this.rear - 1
    let res = this.list[rear < 0 ? this.length - 1 : rear]
    return res == null ? -1 : res
  }
}

// const c1 = new MyCircularQueue(3)
export default MyCircularQueue
