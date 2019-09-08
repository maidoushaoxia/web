/*
 * @Author: shaoyun
 * @Date: 2019-09-08 19:37:21
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-08 20:58:50
 * @Description: 被看到次数最多的机器人
 */
var n = parseInt(readline())
var maxCount = 0
for(var i = 0;i < n; i++){
  lines = readline().split(" ")
  var len = lines[0]
  var arr = lines.slice(1)
  for (let cur = 0;cur < len;cur++) {
    let count = 0
    for (let j = cur + 1;j < len;j++) {
      if (arr[j] > arr[cur]) {
        count ++
      }
    }
    maxCount = Math.max(maxCount, count)
  }
}
print(maxCount);

function fn (arr) {
  var maxCount = 0
  var len = arr.length
  for (let cur = 0;cur < len;cur++) {
    debugger
    let count = 0
    for (let j = cur + 1;j < len;j++) {
      if (arr[j] <= arr[cur]) {
        count ++
      }
    }
    maxCount = Math.max(maxCount, count)
  }
  return maxCount
}
console.log(maxCount([6,5,4,3]))
