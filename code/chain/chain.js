class Node {
  constructor(value) {
    this.value = value
    this.next = undefined
  }
}

class NodeList {
  constructor(arr) {
    let head = new Node(arr.shift())
    let node = head
    arr.forEach(item => {
      node.next = new Node(item)
      node = node.next
    })
    return head
  }
}

const swap = (p, q) => {
  ;[p.value, q.value] = [q.value, p.value]
}

const portion = (begin, end) => {
  let val = begin.value
  let p = begin // 基准值
  let q = begin.next // 游标

  while (q !== end) {
    if (q.value < val) {
      swap(q, p.next)
      p = p.next
    }
    q = q.next
  }
  swap(begin, p)
  return p
}

// end代表链表结尾处 默认就是undefined
const sort = (begin, end) => {
  if (begin !== end) {
    let point = portion(begin, end)
    sort(begin, point)
    sort(point.next, end)
  }
}

// const arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8]
// const head = new NodeList(arr)
// sort(head)
// console.log(head)

export { Node, NodeList }

export default sort
