<template>
    <div class="row-component__column">
        {{val}}
    </div>
</template>

<script>
    export default {
        props: [
            'serverName',
            'data',
            'filterSelect'
        ],
        computed: {
            val() {
                return this.data[this.serverName]
            }
        }
    }
</script>

<style lang="sass">
    .row-component__column
        font-size: 14px
        font-family: 'Source Sans Pro Regular', sans-serif
        color: #282136
        width: 180px
        padding-right: 55px
        box-sizing: border-box
</style>