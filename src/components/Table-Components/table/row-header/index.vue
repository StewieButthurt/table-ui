<template>
    <div class="row-header">
        <div style="margin-right: 30px">
            <app-checkbox
                :view="view"
                @clickCheckbox="clickCheckbox"
            />
        </div>
        
        <app-column-header 
            v-for="(item, index) in filterSelect"
            :key="item.title"
            :index="index"
            :title="item.title"
        />
    </div>
</template>

<script>
    const AppColumnHeader = () => import('./column-header.vue')
    const AppCheckbox = () => import('@@/components/Table-Components/filters/checkbox/index.vue')
    export default {
        data() {
            return {
                view: false
            }
        },
        props: [
            'filterSelect'
        ],
        components: {
            AppColumnHeader,
            AppCheckbox
        },
        methods: {
            async clickCheckbox() {
                this.view = !this.view
                await this.$store.dispatch('setViewAllProducts', this.view)
            }
        }
    }
</script>

<style lang="sass">
    .row-header
        display: flex
        align-items: center
        height: 50px
</style>