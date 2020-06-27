<template>
    <div class="row-header">
        <app-checkbox
            :view="view"
            @clickCheckbox="clickCheckbox"
        />
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
        components: {
            AppColumnHeader,
            AppCheckbox
        },
        computed: {
            filterSelect() {
                this.$store.dispatch('setFilterSelect')
                return this.$store.getters['filterSelect']
            }
        },
        methods: {
            async clickCheckbox() {
                this.view = !this.view
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