// 导入show函数
// const show = require('./show.js')
// 导入CSS文件
// require('./main.css')

import { cube } from './math'

const value = cube(5)
// const _ = require('lodash')

// console.log(_.join(['main ', 'module ', 'loaded'], ''))

// show('webpack ' + value)

function component() {
    var element = document.createElement('div')
    var button = document.createElement('button')
    button.onclick = e => import(/* webpackChunkName: "show" */'./show').then(show => { // 注释是指定bundle的命名
        show.default('webpack ' + value)
    })

    element.appendChild(button)

    return element
}

document.body.appendChild(component())

// import(/* webpackChunkName: "show" */'./show').then(show => { // 注释是指定bundle的命名
//     show.default('webpack ' + value)
// })

if (process.env.NODE_ENV !== 'production') {
    console.log('in development mode')
}


// import Vue from 'vue'
// import App from './App.vue'

// new Vue({
//     el: '#app',
//     render: h => h(App)
//     // 这是Vue.js里的createElement函数，作用是生成一个VNode节点，
//     // render函数得到这个VNode节点之后，返回个Vue.js的mount函数，渲染成真实DOM节点，并挂在根节点上。
// })
