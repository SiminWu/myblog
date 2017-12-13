import Vue from 'vue'
import Router from 'vue-router'
const Hello = resolve => require(['@/components/Hellow/HelloWorld'], resolve)
const Login = resolve => require(['@/components/Login/index'], resolve)//登陆页
const Home = resolve => require(['@/components/Home/index'], resolve)//主页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
