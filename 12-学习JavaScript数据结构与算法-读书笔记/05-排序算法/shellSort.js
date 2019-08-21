/*
 * @Author: shaoyun
 * @Date: 2019-08-18 13:48:05
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-18 14:27:15
 * @Description: 希尔排序的算法
 * 首先把数组按步长分组（步长等于数组长度除以2），每组两个元素，若步长为5，则是0，5两个元素，以此类推。
 * 接着对分组进行插入排序
 * 缩小步长（再次除以2），重复以上操作
 */
/**
 * @description: 复杂度为O(nlog^2(n))
 * @param {arr[]} 
 * @return: 
 */
function shellSort (arr) {
  for(let gap = Math.floor(arr.length / 2);gap > 1;gap = Math.floor(gap / 2)) {
    for (let i = gap;i < arr.length;i++) {
      if (arr[i - gap] > arr[i]) {
        [arr[i - gap], arr[i]] = [arr[i], arr[i - gap]]
      }
    }
  }
  return arr
}
