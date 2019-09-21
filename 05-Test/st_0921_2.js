/*
 * @Author: shaoyun
 * @Date: 2019-09-21 19:31:24
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-21 19:39:40
 * @Description: 数组扁平化、升序且去重
 */
var arr = JSON.parse(readline())
var res = flatArr(arr).sort((a, b) => (a - b))
print([...new Set(res)])

function flatArr(arr) {
  return arr.reduce((res, item) =>
    res.concat(Array.isArray(item) ? flatArr(item) : item), [])
}
