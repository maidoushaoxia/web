/*
 * @Author: shaoyun
 * @Date: 2019-08-28 19:42:04
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-28 20:06:56
 * @Description: 实现深拷贝
 */
/**
 * @description: 采用递归
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
  let objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    // in方法会将原型链的属性也继承
    for (let key in obj) {
      // hasOwnProperty只检测自有属性
      if (obj.hasOwnProperty(key)) {
        // 如果属性是对象，则递归调用
        if(obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key])
        } else {
          // 如果不是对象，则直接复制
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}
