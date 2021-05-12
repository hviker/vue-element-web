// 设置跨域拦截
module.exports = {
    '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
    }
}