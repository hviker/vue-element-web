import NProgress from "nprogress";
import "nprogress/nprogress.css";
import router from "./router";
import { whitelist } from "./whitelist";
import { getToken } from "@/utils/auth";
import { MessageBox } from "element-ui";

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const hasToken = getToken();
  if (hasToken) {
    // todo
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
