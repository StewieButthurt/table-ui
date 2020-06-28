<template>
    <div class="table-header__column-name">
        {{title}}
    </div>
</template>

<script>
    export default {
        props: [
            'title'
        ]
    }
</script>

<style lang="sass">
    .table-header__column-name
        font-size: 14px
        font-family: 'Source Sans Pro SemiBold', sans-serif
        color: #282136
        width: 192px
</style>