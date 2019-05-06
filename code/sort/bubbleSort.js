// 冒泡排序
// const bubbleSort = arr => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let temp
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort([4, 2, 3, 1]))

const bubbleSort = arr => {
  // 限定排序范围
  for (let i = arr.length - 1; i > 0; i--) {
    let flag = true // 优化 数组有可能是有序的
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    if (flag) return arr
  }
  return arr
}

console.log(bubbleSort([4, 2, 3, 1]))
// console.log(bubbleSort([1, 2, 3, 4]))

export default bubbleSort
