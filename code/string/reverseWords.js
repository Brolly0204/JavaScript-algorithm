/**
 * 字符串反转
 * 题目：
 * 557. 反转字符串中的单词 III
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 *
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 */

const reverseWords = s => {
  return s
    .split(' ')
    .map(item =>
      item
        .split('')
        .reverse()
        .join('')
    )
    .join(' ')
}

export default reverseWords
