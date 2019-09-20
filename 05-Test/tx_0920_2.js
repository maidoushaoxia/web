/*
 * @Author: shaoyun
 * @Date: 2019-09-20 20:09:06
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-20 20:09:08
 * @Description: 合法的日期
 */
while(line=readline()){
  var time = line.split(' ')
  var year = Number(time[0])
  var month = Number(time[1])
  var day = Number(time[2])
  var monthArr = [31,28,31,30,31,30,31,31,30,31,30,31]
  var isLeapYear = false
  // 闰年的情况
  if (((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) || (year % 3200 === 0 && year % 172800 === 0)) && year !== 3200) {
    isLeapYear = true
    monthArr = [31,29,31,30,31,30,31,31,30,31,30,31]
    // 不合法的日期
    //首先判断是否为2月
    if (month === 2 && day > 29) {
      month = 3
      day = day - 29
    } else if (day > monthArr[month - 1]) {
      month += 1
      day = 1
    }
  }
  
  // 不是闰年
  if (!isLeapYear || year === 3200) {
    if (month === 2 && day > 28) {
      month = 3
      day = day - 28
    } else if (day > monthArr[month - 1]) {
      month += 1
      day = 1
    }
  }

  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  print(year + '-' + month + '-' + day)
}



function fn(line){
  var time = line.split(' ')
  var year = Number(time[0])
  var month = Number(time[1])
  var day = Number(time[2])
  var monthArr = [31,28,31,30,31,30,31,31,30,31,30,31]
  var isLeapYear = false
  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) || (year % 3200 === 0 && year % 172800 === 0)) {
    isLeapYear = true
    monthArr = [31,29,31,30,31,30,31,31,30,31,30,31]
    if (month === 2 && day > 29) {
      month = 3
      day = day - 29
    } else if (day > monthArr[month - 1]) {
      month += 1
      day = 1
    }
  }

  if (!isLeapYear) {
    if (month === 2 && day > 28) {
      month = 3
      day = day - 28
    } else if (day > monthArr[month - 1]) {
      month += 1
      day = 1
    }
  }

  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return year + '-' + month + '-' + day
}
fn('2019 6 31')
