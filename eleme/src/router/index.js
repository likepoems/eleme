import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/home'
import Take from '@/components/Home/Take/take'
import Order from '@/components/Home/Order/order'
import Find from '@/components/Home/Find/find'
import Mine from '@/components/Home/Mine/mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/take'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/take',
          name: 'Take',
          component: Take
        }, {
          path: '/find',
          name: 'Find',
          component: Find
        }, {
          path: '/order',
          name: 'Order',
          component: Order
        }, {
          path: '/mine',
          name: 'Mine',
          component: Mine
        }
      ]
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
