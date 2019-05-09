const swap = (arr, i, j) => {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

const quickSort = arr => {
  const portion = (arr, begin, end) => {
    let next = begin + 1
    for (let i = next; i <= end; i++) {
      if (arr[i] < arr[begin]) {
        swap(arr, i, next++)
      }
    }
    swap(arr, begin, next - 1)
    return next
  }
  const sort = (arr, begin = 0, end = arr.length - 1) => {
    if (begin < end) {
      let point = portion(arr, begin, end)
      sort(arr, begin, point - 1)
      sort(arr, point, end)
    }
  }
  sort(arr)
  return arr
}

console.log(quickSort([5, 9, 7, 8, 3, 6, 1]))
