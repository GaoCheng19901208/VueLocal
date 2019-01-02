import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve)

    },
    {
      path: '/H1',
      name: 'HelloWorld1',
      component: resolve => require(['@/components/HelloWorld1'], resolve),
      children:[
        {
            path: "H3",
            component: resolve => require(['@/components/HelloWorld3'], resolve)
        }
      ]
    },
    {
      path: '/H2',
      name: 'HelloWorld2',
      component: resolve => require(['@/components/HelloWorld2'], resolve)
    }
  ]
})
