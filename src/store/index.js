import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        perPage: 0
    },
    mutations: {
        setPerPage(state, value) {
            state.perPage = value
        }
    },
    actions: {
        async setPerPage({ commit }, value) {
            commit('setPerPage', value)
        }
    },
    getters: {
        perPage: state => state.perPage,
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