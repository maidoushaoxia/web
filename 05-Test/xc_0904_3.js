/*
 * @Author: shaoyun
 * @Date: 2019-09-04 20:20:32
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-05 20:45:16
 * @Description: 最大乘积子序列，由于负负得正，所以要同时记录最大值和最小值
 */
var sc = read_line()
var arr = sc.split(' ')
arr = arr.map(function (item) {
  return parseInt(item)
})

var max = arr[0]
var min = arr[0]
var res = arr[0]
for (var i = 1;i < arr.length;i++) {
  if (arr[i] >= 0) {
    max = Math.max(max * arr[i], arr[i])
    min = Math.min(min * arr[i], arr[i])
  } else {
    var temp = max
    max = Math.max(min * arr[i], arr[i])
    min = Math.min(temp * arr[i], arr[i])
  }
  res = Math.max(max, res)
}
print(res)
