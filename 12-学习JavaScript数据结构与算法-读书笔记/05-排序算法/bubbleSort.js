/*
 * @Author: shaoyun
 * @Date: 2019-08-14 19:35:16
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-14 19:35:16
 * @Description: 
 */
/**
 * @description: 冒泡排序算法，比较所有相邻项，如果第一个比第二个大，则交换位置。复杂度为O(n^2)
 * @param {arr} {要排序的数组} 
 * @return: 排序后的数组
 */
// function sort(arr) {
//   const len = arr.length
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (arr[j+1] > arr[j]) {
//         [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
//       }
//     }
//   }
//   return arr
// }

/**
 * @description: 优化后的冒泡排序
 * @param {arr[]} 
 * @return: 排序后的数组
 */
 function bubbleSort(arr) {
  const len = arr.length
  let swapped
  for (let i = 0; i < len; i++) {
    swapped = true
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        swapped = false
      }
      if (swapped) {
        break
      }
    }
  }
  return arr
}
