## Ajax知识 ##
1. vue中没有Ajax方法，一般用$axios库。

2. get请求
    ```JavaScript
    getData () {
      // '请求地址' + '?请求参数名=' + '请求参数值'，接口要与后端联调
      this.$axios.get(slws.sf.yssf.getYssf + '?=ajvh' + (widow.ajbh || '001')).then(response => {
        if(response.data.success) {
          //
        }else {
          //
        }
      })
    }
    ```

3. post请求
    ```JavaScript
    postData () {
      this.$axios.post(slws.sf.yssf.getYssf,{
        // 要上传的数据，如：
        id：'1',
      }).then(response => {
        if(response.data.success) {
          //
        }else {
          //
        }
      })
    }
    ```
