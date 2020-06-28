<template>
    <div class="table">
        <app-row-header 
            :filterSelect="filterSelect"
        />
        <app-row 
            v-for="(item, index) in products"
            :key="item.product"
            :index="index"
            :data="item"
            :view="item.view"
            :filterSelect="filterSelect"
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
            products() {
                return this.$store.getters['products/products']
            }
        }
    }
</script>

<style lang="sass">
    .table
        padding-left: 37px
        width: 100%
        height: 547px
        margin-top: 20px
    
</style>