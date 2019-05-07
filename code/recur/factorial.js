const factorial1 = n => {
  if (n <= 1) return 1
  return n * factorial1(n - 1)
}

// 尾递归优化
const factorial2 = (n, total = 1) => {
  if (n <= 1) return total
  return factorial2(n - 1, total * n)
}

// console.log(factorial1(3)) // 6
// console.log(factorial2(3)) // 6
// console.log(factorial1(5)) // 120
// console.log(factorial2(5)) // 120
export { factorial1, factorial2 }
