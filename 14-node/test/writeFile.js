'use strict'

var fs = require('fs')

// 异步写文件
var data = '我写到文件里去了'
fs.writeFile('writeFile.txt', data, error => {
    if (error) {
        console.log(error)
    } else {
        console.log('ok')
    }
})

// 同步写文件
var syncData = '我是同步写的文件'

fs.writeFileSync('writeFile.txt', syncData)