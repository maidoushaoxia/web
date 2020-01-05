'use strict'
var http = require('http')
var url = require('url')

// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'))

// function start(route, handle) {
//     http.createServer((request, response) => {
//         var pathname = url.parse(request.url).pathname
//         console.log("Request for " + pathname + " received.")

//         route(handle, pathname, response)
        
//         // // 将http响应200写入response，同时设置Content-Type
//         // response.writeHead(200, {'Content-Type': 'text/plain'})
        
//         // // 从route函数获取返回值
//         // var content = route(handle, pathname)
//         // response.write(content)
//         // response.end()
//         // 让服务器监听8888端口
//     }).listen(8888)
// } 

function start(route, handle) {
    http.createServer((request, response) => {
        var pathname = url.parse(request.url).pathname
        console.log("Request for " + pathname + " received.")

        route(handle, pathname, response, request)

        // var postData = ''
        
        // // 设置接收数据的编码格式为UTF-8
        // request.setEncoding('utf8')

        // // 注册data事件的监听器，用于收集每次接收到的新数据块，并将其赋值给postData
        // request.addListener('data', postDataChunk => {
        //     postData += postDataChunk
        //     console.log('Received POST data chunk' + postDataChunk + '.')
        // })

        // // 确保当所有数据接收完毕之后才触发路由请求，且值触发一次，同时将POST数据传递给请求路由
        // request.addListener('end', () => {
        //     route(handle, pathname, response, postData)
        // })
    }

    ).listen(8888)
}

console.log('Server is running at http://127.0.0.1:8888/')
console.log('Server has started')

module.exports.start = start