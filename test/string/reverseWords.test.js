import reverseWords from '../../code/string/reverseWords'

// const input = "Let's take LeetCode  contest"
// const output = "s'teL ekat edoCteeL tsetnoc"
const input = 'vector<string> split (string s, char delimiter)'
const output = '>gnirts<rotcev tilps gnirts( ,s rahc )retimiled'

test("reverseWords: Let's take LeetCode contest", () => {
  expect(reverseWords(input)).toBe(output)
})
