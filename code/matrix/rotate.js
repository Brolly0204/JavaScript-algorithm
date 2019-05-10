/**
 * 48. 旋转图像
 * https://leetcode-cn.com/problems/rotate-image/
 */

// 方式一
// 倒数第一行中每一项 作为 旋转后每行的第一项
// 倒数第二行中每一项 作为 旋转后每行的第二项
// 往后依次移动...
const rotate = matrix => {
  let len = matrix.length
  for (let i = len - 1; i >= 0; i--) {
    let cur = matrix[i]
    for (let k = 0; k < len; k++) {
      matrix[k].push(cur.shift())
    }
  }
  return matrix
}

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// const matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
// console.log(rotate(matrix))

// 方式二
const rotate2 = matrix => {
  let len = matrix.length
  // 上下行之间 两两交换
  for (let i = 0; i < Math.floor(len / 2); i++) {
    ;[matrix[i], matrix[len - i - 1]] = [matrix[len - i - 1], matrix[i]]
  }

  // 沿斜线 对角项 两两交换
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  return matrix
}

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//
// console.log(rotate2(matrix))

export default rotate
