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

}

const actions = {
    async setViewProduct({ state }, { index, value }) {
        console.log(index, value)
        state.products[index].view = value
    },
    async setViewAllProducts({ commit, rootGetters, state, }, value) {
        let start = rootGetters['paginator/start']
        let end = rootGetters['paginator/end']
        await state.products.forEach((item, i) => {
            if (i >= (start === 1 ? start - 1 : start) && i < end) {
                state.products[i].view = value
            }
        })
    },
    async sortProducts({ commit, state }, serverName) {
        if (serverName === 'product') {
            await state.products.sort((a, b) => {
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
            await state.products.sort((a, b) => {
                return a[serverName] - b[serverName]
            })
        }

    },
    async setProducts({ state }, { item, index, view = false }) {
        state.products.push(item)
        state.products[index].view = view
        state.products[index].globalIndex = index
    },
    async setViewProducts({ rootGetters, state }) {
        let start = rootGetters['paginator/start']
        let end = rootGetters['paginator/end']
        state.viewProducts = []
        for (let i = start === 1 ? start - 1 : start; i < end; i++) {
            state.viewProducts.push(state.products[i])
        }
    },
    async clearProducts({ state }) {
        state.products = []
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