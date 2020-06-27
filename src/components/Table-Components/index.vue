<template>
    <div class="container">

        <div class="title">
            Table UI
        </div>

        <div class="border" />

        <app-filters />

        <app-table />
        
    </div>
</template>

<script>
    const AppFilters = () => import('./filters/index.vue')
    const AppTable = () => import('./table/index.vue')
    export default {
        components: {
            AppFilters,
            AppTable
        }
    }
</script>

<style lang="sass">

    .container
        min-height: 600px
        margin: 0 auto
        width: 1366px
        padding-top: 32px
        padding-left: 113px
        padding-right: 113px
        user-select: none

    .title
        font-size: 32px
        font-family: 'Source Sans Pro SemiBold', sans-serif

    .border
        height: 1px
        background-color: #EDEDED
        margin-top: 16px

</style>