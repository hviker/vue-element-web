import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout/layout_index"

Vue.use(Router);

// 公共菜单
export const constantRoutes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login_index"),
  },
  {
    path: "/dashboard",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Dashboard",
        component: () => import("@/views/dashboard/dashboard_index")
      }
    ]
  },
];

// 权限菜单
export const asyncRouters = [
  {
    path: "/system",
    name: "System",
    component: () => import("@/views/dashboard/dashboard_index"),
    meta: {
      roles: ["editor"],
    },
    children: [
      {
        path: "deptmanagement",
        name: "Deptmanagement",
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
