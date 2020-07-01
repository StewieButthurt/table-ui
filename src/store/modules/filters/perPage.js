const state = () => ({
    perPage: 0
})

const mutations = {
    setPerPage(state, value) {
        state.perPage = value
    },
}

const actions = {
    // устанавливаем фильтр пагинации (10, 15, 20)
    async setPerPage({ commit, dispatch }, value) {
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