import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/index.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import service from "./utils/axios";
import "./icons/icons_index";
import "./permission";

if (process.env.NODE_ENV === "development") {
  require("./utils/mock");
}

Vue.use(ElementUI);

import SvgIcon from "./components/SvgIcon/install";
import Pagination from "./components/Pagination/install";
Vue.use(Pagination);
Vue.use(SvgIcon);

Vue.config.productionTip = false;
Vue.prototype.$axios = service;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
