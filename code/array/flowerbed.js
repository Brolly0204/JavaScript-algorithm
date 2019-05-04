/**
 * 605. 种花问题
 * https://leetcode-cn.com/problems/can-place-flowers/
 * 输入: flowerbed = [1,0,0,0,1], n = 1
 * 输出: True
 */

// const canPlaceFlowers = (flowerbed, n) => {
//   let fs = 0
//   if (flowerbed.length === 1 && flowerbed[0] === 0) {
//     return n <= 1
//   }
//   flowerbed.forEach((item, idx, arr) => {
//     let p = arr[idx - 1]
//     let l = arr[idx + 1]
//     if (idx === 0 && arr[idx] === 0) {
//       if (p === 0 || l === 0) {
//         fs++
//         arr.splice(idx, 1, 1)
//       }
//     } else if (!item && !p && !l) {
//       arr.splice(idx, 1, 1)
//       fs++
//     }
//   })
//   return fs >= n
// }

// const canPlaceFlowers = (flowerbed, n) => {
//   let f = 0
//   if (flowerbed.length === 1 && !flowerbed[0]) return true
//   for (let i = 0; i < flowerbed.length; i++) {
//     const item = flowerbed[i]
//     if (item === 1) {
//       i++
//       continue
//     }
//
//     if (item === 0) {
//       if (i === 0 && flowerbed[i + 1] === 0) {
//         f++
//         flowerbed.splice(i, 1, 1)
//         i++
//       } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
//         f++
//         flowerbed.splice(i, 1, 1)
//         i++
//       }
//     }
//
//     if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
//       f++
//     }
//   }
//   return f >= n
// }

const canPlaceFlowers = (flowerbed, n) => {
  for (let i = 0, l = flowerbed.length; i < l; i++) {
    if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      flowerbed[i] = 1
      n--
    }
  }
  return n <= 0
}
// console.log(canPlaceFlowers([0, 0, 1, 0, 0], 3))
// console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2))
// console.log(canPlaceFlowers([1, 0, 1, 0, 0, 1, 0], 1))
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
// console.log(canPlaceFlowers([0, 0, 1, 0, 1, 0], 2))

export default canPlaceFlowers
