/*
 * @Author: shaoyun
 * @Date: 2019-08-21 20:39:13
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-21 21:28:54
 * @Description: 二分查找的算法
 */
/**
 * @description: 首先对数组排序，然后取中间值。如果中间值就是需要查找的值，就直接返回。如果中间值小于待搜索值，则查找右半边；否则查找左半边。
 * @param {arr[]} 
 * @return: 
 */
function binarySearch(arr, target) {
  let low = 0
  let high = arr.length - 1
  // 一般不给用api，需要写排序算法
  arr.sort()
  while (low < high) {
    let mid = Math.floor((low + high) / 2)
    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] < target) {
      low = mid + 1
    } else if (arr[mid] > target) {
      high = mid - 1
    }
  }
  return -1
}
