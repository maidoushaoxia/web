/*
 * @Author: shaoyun
 * @Date: 2019-09-16 20:46:26
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-17 09:18:46
 * @Description: 人浪
 */
function wave(w){
  //请按照要求写出你的答案
  var res = []
  if (w.length === 0) return w.toUpperCase()
  for (let i = 0;i < w.length;i++) {
    let temp = w
    temp = temp.substring(0,i) + temp[i].toUpperCase() + temp.substring(i + 1)
    res.push(temp)
  }
 return res;
}
while(line = readline()){
  var w = line;
  print(JSON.stringify(wave(w)));
}
