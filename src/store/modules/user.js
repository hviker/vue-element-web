import { getUserInfo } from "@/api/login";
const state = {
  token: "",
  userInfo: null,
  roleList: null,
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo;
  },
  SET_ROLELIST: (state, roleList) => {
    state.roleList = roleList;
  },
};

const actions = {
  setToken({ commit }, token) {
    commit("SET_TOKEN", token);
  },
  setRoleList({ commit }, roleList) {
    commit("SET_ROLELIST", roleList);
  },
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token)
        .then((res) => {
          const { userInfo } = res;
          commit("SET_USERINFO", userInfo);
          commit("SET_ROLELIST", userInfo.roleList);
          resolve(userInfo.roleList);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
