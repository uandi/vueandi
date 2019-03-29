import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Html5TestPage from '@/components/Html5TestPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/Html5TestPage',
      name: 'Html5TestPage',
      component: Html5TestPage,
    },
  ],
});
