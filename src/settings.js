// 需要使用缓存的pathList
const cachedPathList = [];

// 默认展示的菜单的name
const defaultActiveMenu = "Dashboard.index";

// 当某路由children字段只存在一个hidden非true的菜单时,是否层叠显示
// true: 层叠显示  false: 非层叠显示,name、path显示子级
const isSingleChildStack = false;

export { cachedPathList, defaultActiveMenu, isSingleChildStack };
