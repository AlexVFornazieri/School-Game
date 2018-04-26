import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Teoria from '../components/Teoria'
import VideoTutorial from '../components/VideoTutorial'
import Questoes from '../components/Questoes'
import Exemplos from '../components/Exemplos'

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
    },
    {
      path: '/exemplos/',
      name: 'Exemplos',
      component: Exemplos
    },
    {
      path: '/questoes/',
      name: 'Questoes',
      component: Questoes
    }
  ]
})
