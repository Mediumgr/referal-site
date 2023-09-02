import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () =>
      import(
        /* webpackChunkName: "MainPage"*/
        '../views/MainPage'
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
