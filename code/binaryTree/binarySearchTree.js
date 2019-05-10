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

  insert(key) {
    let newNode = new Node(key)
    if (this.root == null) {
      this.root = newNode
    } else {
      this._insertNode(this.root, newNode)
    }
  }

  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode
      } else {
        this._insertNode(node.left, newNode)
      }
    } else {
      if (node.right == null) {
        node.right = newNode
      } else {
        this._insertNode(node.right, newNode)
      }
    }
  }

  // 先序遍历（根 左 右）
  static preOrderTraverseNode(node, callback) {
    if (node) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  // 中序遍历（左 根 右）
  static inOrderTraverseNode(node, callback) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  // 后序遍历（左 右 根）
  static postOrderTraverseNode(node, callback) {
    if (node) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
}

let tree = new BinarySearchTree([5, 4, 6])
tree.insert(7)
tree.insert(3)
// console.log(tree)

BinarySearchTree.inOrderTraverseNode(tree.root, key => {
  console.log('in', key)
})

BinarySearchTree.preOrderTraverseNode(tree.root, key => {
  console.log('pre', key)
})

BinarySearchTree.postOrderTraverseNode(tree.root, key => {
  console.log('post', key)
})
