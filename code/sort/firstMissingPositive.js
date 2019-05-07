/**
 * 41. 缺失的第一个正数
 * https://leetcode-cn.com/problems/first-missing-positive/
 * 输入: [1,2,0]
 * 输出: 3
 */
const firstMissingPositive = nums => {
  let start = Math.min(...nums)
  let end = Math.max(...nums)
  if (start > 1 || end <= 0) return 1
  if (start <= 0) start = 1
  for (let i = start; i < end; i++) {
    if (!nums.includes(i)) return i
  }
  return end + 1
}
// console.log(firstMissingPositive([1000, -1]))
// console.log(firstMissingPositive([7, 8, 9, 11, 12]))
// console.log(firstMissingPositive([3, 4, -1, 1]))
// console.log(firstMissingPositive([-3, -4, -1]))

export default firstMissingPositive
