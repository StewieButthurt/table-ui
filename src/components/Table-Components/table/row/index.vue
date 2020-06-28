<template>
    <div class="row-component">
        <div style="margin-right: 29px">
            <app-checkbox 
                :view="view"
                @clickCheckbox="clickCheckbox"
            />
        </div>
        
        <app-column 
            v-for="(item, index) in filterSelect"
            :key="item.title"
            :index="index"
            :serverName="item.serverName"
            :data="data"
            :filterSelect="filterSelect"
        />
    </div>
</template>

<script>
    const AppColumn = () => import('./column.vue')
    const AppCheckbox = () => import('@@/components/Table-Components/filters/checkbox/index.vue')
    export default {
        props: [
            'data',
            'filterSelect',
            'view',
            'index'
        ],
        watch: {
            view(val) {
                console.log(val)
            }
        },
        methods: {
            async clickCheckbox() {
                this.$store.dispatch('products/setViewProduct', {
                    index: this.index,
                    value: !this.data.view
                })
            }
        },
        components: {
            AppColumn,
            AppCheckbox
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