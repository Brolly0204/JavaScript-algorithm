class Node {
  constructor(key) {
    this.key = key
    this.right = this.left = null
  }
}

class BinarySearchTree {
  constructor(list = []) {
    this.root = null
    if (list.length) {
      this.root = new Node(list.shift())
      list.forEach(item => this.insert(item))
    }
  }

  insert(item) {
    let newNode = new Node(item)
    if (this.root == null) {
      this.root = newNode
    } else {
      this._insertNode(this.root, newNode)
    }
  }
  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this._insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this._insertNode(node.right, newNode)
      }
    }
  }

  // 先序遍历 根 左 右
  preOrderTraverseNode(node, callback) {
    if (node instanceof Node) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  // 中序遍历 左 根 右
  inOrderTraverseNode(node, callback) {
    if (node instanceof Node) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  // 后序遍历 左 右 根
  postOrderTraverseNode(node, callback) {
    if (node instanceof Node) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  // 搜索最小值
  min() {
    return this._minNode(this.root)
  }

  _minNode(node) {
    while (node instanceof Node && node.left) {
      node = node.left
    }
    return node ? node.key : null
  }

  // 搜索最大值
  max() {
    return this._maxNode(this.root)
  }

  _maxNode(node) {
    while (node instanceof Node && node.right) {
      node = node.right
    }
    return node ? node.key : null
  }

  // 搜索特定值
  search(key) {
    return this._searchNode(this.root, key)
  }

  _searchNode(node, key) {
    if (node instanceof Node) {
      if (node.key === key) {
        return true
      }

      if (key < node.key) {
        return this._searchNode(node.left, key)
      } else {
        return this._searchNode(node.right, key)
      }
    }

    return false
  }

  findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
  // 删除指定值
  remove(key) {
    return this._removeNode(this.root, key)
  }
  _removeNode(node, key) {
    if (node === null) {
      return null
    }
    if (key < node.key) {
      // 根据当前node 去它的左子节点继续查找
      node.left = this._removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      // 根据当前node 去它的右子节点继续查找
      node.right = this._removeNode(node.right, key)
      return node
    } else {
      // 找到了 删除节点

      // 情况1：删除节点 没有子节点的情况下 直接删除
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      // 情况2：删除节点 只有一个子节点
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // 情况3：删除节点 有两个节点
      // console.log(node)
      // 查找右边最小节点
      let min = this.findMinNode(node.right)
      node.key = min.key
      node.right = this._removeNode(node.right, min.key)
      return node
    }
  }
}

const list = [10, 6, 20, 8, 12, 5, 22]
const tree = new BinarySearchTree(list)
tree.insert(17)
// console.log(tree)

tree.remove(20)
// console.log(tree.min())
// console.log(tree.max())

// 先序遍历
// tree.preOrderTraverseNode(tree.root, key => {
//   console.log(key) // 10 6 5 8 20 12 17 22
// })

// 中序遍历
// tree.inOrderTraverseNode(tree.root, key => {
//   console.log(key) // 5 6 10 12 17 20 22
// })

// 后序遍历
// tree.postOrderTraverseNode(tree.root, key => {
//   console.log(key) // 5 8 6 17 12 22 20 10
// })
