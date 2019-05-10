import { Tree } from '../../code/binaryTree/isSymmetric'

test('101. 对称二叉树', () => {
  let tree1 = new Tree([1, 2, 2, 3, 4, 4, 3])
  expect(Tree.isSymmetric(tree1)).toBe(true)
  let tree2 = new Tree([1, 2, 2, null, 3, null, 3])
  expect(Tree.isSymmetric(tree2)).toBe(false)
})
