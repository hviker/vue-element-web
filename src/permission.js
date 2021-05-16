import NProgress from "nprogress";
import "nprogress/nprogress.css";
import router from "./router";
import store from "./store";
import { whitelist } from "./whitelist";
import { getToken } from "@/utils/auth";
import { MessageBox } from "element-ui";

/**
 *  1. 判断是否存在token， token不存在是对于白名单中的路由可以直接访问
 *     非白名单路由则跳转至登录页进行登录
 *  2. 存在token时说明已经登录，再次属于登录页面路由时跳转至首页
 *  3. 获取用户权限，当用户权限存在时直接跳转
 *  4. 当用户权限不存在时，重新获取用户权限和当前权限下的路由表，并动态添加到角色路由表中
 */
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/dashboard" });
    } else {
      const hasRoles =
        store.getters.roleList && store.getters.roleList.length > 0;
      if (hasRoles) {
        next();
      } else {
        const roleList = await store.dispatch("user/getInfo");
        const accessRoutes = await store.dispatch(
          "permission/getAccessRoutes",
          roleList
        );
        router.addRoutes(accessRoutes);
        next({ ...to, replace: true });
      }
    }
  } else {
    if (whitelist.indexOf(to.path) > -1) {
      next();
    } else {
      MessageBox.confirm("您尚未登录，请登录", "提示", {
        confirmBottonText: "确定",
        cancelBottonText: "取消",
        type: "warning",
      }).then(() => {
        next({ path: "/login" });
      });
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
