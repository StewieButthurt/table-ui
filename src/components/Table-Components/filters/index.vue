<template>
    <div class="filters">
        <div class="sorting">
            Sorting by:
        </div>
        <app-filter-button 
            v-for="item in filters"
            :key=item.title
            :title="item.title"
            :status="item.status"
            @clickButton="clickButton"
        />
        <app-delete-button />
        <app-per-page-button />
        <app-paginators-buttons />
    </div>
</template>

<script>
    const AppFilterButton = () => import('./filter-button/index.vue')
    const AppDeleteButton = () => import('./delete-button/index.vue')
    const AppPerPageButton = () => import('./per-page-button/index.vue')
    const AppPaginatorsButtons = () => import('./paginator-buttons/index.vue')

    export default {
        data() {
            return {
                filters: [
                    {
                        title: 'Product (100g serving)',
                        status: false
                    },
                    {
                        title: 'Calories',
                        status: false
                    },
                    {
                        title: 'Fat(g)',
                        status: false
                    },
                    {
                        title: 'Carbs(g)',
                        status: false
                    },
                    {
                        title: 'Protein(g)',
                        status: false
                    },
                    {
                        title: 'Iron(%)',
                        status: false
                    }
                ]
            }
        },
        methods: {
            async clickButton(title) {
                for(let i = 0; i < this.filters.length; i++) {
                    if(this.filters[i].title === title) {
                        this.filters[i].status = true
                    } else {
                        this.filters[i].status = false
                    }
                }
            }
        },
        components: {
            AppFilterButton,
            AppDeleteButton,
            AppPerPageButton,
            AppPaginatorsButtons
        }
    }
</script>

<style lang="sass">

    .filters
        display: flex
        margin-top: 17px
        align-items: center

    .sorting
        font-size: 14px
        font-family: 'Source Sans Pro SemiBold', sans-serif
        color: #3D374A
        margin-right: 4px
    
    
</style>