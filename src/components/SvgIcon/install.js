import SvgIcon from "./SvgIcon_index";

/**
 * 全局注册 svg-icon 组件
 * @param {*} Vue
 */
SvgIcon.install = (Vue) => {
  Vue.component("svg-icon", SvgIcon);
};

export default SvgIcon;
