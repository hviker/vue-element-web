import { constantRoutes, asyncRouters } from "@/router";
const state = {
  routes: [], // 符合当前用户角色的所有路由表
  asscessRoutes: [], // 符合当前用户角色的权限路由表
};

const mutations = {
  SET_ASSCESSROUTES: (state, asscessRoutes) => {
    state.asscessRoutes = asscessRoutes;
    state.routes = [...constantRoutes, ...asscessRoutes];
  },
  SET_TRANSPATHLIST: (state, transPathList) => {
    state.transPathList = transPathList;
  }

};

const actions = {
  getAccessRoutes({ commit }, roleList) {
    return new Promise((resolve) => {
      let asscessRoutes = [];
      if (roleList.indexOf("admin") > -1) {
        asscessRoutes = [...asyncRouters];
      } else {
        asscessRoutes = getFilterRouters(asyncRouters, roleList);
      }
      commit("SET_ASSCESSROUTES", asyncRouters);
      resolve(asscessRoutes);
    });
  }
};

function getFilterRouters(routes, roleList) {
  let filterRoutes = [];
  routes.forEach((routeItem) => {
    const tmp = { ...routeItem };
    if (hasPermission(tmp, roleList)) {
      if (tmp.children && tmp.children.length > 0) {
        tmp.children = getFilterRouters(tmp.children, roleList);
      }
      filterRoutes.push(tmp);
    }
  });
  return filterRoutes;
}

function hasPermission(route, roleList) {
  if (route.meta && route.meta.roles) {
    return roleList.some((item) => route.meta.roles.indexOf(item) > -1);
  } else {
    return true;
  }
}

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
