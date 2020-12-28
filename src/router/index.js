import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProjectView from '@/views/ProjectView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lightRoute',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/false'
  },
  {
    path: "/projects/:id/:lightMode",
    name: ProjectView,
    component: ProjectView,
    props: true,
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
