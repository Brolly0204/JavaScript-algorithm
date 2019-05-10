const Stack = (() => {
  const wm = new WeakMap()
  class Stack {
    constructor() {
      wm.set(this, [])
      this.top = 0
    }

    push(...nums) {
      let list = wm.get(this)
      nums.forEach(item => {
        list[this.top++] = item
      })
    }

    pop() {
      let list = wm.get(this)
      let last = list[--this.top]
      list.length = this.top
      return last
    }

    peek() {
      // 返回栈顶元素
      let list = wm.get(this)
      return list[this.top - 1]
    }

    clear() {
      let list = wm.get(this)
      list.length = 0
    }

    size() {
      return this.top
    }

    output() {
      return wm.get(this)
    }

    isEmpty() {
      return wm.get(this).length === 0
    }
  }
  return Stack
})()

let s = new Stack()

s.push(1, 2, 3, 4, 5)
console.log(s.output()) // [ 1, 2, 3, 4, 5 ]
console.log(s.size())

// console.log(s.pop())
// console.log(s.pop())
// console.log(s.peek())
// console.log(s.print())
// console.log(s.pop())
// console.log(s.size())
// console.log(s.size())
//
// console.log(s.print())
// console.log(Object.getOwnPropertySymbols(s))

// const set = new Set([1, 2, 3, 4])
// console.log(set)

// const c = { id: 1 }
// const d = { id: 2 }
//
// const m = new Map()
// m.set(c, 'hello')
// m.set(d, 'world')
// console.log(m)
// console.log(m.get(c))
// console.log(m.has(c))

// const set = new Set([['foo', 1], ['bar', 2], 3, 4])
// console.log(set)
// for (let k of set.keys()) {
//   console.log(k)
// }

// const wm = new WeakMap()
// let o = { id: 1 }
// let e = { text: 'hello world!' }
//
// wm.set(o, e)
// // o = null
// e = null
// console.log(wm.get(o))

function divideBy2(decNumber, base = 2) {
  let remStack = new Stack()
  let rem
  let binaryString = ''
  let digits = '0123456789ABCDEF'
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }
  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()].toString()
  }
  return binaryString
}

// 将十进制转换成其他进制
let num = 100345
num.toString(2) // "11000011111111001"
num.toString(8) // "303771"

console.log(divideBy2(num, 2)) // "11000011111111001"
console.log(divideBy2(num, 8)) // "303771"
