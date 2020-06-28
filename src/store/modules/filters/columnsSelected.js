const getFiltersStore = () =>
    import ('@@/store/modules/filters/filters.js')

const state = () => ({
    selectAll: [{
        title: 'Select All',
        view: true
    }],
})

const mutations = {

}

const actions = {
    async setViewSelectAll({ state, rootGetters, dispatch }, { value, index }) {

        if (!this.hasModule('filters')) {
            await this.registerModule('filters', getFiltersStore)
        }

        const filters = await rootGetters['modules/filters/filters/filters']

        state.selectAll[index].view = value

        if (value) {
            for (let i = 0; i < filters.length; i++) {
                await dispatch('modules/filters/filters/setView', {
                    index: i,
                    value: true
                }, { root: true })
            }
        } else {
            for (let i = 0; i < filters.length; i++) {
                await dispatch('modules/filters/filters/setView', {
                    index: i,
                    value: false
                }, { root: true })
            }
        }
    }
}

const getters = {
    selectAll: state => state.selectAll,
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};