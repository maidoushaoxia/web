/*
 * @Author: shaoyun
 * @Date: 2019-09-22 17:10:50
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-22 17:29:39
 * @Description: 报数
 */
function solution(n, m) {
  var arr=[]
  for(let i = 1;i <= n;i++){
    arr.push(i)
  }
  var res = [],num = 0
  while(arr.length >= 1){
    var len = arr.length
    var count = 0
    for(let j = 0;j < len;j++){
      num ++
      if(num == m){
        num=0
        res.push(arr[j - count]);
        arr.splice(j - count, 1)
        count ++
      }
    }
  }
  return res.join(" ")
}

while (line = readline()) {
  var params = line.split(" ");
  var n = params[0];
  var m = params[1];
  print(solution(n, m));
}
