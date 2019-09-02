/*
 * @Author: shaoyun
 * @Date: 2019-09-01 16:10:36
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-02 14:57:38
 * @Description: 常见手撕代码题
 */
/**
 * @description: 解析URL为对象
 * @param {String} url 
 * @return {Object}
 */
function parseParam(url) {
  let str = url.split('?')[1]
  let arr = str.split('&')
  let obj = {}
  arr.forEach(item => {
    let key = decodeURIComponent(item.split('=')[0])
    let value = decodeURIComponent(item.split('=')[1])
    obj[key] = value
  })
  return obj
}

/**
 * @description: 连字符驼峰命名
 * @param {String} 
 * @return {String}
 */
function toHump(str) {
  return str.replace(/-\w/g, function(letter) {
    return letter.substring(1).toUpperCase()
  })
}

/**
 * @description: 驼峰转连字符命名
 * @param {String} str
 * @return {String} 
 */
function toLine(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

/**
 * @description: 查找字符串中出现最多的字符和个数
 * @param {String} 
 * @return {Object}
 */
function maxChar(str) {
  let obj = {}
  for (let i = 0;i <str.length;i++) {
    let char = str.charAt(i)
    if (obj[char]) {
      obj[char] ++
    } else {
      obj[char] = 1
    }
  }
  
  let count = 0
  let res = ''
  for(let item in obj) {
    if (count < obj[item]) {
      count = obj[item]
      res = item
    }
  }
  console.log('出现最多的字符为：' + res + '，出现次数为：' + count)
}


/**
 * @description: 数组扁平化
 * @param {Array} arr 
 * @return {Array}
 */
function flatArr(arr) {
  return arr.reduce((res, item) =>
    res.concat(Array.isArray(item) ? flatArr(item) : item), []) // []为初始值
}

/**
 * @description: 数组去重
 * @param {Array} 
 * @return {Array}
 */
function uniqueArr(arr) {
  let res = []
  let flag = true
  for (let i = 0;i < arr.length;i++) {
    if (res.indexOf(arr[i]) === -1) {
      if (arr[i] !== arr[i]) {
        if (flag) {
          res.push(arr[i])
          flag = false
        }
      } else {
        res.push(arr[i])
      }
    }
  }
  return res
}

/**
 * @description: 实现深拷贝
 * @param {Object} obj
 * @return {Object}
 */
function deepClone (obj) {
  let cloneObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj && typeof obj[key] === 'object') {
        cloneObj[key] = deepClone(obj[key])
      } else {
        cloneObj[key] = obj[key]
      }
    }
  }
  return cloneObj
}
