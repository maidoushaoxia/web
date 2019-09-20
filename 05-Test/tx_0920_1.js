/*
 * @Author: shaoyun
 * @Date: 2019-09-20 21:44:43
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-20 21:45:14
 * @Description: 碰碰数
 */
var line = readline()
var n = parseInt(line.split(' ')[0])
var m = parseInt(line.split(' ')[1])
var nums = readline().split(' ')
var count = nums.length

function getCount(len) {
  count += len
  while(len > 1) {
    getCount(len - 1)
    len --
  }
  return count
}
