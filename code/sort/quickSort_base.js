export default arr => {
  const quickSort = arr => {
    if (arr.length < 2) return arr
    let item = arr[0]
    let left = []
    let right = []
    for (let i = 1, len = arr.length; i < len; i++) {
      let cur = arr[i]
      cur < item ? left.push(cur) : right.push(cur)
    }
    return quickSort(left).concat(item, quickSort(right))
  }
  return quickSort(arr)
}
