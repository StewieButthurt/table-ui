const state = () => ({
    start: 1,
    end: 10,
    all: 113
})

const mutations = {
    setStart(state, value) {
        state.start = value
    },
    setEnd(state, value) {
        state.end = value
    },
    setAll(state, value) {
        state.all = value
    }
}

const actions = {
    async setStart({ commit }, value) {
        commit('setStart', value)
    },
    async setEnd({ commit }, value) {
        commit('setEnd', value)
    },
    async setAll({ commit }, value) {
        commit('setAll', value)
    }
}

const getters = {
    start: state => state.start,
    end: state => state.end,
    all: state => state.all
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};