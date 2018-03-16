import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Teoria from '../components/Teoria'
import VideoTutorial from '../components/VideoTutorial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/teoria/',
      name: 'Teoria',
      component: Teoria
    },
    {
      path: '/video/',
      name: 'Video',
      component: VideoTutorial
    }
  ]
})
