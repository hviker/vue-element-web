import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout/layout_index";

Vue.use(Router);

// 公共菜单
export const constantRoutes = [
  {
    path: "/",
    redirect: "/login",
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    title: "404",
    component: () => import("@/views/errorpage/404_index"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login_index"),
    hidden: true,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Layout,
    title: "首页",
    children: [
      {
        path: "index",
        name: "Dashboard.index",
        title: "首页2",
        component: () => import("@/views/dashboard/dashboard_index"),
      },
      {
        path: "index2",
        name: "Dashboard.index2",
        title: "首页3",
        component: () => import("@/views/dashboard/dashboard_index"),
        children: [
          {
            path: "index3",
            name: "Dashboard.index3",
            title: "首页3",
            component: () => import("@/views/dashboard/dashboard_index"),
          },
        ],
      },
    ],
  },
];

// 权限菜单
export const asyncRouters = [
  {
    path: "/system",
    name: "System",
    component: Layout,
    title: "系统管理",
    meta: {
      roles: ["editor"],
    },
    children: [
      {
        path: "deptmanagement",
        name: "Deptmanagement",
        title: "部门管理",
        component: () =>
          import("@/views/system/deptmanagement/deptmanagement_index"),
        meta: {
          roles: ["editor"],
        },
      },
    ],
  },
];

const router = new Router({
  mode: "history", // 设置历史模式
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

export default router;
