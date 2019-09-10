/*
 * @Author: shaoyun
 * @Date: 2019-09-10 19:29:13
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-10 19:57:56
 * @Description: 复数乘法
 */
var s1 = readline()
var s2 = readline()
var real1 = parseInt(s1.split('+')[0])
var imag1 = parseInt(s1.split('+')[1].split('i')[0])
if (imag1 !== imag1) {
  imag1 = 1
}
var real2 = parseInt(s2.split('+')[0])
var imag2 = parseInt(s2.split('+')[1].split('i')[0])
if (imag2 !== imag2) {
  imag2 = 1
}
let resReal = real1 * real2 - imag1 * imag2
let resImag = real1 * imag2 + real2 * imag1
console.log(resReal + '+' + resImag + 'i')


