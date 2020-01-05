'use strict'

var fs = require('fs')

// 异步读文本文件
fs.readFile('sample.txt','utf-8', (error, data) => {
	if (error) {
		console.log(error)
	} else {
		console.log(data)
	}
})

// 异步读二进制文件
fs.readFile('icon-warn.gif', (err, data) => {
	if (err) {
		console.log(err)
	} else {
		console.log(data)
		console.log(data.length + 'bytes')
	}
})

// 同步读文本文件
try {
	var data = fs.readFileSync('sample.txt','utf-8')
	console.log(data)
} catch (error) {
	console.log(error)
}

