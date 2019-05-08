import MyCircularQueue from '../../code/queue/MyCircularQueue'

test('622. 设计循环队列', () => {
  const c = new MyCircularQueue(3)
  c.enQueue(1)
  c.enQueue(2)
  c.enQueue(3)
  expect(c.isFull()).toBe(true)
  expect(c.Rear()).toBe(3)
  expect(c.deQueue()).toBe(true)
  expect(c.isEmpty()).toBe(false)
  expect(c.Front()).toBe(2)
})
