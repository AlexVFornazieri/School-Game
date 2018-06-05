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
      component: Home,
      props: true
    },
    {
      path: '/teoria/:id',
      name: 'Teoria',
      component: Teoria,
      props: true
    },
    {
      path: '/video/:id',
      name: 'Video',
      component: VideoTutorial,
      props: true
    },
    {
      path: '/exemplos/:id',
      name: 'Exemplos',
      component: Exemplos,
      props: true
    },
    {
      path: '/questoes/:id',
      name: 'Questoes',
      component: Questoes,
      props: true
    }
  ]
})
