/**
 * 93. 复原IP地址
 * https://leetcode-cn.com/problems/restore-ip-addresses/
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 */
const restoreIpAddresses = s => {
  let r = []
  if (s.length > 12) return []
  const search = (cur, sub) => {
    // 转换成字符串后 等于原始字符串 说明符合条件
    if (cur.length === 4 && cur.join('') === s) {
      r.push(cur.join('.'))
    } else {
      for (let i = 0, len = Math.min(3, sub.length); i < len; i++) {
        let ss = sub.substr(0, i + 1)
        // if (!/^(0{2,3}|0\d+)$/.test(ss) && ss < 256) {
        if (ss < 256) {
          search(cur.concat(ss * 1), sub.substr(i + 1))
        }
      }
    }
  }
  search([], s)
  return r
}

console.log(restoreIpAddresses('010010'))
// console.log(restoreIpAddresses('25525511135'))
export default restoreIpAddresses
