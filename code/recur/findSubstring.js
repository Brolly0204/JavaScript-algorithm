/**
 * 30. 串联所有单词的子串(有bug)
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 * 输入：
  s = "barfoothefoobarman",
  words = ["foo","bar"]
 * 输出：[0,9]
 */

const findSubstring = (s, words) => {
  if (s.length === 0 || words.length === 0) {
    return []
  }

  let result = []
  let num = words.length

  let range = (r, _arr) => {
    if (r.length === num) {
      result.push(r)
    } else {
      _arr.forEach((item, idx) => {
        let tmp = [].concat(_arr)
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      })
    }
  }
  range([], words)
  let res = []
  console.log(result)
  result.forEach(item => {
    let reg = new RegExp(item.join(''), 'g')
    let match = reg.exec(s)
    while (match) {
      res.push(match.index)
      match = reg.exec(s)
    }
  })
  return [...new Set(res.sort((a, b) => a - b))]
}

console.log(findSubstring('aaa', ['a', 'a']))
// console.log(findSubstring('', []))
// console.log(findSubstring('foobarfoobar', ['foo', 'bar']))
// console.log(
//   findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])
// )
