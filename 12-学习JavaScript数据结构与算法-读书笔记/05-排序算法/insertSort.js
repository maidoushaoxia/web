/*
 * @Author: shaoyun
 * @Date: 2019-08-15 20:29:55
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-15 22:04:19
 * @Description: 
 */
/**
 * @description: 插入排序的算法，每次排一项。复杂度为O(n^2)
 * @param {arr[]} 
 * @return: 
 */
function insertSort (arr) {
  let temp
  for (let i = 1;i<arr.length;i++) {
    let j = i
    temp = arr[i] // 保存这个要比较的值
    while (j>0 && arr[j-1] > temp) {
      // 若前一个数比要比较的数大，则将前一个数换到后面，直到j为0
      arr[j] = arr[j-1]
      j--
    }
    // 全部比较好后，将最后一次换位置的数赋值为要比较的数
    arr[j] = temp
  }
  return arr
}
