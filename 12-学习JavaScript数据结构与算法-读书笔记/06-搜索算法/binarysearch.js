/*
 * @Author: shaoyun
 * @Date: 2019-08-21 20:39:13
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-21 21:28:54
 * @Description: 二分查找的算法
 */
function binarySearch(arr, target) {
  let low = 0
  let high = arr.length - 1
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
