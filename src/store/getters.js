const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  roleList: (state) => state.user.roleList,
  routes: (state) => state.permission.routes,
  asyncRoutes: (state) => state.permission.asyncRoutes,
};

export default getters;
