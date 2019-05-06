// 选择排序
// 每一轮选出最小的 与当前项交换位置
// const selectSort = arr => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIdx = i // 每轮假设当前项最小的
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIdx]) {
//         minIdx = j
//       }
//     }
//     let temp = arr[i]
//     arr[i] = arr[minIdx]
//     arr[minIdx] = temp
//   }
//   return arr
// }

const selectSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIdx]) {
        maxIdx = j
      }
    }
    ;[arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]]
  }
}

// console.log(selectSort([10, 2, 1, 9]))
export default selectSort
