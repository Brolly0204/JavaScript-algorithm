// 快速排序 https://visualgo.net/zh/sorting

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]])

// const quickSort = arr => {
//   const findCenter = (arr, start, end) => {
//     let next = start + 1
//     for (let i = next; i <= end; i++) {
//       if (arr[i] < arr[start]) {
//         swap(arr, next, i)
//         next++
//       }
//     }
//     swap(arr, start, next - 1)
//     return next
//   }
//   const sort = (arr, start = 0, end = arr.length - 1) => {
//     if (start < end) {
//       const center = findCenter(arr, start, end)
//       sort(arr, start, center - 1)
//       sort(arr, center, end)
//     }
//   }
//   sort(arr)
//   return arr
// }
// console.log(quickSort([5, 9, 7, 8, 3, 6, 1]))

const quickSort = arr => {
  const findCenter = (arr, start, end) => {
    let next = start + 1
    for (let i = next; i <= end; i++) {
      if (arr[i] < arr[start]) {
        swap(arr, i, next++)
      }
    }
    swap(arr, start, next - 1)
    return next
  }
  const sort = (arr, start = 0, end = arr.length - 1) => {
    if (start < end) {
      const center = findCenter(arr, start, end)
      sort(arr, start, center - 1)
      sort(arr, center, end)
    }
  }
  sort(arr)
  return arr
}
export default quickSort
