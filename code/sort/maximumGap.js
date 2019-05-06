/**
 * 164. 最大间距
 * https://leetcode-cn.com/problems/maximum-gap/
 * 输入: [3,6,9,1]
 * 输出: 3
 * 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
 */

const maximumGap = nums => {
  if (nums.length < 2) return 0
  nums.sort((a, b) => a - b)
  let max = nums[1] - nums[0]
  for (let i = 1, len = nums.length - 1; i < len; i++) {
    let gap = nums[i + 1] - nums[i]
    if (gap > max) {
      max = gap
    }
  }
  return max
}

// const maximumGap = nums => {
//   if (nums.length < 2) return 0
//   let max = 0
//   let len = nums.length
//   for (let i = len - 1; i >= 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] > nums[j + 1]) {
//         ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//       }
//     }
//     if (i < len - 1) {
//       let m = nums[i + 1] - nums[i]
//       if (m > max) {
//         max = m
//       }
//     }
//   }
//   return max
// }

console.log(maximumGap([13, 16, 19, 1]))
export default maximumGap
