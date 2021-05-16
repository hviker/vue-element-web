const getters = {
  token: (state) => state.user.token,
  roleList: (state) => state.user.roleList,
  routes: (state) => state.permission.routes,
  asyncRoutes: (state) => state.permission.asyncRoutes,
};

export default getters;
