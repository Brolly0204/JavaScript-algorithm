/**
 * 141. 环形链表
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 输入：head = [1,2], pos = 0 (pos 来表示链表尾连接到链表中的位置（索引从 0 开始）)
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 */

class Node {
  constructor(value) {
    this.value = value
    this.next = undefined
  }
}

class NodeList {
  constructor(nums, pos = -1) {
    let head = new Node(nums.shift())
    let node = head
    let circle
    let last

    if (pos === 0) {
      circle = head
    }
    nums.forEach((item, idx) => {
      node.next = new Node(item)
      node = node.next
      if (!circle && idx === pos - 1) {
        circle = node
      }
      if (idx === nums.length - 1) {
        last = node
      }
    })
    if (circle) {
      last.next = circle
    }
    Object.assign(this, head)
  }
}

const isCircle = head => {
  if (!head) return false
  let slow = head
  let fast = head.next
  while (1) {
    if (!fast || !fast.next) {
      return false
    } else if (fast === slow || fast.next === slow) {
      return true
    } else {
      slow = slow.next
      fast = fast.next.next
    }
  }
}

// let head = new NodeList([3, 2, 0, -4], 1)
// console.log(head)
//
// console.log(isCircle(head))

export { Node, NodeList }

export default isCircle
