class Node {
  constructor(value) {
    this.value = value
    this.next = undefined
  }
}

class NodeList {
  constructor(nums) {
    let head = new Node(nums.shift())
    let node = head
    nums.forEach(item => {
      node.next = new Node(item)
      node = node.next
    })
    let o = Object.create(NodeList.prototype)
    return Object.assign(o, head)
  }
  portion(begin, end) {
    begin = begin || this
    let val = begin.value
    let p = begin // 基准值
    let q = begin.next // 游标

    while (q !== end) {
      if (q.value < val) {
        this.swap(q, p.next)
        p = p.next
      }
      q = q.next
    }
    this.swap(begin, p)
    return p
  }
  sort(begin, end) {
    if (begin !== end) {
      let point = this.portion(begin, end)
      this.sort(begin, point)
      this.sort(point.next, end)
    }
  }
  swap(q, p) {
    ;[q.value, p.value] = [p.value, q.value]
  }
}

const arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8]
let head = new NodeList(arr)
head.sort(head)
console.log(head)
