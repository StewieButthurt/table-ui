<template>
    <div class="table">
        <app-row-header 
            :filterSelect="filterSelect"
        />
        <app-row 
            v-for="(item, index) in viewProducts"
            :key="item.index"
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
            viewProducts() {
                return this.$store.getters['products/viewProducts']
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