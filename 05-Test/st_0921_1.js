/*
 * @Author: shaoyun
 * @Date: 2019-09-21 19:29:53
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-21 21:31:16
 * @Description: 字符串拼接
 */
var str = readline()
var res = ''
for (let i = 0;i < str.length;i++) {
  let j = i
  let temp = str[i]
  while (Number(str[i + 1]) === Number(str[i]) + 1) {
    j ++
  }
  temp = str[i] + '~' + str[j]
  res += temp
  i = j + 1
}

function fn(arr) {
  debugger
  var res = ''
  for (let i = 0;i < arr.length;i++) {
    let j = i
    let temp = arr[i]
    while (arr[j + 1] === arr[j] + 1) {
      j ++
    }
    if (arr[i] !== arr[j]) {
      temp = arr[i] + '~' + arr[j] + ','
      res += temp
      i = j
    } else {
      temp = ',' + arr[i]
      res += temp
    }
  }
  return res
}
