<!-- компонет шапки таблицы, содержащий названия колонок -->
<template>
    <div class="row-header">
        <div style="margin-right: 30px">
            <app-checkbox
                :view="view"
                @clickCheckbox="clickCheckbox"
            />
        </div>
        
        <app-column-header 
            v-for="(item, index) in filterSelect"
            :key="item.title"
            :index="index"
            :title="item.title"
            :sortColumn="item.sortColumn"
            :filters="filters"
            @clickColumnName="clickColumnName"
        />
    </div>
</template>

<script>
    const AppColumnHeader = () => import('./column-header.vue')
    const AppCheckbox = () => import('@@/components/Table-Components/filters/checkbox/index.vue')
    export default {
        computed: {
            view() {
                return this.$store.getters['products/viewAllProductsStatus']
            }
        },
        props: [
            'filterSelect',
            'filters'
        ],
        components: {
            AppColumnHeader,
            AppCheckbox
        },
        methods: {
            async clickCheckbox(localView) {
                let view = !localView
                await this.$store.dispatch('products/setViewAllProductsStatus', {
                    view: view
                })
                await this.$store.dispatch('products/setViewAllProducts', view)
                await this.$store.dispatch('products/setViewProducts')
            },
            async clickColumnName(title) {
                new Promise(async (resolve, reject) => {
                    await this.filters.forEach(async (item, i) => {
                        if(this.filters[i].title === title)  {
                            let value = typeof this.filters[i].sortColumn === 'string' ?
                                    true : !this.filters[i].sortColumn
                            await this.$store.dispatch('filters/setSortColumn', {
                                value: value,
                                index: i
                            })
                            resolve({
                                i: i, 
                                value: value
                            })
                        } else {
                            await this.$store.dispatch('filters/setSortColumn', {
                                value: 'default',
                                index: i
                            })
                        }
                    })
                })
                .then(async ({i, value}) => {
                    await this.$store.dispatch('products/sortProducts', {
                        serverName: this.filters[i].serverName,
                        value: value
                    })
                    const arr =  this.$store.getters['products/products']
                    await this.$store.dispatch('products/clearProducts')
                    await arr.forEach((item, i) => {
                        this.$store.dispatch('products/setProducts', {
                            index: i,
                            item: item,
                            view: item.view
                        })
                    })
                    await this.$store.dispatch('paginator/setStart', 1)
                    await this.$store.dispatch('paginator/setEnd',
                    await this.$store.getters['perPage/perPage'])
                    await this.$store.dispatch('products/setViewProducts')
                })
            }
        }
    }
</script>

<style lang="sass">
    .row-header
        display: flex
        align-items: center
        height: 50px
        padding-left: 37px
        cursor: pointer
        border-bottom: 1px solid #EDEDED
</style>