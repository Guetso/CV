import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import aboutIcon from '../components/icons/IconAbout'
import contactIcon from '../components/icons/IconPhone'
import portfolioIcon from '../components/icons/IconBriefcase'
import skillsIcon from '../components/icons/IconHead'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      icon: {
        component: aboutIcon,
        name: 'about'
      }
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
    meta: {
      icon: {
        component: contactIcon,
        name: 'contact'
      }
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () =>
      import('../views/Portfolio.vue'),
    meta: {
      icon: {
        component: portfolioIcon,
        name: 'portfolio'
      }
    }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () =>
      import('../views/Skills.vue'),
    meta: {
      icon: {
        component: skillsIcon,
        name: 'skills'
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
