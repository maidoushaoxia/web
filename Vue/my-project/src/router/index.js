import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import MyHeader from '@/components/MyHeader'
import MyList from '@/components/MyList'


Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/header',
      name: 'header',
      component: MyHeader
    },
    {
      path: '/list',
      name: 'list',
      component: MyList
    },
  ]
})
