const AppRequest = require('@@/api/request.js')
const state = () => ({
    products: [],
    viewProducts: [],
    counterSelectProducts: 0
})

const mutations = {

}

const actions = {
    async setViewProduct({ state }, { index, value }) {
        state.products[index].view = value

        if (value) {
            state.counterSelectProducts++
        } else {
            state.counterSelectProducts--
        }
    },
    async setViewAllProducts({ commit, rootGetters, state, }, value) {
        let start = rootGetters['paginator/start']
        let end = rootGetters['paginator/end']
        await state.products.forEach((item, i) => {
            if (i >= (start === 1 ? start - 1 : start) && i < end) {
                state.products[i].view = value

                if (value) {
                    state.counterSelectProducts++
                } else {
                    state.counterSelectProducts--
                }
            }
        })
    },
    async sortProducts({ commit, state }, { serverName, value }) {
        if (value) {
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
        } else {
            if (serverName === 'product') {
                await state.products.reverse((a, b) => {
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
                await state.products.reverse((a, b) => {
                    return a[serverName] - b[serverName]
                })
            }
        }


    },
    async setProducts({ state }, { item, index, view = false }) {
        state.products.push(item)
        state.products[index].view = view
        state.products[index].globalIndex = index
        state.products[index].deleteButton = false

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
    },
    async questionDeleteProduct({ state }, { index, value }) {
        state.products[index].deleteButton = value
    },
    async deleteOneProduct({ state }, index) {
        await state.products.splice(index, 1)
    },
    async deleteProduct({ dispatch, state }, { index, title }) {
        try {
            await AppRequest.deleteProducts()
            await dispatch('products/deleteOneProduct',
                index, { root: true })
            let newProducts = state.products
            await dispatch('products/clearProducts',
                null, { root: true })
            await newProducts.forEach((item, i) => {
                dispatch('products/setProducts', {
                    index: i,
                    item: item
                }, { root: true })
            })
            await dispatch('products/setViewProducts',
                null, { root: true })
            await dispatch('alert/setSuccess',
                `Продукт ${title} успешно удален!`, { root: true }
            )
        } catch (e) {
            await dispatch('alert/setError',
                `Ошибка при удалении продукта ${title}!`, { root: true }
            )
            throw Error(`При удалении продукта произошла ошибка! ${e.error}!`)
        }
    }
}

const getters = {
    products: state => state.products,
    viewProducts: state => state.viewProducts,
    counterSelectProducts: state => state.counterSelectProducts
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};