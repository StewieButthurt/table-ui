const AppRequest = require('@@/api/request.js')
const state = () => ({
    products: [],
    viewProducts: [],
    counterSelectProducts: 0
})

const mutations = {

}

const actions = {
    // обработка клика по checkbox у продукта
    async setViewProduct({ state }, { index, value }) {
        state.products[index].view = value

        // счетчик выбранных товаров
        if (value) {
            state.counterSelectProducts++
        } else {
            state.counterSelectProducts--
        }
    },
    // обработка клика по checkbox
    // который выбирает все видимые элементы
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
    // сортировка колонки по алфавиту и значениям
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
    // заполнение массива products
    // установка дополнительных ключей
    async setProducts({ state }, { item, index, view = false }) {
        state.products.push(item)
        state.products[index].view = view
        state.products[index].globalIndex = index
        state.products[index].deleteButton = false

    },
    // заполнение массива viewProducts с
    // учетом пагинации
    async setViewProducts({ rootGetters, state }) {
        let start = rootGetters['paginator/start']
        let end = rootGetters['paginator/end']
        state.viewProducts = []
        for (let i = start === 1 ? start - 1 : start; i < end; i++) {
            state.viewProducts.push(state.products[i])
        }
    },
    // очистка массива products
    async clearProducts({ state }) {
        state.products = []
    },
    // регулируем отображение всплывающего окна
    // с вопросом об удалении продукта
    async questionDeleteProduct({ state }, { index, value }) {
        state.products[index].deleteButton = value
    },
    // удаляем выбранный продукт из массива
    async deleteOneProduct({ state }, index) {
        await state.products.splice(index, 1)
    },
    // функция удаления продукта
    async deleteProduct({ dispatch, state }, { index, title }) {
        try {
            // API эмитации сервера
            await AppRequest.deleteProducts()

            // удаляем продукт из массива
            await dispatch('products/deleteOneProduct',
                index, { root: true })

            // снимаем копию массива
            let newProducts = state.products

            // очищаем оригинальный массив
            await dispatch('products/clearProducts',
                null, { root: true })

            // создаем новый массив products
            // из копии
            await newProducts.forEach((item, i) => {
                dispatch('products/setProducts', {
                    index: i,
                    item: item
                }, { root: true })
            })

            // создаем массив с учетом пагинации
            await dispatch('products/setViewProducts',
                null, { root: true })

            // вызываем алерт об успешном удалении
            await dispatch('alert/setSuccess',
                `Продукт ${title} успешно удален!`, { root: true }
            )
        } catch (e) {
            // обработка ошибки
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