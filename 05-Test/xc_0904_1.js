/*
 * @Author: shaoyun
 * @Date: 2019-09-04 19:42:27
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-05 20:45:50
 * @Description: 两个字符串的最长公共子串，不区分大小写
 */
function longestSubStrLength(s1, s2) {
  if (s1 === '' || s2 === '') {
    return 0
  }
  s1 = s1.toLowerCase()
  s2 = s2.toLowerCase()
  
  // 若s1长，则两个字符串交换，保证s2永远是最长的那一个
  if (s1.length > s2.length) {
    var temp = s1
    s1 = s2
    s2 = temp
  }
  var len1 = s1.length
  var len2 = s2.length
  for (var i = len1; i > 0; i--) {
    for (var j = 0; j < len2 - j; j++) {
      // 拿较短的字符串取其子串
      var str = s1.substr(j, i);
      if (s2.indexOf(str) > -1) {
        // 如果s2中有s1，则直接返回；否则继续取s1的子串
        return str.length;
      }
    }
  }
  return 0
}
/******************************结束写代码******************************/


var res; 
  
var _s1 = read_line();
var _s2 = read_line();

res = longestSubStrLength(_s1, _s2);
print(res);
