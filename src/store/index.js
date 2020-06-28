import Vue from 'vue'
import Vuex from 'vuex'
import filters from './modules/filters/filters'
import columnsSelected from './modules/filters/columnsSelected'
import perPage from './modules/filters/perPage'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        filters,
        columnsSelected,
        perPage,
        products
    }
})