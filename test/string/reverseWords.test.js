import reverseWords from '../../code/string/reverseWords'

const input = "Let's take LeetCode contest"
const output = "s'teL ekat edoCteeL tsetnoc"

test("反转: Let's take LeetCode contest", () => {
  expect(reverseWords(input)).toBe(output)
})
