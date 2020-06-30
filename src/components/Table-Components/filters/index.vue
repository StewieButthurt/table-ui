<template>
    <div class="filters">
        <div class="sorting">
            Sorting by:
        </div>
        <div class="filters__button-container">
            <app-filter-button 
                v-for="(item, index) in filters"
                :key=item.title
                :index="index"
                :title="item.title"
                :status="item.status"
                :view="item.view"
                @clickButton="clickButton"
            />
        </div>
        
        <app-delete-button 
            :products="products"
        />

        <app-per-page-button />

        <app-paginators-buttons  />

        <app-columns-selected 
            :filters="filters"
            :selectAll="selectAll"
        />
    </div>
</template>

<script>
    const AppFilterButton = () => import('./filter-button/index.vue')
    const AppDeleteButton = () => import('./delete-button/index.vue')
    const AppPerPageButton = () => import('./per-page-button/index.vue')
    const AppPaginatorsButtons = () => import('./paginator-buttons/index.vue')
    const AppColumnsSelected = () => import('./columns-selected/index.vue')

    export default {
        methods: {
            async clickButton(title) {
                new Promise(async (resolve, reject) => {
                    await this.filters.forEach(async (item, i) => {
                        if(this.filters[i].title === title)  {
                            await this.$store.dispatch('filters/setStatus', {
                                value: true,
                                index: i
                            })
                            resolve(i)
                        } else {
                            await this.$store.dispatch('filters/setStatus', {
                                value: false,
                                index: i
                            })
                        }
                    })
                })
                .then(async i => {
                    
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
        },
        components: {
            AppFilterButton,
            AppDeleteButton,
            AppPerPageButton,
            AppPaginatorsButtons,
            AppColumnsSelected
        },
        computed: {
            filters() {
                return this.$store.getters['filters/filters']
            },
            selectAll() {
                return this.$store.getters['columnsSelected/selectAll']
            },
            products() {
                return this.$store.getters['products/products']
            }
        }
    }
</script>

<style lang="sass">

    .filters
        display: flex
        margin-top: 17px
        align-items: center
        transition: all 1s
        width: max-content

    .sorting
        font-size: 14px
        font-family: 'Source Sans Pro SemiBold', sans-serif
        color: #3D374A
        margin-right: 4px
    
    .filters__button-container
        min-width: 600px
        display: flex
        align-items: center
    
    
</style>