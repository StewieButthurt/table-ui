import Vue from 'vue'
import Vuex from 'vuex'
import filters from './modules/filters/filters'
import columnsSelected from './modules/filters/columnsSelected'
import perPage from './modules/filters/perPage'
import paginator from './modules/filters/paginator'
import products from './modules/products'
import alert from './modules/alert'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        filters,
        columnsSelected,
        perPage,
        paginator,
        products,
        alert
    }
})