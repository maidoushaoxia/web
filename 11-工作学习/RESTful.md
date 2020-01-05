

## RESTful

### 概念

1. 定义

   API设计规范，用于Web数据接口设计。

2. 解释

   用URL定位资源，用HTTP动词描述操作。

### URL设计

1. 动宾结构：

   - 动词：HTTP动词，对应CURD操作
     - GET
     - POST
     - PUT（更新）
     - PATCH（部分更新）
     - DELETE

   - 宾语：API的URL，是HTTP动词作用的对象，必须是名词，一般用复数。

2. 避免多级URL：除第一级，其他级别都用查询字符串表达

   - GET /authors/12?categories=2
   - GET /articles?published=true

### 状态码

1. 2xx状态码
   - GET：200 OK
   - POST：201 Created（生成了新的资源）
   - PUT：200 OK
   - PATCH：200 OK
   - DELETE：204 No Content（资源已经不存在）

2. 4xx状态码
   - 400 Bad Request：服务器不理解客户端请求，未做任何处理
   - 401 Unauthorized： 未通过身份验证
   - 403 Forbidden：通过了身份验证，但不具备权限
   - 404 Not Found：所请求的资源不存在
   - 405 Method Not Allowed：HTTP方法不对

3. 5xx状态码
   - 500 Internal Server Error：客户端请求有效，服务器处理时出现错误
   - 503 Service Unavailable：服务器无法处理请求

### 服务器回应

1. 不要返回纯文本，而应该是一个JSON对象
   - 服务器回应的HTTP头的Content-Type属性为application/json
   - 客户端请求的HTTP头的ACCEPT属性也要设成application/json，用来告诉服务器，可以接受JSON格式

2. 发生错误时不要返回200：应该用状态码反映发生的错误，具体的错误信息放在数据体里返回。