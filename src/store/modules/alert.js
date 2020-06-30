const state = () => ({
    error: false,
    success: false,
    alertOff: false
})

const mutations = {
    setError(state, value) {
        state.success = false
        state.error = value
    },
    setSuccess(state, value) {
        state.error = false
        state.success = value
    },
    setAlertOff(state, value) {
        state.alertOff = value
    }
}

const actions = {
    async setError({ commit }, value) {
        commit('setError', value)
    },
    async setSuccess({ commit }, value) {
        commit('setSuccess', value)
    },
    async setAlertOff({ commit }, value) {
        commit('setAlertOff', value)
    }
}

const getters = {
    error: state => state.error,
    success: state => state.success,
    alertOff: state => state.alertOff
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};