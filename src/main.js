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
import "./utils/mock"

// if (process.env.NODE_ENV === "development") {
//   require("./utils/mock");
// }

import SvgIcon from "./components/SvgIcon/install";
Vue.use(SvgIcon);
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$axios = service;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
