/*
 * @Author: shaoyun
 * @Date: 2019-08-21 21:35:32
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-21 22:06:08
 * @Description: 随机算法
 */
/**
 * @description: 从最后一位开始将当前位置和一个随机位置交换
 * @param {arr[]} 
 * @return {arr[]} 
 */
function shuffle (arr) {
  for (let i = arr.length - 1;i > 0;i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1))
    let randomItem = arr[randomIndex]
    arr[randomIndex] = arr[i]
    arr[i] = randomItem
  }
  return arr
}
