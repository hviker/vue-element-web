import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 公共菜单
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login_index'),
  },
];

// 权限菜单
export const asyncRouters = [];

const router = new Router({
  mode: 'history', // 设置历史模式
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

export default router;
