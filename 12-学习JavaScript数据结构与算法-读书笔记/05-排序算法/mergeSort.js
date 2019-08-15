/*
 * @Author: shaoyun
 * @Date: 2019-08-15 20:50:02
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-15 22:03:37
 * @Description: 
 */
/**
 * @description: 归并排序的算法，分而治之思想。将数组切分为只有一项的数组，然后再合并。复杂度为O(nlog(n))
 * @param {arr[]} 
 * @return:      
 */
function mergeSort (arr) {
  let len = arr.length
  if (len === 1) {
    return arr
  }
  // 数组长度大于1，就进行切分，递归操作
  let middle = Math.floor(len/2)
  let left = mergeSort(arr.slice(0,middle))
  let right = mergeSort(arr.slice(middle,len))
  // 将原始数组切分至只有一个元素时，进行合并
  return merge(left,right)

  /**
   * @description: 合并数组并排序的函数
   * @param {arr[]} left
   * @param {arr[]} right
   * @return: 
   */
  function merge(left,right) {
    let [i,j] = [0,0]
    let sortArr = []
    while (i < left.length && j < right.length) {
      // 如果左边数组项小，就将其放到结果数组中，同时指针指向下一个数
      if (left[i] < right[j]) {
        sortArr.push(left[i])
        i++
      } else {
        // 否则将右边数组的项放到结果数组中，同时指针指向下一个数
        sortArr.push(right[j])
        j++
      }
    }
    // 有剩余时（即一边剩下的数都比另一边大），将剩余项全部添加到数组中
    sortArr = sortArr.concat(left.slice(i,left.length))
    sortArr = sortArr.concat(right.slice(j,right.length))
    return sortArr
  }
}
