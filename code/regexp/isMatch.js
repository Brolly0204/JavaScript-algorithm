/**
 * 10. 正则表达式匹配
 * https://leetcode-cn.com/problems/regular-expression-matching/
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 */

const isMatch = (s, p) => {
  const match = (s, p) => {
    let flag = false
    if (p.length <= 0) {
      return !s.length
    }

    // 判断p模式第一个字符 和 s字符串中第一个字符 是不是匹配
    if (s.length > 0 && (p[0] === s[0] || p[0] === '.')) {
      flag = true
    }
    // 如果p模式字符串长度大于1 看p的下一个字符是否是*
    if (p.length > 1 && p[1] === '*') {
      // 1.假设*匹配出现0次情况
      // 2.假设*匹配出现1次情况
      return match(s, p.slice(2)) || (flag && match(s.slice(1), p))
    } else {
      // 没有p模式字符串不带*的情况下 正常比较下一个字符
      return flag && match(s.slice(1), p.slice(1))
    }
  }
  return match(s, p)
}

// console.log(isMatch('aab', 'c*a*b'))
// console.log(isMatch('ab', '.*'))
// console.log(isMatch('mississippi', 'mis*is*p*.'))
export default isMatch
