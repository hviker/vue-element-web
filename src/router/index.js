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
    hidden: true
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
    titleHidden: true,
    meta: {
      icon: "dashboard"
    },
    children: [
      {
        path: "index",
        name: "Dashboard_Index",
        title: "首页",
        component: () => import("@/views/dashboard/dashboard_index"),
        meta: {
          icon: "dashboard"
        }
      }
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
      icon: "system"
    },
    children: [
      {
        path: "deptmanagement",
        name: "Deptmanagement_Index",
        title: "部门管理",
        component: () =>
          import("@/views/system/deptmanagement/deptmanagement_index"),
        meta: {
          roles: ["editor"],
          icon: "deptmanagement"
        },
      },
      {
        path: "usermanagement",
        name: "Usermanagement_Index",
        title: "用户管理",
        component: () =>
          import("@/views/system/usermanagement/usermanagement_index"),
        meta: {
          roles: ["editor"],
          icon: "usermanagement"
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
