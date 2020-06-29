<template>
    <div class="row-component"
        :class="{
            'row-component-ffff' : checkEven === 0,
            'row-components-F8F9FA' : checkEven === 1
        }"
    >
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
            :filters="filters"
        />
    </div>
</template>

<script>
    const AppColumn = () => import('./column.vue')
    const AppCheckbox = () => import('@@/components/Table-Components/filters/checkbox/index.vue')
    export default {
        mounted() {
            console.log(this.checkEven)
        },
        props: [
            'data',
            'filterSelect',
            'view',
            'globalIndex',
            'filters',
            'index'
        ],
        computed: {
            checkEven() {
                // if(this.index % 2) {
                //     console.log)(
                // }
                return this.index % 2
            }
        },
        methods: {
            async clickCheckbox() {
                await this.$store.dispatch('products/setViewProduct', {
                    index: this.globalIndex,
                    value: !this.view
                })
                await this.$store.dispatch('products/setViewProducts')
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
        cursor: pointer
        padding-left: 37px
    
    .row-component-ffff
        background-color: #FFFFFF
    
    .row-components-F8F9FA
        background-color: #F8F9FA
    
    .row-component:hover
        background: rgba(0, 161, 30, 0.07)
</style>