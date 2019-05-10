const spiralOrder = matrix => {
  const map = (arr, r = []) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i === 0) {
        r = r.concat(arr[i])
      } else if (i === len - 1) {
        r = r.concat(arr[i].reverse())
      } else if (arr[i].length) {
        r.push(arr[i].pop())
      }
    }
    arr.shift()
    arr.pop()

    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].length) {
        r.push(arr[i].shift())
      }
    }

    if (arr.length) {
      return map(arr, r)
    } else {
      return r
    }
  }
  return map(matrix)
}

// console.log(spiralOrder([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]))
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
// console.log(spiralOrder(arr)) // [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]

export default spiralOrder
