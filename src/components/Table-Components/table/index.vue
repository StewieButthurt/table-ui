<template>
    <div class="table">
        <app-row-header 
            :filterSelect="filterSelect"
            :filters="filters"
        />
        <app-row 
            v-for="(item, index) in viewProducts"
            :key="index"
            :globalIndex="item.globalIndex"
            :data="item"
            :index="index"
            :view="item.view"
            :filterSelect="filterSelect"
            :filters="filters"
        />
    </div>
</template>

<script>
    const AppRowHeader = () => import('./row-header/index.vue')
    const AppRow = () => import('./row/index.vue')
    export default {
        components: {
            AppRowHeader,
            AppRow
        },
        computed: {
            filterSelect() {
                this.$store.dispatch('filters/setFilterSelect')
                return this.$store.getters['filters/filterSelect']
            },
            viewProducts() {
                return this.$store.getters['products/viewProducts']
            },
            filters() {
                return this.$store.getters['filters/filters']
            }
        }
    }
</script>

<style lang="sass">
    .table
        width: 100%
        height: 547px
        margin-top: 20px
        border-radius: 4px
    
</style>