import restoreIpAddresses from '../../code/recur/restoreIpAddresses'

const input = '25525511135'
const output = ['255.255.11.135', '255.255.111.35']
test('93. 复原IP地址', () => {
  expect(restoreIpAddresses(input)).toEqual(output)
})
