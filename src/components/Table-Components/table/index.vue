<template>
    <div class="table">
        <app-row-header />
        <app-row 
            v-for="(item, index) in list"
            :key="item.product"
            :index="index"
            :data="item"
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
        data() {
            return {
                list: [
                    {
                        product: 'Frozen Yogurt',
                        calories: 125,
                        fat: 224,
                        carbs: 486,
                        protein: 696,
                        iron: 536
                    }
                ]
            }
        },
        computed: {
            filterSelect() {
                this.$store.dispatch('setFilterSelect')
                return this.$store.getters['filterSelect']
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