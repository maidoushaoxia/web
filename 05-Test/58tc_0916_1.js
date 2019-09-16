/*
 * @Author: shaoyun
 * @Date: 2019-09-16 20:20:31
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-16 20:20:34
 * @Description: 优雅的“无限循环”
 */
function transObj (orignalObj){
  // 请在这里写出你的答案,你也可以增加函数的接收的参数，但是不要修改while里的代码
  var res = {}
  for (let key in orignalObj) {
    if (orignalObj.hasOwnProperty(key)) {
      if (orignalObj[key] instanceof Object) {
        res['name'] += '-'
        res[key] = (orignalObj && typeof orignalObj[key] === 'object') ? orignalObj(orignalObj[key]) : orignalObj[key]
      }
    }
  }
  return res;
}

while(line = readline()){
  const orignalObj = JSON.parse(line);
  print(JSON.stringify(transObj(orignalObj)));
}

