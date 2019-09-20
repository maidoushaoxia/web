/*
 * @Author: shaoyun
 * @Date: 2019-09-20 20:05:44
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-20 21:14:08
 * @Description: 环形遍历二维数组
 */
  function fn (matrix) {
    var res = []
    var row = matrix.length
    var col = matrix[0].length
    if(row === 0 || col === 0) return res
    var left = 0
    var top = 0
    var right = col - 1
    var bottom = row - 1
    while(left <= right && top <= bottom){
      for(let i = left;i <= right;i++) {
        res.push(matrix[top][i])
      }
      for(let i = top + 1;i <= bottom;i++) {
        res.push(matrix[i][right]) 
      }
      if(top !== bottom) {
        for(let i = right-1;i >= left;i--) {
          res.push(matrix[bottom][i])
        }
      }
      if(left !== right) {
        for(let i = bottom - 1;i > top;i--) {
          res.push(matrix[i][left])
        }
      }
      left++
      top++
      right--
      bottom--
    }
    return res.join(",")
  }
  var matrix = JSON.parse(readline())
  print(fn(matrix))
  fn([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])
