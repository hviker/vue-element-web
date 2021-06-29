import Pagination from "./Pagination_index";

/**
 * 注册全局分页组件 Pagination
 * @param {*} Vue 
 */
Pagination.install = Vue => {
    Vue.component('Pagination', Pagination)
}

export default Pagination;