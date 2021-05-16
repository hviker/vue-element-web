const Mock = require("mockjs");

Mock.setup({
  timeout: 1000 // 设置请求延时时间
})

const mockFiles = require.context("../../mock", true, /\.js$/);
let mockFilesList = [];
mockFiles.keys().forEach((key) => {
  mockFilesList = [...mockFilesList, ...mockFiles(key)];
});

mockFilesList.forEach((item) => {
  Mock.mock(item.url, item.type, item.response);
});
