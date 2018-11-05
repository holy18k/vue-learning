import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Animal',
      name: 'Animal',
      component: resolve => require(['../components/communicate/Animal.vue'], resolve),
    },
    {
      path: '/Lion',
      name: 'lion',
      component: resolve => require(['../components/communicate/Lion.vue'], resolve),
    },
    {
      path: '/Father',
      name: 'Father',
      component: resolve => require(['../components/communicate/Father.vue'], resolve)
    },
    {
      path: '/Child',
      name: 'Child',
      component: resolve => require(['../components/communicate/Child.vue'], resolve)
    },
    {
      path: '/Parent',
      name: 'Parent',
      component: resolve => require(['../components/communicate/Parent.vue'], resolve)
    },
    {
      path: '/Son',
      name: 'Son',
      component: resolve => require(['../components/communicate/Son.vue'], resolve)
    }, {
      path: '/Water',
      name: 'Water',
      component: resolve => require(['../components/communicate/Water.vue'], resolve)
    }
  ]
})
