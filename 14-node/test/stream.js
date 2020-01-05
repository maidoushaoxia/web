'use strict'

var fs = require('fs')

// 打开流
var rs = fs.createReadStream('sample.txt', 'utf-8')

rs.on('data', chunk => {
    console.log('DATA:')
    console.log(chunk)
})

rs.on('end', () => {
    console.log('END')
})

rs.on('error', (error) => {
    console.log('ERROR: ' + error)
})