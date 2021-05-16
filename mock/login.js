module.exports = [
  // 登录接口
  {
    url: "/api/login",
    type: "post",
    response: () => {
      return {
        code: 200,
        data: {
          token: "admin",
        },
      };
    },
  },
  // 获取用户信息接口
  {
      url: "/api/getUserInfo",
      type: "post",
      response: () => {
          return {
              code: 200,
              data: {
                  userInfo: {
                      name: 'admin',
                      roleList: ['editor']
                  }
              }
          }
      }
  }
];
