import Cookies from "js-cookie";

/**
 * token
 */
const TokenKey = "Token";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token, expiresDay) {
  return Cookies.set(TokenKey, token, { expires: expiresDay });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

/**
 * 用户名
 */
const UserName = "username";

export function getUserName() {
  return Cookies.get(UserName);
}

export function setUserName(username) {
  return Cookies.set(UserName, username);
}

export function removeUserName() {
  return Cookies.remove(UserName);
}

/**
 * 密码
 */

const Password = "password";

export function getPassword() {
  return Cookies.get(Password);
}

export function setPassword(password) {
  return Cookies.set(Password, password);
}

export function removePassword() {
  return Cookies.remove(Password);
}

/**
 * 是否记住密码
 */
const IsChecked = "isCheck";
export function getIsChecked() {
  return Cookies.get(IsChecked);
}

export function setIsChecked(isCheck) {
  return Cookies.set(IsChecked, isCheck);
}

export function removeIsChecked() {
  return Cookies.remove(IsChecked);
}
