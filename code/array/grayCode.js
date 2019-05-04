/**
 * 89. 格雷编码
 * https://leetcode-cn.com/problems/gray-code/
 * 输入: 2
 * 输出: [0,1,3,2]
 * 规律：
 * 1 => [0, 1]
 * 2 => [ '00', '01', '11', '10' ]
 * 3 => [ '000', '001', '011', '010', '110', '111', '101', '100' ]
 */

const make = n => {
  if (n === 0) return [0]
  if (n === 1) {
    return [0, 1]
  } else {
    let prev = make(n - 1)
    let result = []
    let len = Math.pow(2, n)
    for (let i = 0, l = prev.length; i < l; i++) {
      result[i] = `0${prev[i]}`
      result[--len] = `1${prev[i]}`
    }
    return result
  }
}
const grayCode = n => {
  // const binary = make(n)
  return make(n).map(item => parseInt(item, 2))
}

export default grayCode
