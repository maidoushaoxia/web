/*
 * @Author: shaoyun
 * @Date: 2019-08-14 21:09:31
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-15 22:03:40
 * @Description: 
 */
/**
 * @description: 选择排序的算法，找到数组中最小的值并放在第一位，以此类推。复杂度为O(n^2)
 * @param {arr[]} 
 * @return: 排序后的数组
 */
function selectionSort(arr) {
  let len = arr.length
  let indexMin
  for (let i = 0; i < len - 1; i++) {
    indexMin = i
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      [arr[indexMin],arr[i]] = [arr[i],arr[indexMin]]
    }
  }
  return arr
}
