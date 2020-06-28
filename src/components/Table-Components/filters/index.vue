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
        <app-delete-button />
        <app-per-page-button />
        <app-paginators-buttons />
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
                for(let i = 0; i < this.filters.length; i++) {
                    if(this.filters[i].title === title) {
                        this.$store.dispatch('filters/setStatus', {
                            value: true,
                            index: i
                        })
                    } else {
                        this.$store.dispatch('filters/setStatus', {
                            value: false,
                            index: i
                        })
                    }
                }
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