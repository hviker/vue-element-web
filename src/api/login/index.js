import axios from "@/utils/axios"
/**
 * 登录方法  
 * @param  {object} loginForm: 登录信息
 */
export function login(loginForm) {
    return axios.$post("/login", loginForm)
}

/**
 * 获取用户信息
 * @param {string} token: 登录token
 */
export function getUserInfo(token) {
    return axios.$post("/getUserInfo", { token: token })
}