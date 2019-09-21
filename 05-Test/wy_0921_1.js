/*
 * @Author: shaoyun
 * @Date: 2019-09-21 15:40:45
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-21 15:51:36
 * @Description: 最小数位和
 */
var T = parseInt(readline())
var arr = []
for(let i = 0;i < T;i++){
  arr.push(parseInt(readline()))
}
for (let j = 0;j < arr.length;j++) {
  if (arr[j] < 10) {
    print(arr[j])
  } else if (10 <= arr[j] < 100) {
    let res = arr[j]
    while (res >= arr[j]) {
      if (parseInt(res / 10) + res % 10 === arr[j]) {
        print(res)
        break
      } else {
        res ++
      }
    }
  } else if (100 <= arr[j] < 1000) {
    let res = arr[j]
    while (res >= arr[j]) {
      if (parseInt(res / 100) + parseInt(res % 100 / 10) + res % 100 % 10 === arr[j]) {
        print(res)
        break
      } else {
        res ++
      }
    }
  }
}


function fn(arr) {
  for (let i = 0;i < arr.length;i++) {
    if (arr[i] < 10) {
      console.log(arr[i])
    } else if (10 <= arr[i] < 100) {
      let res = arr[i]
      while (res >= arr[i]) {
        if (parseInt(res / 10) + res % 10 === arr[i]) {
          console.log(res)
          break
        } else {
          res ++
        }
      }
    } else if (100 <= arr[j] < 1000) {
      let res = arr[j]
      while (res >= arr[j]) {
        if (parseInt(res / 100) + parseInt(res % 100 / 10) + res % 100 % 10 === arr[j]) {
          console.log(res)
          break
        } else {
          res ++
        }
      }
    }
  }
}
