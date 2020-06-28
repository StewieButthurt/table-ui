const state = () => ({
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

    ],
    viewProducts: []
})

const mutations = {
    setViewProduct(state, { index, value }) {
        state.viewProducts[index].view = value
    }
}

const actions = {
    setViewProduct({ commit }, { index, value }) {
        commit('setViewProduct', { index, value })
    },
    async setViewAllProducts({ commit, state }, value) {
        for (let i = 0; i < state.viewProducts.length; i++) {
            state.viewProducts[i].view = value
        }
    },
    async sortProducts({ commit, state }, serverName) {
        if (serverName === 'product') {
            state.products.sort((a, b) => {
                let nameA = a[serverName].toLowerCase(),
                    nameB = b[serverName].toLowerCase()

                if (nameA < nameB) {
                    return -1
                }

                if (nameA > nameB) {
                    return 1
                }

            })
        } else {
            state.products.sort((a, b) => {
                return a[serverName] - b[serverName]
            })
        }

    },
    async setProducts({ state }, { item, index }) {
        state.products.push(item)
        state.products[index].view = false
    },
    async setViewProducts({ rootGetters, state }) {
        let start = rootGetters['paginator/start']
        let end = rootGetters['paginator/end']
        state.viewProducts = []
        for (let i = start; i < end; i++) {
            state.viewProducts.push(state.products[i])
        }
    }
}

const getters = {
    products: state => state.products,
    viewProducts: state => state.viewProducts
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};