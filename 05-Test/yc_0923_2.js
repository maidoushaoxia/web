/*
 * @Author: shaoyun
 * @Date: 2019-09-23 19:12:13
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-23 20:03:56
 * @Description: 字符串元素的和
 */
var str = readline()
print(getSum(str))

function getSum(str) {
  var arr = str.split(',')
  var res = 0
  for (let i = 0;i <arr.length;i++) {
    let num = parseInt(arr[i])
    res += num
  }
  return res
}
