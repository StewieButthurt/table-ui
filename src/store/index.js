import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        perPage: 0,
        selectAll: [{
            title: 'Select All',
            view: true
        }],
        filters: [{
                title: 'Product (100g serving)',
                serverName: 'product',
                status: false,
                view: true
            },
            {
                title: 'Calories',
                serverName: 'calories',
                status: false,
                view: true
            },
            {
                title: 'Fat(g)',
                serverName: 'fat',
                status: false,
                view: true
            },
            {
                title: 'Carbs(g)',
                serverName: 'carbs',
                status: false,
                view: true
            },
            {
                title: 'Protein(g)',
                serverName: 'protein',
                status: false,
                view: true
            },
            {
                title: 'Iron(%)',
                serverName: 'iron',
                status: false,
                view: true
            }
        ],
        filterSelect: [],
        products: [

            {
                product: 'Frozen Yogurt',
                calories: 125,
                fat: 224,
                carbs: 486,
                protein: 696,
                iron: 536,
                view: false
            },
            {
                product: 'Ice cream sandwich',
                calories: 851,
                fat: 519,
                carbs: 735,
                protein: 461,
                iron: 366,
                view: false
            }
        ]
    },
    mutations: {
        setPerPage(state, value) {
            state.perPage = value
        },
        setStatus(state, { value, index }) {
            state.filters[index].status = value
        },
        setView(state, { index, value }) {
            state.filters[index].view = value
        },
        setViewSelectAll(state, { index, value }) {
            state.selectAll[index].view = value

            if (value) {
                for (let i = 0; i < state.filters.length; i++) {
                    state.filters[i].view = true
                }
            } else {
                for (let i = 0; i < state.filters.length; i++) {
                    state.filters[i].view = false
                }
            }

        },
        setFilterSelect(state, arr) {
            state.filterSelect = arr
        },
        setViewProduct(state, { index, value }) {
            state.products[index].view = value
        }
    },
    actions: {
        async setPerPage({ commit }, value) {
            commit('setPerPage', value)
        },
        async setStatus({ commit }, { value, index }) {
            commit('setStatus', { value, index })
        },
        async setView({ commit }, { value, index }) {
            commit('setView', { value, index })
        },
        async setViewSelectAll({ commit }, { value, index }) {
            commit('setViewSelectAll', { value, index })
        },
        async setFilterSelect({ commit, state }) {
            let arr = []
            for (let i = 0; i < state.filters.length; i++) {
                if (state.filters[i].status) {
                    arr.unshift(state.filters[i])
                } else {
                    arr.push(state.filters[i])
                }
            }
            commit('setFilterSelect', arr)
        },
        async setViewProduct({ commit }, { index, value }) {
            commit('setViewProduct', { index, value })
        },
        async setViewAllProducts({ commit, state }, value) {
            for (let i = 0; i < state.products.length; i++) {
                state.products[i].view = value
            }
        }
    },
    getters: {
        perPage: state => state.perPage,
        filters: state => state.filters,
        selectAll: state => state.selectAll,
        filterSelect: state => state.filterSelect,
        products: state => state.products
    },
    modules: {

    }
})

// const store = new Vuex.Store({
//     modules: {
//         moduleA,
//         moduleB
//     }
// })