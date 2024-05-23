import Vue from 'vue'
import Router from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/Layout'),
    children: [
      {
        path: '/',
        name: 'Resource',
        meta: {
          title:'资源库'
        },
        component: () => import('@/views/Resource')
      },
      {
        path: '/home',
        name: 'Home',
        meta: {
          title:''
        },
        component: () => import('@/views/Home')
      },
      {
        path: '/scene',
        name: 'Scene',
        meta: {
          title:'全新场景'
        },
        component: () => import('@/views/Scene')
      },
      {
        path: '/service',
        name: 'Service',
        meta: {
          title:'共享服务'
        },
        component: () => import('@/views/Service')
      },
      {
        path: '/community',
        name: 'Community',
        meta: {
          title:'社区'
        },
        component: () => import('@/views/Community')
      },
      {
        path: '/duomi',
        name: 'Duomi',
        meta: {
          title:''
        },
        component: () => import('@/views/Duomi')
      },
     
    ]
  }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes
})