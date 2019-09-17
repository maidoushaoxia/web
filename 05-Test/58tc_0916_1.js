/*
 * @Author: shaoyun
 * @Date: 2019-09-16 20:20:31
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-17 09:18:27
 * @Description: 优雅的“无限循环”
 */
function transObj (orignalObj){
  // 请在这里写出你的答案,你也可以增加函数的接收的参数，但是不要修改while里的代码
  var res={};
  for(var item in orignalObj){
    if(item=="name"){
      var str='';
      for(var i=0;i<count;i++){
            str="-"+str;
      }
      res[item]=str+orignalObj[item]
      count++;
    }else if(orignalObj[item] instanceof Object){
      res[item]=transObj(orignalObj[item])
    }else{
      res[item]=orignalObj[item]
    }
  }
  return res;
}
while(line = readline()){
  const orignalObj = JSON.parse(line);
  print(JSON.stringify(transObj(orignalObj)));
}

