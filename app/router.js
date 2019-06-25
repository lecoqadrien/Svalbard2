import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Intro from './components/Intro.vue';
import Map from './components/Map.vue';
import chap_1 from './components/chap_1.vue';
import chap_2 from './components/chap_2.vue';
import chap_3 from './components/chap_3.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Intro',
      name: 'intro',
      component: Intro,
    },

    {
      path: '/Map',
      name: 'map',
      component: Map,
    },

    {
      path:'/chap_1',
      name: 'chap_1',
      component: chap_1,
    },

    {
      path: '/chap_2',
      name: 'chap_2',
      component: chap_2,
    },

    {
      path: '/chap_3',
      name: 'chap_3',
      component: chap_3,
    },

    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
