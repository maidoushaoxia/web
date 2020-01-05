// 创建子进程
// var exec = require('child_process').exec

// var queryString = require('querystring')
var fs = require('fs')
var formidable = require('formidable')

function start(response) {
    console.log("Request handler 'start' was called.")

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        // 生成带文本区的表单
        // '<textarea name="text" rows="20" cols="60"></textarea>' +
        // 生成上传按钮
        '<input type="file" name="upload" multiple="multiple" />' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>'

        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(body)
        response.end()

    // exec是非阻塞操作
    // var content = 'empty'
    // exec('ls', (error, stdout, stderr) => {
    //     // content = stdout
    //     response.writeHead(200, {'Content-Type': 'text/plain'})
    //     response.write(stdout)
    //     response.end()
    // })
    // return content

    // 模拟sleep函数来模拟阻塞操作
    // function sleep(time) {
    //     var startTime = new Date().getTime()
    //     while (new Date().getTime() < startTime + time) {}
    // }

    // sleep(10000)
    // return 'Hello start'
}

// // 提交表单
// function upload(response, postData) {
//     console.log("Request handler 'upload' was called.")
//     response.writeHead(200, {'Content-Type': 'text/plain'})
//     response.write("You've sent: " + queryString.parse(postData).text)
//     response.end()
//     // return 'Hello upload'
// }

// 上传文件
function upload(response, request) {
    console.log("Request handler 'upload' was called.")

    var form = new formidable.IncomingForm()
    console.log('about to parse')
    form.parse(request, (error, fields, files) => {
        console.log('parse done')
        console.log(files.upload.path)
        // 同步操作需要try catch
        try {
            // 对上传的文件重命名
            fs.renameSync(files.upload.path, '/tmp/test.png')
        } catch (error){
            console.log(error)
        }
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('received image:<br/>')
        response.write("<img src='/show' />")
        response.end()
    })
}

function show(response) {
    console.log('Request handle "show" was called.')
    fs.readFile('/tmp/test.png', 'binary', (error, file) => {
        if (error) {
            response.writeHead(500, {'Content-Type': 'text/plain'})
            response.write(error + '\n')
            response.end()
        } else {
            response.writeHead(200, {'Content-Type': 'image/png'})
            response.write(file, 'binary')
            response.end()
        }
    })
}

module.exports = {
    start: start,
    upload: upload,
    show: show
}