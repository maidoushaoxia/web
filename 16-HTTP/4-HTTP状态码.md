## HTTP状态码

1. **2xx成功**
   - 200 OK
   - 204 No Content：表示服务器接收的请求已成功处理，但在返回的响应报文中不含实体的主体部分。一般是客户端往服务器发送信息，而对客户端不需要发送新内容时使用。
   - 206 Partial Content：服务器执行了客户端的范围请求。
2. **3xx重定向**
   - 301 Moved Permanently：永久性重定向，表示请求的资源已被分配了新的URI，以后都使用现在的URI。
   - 302 Found：临时性重定向，表示请求的资源已被分配了新的URI，本次使用新的URI。
   - 303 See Other：表示请求的资源存在着另一个URI，应使用GET定向获取请求的资源。
   - 304 Not Modified：客户端发送附带条件的请求时，服务器端允许请求访问资源，但没有符合条件。
   - 307 Temporary Redirect：临时重定向，不会将POST变为GET。

3. **4xx客户端错误**
   - 400 BadRequest：表示请求报文中存在语法错误
   - 401 Unauthorized：表示发送的请求需要有通过HTTP认证的认证信息；如果之前已进行过1次请求，表示用户认证失败
   - 403 Forbidden：表示访问被服务器拒绝了
   - 404 Not Found：表示服务器上找不到请求的资源
4. **5xx服务器错误**
   - 500 Internal Server Error：服务器端执行请求时出错
   - 503 Service Unavailable：服务器超负荷或停机维护，无法处理请求