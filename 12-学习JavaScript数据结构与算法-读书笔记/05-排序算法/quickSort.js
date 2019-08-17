/*
 * @Author: shaoyun
 * @Date: 2019-08-17 10:58:11
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-17 17:03:05
 * @Description: 快速排序的算法
 * 从数组中选择一个基准，创建左指针和右指针。
 * 移动左指针，直到找到一个比基准大的；然后移动右指针，直到找到一个比基准小的；然后交换他们，并移动左右指针，直到左指针超过了右指针，则停止执行，返回左指针的索引。
 * 通过返回的左指针索引将数组划分为两部分，分别进行递归。
 */

/**
 * @description: 复杂度为O(nlog(n))
 * @param {arr[]} 
 * @return: 
 */

function quickSort(arr, left, right) {
  if (arr.length > 1) {
    // index为划分函数所返回的左指针的索引
    let index = partiton(arr, left, right)
    // 若子数组存在较小值，则递归
    if (left < index) {
      quickSort(arr, left, index - 1)
    }
    // 若子数组存在较大值，则递归
    if (index < right) {
      quickSort(arr, index, right)
    }
  }
  return arr
}

/**
 * @description: 划分函數
 * @param {type} 
 * @return: 
 */
function partiton(arr, left, right) {
  // 选取一个基准
  const pivot = arr[parseInt((left + right) / 2)]
  let i = left
  let j = right
  // 两个指针没有相遇，则进行划分操作
  while (i <= j) {
    // 找到一个大于等于基准的数时，左指针停止
    while (arr[i] < pivo) {
      i++
    }
    // 找到一个小于等于基准的数时，右指针停止
    while (arr[j] > pivot) {
      j++
    }
    // 如果最终左指针没有超过右指针（即左边元素大），则交换两个元素
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  // 返回左指针的索引，用于下一次划分子数组
  return i
}
