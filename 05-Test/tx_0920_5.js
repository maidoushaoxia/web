/*
 * @Author: shaoyun
 * @Date: 2019-09-20 21:14:45
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-20 21:14:47
 * @Description: 小乌龟走路
 */
var order = readline()
var n = parseInt(readline())
print(getCount(order, n))

function getCount (order, n) {
  var count = 1
  let i = 0
  while (i < n) {
    reverseOrder(order)
    i++
  }
  for (let i = 0; i < order.length;i++) {
    if (order[i] === 'F') {
      count ++
     }
     continue
  }
  return count
}

function reverseOrder(order) {
  for (let i = 0;i < order.length;i++) {
    let c = order.charAt(i)
    switch(c) {
      case 'F':
        c = 'T'
        break
      case 'T':
        c = 'F'
        break
    }
  }
  return order
}

getCount ('FFT', 1)
