<!--
 * @Author: shaoyun
 * @Date: 2019-08-12 17:16:26
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-14 17:33:27
 * @Description: 
 -->
## vue-cli初始化项目
  ```javascript
  vue init webpack 项目名
  ```

##  配置入口文件
  - 单页面：可以不用配置

  - 多页面： 
    - 修改目录
    ![image.png](https://upload-images.jianshu.io/upload_images/19196426-65188a4b4c39a67e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    - build目录下的webpack.base.conf.js文件，配置entry
    ![image.png](https://upload-images.jianshu.io/upload_images/19196426-8c2a37ed204c82db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    - build目录下的webpack.dev.conf.js文件
    ![image.png](https://upload-images.jianshu.io/upload_images/19196426-8ffcf8771fb38a9e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    - build目录下的webpack.prod.conf.js文件
    ![image.png](https://upload-images.jianshu.io/upload_images/19196426-3fe32eb6d0bd67b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    - config目录下的index.js文件
    ![image.png](https://upload-images.jianshu.io/upload_images/19196426-77e1428015dfc419.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 配置less
  安装好less还得安装less-loader，否则引入时会报错
  @符号可以用来配置绝对路径

## 打印日志
  ```javascript
  /**
   * @description: 打印请求数据的日志
   * @param {showLog,name,method,url,requestData} {是否输出日志，名称，请求方式，请求的url，请求的数据} 
   * @return: null
   */
  export function consoleLogRequest (showLog,name,method,url,requestData) {
    if (showLog) {
      console.log(name || '')
      console.log('[[前台]] ==> 请求方式是')
      console.log(method || '')
      console.log('[[前台]] ==> 请求的url是')
      console.log(url || '')
      console.log('[[前台]] ==> 请求的数据是')
      console.log(requestData || '')
    }
  }

  /**
   * @description: 打印响应数据的日志
   * @param {showLog,name,responseData} {是否打印日志，名称，后端返回的数据} 
   * @return: null
   */
  export function consoleLogResponse (showLog, name, responseData) {
    if (showLog) {
      console.log(name || '')
      console.log('[[后台]] ==> 返回的数据是')
      console.log(responseData || '')
    }
  }

  /**
   * @description: 请求数据错误
   * @param {data} {请求数据}
   * @return: null
   */
  export function requestError (data) {
    try {
      console.error('请求数据发生了错误')
      console.error(data)
    } catch (e) {
      console.log(e)
    }
  }
```

## 封装axios
  ```javascript
  import axios from 'axios'
  import Vue from 'vue'
  import {consoleLogRequest, consoleLogResponse, requstError} from '@commom/js/global'

  // 创建一个axios实例
  const instance = axios.create()
  instance.defaults.headers['Last-Modified'] = new Date().getTime()
  // 允许跨域携带cookie信息
  instance.defaults.withCredentials = true
  // 重新请求的次数
  instance.defaults.retry = 4
  // 重新请求的延时
  instance.defaults.retryDelay = 1000
  // 请求的截止时间
  instance.defaults.timeout = 5000

  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 发送请求前做些什么
    consoleLogRequest(true, config.name, config.method, config.url, config.data)
    return config
  }, function (error) {
    // 请求错误做些什么
    return Promise.reject(error)
  })

  // 添加响应拦截器
  instance.interceptors.response.use(function (response) {
    // 对响应数据做些什么
    consoleLogResponse(true, response.config.name, response.data)
    return response
  }, function (error) {
    // 对响应错误做些什么
    return Promise.reject(error)
  })

  // 配置请求方法
  const ajaxMethod = ['get', 'post']
  const api = {}
  ajaxMethod.forEach((method) => {
    api[method] = function (url, data, config) {
      return new Promise(function (resolve, reject) {
        // IE是强缓存，为了兼容IE，给get请求加时间戳
        if (method === 'get') {
          url = url.indexOf('?') > -1 ? url + '&time=' + Date.now() : '&time=' + Date.now() 
        }
        instance[method](url, data, config).then((response) => {
          if (typeof (response.data) === 'string') {
            response.data = JSON.parse(response.data)
          }
          // 下面是后端返回数据里定义的状态码
          // if (response.data.code === 500) {
          //   // 接口报500处理
          // } else if (response.data.code === 400) {
          //   // 请求参数错误
          // } else if (response.data.code === 401) {
          //   // 登录信息失效
          // } else if (response.data.code === 200 || response.data.success) {
          //   resolve(response)
          // }
        }).catch(function (error) {
          // 请求已发出，但服务器响应的状态码不在 2xx范围内
          console.log(error)
        })
      })
    }
  })

  Vue.prototype.$axios = api
  ```

## 配置路由
  ```javascript
  import Vue from 'vue'
  import Router from 'vue-router'
  import pageSpcl from '@components/pageSpcl'

  Vue.use(Router)

  export default new Router({
    routes:[
      {
        path: '/',
        redirect: '/spcl'
      },
      {
        path: '/spcl',
        name: 'spcl',
        component: pageSpcl
      }
    ]
  })
  ```

## 任意组件之间传参
  实例化一个Vue，用这个作为eventBus，需要触发事件时用`$emit`，接收事件用`$on`。
  如果需要触发多种事件，无需再次实例化，只要emit事件不一样即可。

## 获取url里参数的值
  ```javascript
  function getQueryString (name, url) {
    // 以字符串首位或&开头，中间是name=xxx，xxx是除&以外的任何字符串([^]为匹配不含在括号内的字符)，也可以为空串，最后以&或字符串末位结尾
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    // 截取url?后的内容
    url = window.location.search
    // substring表示跳过？的查询，这样可以获取到第一个参数的值，否则就获取不到了
    let result = url.substring(1).match(reg)
    if (result) {
      // 为了兼容IE，需要进行解码
      return decodeURIComponent(result[2])
    } else {
      return null
    }
  }
  ```

## 设置页面的rem
  - rem：当前页面中元素的rem单位的样式值都是针对于HTML元素的font-size的值进行动态计算的。

  - em：表示相对于父元素的字体的倍数。

  ```javascript
  function setRem (dom, options) {
    let defaultOptions = {
      fontSize: 18, // 默认设计图的body字体大小
      visualWidth: 1920, // 默认设计图的宽度
      visualHeight: 943, // 默认设计图的高度
      minWidth: 1366, // 默认最小宽度
      minHeight: 768 // 默认最小高度
    }
    let _opts = Object.assign(defaultOptions, options)
    let _scope = {
      // 设置字体大小
      setRemSize: function () {
        // window.innerHeight用户来获取冲口的高度，不包含滚动条和工具栏，IE8不兼容
        let clientHeight = Math.max(window.innerHeight, _opts.minHeight)
        let clientWidth = Math.max(window.innerWidth, _opts.minWidth)
        let remSize = Math.max(clientWidth * _opts.fontSize / _opts.visualWidth, clientHeight * _opts.fontSize / _opts.visualHeight)
        dom.style.fontSize = remSize + 'px'
      },
      // 绑定事件
      bindEvent: function () {
        window.addEventListener('resize', _scope.setRemSize, false)
      },
      // 解除绑定
      unbindEvent: function () {
        window.removeEventListener('resize', _scope.setRemSize, false)
      },
      // 初始化函数
      init: function () {
        _scope.setRemSize()
        _scope.bindEvent()
      }
    }
    // 立即执行初始化函数
    _scope.init()
  }
  ```
