/**
 * 682. 棒球比赛
 * https://leetcode-cn.com/problems/baseball-game/
 * 输入: ["5","2","C","D","+"]
 * 输出: 30
 */
const calPoints = ops => {
  let score = []
  ops.forEach((item, idx) => {
    switch (item) {
      case 'C':
        score.pop()
        break
      case 'D':
        score.push(score.slice(-1) * 2)
        break
      case '+':
        let total = score.slice(-2).reduce((pre, cur) => pre + cur * 1, 0)
        score.push(total)
        break
      default:
        score.push(item)
    }
  })
  return score.reduce((pre, cur) => cur * 1 + pre, 0)
}
// console.log(calPoints(['5', '2', 'C', 'D', '+']))
export default calPoints
