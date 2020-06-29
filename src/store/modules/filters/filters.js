const state = () => ({
    filters: [

        {
            title: 'Product (100g serving)',
            serverName: 'product',
            status: false,
            sortColumn: 'default',
            view: true
        },
        {
            title: 'Calories',
            serverName: 'calories',
            status: false,
            sortColumn: 'default',
            view: true
        },
        {
            title: 'Fat(g)',
            serverName: 'fat',
            status: false,
            sortColumn: 'default',
            view: true
        },
        {
            title: 'Carbs(g)',
            serverName: 'carbs',
            status: false,
            sortColumn: 'default',
            view: true
        },
        {
            title: 'Protein(g)',
            serverName: 'protein',
            status: false,
            sortColumn: 'default',
            view: true
        },
        {
            title: 'Iron(%)',
            serverName: 'iron',
            status: false,
            sortColumn: 'default',
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
    setSortColumn(state, { value, index }) {
        state.filters[index].sortColumn = value
    }
}

const actions = {
    async setStatus({ commit }, { value, index }) {
        commit('setStatus', { value, index })
    },
    async setView({ commit }, { value, index }) {
        commit('setView', { value, index })
    },
    async setSortColumn({ commit }, { value, index }) {
        commit('setSortColumn', { value, index })
    },
    async setFilterSelect({ commit, state, dispatch }) {
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