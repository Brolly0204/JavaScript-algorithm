// const findKthLargest = (nums, k) => {
//   // nums.sort((a, b) => b - a)
//   // return nums[k - 1]
//   let len = nums.length
//   for (let i = 0; i < k; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (nums[j] > nums[j + 1]) {
//         ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//       }
//     }
//   }
//   return nums[len - k]
// }

const findKthLargest = (nums, k) => {
  let len = nums.length
  for (let i = len - 1; i > len - 1 - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  // 倒数第k个的索引 len - k
  return nums[len - k]
}
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
export default findKthLargest
