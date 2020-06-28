const state = () => ({
    filters: [

        {
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
})

const mutations = {
    setStatus(state, { value, index }) {
        state.filters[index].status = value
    },
    setView(state, { index, value }) {
        state.filters[index].view = value
    },
    setFilterSelect(state, arr) {
        state.filterSelect = arr
    },
}

const actions = {
    async setStatus({ commit }, { value, index }) {
        commit('setStatus', { value, index })
    },
    async setView({ commit }, { value, index }) {
        commit('setView', { value, index })
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
}

const getters = {
    filters: state => state.filters,
    filterSelect: state => state.filterSelect
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};