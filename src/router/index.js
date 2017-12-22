import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home.vue'
import Detail from '../page/detail/detail'
import Detail1 from '../page/detail/detail1/detail1'
import Detail2 from '../page/detail/detail2/detail2'
import Detail3 from '../page/detail/detail3/detail3'
import Detail4 from '../page/detail/detail4/detail4'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path:'/detail',
        name:'detail',
        component:Detail,
        redirect: '/detail/detail1',
        children:[
            {
              path: 'detail1',
              name: 'detail1',
              component: Detail1
            },
            {
              path: 'detail2',
              name: 'detail2',
              component: Detail2
            },
            {
              path: 'detail3',
              name: 'detail3',
              component: Detail3
            },
            {
              path: 'detail4',
              name: 'detail4',
              component: Detail4
            }
        ]
    }

  ]
})
