import sort, { NodeList } from '../../code/chain/chain'

let input = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8]
let head = new NodeList(input)
test('148. 排序链表', () => {
  sort(head) // end为undefined
  let res = []
  let node = head
  while (node) {
    res.push(node.value)
    node = node.next
  }
  expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
