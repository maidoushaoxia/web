/*
 * @Author: shaoyun
 * @Date: 2019-09-16 20:34:36
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-16 20:45:45
 * @Description: 找中位数
 */
function getMidNum(numArr1, numArr2){
  //请按照要求写出你的答案
  var arr = numArr1.concat(numArr2)
  arr.sort((a, b) => (a - b))
  var len = arr.length
  if (len % 2 === 0) {
    res = ((arr[len / 2 - 1] + arr[len / 2]) / 2).toFixed(1)
  } else {
    res = arr[(len - 1) / 2].toFixed(1)
  }
  return res;
}
while(line = readline()){
  const numArr1 = JSON.parse(line);
  const numArr2 = JSON.parse(readline());
  print(getMidNum(numArr1, numArr2));
}
