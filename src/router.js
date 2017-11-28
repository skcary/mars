// import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import TopicView from './views/TopicView.vue'
import ClassView from './views/ClassView.vue'
import MyView from './views/MyView.vue'

Vue.use(Router)

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/home', component: HomeView },
    { path: '/topic', component: TopicView },
    { path: '/class', component: ClassView },
    { path: '/my', component: MyView },
    { path: '/', redirect: '/home' }
  ]
})
