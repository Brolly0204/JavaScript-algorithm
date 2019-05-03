/**
 * 696. 计数二进制子串
 * https://leetcode-cn.com/problems/count-binary-substrings/
 * 输入: "00110011"
 * 输出: 6
 */
// const countBinarySubstrings = s => {
//   let arr = []
//   for (let i = 0; i < s.length; i++) {
//     let sub = s.slice(i)
//     let str = sub.match(`${sub[0]}+`)[0]
//     // 按位运算符完成0、1互转的操作(位运算 XOR)
//     // str[0] ^ 1 => 1 ^ 1 = 0  0 ^ 1 = 1
//     str += `${str[0] ^ 1}`.repeat(str.length)
//     let reg = new RegExp(`^${str}`)
//     reg.test(sub) && arr.push(RegExp['$&'])
//     console.log(arr) // [ '0011', '01', '1100', '10', '0011', '01' ]
//   }
//   return arr.length
// }
// countBinarySubstrings('00110011')

const countBinarySubstrings = s => {
  let c = 0
  for (let i = 0; i < s.length; i++) {
    let sub = s.slice(i)
    let str = sub.match(`${sub[0]}+`)[0]
    str += `${str[0] ^ 1}`.repeat(str.length)
    sub.startsWith(str) && c++
  }
  return c
}
// countBinarySubstrings('00110011')
export default countBinarySubstrings
