import isCircle, { NodeList } from '../../code/chain/DoubleChain'

test('141.环形链表', () => {
  let head1 = new NodeList([3, 2, 0, -4], 1)
  expect(isCircle(head1)).toBe(true)

  let head2 = new NodeList([1, 2], 0)
  expect(isCircle(head2)).toBe(true)

  let head3 = new NodeList([1], -1)
  expect(isCircle(head3)).toBe(false)
})
