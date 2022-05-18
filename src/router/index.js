import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    { 
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'HomePage',
      component: () => import('@/views/HomePage')
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/views/LoginPage'),
      children: [
        {
          path: 'register',
          // name: 'Register',
          component: () => import('@/views/RegisterPage'),
        }
      ]
    },
  ],
})

export default router;