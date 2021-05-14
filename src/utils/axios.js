import axios from "axios";
import router from "../router";
import store from "../store";
import qs from "qs";
import { Message, MessageBox } from "element-ui";
import { getToken } from "./auth";
import { AxiosCode } from "@/constants/axiosCode";

const { Normal, NoPermission } = AxiosCode;

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use((config) => {
  if (store.getters.token) {
      // 存储请求头
    config.headers["AuthorizeToken"] = getToken();
  }
  return service;
});

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 根据编码进行处理
    const code = res.code;
    if (Normal.has(code)) {
      return res;
    } else {
      Message.error(res.message | "Error");
      if (NoPermission.has(code)) {
        MessageBox.confirm("权限过期或者无访问权限，请登录后重试", "提示", {
          confirmButtonText: "跳转登录页面",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          router.push("/login");
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    }
  },
  (error) => {
    Message.error(error | "Error");
    return Promise.reject(error);
  }
);

// 封装get
service.$get = (url, data) => {
  return service.get(url, data);
};
// 封装post
service.$post = (url, data) => {
  return service.post(url, qs.stringify(data));
};

export default service;
