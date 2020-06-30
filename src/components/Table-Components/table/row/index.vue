<template>
    <div class="row-component"
        @mouseenter="enter = true"
        @mouseleave="enter = false"
        :class="{
            'row-component-ffff' : checkEven === 0,
            'row-components-F8F9FA' : checkEven === 1,
            'row-component-hover' : enter
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

        <app-delete-row 
            :globalIndex="globalIndex"
            :index="index"
            :rowEnter="enter"
            :statusButton="statusButton"
            @clickDelete="clickDelete"
            @clickCancelButton="clickCancelButton"
            @clickConfirmButton="clickConfirmButton"
        />
    </div>
</template>

<script>
    const AppColumn = () => import('./column.vue')
    const AppCheckbox = () => import('@@/components/Table-Components/filters/checkbox/index.vue')
    const AppDeleteRow = () => import('@@/components/Table-Components/table/row/delete.vue')
    export default {
        props: [
            'data',
            'filterSelect',
            'view',
            'globalIndex',
            'filters',
            'index',
            'title'
        ],
        data() {
            return{
                enter: false,
                statusButton: false,
                questionDelete: false
            }
        },
        computed: {
            checkEven() {
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
            },
            async clickDelete(index) {
                this.statusButton = true
            },
            async clickCancelButton({index, globalIndex}) {
                this.enter = false
                this.statusButton = false
            },
            async clickConfirmButton(index) {
                this.enter = false
                this.statusButton = false
                await this.$store.dispatch('products/deleteProduct', {
                    index: this.globalIndex,
                    title: this.title
                })
            }
        },
        components: {
            AppColumn,
            AppCheckbox,
            AppDeleteRow
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
    
    .row-component-hover
        background: rgba(0, 161, 30, 0.07)
</style>