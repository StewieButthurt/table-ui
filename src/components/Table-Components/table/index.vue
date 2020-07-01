<!-- компонент основной структуры таблицы -->
<template>
    <div class="table">
        <app-row-header 
            :filterSelect="filterSelect"
            :filters="filters"
        />
        <app-row 
            v-for="(item, index) in viewProducts"
            :key="index"
            :title="item.product"
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
            // при status === true в элементе массива,
            // ставит колонку на первое место и возвращает 
            // новый массив фильтров
            filterSelect() {
                this.$store.dispatch('filters/setFilterSelect')
                return this.$store.getters['filters/filterSelect']
            },
            // возвращает массив с продуктами с учетом пагинации
            viewProducts() {
                return this.$store.getters['products/viewProducts']
            },
            // возвращает оригинальный массив 
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