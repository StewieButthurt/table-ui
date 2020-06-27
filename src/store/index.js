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
        filterSelect: []
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
        }
    },
    getters: {
        perPage: state => state.perPage,
        filters: state => state.filters,
        selectAll: state => state.selectAll,
        filterSelect: state => state.filterSelect,
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