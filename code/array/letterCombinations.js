/**
 * 17. 电话号码的字母组合
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * 输入: '23'
 * 输出: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 */

const map = [null, '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

const letterCombinations = digits => {
  if (digits.length <= 0) return []
  if (digits.length === 1) {
    return map[digits].split('')
  }
  let num = digits.split('')
  let code = []
  num.forEach(item => {
    map[item] && code.push(map[item])
  })
  const compoose = arr => {
    const temp = []
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }

    arr.splice(0, 2, temp)

    // 如果有更多项 就进行递归
    return arr.length > 1 ? compoose(arr) : temp
  }
  return compoose(code)
}
// console.log(letterCombinations('23'))

// const letterCombinations = digits => {
//   if (digits.length <= 0) return []
//   const digArr = digits.split('')
//   let result = []
//   const m = map[digArr[0]]
//   result = m.split('')
//   for (let i = 1; i < digArr.length; i++) {
//     const a = map[digArr[i]]
//     if (a) {
//       let arr = []
//       for (let t = 0; t < result.length; t++) {
//         for (let k = 0; k < a.length; k++) {
//           if (result[t] && a[k]) {
//             arr.push(`${result[t]}${a[k]}`)
//           }
//         }
//       }
//       if (i === 1) result = []
//       result = arr
//     }
//   }
//   return result
// }
// console.log(letterCombinations('234'))

export default letterCombinations
