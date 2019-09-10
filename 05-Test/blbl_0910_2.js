/*
 * @Author: shaoyun
 * @Date: 2019-09-10 20:00:01
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-10 20:07:36
 * @Description: 计算一年中的第几天
 */
while(line=readline()){
  var time = line.split('-')
  var year = time[0] - 0
  var month = time[1]
  var day = time[2]
  var res = 0
  if (month[0] === '0') {
    month = month[1] - 0
  }
  if (day[0] === '0') {
    day = day[1] - 0
  }
  if (month === 1) {
    console.log(day)
  } else {
    var days= (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? [31,29,31,30,31,30,31,31,30,31,30,31] : [31,28,31,30,31,30,31,31,30,31,30,31]
    for (let i=0;i<month-1;i++) {
      res+= days[i] + day
    }
  }
  console.log(res)
}
