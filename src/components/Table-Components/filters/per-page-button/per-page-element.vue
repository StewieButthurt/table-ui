<template>
    <div class="filters__per-page-element"
        @click="$emit('clickElement', title)"
    >
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
    .filters__per-page-element
        height: 32px
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
        color: #5B5E77
    
    .filters__per-page-element:hover
        background-color: #edecec
</style>