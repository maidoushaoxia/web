/*
 * @Author: shaoyun
 * @Date: 2019-09-04 19:53:24
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-05 20:40:54
 * @Description: APP版本号比较，从化大到小输出
 */
function sortVersion(s1, s2) {
    var arr1 = s1.split('.')
    var arr2 = s2.split('.')
    // 找长度最大的
    var len = Math.max(arr1.length, arr2.length)
    for (var i = 0;i < len;i++) {
      var char1 = parseInt(arr1[i])
      var char2 = parseInt(arr2[i])
      // 比较每一个字符，如相等则比较下一位
      if (char1 === char2) {
        continue
      }
      // 若char1小，则先输出s1
      if (char1 < char2) {
        return arr1.join('.') + ',' + arr2.join('.')
      } else {
        return arr2.join('.') + ',' + arr1.join('.')
      }
    }
}

var res; 
  
var _s1 = read_line();
var _s2 = read_line();

res = sortVersion(_s1, _s2);
print(res);
