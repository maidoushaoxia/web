/*
 * @Author: shaoyun
 * @Date: 2019-09-06 18:47:37
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-06 20:28:38
 * @Description: 中序遍历打印二叉树
 */
function solution(input) {
  var str = ''
  var arr = []
  var pre = ''
  for (var i = 0;i < input.length;i++) {
    if (input[i] === ',') {
      if (pre === '(' || pre === ')') {
        if (arr.length > 0) {
          str += arr.pop()
        }
      } else {
        if (arr.length > 0) {
          str += arr.pop()
        }
      }
    } else {
      if (input[i] >= '0' && input[i] <= '9') {
        arr.push(input[i])
      }
    }
    pre = input[i]
  }0
  while (arr.length > 0) {
    str += arr.pop()
  }
  return str
}
/******************************结束写代码******************************/

var arr; 
  
var _input = read_line();

arr = solution(_input);
print(arr);
