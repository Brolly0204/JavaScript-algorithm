/**
 * 914. 卡牌分组
 * https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * 输入：[1,2,3,4,4,3,2,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
 */

// 思路：统计每组数字重复出现次数，求出这些次数中的最大公约数，如果小于等于1返回false，否则返回true

// 计算两数之间的最大公约数
const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b)
}

const cardGroups = deck => {
  const arr = deck.sort((a, b) => a - b)
  const obj = {}
  arr.forEach(item => {
    obj[item] ? obj[item]++ : (obj[item] = 1)
  })
  const lens = Object.values(obj)
  let l = lens[0]
  for (let k of lens) {
    l = gcd(l, k)
  }
  return !(l <= 1)
}

// console.log(cardGroups([1, 2, 3, 4, 4, 3, 2, 1]))
// console.log(cardGroups([0, 0, 1, 1, 1, 1, 2, 2, 3, 4]))
// console.log(cardGroups([1, 1, 1, 2, 2, 2, 3, 3]))
// console.log(cardGroups([1, 1, 2, 2, 2, 2]))
// console.log(cardGroups([1]))
// console.log(cardGroups([1, 1]))
// console.log(cardGroups([1, 1, 1]))
export default cardGroups
