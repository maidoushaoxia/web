import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueBus from './vue-bus';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueBus);

const Routers = [
  {
    path: '/index',
    meta: {
      title:'首页'
    },
    component: (resolve) => require(['./views/index.vue'],resolve)
  },
  {
    path: '/about',
    meta: {
      title:'关于'
    },
    component: (resolve) => require(['./views/about.vue'],resolve)
  },
  {
    path: '/user/:id',
    meta: {
      title:'个人主页'
    },
    component: (resolve) => require(['./views/user.vue'],resolve)
  },
  {
    path: '*',
    redirect: '/index'
  },
];

const RouterConfig = {
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

const store = new Vuex.Store({
  state: {
    count:0
    // list: [1,5,8,10,30,50]
  },
  getters: {
    filteredList: state => {
      return store.state.list.filter(item => item < 10);
    },
    listCount: (state,getters) => {
      return getters.filteredList.length;
    }
  },
  mutations:{
    // increase(state){
    //   state.count ++;
    // },
    // increase(state,params){
    //   state.count += params.count;
    // },
    // decrease(state){
    //   state.count --;
    // }
    increase(state,n=5){
      state.count +=n;
    },
  },
  actions: {
    asyncIncrease(context){
      return new Promise(resolve => {
        setTimeout(() => {  
          context.commit('increase');
          resolve();
        }, 1000);
      })
    }
  }
});

router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title;
  next();
})

new Vue({
  el:'#app',
  router:router,
  store: store,
  render:function(h) {
    return h(App);
  }
})
