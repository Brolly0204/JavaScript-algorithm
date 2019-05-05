/**
 * 459. 重复的子字符串
 * https://leetcode-cn.com/problems/repeated-substring-pattern/
 * 输入: "abab"
 * 输出: True
 * 解释: 可由子字符串 "ab" 重复两次构成
 */

const repeatSubStringPattern = s => /^(\w+)\1+$/.test(s)

export default repeatSubStringPattern
