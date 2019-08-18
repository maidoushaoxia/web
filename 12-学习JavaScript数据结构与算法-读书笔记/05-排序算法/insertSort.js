/*
 * @Author: shaoyun
 * @Date: 2019-08-15 20:29:55
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-18 12:15:58
 * @Description: 
 */
/**
 * @description: 插入排序的算法，每次排一项。复杂度为O(n^2)
 * @param {arr[]} 
 * @return: 
 */
function insertSort (arr) {
  for (let i = 1;i<arr.length;i++) {
    let j = i
    while (j>0 && arr[j-1] > temp) {
      // 若前一个数比要比较的数大，则交换位置，直到j为0
      [arr[j-1],arr[j]] = [arr[j],arr[j-1]]   
      j--
    }
  }
  return arr
}
