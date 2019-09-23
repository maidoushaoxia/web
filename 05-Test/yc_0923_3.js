/*
 * @Author: shaoyun
 * @Date: 2019-09-23 19:17:28
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-23 20:04:04
 * @Description: 验证邮箱
 */
var str = readline()
print(isEmail(str))

function isEmail(str){
  if(str === null) return
  var reg = new RegExp(/^[a-z]([a-zA-Z0-9_]{5,20})@([a-z0-9]{1,10})([.]{1})([a-z]{2,4})$/)
  return reg.test(str)
}
