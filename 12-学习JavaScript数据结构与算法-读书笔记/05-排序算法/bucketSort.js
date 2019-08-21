/*
 * @Author: shaoyun
 * @Date: 2019-08-17 20:36:27
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-21 21:50:16
 * @Description: 桶排序的算法
 * 首先找出数组的最小值和最大值，并计算桶的数量
 * 然后将数组中的元素放到各个桶中
 * 再分别对每个桶进行排序
 * 最后把排好序的桶中的元素依次放到空数组中，这个数组就是排序完成的数组
 */
/**
 * @description: 复杂度为O(n+k)
 * @param {arr[]} 
 * @param {number} bucketSize // 每个桶的区间
 * @return: 
 */
function bucketSort (arr, bucketSize) {
  // 找到最小值和最大值
  let minValue = arr[0]
  let maxValue = arr[0]
  arr.forEach(item => {
    if (item < minValue) {
      minValue = item
    }else if (item > maxValue) {
      maxValue = item
    }
  })

  // 桶的数量
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize + 1)
  // 二维数组，每一项都代表一个桶
  let buckets = []
  // 初始化每个桶
  for (let i = 0;i < bucketCount;i++) {
    buckets[i] = []
  }
  // 将数组中的项放到对应的桶中
  for (let i = 0;i < arr.length;i++) {
    let index = Math.floor((arr[i] - minValue) / bucketSize)
    buckets[index].push(arr[i])
  }
  return buckets
}

/**
 * @description: 对每个桶单独排序
 * @param {arr[[]]} buckets
 * @return: 
 */
function sortBuckets (buckets) {
  debugger
  let sortArr = []
  for (let i = 0;i < buckets.length;i++) {
    // 如果桶不为空，则对其进行插入排序
    if (buckets[i] !== null) {
      insertSort(buckets[i])
    }
    // 将排好序的桶放入排序数组中
    sortArr.push(...buckets[i]) // ...arr可以将数组展开，这样就把数组中的项传进去了。否则push的还是数组
  }
  return sortArr
}

/**
 * @description: 插入排序
 * @param {arr[]} 
 * @return: 
 */
function insertSort (arr) {
  for (let i = 1;i < arr.length;i++) {
    let j = i
    while (j > 0 && arr[j-1] > arr[j]) {
      [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
      j--
    }
  }
  return arr
}
