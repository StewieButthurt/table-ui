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

    ]
})

const mutations = {
    setViewProduct(state, { index, value }) {
        state.products[index].view = value
    }
}

const actions = {
    setViewProduct({ commit }, { index, value }) {
        commit('setViewProduct', { index, value })
    },
    async setViewAllProducts({ commit, state }, value) {
        for (let i = 0; i < state.products.length; i++) {
            state.products[i].view = value
        }
    }
}

const getters = {
    products: state => state.products
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};