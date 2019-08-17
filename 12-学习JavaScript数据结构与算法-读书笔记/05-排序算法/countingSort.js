/*
 * @Author: shaoyun
 * @Date: 2019-08-17 17:10:05
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-17 21:40:45
 * @Description: 计数排序的算法
 * 首先找到最大值k，然后申请一个额外空间，声明大小为k+1的临时数组counts（该数组所有项的初始值都是undefined）
 * 然后迭代数组，并在counts数组中计数
 * 借着迭代counts数组，并构建排好序的数组
 */
/**
 * @description: 复杂度为O(n+k)
 * @param {arr[]} 
 * @return: 
 */
function countingSort (arr) {
  // 找到数组的最大值
  const maxValue = findMaxValue(arr)
  // 申请计数数组
  let counts = new Array(maxValue + 1)
  // 迭代数组
  arr.forEach(item => {
    // 如果计数数组中没有这个项，则置为0
    if (!counts[item]) {
      counts[item] = 0
    }
    // 否则递增计数
    counts[item]++
  })

  // 迭代计数数组
  let sortIndex = 0
  counts.forEach((item, index) => {
    // 如果计数数组中的项（就是次数）不为0，则说明是原数组中出现的项
    while (item > 0) {
      // 将计数数组对应的索引值赋值给数组
      arr[sortIndex] = index
      // 排序索引值递增
      sortIndex++
      // 为了排序重复值，次数要递减
      item--
    }
  })
  return arr

}

/**
 * @description: 寻找数组的最大值
 * @param {type} 
 * @return: 
 */
function findMaxValue (arr) {
  let max = arr[0]
  arr.forEach(item => {
    if (item > max) {
      max = item
    }
  })
  return max
}
