// 导入show函数
// const show = require('./show.js')
// 导入CSS文件
// require('./main.css')

// show('webpack')

import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
    // 这是Vue.js里的createElement函数，作用是生成一个VNode节点，
    // render函数得到这个VNode节点之后，返回个Vue.js的mount函数，渲染成真实DOM节点，并挂在根节点上。
})