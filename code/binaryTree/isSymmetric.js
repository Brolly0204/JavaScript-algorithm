/**
 * 101.对称二叉树
 * https://leetcode-cn.com/problems/symmetric-tree/
 */

class Node {
  constructor(val) {
    this.val = val
    this.right = this.left = undefined
  }
}

class Tree {
  constructor(data) {
    let nodeList = []
    let root
    for (let i = 0; i < data.length; i++) {
      let node = new Node(data[i])
      nodeList.push(node)
      if (i > 0) {
        // 算出在树中那一层
        let n = Math.floor(Math.sqrt(i + 1))
        // 当前层的起始索引位置
        let q = Math.pow(2, n) - 1
        // 上一层的起始索引位置
        let p = Math.pow(2, n - 1) - 1

        // 计算出当前节点属于 上层的哪个父节点
        // p 上层起始节点索引位置
        // q 当前层起始节点索引位置
        // i 当前节点索引位置
        // 父节点索引 = p + Math.floor((i - q) / 2)
        // 找到当前节点的父节点
        let parent = nodeList[p + Math.floor((i - q) / 2)]
        if (parent.left) {
          parent.right = node
        } else {
          parent.left = node
        }
      }
    }
    root = nodeList[0]
    nodeList = null
    return root
  }

  static isSymmetric(root) {
    if (!root) {
      return true
    }
    let walk = (left, right) => {
      if (!left && !right) {
        return true
      }
      if ((left && !right) || (!left && right) || left.val !== right.val) {
        return false
      }
      return walk(left.left, right.right) && walk(left.right, right.left)
    }
    return walk(root.left, root.right)
  }
}

// let tree = new Tree([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// console.log(tree)

export { Tree }
