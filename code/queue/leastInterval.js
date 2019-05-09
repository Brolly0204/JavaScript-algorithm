const leastInterval = (tasks, n) => {
  let q = ''
  let Q = {}
  tasks.forEach(item => {
    if (Q[item]) {
      Q[item]++
    } else {
      Q[item] = 1
    }
  })
  while (1) {
    let keys = Object.keys(Q)
    if (!keys[0]) {
      break
    }
    let tmp = []
    for (let i = 0; i <= n; i++) {
      let max = 0
      let key
      let pos
      keys.forEach((item, idx) => {
        if (Q[item] > max) {
          max = Q[item]
          key = item
          pos = idx
        }
      })
      if (key) {
        tmp.push(key)
        Q[key]--
        tasks.splice(pos, 1)
        if (Q[key] < 1) {
          delete Q[key]
        }
      } else {
        break
      }
    }
    q += tmp.join('').padEnd(n + 1, '-')
    console.log(tmp)
  }
  console.log(q)
  q = q.replace(/-+$/g, '')
  return q.length
}

let tasks = ['A', 'A', 'A', 'A', 'B', 'B', 'B']
let n = 2
console.log(leastInterval(tasks, n))
