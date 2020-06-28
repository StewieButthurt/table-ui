const state = () => ({
    perPage: 0
})

const mutations = {
    setPerPage(state, value) {
        state.perPage = value
    },
}

const actions = {
    setPerPage({ commit }, value) {
        commit('setPerPage', value)
    },
}

const getters = {
    perPage: state => state.perPage
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};