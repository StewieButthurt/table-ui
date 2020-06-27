<template>
    <div class="row-component">
        <!-- <app-column 
            v-for="(item, index) in filterSelect"
            :key="item.title"
            :index="index"
            :serverName="item.serverName"
            :data="data"
            :filterSelect="filterSelect"
        /> -->
    </div>
</template>

<script>
    const AppColumn = () => import('./column.vue')
    export default {
        props: [
            'data',
            'filterSelect'
        ],
        components: {
            AppColumn
        }
    }
</script>

<style lang="sass">
    .row-component
        display: flex
        align-items: center
        height: 49px
        width: 100%
</style>