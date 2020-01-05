var formidable = require('formidable')
var http = require('http')
var util = require('util')

http.createServer((request, response) => {
    if (request.url === '/upload' && request.method.toLowerCase() === 'post') {
        var form = new formidable.IncomingForm()
        form.parse(request, (error, fields, files) => {
            response.writeHead(200, {'Content-Type': 'text/plain'})
            response.write('received upload: \n\n')
            // 将对象转为字符串
            response.end(util.inspect({fields: fields, files: files}))
        })
        return
    }

    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title"><br>' +
        '<input type="file" name="upload" multiple="multiple"><br>' +
        '<input type="submit" value="Upload">' +
        '</form>'
    )
}).listen(8000)