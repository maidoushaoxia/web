/*
 * @Author: shaoyun
 * @Date: 2019-09-19 19:46:03
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-19 20:44:40
 * @Description: 
 * 垃圾分类
 */
var first_line = read_line()
var n = parseInt(first_line.split(' ')[0])
var m = parseInt(first_line.split(' ')[1])
var arr = []
var line
while(line= read_line()){ 
　　arr.push(line)
}
for (let i = 0;i < arr.length;i++) {
  arr[i] = arr[i].split(' ') // 所有约束条件数组
  for (let j = 0;j < arr[i].length;j++) {
    arr[i][j] = parseInt(arr[i][j])
  }
}
var count = 0,res = []
for (let i = 1;i < n;i++) {
  for (let j = 0;j < arr.length;j++) {
    if (arr[j].indexOf(i) !== -1) { // 若约束条件里有,则放入约束数组
      res.push(i)
      if (res !== arr[j]) {
        count ++
      }
    } else {
      count ++
    }
  }
}

print(parseInt(count / 2))


function fn(n,arr) {
  for (let i = 0;i < arr.length;i++) {
    arr[i] = arr[i].split(' ') // 所有约束条件数组
    for (let j = 0;j < arr[i].length;j++) {
      arr[i][j] = parseInt(arr[i][j])
    }
  }
  debugger
  var count = 0,res = []
  for (let i = 1;i < n;i++) {
    for (let j = 0;j < arr.length;j++) {
      if (arr[j].indexOf(i) !== -1 && res.indexOf(i)) { // 若约束条件里有,则放入约束数组
        res.push(i)
        if (res !== arr[j]) {
          count ++
        }
      } else {
        count ++
      }
    }
  }
  return parseInt(count / 2)
}
fn(5,['1 4','3 4'])
