import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Overview from '../views/Overview.vue'
import Unit11 from '../views/Unit11.vue'
import Unit12 from '../views/Unit12.vue'
import Unit13 from '../views/Unit13.vue'
import Unit14 from '../views/Unit14.vue'
import Unit15 from '../views/Unit15.vue'
import Unit16 from '../views/Unit16.vue'
import EndOfUnit1 from '../views/EndOfUnit1.vue'
import Unit21 from '../views/Unit21.vue'
import Unit22 from '../views/Unit22.vue'
import Unit23 from '../views/Unit23.vue'
import Unit24 from '../views/Unit24.vue'
import EndOfUnit2 from '../views/EndOfUnit2.vue'
import Unit30 from '../views/Unit30.vue'
import Unit31 from '../views/Unit31.vue'
import Unit32 from '../views/Unit32.vue'
import Unit33 from '../views/Unit33.vue'
import Unit34 from '../views/Unit34.vue'
import Unit35 from '../views/Unit35.vue'
import EndOfUnit3 from '../views/EndOfUnit3.vue'
import Unit41 from '../views/Unit41.vue'
import Unit42 from '../views/Unit42.vue'
import Unit43 from '../views/Unit43.vue'
import Unit44 from '../views/Unit44.vue'
import Unit45 from '../views/Unit45.vue'
import EndOfUnit4 from '../views/EndOfUnit4.vue'
import Unit51 from '../views/Unit51.vue'
import Unit52 from '../views/Unit52.vue'
import Unit53 from '../views/Unit53.vue'
import Unit54 from '../views/Unit54.vue'
import EndOfUnit5 from '../views/EndOfUnit5.vue'
import Unit61 from '../views/Unit61.vue'
import Unit62 from '../views/Unit62.vue'
import Unit63 from '../views/Unit63.vue'
import Unit64 from '../views/Unit64.vue'
import EndOfUnit6 from '../views/EndOfUnit6.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
      },

  {
       path: '/overview',
       name: 'Overview',
       component: Overview
  },
  {
          path: '/unit11',
          name: 'Unit11',
          component: Unit11
   },
   
      {  path: '/unit12',
    name: 'Unit12',
    component: Unit12
      },


    {
        path: '/unit13',
        name: 'Unit13',
            component: Unit13
},
{
    path: '/unit14',
        name: 'Unit14',
            component: Unit14
      },
      {
          path: '/unit15',
          name: 'Unit15',
          component: Unit15
      },

      {
          path: '/unit16',
          name: 'Unit16',
          component: Unit16
      },


      {
          path: '/end-of-unit1',
          name: 'EndOfUnit1',
          component: EndOfUnit1
      },

      {
          path: '/unit21',
          name: 'Unit21',
          component: Unit21
      },
      {
          path: '/unit22',
          name: 'Unit22',
          component: Unit22
      },
      {
          path: '/unit23',
          name: 'Unit23',
          component: Unit23
      },

      {
          path: '/unit24',
          name: 'Unit24',
          component: Unit24
      },


      {
          path: '/end-of-unit2',
          name: 'EndOfUnit2',
          component: EndOfUnit2
      },

      {
          path: '/unit30',
          name: 'Unit30',
          component: Unit30
      },

      {
          path: '/unit31',
          name: 'Unit31',
          component: Unit31
      },


      {
          path: '/unit32',
          name: 'Unit32',
          component: Unit32
      },
      {
          path: '/unit33',
          name: 'Unit33',
          component: Unit33
      },
      {
          path: '/unit34',
          name: 'Unit34',
          component: Unit34
      },

      {
          path: '/unit35',
          name: 'Unit35',
          component: Unit35
      },


      {
          path: '/end-of-unit3',
          name: 'EndOfUnit3',
          component: EndOfUnit3
      },

      {
          path: '/unit41',
          name: 'Unit41',
          component: Unit41
      },

      {
          path: '/unit42',
          name: 'Unit42',
          component: Unit42
      },


      {
          path: '/unit43',
          name: 'Unit43',
          component: Unit43
      },
      {
          path: '/unit44',
          name: 'Unit44',
          component: Unit44
      },
      {
          path: '/unit45',
          name: 'Unit45',
          component: Unit45
      },

      {
          path: '/end-of-unit4',
          name: 'EndOfUnit4',
          component: EndOfUnit4
      },

      {
          path: '/unit51',
          name: 'Unit51',
          component: Unit51
      },
      {
          path: '/unit52',
          name: 'Unit52',
          component: Unit52
      },
      {
          path: '/unit53',
          name: 'Unit53',
          component: Unit53
      },

      {
          path: '/unit54',
          name: 'Unit54',
          component: Unit54
      },


      {
          path: '/end-of-unit5',
          name: 'EndOfUnit5',
          component: EndOfUnit5
      },

      {
          path: '/unit61',
          name: 'Unit61',
          component: Unit61
      },
      {
          path: '/unit62',
          name: 'Unit62',
          component: Unit62
      },
      {
          path: '/unit63',
          name: 'Unit63',
          component: Unit63
      },

      {
          path: '/unit64',
          name: 'Unit64',
          component: Unit64
      },


      {
          path: '/end-of-unit6',
          name: 'EndOfUnit6',
          component: EndOfUnit6
      },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
