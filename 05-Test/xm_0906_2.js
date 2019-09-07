/*
 * @Author: shaoyun
 * @Date: 2019-09-06 19:59:48
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-06 19:59:50
 * @Description: 
 */
function solution(prices, budget) {
  var pricesArr = prices.sort(function(a, b) {
    return b - a
  })
  var count = 0
  for (var i = 0;i < pricesArr.length;i++) {
    if (parseInt(budget / pricesArr[i]) === 0) {
      budget += pricesArr[i - 1]
      count -- 
    }
    count += parseInt(budget / pricesArr[i])
    budget = budget % pricesArr[i]
    if (budget <= 0) {
      break
    }
  }

  if (count > 0) {
    return count
  } else {
    return -1
  }

}
/******************************结束写代码******************************/


var res; 
  
var _prices_size = parseInt(read_line());
    
var _prices = new Array();
var _prices_item;
for(var _prices_i = 0; _prices_i < _prices_size; _prices_i++) {
    var _prices_item = parseInt(read_line());
    _prices.push(_prices_item);
}
var _budget = parseInt(read_line());
res = solution(_prices, _budget);
print(res);
