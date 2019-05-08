const matrixArea = arr => {
  let matrix = []
  let reg = /1{2,}/g
  arr = arr.map(item => {
    let str = item.join('')
    let r = reg.exec(str)
    let rs = []
    while (r) {
      rs.push([r.index, r.index + r[0].length - 1])
      r = reg.exec(str)
    }
    return rs
  })
  let wid = 1
  let maxWid = 1
  // console.log(matrix)
  const maxRec = (arr, result, n = 1) => {
    const prev = arr.pop()
    const next = arr.pop()
    n++
    let start
    let end

    // 上一行
    for (let i = 0, pl = prev.length; i < pl; i++) {
      // 下一行
      for (let j = 0, nl = next.length; j < nl; j++) {
        let p = Math.max(prev[i][0], next[j][0])
        let n = Math.min(prev[i][1], next[j][1])
        wid = n - p
        if (wid >= maxWid) {
          // 存在交集
          maxWid = wid
          start = p
          end = n
          // console.log('==', start, end, wid + 1)
          // result.push([start, end])
        }
      }
    }
    if (start === undefined || end === undefined) {
      if (n < 3) {
        return false
      } else {
        wid = prev[0][1] - prev[0][0] + 1
        if (wid > 1) {
          result.push((n - 1) * wid)
        }
      }
    } else {
      if (arr.length > 0) {
        arr.push([[start, end]])
        maxRec(arr, result, n++)
      } else {
        result.push(n * (end - start + 1))
      }
    }
  }

  while (arr.length > 1) {
    maxRec([...arr], matrix)
    arr.pop()
  }
  let max = 0
  let item = matrix.pop()
  while (item) {
    if (item > max) {
      max = item
    }
    item = matrix.pop()
  }

  return max > 0 ? max : -1
}

let input = [
  ['0', '1', '1', '1', '0', '0', '1', '1', '1', '1', '0', '0'],
  ['0', '0', '1', '1', '0', '1', '1', '1', '1', '0', '0', '1'],
  ['0', '1', '1', '1', '0', '0', '1', '1', '1', '1', '0', '0'],
  ['0', '1', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0'],
  ['0', '1', '1', '0', '0', '0', '1', '1', '1', '1', '1', '0']
]

console.log(matrixArea(input))

export default matrixArea
