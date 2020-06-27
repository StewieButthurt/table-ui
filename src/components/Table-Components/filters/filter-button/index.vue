<template>
    <div class="filters__button"
        @click="$emit('clickButton', title)"
        v-show="view"
        :class="{
            'hover-green' : checkStatus
        }"
    >
        {{title}}
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'status',
            'index',
            'view'
        ],
        computed: {
            checkStatus() {
                if(this.view) {
                    return this.status
                } else {
                    this.$store.dispatch('setStatus', {
                        index: this.index,
                        value: false
                    })
                    this.status = false
                    return false
                }
            }
        }
    }
</script>

<style lang="sass">

    .filters__button
        display: flex
        justify-content: center
        align-items: center
        padding-left: 8px
        padding-right: 8px
        height: 32px
        cursor: pointer
        border-radius: 2px
        user-select: none
        margin-left: 4px
        margin-right: 4px
        color: #3D374A
        border: 1px solid white

    .filters__button:hover
        background-color: #e8e8e8
        border: 1px solid #e8e8e8
    
    .hover-green,
    .hover-green:hover
        background-color: #00A11E
        color: #FFFFFF
        border: 1px solid #00A11E
</style>